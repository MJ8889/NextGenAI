import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bot, Cpu, Target, Rocket, Star, Zap, Box, Presentation, Lightbulb, Wrench, Swords, Award, MessageCircle } from 'lucide-react';

export default function NextGenMakers() {
  const [showChat, setShowChat] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDFEFF] text-[#1E293B] font-sans selection:bg-blue-100 scroll-smooth">
      
      {/* 1. VIBRANT DECORATION */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] bg-[#00A3FF]/10 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] bg-[#C6FF5E]/20 blur-[120px] rounded-full" />
      </div>

      {/* 2. NAVIGATION */}
      <nav className="relative z-50 flex justify-between items-center px-10 py-6 backdrop-blur-xl border-b border-gray-100 bg-white/60 sticky top-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#00A3FF] rounded-xl flex items-center justify-center text-white font-black shadow-lg">NM</div>
          <span className="text-2xl font-black tracking-tighter text-[#1E293B]">NEXTGEN <span className="text-[#00A3FF]">MAKERS</span></span>
        </div>
        <div className="hidden lg:flex gap-8 text-[11px] font-black uppercase tracking-widest text-[#475569]">
          <a href="#methodology" className="hover:text-[#00A3FF] transition">Methodology</a>
          <a href="#space" className="hover:text-[#00A3FF] transition">Maker Space</a>
          <a href="#streams" className="hover:text-[#00A3FF] transition">Age Streams</a>
          <a href="#kits" className="hover:text-[#00A3FF] transition">Robot Kits</a>
          <a href="#confidence" className="hover:text-[#00A3FF] transition">Showcases</a>
          <button className="bg-[#FFD600] text-[#1E293B] px-6 py-2 rounded-full shadow-md hover:scale-105 transition-all border-b-4 border-yellow-600 active:border-b-0 ml-4">
            BOOK TRIAL
          </button>
        </div>
      </nav>

      {/* 3. HERO */}
      <header className="relative z-10 pt-20 pb-24 px-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="lg:w-1/2">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-50 text-[#00A3FF] text-[10px] font-black uppercase tracking-widest mb-8 border border-blue-100">
            <Star size={12} fill="currentColor" /> EMPOWERING YOUNG INNOVATORS
          </div>
          <h1 className="text-7xl md:text-8xl font-black mb-8 leading-[0.9] text-[#1E293B]">
            Don't just use AI. <br /> <span className="text-[#00A3FF]">Build it.</span>
          </h1>
          <p className="text-xl text-[#64748B] mb-10 leading-relaxed font-medium">
            We transform passive technology consumers into active creators. Join the premier Maker Space where children build real robots, code AI, and develop unshakable confidence.
          </p>
          <div className="flex gap-4">
            <a href="#streams" className="px-10 py-5 bg-[#00A3FF] text-white font-black rounded-3xl shadow-xl shadow-blue-500/20 hover:bg-blue-400 transition-all text-lg inline-block">
              Explore Programs
            </a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="lg:w-1/2 relative">
          <div className="bg-white/40 backdrop-blur-3xl p-4 rounded-[4rem] border-4 border-white shadow-2xl overflow-hidden">
            <img src="http:Gemini_Generated_Image_yvzz2jyvzz2jyvzz.png" alt="Makerspace Venue" className="rounded-[3rem] w-full aspect-[4/3] object-cover" />
          </div>
        </motion.div>
      </header>

      {/* 4. OUR METHODOLOGY */}
      <section id="methodology" className="py-24 px-10 bg-[#F8FAFC] relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-black text-[#1E293B] mb-4">Our Methodology</h2>
          <p className="text-xl text-[#64748B] mb-16 font-medium max-w-2xl mx-auto">A proven framework that turns abstract coding concepts into tangible, working hardware.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-10 right-10 h-2 bg-blue-100 -z-10 transform -translate-y-1/2 rounded-full"></div>
            
            <MethodCard 
              step="01" icon={<Lightbulb size={40} className="text-[#FFD600]" />} 
              title="THINK" color="bg-white border-[#FFD600]"
              desc="Brainstorming real-world problems. We map out the logic, design the algorithms, and plan the AI's 'brain' before writing a single line of code."
            />
            <MethodCard 
              step="02" icon={<Wrench size={40} className="text-[#00A3FF]" />} 
              title="BUILD" color="bg-white border-[#00A3FF]"
              desc="Hands-on construction. Students assemble circuits, solder components, and piece together the physical 'body' using 3D printed parts and hardware."
            />
            <MethodCard 
              step="03" icon={<Rocket size={40} className="text-[#A855F7]" />} 
              title="DEPLOY" color="bg-white border-[#A855F7]"
              desc="The moment of truth. We load the AI code into the hardware and stress-test the project in real-world scenarios to see it come alive."
            />
          </div>
        </div>
      </section>

      {/* 5. MAKER SPACE ENVIRONMENT */}
      <section id="space" className="py-32 px-10 bg-[#1E293B] text-white overflow-hidden relative rounded-[4rem] mx-4 z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-5xl font-black mb-6">The Authentic <br /><span className="text-[#C6FF5E]">Maker Space</span></h2>
            <p className="text-lg text-gray-300 mb-12">Not a traditional classroom. We designed an open-concept industrial environment built for rapid prototyping, collaboration, and high-energy testing.</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <VenueCard icon={<Zap className="text-[#C6FF5E]" />} title="The Robot Pit" desc="A secure, netted arena for testing rovers, drones, and battlebots." />
              <VenueCard icon={<Box className="text-[#C6FF5E]" />} title="Component Wall" desc="A massive library of sensors, microchips, and motors for custom builds." />
              <VenueCard icon={<Cpu className="text-[#C6FF5E]" />} title="Prototyping Hub" desc="Workstations equipped with 3D printers and anti-static mats." />
              <VenueCard icon={<Bot className="text-[#C6FF5E]" />} title="Collaboration Zone" desc="Whiteboard walls and round tables for team strategy and design." />
            </div>
          </div>
          <div className="lg:w-1/2">
             <div className="h-[600px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/10">
                <img src="http://googleusercontent.com/image_collection/image_retrieval/6141935021675517675" className="w-full h-full object-cover" alt="Kids in Maker Space" />
             </div>
          </div>
        </div>
      </section>

      {/* 6. AGE STREAMS & CURRICULUM */}
      <section id="streams" className="py-32 px-10 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-black text-[#1E293B]">Age Streams</h2>
          <p className="text-xl text-[#64748B] mt-4 font-medium">A progressive curriculum tailored to your child's developmental stage.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <CurriculumCard level="JUNIOR" age="Ages 6 - 8" color="border-blue-200" icon="🧱" 
            desc="Foundations of logic and mechanics. We use tactile LEGO Education sets and Scratch programming to introduce sequencing and loops through play." />
          <CurriculumCard level="EXPLORER" age="Ages 9 - 12" color="border-lime-400" icon="🔋" highlight
            desc="Integrating AI into hardware. Students build smart sorter bins and gesture rovers, learning how machines 'see' using computer vision." />
          <CurriculumCard level="INVENTOR" age="Ages 13+" color="border-purple-200" icon="🦾" 
            desc="The professional stack. Mastering Python, integrating OpenAI APIs, and engineering complex autonomous robots for advanced competitions." />
        </div>
      </section>

      {/* 7. ROBOT KITS & KIDZLABS */}
      <section id="kits" className="py-32 px-10 bg-[#F0F9FF] relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2 bg-white p-4 rounded-[4rem] shadow-2xl border-4 border-blue-50">
             <img src="http://googleusercontent.com/image_collection/image_retrieval/10406837666654528291" alt="Robot Kits" className="rounded-[3rem] w-full" />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-5xl font-black mb-6">Kidzlabs & <br/><span className="text-[#00A3FF]">Premium Robot Kits</span></h2>
            <p className="text-xl text-[#475569] leading-relaxed mb-10">
              We believe in <strong>Authentic Ownership</strong>. The learning doesn't stop when class ends because the projects go home with you.
            </p>
            <div className="space-y-6">
              <div className="flex gap-6 items-start p-6 bg-white rounded-3xl shadow-sm border border-blue-100">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-[#00A3FF] shrink-0"><Box size={28}/></div>
                <div>
                  <h4 className="font-black text-lg text-[#1E293B] mb-1">Proprietary Kidzlabs</h4>
                  <p className="text-[#64748B]">Custom-designed electronics kits built specifically for our curriculum. Build your own AI alarm clock or smart lamp to keep.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start p-6 bg-white rounded-3xl shadow-sm border border-blue-100">
                <div className="w-14 h-14 bg-lime-50 rounded-2xl flex items-center justify-center text-lime-600 shrink-0"><Cpu size={28}/></div>
                <div>
                  <h4 className="font-black text-lg text-[#1E293B] mb-1">Industry Standard Hardware</h4>
                  <p className="text-[#64748B]">We utilize top-tier platforms including LEGO Education, Arduino microcontrollers, and DJI Robomasters for advanced streams.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CONFIDENCE BUILDING */}
      <section id="confidence" className="py-32 px-10 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black text-[#1E293B]">Building <span className="text-[#A855F7]">Confidence</span></h2>
          <p className="text-xl text-[#64748B] mt-4 font-medium max-w-3xl mx-auto">Technical skills are only half the equation. We cultivate leaders who can present their ideas and perform under pressure.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-white p-10 rounded-[3rem] shadow-xl border-t-8 border-[#00A3FF]">
            <Presentation className="text-[#00A3FF] mb-6" size={48} />
            <h3 className="text-2xl font-black mb-4">Capstone Presentations</h3>
            <p className="text-[#64748B] leading-relaxed">At the end of every term, students step onto the stage to pitch their final project. They explain the problem they solved, the code logic they wrote, and their design process.</p>
          </div>

          <div className="bg-white p-10 rounded-[3rem] shadow-xl border-t-8 border-[#FFD600]">
            <Award className="text-[#FFB800]" size={48} />
            <h3 className="text-2xl font-black mb-4">Student Demonstrations</h3>
            <p className="text-[#64748B] leading-relaxed">Parents are invited to interactive demo days. Your child becomes the teacher, walking you through how their robot functions and demonstrating their newly acquired expertise.</p>
          </div>

          <div className="bg-white p-10 rounded-[3rem] shadow-xl border-t-8 border-[#EF4444]">
            <Swords className="text-[#EF4444] mb-6" size={48} />
            <h3 className="text-2xl font-black mb-4">Mini Battlebot Tournaments</h3>
            <p className="text-[#64748B] leading-relaxed">Friendly competition accelerates learning. Students design, reinforce, and pilot custom rovers in our arena to learn engineering resilience and good sportsmanship.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 px-10 border-t border-gray-100 bg-white text-center relative z-10">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-8 bg-[#00A3FF] rounded-lg" />
          <span className="text-xl font-black tracking-tighter">NEXTGEN MAKERS</span>
        </div>
        <p className="text-gray-400 font-medium mb-2">Preparing kids for the future, today. <br /> Singapore • Malaysia • Hong Kong</p>
        <div className="flex flex-col items-center gap-2 mt-6">
          <p className="text-[#1E293B] font-bold">Email: <a href="mailto:madhugjadhav@gmail.com" className="text-[#00A3FF] hover:underline">madhugjadhav@gmail.com</a></p>
          <p className="text-[#1E293B] font-bold">WhatsApp: <a href="https://wa.me/6598814023" target="_blank" rel="noopener noreferrer" className="text-[#25D366] hover:underline">+65 9881 4023</a></p>
        </div>
      </footer>

      {/* FLOATING WHATSAPP / CHAT WIDGET */}
      <div className="fixed bottom-8 right-8 z-[100]">
        <AnimatePresence>
          {showChat && (
            <motion.div 
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="mb-4 w-80 bg-white border border-gray-100 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col"
            >
              <div className="p-5 bg-[#00A3FF] text-white flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="bg-white/20 p-2 rounded-full">
                    <Bot size={20} />
                  </div>
                  <div>
                    <span className="font-bold block leading-tight">NextGen Assistant</span>
                    <span className="text-[10px] text-blue-100 uppercase tracking-wider">Online Now</span>
                  </div>
                </div>
                <button onClick={() => setShowChat(false)} className="hover:bg-white/20 p-2 rounded-full transition-colors">✕</button>
              </div>
              <div className="p-6 text-sm text-[#475569] bg-blue-50/30">
                <p className="mb-6 leading-relaxed">Hi there! 👋 Got questions about our curriculum, venues, or want to book a trial class?</p>
                <a 
                  href="https://wa.me/6598814023" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-4 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold rounded-2xl transition-all shadow-lg shadow-green-500/20 active:scale-95"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <button 
          onClick={() => setShowChat(!showChat)}
          className="w-16 h-16 bg-[#1E293B] hover:bg-[#00A3FF] text-white rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 ml-auto relative"
        >
          {/* Notification Dot */}
          {!showChat && <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 border-2 border-white rounded-full"></span>}
          <MessageCircle size={28} />
        </button>
      </div>

    </div>
  );
}

// COMPONENTS
const MethodCard = ({ step, icon, title, desc, color }) => (
  <motion.div whileHover={{ y: -10 }} className={`p-10 rounded-[3rem] border-4 shadow-xl z-10 relative ${color}`}>
    <div className="absolute -top-6 -left-6 w-14 h-14 bg-white border-4 border-gray-100 rounded-full flex items-center justify-center font-black text-gray-400 shadow-sm">{step}</div>
    <div className="flex justify-center mb-6">{icon}</div>
    <h3 className="text-2xl font-black mb-4 text-[#1E293B]">{title}</h3>
    <p className="text-[#64748B] leading-relaxed text-sm">{desc}</p>
  </motion.div>
);

const VenueCard = ({ icon, title, desc }) => (
  <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition">
    <div className="mb-4">{icon}</div>
    <h4 className="text-xl font-bold mb-2 text-[#C6FF5E]">{title}</h4>
    <p className="text-sm text-gray-300 leading-relaxed">{desc}</p>
  </div>
);

const CurriculumCard = ({ level, age, desc, color, icon, highlight = false }) => (
  <motion.div whileHover={{ y: -10 }} className={`p-10 rounded-[3rem] border-4 ${color} ${highlight ? 'bg-white shadow-2xl scale-105 z-20' : 'bg-gray-50/50 z-10'}`}>
    <div className="text-5xl mb-6">{icon}</div>
    <span className="text-[11px] font-black tracking-[0.2em] text-[#00A3FF]">{level}</span>
    <h3 className="text-3xl font-black mt-2 mb-4">{age}</h3>
    <p className="text-[#64748B] leading-relaxed">{desc}</p>
  </motion.div>
);
