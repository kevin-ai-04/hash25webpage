import { useState, useEffect } from 'react'; 
import './App.css';

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
    const [isFirstLoad, setIsFirstLoad] = useState(true);

    useEffect(() => {
        // Check session storage for first load
        const firstLoad = sessionStorage.getItem('firstLoad');
        if (!firstLoad) {
            sessionStorage.setItem('firstLoad', 'true');
            setIsFirstLoad(true);
        } else {
            setIsFirstLoad(false);
        }

        // Loader timeout (3 seconds)
        const timer = setTimeout(() => {
            setShowLoader(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <CursorGlow />
            <CustomCursor />
            
            {showLoader ? (
                <Section3 autoRotate={true} />
            ) : (
                <div className='Container'>
                    <div className='Section 1'>
                        <Section1 isFirstLoad={isFirstLoad} />
                    </div>
                    <div className='Section 2'>
                        <HappeningSection />
                    </div>
                    <div className='Section 4'>
                        <Section4/>
                    </div>
                    <div className='Section 5'>
                        <Section5/>
                    </div>
                    <div className='Section 6'>
                        <Section6/>
                    </div>
                </div>
            )}
        </>
    );
}

export default App;