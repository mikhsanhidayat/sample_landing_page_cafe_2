import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const MapPinIcon = ({ size = 20, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const PhoneIcon = ({ size = 20, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const ClockIcon = ({ size = 20, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const UtensilsIcon = ({ size = 18, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
    <path d="M7 2v20" />
    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
  </svg>
);

const BagIcon = ({ size = 18, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

const BikeIcon = ({ size = 18, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="18.5" cy="17.5" r="2.5" />
    <circle cx="5.5" cy="17.5" r="2.5" />
    <circle cx="15" cy="5" r="1" />
    <path d="M9 17.5h6" />
    <path d="M5.5 15h9.5l2.5-6H9.5L7 15" />
    <path d="M12 9V5h3" />
  </svg>
);

const ExternalLinkIcon = ({ size = 16, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const CoffeeIcon = ({ size = 16, color = 'currentColor' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
    <line x1="6" y1="2" x2="6" y2="4" />
    <line x1="10" y1="2" x2="10" y2="4" />
    <line x1="14" y1="2" x2="14" y2="4" />
  </svg>
);

const CoffeeBeanIcon = ({ size = 24, className = '', style = {} }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
    style={style}
  >
    <path d="M18.8 5.2C17.2 3.6 14.8 3 12 3c-4.4 0-8 3.6-8 8 0 2.8.6 5.2 2.2 6.8 1.6 1.6 4 2.2 6.8 2.2 4.4 0 8-3.6 8-8 0-2.8-.6-5.2-2.2-6.8z" />
    <path d="M5 19c3.5-3.5 6.5-1 9.5-4.5s2.5-6.5 6-10" />
  </svg>
);

const services = [
  { icon: UtensilsIcon, label: 'Dine In' },
  { icon: BagIcon, label: 'Take Away' },
  { icon: BikeIcon, label: 'Delivery' },
];

export default function Location({ darkMode }) {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section id="location" style={{ padding: '64px 24px', background: darkMode ? '#0f0a07' : '#FAF8F5', position: 'relative', overflow: 'hidden' }}>
      {/* Background Decor */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '-10%',
        width: '450px',
        height: '450px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(201,122,64,0.04) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        right: '-10%',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(214,181,142,0.05) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      {/* Floating Coffee Beans */}
      <motion.div
        animate={{ 
          y: [0, -12, 0],
          rotate: [0, 8, 0]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          top: '15%',
          left: '6%',
          opacity: darkMode ? 0.12 : 0.06,
          color: '#C97A40',
          pointerEvents: 'none'
        }}
      >
        <CoffeeBeanIcon size={40} />
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -10, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '6%',
          opacity: darkMode ? 0.12 : 0.06,
          color: '#C97A40',
          pointerEvents: 'none'
        }}
      >
        <CoffeeBeanIcon size={48} />
      </motion.div>

      <div ref={ref} style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto', position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: 36 }}
        >
          <div className="section-tag">📍 Visit Us</div>
          <h2 className="section-title">Find <span className="gradient-text">Luna Roastery</span></h2>
          <div className="divider" style={{ margin: '12px auto' }} />
          <p style={{ maxWidth: 500, margin: '12px auto 0', color: darkMode ? '#c8b8a0' : '#7a6a5a', fontSize: '15px', lineHeight: 1.6 }}>
            Kunjungi cafe kami untuk menikmati kopi terbaik dalam suasana yang tenang dan estetik.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Cafe Information Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(59,42,30,0.06)' }}
            className="lg:col-span-5 flex flex-col px-8 py-6 md:px-10 md:py-8 rounded-[24px]"
            style={{
              background: darkMode ? 'rgba(26,16,8,0.5)' : 'rgba(255, 255, 255, 0.75)',
              border: darkMode ? '1px solid rgba(214,181,142,0.12)' : '1px solid rgba(214,181,142,0.2)',
              backdropFilter: 'blur(20px)',
              transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          >
            {/* Cafe photo thumbnail */}
            <div style={{ position: 'relative', width: '100%', height: '140px', borderRadius: '16px', overflow: 'hidden', marginBottom: '24px' }} className="group">
              <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=600&h=250&q=80" 
                alt="Luna Roastery Cafe Interior"
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.8s ease' }}
                className="group-hover:scale-105"
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)' }} />
              <div style={{ position: 'absolute', bottom: '12px', left: '16px' }}>
                <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase', background: '#C97A40', color: 'white', padding: '4px 8px', borderRadius: '6px' }}>
                  Cafe & Eatery
                </span>
              </div>
            </div>

            {/* Header internal info */}
            <div style={{ marginBottom: '20px', paddingLeft: '12px', paddingRight: '12px' }}>
              <h3 style={{ fontSize: '22px', fontWeight: 700, fontFamily: 'Playfair Display, serif', color: darkMode ? '#f0e8dc' : '#3B2A1E', margin: 0 }}>
                Luna Roastery
              </h3>
              <p style={{ fontSize: '12px', color: '#C97A40', fontWeight: 600, letterSpacing: '0.5px', marginTop: '2px' }}>
                Bandung, Jawa Barat
              </p>
            </div>

            {/* Info Group Layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5 mb-6" style={{ paddingLeft: '12px', paddingRight: '12px' }}>
              {/* Address */}
              <div className="flex gap-3 items-start">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: darkMode ? 'rgba(201,122,64,0.12)' : 'rgba(201,122,64,0.07)' }}>
                  <MapPinIcon size={16} className="text-[#C97A40]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[11px] tracking-wider uppercase mb-1" style={{ color: darkMode ? '#c8b8a0' : '#8c7d6c' }}>
                    Alamat
                  </h4>
                  <p className="text-[13px] leading-relaxed font-medium" style={{ color: darkMode ? '#f0e8dc' : '#3B2A1E' }}>
                    Jl. Sudirman No. 45, Bandung,
                  </p>
                  <p className="text-[12px] leading-relaxed" style={{ color: darkMode ? '#c8b8a0' : '#7a6a5a' }}>
                    Kab. Tasikmalaya, Jawa Barat
                  </p>
                </div>
              </div>

              {/* Opening Hours */}
              <div className="flex gap-3 items-start">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: darkMode ? 'rgba(201,122,64,0.12)' : 'rgba(201,122,64,0.07)' }}>
                  <ClockIcon size={16} className="text-[#C97A40]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[11px] tracking-wider uppercase mb-1" style={{ color: darkMode ? '#c8b8a0' : '#8c7d6c' }}>
                    Jam Operasional
                  </h4>
                  <p className="text-[13px] leading-relaxed font-medium" style={{ color: darkMode ? '#f0e8dc' : '#3B2A1E' }}>
                    Buka Setiap Hari
                  </p>
                  <p className="text-[12px] leading-relaxed" style={{ color: darkMode ? '#c8b8a0' : '#7a6a5a' }}>
                    09.00 - 22.00 WIB
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex gap-3 items-start">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: darkMode ? 'rgba(201,122,64,0.12)' : 'rgba(201,122,64,0.07)' }}>
                  <PhoneIcon size={16} className="text-[#C97A40]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[11px] tracking-wider uppercase mb-1" style={{ color: darkMode ? '#c8b8a0' : '#8c7d6c' }}>
                    Hubungi
                  </h4>
                  <p className="text-[13px] leading-relaxed font-medium" style={{ color: darkMode ? '#f0e8dc' : '#3B2A1E' }}>
                    0822-9554-2838
                  </p>
                </div>
              </div>

              {/* Services */}
              <div className="flex gap-3 items-start">
                <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: darkMode ? 'rgba(201,122,64,0.12)' : 'rgba(201,122,64,0.07)' }}>
                  <UtensilsIcon size={16} className="text-[#C97A40]" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-[11px] tracking-wider uppercase mb-2" style={{ color: darkMode ? '#c8b8a0' : '#8c7d6c' }}>
                    Layanan
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {services.map((s) => (
                      <div key={s.label} className="flex items-center gap-1 py-1 px-2.5 rounded-full"
                        style={{
                          background: darkMode ? 'rgba(201,122,64,0.06)' : 'rgba(201,122,64,0.03)',
                          border: `1px solid ${darkMode ? 'rgba(201,122,64,0.12)' : 'rgba(201,122,64,0.08)'}`
                        }}>
                        <s.icon size={11} className="text-[#C97A40]" />
                        <span className="text-[10px] font-semibold" style={{ color: darkMode ? '#f0e8dc' : '#3B2A1E' }}>
                          {s.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Lower Section: Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-auto">
              <motion.a
                whileHover={{ y: -2, boxShadow: '0 8px 24px rgba(201, 122, 64, 0.25)' }}
                whileTap={{ scale: 0.98 }}
                href="https://maps.google.com/?q=Luna+Roastery,+Jl.+Sudirman+No.+45,+Bandung,+Jawa+Barat"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center gap-2 justify-center flex-1 py-3 px-5"
                style={{ textDecoration: 'none', borderRadius: '12px', fontSize: '13px', fontWeight: 600 }}
              >
                <ExternalLinkIcon size={14} />
                Open Google Maps
              </motion.a>
              <motion.a
                whileHover={{ y: -2, boxShadow: '0 8px 24px rgba(59, 42, 30, 0.12)' }}
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/6282295542838"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent flex items-center gap-2 justify-center flex-1 py-3 px-5"
                style={{ textDecoration: 'none', borderRadius: '12px', fontSize: '13px', fontWeight: 600 }}
              >
                <PhoneIcon size={14} />
                WhatsApp Reservation
              </motion.a>
            </div>
          </motion.div>

          {/* Compact Google Maps Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(59,42,30,0.06)' }}
            className="lg:col-span-7 relative"
            style={{
              borderRadius: '24px',
              overflow: 'hidden',
              border: darkMode ? '1px solid rgba(214,181,142,0.12)' : '1px solid rgba(214,181,142,0.2)',
              background: darkMode ? 'rgba(22,14,8,0.5)' : 'rgba(255, 255, 255, 0.75)',
              padding: '8px',
              display: 'flex',
              height: '380px',
              minHeight: '380px',
              transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            }}
          >
            <iframe
              title="Luna Roastery Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1978.5!2d108.1388550!3d-7.1953412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zN8KwMTEnNDMuMiJTIDEwOMKwMDgnMTkuOSJF!5e0!3m2!1sen!2sid!4v1719000000000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style={{
                border: 0,
                borderRadius: '16px',
                width: '100%',
                height: '100%'
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Map Premium Float Overlay */}
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              right: '20px',
              background: darkMode ? 'rgba(22,14,8,0.9)' : 'rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(10px)',
              border: darkMode ? '1px solid rgba(214,181,142,0.15)' : '1px solid rgba(214,181,142,0.25)',
              borderRadius: '12px',
              padding: '12px 16px',
              boxShadow: '0 10px 25px rgba(59,42,30,0.08)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 12,
              pointerEvents: 'auto',
              flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div className="w-7.5 h-7.5 rounded-lg flex items-center justify-center" style={{ background: '#C97A40' }}>
                  <CoffeeIcon size={14} color="white" />
                </div>
                <div>
                  <h5 style={{ fontSize: '12px', fontWeight: 700, color: darkMode ? '#f0e8dc' : '#3B2A1E', margin: 0 }}>Luna Roastery</h5>
                  <p style={{ fontSize: '10px', color: darkMode ? '#c8b8a0' : '#7a6a5a', margin: 0 }}>Bandung, Jawa Barat</p>
                </div>
              </div>
              <a
                href="https://maps.google.com/?q=Luna+Roastery,+Jl.+Sudirman+No.+45,+Bandung,+Jawa+Barat"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '10px',
                  fontWeight: 700,
                  color: 'white',
                  background: '#C97A40',
                  padding: '5px 12px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  transition: 'background 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#a85e28'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#C97A40'}
              >
                Petunjuk Arah
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
