import { useEffect, useState } from 'react'
import './App.css'
import SingleGame from './Game'
import Btn from './Btn'
import games from './games'
import NewGame from './NewGame'

function App() {
  const [ getGames, setGames ] = useState(games);
  const [ isFormActive, setActiveFrom ] = useState(false);
  const [ getValue, setValue ] = useState({})

  const addNewGame = (newGame) => {
    if(newGame.isEdited){
      setGames(prev => prev.map(game => game.id === newGame.id ? newGame : game))
      resetGameValue()
      console.log('radi')
    }
    else {
      setGames(prev => [...prev, newGame])
    }
  }
  const displayAddNewGame = () => {
    setActiveFrom(prev => !prev);
  }
  
  const getGameValues = (game) => {
    setValue(game)
  }
  const setIsEdited = (id) => {
    setGames(prev => prev.map(game => game.id === id ? {...game, isEdited: !game.isEdited} : game))
  }
  const resetGameValue = () => {
    setValue({})
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
               <SingleGame key={game.id} game={game} displayAddNewGame={displayAddNewGame} getGameValues={getGameValues} setIsEdited={setIsEdited}/>
            )
          })}
        </ul>
        <NewGame isFormActive={isFormActive} addNewGame={addNewGame} displayAddNewGame={displayAddNewGame} getValue={getValue}/>
      </div>
    </>
  )
}

export default App
