import './EditForm.css'
import Btn from './Btn';
import './Btn.css'
import { useState } from 'react';

const CreateEditForm = ({isFormActive, addNewGame, displayAddNewGame, game }) => {

    const value = game;
    const [ getGame, setGame ] = useState({
        name: '',
        info: '',
        rating: '',
        players: '',
        allowedPlayerAge: '',
        duration: '',
        difficulty: '',
        type: '',
        isEdited: false
    })
    
    if(value){
         console.log(value.name)
    }
   
    const handleSubmit = (e) => {
        /* e.preventDefault();
        const form = e.target;
        const id = form.id; 
        const name = form.name.value;
        const info = form.info.value;
        const rating = form.rating.value;
        const players = form.players.value;
        const allowedPlayerAge = form.age.value;
        const duration = form.duration.value;
        const difficulty = form.difficulty.value;
        const type = form.type.value;
        const isEdited = getValue.isEdited;
        const newGame = {id, name, info, rating, players, allowedPlayerAge, duration, difficulty, type, isEdited};  
        addNewGame(newGame)
        displayAddNewGame()

        form.name.value = '';
        form.info.value = '';
        form.players.value = '';
        form.age.value = '';
        form.duration.value = ''; */
    } 
    
    return(
        <>
        {value ? <form className="new-game-comp" style={{display: isFormActive ? 'block' : 'none'}} onSubmit={handleSubmit}>
                <h1>Set games rules</h1>
                    <ul>
                        <li>
                            <h2>Name</h2>
                            <input type="text" defaultValue={value.name} name='name'/>
                        </li>
                        <li>
                            <h2>Info</h2>
                            <input type="text" defaultValue={value.info} name='info'/>
                        </li>
                        <li>
                            <h2>Rating</h2>
                            <select name="rating" defaultValue={value.rating} id="">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </li>
                        <li>
                            <h2>Players</h2>
                            <input type="number" defaultValue={value.players} name='players'/>
                        </li>
                        <li>
                            <h2>Allowed age</h2>
                            <input type="number" defaultValue={value.allowedPlayerAge} name='age'/>       
                        </li>
                        <li>
                            <h2>Duration</h2>
                            <input type="number" defaultValue={value.duration} name='duration'/>
                        </li>
                        <li>
                            <h2>Difficulty</h2>
                            <select name="difficulty" defaultValue={value.difficulty} id="">
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>
                        </li>
                        <li>
                            <h2>Type</h2>
                            <select name="type" defaultValue={value.type} id="">
                                <option value="Strategy">Strategy</option>
                                <option value="Trading">Trading</option>
                                <option value="Party">Party</option>
                                <option value="Creative">Creative</option>
                                <option value="Abstract">Abstract</option>
                                <option value="Familiy">Familiy</option>
                            </select>
                        </li>
                    </ul>
                    <Btn variation='primary' marginTop='marginTop' type='submit'>Add</Btn>
            </form>
            :
            <form className="new-game-comp" style={{display: isFormActive ? 'block' : 'none'}} onSubmit={handleSubmit}>
                <h1>Set games rules</h1>
                    <ul>
                        <li>
                            <h2>Name</h2>
                            <input type="text" defaultValue={'gas'} name='name'/>
                        </li>
                        <li>
                            <h2>Info</h2>
                            <input type="text" name='info'/>
                        </li>
                        <li>
                            <h2>Rating</h2>
                            <select name="rating" id="">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </li>
                        <li>
                            <h2>Players</h2>
                            <input type="number" name='players'/>
                        </li>
                        <li>
                            <h2>Allowed age</h2>
                            <input type="number" name='age'/>       
                        </li>
                        <li>
                            <h2>Duration</h2>
                            <input type="number" name='duration'/>
                        </li>
                        <li>
                            <h2>Difficulty</h2>
                            <select name="difficulty" id="">
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>
                        </li>
                        <li>
                            <h2>Type</h2>
                            <select name="type" id="">
                                <option value="Strategy">Strategy</option>
                                <option value="Trading">Trading</option>
                                <option value="Party">Party</option>
                                <option value="Creative">Creative</option>
                                <option value="Abstract">Abstract</option>
                                <option value="Familiy">Familiy</option>
                            </select>
                        </li>
                    </ul>
                    <Btn variation='primary' marginTop='marginTop' type='submit'>Add</Btn>
            </form>}
        </>
    )
    
}

export default CreateEditForm;