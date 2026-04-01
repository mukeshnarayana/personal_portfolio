import { motion } from 'framer-motion';

export default function SectionWrapper({ id, title, children, className = '' }) {
  return (
    <section id={id} className={`w-full max-w-7xl relative mx-auto py-20 px-4 sm:px-6 lg:px-8 mt-10 md:mt-24 overflow-hidden ${className}`}>
      {title && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16 flex flex-col items-center md:items-start"
        >
          <h2 className="text-3xl md:text-5xl font-syne font-bold uppercase tracking-wider text-gradient mb-4">
            {title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accentBlue to-accentViolet rounded-full relative">
            <div className="absolute inset-0 blur-sm bg-gradient-to-r from-accentBlue to-accentViolet opacity-50" />
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_10px_rgba(0,212,255,1)] animate-pulse-slow" />
          </div>
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        {children}
      </motion.div>
    </section>
  );
}
