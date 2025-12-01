import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const servicesData = [
  {
    id: '01',
    title: 'תכנון ועיצוב',
    subtitle: 'Full Design',
    description: 'ליווי מקיף משלב הסקיצה הראשונה ועד לכניסה לבית. כולל תכניות עבודה, הדמיות ובחירת חומרים.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: '02',
    title: 'הום סטיילינג',
    subtitle: 'Home Styling',
    description: 'הלבשת הבית בדיוק וברגש. טקסטיל, אקססוריז, אמנות וריהוט שיוצרים את האווירה המושלמת.',
    image: 'https://images.unsplash.com/photo-1616137466211-f939a420be84?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: '03',
    title: 'שינויי דיירים',
    subtitle: 'Tenant Changes',
    description: 'התאמת דירת קבלן סטנדרטית לצרכים האישיים שלכם. מקסום הפוטנציאל עוד בשלב הנייר.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: '04',
    title: 'פגישות ייעוץ',
    subtitle: 'Consultation',
    description: 'סשן ממוקד לפתרון דילמות עיצוביות, בחירת גוונים ודיוק חללים ספציפיים בבית.',
    image: 'https://images.unsplash.com/photo-1556912173-3db996e7c3ac?q=80&w=1200&auto=format&fit=crop'
  }
];

const Services: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('01');

  return (
    <section id="services" className="py-32 bg-aya-charcoal text-white overflow-hidden">
      <div className="container mx-auto px-6">
        
        <motion.div 
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <span className="text-aya-gold font-sans tracking-[0.3em] uppercase text-sm block mb-3">מה אני עושה</span>
            <h2 className="text-5xl md:text-6xl font-display font-light text-white">
              השירותים שלי
            </h2>
          </div>
          <p className="text-gray-400 font-sans font-light max-w-sm text-lg">
            מעטפת מלאה של פתרונות עיצוב המותאמים אישית לצרכים, לתקציב ולחלומות שלכם.
          </p>
        </motion.div>

        {/* Vertical Accordion Stack for all screens */}
        <div className="flex flex-col h-[700px] gap-2">
          {servicesData.map((service) => (
            <motion.div
              key={service.id}
              layout
              onClick={() => setActiveId(service.id)}
              onMouseEnter={() => setActiveId(service.id)}
              className={`relative overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] rounded-sm group
                ${activeId === service.id ? 'flex-[3] opacity-100' : 'flex-[0.5] opacity-60 hover:opacity-100 bg-white/5'}
              `}
            >
              {/* Background Image (Only visible when active) */}
              <div className={`absolute inset-0 transition-opacity duration-700 ${activeId === service.id ? 'opacity-100' : 'opacity-0'}`}>
                 <div className="absolute inset-0 bg-black/50 z-10" /> {/* Overlay */}
                 <img 
                   src={service.image} 
                   alt={service.title} 
                   className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-1000"
                   style={{ objectPosition: 'center 40%' }}
                 />
              </div>

              {/* Collapsed State Content (Visible when NOT active) */}
              <div className={`absolute inset-0 flex items-center px-8 z-20 transition-opacity duration-300 ${activeId === service.id ? 'opacity-0' : 'opacity-100'}`}>
                 <span className="text-aya-gold font-mono text-lg mr-8 opacity-70">{service.id}</span>
                 <h3 className="text-2xl md:text-3xl font-display text-white tracking-wide">{service.title}</h3>
                 <div className="mr-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="text-aya-gold" />
                 </div>
              </div>

              {/* Expanded Content (Visible when Active) */}
              <div className={`absolute inset-0 p-8 md:p-12 z-30 flex flex-col justify-end transition-opacity duration-500 ${activeId === service.id ? 'opacity-100 delay-200' : 'opacity-0'}`}>
                
                <div className="transform transition-transform duration-500 translate-y-0 max-w-2xl">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-6xl font-display text-aya-gold/30">{service.id}</span>
                    <span className="text-sm font-sans tracking-widest uppercase text-gray-300">{service.subtitle}</span>
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl font-display text-white mb-6 leading-tight">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-200 font-sans font-light text-lg md:text-xl mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <button className="flex items-center gap-3 text-white border border-white/30 px-8 py-3 rounded-sm hover:bg-aya-gold hover:border-aya-gold transition-all group/btn w-fit backdrop-blur-sm">
                    <span className="text-sm font-medium tracking-wide">קרא עוד</span>
                    <ArrowUpRight size={18} className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </button>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;