import { useState } from 'react'
import './App.css'
import Section1 from './components/section1'

function App() {
  return (
    <>
      <div className='Container'>
        <div className='Section 1'>

          <Section1/>
        </div>
        <div className='Section 1'>
          <h1>Section 2</h1>
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
