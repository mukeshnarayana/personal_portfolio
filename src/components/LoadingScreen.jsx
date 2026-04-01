import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-bgPrimary"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [0.8, 1.2, 1], opacity: 1 }}
            transition={{ duration: 1, ease: "backOut" }}
            className="relative"
          >
            <h1 className="text-6xl md:text-8xl font-syne font-black text-gradient tracking-tighter">
              MNP
            </h1>
            <motion.div 
              className="absolute -inset-4 border-2 border-accentBlue rounded-full"
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              style={{ borderLeftColor: 'transparent', borderRightColor: 'transparent' }}
            />
             <motion.div 
              className="absolute -inset-8 border-2 border-accentViolet rounded-full opacity-50"
              animate={{ rotate: -360, scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              style={{ borderTopColor: 'transparent', borderBottomColor: 'transparent' }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
