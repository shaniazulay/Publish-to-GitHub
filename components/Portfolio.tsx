import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../types';
import { Plus } from 'lucide-react';

const projects: Project[] = [
  { id: 1, title: 'פנטהאוז בתל אביב', category: 'יוקרה', description: 'עיצוב מודרני ונקי עם נגיעות חמות', imageUrl: 'https://picsum.photos/800/600?random=10' },
  { id: 2, title: 'וילה בקיסריה', category: 'פרטי', description: 'סגנון כפרי לייט עם חללים פתוחים', imageUrl: 'https://picsum.photos/800/800?random=11' },
  { id: 3, title: 'דירת גן בשרון', category: 'משפחה', description: 'שילוב מושלם בין חוץ לפנים', imageUrl: 'https://picsum.photos/600/800?random=12' },
  { id: 4, title: 'משרדי הייטק', category: 'מסחרי', description: 'עיצוב מעורר השראה ויצירתיות', imageUrl: 'https://picsum.photos/800/600?random=13' },
  { id: 5, title: 'לופט אורבני', category: 'יוקרה', description: 'שימור המבנה המקורי עם טוויסט תעשייתי', imageUrl: 'https://picsum.photos/800/800?random=14' },
  { id: 6, title: 'דירת נופש', category: 'פרטי', description: 'רוגע ושלווה מול הים', imageUrl: 'https://picsum.photos/800/600?random=15' },
];

const categories = ['הכל', 'יוקרה', 'פרטי', 'מסחרי', 'משפחה'];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('הכל');

  const filteredProjects = filter === 'הכל' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold text-aya-gold tracking-widest uppercase mb-2">תיק עבודות</h2>
            <h3 className="text-4xl font-light text-aya-charcoal">פרויקטים נבחרים</h3>
          </motion.div>

          <motion.div 
            className="flex flex-wrap gap-4 mt-6 md:mt-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-sm px-4 py-2 rounded-full transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-aya-charcoal text-white shadow-md' 
                    : 'bg-gray-100 text-aya-stone hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative cursor-pointer overflow-hidden aspect-[4/5] or aspect-video"
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-aya-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <h4 className="text-2xl text-white font-light mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                    {project.title}
                  </h4>
                  <p className="text-aya-sand text-sm mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150">
                    {project.category}
                  </p>
                  <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white hover:text-aya-charcoal transition-colors duration-300 transform scale-0 group-hover:scale-100 delay-200">
                    <Plus size={20} />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-16">
          <a href="#" className="inline-block border-b border-aya-gold text-aya-charcoal hover:text-aya-gold transition-colors pb-1 text-sm font-medium tracking-wide">
            צפה בכל הפרויקטים
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
