import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet';
import SectionWrapper from '../components/SectionWrapper';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink, Github, CodeSquare } from 'lucide-react';

export default function Projects() {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <>
      <Helmet>
        <title>Projects | {portfolioData.personal.name}</title>
      </Helmet>
      
      <SectionWrapper id="projects" title="Projects">
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === cat 
                  ? 'bg-textPrimary text-bgPrimary shadow-glow' 
                  : 'bg-bgSecondary text-textMuted hover:text-textPrimary border border-transparent hover:border-borderColor'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.name + index}
                className="glass-card flex flex-col h-full overflow-hidden group hover:-translate-y-2 hover:shadow-glow"
              >
                {/* Image Placeholder */}
                <div className="relative w-full h-48 bg-gradient-to-br from-bgSecondary to-bgPrimary overflow-hidden border-b border-borderColor">
                  {project.image ? (
                    <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-bgSecondary group-hover:bg-borderColor transition-colors">
                      <CodeSquare size={48} className="text-textMuted group-hover:text-textPrimary group-hover:scale-110 transition-all duration-500" />
                    </div>
                  )}
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-6">
                    {project.live && project.live !== '#' && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform"><ExternalLink size={20}/></a>
                    )}
                    {project.github && project.github !== '#' && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-[#333] text-white rounded-full hover:scale-110 transition-transform"><Github size={20}/></a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-xs font-bold text-accentViolet uppercase tracking-wider mb-2">{project.category}</div>
                  <h3 className="font-sora font-bold text-xl text-textPrimary mb-3">{project.name}</h3>
                  <p className="text-sm text-textMuted line-clamp-3 mb-6 flex-grow">{project.description}</p>
                  
                  {/* Tech stack pills */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-2 py-1 text-xs font-medium rounded-md bg-bgSecondary border border-borderColor text-textPrimary">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </SectionWrapper>
    </>
  );
}
