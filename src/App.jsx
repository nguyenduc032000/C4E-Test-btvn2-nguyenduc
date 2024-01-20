import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button1 from './components/Button1'
import Button2 from './components/Button2'
import Button3 from './components/Button3'

function App() {

  return (
   
      <div className='main'>
      <div className='main-left'>
        <Button1  />
        <Button2 />
       
        
      </div>
      <div className='main-right'>
        <Button3 />
      </div>
        
      </div>

   
  )
}

export default App
