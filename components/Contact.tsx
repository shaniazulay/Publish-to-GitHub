import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-aya-charcoal text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Info Side */}
          <motion.div 
            className="w-full lg:w-1/3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-aya-gold tracking-widest uppercase mb-2">דברו איתי</h2>
            <h3 className="text-4xl font-display font-light mb-8">בואו נתחיל פרויקט יחד</h3>
            <p className="text-gray-400 mb-10 font-light leading-relaxed">
              מוכנים להפוך את החלום למציאות? אשמח לשמוע על הפרויקט שלכם, להבין את הצרכים ולהתאים לכם את החבילה המושלמת.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-aya-gold">
                  <Phone size={20} />
                </div>
                <span>050-1234567</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-aya-gold">
                  <Mail size={20} />
                </div>
                <span>aya@design.co.il</span>
              </div>
              <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-aya-gold">
                  <MapPin size={20} />
                </div>
                <span>רוטשילד 10, תל אביב</span>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="#" className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:border-aya-gold hover:text-aya-gold hover:bg-white/5 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-600 rounded-full flex items-center justify-center text-gray-400 hover:border-aya-gold hover:text-aya-gold hover:bg-white/5 transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            className="w-full lg:w-2/3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <form 
              action="https://formspree.io/f/xjknrgyp" 
              method="POST" 
              className="bg-white/5 p-8 md:p-12 rounded-sm border border-white/10"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">שם מלא</label>
                  <input type="text" name="name" required className="w-full bg-transparent border-b border-gray-700 text-white p-2 focus:border-aya-gold focus:outline-none transition-colors" placeholder="ישראל ישראלי" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">טלפון</label>
                  <input type="tel" name="phone" required className="w-full bg-transparent border-b border-gray-700 text-white p-2 focus:border-aya-gold focus:outline-none transition-colors" placeholder="050-0000000" />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">סוג הפרויקט</label>
                <select name="project-type" className="w-full bg-transparent border-b border-gray-700 text-white p-2 focus:border-aya-gold focus:outline-none transition-colors [&>option]:text-aya-charcoal">
                  <option>עיצוב פנים מלא</option>
                  <option>הום סטיילינג</option>
                  <option>שינויי דיירים</option>
                  <option>שיפוץ</option>
                </select>
              </div>
              <div className="mb-8">
                <label className="block text-xs font-medium text-gray-400 mb-2 uppercase tracking-wide">הודעה</label>
                <textarea name="message" rows={4} className="w-full bg-transparent border-b border-gray-700 text-white p-2 focus:border-aya-gold focus:outline-none transition-colors" placeholder="ספר/י לי קצת על החלום שלך..."></textarea>
              </div>
              
              <button type="submit" className="w-full bg-aya-gold text-white py-4 font-medium tracking-widest uppercase hover:bg-white hover:text-aya-charcoal transition-all duration-300">
                שלח הודעה
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
