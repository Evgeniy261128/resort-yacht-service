import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="o-nas" className="py-24 bg-navy-900">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        
        {/* Image Side */}
        <div className="w-full md:w-1/2 relative">
          <div className="relative rounded-2xl overflow-hidden border border-navy-700 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1598918843936-e63d3f9e992b?q=80&w=1000&auto=format&fit=crop" 
              alt="Мастер восстанавливает корпус яхты — ремонт гелькоута, Санкт-Петербург" 
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-navy-900/30"></div>
          </div>
          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-teal-accent/10 rounded-full blur-2xl"></div>
          <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
        </div>

        {/* Text Side */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-white mb-6">
            О нас
          </h2>
          <p className="text-slate-light text-lg leading-relaxed mb-6">
            Мы — небольшая команда опытных мастеров, увлеченных своим делом. Наша цель — не просто ремонт, а возвращение вашему судну его первозданного вида.
          </p>
          <p className="text-slate-light leading-relaxed mb-8">
            Мы работаем с 2015 года и специализируемся на композитных материалах. Используем только сертифицированные морские грунты, краски и лаки от ведущих производителей.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Опыт работы >8 лет",
              "Сертифицированные материалы",
              "Выездной сервис",
              "Гарантия качества"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-teal-accent flex-shrink-0" />
                <span className="text-slate-200 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;