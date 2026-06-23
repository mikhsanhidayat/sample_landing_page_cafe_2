import { useEffect, useRef, useState } from 'react';

// Stable particle data (tidak pakai Math.random() di render)
const PARTICLES = [
  { w: 28, h: 28, left: '10%', delay: 0 },
  { w: 18, h: 18, left: '25%', delay: 0.3 },
  { w: 35, h: 35, left: '45%', delay: 0.6 },
  { w: 20, h: 20, left: '60%', delay: 0.9 },
  { w: 14, h: 14, left: '75%', delay: 0.2 },
  { w: 24, h: 24, left: '88%', delay: 0.5 },
];

export default function LoadingScreen({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const timerRef = useRef(null);
  const onFinishRef = useRef(onFinish);
  onFinishRef.current = onFinish;

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setProgress((p) => {
        const next = p + 2;
        if (next >= 100) {
          clearInterval(timerRef.current);
          setDone(true);
          return 100;
        }
        return next;
      });
    }, 40);
    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    if (done) {
      const t = setTimeout(() => onFinishRef.current(), 600);
      return () => clearTimeout(t);
    }
  }, [done]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'linear-gradient(135deg, #3B2A1E 0%, #1a0e06 100%)',
        opacity: done ? 0 : 1,
        transition: 'opacity 0.6s ease-out',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 32,
        overflow: 'hidden',
      }}
    >
      {/* Floating particles */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            width: p.w,
            height: p.h,
            borderRadius: '50%',
            background: 'rgba(201, 122, 64, 0.12)',
            left: p.left,
            top: '60%',
            animation: `particleFloat 3s ease-out ${p.delay}s infinite`,
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Coffee cup icon */}
      <div style={{ textAlign: 'center', animation: 'fadeInUp 0.6s ease-out' }}>
        {/* Steam lines */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 8, height: 40 }}>
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: 3,
                height: '100%',
                borderRadius: 2,
                background: 'rgba(214, 181, 142, 0.5)',
                animation: `steam 1.5s ease-out ${i * 0.3}s infinite`,
              }}
            />
          ))}
        </div>

        {/* Cup */}
        <div style={{
          width: 80,
          height: 80,
          borderRadius: 20,
          background: 'linear-gradient(135deg, #C97A40, #a85e28)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto',
          boxShadow: '0 0 40px rgba(201,122,64,0.4)',
          animation: 'pulseCup 2s ease-in-out infinite',
          fontSize: 36,
        }}>
          ☕
        </div>

        {/* Saucer */}
        <div style={{
          width: 100,
          height: 8,
          borderRadius: 8,
          background: 'rgba(214, 181, 142, 0.2)',
          margin: '8px auto 0',
        }} />
      </div>

      {/* Brand name */}
      <div style={{ textAlign: 'center', animation: 'fadeInUp 0.6s ease-out 0.2s both' }}>
        <h1 style={{
          fontSize: 40,
          fontWeight: 700,
          color: 'white',
          letterSpacing: 6,
          fontFamily: 'serif',
          marginBottom: 4,
        }}>
          Luna Roastery
        </h1>
        <p style={{
          color: '#D6B58E',
          fontSize: 12,
          letterSpacing: 6,
          textTransform: 'uppercase',
        }}>
          Coffee &amp; Eatery
        </p>
      </div>

      {/* Progress bar */}
      <div style={{ width: 260, animation: 'fadeInUp 0.6s ease-out 0.4s both' }}>
        <div style={{
          width: '100%',
          height: 4,
          borderRadius: 4,
          background: 'rgba(255,255,255,0.08)',
          overflow: 'hidden',
          marginBottom: 8,
        }}>
          <div style={{
            height: '100%',
            width: `${progress}%`,
            background: 'linear-gradient(90deg, #C97A40, #D6B58E)',
            borderRadius: 4,
            transition: 'width 0.1s linear',
          }} />
        </div>
        <p style={{ color: 'rgba(214,181,142,0.5)', fontSize: 11, textAlign: 'center' }}>
          {progress}%
        </p>
      </div>

      {/* Keyframe styles */}
      <style>{`
        @keyframes particleFloat {
          0% { transform: translateY(0) scale(0.5); opacity: 0; }
          20% { opacity: 0.6; }
          100% { transform: translateY(-200px) scale(0.3); opacity: 0; }
        }
        @keyframes steam {
          0% { transform: scaleX(1) translateY(0); opacity: 0.7; }
          50% { transform: scaleX(1.5) translateY(-15px); opacity: 0.3; }
          100% { transform: scaleX(0.8) translateY(-30px); opacity: 0; }
        }
        @keyframes pulseCup {
          0%, 100% { box-shadow: 0 0 30px rgba(201,122,64,0.3); }
          50% { box-shadow: 0 0 60px rgba(201,122,64,0.6); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
