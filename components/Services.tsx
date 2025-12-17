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
              className={`group relative p-8 rounded-2xl bg-navy-800/50 border border-navy-700 hover:border-teal-accent/50 transition-all duration-300 hover:bg-navy-800/80 backdrop-blur-sm flex flex-col justify-between ${
                service.colSpan === 2 ? 'md:col-span-2' : ''
              }`}
            >
              <div className="absolute top-0 right-0 p-30 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none">
                 {/* Decorative huge icon in background */}
                 <service.icon size={120} />
              </div>

              <div>
                <div className="w-12 h-12 rounded-lg bg-navy-900 border border-navy-700 flex items-center justify-center mb-6 group-hover:border-teal-accent group-hover:shadow-[0_0_15px_rgba(100,255,218,0.2)] transition-all">
                  <service.icon className="w-6 h-6 text-teal-accent" />
                </div>
                <h3 className="text-xl font-bold text-slate-white mb-3 group-hover:text-teal-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-light leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="flex items-center text-teal-accent text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
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