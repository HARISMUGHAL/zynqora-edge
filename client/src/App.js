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
      <div className="relative bg-[#030712] text-white overflow-hidden min-h-screen">
        <div className="pointer-events-none absolute -top-40 -left-40 w-[500px] h-[500px] bg-blue-500/20 blur-[180px] rounded-full z-0"></div>
        <div className="pointer-events-none absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-purple-500/20 blur-[180px] rounded-full z-0"></div>
        <div className="relative z-10">
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
      </div>
    </Router>
  );
}

export default App;
