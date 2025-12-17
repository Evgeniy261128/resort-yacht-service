import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '../constants';

const FAQItemComponent: React.FC<{ item: { question: string; answer: string }; isOpen: boolean; toggle: () => void }> = ({ 
  item, 
  isOpen, 
  toggle 
}) => {
  return (
    <div className="border-b border-navy-700">
      <button 
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
        onClick={toggle}
      >
        <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-teal-accent' : 'text-slate-white group-hover:text-teal-accent'}`}>
          {item.question}
        </span>
        <div className={`p-1 rounded-full border transition-all ${isOpen ? 'border-teal-accent bg-teal-accent text-navy-900' : 'border-navy-600 text-slate-400'}`}>
          {isOpen ? <Minus size={16} /> : <Plus size={16} />}
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-slate-light leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-carbon">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-white mb-4">
            Частые вопросы
          </h2>
        </div>

        <div className="bg-navy-800/50 backdrop-blur-sm rounded-2xl border border-navy-700 p-6 md:p-10 shadow-lg">
          {FAQ_ITEMS.map((item, idx) => (
            <FAQItemComponent 
              key={idx} 
              item={item} 
              isOpen={openIndex === idx} 
              toggle={() => setOpenIndex(openIndex === idx ? null : idx)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;