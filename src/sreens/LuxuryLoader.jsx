import { useEffect, useState } from 'react';
import logo from '../assets/prakriti.jpeg';
import '../styles/LuxuryLoader.css';

export default function LuxuryLoader({ onComplete }) {
  const [phase, setPhase] = useState('fade-in'); // 'fade-in', 'grow-line', 'hold', 'fade-out'

  useEffect(() => {
    // STEP 2: Fade the logo/text in over 700ms (0ms -> 700ms)
    // STEP 3: Animate thin gold line growing outward over 600ms (700ms -> 1300ms)
    const lineTimeout = setTimeout(() => {
      setPhase('grow-line');
    }, 700);

    // STEP 4: Keep everything visible for about 800ms (1300ms -> 2100ms)
    const holdTimeout = setTimeout(() => {
      setPhase('hold');
    }, 1300);

    // STEP 5: Slowly fade overlay away (2100ms -> 2900ms)
    const fadeOutTimeout = setTimeout(() => {
      setPhase('fade-out');
    }, 2100);

    // Finish loader mounting (2900ms)
    const completeTimeout = setTimeout(() => {
      if (onComplete) onComplete();
    }, 2900);

    return () => {
      clearTimeout(lineTimeout);
      clearTimeout(holdTimeout);
      clearTimeout(fadeOutTimeout);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  return (
    <div className={`luxury-loader-overlay ${phase}`} id="luxury-loader">
      <div className="luxury-loader-content">
        <div className="luxury-logo-container">
          <img src={logo} alt="Prakriti Logo" className="luxury-loader-logo" />
        </div>
        
        <div className="luxury-loader-divider-wrapper">
          <div className="luxury-loader-divider"></div>
        </div>

        <div className="luxury-loader-text-container">
          <h1 className="luxury-loader-brand">Prakriti Interiors</h1>
          <p className="luxury-loader-subtitle">Luxury Interior Design Studio</p>
        </div>
      </div>
    </div>
  );
}
