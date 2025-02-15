  import { useState, useEffect, useRef } from 'react';
  import './App.css';
  import './fonts.css';

  import Footer from "./components/Footer";

  import CustomCursor from "./components/CustomCursor";
  import Section1 from './components/section1';
  import './fonts.css'; 
  import HappeningSection from './components/section2';
  import CursorGlow from './components/CursorGlow';
  import Section3 from './components/section3';
  import Section4 from './components/section4';
  import Section5 from './components/section5';
  import Section6 from './components/section6';

  function App() {
    const [showLoader, setShowLoader] = useState(true);
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

      // Loader timeout
      const timer = setTimeout(() => {
        setShowLoader(false);
        setShowSection1(true);
      }, 5000);

      return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Calculate blur and scale based on scroll position
    const blurAmount = Math.min(scrollY / 5, 10); // Adjust divisor for sensitivity
    const scaleAmount = Math.max(1 - scrollY / 100, 0.8); // Adjust divisor for sensitivity
    const opacityAmount = Math.max(1 - scrollY / 500, 0); // Adjust divisor for sensitivity

    return (
      <>
        <CursorGlow />
        <CustomCursor />
        <div className='Container'>
          {showLoader && <Section3 autoRotate={true} />}
          <div
            className='Section1'
            ref={section1Ref}
            style={{
              filter: `blur(${blurAmount}px)`,
              transform: `scale(${scaleAmount})`,
              opacity: opacityAmount, // Adjust transparency on scroll
              position: 'fixed', // Keep Section 1 in place
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              zIndex: 1, // Section 1 stays below Section 2
            }}
          >
            {showSection1 && <Section1 isFirstLoad={isFirstLoad} />}
          </div>
          <div
            className='Section2'
            style={{
              position: 'relative',
              zIndex: 2, // Section 2 appears above Section 1
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
          <div>
            <Footer/>
          </div>
        </div>
      </>
    );
  }

  export default App;