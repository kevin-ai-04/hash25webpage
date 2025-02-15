import { useState, useEffect, useRef } from 'react';
import './App.css';
import './fonts.css';
import CustomCursor from "./components/CustomCursor";
import Section1 from './components/section1';
import HappeningSection from './components/section2';
import CursorGlow from './components/CursorGlow';
import Section3 from './components/section3';
import Section4 from './components/section4';
import Section5 from './components/section5';
import Section6 from './components/section6';
import Footer from "./components/Footer";

function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [loaderFadeOut, setLoaderFadeOut] = useState(false);
  const [showSection1, setShowSection1] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const section1Ref = useRef(null);

  useEffect(() => {
    // Check session storage for first load
    const firstLoad = sessionStorage.getItem('firstLoad');
    if (!firstLoad) {
      sessionStorage.setItem('firstLoad', 'true');
      setIsFirstLoad(true);
    } else {
      setIsFirstLoad(false);
    }

    // Loader timeout (3 seconds) then fade out and remove loader
    const timer = setTimeout(() => {
      setLoaderFadeOut(true);
      setTimeout(() => {
        setShowLoader(false);
        setShowSection1(true);
      }, 500); // 0.5 second fade-out duration
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const blurAmount = Math.min(scrollY / 5, 10);
  const scaleAmount = Math.max(1 - scrollY / 100, 0.8);
  const opacityAmount = Math.max(1 - scrollY / 500, 0);

  return (
    <>
      <CursorGlow />
      <CustomCursor />
      <div className='Container'>
        {/* Loader Section */}
        {showLoader && (
          <div 
            className={`loader-container ${loaderFadeOut ? 'fade-out' : ''}`}
            style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 9999 }}
          >
            <Section3 autoRotate={true} />
          </div>
        )}
        {/* Main Content */}
        {!showLoader && (
          <>
            <div
              className='Section1'
              ref={section1Ref}
              style={{
                filter: `blur(${blurAmount}px)`,
                transform: `scale(${scaleAmount})`,
                opacity: opacityAmount,
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100vh',
                zIndex: 1,
              }}
            >
              {showSection1 && <Section1 isFirstLoad={isFirstLoad} />}
            </div>
            <div
              className='Section2 fade-in'
              style={{
                position: 'relative',
                zIndex: 2,
                animation: 'slideUp 1s ease'
              }}
            >
              <HappeningSection />
            </div>
            <div className='Section4' style={{ position: 'relative', zIndex: 2 }}>
              <Section4 />
            </div>
            <div className='Section5' style={{ position: 'relative', zIndex: 2 }}>
              <Section5 />
            </div>
            <div className='Section6' style={{ position: 'relative', zIndex: 2 }}>
              <Section6 />
            </div>
            <div className='Footer' style={{ position: 'relative', zIndex: 2 }}>
              <Footer />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
