import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" 
          alt="Interior Design Background"
          className="w-full h-full object-cover"
        />
        {/* Stronger overlay to ensure text visibility */}
        <div className="absolute inset-0 bg-white/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/70 to-aya-cream" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="block text-aya-gold-dark font-sans font-semibold tracking-[0.2em] text-sm md:text-base mb-4 uppercase">
            עיצוב פנים & הום סטיילינג
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-display text-aya-charcoal mb-6 leading-none drop-shadow-sm"
        >
          לעצב חלום
          <br />
          <span className="text-6xl md:text-7xl lg:text-8xl block mt-2 opacity-90">למציאות חיה</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-10 font-sans font-light"
        >
          יצירת מרחבים הרמוניים המשלבים אסתטיקה עוצרת נשימה עם פונקציונליות חכמה, בהתאמה אישית מושלמת עבורכם.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <a
            href="#portfolio"
            className="px-8 py-3 bg-aya-charcoal text-white text-sm tracking-widest hover:bg-aya-gold transition-colors duration-300 rounded-sm shadow-lg hover:shadow-xl font-sans"
          >
            לצפייה בפרויקטים
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-aya-charcoal text-aya-charcoal text-sm tracking-widest hover:bg-white hover:border-aya-gold hover:text-aya-gold transition-colors duration-300 rounded-sm bg-white/50 backdrop-blur-sm font-sans"
          >
            תיאום פגישה
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-aya-charcoal"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown size={24} strokeWidth={1} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;