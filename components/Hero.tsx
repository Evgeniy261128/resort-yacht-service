import React from 'react';
import { Camera } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=2000&auto=format&fit=crop" 
          alt="Luxury Yacht Hull" 
          className="w-full h-full object-cover"
        />
        {/* Lighter overlays to make the yacht visible */}
        <div className="absolute inset-0 bg-navy-900/30"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-navy-900/40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_40%,_#1B2B44_100%)] opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-navy-900/60 border border-teal-accent/20 backdrop-blur-md">
          <span className="text-teal-accent text-xs font-bold tracking-widest uppercase">
            Premium Yacht Service
          </span>
        </div>
        
        <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl text-slate-white mb-6 leading-tight drop-shadow-lg">
          Профессиональный ремонт <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-accent to-blue-400">
            корпусов яхт
          </span>
        </h1>
        
        <p className="text-slate-white text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium drop-shadow-md">
          Восстановление гелькоута, покраска, работа с карбоном. 
          Выездной сервис в Санкт-Петербурге и ЛО.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#kontakty"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-teal-accent text-navy-900 font-bold rounded-full transition-all hover:scale-105 shadow-[0_0_20px_rgba(100,255,218,0.3)] hover:shadow-[0_0_30px_rgba(100,255,218,0.5)]"
          >
            <span className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping opacity-20"></span>
            <Camera className="w-5 h-5" />
            Оценить по фото
          </a>
          
          <a 
            href="#uslugi"
            className="px-8 py-4 text-slate-white font-medium hover:text-teal-accent transition-colors bg-navy-900/40 backdrop-blur-sm rounded-full border border-white/10"
          >
            Смотреть услуги
          </a>
        </div>
      </div>

      {/* Decorative Grid Mesh */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-navy-900 to-transparent z-20"></div>
    </section>
  );
};

export default Hero;