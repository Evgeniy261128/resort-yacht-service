import { 
  Anchor, 
  PaintBucket, 
  Layers, 
  ShieldCheck, 
  Camera, 
  FileText, 
  Truck,
  Instagram,
  Facebook,
  Twitter
} from 'lucide-react';
import { NavLink, ServiceItem, PortfolioItem, StepItem, FAQItem, SocialLink } from './types';

export const APP_NAME = "Resort Yacht Service";

export const NAV_LINKS: NavLink[] = [
  { name: "Услуги", href: "#uslugi" },
  { name: "Примеры работ", href: "#primery-rabot" },
  { name: "О нас", href: "#o-nas" },
  { name: "Контакты", href: "#kontakty" },
];

export const YACHT_BRANDS = [
  "SUNSEEKER", "AZIMUT", "PRINCESS", "RIVA", "BENETEAU", "FERRETTI", "FAIRLINE", "SEARAY"
];

export const SERVICES: ServiceItem[] = [
  {
    id: 's1',
    title: "Полировка и защита",
    description: "Многоступенчатая полировка и нанесение керамических покрытий для защиты от соленой воды.",
    icon: ShieldCheck,
    colSpan: 2
  },
  {
    id: 's2',
    title: "Покраска и ремонт",
    description: "Локальный ремонт сколов, царапин и полная перекраска корпуса.",
    icon: PaintBucket,
    colSpan: 1
  },
  {
    id: 's3',
    title: "Ремонт карбона",
    description: "Профессиональное восстановление и изготовление карбоновых элементов интерьера и экстерьера.",
    icon: Layers,
    colSpan: 1
  },
  {
    id: 's4',
    title: "Восстановление гелькоута",
    description: "Устранение осмоса, трещин и возвращение заводского глянца.",
    icon: Anchor,
    colSpan: 2
  },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'p1',
    title: "Azimut 60: Устранение глубокой царапины",
    description: "Восстановление геометрии борта и локальная покраска с переходом. Срок: 3 дня.",
    beforeImage: "https://images.unsplash.com/photo-1605281317010-fe5ffe79ba02?q=80&w=800&auto=format&fit=crop", // Darker/messy texture
    afterImage: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?q=80&w=800&auto=format&fit=crop" // Clean white yacht hull
  },
  {
    id: 'p2',
    title: "Sunseeker: Полная полировка",
    description: "Удаление известкового налета и нанесение 3 слоев керамики.",
    beforeImage: "https://images.unsplash.com/photo-1621685710667-0c7f7637840c?q=80&w=800&auto=format&fit=crop", // Older looking boat surface
    afterImage: "https://images.unsplash.com/photo-1569263979104-865ab7cd8d13?q=80&w=800&auto=format&fit=crop" // Shiny sleek hull
  },
  {
    id: 'p3',
    title: "Ремонт карбоновой мачты",
    description: "Структурный ремонт карбонового волокна с сохранением рисунка плетения.",
    beforeImage: "https://images.unsplash.com/photo-1612631570183-424699508a73?q=80&w=800&auto=format&fit=crop", // Textured/Rough
    afterImage: "https://images.unsplash.com/photo-1622359526786-89689f41b9d4?q=80&w=800&auto=format&fit=crop" // Clean surface
  }
];

export const STEPS: StepItem[] = [
  {
    id: 1,
    title: "Отправьте фото",
    description: "Сделайте несколько снимков повреждения или судна и отправьте нам в мессенджер.",
    icon: Camera
  },
  {
    id: 2,
    title: "Оценка и смета",
    description: "Мы рассчитаем стоимость работ и материалов, и согласуем удобное время.",
    icon: FileText
  },
  {
    id: 3,
    title: "Выезд команды",
    description: "Наши мастера приезжают в яхт-клуб и проводят ремонт на месте.",
    icon: Truck
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Сколько времени занимает ремонт?",
    answer: "Небольшие повреждения (сколы, царапины) устраняются за 1-2 дня. Полная полировка судна 40-50 футов занимает 3-5 дней в зависимости от состояния корпуса."
  },
  {
    question: "Какие гарантии вы даете?",
    answer: "Мы предоставляем гарантию 1 год на все виды лакокрасочных работ и восстановление гелькоута при соблюдении рекомендаций по эксплуатации."
  },
  {
    question: "Вы работаете только в Санкт-Петербурге?",
    answer: "Базируемся в Санкт-Петербурге, но мобильная бригада выезжает в Ленинградскую область, Карелию и Москву для крупных проектов."
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Twitter', icon: Twitter, href: '#' },
];

export const CONTACT_INFO = {
  phone: "+7 (999) 123-45-67",
  email: "service@resortyacht.ru",
  address: "Санкт-Петербург, Петровская коса, 9"
};