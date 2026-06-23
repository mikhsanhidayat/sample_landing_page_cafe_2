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
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 120 : -120, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir) => ({ x: dir > 0 ? -120 : 120, opacity: 0, scale: 0.95 }),
  };

  const r = reviews[current];

  return (
    <section id="reviews" className={`py-24 px-6 ${darkMode ? 'bg-[#110b05]' : 'bg-white'}`}>
      <div ref={ref} style={{ maxWidth: 1000, marginLeft: 'auto', marginRight: 'auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="section-tag">⭐ Testimoni</div>
          <h2 className="section-title">Apa Kata <span className="gradient-text">Pengunjung</span></h2>
          <div className="divider" />

          {/* Overall rating */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-6 mt-6 px-8 py-4 rounded-2xl"
            style={{
              background: darkMode ? '#1a1008' : '#FAF8F5',
              border: darkMode ? '1px solid #3d2a18' : '1px solid rgba(214,181,142,0.3)',
            }}
          >
            <div>
              <div className="text-5xl font-bold" style={{ color: '#C97A40', fontFamily: 'Playfair Display, serif' }}>4.7</div>
              <div className={`text-sm mt-1 ${darkMode ? 'text-[#c8b8a0]' : 'text-[#7a6a5a]'}`}>dari 5 bintang</div>
            </div>
            <div className="w-px h-14 bg-[#D6B58E]/30" />
            <div>
              <div className="flex gap-1 mb-1">
                {[1,2,3,4,5].map(s => (
                  <StarIcon key={s} size={20} fill={s <= 4 ? '#C97A40' : 'rgba(214, 181, 142, 0.5)'} color={s <= 4 ? '#C97A40' : 'rgba(214, 181, 142, 0.5)'} />
                ))}
              </div>
              <div className={`text-sm ${darkMode ? 'text-[#c8b8a0]' : 'text-[#7a6a5a]'}`}>670+ Ulasan</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Main testimonial card */}
        <div className="relative">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={r.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="testimonial-card relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #C97A40, #a85e28)' }}>
                <QuoteIcon size={20} color="white" />
              </div>

              <div className="grid md:grid-cols-3 gap-8 items-center pt-4">
                {/* Reviewer info */}
                <div className="flex flex-col items-center text-center md:border-r md:border-[#D6B58E]/20 md:pr-8">
                  <div className="relative mb-4">
                    <img
                      src={r.avatar}
                      alt={r.name}
                      className="w-20 h-20 rounded-full object-cover"
                      style={{ border: '3px solid #C97A40' }}
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ background: '#C97A40', border: '2px solid white' }}>
                      <StarIcon size={14} fill="white" color="white" />
                    </div>
                  </div>
                  <h4 className="font-bold text-lg"
                    style={{ color: darkMode ? '#f0e8dc' : '#3B2A1E', fontFamily: 'Playfair Display, serif' }}>
                    {r.name}
                  </h4>
                  <p style={{ color: '#C97A40', fontSize: 13 }} className="font-medium">{r.role}</p>
                  <div className="flex gap-1 mt-2">
                    {[...Array(r.rating)].map((_, i) => (
                      <StarIcon key={i} size={14} fill="#C97A40" color="#C97A40" />
                    ))}
                  </div>
                  <p className={`text-xs mt-2 ${darkMode ? 'text-[#c8b8a0]' : 'text-[#9a8a7a]'}`}>{r.date}</p>
                </div>

                {/* Review text */}
                <div className="md:col-span-2">
                  <p className="text-lg leading-relaxed italic"
                    style={{
                      color: darkMode ? '#e0d0bc' : '#4a3a2a',
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
                    }}>
                    "{r.text}"
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10">
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  whileHover={{ scale: 1.2 }}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? 32 : 10,
                    height: 10,
                    background: i === current ? '#C97A40' : (darkMode ? '#3d2a18' : 'rgba(201,122,64,0.2)'),
                  }}
                />
              ))}
            </div>

            <div className="flex gap-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={prev}
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  background: darkMode ? '#1a1008' : '#FAF8F5',
                  border: darkMode ? '1px solid #3d2a18' : '1px solid rgba(214,181,142,0.3)',
                  color: darkMode ? '#f0e8dc' : '#3B2A1E',
                }}
              >
                <ChevronLeftIcon size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={next}
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #C97A40, #a85e28)', color: 'white' }}
              >
                <ChevronRightIcon size={20} />
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mini cards row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-12">
          {reviews.map((r2, i) => (
            <motion.button
              key={r2.id}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center p-3 rounded-2xl transition-all"
              style={{
                background: current === i
                  ? 'linear-gradient(135deg, rgba(201,122,64,0.15), rgba(201,122,64,0.05))'
                  : (darkMode ? '#1a1008' : 'transparent'),
                border: current === i
                  ? '1px solid rgba(201,122,64,0.4)'
                  : '1px solid transparent',
              }}
            >
              <img src={r2.avatar} alt={r2.name} className="w-10 h-10 rounded-full object-cover mb-2"
                style={{ border: current === i ? '2px solid #C97A40' : '2px solid transparent' }} />
              <span className={`text-xs font-medium ${darkMode ? 'text-[#f0e8dc]' : 'text-[#3B2A1E]'}`}>
                {r2.name.split(' ')[0]}
              </span>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
