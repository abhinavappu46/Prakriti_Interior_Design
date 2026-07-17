import { useEffect, useRef, useState } from 'react';
import '../styles/PrakritiAbout.css'
import picture1 from '../assets/new.jpg'

function PrakritiAbout() {
  const sectionRef = useRef(null);
  const [animationClass, setAnimationClass] = useState('');
  
  // Keep track of scroll direction and page load
  const prevScrollY = useRef(0);
  const scrollDirection = useRef('down');
  const isFirstLoad = useRef(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY.current) {
        scrollDirection.current = 'down';
      } else if (currentScrollY < prevScrollY.current) {
        scrollDirection.current = 'up';
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Play animation if first page load OR if scroll direction is DOWN
          if (isFirstLoad.current || scrollDirection.current === 'down') {
            setAnimationClass('reveal-active');
            isFirstLoad.current = false;
          } else {
            // Upward scroll after first load: load instantly (no animation)
            setAnimationClass('reveal-instant');
          }
        } else {
          // Remove the animation class after leaving the viewport
          setAnimationClass('');
        }
      },
      {
        threshold: 0.15, // Starts when 15% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={sectionRef} 
      className={`MainAboutDiv ${animationClass}`}
    >
      {/* LEFT COLUMN: Image */}
      <div className='imageDiv'>
        <img src={picture1} alt="Bespoke luxury interior design rendering" />
        <div className='ImageInfo'>
          <h2>Luxury Living</h2>
          <p>Modern • Elegant • Functional</p>
        </div>
      </div>

      {/* RIGHT COLUMN: Text Content */}
      <div className='AboutCard'>
        <h5 className="stagger-item">About Us</h5>
        <div className="stagger-item title-container">
          <h1>Crafting Spaces,</h1>
          <h1 className='GoldHighlight'>Enriching Lives.</h1>
        </div>
        
        <p className="stagger-item about-p-1">
          At Prakriti Interiors, we believe every home should reflect the unique essence of its occupants. Through meticulous architectural planning, premium curated materials, and timeless design paradigms, we create elegant interiors that harmoniously combine bespoke comfort, modern functionality, and enduring beauty.
        </p>

        <p className="stagger-item about-p-2">
          From concept to completion, our team of dedicated designers ensures that every detail is executed with precision, resulting in spaces that are both inspiring and highly functional. We translate your custom lifestyle dreams into a bespoke physical reality.
        </p>
        
        <ul className='stagger-item AboutList'>
          <li>
            <svg className="GoldCheck" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5z" clipRule="evenodd" />
            </svg>
            <span>20-Year Replacement Warranty</span>
          </li>
          <li>
            <svg className="GoldCheck" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5z" clipRule="evenodd" />
            </svg>
            <span>Seamless Project Completion in 45 Days</span>
          </li>
          <li>
            <svg className="GoldCheck" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5z" clipRule="evenodd" />
            </svg>
            <span>First Year Free Service & Maintenance</span>
          </li>
          <li>
            <svg className="GoldCheck" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l5-5z" clipRule="evenodd" />
            </svg>
            <span>Precision Factory Finish Manufacturing</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PrakritiAbout;
