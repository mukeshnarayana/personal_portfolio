import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-16 h-8 flex items-center rounded-full p-1 transition-colors duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-accentBlue ${
        isDark ? 'bg-bgSecondary' : 'bg-gray-300'
      }`}
      aria-label="Toggle Dark Mode"
    >
      <div className="absolute inset-x-0 px-2 flex justify-between items-center pointer-events-none w-full">
        <Sun size={14} className="text-yellow-500" />
        <Moon size={14} className="text-blue-200" />
      </div>

      <motion.div
        className={`w-6 h-6 rounded-full shadow-md z-10 flex items-center justify-center ${
          isDark ? 'bg-accentBlue shadow-[0_0_10px_rgba(0,212,255,0.8)]' : 'bg-white'
        }`}
        layout
        initial={false}
        animate={{
          x: isDark ? 32 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
      >
        {isDark ? (
          <Moon size={12} className="text-white" />
        ) : (
          <Sun size={12} className="text-yellow-500" />
        )}
      </motion.div>
    </button>
  );
}
