import './EditForm.css'
import Btn from './Btn';
import './Btn.css'
import { useState } from 'react';
import { useEffect } from 'react';

const CreateEditForm = ({isFormActive, addNewGame, game }) => {
    const value = game;

    const [ form, setForm ] = useState({
        name: '',
        info: '',
        rating: '1',
        players: '',
        allowedPlayerAge: '',
        duration: '',
        difficulty: 'Easy',
        type: 'Strategy',
        isEdited: false 
    }
    )
  
    useEffect(() => {
        if (game) {
        setForm({
            name: game.name,
            info: game.info,
            rating: game.rating,
            players: game.players,
            allowedPlayerAge: game.allowedPlayerAge,
            duration: game.duration,
            difficulty: game.difficulty,
            type: game.type,
            isEdited: true,
            id: game.id
        });
        } else {
        setForm({
            name: '',
            info: '',
            rating: '1',
            players: '',
            allowedPlayerAge: '',
            duration: '',
            difficulty: 'Easy',
            type: 'Strategy',
            isEdited: false
        });
        }
    }, [game]);

    const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.info) return alert("Name and Info are required");
        const newGame = form.isEdited
            ? { ...form }
            : { ...form, id: Date.now(), isEdited: false };

        addNewGame(newGame);
    };
    return(
        <>
            <form className="new-game-comp" style={{display: isFormActive ? 'block' : 'none'}} onSubmit={handleSubmit}>
                <h1>Set games rules</h1>
                    <ul>
                        <li>
                            <h2>Name</h2>
                            <input type="text" defaultValue={form.name} name='name' onChange={handleChange}/>
                        </li>
                        <li>
                            <h2>Info</h2>
                            <input type="text" defaultValue={form.info} name='info' onChange={handleChange}/>
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
                            <input type="number" defaultValue={form.players} name='players' onChange={handleChange}/>
                        </li>
                        <li>
                            <h2>Allowed age</h2>
                            <input type="number" defaultValue={form.allowedPlayerAge} name='age' onChange={handleChange}/>       
                        </li>
                        <li>
                            <h2>Duration</h2>
                            <input type="number" defaultValue={form.duration} name='duration' onChange={handleChange}/>
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
        </>
    )
    
}

export default CreateEditForm;

