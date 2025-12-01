import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'מיכל ורוני',
    role: 'רמת השרון',
    content: 'איה ידעה לקחת את החלומות המפוזרים שלנו ולהפוך אותם לבית שתמיד רצינו. הדיוק, הסבלנות והטעם המשובח שלה מורגשים בכל פינה.',
    avatarUrl: 'https://picsum.photos/100/100?random=20'
  },
  {
    id: 2,
    name: 'דניאל כהן',
    role: 'תל אביב',
    content: 'מקצועיות ברמה הגבוהה ביותר. איה ליוותה אותנו בשיפוץ מקיף והפכה את התהליך לחוויה נעימה ומרגשת. התוצאה פשוט וואו.',
    avatarUrl: 'https://picsum.photos/100/100?random=21'
  },
  {
    id: 3,
    name: 'שרה לוי',
    role: 'הרצליה פיתוח',
    content: 'חיפשתי מעצבת שתדע לשלב יוקרה עם חמימות משפחתית, ואיה קלעה בול. הטאץ׳ שלה ייחודי והיא יורדת לפרטים הכי קטנים.',
    avatarUrl: 'https://picsum.photos/100/100?random=22'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-aya-sand/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
           <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="inline-block p-4 rounded-full bg-white shadow-sm mb-6 text-aya-gold"
           >
             <Quote size={32} />
           </motion.div>
          <h2 className="text-3xl md:text-4xl font-light text-aya-charcoal mb-4">מילים חמות מהלקוחות</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              className="bg-white p-8 rounded-sm shadow-sm relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={item.avatarUrl} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-aya-sand"
                />
                <div>
                  <h4 className="font-bold text-aya-charcoal">{item.name}</h4>
                  <p className="text-xs text-aya-gold font-medium uppercase tracking-wider">{item.role}</p>
                </div>
              </div>
              <p className="text-aya-stone font-light italic leading-relaxed">
                "{item.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
