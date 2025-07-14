import './EditForm.css'
import Btn from './Btn';
import './Btn.css'
import { useState } from 'react';

const CreateEditForm = ({ createForm, game, editGame }) => {
    const isEditingSession = game;
    //Ako sam primio selectedGame znam da je editingSession 
    //Sacuvaj to u neku const i postavi terinary state 
    //tj ako isEditingSession state neka bude iniciran propom selected game u suprotnom prazan 
  
    const [ form, setForm ] = useState(isEditingSession ? 
        {
            //Proslijediti kao game
            name: game.name,
            info: game.info,
            rating: game.rating,
            players: parseInt(game.players),
            allowedPlayerAge: game.allowedPlayerAge,
            duration: parseInt(game.duration),
            difficulty: game.difficulty,
            type: game.type,
            id: game.id
        }
        :
        {
            name: '',
            info: '',
            rating: '1',
            players: '',
            allowedPlayerAge: '',
            duration: '',
            difficulty: 'Easy',
            type: 'Strategy',
    }
    )
  
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };
    //2 nacina da se ovo rijesi 
    //1 nacin da forma primi samo handleSubmit funkciju
    //Parenti treba da proslijede tu funckiju do forme 
    //U app.jsx proslijedis createGame kao handleSubmit a iz singleGame editGame
    //2 nacin je da se oslonis na ovu const isEditingSession 
    //U handleSubmit koji definiras direktno u formu napravis if else 
    //Ako je isEditingSession pozoves editForm ako nije createForm 

    const handleSubmit = (e) => {
        e.preventDefault();
        isEditingSession ? editGame(form) : createForm(form)
    };

    return(
        <>
            <form className="new-game-comp" onSubmit={handleSubmit}>
                <h1>Set games rules</h1>
                    <ul>
                        <li>
                            <h2>Name</h2>
                            <input type="text" value={form.name} name='name' onChange={handleChange}/>
                        </li>
                        <li>
                            <h2>Info</h2>
                            <input type="text" value={form.info} name='info' onChange={handleChange}/>
                        </li>
                        <li>
                            <h2>Rating</h2>
                            <select name="rating" value={form.rating} id="" onChange={handleChange}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </li>
                        <li>
                            <h2>Players</h2>
                            <input type="number" value={form.players} name='players' onChange={handleChange}/>
                        </li>
                        <li>
                            <h2>Allowed age</h2>
                            <input type="number" value={form.allowedPlayerAge} name='allowedPlayerAge' onChange={handleChange}/>       
                        </li>
                        <li>
                            <h2>Duration</h2>
                            <input type="number" value={form.duration} name='duration' onChange={handleChange}/>
                        </li>
                        <li>
                            <h2>Difficulty</h2>
                            <select name="difficulty" value={form.difficulty} id="" onChange={handleChange}>
                                <option value="Easy">Easy</option>
                                <option value="Medium">Medium</option>
                                <option value="Hard">Hard</option>
                            </select>
                        </li>
                        <li>
                            <h2>Type</h2>
                            <select name="type" value={form.type} id="" onChange={handleChange}>
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
        </>
    )
}

export default CreateEditForm;

