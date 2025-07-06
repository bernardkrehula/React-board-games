import { useState } from 'react'
import './App.css'
import SingleGame from './Game'
import Btn from './Btn'
import games from './games'
import NewGame from './NewGame'

function App() {
  const [ getGames, setGames ] = useState(games);
  const [ isFormActive, setActiveFrom ] = useState(false);

  const addNewGame = (newGame) => {
    setGames(prev => [...prev, newGame])
  }
  const displayAddNewGame = () => {
    setActiveFrom(prev => !prev);
  }

  return (
    <>
      <div className='main'>
        <h1 className='title'>Board games</h1>
        <div className='btns'>
          <Btn variation='new-game' onClick={() => {displayAddNewGame()}}>Add new game</Btn>
          <Btn variation='save-pdf'>Save as PDF</Btn>
        </div>
        <ul className='games'>
          {getGames.map(game => {
            return(
               <SingleGame key={game.id} game={game}/>
            )
          })}
        </ul>
        <NewGame isFormActive={isFormActive} addNewGame={addNewGame} displayAddNewGame={displayAddNewGame}/>
      </div>
    </>
  )
}

export default App
