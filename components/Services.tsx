import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="uslugi" className="py-24 bg-carbon relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-white mb-4">
            Наши Услуги
          </h2>
          <div className="w-20 h-1 bg-teal-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px]">
          {SERVICES.map((service, idx) => (
            <div 
              key={service.id}
              className={`group relative p-8 rounded-2xl bg-navy-800/80 border border-slate-200/40 hover:border-navy-700 transition-all duration-300 hover:bg-navy-800/50 backdrop-blur-sm transform-gpu hover:scale-[1.02] hover:shadow-lg flex flex-col justify-between ${
                service.colSpan === 2 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="absolute top-0 right-0 p-30 opacity-20 group-hover:opacity-10 transition-opacity pointer-events-none">
                 {/* Decorative huge icon in background */}
                 <service.icon size={120} />
              </div>

              <div>
                <div className="w-12 h-12 rounded-lg bg-navy-900 border border-teal-accent flex items-center justify-center mb-6 group-hover:border-navy-700 group-hover:shadow-none shadow-[0_0_15px_rgba(100,255,218,0.2)] transition-all">
                  <service.icon className="w-6 h-6 text-teal-accent group-hover:text-slate-white" />
                </div>
                <h3 className="text-xl font-bold text-teal-accent mb-3 group-hover:text-slate-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-light leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="flex items-center text-teal-accent text-sm font-semibold opacity-100 group-hover:opacity-0 transition-opacity translate-y-0 group-hover:translate-y-2 duration-300">
                Подробнее &rarr;
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;