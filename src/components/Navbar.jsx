import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Beranda', href: '#hero' },
  { label: 'Tentang', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Ulasan', href: '#reviews' },
  { label: 'Lokasi', href: '#location' },
];

const CoffeeIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
    <line x1="6" y1="2" x2="6" y2="4" />
    <line x1="10" y1="2" x2="10" y2="4" />
    <line x1="14" y1="2" x2="14" y2="4" />
  </svg>
);

const MoonIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
);

const SunIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

const MenuIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </svg>
);

const XIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function Navbar({ darkMode, toggleDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#hero');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setActiveLink(href);
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'navbar-scrolled py-3' : 'py-5 bg-transparent'
      }`}
    >
      <div 
        className="max-w-7xl px-6 flex items-center justify-between"
        style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto' }}
      >
        {/* Left: Logo Container */}
        <div className="flex-1 flex justify-start">
          <motion.a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleNav('#hero'); }}
            className="flex items-center gap-3 group cursor-pointer"
            whileHover={{ scale: 1.02 }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #C97A40, #3B2A1E)' }}>
              <CoffeeIcon size={20} color="white" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className={`font-bold text-lg tracking-wide transition-colors ${
                scrolled ? (darkMode ? 'text-[#f0e8dc]' : 'text-[#3B2A1E]') : 'text-white'
              }`} style={{ fontFamily: 'Playfair Display, serif' }}>
                Luna Roastery
              </span>
              <span className={`text-xs tracking-widest transition-colors ${
                scrolled ? 'text-[#C97A40]' : 'text-[#D6B58E]'
              }`}>COFFEE & EATERY</span>
            </div>
          </motion.a>
        </div>

        {/* Center: Desktop nav */}
        <div className="hidden md:flex items-center justify-center gap-8 flex-shrink-0">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
              className={`text-sm font-medium transition-all duration-300 relative group cursor-pointer ${
                scrolled
                  ? (darkMode ? 'text-[#f0e8dc] hover:text-[#C97A40]' : 'text-[#3B2A1E] hover:text-[#C97A40]')
                  : 'text-white/90 hover:text-white'
              }`}
              whileHover={{ y: -1 }}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-[#C97A40] transition-all duration-300 ${
                activeLink === link.href ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </motion.a>
          ))}
        </div>

        {/* Right: Actions Container */}
        <div className="flex-1 flex justify-end items-center gap-4">
          {/* Dark mode toggle */}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleDark}
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
              scrolled
                ? (darkMode ? 'bg-[#3B2A1E] text-[#D6B58E]' : 'bg-[#FAF8F5] text-[#3B2A1E] shadow')
                : 'glass text-white'
            }`}
          >
            {darkMode ? <SunIcon size={18} /> : <MoonIcon size={18} />}
          </motion.button>

          {/* Reservasi button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNav('#reservation')}
            className="hidden md:block btn-primary text-sm px-6 py-2.5"
          >
            Reservasi
          </motion.button>

          {/* Mobile menu toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden w-10 h-10 rounded-xl flex items-center justify-center ${
              scrolled
                ? (darkMode ? 'bg-[#3B2A1E] text-[#D6B58E]' : 'bg-[#FAF8F5] text-[#3B2A1E]')
                : 'glass text-white'
            }`}
          >
            {mobileOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile menu */}
      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Overlay for clicking outside */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40"
              style={{ height: '100vh', width: '100vw' }}
            />
            
            {/* Dropdown Menu */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="md:hidden absolute right-6 z-50 w-[160px] rounded-2xl overflow-hidden"
              style={{
                top: 'calc(100% + 8px)',
                background: 'rgba(20, 20, 20, 0.65)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
                transformOrigin: 'top right'
              }}
            >
              <div className="flex flex-col py-2 relative z-50">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                    className="flex items-center justify-center h-[42px] text-white text-[15px] font-medium transition-colors hover:text-[#C97A40] hover:bg-[rgba(255,255,255,0.04)]"
                  >
                    {link.label}
                  </a>
                ))}
                
                <div className="mx-4 mt-1 mb-2 border-t border-[rgba(255,255,255,0.08)]" />
                
                <div className="px-3 pb-1">
                  <button
                    onClick={() => handleNav('#reservation')}
                    className="w-full h-[42px] rounded-full text-white text-sm font-medium transition-all"
                    style={{
                      background: 'linear-gradient(135deg, #C97A40, #a85e28)',
                      boxShadow: '0 4px 15px rgba(201, 122, 64, 0.3)',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.filter = 'brightness(1.15)'}
                    onMouseLeave={(e) => e.currentTarget.style.filter = 'brightness(1)'}
                  >
                    Reservasi
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
