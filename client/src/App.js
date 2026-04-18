import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import AiChatbotPage from './pages/AiChatbotPage';
import AutomationPage from './pages/AutomationPage';
import SaasDevelopmentPage from './pages/SaasDevelopmentPage';
import AiChatbotsSmallBusinessPage from './pages/blog/AiChatbotsSmallBusinessPage';
import AiAutomationEcommercePage from './pages/blog/AiAutomationEcommercePage';

function App() {
  return (
    <Router>
      <div className="bg-background text-white min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ai-chatbot" element={<AiChatbotPage />} />
          <Route path="/automation" element={<AutomationPage />} />
          <Route path="/saas-development" element={<SaasDevelopmentPage />} />
          <Route path="/blog/ai-chatbots-small-business" element={<AiChatbotsSmallBusinessPage />} />
          <Route path="/blog/ai-automation-ecommerce" element={<AiAutomationEcommercePage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
