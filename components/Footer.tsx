import React from 'react';
import { Ship, Send, Phone, Mail, MapPin } from 'lucide-react';
import { APP_NAME, NAV_LINKS, SOCIAL_LINKS, CONTACT_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="kontakty" className="bg-navy-950 border-t border-navy-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Pre-footer CTA */}
        <div className="bg-gradient-to-r from-teal-accent/20 to-blue-600/20 rounded-3xl p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 border border-teal-accent/20 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute inset-0 bg-navy-900/50 mix-blend-multiply"></div>
          <div className="relative z-10 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-slate-white mb-2">
              Готовы вернуть вашей яхте блеск?
            </h2>
            <p className="text-slate-light">
              Свяжитесь с нами сегодня для бесплатной консультации.
            </p>
          </div>
          <div className="relative z-10">
            <button className="bg-teal-accent text-navy-900 font-bold px-8 py-4 rounded-full hover:shadow-[0_0_20px_rgba(100,255,218,0.4)] transition-all flex items-center gap-2">
              <Send className="w-5 h-5" />
              Оценить стоимость
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-teal-accent rounded-lg text-navy-900">
                <Ship className="w-6 h-6" />
              </div>
              <span className="font-heading font-bold text-slate-white text-lg tracking-wide uppercase">
                {APP_NAME}
              </span>
            </a>
            <p className="text-slate-light text-sm leading-relaxed mb-6">
              Профессиональный сервис по ремонту и обслуживанию яхт премиум-класса в Санкт-Петербурге.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-heading font-bold text-slate-white mb-6">Навигация</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="text-slate-light hover:text-teal-accent transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h3 className="font-heading font-bold text-slate-white mb-6">Контакты</h3>
            <ul className="space-y-4 text-sm text-slate-light">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-teal-accent shrink-0" />
                <span>{CONTACT_INFO.phone}</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-teal-accent shrink-0" />
                <span>{CONTACT_INFO.email}</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-accent shrink-0" />
                <span>{CONTACT_INFO.address}</span>
              </li>
            </ul>
          </div>

          {/* Socials & Legal */}
          <div>
            <h3 className="font-heading font-bold text-slate-white mb-6">Мы в соцсетях</h3>
            <div className="flex gap-4 mb-8">
              {SOCIAL_LINKS.map(social => (
                <a 
                  key={social.name} 
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-navy-800 flex items-center justify-center text-slate-light hover:bg-teal-accent hover:text-navy-900 transition-all border border-navy-700 hover:border-teal-accent"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="text-xs text-slate-500">
              <p>ИП Иванов И.И.</p>
              <p>ОГРНИП 312345678900000</p>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-navy-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} {APP_NAME}. Все права защищены.</p>
          <p>Политика конфиденциальности</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;