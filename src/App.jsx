import { useState } from 'react'
import './App.css'

import CustomCursor from "./components/CustomCursor";
import Section1 from './components/section1'
import './fonts.css'; 
import Navbar from "./components/Navbar";
import HappeningSection from './components/section2';

function App() {
  return (
    <>
      
      <CustomCursor />
      <div className='Container'>
        <Navbar />
        <div className='Section 1'>

          <Section1/>
        </div>
        <div className='Section 1'>
          <HappeningSection />
        </div>
        <div className='Section 1'>
          <h1>Section 3</h1>
        </div>
        <div className='Section 1'>
          <h1>Section 4</h1>
        </div>
        <div className='Section 1'>
          <h1>Section 5</h1>
        </div>
        <div className='Section 1'>
          <h1>Section 6</h1>
        </div>
       </div>

    </>
  )
}

export default App
