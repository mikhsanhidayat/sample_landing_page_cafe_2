const CoffeeIcon = ({ size = 22 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
    <line x1="6" y1="2" x2="6" y2="4" />
    <line x1="10" y1="2" x2="10" y2="4" />
    <line x1="14" y1="2" x2="14" y2="4" />
  </svg>
);

const InstagramIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const WhatsAppIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const MapPinIcon = ({ size = 16, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = ({ size = 16, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const navLinks = [
  { label: 'Beranda', href: '#hero' },
  { label: 'Tentang', href: '#about' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Lokasi', href: '#location' },
  { label: 'Kontak', href: '#reservation' },
];

export default function Footer({ darkMode }) {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={`${darkMode ? 'bg-[#0a0603]' : 'bg-[#3B2A1E]'} `}>
      {/* Top gradient bar */}
      <div className="h-1" style={{ background: 'linear-gradient(90deg, #C97A40, #D6B58E, #C97A40)' }} />

      <div style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '24px', paddingRight: '24px' }}>

        {/* Main Grid — 3 kolom merata */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 items-start">

          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #C97A40, #a85e28)' }}>
                <CoffeeIcon size={22} />
              </div>
              <div>
                <div className="text-white text-2xl font-bold tracking-wide"
                  style={{ fontFamily: 'Playfair Display, serif' }}>Luna Roastery</div>
                <div className="text-[#D6B58E] text-xs tracking-[3px]">COFFEE & EATERY</div>
              </div>
            </div>
            <p className="text-[#D6B58E]/60 text-sm leading-[1.8] mb-8 max-w-xs">
              Tempat berkumpul yang menghadirkan perpaduan kopi berkualitas, makanan lezat, dan suasana yang nyaman di jantung Bandung, Jawa Barat.
            </p>
            {/* Social Media */}
            <div className="flex gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                style={{ background: 'rgba(201,122,64,0.15)', border: '1px solid rgba(201,122,64,0.3)' }}>
                <InstagramIcon size={18} />
              </a>
              <a href="https://wa.me/6282295542838" target="_blank" rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:scale-110"
                style={{ background: 'rgba(201,122,64,0.15)', border: '1px solid rgba(201,122,64,0.3)' }}>
                <WhatsAppIcon size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-8 text-sm tracking-widest uppercase">Navigasi</h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-[#D6B58E]/60 text-sm hover:text-[#C97A40] transition-colors duration-200 flex items-center gap-2 group cursor-pointer"
                  >
                    <span className="w-0 group-hover:w-3 h-0.5 bg-[#C97A40] rounded transition-all duration-300" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-8 text-sm tracking-widest uppercase">Kontak</h4>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <MapPinIcon size={16} className="text-[#C97A40] mt-0.5 flex-shrink-0" />
                <p className="text-[#D6B58E]/60 text-sm leading-relaxed">
                  Jl. Sudirman No. 45,<br />Bandung, Jawa Barat
                </p>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon size={16} className="text-[#C97A40] flex-shrink-0" />
                <a href="tel:+6282295542838" className="text-[#D6B58E]/60 text-sm hover:text-[#C97A40] transition-colors">
                  0822-9554-2838
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Jam Operasional — Baris terpisah, full-width glassmorphism bar */}
        <div className="mt-16 p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white text-sm font-semibold">Buka Sekarang</span>
            <span className="text-white/40 text-sm">·</span>
            <span className="text-[#D6B58E]/70 text-sm">Setiap Hari, 09.00 – 22.00 WIB</span>
          </div>
          <a href="https://wa.me/6282295542838" target="_blank" rel="noopener noreferrer"
            className="text-[#C97A40] text-sm font-semibold hover:text-[#e8974d] transition-colors flex items-center gap-1.5"
            style={{ textDecoration: 'none' }}>
            <PhoneIcon size={14} className="text-[#C97A40]" />
            Hubungi Kami
          </a>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-12 pt-6" style={{ borderTop: '1px solid rgba(214,181,142,0.08)' }}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-[#D6B58E]/40 text-sm">
              © 2026 Luna Roastery. All rights reserved.
            </p>
            <p className="text-[#D6B58E]/25 text-xs">
              Designed with ☕ & ❤️ in Bandung
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}