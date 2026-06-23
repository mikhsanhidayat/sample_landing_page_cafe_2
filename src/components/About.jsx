import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const advantages = [
  'Kopi Berkualitas Tinggi',
  'Tempat Nyaman & Elegan',
  'Free WiFi Super Cepat',
  'Cocok untuk Meeting',
  'Area Indoor & Outdoor',
];

const INTERIOR_IMG = 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80&fit=crop';

export default function About({ darkMode }) {
  const [ref, inView] = useInView({ threshold: 0.15 });

  const card = {
    background: darkMode ? '#1a1008' : 'white',
    border: `1px solid ${darkMode ? '#3d2a18' : 'rgba(214,181,142,0.25)'}`,
  };

  return (
    <section id="about" style={{ padding: '96px 24px', background: darkMode ? '#110b05' : 'white' }}>
      <div ref={ref} style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 64, alignItems: 'center' }}>

          {/* Left: Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative' }}
          >
            <div style={{ position: 'absolute', top: -20, left: -20, width: 120, height: 120, borderRadius: 24, background: 'rgba(201,122,64,0.07)', zIndex: 0 }} />
            <div style={{ position: 'absolute', bottom: -20, right: -20, width: 80, height: 80, borderRadius: '50%', background: 'rgba(214,181,142,0.12)', zIndex: 0 }} />
            <div style={{ position: 'relative', zIndex: 1, borderRadius: 24, overflow: 'hidden', boxShadow: '0 30px 80px rgba(59,42,30,0.18)' }}>
              <img src={INTERIOR_IMG} alt="Interior Luna Roastery" style={{ width: '100%', height: 460, objectFit: 'cover', display: 'block' }} loading="lazy" />
              {/* Badges */}
              <div style={{
                position: 'absolute', top: 20, right: 20,
                padding: '8px 16px', borderRadius: 14,
                background: 'rgba(59,42,30,0.85)', backdropFilter: 'blur(10px)',
                border: '1px solid rgba(214,181,142,0.2)',
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#4ade80', animation: 'pulse 2s infinite' }} />
                <span style={{ color: 'white', fontSize: 12, fontWeight: 600 }}>Buka Sekarang</span>
              </div>
              <div style={{
                position: 'absolute', bottom: 20, left: 20,
                padding: '12px 16px', borderRadius: 14,
                background: 'rgba(201,122,64,0.9)',
              }}>
                <div style={{ color: 'white', fontSize: 24, fontWeight: 700, fontFamily: 'serif', lineHeight: 1 }}>5+</div>
                <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 11 }}>Tahun Berdiri</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="section-tag">✦ Tentang Kami</div>
            <h2 className="section-title" style={{ marginBottom: 8 }}>
              Tentang <span className="gradient-text">Luna Roastery</span>
            </h2>
            <div className="divider" style={{ margin: '0 0 24px 0' }} />

            <p style={{ lineHeight: 1.8, marginBottom: 12, color: darkMode ? '#c8b8a0' : '#5a4a3a', fontSize: '1.02rem' }}>
              Luna Roastery adalah tempat berkumpul yang menghadirkan perpaduan kopi berkualitas, makanan lezat, dan suasana yang nyaman.
            </p>
            <p style={{ lineHeight: 1.8, marginBottom: 32, color: darkMode ? '#c8b8a0' : '#5a4a3a' }}>
              Cocok untuk bekerja, berkumpul bersama teman, maupun menikmati waktu santai bersama keluarga. Setiap sudut dirancang dengan penuh perhatian.
            </p>

            {/* Advantages */}
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
              {advantages.map((item, i) => (
                <motion.li key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: 10, flexShrink: 0,
                    background: 'rgba(201,122,64,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 16,
                  }}>✔️</div>
                  <span style={{ fontWeight: 500, color: darkMode ? '#f0e8dc' : '#3B2A1E' }}>{item}</span>
                </motion.li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: 16, marginTop: 36, flexWrap: 'wrap' }}>
              <button onClick={() => document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })} className="btn-primary">
                Lihat Menu Kami
              </button>
              <button onClick={() => document.querySelector('#location')?.scrollIntoView({ behavior: 'smooth' })} className="btn-accent">
                Temukan Kami
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
