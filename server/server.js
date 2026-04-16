const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Load env FIRST — before any other require that might read process.env
dotenv.config({ path: path.join(__dirname, '.env') });

const connectDB = require('./config/db');
const systemRoutes = require('./routes/systemRoutes');
const userRoutes = require('./routes/userRoutes');
const helmet = require('helmet');
const mongoSanitize = require('./middleware/mongoSanitize');
const morgan = require('morgan');

// ─── Validate critical environment variables at startup ───────────────────────
const REQUIRED_ENV = ['MONGO_URI', 'JWT_SECRET', 'EMAIL_USER', 'EMAIL_PASS'];
const missingEnv = REQUIRED_ENV.filter((key) => !process.env[key]);
if (missingEnv.length > 0) {
  console.warn(`⚠️ WARNING: Missing required environment variables: ${missingEnv.join(', ')}`);
  console.warn(`⚠️ Server will start but API features may fail gracefully.`);
}

const app = express();

// ─── 1. Request Logging ────────────────────────────────────────────────────────
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

// ─── 2. Security Headers (Helmet) ─────────────────────────────────────────────
app.use(helmet());
app.disable('x-powered-by');

// ─── 3. CORS ──────────────────────────────────────────────────────────────────
const allowedOrigins = [
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  "https://zynqoraedge.com",
  "https://www.zynqoraedge.com",
  "https://zynqora-edge.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      console.log("❌ CORS BLOCKED:", origin);
      return callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true
}));

app.options(/.*/, cors());

// ─── 4. Body Parser (10kb limit — prevents large payload attacks) ─────────────
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: false, limit: '10kb' }));

// ─── 5. Input Sanitization (NoSQL injection + XSS) ────────────────────────────
app.use(mongoSanitize);

// ─── 6. Static Files (Sitemap/Robots) & Root Route ──────────────────────────
app.use(express.static(path.join(__dirname, "../client/public")));

app.get("/", (req, res) => {
  res.status(200).send("Zynqora Edge API is running 🚀");
});

// ─── 7. Health Check (useful for uptime monitors / deployment platforms) ───────
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ─── 7. API Routes ────────────────────────────────────────────────────────────
app.use('/api/v1', systemRoutes);
app.use('/api/v1/users', userRoutes);

// Legacy fallback aliases
app.use('/api', systemRoutes);
app.use('/api/users', userRoutes);

// ─── 8. 404 Handler ───────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).json({ error: `Route ${req.method} ${req.originalUrl} not found` });
});

// ─── 9. Global Error Handler ──────────────────────────────────────────────────
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.error('Unhandled Express error:', err.stack || err.message);
  res.status(err.status || 500).json({ error: err.message || 'Internal Server Error' });
});

// ─── 10. Server Initialization ────────────────────────────────────────────────
const startServer = async () => {
  try {
    await connectDB();

    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`🚀 Zynqora Edge API running in [${process.env.NODE_ENV}] mode`);
      console.log(`📡 Listening on port ${PORT}`);
      console.log(`💚 Health check: http://localhost:${PORT}/health`);
    });
  } catch (error) {
    console.error('❌ FAILED TO START SERVER:', error.message);
    process.exit(1);
  }
};

// ─── 11. Process-level Safety Nets ────────────────────────────────────────────
process.on('unhandledRejection', (reason, promise) => {
  console.error('⚠️  Unhandled Promise Rejection:', reason);
  // Do NOT crash in production — just log it
});

process.on('uncaughtException', (err) => {
  console.error('💥 Uncaught Exception — shutting down safely:', err.message);
  process.exit(1);
});

startServer();
