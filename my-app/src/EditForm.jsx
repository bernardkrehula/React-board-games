import './EditForm.css'
import Btn from './Btn';
import './Btn.css'
import { useState } from 'react';

const CreateEditForm = ({isFormActive, addNewGame, game }) => {
    const value = game;

    const [ form, setForm ] = useState({
            name: value ? value.name : '',
            info: value ? value.info : '',
            rating: value ? value.rating : '',
            players: value ? value.players : '',
            allowedPlayerAge: value ? value.allowedPlayerAge : '',
            duration: value ? value.duration : '',
            difficulty: value ? value.difficulty : '',
            type: value ? value.type : '',
            isEdited: value ? value.isEdited : '' 
    }
    )
    console.log(form)
    const editForm = (
        <form className="new-game-comp" style={{display: value ? 'block' : 'none'}} /* onSubmit={handleSubmit} */>
                <h1>Set games rules</h1>
                    <ul>
                        <li>
                            <h2>Name</h2>
                            <input type="text" defaultValue={form.name} name='name'/>
                        </li>
                        <li>
                            <h2>Info</h2>
                            <input type="text" defaultValue={form.info} name='info'/>
                        </li>
                        <li>
                            <h2>Rating</h2>
                            <select name="rating" defaultValue={form.rating} id="">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </li>
                        <li>
                            <h2>Players</h2>
                            <input type="number" defaultValue={form.players} name='players'/>
                        </li>
                        <li>
                            <h2>Allowed age</h2>
                            <input type="number" defaultValue={form.allowedPlayerAge} name='age'/>       
                        </li>
                        <li>
                            <h2>Duration</h2>
                            <input type="number" defaultValue={form.duration} name='duration'/>
                        </li>
                        <li>
                            <h2>Difficulty</h2>
                            <select name="difficulty" defaultValue={form.difficulty} id="">
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>
                        </li>
                        <li>
                            <h2>Type</h2>
                            <select name="type" defaultValue={form.type} id="">
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
    )

    const viewForm = (
        <form className="new-game-comp" style={{display: value ? 'block' : 'none'}} /* onSubmit={handleSubmit} */>
                <h1>Set games rules</h1>
                    <ul>
                        <li>
                            <h2>Name</h2>
                            <input type="text" name='name'/>
                        </li>
                        <li>
                            <h2>Info</h2>
                            <input type="text" name='info'/>
                        </li>
                        <li>
                            <h2>Rating</h2>
                            <select name="rating" defaultValue={form.rating} id="">
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
            </form>
    )

    return(
        <>
         {value ? editForm : viewForm}
        </>
    )
    
}

export default CreateEditForm;

