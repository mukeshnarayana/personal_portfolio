import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ExternalLink, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { Helmet } from 'react-helmet';
import { portfolioData } from '../data/portfolioData';

export default function Home() {
  const { personal } = portfolioData;
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % personal.roles.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, [personal.roles.length]);

  return (
    <>
      <Helmet>
        <title>Home | {personal.name} {personal.lastName}</title>
        <meta name="description" content={personal.tagline} />
      </Helmet>
      
      <section className="min-h-[calc(100vh-80px)] w-full flex flex-col justify-center items-center py-10">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Left Side Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
          >
            <motion.p 
              className="text-textMuted tracking-widest font-mono text-sm uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              👋 Hello, I'm
            </motion.p>
            
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-syne font-black text-gradient leading-tight tracking-tight"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <span className="block">{personal.name}</span>
              <span className="block">{personal.lastName}</span>
            </motion.h1>

            <motion.div 
              className="text-xl md:text-3xl font-syne font-semibold text-textPrimary h-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.span
                key={roleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="absolute"
              >
                {personal.roles[roleIndex]}
              </motion.span>
            </motion.div>

            <motion.p 
              className="text-textMuted max-w-lg text-lg leading-relaxed mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              {personal.tagline}
            </motion.p>

            {/* Buttons */}
            <motion.div 
              className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start w-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <a 
                href="/projects" 
                className="group relative px-8 py-3 bg-transparent overflow-hidden rounded-full border border-accentBlue text-accentBlue hover:text-white transition-colors duration-300 font-medium"
              >
                <div className="absolute inset-0 w-0 bg-accentBlue transition-all duration-[250ms] ease-out group-hover:w-full z-[-1]"></div>
                 View My Work
              </a>
              <a 
                href={personal.resume}
                download
                className="flex items-center gap-2 group px-8 py-3 rounded-full border border-borderColor text-textPrimary hover:border-accentViolet hover:text-accentViolet transition-colors duration-300 font-medium glass-card shadow-[0_0_15px_rgba(155,93,229,0.0)] hover:shadow-[0_0_20px_rgba(155,93,229,0.3)]"
              >
                <Download size={18} className="transition-transform group-hover:-translate-y-1" />
                Resume
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div 
              className="flex gap-6 mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {Object.entries(personal.social).map(([platform, url], index) => {
                const Icon = platform === 'github' ? Github : platform === 'linkedin' ? Linkedin : platform === 'twitter' ? Twitter : Mail;
                return (
                  <a 
                    key={platform} 
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-borderColor text-textPrimary hover:bg-bgSecondary hover:text-accentBlue hover:border-accentBlue transition-all duration-300 hover:shadow-glow hover:-translate-y-1"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Side Photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, type: 'spring', stiffness: 100 }}
            className="flex justify-center items-center relative order-first lg:order-last mb-10 lg:mb-0"
          >
             {/* Gradient Orbs for background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accentBlue/20 rounded-full blur-[80px] -z-10 mix-blend-screen animate-pulse" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accentViolet/20 rounded-full blur-[80px] -z-10 mix-blend-screen animate-pulse" style={{ animationDelay: '1s'}} />

            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Rotating Dashed Border */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-accentBlue/50 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-[-10px] rounded-full border border-accentViolet/30 animate-[spin_15s_linear_reverse_infinite]" />
              
              {/* Image Container */}
              <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-bgSecondary shadow-[0_0_30px_rgba(0,212,255,0.3)] z-10 glass-card p-2 bg-transparent">
                <img 
                  src={personal.photo} 
                  alt={personal.name} 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

               {/* Orbiting Tech Chips */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-30px] rounded-full z-20 pointer-events-none"
              >
                <div className="absolute top-0 left-1/2 -ml-6 w-12 h-12 bg-bgCard backdrop-blur-md rounded-full border border-borderColor flex items-center justify-center shadow-lg" style={{ transform: 'rotate(-0deg)' }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" className="w-6 h-6 object-contain" alt="Nodejs" />
                </div>
                <div className="absolute bottom-0 left-1/2 -ml-6 w-12 h-12 bg-bgCard backdrop-blur-md rounded-full border border-borderColor flex items-center justify-center shadow-lg" style={{ transform: 'rotate(-180deg)' }}>
                   <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" className="w-8 h-8 object-contain" alt="Mongo" />
                </div>
              </motion.div>
              
               <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-60px] rounded-full z-0 pointer-events-none"
              >
                <div className="absolute left-0 top-1/2 -mt-6 w-12 h-12 bg-bgCard backdrop-blur-md rounded-full border border-borderColor flex items-center justify-center shadow-lg" style={{ transform: 'rotate(90deg)' }}>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" className="w-6 h-6 object-contain" alt="React" />
                </div>
                <div className="absolute right-0 top-1/2 -mt-6 w-12 h-12 bg-bgCard backdrop-blur-md rounded-full border border-borderColor flex items-center justify-center shadow-lg" style={{ transform: 'rotate(-90deg)' }}>
                   <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Database-icon.svg" className="w-6 h-6 object-contain invert dark:invert-0 opacity-70" alt="Database" />
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <span className="text-xs text-textMuted tracking-widest uppercase mb-4">Scroll to explore</span>
          <motion.div 
            className="w-[1px] h-12 bg-gradient-to-b from-accentBlue to-transparent"
            animate={{ height: ["0px", "48px", "0px"], y: [0, 24, 48] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </section>
    </>
  );
}
