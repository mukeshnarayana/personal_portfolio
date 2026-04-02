import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 Lost in Space</title>
      </Helmet>
      
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center relative z-10 w-full py-20 pb-32">
        <motion.div 
          className="relative inline-block mb-8"
          initial={{ y: 0 }}
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <h1 className="text-8xl md:text-9xl font-sora font-black text-transparent bg-clip-text bg-gradient-to-br from-accentBlue via-white to-accentViolet opacity-20">
            404
          </h1>
          <motion.div 
            className="absolute top-1/2 left-1/2 w-32 h-32 md:w-48 md:h-48 rounded-full border border-accentBlue/30 bg-bgCard shadow-[0_0_15px_rgba(0,212,255,0.2)] flex items-center justify-center backdrop-blur-md"
            style={{ transform: 'translate(-50%, -50%)' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <div className="w-4 h-4 rounded-full bg-accentViolet animate-pulse absolute top-4 left-4" />
            <div className="w-2 h-2 rounded-full bg-accentBlue animate-pulse absolute bottom-8 right-8" />
          </motion.div>
        </motion.div>

        <h2 className="text-3xl md:text-5xl font-sora font-bold font-bold text-textPrimary tracking-tight mb-4">
          Lost in Space
        </h2>
        
        <p className="text-xl text-textMuted max-w-lg mx-auto mb-10 leading-relaxed font-space">
          The page you're searching for has drifted beyond the observable universe. Let's get you back on course.
        </p>

        <Link to="/" className="inline-flex flex-col items-center gap-2 group">
           <motion.div 
             className="w-16 h-16 rounded-full bg-accentBlue text-white flex items-center justify-center shadow-[0_0_20px_rgba(0,212,255,0.4)] group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(0,212,255,0.6)] group-hover:bg-white group-hover:text-accentBlue transition-all duration-300"
             whileHover={{ rotate: 90 }}
           >
             <Home size={28} />
           </motion.div>
           <span className="font-sora font-bold uppercase tracking-widest text-sm text-accentBlue group-hover:text-white transition-colors">Abort Mission</span>
        </Link>
      </div>
    </>
  );
}
