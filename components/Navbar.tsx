import React, { useState, useEffect } from 'react';
import { Ship, Menu, X } from 'lucide-react';
import { NAV_LINKS, APP_NAME } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-navy-900/90 backdrop-blur-md border-b border-navy-700 py-3 shadow-lg' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="p-2 bg-navy-800 rounded-lg group-hover:bg-teal-accent/10 transition-colors border border-navy-700 group-hover:border-teal-accent/50">
            <Ship className="w-6 h-6 text-teal-accent" />
          </div>
          <span className="font-heading font-bold text-slate-white text-lg tracking-wide uppercase">
            {APP_NAME}
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-light hover:text-teal-accent transition-colors tracking-wide"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#kontakty" 
            className="px-5 py-2 rounded-full border border-teal-accent text-teal-accent text-sm font-semibold hover:bg-teal-accent hover:text-navy-900 transition-all"
          >
            Связаться
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-navy-900/95 backdrop-blur-xl border-b border-navy-700 p-6 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-slate-white text-lg font-medium py-2 border-b border-navy-700/50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;