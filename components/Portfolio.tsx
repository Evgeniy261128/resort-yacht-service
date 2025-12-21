import React, { useState, useRef, useEffect } from 'react';
import { MoveHorizontal } from 'lucide-react';
import { PORTFOLIO_ITEMS } from '../constants';

const ImageComparison: React.FC<{ before: string; after: string; title: string; description: string }> = ({ 
  before, 
  after,
  title,
  description 
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isHovering, setIsHovering] = useState(false);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className="bg-navy-800/30 rounded-2xl border border-navy-700 overflow-hidden flex flex-col md:flex-row h-[500px] md:h-[400px]">
      
      {/* Image Container */}
      <div 
        className="relative w-full md:w-2/3 h-64 md:h-full cursor-col-resize group"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* After Image (Background) */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${after})` }}
          role="img"
          aria-label={`После: ${title} — результат ремонта корпуса яхты, Санкт-Петербург`}
        >
           <span className="absolute top-4 right-4 bg-navy-900/80 text-teal-accent px-3 py-1 text-xs font-bold rounded uppercase backdrop-blur-md">
            После
          </span>
        </div>

        {/* Before Image (Foreground - Clipped) */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center border-r-2 border-teal-accent shadow-[0_0_20px_rgba(0,0,0,0.5)]"
          style={{ 
            backgroundImage: `url(${before})`,
            width: `${sliderPosition}%` 
          }}
          role="img"
          aria-label={`До: ${title} — состояние корпуса яхты до ремонта, Санкт-Петербург`}
        >
          <span className="absolute top-4 left-4 bg-navy-900/80 text-slate-white px-3 py-1 text-xs font-bold rounded uppercase backdrop-blur-md">
            До
          </span>
        </div>

        {/* Slider Input Control */}
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={sliderPosition} 
          onChange={handleSliderChange}
          className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
        />

        {/* Handle Visual */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-transparent z-10 pointer-events-none flex items-center justify-center"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className={`w-8 h-8 bg-teal-accent rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 ${isHovering ? 'scale-110' : 'scale-100'}`}>
            <MoveHorizontal className="w-5 h-5 text-navy-900" />
          </div>
        </div>
      </div>

      {/* Info Content */}
      <div className="w-full md:w-1/3 p-6 md:p-8 flex flex-col justify-center bg-navy-800/40 backdrop-blur-sm">
        <h3 className="text-2xl font-heading font-bold text-slate-white mb-3">{title}</h3>
        <p className="text-slate-light text-sm leading-relaxed mb-6">{description}</p>
        <div className="mt-auto pt-4 border-t border-navy-700/50">
          <p className="text-xs text-slate-400 uppercase tracking-wider">Результат</p>
          <div className="flex items-center gap-2 mt-2">
            <div className="h-2 w-full bg-navy-700 rounded-full overflow-hidden">
              <div className="h-full bg-teal-accent w-[95%]"></div>
            </div>
            <span className="text-teal-accent font-bold text-sm">98%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  return (
    <section id="primery-rabot" className="py-24 bg-navy-900 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-slate-white mb-4">
            Доказательство качества
          </h2>
          <p className="text-slate-light max-w-2xl mx-auto">
            Используйте слайдер, чтобы оценить разницу между состоянием "До" и результатом нашей работы.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {PORTFOLIO_ITEMS.map((item) => (
            <ImageComparison 
              key={item.id}
              before={item.beforeImage}
              after={item.afterImage}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;