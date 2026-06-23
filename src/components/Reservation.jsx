import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const BG = 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&q=80&fit=crop';

const CoffeeIcon = ({ size = 14 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
    <line x1="6" y1="2" x2="6" y2="4" />
    <line x1="10" y1="2" x2="10" y2="4" />
    <line x1="14" y1="2" x2="14" y2="4" />
  </svg>
);

const CalendarIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const PhoneIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const DECO_PARTICLES = [
  { size: 5, left: '15%', top: '25%', delay: 0.1 },
  { size: 7, left: '35%', top: '65%', delay: 0.4 },
  { size: 4, left: '60%', top: '15%', delay: 0.8 },
  { size: 8, left: '80%', top: '55%', delay: 0.2 },
  { size: 6, left: '48%', top: '85%', delay: 0.6 },
];

export default function Reservation({ darkMode }) {
  const [ref, inView] = useInView({ threshold: 0.2 });

  return (
    <section id="reservation" style={{ padding: '50px 24px', position: 'relative', overflow: 'hidden' }}>
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={BG} alt="Cafe Background" className="w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(49,34,24,0.95) 0%, rgba(20,12,6,0.97) 100%)' }} />
      </div>

      {/* Floating decorative elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        className="absolute top-10 -right-10 w-48 h-48 rounded-full opacity-5 border-2 border-[#C97A40] hidden lg:block"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        className="absolute bottom-10 -left-10 w-32 h-32 rounded-full opacity-5 border border-[#D6B58E] hidden lg:block"
      />
      
      {DECO_PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: p.size,
            height: p.size,
            background: 'rgba(201,122,64,0.4)',
            left: p.left,
            top: p.top,
          }}
          animate={{ y: [-5, -30, -5], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, delay: p.delay }}
        />
      ))}

      <div ref={ref} className="relative z-10 text-center flex flex-col items-center" style={{ maxWidth: 850, marginLeft: 'auto', marginRight: 'auto' }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6"
          style={{ background: 'rgba(201,122,64,0.15)', border: '1px solid rgba(201,122,64,0.3)' }}
        >
          <CoffeeIcon size={12} />
          <span className="text-[#D6B58E] text-[11px] font-bold tracking-widest uppercase">Bergabunglah Bersama Kami</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-bold text-white mb-4 w-full"
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
            lineHeight: 1.25,
            textShadow: '0 4px 20px rgba(0,0,0,0.4)',
          }}
        >
          Siap Menikmati Pengalaman
          <br />
          <span className="gradient-text">Ngopi Terbaik?</span>
        </motion.h2>

        {/* Subheadline - PERBAIKAN: Memaksa margin horizontal auto lewat inline style agar center mutlak */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/75 text-center leading-relaxed"
          style={{ 
            fontSize: '15px',
            maxWidth: '560px',
            marginLeft: 'auto',
            marginRight: 'auto',
            marginBottom: '20px'
          }}
        >
          Kunjungi Luna Roastery dan nikmati suasana yang nyaman serta menu terbaik bersama keluarga dan teman.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14 w-full max-w-md"
        >
          <motion.a
            href="https://wa.me/6282295542838?text=Halo%20Luna%20Roastery%2C%20saya%20ingin%20melakukan%20reservasi"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="btn-primary flex items-center gap-2 justify-center w-full sm:w-auto py-3 px-6"
            style={{ textDecoration: 'none', borderRadius: '12px', fontSize: '14px', fontWeight: 600 }}
          >
            <CalendarIcon size={16} />
            Reservasi Sekarang
          </motion.a>
          <motion.a
            href="https://wa.me/6282295542838"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -2, backgroundColor: 'rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.98 }}
            className="btn-outline flex items-center gap-2 justify-center w-full sm:w-auto py-3 px-6"
            style={{ textDecoration: 'none', borderRadius: '12px', fontSize: '14px', fontWeight: 600, color: 'white', border: '1px solid rgba(255,255,255,0.4)' }}
          >
            <PhoneIcon size={16} />
            Hubungi Kami
          </motion.a>
        </motion.div>

        {/* Quick info row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 sm:p-8 rounded-2xl w-full max-w-3xl"
          style={{
            background: 'rgba(255, 255, 255, 0.03)',
            border: '1px solid rgba(255, 255, 255, 0.06)',
            backdropFilter: 'blur(12px)',
          }}
        >
          {[
            { label: 'Buka Setiap Hari', sub: 'Hingga 22.00 WIB' },
            { label: 'Free WiFi', sub: 'Kecepatan Tinggi' },
            { label: 'Parkir Luas', sub: 'Tersedia Gratis' },
          ].map((item, index) => (
            <div key={item.label} className="text-center relative flex flex-col justify-center">
              {index > 0 && (
                <div className="hidden sm:block absolute left-0 top-1/4 bottom-1/4 w-[1px]" style={{ background: 'rgba(255,255,255,0.1)' }} />
              )}
              <div className="text-white font-semibold text-[14px] tracking-wide">{item.label}</div>
              <div className="text-white/50 text-[12px] mt-1">{item.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}