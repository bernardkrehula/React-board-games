import { useState } from 'react'
import './App.css'
import SingleGame from './Game'
import Btn from './Btn'
import games from './games'

function App() {
  const [ getGames, setGames ] = useState(games);

  return (
    <>
      <div className='main'>
        <h1 className='title'>Board games</h1>
        <div className='btns'>
          <Btn variation='new-game'>Add new game</Btn>
          <Btn variation='save-pdf'>Save as PDF</Btn>
        </div>
        <ul className='games'>
          {getGames.map(game => {
            return(
               <SingleGame key={game.id} game={game}/>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default App
