import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const features = [
  { icon: '☕', title: 'Premium Coffee', desc: 'Menggunakan biji kopi pilihan single origin dan specialty grade yang diproses dengan teknik modern untuk menghasilkan cita rasa terbaik.', color: '#C97A40', bg: 'rgba(201,122,64,0.08)' },
  { icon: '🍽️', title: 'Delicious Food', desc: 'Menu makanan berkualitas tinggi yang dibuat dari bahan-bahan segar pilihan dengan resep eksklusif oleh chef berpengalaman.', color: '#3B2A1E', bg: 'rgba(59,42,30,0.06)' },
  { icon: '🏡', title: 'Cozy Atmosphere', desc: 'Suasana nyaman dan instagramable dengan desain interior modern yang memadukan estetika minimalis dan sentuhan lokal yang hangat.', color: '#C97A40', bg: 'rgba(214,181,142,0.15)' },
  { icon: '⚡', title: 'Fast Service', desc: 'Pelayanan cepat dan ramah dari tim profesional kami yang siap memastikan pengalaman terbaik untuk setiap pelanggan.', color: '#3B2A1E', bg: 'rgba(201,122,64,0.08)' },
];

export default function WhyUs({ darkMode }) {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section style={{ padding: '96px 24px', position: 'relative', overflow: 'hidden', background: darkMode ? '#0f0a07' : '#FAF8F5' }}>
      {/* Deco */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,122,64,0.04) 0%, transparent 70%)', transform: 'translate(30%,-30%)', pointerEvents: 'none' }} />

      <div ref={ref} style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 60 }}>
          <div className="section-tag">✦ Keunggulan Kami</div>
          <h2 className="section-title">Kenapa Memilih <span className="gradient-text">Kami?</span></h2>
          <div className="divider" />
          <p style={{ maxWidth: 500, margin: '16px auto 0', color: darkMode ? '#c8b8a0' : '#7a6a5a' }}>
            Kami berkomitmen memberikan pengalaman terbaik yang memadukan kualitas, kenyamanan, dan pelayanan prima.
          </p>
        </motion.div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
          {features.map((f, i) => (
            <motion.div key={f.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -10, scale: 1.02 }}
              style={{
                borderRadius: 24, padding: 32, position: 'relative',
                background: darkMode ? '#1a1008' : 'white',
                border: `1px solid ${darkMode ? '#3d2a18' : 'rgba(214,181,142,0.2)'}`,
                boxShadow: '0 10px 40px rgba(59,42,30,0.06)',
                transition: 'box-shadow 0.4s ease',
                cursor: 'default', overflow: 'hidden',
              }}>
              {/* Icon */}
              <div style={{
                width: 64, height: 64, borderRadius: 18,
                background: f.bg, display: 'flex', alignItems: 'center',
                justifyContent: 'center', marginBottom: 20, fontSize: 28,
              }}>
                {f.icon}
              </div>
              {/* Title */}
              <h3 style={{
                fontSize: 20, fontWeight: 700, marginBottom: 12,
                fontFamily: '"Playfair Display", Georgia, serif',
                color: darkMode ? '#f0e8dc' : '#3B2A1E',
              }}>{f.title}</h3>
              {/* Desc */}
              <p style={{ fontSize: 14, lineHeight: 1.7, color: darkMode ? '#c8b8a0' : '#7a6a5a' }}>{f.desc}</p>
              {/* Bottom accent */}
              <div style={{ position: 'absolute', bottom: 0, left: 24, right: 24, height: 2, borderRadius: 2, background: `linear-gradient(90deg, transparent, ${f.color}50, transparent)` }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
