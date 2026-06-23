import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const stats = [
  { icon: '⭐', value: '4.7/5', label: 'Rating' },
  { icon: '📝', value: '670+', label: 'Ulasan' },
  { icon: '📍', value: 'Bandung', label: 'Jawa Barat' },
  { icon: '☕', value: 'Rp25-50k', label: 'Harga' },
];

const SLIDESHOW_IMAGES = [
  'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&q=85&fit=crop', // Interior premium
  'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=1920&q=85&fit=crop', // Barista making coffee
  'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=1920&q=85&fit=crop', // Close-up latte art
  'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&q=85&fit=crop', // Cozy seating area
  'https://images.unsplash.com/photo-1495474472207-464a4d965977?w=1920&q=85&fit=crop', // Premium food menu
  'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=1920&q=85&fit=crop', // Night ambiance
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  // Auto slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDESHOW_IMAGES.length);
    }, 6000); // 6 seconds per slide
    return () => clearInterval(timer);
  }, []);

  const scrollDown = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" ref={ref} style={{ position: 'relative', height: '100vh', minHeight: 700, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      
      {/* Background Slideshow Container with Parallax */}
      <motion.div style={{ y, position: 'absolute', inset: 0, zIndex: 0, width: '100%', height: '120%' }}>
        <AnimatePresence initial={false}>
          <motion.img
            key={currentSlide}
            src={SLIDESHOW_IMAGES[currentSlide]}
            alt={`Cafe Ambiance ${currentSlide + 1}`}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.08 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1.5, ease: 'easeInOut' },
              scale: { duration: 6, ease: 'linear' } // Ken Burns effect matching the slide duration
            }}
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
            loading={currentSlide === 0 ? "eager" : "lazy"}
          />
        </AnimatePresence>

        {/* Premium Dark Overlays */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)', zIndex: 1 }} />
        <div style={{
          position: 'absolute', inset: 0, zIndex: 2,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.65) 100%)',
        }} />
      </motion.div>

      {/* Content */}
      <motion.div style={{ opacity, position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 24px', maxWidth: 900, margin: '0 auto' }}>
        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '8px 20px', borderRadius: 50,
            background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(20px)',
            border: '1px solid rgba(201,122,64,0.4)',
          }}>
            <span style={{ color: '#C97A40', fontSize: 14 }}>☕</span>
            <span style={{ color: '#D6B58E', fontSize: 12, fontWeight: 600, letterSpacing: 3, textTransform: 'uppercase' }}>
              Premium Coffee & Eatery
            </span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            color: 'white', fontWeight: 700, lineHeight: 1.2, marginBottom: 20,
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            fontFamily: '"Playfair Display", "Georgia", serif',
            textShadow: '0 4px 30px rgba(0,0,0,0.3)',
          }}>
          Cita Rasa Kopi yang<br />
          <span style={{ background: 'linear-gradient(135deg, #C97A40, #e8974d, #D6B58E)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Menghangatkan
          </span>{' '}Setiap Momen
        </motion.h1>

        {/* Subheadline */}
        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.6 }}
          style={{ color: 'rgba(255,255,255,0.75)', maxWidth: 600, margin: '0 auto 36px', lineHeight: 1.7, fontSize: 'clamp(0.9rem, 1.8vw, 1.1rem)' }}>
          Nikmati pengalaman ngopi yang nyaman dengan suasana modern, menu berkualitas, dan pelayanan terbaik di Luna Roastery.
        </motion.p>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: 16, justifyContent: 'center', marginBottom: 48 }}>
          <motion.button whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            ☕ Lihat Menu
          </motion.button>
          <motion.button whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector('#reservation')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline">
            Reservasi Sekarang
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 1.0 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
          {stats.map((s) => (
            <motion.div key={s.label} whileHover={{ scale: 1.06, y: -3 }}
              style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '10px 18px', borderRadius: 16,
                background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.12)',
              }}>
              <span style={{ fontSize: 18 }}>{s.icon}</span>
              <div style={{ textAlign: 'left' }}>
                <div style={{ color: 'white', fontWeight: 700, fontSize: 13 }}>{s.value}</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: 11 }}>{s.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Slide Navigation Indicators */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        style={{
          position: 'absolute', bottom: 110, left: '50%', transform: 'translateX(-50%)',
          display: 'flex', gap: 8, zIndex: 10
        }}
      >
        {SLIDESHOW_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            style={{
              width: idx === currentSlide ? 24 : 6,
              height: 6,
              borderRadius: 3,
              background: idx === currentSlide ? '#C97A40' : 'rgba(255,255,255,0.4)',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </motion.div>

      {/* Scroll indicator */}
      <motion.button onClick={scrollDown} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        style={{
          position: 'absolute', bottom: 32, left: '50%', transform: 'translateX(-50%)',
          zIndex: 10, background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6,
        }}>
        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 10, letterSpacing: 3, textTransform: 'uppercase' }}>Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            width: 28, height: 44, borderRadius: 14,
            border: '2px solid rgba(255,255,255,0.3)',
            display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: 6,
          }}>
          <motion.div animate={{ y: [0, 14, 0], opacity: [1, 0, 1] }} transition={{ duration: 1.5, repeat: Infinity }}
            style={{ width: 5, height: 5, borderRadius: '50%', background: '#C97A40' }} />
        </motion.div>
      </motion.button>
    </section>
  );
}
