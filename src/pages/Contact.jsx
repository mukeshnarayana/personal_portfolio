import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import SectionWrapper from '../components/SectionWrapper';
import { portfolioData } from '../data/portfolioData';
import { Mail, Phone, MapPin, Linkedin, Github, CheckCircle, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const { contact, personal } = portfolioData;
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const contactCards = [
    { icon: <Mail size={24} />, title: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: <Phone size={24} />, title: "Phone", value: contact.phone, href: `tel:${contact.phone}` },
    { icon: <MapPin size={24} />, title: "Location", value: contact.location, href: null }
  ];

  return (
    <>
      <Helmet>
        <title>Contact | {personal.name}</title>
      </Helmet>
      
      <SectionWrapper id="contact" title="Get In Touch">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-6xl mx-auto pb-20">
          
          {/* Left Side: Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-8"
          >
            <p className="text-xl text-textMuted font-dm leading-relaxed">
              Whether you have a project, an opportunity, or just want to say hi — my inbox is always open. Let's build something amazing together!
            </p>

            {contact.availability && (
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/10 text-green-500 text-sm font-bold w-fit shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Open to Opportunities
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 pt-6 border-t border-borderColor">
              {contactCards.map((card, i) => (
                card.href ? (
                  <a key={i} href={card.href} className="flex items-center gap-4 glass-card p-4 hover:border-accentBlue group hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,212,255,0.2)]">
                    <div className="p-3 rounded-full bg-accentBlue/10 text-accentBlue group-hover:bg-accentBlue group-hover:text-white transition-colors">
                      {card.icon}
                    </div>
                    <div>
                      <p className="text-sm text-textMuted uppercase font-bold tracking-widest">{card.title}</p>
                      <p className="text-textPrimary font-syne font-medium mt-1">{card.value}</p>
                    </div>
                  </a>
                ) : (
                  <div key={i} className="flex items-center gap-4 glass-card p-4">
                    <div className="p-3 rounded-full bg-accentViolet/10 text-accentViolet">
                      {card.icon}
                    </div>
                    <div>
                      <p className="text-sm text-textMuted uppercase font-bold tracking-widest">{card.title}</p>
                      <p className="text-textPrimary font-syne font-medium mt-1">{card.value}</p>
                    </div>
                  </div>
                )
              ))}
            </div>
            
            <div className="flex gap-4 pt-4">
              <a href={personal.social.github} target="_blank" rel="noopener noreferrer" className="p-4 glass-card hover:bg-bgSecondary hover:text-white group border border-borderColor hover:border-[#333] hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                <Github size={24} className="group-hover:scale-110 transition-transform"/>
              </a>
              <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-4 glass-card hover:bg-[#0077b5]/10 group border border-borderColor hover:border-[#0077b5] text-textPrimary hover:text-[#0077b5] hover:shadow-[0_0_15px_rgba(0,119,181,0.3)]">
                <Linkedin size={24} className="group-hover:scale-110 transition-transform"/>
              </a>
            </div>

          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 md:p-10 space-y-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accentBlue/5 rounded-full blur-[80px] -z-10 group-hover:bg-accentBlue/10 transition-colors duration-700" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accentViolet/5 rounded-full blur-[80px] -z-10 group-hover:bg-accentViolet/10 transition-colors duration-700" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 z-10 relative">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-textPrimary font-syne uppercase tracking-wider">Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-bgSecondary border border-borderColor rounded-lg px-4 py-3 text-textPrimary focus:outline-none focus:border-accentBlue focus:ring-1 focus:ring-accentBlue transition-colors font-dm" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-textPrimary font-syne uppercase tracking-wider">Email</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-bgSecondary border border-borderColor rounded-lg px-4 py-3 text-textPrimary focus:outline-none focus:border-accentBlue focus:ring-1 focus:ring-accentBlue transition-colors font-dm" placeholder="john@example.com" />
                </div>
              </div>

              <div className="space-y-2 relative z-10">
                <label htmlFor="subject" className="text-sm font-bold text-textPrimary font-syne uppercase tracking-wider">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full bg-bgSecondary border border-borderColor rounded-lg px-4 py-3 text-textPrimary focus:outline-none focus:border-accentViolet focus:ring-1 focus:ring-accentViolet transition-colors font-dm" placeholder="Project Inquiry" />
              </div>

              <div className="space-y-2 relative z-10">
                <label htmlFor="message" className="text-sm font-bold text-textPrimary font-syne uppercase tracking-wider">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full bg-bgSecondary border border-borderColor rounded-lg px-4 py-3 text-textPrimary focus:outline-none focus:border-accentBlue focus:ring-1 focus:ring-accentBlue transition-colors font-dm resize-none" placeholder="Hello..." />
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading' || status === 'success'}
                className="w-full py-4 rounded-lg bg-gradient-to-r from-accentBlue to-accentViolet text-white font-syne font-bold text-lg hover:shadow-[0_0_20px_rgba(0,212,255,0.6)] hover:scale-[1.02] transition-all disabled:opacity-70 disabled:hover:scale-100 disabled:hover:shadow-none flex items-center justify-center gap-2 relative z-10"
              >
                {status === 'idle' && <><Send size={20} /> Send Message</>}
                {status === 'loading' && <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full" />}
                {status === 'success' && <><CheckCircle size={20} /> Sent Successfully!</>}
              </button>
            </form>
          </motion.div>

        </div>
      </SectionWrapper>
    </>
  );
}
