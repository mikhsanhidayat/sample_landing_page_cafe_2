import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const InstagramIcon = ({ size = 18, color = 'currentColor' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const HeartIcon = ({ size = 18, fill = 'none' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const MessageIcon = ({ size = 18, fill = 'none' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const igPosts = [
  { id: 1, img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80&fit=crop', likes: '1.2k', comments: '48' },
  { id: 2, img: 'https://images.unsplash.com/photo-1565299715199-866c917206bb?w=400&q=80&fit=crop', likes: '985', comments: '32' },
  { id: 3, img: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80&fit=crop', likes: '2.1k', comments: '74' },
  { id: 4, img: 'https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?w=400&q=80&fit=crop', likes: '876', comments: '25' },
  { id: 5, img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80&fit=crop', likes: '1.5k', comments: '56' },
  { id: 6, img: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=400&q=80&fit=crop', likes: '743', comments: '19' },
];

export default function InstagramFeed({ darkMode }) {
  const [ref, inView] = useInView({ threshold: 0.1 });

  return (
    <section className={`py-24 px-6 ${darkMode ? 'bg-[#110b05]' : 'bg-white'}`}>
      <div ref={ref} style={{ maxWidth: 1200, marginLeft: 'auto', marginRight: 'auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="section-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <InstagramIcon size={14} />
            Instagram
          </div>
          <h2 className="section-title">Ikuti Kami di <span className="gradient-text">Instagram</span></h2>
          <div className="divider" />
          <p className={`max-w-xl mx-auto mt-4 ${darkMode ? 'text-[#c8b8a0]' : 'text-[#7a6a5a]'}`}>
            Dapatkan inspirasi dan update terbaru dari Luna Roastery setiap hari di Instagram kami.
          </p>

          {/* IG Profile badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-3 mt-6 px-6 py-3 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(201,122,64,0.1), rgba(214,181,142,0.08))',
              border: '1px solid rgba(201,122,64,0.25)',
            }}
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)' }}>
              <InstagramIcon size={18} color="white" />
            </div>
            <div className="text-left">
              <p className="font-bold text-sm" style={{ color: darkMode ? '#f0e8dc' : '#3B2A1E' }}>@lunaroastery</p>
              <p className={`text-xs ${darkMode ? 'text-[#c8b8a0]' : 'text-[#7a6a5a]'}`}>Klik untuk follow!</p>
            </div>
          </motion.div>
        </motion.div>

        {/* IG Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {igPosts.map((post, i) => (
            <motion.a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="instagram-item"
            >
              <img
                src={post.img}
                alt={`Luna Roastery Instagram post ${post.id}`}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="ig-overlay flex-col gap-3">
                <div className="flex gap-6">
                  <span className="text-white flex items-center gap-1.5 font-semibold">
                    <HeartIcon size={18} fill="white" />
                    {post.likes}
                  </span>
                  <span className="text-white flex items-center gap-1.5 font-semibold">
                    <MessageIcon size={18} fill="white" />
                    {post.comments}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Follow button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              background: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
              boxShadow: '0 10px 40px rgba(220, 39, 67, 0.3)',
              textDecoration: 'none',
              fontSize: 15,
            }}
          >
            <InstagramIcon size={20} />
            Follow @lunaroastery
          </a>
        </motion.div>
      </div>
    </section>
  );
}
