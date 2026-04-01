import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import SectionWrapper from '../components/SectionWrapper';
import { portfolioData } from '../data/portfolioData';
import { Calendar, MapPin, Briefcase, ArrowRight } from 'lucide-react';

export default function Experience() {
  const { experience } = portfolioData;

  return (
    <>
      <Helmet>
        <title>Experience | {portfolioData.personal.name}</title>
      </Helmet>
      
      <SectionWrapper id="experience" title="Experience">
        <div className="relative w-full max-w-4xl mx-auto py-10">
          
          {/* Vertical Glowing Line (Left Aligned for Experience) */}
          <div className="absolute left-[20px] md:left-[30px] top-0 bottom-0 w-1 bg-gradient-to-b from-accentViolet via-accentBlue to-transparent opacity-30 shadow-[0_0_15px_rgba(155,93,229,1)]" />

          {/* Timeline Items */}
          <div className="space-y-16">
            {experience.map((exp, index) => {
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                  className={`relative flex flex-col md:flex-row items-start w-full pl-[60px] md:pl-[80px]`}
                >
                  
                  {/* Glowing Dot */}
                  <div className="absolute left-[13px] md:left-[23px] w-5 h-5 rounded-full bg-accentViolet border-4 border-bgPrimary z-10 shadow-[0_0_15px_rgba(155,93,229,1)] animate-[pulse_3s_ease-in-out_infinite]" />

                  {/* Card wrapper */}
                  <div className="glass-card p-6 lg:p-10 hover:-translate-y-2 group w-full relative overflow-hidden">
                    {/* Hover Glow Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-accentViolet/5 to-accentBlue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                        <div>
                          <h3 className="font-syne font-bold text-2xl text-textPrimary group-hover:text-accentViolet transition-colors">
                            {exp.role}
                          </h3>
                          <div className="mt-2 text-xl font-medium text-accentBlue">
                            {exp.company}
                          </div>
                        </div>

                        <div className="flex flex-col gap-2 text-sm text-textMuted font-medium top-0">
                          <span className="flex items-center gap-2"><Calendar size={14}/> {exp.from} - {exp.to}</span>
                          <span className="flex items-center gap-2"><MapPin size={14}/> {exp.location}</span>
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-md bg-accentViolet/10 border border-accentViolet/20 text-accentViolet text-xs font-bold uppercase tracking-wider">
                        <Briefcase size={12} />
                        {exp.type}
                      </div>

                      <ul className="space-y-4 mb-8">
                        {exp.points.map((point, i) => (
                          <li key={i} className="flex items-start text-textMuted leading-relaxed">
                            <span className="text-accentBlue mt-1 mr-3 flex-shrink-0"><ArrowRight size={16} /></span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech stack pills */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t, i) => (
                          <span key={i} className="px-3 py-1 text-xs font-medium rounded-full bg-bgSecondary border border-borderColor text-textPrimary hover:bg-accentBlue/10 hover:border-accentBlue/50 transition-colors">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </SectionWrapper>
    </>
  );
}
