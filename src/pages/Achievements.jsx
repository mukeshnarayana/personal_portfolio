import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import SectionWrapper from '../components/SectionWrapper';
import { portfolioData } from '../data/portfolioData';
import { Trophy, Medal, Award, Calendar } from 'lucide-react';

export default function Achievements() {
  const { achievements } = portfolioData;

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <>
      <Helmet>
        <title>Achievements | {portfolioData.personal.name}</title>
      </Helmet>
      
      <SectionWrapper id="achievements" title="Achievements">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20 max-w-6xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {achievements.map((ach, index) => {
            const isTrophy = ach.title.toLowerCase().includes('first') || ach.title.toLowerCase().includes('winner');
            const Icon = isTrophy ? Trophy : ach.category.includes('Cert') ? Medal : Award;

            return (
              <motion.div 
                key={index}
                variants={item}
                className="glass-card p-8 flex flex-col hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(155,93,229,0.3)] transition-all duration-300 relative overflow-hidden group"
              >
                {/* Background Accent */}
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br from-accentViolet/20 to-accentBlue/5 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 rounded-full bg-accentViolet/10 flex flex-col items-center justify-center text-accentViolet mb-6 shadow-inner border border-accentViolet/30">
                    <Icon size={28} />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="font-sora font-bold text-xl text-textPrimary leading-snug mb-3">{ach.title}</h3>
                    <p className="font-medium text-accentBlue mb-2">{ach.org}</p>
                    <p className="text-sm text-textMuted line-clamp-4">{ach.description}</p>
                  </div>

                  <div className="mt-6 pt-6 border-t border-borderColor flex justify-between items-center text-xs font-bold uppercase tracking-widest text-textMuted">
                    <span className="flex items-center gap-2"><Calendar size={14}/> {ach.date}</span>
                    <span className="text-accentViolet bg-accentViolet/10 px-3 py-1 rounded-full">{ach.rank}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </SectionWrapper>
    </>
  );
}
