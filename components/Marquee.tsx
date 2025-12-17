import React from 'react';
import { YACHT_BRANDS } from '../constants';

const Marquee: React.FC = () => {
  return (
    <div className="w-full bg-navy-800/50 border-y border-navy-700 py-6 overflow-hidden relative z-20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex overflow-hidden mask-linear-fade relative">
         {/* Gradient masks for fading edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-navy-900 to-transparent"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-navy-900 to-transparent"></div>

        <div className="flex animate-scroll whitespace-nowrap">
          {/* Double the list for infinite scroll effect */}
          {[...YACHT_BRANDS, ...YACHT_BRANDS, ...YACHT_BRANDS].map((brand, index) => (
            <div 
              key={`${brand}-${index}`} 
              className="mx-8 md:mx-16 flex items-center justify-center"
            >
              <span className="text-2xl md:text-3xl font-heading font-bold text-navy-700 uppercase tracking-widest select-none hover:text-teal-accent/30 transition-colors cursor-default">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;