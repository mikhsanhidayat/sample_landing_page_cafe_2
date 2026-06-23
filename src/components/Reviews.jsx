import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const reviews = [
  {
    id: 1,
    name: 'Rizky Pratama',
    role: 'Pelanggan Setia',
    avatar: 'https://i.pravatar.cc/100?img=11',
    rating: 5,
    text: 'Kopi di Luna Roastery benar-benar premium banget! Signature Latte-nya jadi favorit saya. Suasananya juga sangat nyaman untuk kerja atau santai. Pasti balik lagi!',
    date: '2 minggu lalu',
  },
  {
    id: 2,
    name: 'Siti Nurhaliza',
    role: 'Food Blogger',
    avatar: 'https://i.pravatar.cc/100?img=25',
    rating: 5,
    text: 'Tempat yang sangat instagramable! Desain interiornya keren, menu makanannya juga enak-enak. Cold Brew Caramel-nya best seller dan memang layak jadi best seller.',
    date: '1 bulan lalu',
  },
  {
    id: 3,
    name: 'Ahmad Fauzi',
    role: 'Pengunjung',
    avatar: 'https://i.pravatar.cc/100?img=33',
    rating: 4,
    text: 'Cocok banget buat meeting sama klien. WiFi-nya kenceng, kursinya nyaman, dan pelayanannya ramah. Harga juga sangat worth it dengan kualitasnya.',
    date: '3 minggu lalu',
  },
  {
    id: 4,
    name: 'Dewi Rahayu',
    role: 'Mahasiswi',
    avatar: 'https://i.pravatar.cc/100?img=47',
    rating: 5,
    text: 'Luna Roastery jadi tempat nongkrong favorit saya dan teman-teman. Matcha latte-nya enak banget dan Tiramisu-nya juara! Highly recommended!',
    date: '1 minggu lalu',
  },
  {
    id: 5,
    name: 'Budi Santoso',
    role: 'Pebisnis',
    avatar: 'https://i.pravatar.cc/100?img=56',
    rating: 5,
    text: 'Sudah beberapa kali meeting di sini. Tempatnya kondusif, coffee-nya mantap, staff-nya profesional. Area outdoor-nya juga bagus untuk sore hari.',
    date: '5 hari lalu',
  },
];

const StarIcon = ({ size = 20, fill = 'none', color = 'currentColor' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const ChevronLeftIcon = ({ size = 22 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRightIcon = ({ size = 22 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const QuoteIcon = ({ size = 20, color = 'currentColor' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v4c0 1.25.75 2 2 2h3c0 1.5-1 2.5-3 3.5V21Zm12 0c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v4c0 1.25.75 2 2 2h3c0 1.5-1 2.5-3 3.5V21Z" />
  </svg>
);

export default function Reviews({ darkMode }) {
  const [ref, inView] = useInView({ threshold: 0.1 });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((c) => (c + 1) % reviews.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  }, []);

  // Auto-play
  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 40 : -40, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -40 : 40, opacity: 0 }),
  };

  const r = reviews[current];

  return (
    <section id="reviews" className={`py-32 px-6 overflow-hidden ${darkMode ? 'bg-[#0a0603]' : 'bg-[#FAF8F5]'}`}>
      <div ref={ref} className="w-full" style={{ maxWidth: 1000, margin: '0 auto' }}>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: 'rgba(201,122,64,0.1)', border: '1px solid rgba(201,122,64,0.2)' }}>
            <StarIcon size={14} color="#C97A40" fill="#C97A40" />
            <span className="text-xs font-bold tracking-widest text-[#C97A40] uppercase">Testimoni</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: darkMode ? '#f0e8dc' : '#3B2A1E' }}>
            Apa Kata <span style={{ color: '#C97A40' }}>Pengunjung</span>
          </h2>
          
          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-4 text-sm" style={{ color: darkMode ? '#c8b8a0' : '#7a6a5a' }}>
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg text-[#C97A40]">4.7</span>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map(s => (
                  <StarIcon key={s} size={14} fill={s <= 4 ? '#C97A40' : 'rgba(201, 122, 64, 0.3)'} color={s <= 4 ? '#C97A40' : 'transparent'} />
                ))}
              </div>
            </div>
            <div className="w-1 h-1 rounded-full bg-[#D6B58E]/50" />
            <span>670+ Ulasan</span>
          </div>
        </motion.div>

        {/* Main Testimonial Area */}
        <div className="relative w-full" style={{ maxWidth: 850, margin: '0 auto' }}>
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={r.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="relative rounded-3xl p-8 md:p-10 w-full"
              style={{
                background: darkMode ? '#140c07' : '#ffffff',
                border: darkMode ? '1px solid #2a1a0f' : '1px solid rgba(214,181,142,0.2)',
                boxShadow: darkMode ? '0 20px 40px rgba(0,0,0,0.4)' : '0 20px 40px rgba(59,42,30,0.05)',
              }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 opacity-10 pointer-events-none hidden md:block">
                <QuoteIcon size={80} color="#C97A40" />
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10 w-full">
                
                {/* 35% Customer Profile */}
                <div className="w-full md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left md:border-r border-[#D6B58E]/20 md:pr-8">
                  <div className="relative mb-5">
                    <img
                      src={r.avatar}
                      alt={r.name}
                      className="w-20 h-20 rounded-full object-cover"
                      style={{ border: '2px solid #C97A40', padding: '2px' }}
                    />
                  </div>
                  <h4 className="font-bold text-xl mb-1"
                    style={{ color: darkMode ? '#f0e8dc' : '#3B2A1E', fontFamily: 'Playfair Display, serif' }}>
                    {r.name}
                  </h4>
                  <p className="text-sm font-medium mb-3" style={{ color: '#C97A40' }}>{r.role}</p>
                  
                  <div className="flex gap-1 mb-2">
                    {[...Array(r.rating)].map((_, i) => (
                      <StarIcon key={i} size={14} fill="#C97A40" color="#C97A40" />
                    ))}
                  </div>
                </div>

                {/* 65% Review Content */}
                <div className="w-full md:w-2/3 flex flex-col justify-center" style={{ minHeight: 140 }}>
                  <p className="text-xl md:text-2xl leading-relaxed italic"
                    style={{
                      color: darkMode ? '#e0d0bc' : '#3B2A1E',
                      fontFamily: 'Cormorant Garamond, serif',
                    }}>
                    "{r.text}"
                  </p>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-10 px-2 md:px-0">
            
            {/* Dots Indicator */}
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? 24 : 8,
                    height: 8,
                    background: i === current ? '#C97A40' : (darkMode ? '#2a1a0f' : 'rgba(214,181,142,0.4)'),
                    border: 'none',
                    padding: 0,
                  }}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            {/* Prev/Next Buttons */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-105"
                style={{
                  background: darkMode ? '#1a1008' : '#fff',
                  border: darkMode ? '1px solid #3d2a18' : '1px solid rgba(214,181,142,0.4)',
                  color: darkMode ? '#f0e8dc' : '#3B2A1E',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  cursor: 'pointer'
                }}
              >
                <ChevronLeftIcon size={20} />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-105"
                style={{ 
                  background: 'linear-gradient(135deg, #C97A40, #a85e28)', 
                  color: 'white',
                  border: 'none',
                  boxShadow: '0 4px 15px rgba(201,122,64,0.3)',
                  cursor: 'pointer'
                }}
              >
                <ChevronRightIcon size={20} />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
