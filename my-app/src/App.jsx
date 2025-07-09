import { useState } from 'react'
import React from 'react'
import './App.css'
import SingleGame from './Game'
import Btn from './Btn'
import games from './games'
import NewGame from './NewGame'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'

function App() {
  const [ getGames, setGames ] = useState(games);
  const [ isFormActive, setActiveFrom ] = useState(false);
  const [ getValue, setValue ] = useState({});
  const printRef = React.useRef(null);

  const addNewGame = (newGame) => {
    if(newGame.isEdited){
      setGames(prev => prev.map(game => game.id === newGame.id ? newGame : game))
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

  const downloadPdf = async() => {
      const element = printRef.current;
      if(!element) return;
      const canvas = await html2canvas(element);
      const data = canvas.toDataURL('image/png');

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: 'a4'
      });
      const imgProperties = pdf.getImageProperties(data);
      const pdfWidth = pdf.internal.pageSize.getWidth();

      const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

      pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('examplepdf.pdf');
    }
 

  return (
    <>
      <div className='main'>
        <h1 className='title'>Board games</h1>
        <div className='btns'>
          <Btn variation='primary' onClick={() => {displayAddNewGame()}}>Add new game</Btn>
          <Btn variation='primary' margin='margin' onClick={() => {downloadPdf()}}>Save as PDF</Btn>
        </div>
        <ul className='games'  ref={printRef}>
          {getGames.map(game => {
            return(
               <SingleGame key={game.id} game={game} displayAddNewGame={displayAddNewGame} getGameValues={getGameValues} setIsEdited={setIsEdited} />
            )
          })}
        </ul>
        //Neka se ovo zove createEditForm 
        <NewGame isFormActive={isFormActive} addNewGame={addNewGame} displayAddNewGame={displayAddNewGame} getValue={getValue}/>
      </div>
    </>
  )
}
//createEditForma treba da se iskoristi i za pravljenje nove igrice i editovanje postojece
//Kako ce ona da zna da li treba da edituje ili da napravi novu igricu ?
//U create edit formu treba da napravis state za svako polje 
//Ako forma nije editing sva polja su prazna i znaci da pravis novu igricu
//
//Forma ce znat da je editing ukoliko primi igricu kao prop
//Kako ce forma da primi igricu kao prop?
//U single game napravi state isEditing 
//Na klik dugmeta edit otvori createEditForm i proslijedis joj igricu 
//Posto je sad forma primila igricu kao prop ona zna da je editing (sacuvati u const)

export default App
