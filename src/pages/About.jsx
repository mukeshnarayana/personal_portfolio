import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import SectionWrapper from '../components/SectionWrapper';
import { portfolioData } from '../data/portfolioData';
import { MapPin, CheckCircle, Code, Server, Database, Terminal } from 'lucide-react';

export default function About() {
  const { personal } = portfolioData;

  const highlights = [
    { icon: <MapPin size={16} />, text: personal.location },
    { icon: <CheckCircle size={16} className="text-green-500" />, text: "Open to Opportunities" },
    { text: "1+ Years Experience" },
    { text: "50+ APIs Built" }
  ];

  const whatIDo = [
    { icon: <Server size={24} />, title: "Backend APIs", desc: "Building scalable and robust REST/GraphQL APIs with Node.js & Express." },
    { icon: <Database size={24} />, title: "Database Architecture", desc: "Designing efficient schemas and optimizing queries in MongoDB/SQL." },
    { icon: <Code size={24} />, title: "AI Integration", desc: "Integrating advanced OpenAI models and building intelligent chatbots." }
  ];

  return (
    <>
      <Helmet>
        <title>About | {personal.name}</title>
      </Helmet>
      
      <SectionWrapper id="about" title="About Me">
        <div className="flex flex-col items-center">
          
          {/* Bio & Highlights */}
          <div className="flex flex-col space-y-8 max-w-4xl w-full">
            <motion.div 
               className="space-y-4 text-textMuted text-lg leading-relaxed"
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
            >
              <p>
                {personal.bio.split('. ').map((s, i) => i === 0 ? s + '. ' : null)}
              </p>
              <p>
                {personal.bio.split('. ').slice(1).join('. ')}
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 glass-card px-4 py-2 text-sm text-textPrimary hover:border-accentBlue transition-colors">
                  {h.icon && <span className="text-textMuted">{h.icon}</span>}
                  <span className="font-medium">{h.text}</span>
                </div>
              ))}
            </motion.div>

            {/* What I Do */}
            <div className="pt-6 border-t border-borderColor/50">
              <h3 className="font-sora font-semibold text-2xl text-textPrimary mb-6">What I Do</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {whatIDo.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="glass-card p-6 flex flex-col hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(0,212,255,0.15)] group"
                  >
                    <div className="w-12 h-12 rounded-full bg-accentBlue/10 flex items-center justify-center text-accentBlue mb-4 group-hover:scale-110 group-hover:bg-accentBlue group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-textPrimary mb-2">{item.title}</h4>
                    <p className="text-sm text-textMuted line-clamp-3">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
          </div>
        </div>

        {/* Bottom philosophy card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-20 w-full glass-card p-8 md:p-12 text-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-accentBlue/5 to-accentViolet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          <p className="font-sora text-xl md:text-2xl lg:text-3xl text-gradient italic leading-relaxed z-10 relative">
             "I believe that scalable architecture and clean code are the foundations of any truly great digital product."
          </p>
        </motion.div>
      </SectionWrapper>
    </>
  );
}
