import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Dumbbell, ChevronRight } from 'lucide-react';
import { CONTACT_DATA } from '../data/gymData';

interface NavbarProps {
  onOpenJoinModal: (planName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenJoinModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ['home', 'membership', 'exercises', 'trainer', 'reviews', 'gallery', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Membership', href: '#membership', id: 'membership' },
    { name: 'Exercises', href: '#exercises', id: 'exercises' },
    { name: 'Trainer', href: '#trainer', id: 'trainer' },
    { name: 'Reviews', href: '#reviews', id: 'reviews' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-zinc-950/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-[80px] h-[80px] rounded-xl bg-zinc-900/90 border border-amber-500/40 p-1 flex items-center justify-center overflow-hidden shadow-lg shadow-amber-500/20 group-hover:scale-105 group-hover:border-amber-400 transition-all duration-200 shrink-0">
              <img
                src={CONTACT_DATA.logoUrl}
                alt="AK GYM Logo"
                className="w-[80px] h-[80px] object-contain filter drop-shadow"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl font-black tracking-wider text-white group-hover:text-amber-400 transition-colors">
                AK <span className="text-amber-500">GYM</span>
              </span>
              <span className="text-[10px] tracking-widest font-semibold text-zinc-400 uppercase">
                ADDIS ABABA
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-zinc-900/60 p-1.5 rounded-full border border-zinc-800/80 backdrop-blur-sm">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-200 ${
                    isActive
                      ? 'bg-amber-500 text-zinc-950 shadow-md font-bold'
                      : 'text-zinc-300 hover:text-white hover:bg-zinc-800/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${CONTACT_DATA.phoneRaw}`}
              className="flex items-center gap-2 text-xs font-semibold tracking-wider text-zinc-300 hover:text-amber-400 transition-colors py-2 px-3 rounded-lg hover:bg-zinc-900/80"
              title="Call AK GYM"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>{CONTACT_DATA.phoneDisplay}</span>
            </a>
            <button
              onClick={() => onOpenJoinModal()}
              className="relative group overflow-hidden px-5 py-2.5 rounded-lg font-display text-sm font-bold tracking-wider text-zinc-950 gold-gradient-bg shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-105 active:scale-95 transition-all duration-200 uppercase"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                JOIN NOW
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Right Quick Action & Hamburger */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => onOpenJoinModal()}
              className="px-3 py-1.5 rounded-md text-xs font-bold font-display uppercase tracking-wider text-zinc-950 gold-gradient-bg"
            >
              JOIN
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-zinc-950/95 border-b border-zinc-800/90 backdrop-blur-xl px-4 pt-4 pb-8 shadow-2xl animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-sm font-semibold tracking-wider uppercase transition-all ${
                    isActive
                      ? 'bg-amber-500 text-zinc-950 font-bold'
                      : 'text-zinc-300 hover:bg-zinc-900 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-zinc-950' : 'text-zinc-600'}`} />
                </a>
              );
            })}
            <div className="pt-4 mt-2 border-t border-zinc-800 flex flex-col gap-3">
              <a
                href={`tel:${CONTACT_DATA.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-3 rounded-lg bg-zinc-900 border border-zinc-800 text-sm font-semibold text-zinc-200"
              >
                <Phone className="w-4 h-4 text-amber-500" />
                <span>Call {CONTACT_DATA.phoneDisplay}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenJoinModal();
                }}
                className="w-full py-3.5 rounded-lg font-display text-sm font-bold tracking-wider uppercase text-zinc-950 gold-gradient-bg shadow-lg shadow-amber-500/20"
              >
                JOIN AK GYM NOW
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
