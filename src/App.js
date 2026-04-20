import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// MAIN COMPONENT
export default function NextGenAILabs() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="min-h-screen bg-[#050510] text-white font-sans selection:bg-blue-500/30">
      {/* 2026 Ethereal Background Components */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Navigation */}
      <nav className="relative z-50 flex justify-between items-center px-8 py-6 backdrop-blur-md border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg" />
          <span className="text-xl font-black tracking-tighter">AI-KIDS <span className="text-blue-400">LABS</span></span>
        </div>
        <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-400">
          <a href="#courses" className="hover:text-blue-400 transition">Curriculum</a>
          <a href="#" className="hover:text-blue-400 transition">For Parents</a>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-500 transition-all shadow-lg shadow-blue-600/20">
            Enroll Now
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32 px-8 flex flex-col lg:flex-row items-center max-w-7xl mx-auto gap-16">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:w-1/2 text-left"
        >
          <span className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] uppercase font-bold tracking-[0.2em] mb-6">
            Future-Proof Your Child's Education
          </span>
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9] bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent">
            Meet Your <br /> First AI <br /> Sidekick.
          </h1>
          <p className="text-gray-400 text-lg mb-10 max-w-lg leading-relaxed">
            The world's first agentic AI school for kids ages 8-12. We don't just teach coding—we teach <strong>Ethics, Prompting, and AI Orchestration.</strong>
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-white text-black font-bold rounded-2xl hover:scale-105 transition-transform">
              View Course Catalog
            </button>
            <button className="px-8 py-4 bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl font-bold hover:bg-white/10 transition">
              Meet the Robots
            </button>
          </div>
        </motion.div>

        {/* Character Image Area */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="lg:w-1/2 relative"
        >
          <div className="relative z-10 w-full aspect-square rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
            <img 
              src="http://googleusercontent.com/image_generation_content/0" 
              alt="AI Robot Assistant" 
              className="w-full h-full object-cover"
            />
            {/* Glassmorphism Overlay Card */}
            <div className="absolute bottom-6 left-6 right-6 p-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl">
              <p className="text-sm font-medium">"I'm Kiko! I'll be your guide through the AI Ethics Explorer course."</p>
            </div>
          </div>
          {/* Decorative Ring */}
          <div className="absolute -inset-4 border border-blue-500/20 rounded-[50px] animate-[spin_20s_linear_infinite]" />
        </motion.div>
      </section>

      {/* Featured Courses Section */}
      <section id="courses" className="relative z-10 px-8 max-w-7xl mx-auto py-24">
        <h2 className="text-4xl font-bold mb-12">Level Up the Future</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CourseCard 
            title="AI Ethics Explorer" 
            tag="Ages 8-12" 
            desc="Learn to build AI that is fair, safe, and helpful for the world."
            color="border-blue-500/30"
          />
          <CourseCard 
            title="Prompt Engineering" 
            tag="Ages 10-14" 
            desc="Master the art of talking to machines to create art, music, and code."
            color="border-purple-500/30"
            highlight={true}
          />
          <CourseCard 
            title="Robot Logic 101" 
            tag="Ages 7-9" 
            desc="The fundamentals of how AI brains work, built for young explorers."
            color="border-emerald-500/30"
          />
        </div>
      </section>

      {/* AI Chatbot Widget */}
      <div className="fixed bottom-8 right-8 z-[100]">
        <AnimatePresence>
          {showChat && (
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="mb-4 w-80 h-96 bg-[#0a0a20] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col backdrop-blur-2xl"
            >
              <div className="p-4 bg-blue-600 flex justify-between items-center">
                <span className="font-bold text-sm">Kiko Assistant</span>
                <button onClick={() => setShowChat(false)}>✕</button>
              </div>
              <div className="flex-1 p-4 text-xs text-gray-400 overflow-y-auto">
                <div className="bg-white/5 p-3 rounded-xl mb-2">Hello! I'm Kiko. Want to know more about our AI Ethics course?</div>
              </div>
              <div className="p-4 border-t border-white/5">
                <input type="text" placeholder="Ask Kiko anything..." className="w-full bg-white/5 border border-white/10 rounded-lg p-2 text-xs outline-none focus:border-blue-500" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <button 
          onClick={() => setShowChat(!showChat)}
          className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform active:scale-95"
        >
          <span className="text-2xl">🤖</span>
        </button>
      </div>
    </div>
  );
}

function CourseCard({ title, tag, desc, color, highlight = false }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className={`p-8 rounded-3xl backdrop-blur-md border ${color} ${highlight ? 'bg-white/10 shadow-2xl shadow-purple-500/10' : 'bg-white/5'}`}
    >
      <span className="text-[10px] font-black uppercase text-blue-400 tracking-widest">{tag}</span>
      <h3 className="text-2xl font-bold mt-2 mb-4">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-8">{desc}</p>
      <button className="text-xs font-bold hover:text-blue-400 transition flex items-center gap-2">
        LEARN MORE <span className="text-lg">→</span>
      </button>
    </motion.div>
  );
}
