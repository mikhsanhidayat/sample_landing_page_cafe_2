import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import Location from './components/Location';
import InstagramFeed from './components/InstagramFeed';
import Reservation from './components/Reservation';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark class to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDark = () => setDarkMode((d) => !d);

  return (
    <div className={darkMode ? 'dark' : ''}>
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      <Navbar darkMode={darkMode} toggleDark={toggleDark} />
      <main>
        <Hero darkMode={darkMode} />
        <About darkMode={darkMode} />
        <WhyUs darkMode={darkMode} />
        <Menu darkMode={darkMode} />
        <Gallery darkMode={darkMode} />
        <Reviews darkMode={darkMode} />
        <Location darkMode={darkMode} />
        <InstagramFeed darkMode={darkMode} />
        <Reservation darkMode={darkMode} />
      </main>
      <Footer darkMode={darkMode} />
    </div>
  );
}
