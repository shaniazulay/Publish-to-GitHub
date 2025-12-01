import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 bg-[#F5F5F0] overflow-hidden relative">
      
      {/* Background Typography Art */}
      <div className="absolute top-20 left-0 w-full overflow-hidden select-none pointer-events-none opacity-[0.03]">
        <h1 className="text-[20rem] whitespace-nowrap font-display leading-none text-aya-charcoal">
          AYA DESIGN
        </h1>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-32">
          
          {/* Text Content - Left Aligned for Impact */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <span className="h-[1px] w-12 bg-aya-charcoal"></span>
                <span className="text-sm font-sans tracking-[0.2em] uppercase text-aya-stone">הסיפור שלי</span>
              </div>

              <h2 className="text-5xl lg:text-7xl font-display text-aya-charcoal mb-8 leading-[1.1]">
                עיצוב שנוגע <br/>
                <span className="italic text-aya-gold font-light">בנשמה.</span>
              </h2>
              
              <div className="font-sans text-lg lg:text-xl text-gray-600 font-light leading-relaxed space-y-6 pl-8 border-l border-aya-gold/30">
                <p>
                  נעים להכיר, אני איה.
                  <br/>
                  אני מאמינה שחלל הוא לא רק קירות ורהיטים, אלא השתקפות של מי שאנחנו. העבודה שלי היא לתרגם את הרגשות, החלומות ואורח החיים שלכם לשפה ויזואלית הרמונית.
                </p>
                <p>
                  הסגנון שלי נע על הציר שבין יוקרה מאופקת לבין חמימות טבעית. אני משלבת חומרים גולמיים עם גימורים מוקפדים, ויוצרת בתים שמרגישים כמו יצירת אמנות, אך מתפקדים כמרחב מחייה מושלם.
                </p>
              </div>

              <div className="mt-12 flex items-center gap-8">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_sample.svg" 
                  alt="Signature" 
                  className="h-12 opacity-60 mix-blend-multiply" 
                />
                <div className="h-12 w-[1px] bg-gray-300"></div>
                <div className="font-display italic text-aya-stone">
                  מייסדת ומעצבת ראשית
                </div>
              </div>
            </motion.div>
          </div>

          {/* Artistic Image Composition */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 relative">
            <motion.div 
              className="relative z-10"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              {/* Main Image Masked */}
              <div className="relative overflow-hidden rounded-t-full h-[600px] w-full max-w-md mx-auto shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1595514020180-8c24f9513380?q=80&w=1000&auto=format&fit=crop" 
                  alt="Aya Portrait" 
                  className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 hover:scale-105 transition-all duration-1000"
                />
                
                {/* Overlay Texture */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
              </div>

              {/* Floating Element */}
              <motion.div 
                className="absolute -bottom-10 -right-6 lg:-right-12 bg-white p-8 shadow-xl max-w-xs z-20"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <p className="font-display text-2xl text-aya-charcoal leading-snug">
                  "הבית הוא המקום שבו הסיפור שלכם מתחיל."
                </p>
              </motion.div>

              {/* Decorative Circle */}
              <div className="absolute top-10 -left-10 w-32 h-32 rounded-full border border-aya-gold/40 -z-10 animate-slow-spin"></div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;