import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import SectionWrapper from '../components/SectionWrapper';
import { portfolioData } from '../data/portfolioData';
import { Calendar, MapPin, Award } from 'lucide-react';

export default function Education() {
  const { education } = portfolioData;

  return (
    <>
      <Helmet>
        <title>Education | {portfolioData.personal.name}</title>
      </Helmet>
      
      <SectionWrapper id="education" title="Education">
        <div className="relative w-full max-w-4xl mx-auto py-10">
          
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-accentBlue via-accentViolet to-transparent transform md:-translate-x-1/2 opacity-30 shadow-[0_0_15px_rgba(0,212,255,1)]" />

          {/* Timeline Items */}
          <div className="space-y-16">
            {education.map((edu, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                  className={`relative flex items-center w-full ${
                    isLeft ? 'md:justify-start' : 'md:justify-end'
                  }`}
                >
                  
                  {/* Glowing Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-accentBlue border-4 border-bgPrimary transform -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(0,212,255,1)] animate-pulse" />

                  {/* Card wrapper */}
                  <div className={`w-full ml-12 md:ml-0 md:w-[45%] ${
                    isLeft ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <div className="glass-card p-6 lg:p-8 hover:-translate-y-2 group">
                      
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-syne font-bold text-2xl text-textPrimary group-hover:text-accentBlue transition-colors">
                          {edu.institution}
                        </h3>
                        {edu.logo && (
                          <img src={edu.logo} alt={edu.institution} className="w-12 h-12 object-contain ml-4 rounded-full bg-white p-1" />
                        )}
                      </div>

                      <div className="space-y-3 mb-6">
                        <p className="font-syne text-lg text-accentViolet font-semibold">
                          {edu.degree} - {edu.field}
                        </p>

                        <div className="flex flex-wrap gap-4 text-sm font-medium text-textMuted">
                          <span className="flex items-center gap-1"><Calendar size={14}/> {edu.from} - {edu.to}</span>
                          <span className="flex items-center gap-1"><MapPin size={14}/> {edu.location}</span>
                        </div>
                      </div>

                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accentBlue/10 border border-accentBlue/20 text-accentBlue text-sm font-bold shadow-[0_0_10px_rgba(0,212,255,0.1)]">
                        <Award size={16} />
                        CGPA / Grade: {edu.cgpa}
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
