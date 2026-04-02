import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import SectionWrapper from '../components/SectionWrapper';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;
  const categories = Object.keys(skills);
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'bars'

  return (
    <>
      <Helmet>
        <title>Skills | {portfolioData.personal.name}</title>
      </Helmet>
      
      <SectionWrapper id="skills" title="Skills">
        <div className="max-w-5xl mx-auto flex flex-col pt-10 pb-20">
          
          {/* Top Controls */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
            
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 capitalize text-sm ${
                    activeCategory === cat 
                      ? 'bg-textPrimary text-bgPrimary shadow-glow' 
                      : 'glass-card bg-bgSecondary text-textPrimary hover:bg-textMuted/10 hover:text-textPrimary border-transparent'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Toggle Mode */}
            <div className="flex bg-bgCard backdrop-blur-sm border border-borderColor rounded-full p-1 shadow-inner relative z-10">
              <button 
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${viewMode === 'grid' ? 'bg-textPrimary text-bgPrimary shadow-glow' : 'text-textMuted hover:text-textPrimary'}`}
              >
                Grid View
              </button>
              <button 
                onClick={() => setViewMode('bars')}
                className={`px-4 py-2 rounded-full text-sm font-bold transition-colors ${viewMode === 'bars' ? 'bg-textPrimary text-bgPrimary shadow-glow' : 'text-textMuted hover:text-textPrimary'}`}
              >
                List View
              </button>
            </div>
          </div>

          {/* Content Area */}
          <div className="min-h-[400px] relative">
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeCategory + viewMode}
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -20 }}
                 transition={{ duration: 0.4 }}
               >
                 {viewMode === 'grid' ? (
                   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                     {skills[activeCategory].map((skill, index) => (
                       <motion.div
                         key={index}
                         initial={{ opacity: 0, scale: 0.8 }}
                         animate={{ opacity: 1, scale: 1 }}
                         transition={{ delay: index * 0.05 }}
                         className="glass-card aspect-square flex flex-col items-center justify-center p-4 hover:border-textPrimary hover:-translate-y-2 hover:shadow-glow group"
                       >
                         <div className="w-16 h-16 rounded-full bg-textMuted/10 flex items-center justify-center text-textPrimary border border-borderColor mb-4 font-bold text-2xl group-hover:bg-textPrimary group-hover:text-bgPrimary transition-all">
                           {skill.charAt(0)}
                         </div>
                         <p className="font-sora font-bold text-center text-sm group-hover:text-textPrimary">{skill}</p>
                       </motion.div>
                     ))}
                   </div>
                 ) : (
                   <div className="space-y-6 max-w-3xl mx-auto">
                     {skills[activeCategory].map((skill, index) => {
                       const percentage = Math.floor(Math.random() * 30) + 70; // Mock proficiency 70-100%
                       return (
                         <div key={index} className="w-full">
                           <div className="flex justify-between font-sora font-bold text-textPrimary mb-2">
                             <span>{skill}</span>
                             <span className="text-textMuted">{percentage}%</span>
                           </div>
                           <div className="w-full h-3 bg-bgSecondary rounded-full overflow-hidden border border-borderColor">
                             <motion.div 
                               initial={{ width: 0 }}
                               animate={{ width: `${percentage}%` }}
                               transition={{ duration: 1, delay: index * 0.1, ease: 'easeOut' }}
                               className="h-full bg-textPrimary rounded-full relative"
                             >
                               {/* Animated shine line */}
                                <motion.div 
                                  className="absolute top-0 bottom-0 left-0 right-0 w-[50px] bg-white/30 skew-x-[-20deg]"
                                  animate={{ x: ["-100%", "500%"] }}
                                  transition={{ duration: 2, repeat: Infinity, ease: 'linear', repeatDelay: 1 }}
                                />
                             </motion.div>
                           </div>
                         </div>
                       );
                     })}
                   </div>
                 )}
               </motion.div>
             </AnimatePresence>
          </div>
          
        </div>
      </SectionWrapper>
    </>
  );
}
