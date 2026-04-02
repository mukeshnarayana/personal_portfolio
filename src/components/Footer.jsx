import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full glass-nav border-t-0 border-b-0 py-8 relative overflow-hidden mt-auto">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accentBlue to-transparent opacity-50" />
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center justify-center space-y-4">
        <h3 className="font-sora font-bold text-xl text-textPrimary tracking-widest">
          {portfolioData.personal.name} {portfolioData.personal.lastName}
        </h3>
        <p className="text-textMuted text-sm font-space opacity-80">
          Built with React & Tailwind CSS
        </p>
        <div className="flex space-x-6 mt-4">
          <a href={portfolioData.personal.social.github} target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-white transition-colors hover:shadow-[0_0_15px_rgba(0,212,255,1)] hover:scale-110 p-2 rounded-full">
            <Github size={20} />
          </a>
          <a href={portfolioData.personal.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-[#0077b5] transition-colors hover:shadow-[0_0_15px_rgba(0,119,181,0.5)] hover:scale-110 p-2 rounded-full">
            <Linkedin size={20} />
          </a>
          <a href={portfolioData.personal.social.twitter} target="_blank" rel="noopener noreferrer" className="text-textMuted hover:text-[#1DA1F2] transition-colors hover:shadow-[0_0_15px_rgba(29,161,242,0.5)] hover:scale-110 p-2 rounded-full">
            <Twitter size={20} />
          </a>
          <a href={portfolioData.personal.social.email} className="text-textMuted hover:text-[#EA4335] transition-colors hover:shadow-[0_0_15px_rgba(234,67,53,0.5)] hover:scale-110 p-2 rounded-full">
            <Mail size={20} />
          </a>
        </div>
        <p className="text-xs text-textMuted/60 pt-4">
          &copy; {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
