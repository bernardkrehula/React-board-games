import { useState } from 'react'
import './App.css'
import SingleGame from './Game'
import Btn from './Btn'

function App() {

  return (
    <>
      <div className='main'>
        <h1 className='title'>Board games</h1>
        <div className='btns'>
          <Btn variation='new-game'>Add new game</Btn>
          <Btn variation='save-pdf'>Save as PDF</Btn>
        </div>
  
      </div>
    </>
  )
}

export default App
