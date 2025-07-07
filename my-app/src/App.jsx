import { useEffect, useState } from 'react'
import './App.css'
import SingleGame from './Game'
import Btn from './Btn'
import games from './games'
import NewGame from './NewGame'

function App() {
  const [ getGames, setGames ] = useState(games);
  const [ isFormActive, setActiveFrom ] = useState(false);
  const [ getValue, setValue ] = useState('')

  const setGameId = () => {
    setGames(prev => prev.map(game => ({...game, id: crypto.randomUUID()})))
  }
  useEffect(() => {
    setGameId();
  }, []);

  const addNewGame = (newGame) => {
    setGames(prev => [...prev, newGame])
  }
  const displayAddNewGame = () => {
    setActiveFrom(prev => !prev);
  }
  
  const getGameValues = (game) => {
    setValue(game);
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
               <SingleGame key={crypto.randomUUID()} game={game} displayAddNewGame={displayAddNewGame} getGameValues={getGameValues} />
            )
          })}
        </ul>
        <NewGame isFormActive={isFormActive} addNewGame={addNewGame} displayAddNewGame={displayAddNewGame} getGameValues={getGameValues}/>
      </div>
    </>
  )
}

export default App
