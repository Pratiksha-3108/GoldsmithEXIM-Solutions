/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import logo from "./assets/goldsmithlogo.png";
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  ChevronRight, 
  Globe, 
  TrendingUp, 
  GraduationCap, 
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  FileText,
  Landmark,
  Building2,
  ShieldCheck,
  Briefcase,
  ClipboardCheck
} from 'lucide-react';

// --- Types ---
interface NavItem {
  label: string;
  href: string;
}

// --- Constants ---
const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

const CERTIFICATIONS = [
  { name: 'GST', icon: Globe },
  { name: 'APEDA', icon: FileText },
  { name: 'FIEO', icon: Landmark },
  { name: 'MSME', icon: Building2 },
  { name: 'RCMC', icon: ShieldCheck },
  { name: 'ECGC', icon: Briefcase },
  { name: 'IEC CODE', icon: ClipboardCheck },
];

const EXPORTS = [
  'Agro Products', 'Indian Spices', 'Fresh vegetables', 'Food grains and millets',
  'Oil extracts', 'Processed food products', 'Dehydrated and frozen vegetables',
  'Surgical Items', 'Exotic food products', 'Mouth freshener'
];

const IMPORTS = [
  'Wide range of cosmetics products', 'Electronic items and components',
  'Industrial and automotive spares', 'Gym and fitness equipments',
  'Toys and lifestyle products'
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-black/95 backdrop-blur-sm border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          <div className="shrink-0 flex items-center">
            <img 
              src={logo}
              alt="Goldsmith Logo" 
              className="h-16 w-auto object-contain" 
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-xs font-bold text-gray-400 hover:text-white transition-colors uppercase tracking-[0.2em]"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black border-b border-white/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-sm font-bold text-gray-300 hover:text-primary uppercase tracking-widest border-b border-white/5"
              >
                {item.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <img 
          src="https://picsum.photos/seed/exim/1920/1080?grayscale" 
          alt="Logistics Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-linear-to-b from-black via-black/80 to-black"></div>
      </div>
      
      <div className="relative z-10 max-w-[95vw] mx-auto px-4 text-center pt-24 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <h1 className="text-[6vw] sm:text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight leading-none uppercase font-lato whitespace-nowrap">
            Goldsmith Exim Solutions
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-10"
        >
          <p className="text-primary font-serif italic tracking-[0.1em] text-[3.5vw] sm:text-xl md:text-2xl mb-4">
            One roof, end-to-end solution for all EXIM needs
          </p>
          <p className="text-[2.2vw] sm:text-xs md:text-sm text-gray-400 font-bold tracking-widest uppercase whitespace-nowrap max-w-none mx-auto">
            DIRECT EXPORT IMPORT | BUSINESS TRANSFORMER PARTNER | CORPORATE TRAINING AND DEVELOPMENT HUB
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <a href="#portfolio" className="group relative bg-primary text-white px-10 py-5 font-bold uppercase tracking-widest overflow-hidden transition-all text-xs">
            <span className="relative z-10">Explore Portfolio</span>
            <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <style>{`.group:hover span { color: black; }`}</style>
          </a>
          <a href="#contact" className="group text-white px-10 py-5 font-bold uppercase tracking-widest border-2 border-white/20 hover:border-white transition-all flex items-center gap-2 text-xs">
            Get In Touch <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>

        <div className="mt-2 flex flex-col items-center gap-4">
          <span className="text-[10px] uppercase tracking-[0.5em] text-gray-500 font-bold">Scroll Down</span>
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-12 bg-linear-to-b from-primary to-transparent mx-auto"
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

const About = () => (
  <section id="about" className="pt-8 pb-16 bg-black text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div>
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Our Vision</span>
          <h2 className="text-4xl font-black mb-10 tracking-tighter leading-tight text-white">Global Trade Experts</h2>
          <div className="space-y-6 text-gray-400 leading-relaxed text-base font-light">
            <p>
              Goldsmith EXIM Solutions is a global export-import company dealing in commodities and services, along with international business consultancy and industry training.
            </p>
            <p>
              We work as direct exporters and importers, focusing on high-margin trade opportunities across multiple product segments. With integrated technology and market insights, we make international trade smooth and result-oriented.
            </p>
            <p>
              Under our International Business Transformation services, we provide end-to-end EXIM support — including supply chain management, logistics, customs clearance, documentation, and strategic trade planning.
            </p>
            <p>
              We also conduct practical EXIM training programs for students, professionals, and entrepreneurs who want to start or grow in international trade. Our training focuses on real-world execution.
            </p>
          </div>
          <div className="mt-12 flex items-center gap-12">
            <div>
              <span className="block text-4xl font-black text-primary">150+</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-600 mt-2 block">Individuals Trained</span>
            </div>
            <div className="h-16 w-px bg-white/10"></div>
            <div>
              <span className="block text-4xl font-black text-primary">Global</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-gray-600 mt-2 block">Market Reach</span>
            </div>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors"></div>
          <img 
            src="https://picsum.photos/seed/cargo/800/1000" 
            alt="Cargo Ship" 
            className="relative rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-10 -left-10 bg-zinc-900 border border-white/10 p-10 text-white max-w-xs hidden lg:block shadow-2xl backdrop-blur-md">
            <p className="font-bold italic text-xl leading-tight">
              "One-roof, end-to-end solution for all <span className="text-primary">EXIM needs.</span>"
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Certifications = () => (
  <section className="py-16 bg-zinc-950 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
      <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Our Credentials</span>
      <h2 className="text-4xl font-black text-white tracking-tighter uppercase">Certifications</h2>
    </div>
    
    <div className="relative">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ 
          duration: 20, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex gap-10 whitespace-nowrap"
      >
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex gap-10">
            {CERTIFICATIONS.map((cert) => (
              <div 
                key={cert.name} 
                className="bg-zinc-900/50 border border-white/5 p-8 rounded-2xl flex items-center justify-center min-w-[120px] group hover:border-primary/30 transition-all"
              >
                <cert.icon className="text-primary group-hover:scale-110 transition-transform" size={40} />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

const ServiceCard = ({ icon: Icon, title, description, items }: any) => (
  <motion.div 
    whileHover={{ y: -15 }}
    className="bg-zinc-900/40 backdrop-blur-sm p-10 border border-white/5 hover:border-primary/30 transition-all group relative overflow-hidden rounded-2xl"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full translate-x-16 -translate-y-16 group-hover:bg-primary/10 transition-colors"></div>
    <div className="w-16 h-16 bg-white/5 flex items-center justify-center mb-8 group-hover:bg-primary transition-colors duration-500 rounded-xl">
      <Icon className="text-primary group-hover:text-white transition-colors duration-500" size={28} />
    </div>
    <h3 className="text-2xl font-black text-white mb-4 tracking-tighter">{title}</h3>
    <p className="text-gray-400 mb-8 leading-relaxed font-light text-sm">{description}</p>
    {items && (
      <ul className="space-y-3">
        {items.map((item: string) => (
          <li key={item} className="flex items-start gap-3 text-[13px] text-gray-500 font-medium">
            <div className="w-1 h-1 bg-primary rounded-full mt-2 shrink-0"></div>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )}
  </motion.div>
);

const Services = () => (
  <section id="services" className="py-32 bg-black">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 block">What We Do</span>
        <h2 className="text-4xl font-black text-white tracking-tighter">Our Core Verticals</h2>
      </div>
      
      <div className="grid lg:grid-cols-3 gap-10">
        <ServiceCard 
          icon={Globe}
          title="Direct Import & Export"
          description="At Goldsmith EXIM Solutions, we undertake direct import and export of commodities and services, enabling businesses to access profitable global trade opportunities. As active traders, we execute real-time international transactions backed by strong market experience."
          items={[
            "Real-time international transactions",
            "Project-based import–export assignments",
            "Data-driven technology tracking",
            "Apple-to-Apple philosophy"
          ]}
        />
        <ServiceCard 
          icon={TrendingUp}
          title="Business Transformation"
          description="Goldsmith EXIM Solutions’ Business Transformation Vertical is designed to help companies develop and scale their import–export business with complete operational support."
          items={[
            "Supply Chain Management",
            "Strategic Sourcing",
            "Logistics & Transportation",
            "Payment Negotiations",
            "Quotations & Price Discovery",
            "Warehousing & Packaging",
            "Documentation & Compliance"
          ]}
        />
        <ServiceCard 
          icon={GraduationCap}
          title="Training & Development"
          description="At Goldsmith EXIM Solutions, we provide specialized training programs for industry professionals, students, and aspiring entrepreneurs who want to start or scale their import–export business."
          items={[
            "How to find potential export–import products",
            "Product positioning & market entry strategy",
            "Negotiations with international buyers & suppliers",
            "Handling global uncertainties & trade risk",
            "Practical, end-to-end EXIM operations"
          ]}
        />
      </div>
    </div>
  </section>
);

const Portfolio = () => (
  <section id="portfolio" className="py-32 bg-zinc-950">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Product Portfolio</span>
        <h2 className="text-4xl font-black text-white tracking-tighter">Global Trade Commodities</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="bg-zinc-900 p-12 shadow-2xl border-l-8 border-primary rounded-r-2xl border-y border-r border-white/5">
          <h3 className="text-3xl font-black mb-8 flex items-center gap-6">
            <span className="text-primary">Exports</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {EXPORTS.map((item) => (
              <div key={item} className="flex items-center gap-3 text-gray-400 group cursor-default">
                <div className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 transition-transform"></div>
                <span className="font-bold text-[11px] uppercase tracking-widest">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-zinc-900 p-12 shadow-2xl border-l-8 border-white rounded-r-2xl border-y border-r border-white/5">
          <h3 className="text-3xl font-black mb-8 flex items-center gap-6">
            <span className="text-white">Imports</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {IMPORTS.map((item) => (
              <div key={item} className="flex items-center gap-3 text-gray-400 group cursor-default">
                <div className="w-1.5 h-1.5 bg-white rounded-full group-hover:scale-150 transition-transform"></div>
                <span className="font-bold text-[11px] uppercase tracking-widest">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Training = () => (
  <section id="training" className="py-32 bg-black">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-zinc-900/50 text-white p-12 md:p-20 relative overflow-hidden rounded-3xl border border-white/5 backdrop-blur-sm">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Training Hub</span>
            <h2 className="text-4xl font-black mb-6 tracking-tighter leading-tight">Bridge the Gap in Global Trade</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed font-light">
              We conduct practical EXIM training programs for students, professionals, and entrepreneurs who want to start or grow in international trade.
            </p>
            <div className="space-y-4">
              {[
                "How to find potential export–import products",
                "Product positioning & market entry strategy",
                "Negotiations with international buyers & suppliers",
                "Handling global uncertainties & trade risk",
                "Practical, end-to-end EXIM operations"
              ].map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-primary flex items-center justify-center text-white rounded-full shrink-0">
                    <ChevronRight size={14} />
                  </div>
                  <span className="text-gray-300 font-medium text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-zinc-900 p-10 border border-white/10 shadow-2xl rounded-2xl">
            <div className="text-6xl font-black text-primary mb-2 tracking-tighter">150+</div>
            <div className="text-lg font-black text-white mb-6 uppercase tracking-[0.2em]">Professionals Trained</div>
            <p className="text-gray-500 mb-8 text-base font-light">
              Join our structured learning ecosystem designed to build practical, execution-ready skills.
            </p>
            <button className="w-full bg-primary text-white py-5 font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 rounded-lg text-xs">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Contact Us</span>
            <h2 className="text-4xl font-black text-white mb-12 tracking-tighter">Get in Touch</h2>
            
            <div className="space-y-10">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-zinc-900 flex items-center justify-center text-white shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-500 border border-white/5 shadow-lg rounded-xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-black text-lg mb-2 uppercase tracking-widest text-white">Office Address</h4>
                  <p className="text-gray-400 text-base font-light">Office no 29, Ramanand Sqaure, Jatwada Road, Harsul, Ch. Sambhajinagar 431001</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-zinc-900 flex items-center justify-center text-white shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-500 border border-white/5 shadow-lg rounded-xl">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-black text-lg mb-2 uppercase tracking-widest text-white">Call Us</h4>
                  <p className="text-gray-400 text-base font-light">+91 8766526571</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 bg-zinc-900 flex items-center justify-center text-white shrink-0 group-hover:bg-primary group-hover:text-white transition-colors duration-500 border border-white/5 shadow-lg rounded-xl">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-black text-lg mb-2 uppercase tracking-widest text-white">Email Us</h4>
                  <p className="text-gray-400 text-base font-light">contact@goldsmith.org.in</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900 p-12 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] relative border border-white/5 rounded-3xl">
            <div className="absolute top-0 left-0 w-full h-2 bg-primary rounded-t-3xl"></div>
            <h3 className="text-2xl font-black mb-8 tracking-tighter uppercase text-white">Send Us a Query</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-2">Name</label>
                  <input 
                    type="text" 
                    required
                    className="w-full bg-black/50 border-b-2 border-white/5 py-3 px-4 focus:border-primary outline-none transition-colors font-medium text-white rounded-t-lg text-sm"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-2">Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-black/50 border-b-2 border-white/5 py-3 px-4 focus:border-primary outline-none transition-colors font-medium text-white rounded-t-lg text-sm"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-2">Subject</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-black/50 border-b-2 border-white/5 py-3 px-4 focus:border-primary outline-none transition-colors font-medium text-white rounded-t-lg text-sm"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 mb-2">Message</label>
                <textarea 
                  rows={4} 
                  required
                  className="w-full bg-black/50 border-b-2 border-white/5 py-3 px-4 focus:border-primary outline-none transition-colors resize-none font-medium text-white rounded-t-lg text-sm"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-primary text-white py-5 font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500 shadow-xl rounded-xl text-xs"
              >
                {submitted ? 'Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-black text-white py-24 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-4 gap-20 mb-20">
        <div className="col-span-1 lg:col-span-2">
          <img 
            src={logo}
            alt="Goldsmith Logo" 
            className="h-16 w-auto object-contain mb-8" 
            referrerPolicy="no-referrer"
          />
          <p className="text-gray-500 max-w-md leading-relaxed mb-10 text-lg font-light">
            Goldsmith EXIM Solutions is a global export-import company dealing in commodities and services, along with international business consultancy and industry training.
          </p>
          <div className="flex gap-6">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a key={i} href="#" className="w-12 h-12 border border-white/10 flex items-center justify-center text-gray-500 hover:text-primary hover:border-primary transition-all duration-500">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-black mb-8 uppercase tracking-[0.3em] text-white">Quick Links</h4>
          <ul className="space-y-5 text-gray-500 font-bold text-xs uppercase tracking-widest">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a href={item.href} className="hover:text-primary transition-colors flex items-center gap-3">
                  <div className="w-1 h-1 bg-primary rounded-full"></div> {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-black mb-8 uppercase tracking-[0.3em] text-white">Contact Info</h4>
          <ul className="space-y-6 text-gray-500">
            <li className="flex items-start gap-4">
              <MapPin size={20} className="text-primary mt-1 shrink-0" />
              <span className="text-sm font-medium leading-relaxed">Office no 29, Ramanand Sqaure, Jatwada Road, Harsul, Ch. Sambhajinagar 431001</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone size={20} className="text-primary shrink-0" />
              <span className="text-sm font-medium">+91 8766526571</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail size={20} className="text-primary shrink-0" />
              <span className="text-sm font-medium">contact@goldsmith.org.in</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="pt-12 border-t border-white/5 text-center text-gray-600 text-xs font-bold uppercase tracking-[0.3em]">
        <p>© {new Date().getFullYear()} Goldsmith EXIM Solutions. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const Blogs = () => (
  <section id="blogs" className="py-32 bg-black text-white border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs mb-6 block">Insights</span>
        <h2 className="text-4xl font-black tracking-tighter text-white">Latest Blogs</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-10">
        {[1, 2, 3].map((i) => (
          <div key={i} className="group cursor-pointer">
            <div className="aspect-video bg-zinc-900 mb-6 overflow-hidden relative rounded-lg border border-white/5">
              <img 
                src={`https://picsum.photos/seed/blog${i}/800/450?grayscale`} 
                alt="Blog" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 opacity-80 group-hover:opacity-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <span className="text-primary font-bold text-[10px] uppercase tracking-widest mb-3 block">Trade Insights</span>
            <h3 className="text-lg font-bold mb-4 group-hover:text-primary transition-colors text-white">The Future of Global EXIM in 2026</h3>
            <p className="text-gray-400 font-light leading-relaxed text-sm">Stay updated with the latest trends and market movements in the international trade industry...</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Marquee = () => {
  const items = [
    "Direct Import & Export",
    "Business Transformation",
    "Training & Development",
    "Supply Chain Management",
    "Strategic Sourcing",
    "Logistics & Transportation",
    "Documentation & Compliance"
  ];

  return (
    <div className="bg-primary py-4 overflow-hidden border-y border-white/10 relative z-20">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: "linear" 
        }}
        className="flex whitespace-nowrap"
      >
        {[...Array(6)].map((_, i) => (
          <div key={i} className="flex items-center">
            {items.map((item) => (
              <div key={item} className="flex items-center mx-6">
                <span className="text-white font-black uppercase tracking-[0.15em] text-[11px] md:text-xs">
                  {item}
                </span>
                <span className="w-1.5 h-1.5 bg-white rounded-full mx-6"></span>
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-black font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Portfolio />
        <Certifications />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

