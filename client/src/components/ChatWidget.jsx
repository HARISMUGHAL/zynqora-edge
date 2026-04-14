import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState(() => {
        return [{ 
            role: 'assistant', 
            content: "AI assistant is currently under development. It will be available soon." 
        }];
    });
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const scrollRef = useRef(null);

    const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

    useEffect(() => {
        // Limit history to 15 messages for performance
        const historyToSave = messages.slice(-15);
        localStorage.setItem('zynqora_chat_history', JSON.stringify(historyToSave));
        
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    const sendMessage = async (text) => {
        if (!text.trim() || isLoading) return;

        const newMessages = [...messages, { role: 'user', content: text }];
        setMessages(newMessages);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch(`${API_URL}/api/v1/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: text })
            });
            const data = await response.json();
            
            if (data.reply) {
                setMessages(prev => [...prev, { role: 'assistant', content: data.reply }]);
            } else {
                setMessages(prev => [...prev, { role: 'assistant', content: "We're looking into that — please try again or reach us directly on WhatsApp." }]);
            }
        } catch (error) {
            setMessages(prev => [...prev, { role: 'assistant', content: "Connection issue — please check your internet and try again." }]);
        } finally {
            setIsLoading(false);
        }
    };

    const QuickAction = ({ text }) => (
        <button 
            onClick={() => sendMessage(text)}
            className="text-[10px] font-bold uppercase tracking-widest px-3 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-primaryBase/20 hover:border-primaryBase/30 transition-all text-gray-400 hover:text-white"
        >
            {text}
        </button>
    );

    return (
        <div className="fixed bottom-8 right-8 z-[100] font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="absolute bottom-20 right-0 w-[380px] h-[550px] glass rounded-[2.5rem] border border-white/10 overflow-hidden flex flex-col shadow-2xl"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/10 flex items-center justify-between bg-white/5">
                            <div>
                                <div className="text-xs font-bold text-primaryBase uppercase tracking-widest mb-1">AI Consultant</div>
                                <div className="text-lg font-bold text-white tracking-tight">Zynqora Intelligence</div>
                            </div>
                            <div className="flex items-center gap-2">
                                {/* Clear Chat */}
                                <button
                                    onClick={() => {
                                        localStorage.removeItem('zynqora_chat_history');
                                        setMessages([{ role: 'assistant', content: "AI assistant is currently under development. It will be available soon." }]);
                                    }}
                                    title="Clear chat"
                                    className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors text-gray-500 hover:text-white"
                                >
                                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/>
                                    </svg>
                                </button>
                                {/* Close */}
                                <button onClick={() => setIsOpen(false)} className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white/10 transition-colors">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 5L5 15M5 5l10 10"/></svg>
                                </button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar">
                            {messages.map((m, i) => (
                                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                                        m.role === 'user' 
                                        ? 'bg-primaryBase/20 text-white rounded-tr-none border border-primaryBase/30' 
                                        : 'bg-white/5 text-gray-300 rounded-tl-none border border-white/10'
                                    }`}>
                                        {m.content}
                                    </div>
                                </div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-white/5 p-4 rounded-2xl rounded-tl-none border border-white/10 flex gap-1">
                                        <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1 }} className="w-1.5 h-1.5 rounded-full bg-primaryBase" />
                                        <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-primaryBase" />
                                        <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-primaryBase" />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Quick Actions */}
                        {messages.length < 5 && (
                            <div className="px-6 pb-2 flex flex-wrap gap-2">
                                <QuickAction text="I need a chatbot" />
                                <QuickAction text="Automate my business" />
                                <QuickAction text="Build SaaS" />
                            </div>
                        )}

                        {/* Conversion CTA */}
                        {messages.length >= 4 && (
                            <div className="px-6 pb-4">
                                <button 
                                    onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                                    className="w-full py-3 bg-gradient-to-r from-primaryBase to-secondaryBase text-white text-[10px] font-bold uppercase tracking-widest rounded-xl hover:scale-[1.02] transition-all"
                                >
                                    Book Free Consultation
                                </button>
                            </div>
                        )}

                        {/* Input Area */}
                        <div className="p-6 pt-2">
                            <form 
                                onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
                                className="relative flex items-center"
                            >
                                <input 
                                    type="text" 
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Type your message..."
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-6 pr-14 text-sm text-white focus:outline-none focus:border-primaryBase/50 transition-all font-medium"
                                />
                                <button 
                                    type="submit"
                                    disabled={!input.trim() || isLoading}
                                    className="absolute right-3 w-10 h-10 rounded-xl bg-primaryBase/20 text-primaryBase flex items-center justify-center hover:bg-primaryBase/30 disabled:opacity-0 transition-all"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                                </button>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-16 h-16 rounded-full bg-gradient-to-tr from-primaryBase to-secondaryBase border border-white/20 shadow-[-10px_10px_30px_rgba(30,144,255,0.3)] flex items-center justify-center text-white relative overflow-hidden group"
            >
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                    className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"
                />
                {isOpen ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
                ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                )}
            </motion.button>
        </div>
    );
};

export default ChatWidget;
