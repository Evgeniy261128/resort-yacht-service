import React from 'react';
import { STEPS } from '../constants';
import { ChevronRight } from 'lucide-react';

const HowItWorks: React.FC = () => {
  return (
    <section className="py-24 bg-carbon">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-white mb-4">
            Процесс работы
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-navy-700 via-teal-accent/30 to-navy-700 z-0"></div>

          {STEPS.map((step, idx) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-2xl bg-navy-800 border border-navy-600 flex items-center justify-center mb-6 shadow-xl relative group hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute inset-0 bg-teal-accent/5 rounded-2xl"></div>
                <step.icon className="w-10 h-10 text-teal-accent" />
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-navy-900 border border-teal-accent text-teal-accent flex items-center justify-center font-bold text-sm">
                  {step.id}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-white mb-3">{step.title}</h3>
              <p className="text-slate-light text-sm max-w-xs">{step.description}</p>
              
              {idx < STEPS.length - 1 && (
                <div className="md:hidden mt-8 text-navy-700">
                  <ChevronRight size={32} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;