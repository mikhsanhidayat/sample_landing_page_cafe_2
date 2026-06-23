import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=700&q=80&fit=crop', alt: 'Interior Cafe' },
  { id: 2, src: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=700&q=80&fit=crop', alt: 'Suasana Cafe' },
  { id: 3, src: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=700&q=80&fit=crop', alt: 'Penyajian Kopi' },
  { id: 4, src: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=700&q=80&fit=crop', alt: 'Area Outdoor' },
  { id: 5, src: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=700&q=80&fit=crop', alt: 'Kopi Spesial' },
  { id: 6, src: 'https://images.unsplash.com/photo-1565299715199-866c917206bb?w=700&q=80&fit=crop', alt: 'Menu Makanan' },
  { id: 7, src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=700&q=80&fit=crop', alt: 'Bar Area' },
  { id: 8, src: 'https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?w=700&q=80&fit=crop', alt: 'Area Nongkrong' },
  { id: 9, src: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=700&q=80&fit=crop', alt: 'Dessert' },
];

export default function Gallery({ darkMode }) {
  const [ref, inView] = useInView({ threshold: 0.05 });
  const [lightbox, setLightbox] = useState(null);

  const prev = () => setLightbox((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  const next = () => setLightbox((i) => (i + 1) % galleryImages.length);

  return (
    <section id="gallery" style={{ padding: '96px 24px', background: darkMode ? '#0f0a07' : '#FAF8F5' }}>
      <div ref={ref} style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="section-tag">📸 Galeri</div>
          <h2 className="section-title">Suasana <span className="gradient-text">Luna Roastery</span></h2>
          <div className="divider" />
        </motion.div>

        {/* Masonry grid */}
        <div className="masonry-grid">
          {galleryImages.map((img, i) => (
            <motion.div key={img.id}
              initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.08 }}
              onClick={() => setLightbox(i)}
              className="masonry-item"
              style={{ cursor: 'pointer' }}>
              <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 16 }}>
                <img src={img.src} alt={img.alt} style={{ width: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.7s ease' }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.06)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  loading="lazy" />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'rgba(59,42,30,0)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'background 0.3s ease',
                  borderRadius: 16,
                }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(59,42,30,0.55)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(59,42,30,0)'}>
                  <span style={{ color: 'white', fontSize: 32, opacity: 0, transition: 'opacity 0.3s' }}
                    ref={(el) => {
                      if (el) {
                        el.parentElement.addEventListener('mouseenter', () => el.style.opacity = '1');
                        el.parentElement.addEventListener('mouseleave', () => el.style.opacity = '0');
                      }
                    }}>🔍</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 9999,
              background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(12px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
            onClick={() => setLightbox(null)}>
            {/* Close */}
            <button onClick={() => setLightbox(null)}
              style={{
                position: 'absolute', top: 20, right: 20,
                width: 44, height: 44, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.1)', color: 'white', fontSize: 20, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>✕</button>
            {/* Prev */}
            <button onClick={(e) => { e.stopPropagation(); prev(); }}
              style={{
                position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)',
                width: 44, height: 44, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.1)', color: 'white', fontSize: 24, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>‹</button>
            {/* Image */}
            <motion.img key={lightbox}
              initial={{ scale: 0.85, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.85, opacity: 0 }} transition={{ duration: 0.3 }}
              src={galleryImages[lightbox].src} alt={galleryImages[lightbox].alt}
              onClick={(e) => e.stopPropagation()}
              style={{ maxWidth: '85vw', maxHeight: '85vh', objectFit: 'contain', borderRadius: 16, boxShadow: '0 40px 100px rgba(0,0,0,0.5)' }} />
            {/* Next */}
            <button onClick={(e) => { e.stopPropagation(); next(); }}
              style={{
                position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)',
                width: 44, height: 44, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)',
                background: 'rgba(255,255,255,0.1)', color: 'white', fontSize: 24, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>›</button>
            {/* Dots */}
            <div style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 8 }}>
              {galleryImages.map((_, i) => (
                <button key={i} onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                  style={{ width: i === lightbox ? 24 : 8, height: 8, borderRadius: 4, border: 'none', cursor: 'pointer', background: i === lightbox ? '#C97A40' : 'rgba(255,255,255,0.3)', transition: 'all 0.3s' }} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
