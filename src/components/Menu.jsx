import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const categories = ['Semua', 'Coffee', 'Non Coffee', 'Food', 'Dessert'];

const menuItems = [
  { id: 1, category: 'Coffee', name: 'Signature Latte', desc: 'Espresso premium dengan susu steamed creamy dan latte art', price: 'Rp 32.000', img: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400&q=80&fit=crop' },
  { id: 2, category: 'Coffee', name: 'Cold Brew Caramel', desc: 'Cold brew 18 jam dengan siraman saus karamel homemade', price: 'Rp 38.000', img: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400&q=80&fit=crop' },
  { id: 3, category: 'Coffee', name: 'Espresso Tonic', desc: 'Double espresso dengan tonic water segar dan jeruk', price: 'Rp 35.000', img: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&q=80&fit=crop' },
  { id: 4, category: 'Coffee', name: 'Cappuccino', desc: 'Espresso klasik dengan foam susu tebal dan sedikit kayu manis', price: 'Rp 28.000', img: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=400&q=80&fit=crop' },
  { id: 5, category: 'Non Coffee', name: 'Matcha Latte', desc: 'Matcha grade A dengan susu oat dan sedikit madu alami', price: 'Rp 35.000', img: 'https://images.unsplash.com/photo-1515823662972-da6a2ab5474a?w=400&q=80&fit=crop' },
  { id: 6, category: 'Non Coffee', name: 'Taro Cream', desc: 'Minuman taro segar dengan topping whipped cream lembut', price: 'Rp 32.000', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80&fit=crop' },
  { id: 7, category: 'Non Coffee', name: 'Strawberry Smoothie', desc: 'Smoothie stroberi segar dengan yogurt dan granola', price: 'Rp 30.000', img: 'https://images.unsplash.com/photo-1553530666-ba11a90a3aad?w=400&q=80&fit=crop' },
  { id: 8, category: 'Food', name: 'Crispy Chicken Sandwich', desc: 'Ayam crispy juicy dengan saus spesial dan selada segar', price: 'Rp 45.000', img: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&q=80&fit=crop' },
  { id: 9, category: 'Food', name: 'Avocado Toast', desc: 'Roti sourdough panggang dengan alpukat dan telur poached', price: 'Rp 42.000', img: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c820?w=400&q=80&fit=crop' },
  { id: 10, category: 'Food', name: 'Pasta Carbonara', desc: 'Pasta spaghetti dengan saus carbonara, bacon, dan parmesan', price: 'Rp 48.000', img: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&q=80&fit=crop' },
  { id: 11, category: 'Dessert', name: 'Tiramisu', desc: 'Tiramisu klasik Italia dengan ladyfinger dan mascarpone creamy', price: 'Rp 38.000', img: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80&fit=crop' },
  { id: 12, category: 'Dessert', name: 'Chocolate Lava', desc: 'Kue cokelat hangat dengan lelehan cokelat di dalam dan ice cream', price: 'Rp 40.000', img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80&fit=crop' },
];

export default function Menu({ darkMode }) {
  const [ref, inView] = useInView({ threshold: 0.05 });
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filtered = activeCategory === 'Semua' ? menuItems : menuItems.filter((m) => m.category === activeCategory);

  return (
    <section id="menu" style={{ padding: '96px 24px', background: darkMode ? '#110b05' : 'white' }}>
      <div ref={ref} style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7 }}
          style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="section-tag">☕ Menu Kami</div>
          <h2 className="section-title">Menu <span className="gradient-text">Favorit</span></h2>
          <div className="divider" />
          <p style={{ maxWidth: 500, margin: '16px auto 0', color: darkMode ? '#c8b8a0' : '#7a6a5a' }}>
            Temukan pilihan kopi, minuman, dan makanan terbaik yang telah menjadi favorit pelanggan setia kami.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 }}
          style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10, marginBottom: 48 }}>
          {categories.map((cat) => (
            <motion.button key={cat} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}
              onClick={() => setActiveCategory(cat)}
              className={`cat-tab${activeCategory === cat ? ' active' : ''}`}>
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          <motion.div key={activeCategory}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.4 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 24 }}>
            {filtered.map((item, i) => (
              <motion.div key={item.id}
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -8, boxShadow: '0 24px 60px rgba(59,42,30,0.15)' }}
                style={{
                  borderRadius: 24, overflow: 'hidden',
                  background: darkMode ? '#1a1008' : '#FAF8F5',
                  border: `1px solid ${darkMode ? '#3d2a18' : 'rgba(214,181,142,0.2)'}`,
                  boxShadow: '0 4px 24px rgba(59,42,30,0.07)',
                  transition: 'box-shadow 0.4s ease',
                  cursor: 'default',
                }}>
                {/* Image */}
                <div style={{ height: 200, overflow: 'hidden', position: 'relative' }}>
                  <motion.img src={item.img} alt={item.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    whileHover={{ scale: 1.1 }} transition={{ duration: 0.6 }}
                    loading="lazy" />
                  <div style={{
                    position: 'absolute', top: 10, left: 10,
                    padding: '4px 12px', borderRadius: 50,
                    background: 'rgba(59,42,30,0.8)', color: '#D6B58E',
                    fontSize: 11, fontWeight: 600, backdropFilter: 'blur(6px)',
                  }}>{item.category}</div>
                </div>
                {/* Content */}
                <div style={{ padding: '18px 20px' }}>
                  <h3 style={{ fontFamily: '"Playfair Display", Georgia, serif', fontWeight: 700, fontSize: 16, marginBottom: 6, color: darkMode ? '#f0e8dc' : '#3B2A1E' }}>
                    {item.name}
                  </h3>
                  <p style={{ fontSize: 12, color: darkMode ? '#c8b8a0' : '#7a6a5a', lineHeight: 1.6, marginBottom: 14 }}>
                    {item.desc}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontWeight: 700, color: '#C97A40', fontFamily: '"Playfair Display", Georgia, serif', fontSize: 15 }}>
                      {item.price}
                    </span>
                    <motion.button whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.9 }}
                      style={{ width: 32, height: 32, borderRadius: 10, border: 'none', cursor: 'pointer', background: 'rgba(201,122,64,0.12)', color: '#C97A40', fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                      +
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* CTA */}
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.8 }}
          style={{ textAlign: 'center', marginTop: 48 }}>
          <a href="https://wa.me/6282295542838" target="_blank" rel="noopener noreferrer" className="btn-primary"
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            🛍️ Pesan via WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}
