import { useState, useEffect } from 'react'; // Import useEffect
import './App.css';

import CustomCursor from "./components/CustomCursor";
import Section1 from './components/section1'
import './fonts.css'; 
import HappeningSection from './components/section2';
import CursorGlow from './components/CursorGlow';
import GlowingLogoPage from './components/section3'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Simulate a 3-second loading time
  }, []);

  return (
    <>
      <CursorGlow />
      <CustomCursor />
      <div className='Container'>
        <div className='Section 1'>

          <Section1/>
        </div>
        <div className='Section 2'>
          <HappeningSection />
        </div>
        <div className='Section 3'>
          <GlowingLogoPage/>
        </div>

       </div>

    </>
  );
}

export default App;
