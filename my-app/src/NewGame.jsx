import './NewGame.css'
import Btn from './Btn';
import './Btn.css'

const NewGame = () => {

    return(
        <>
            <form className="new-game-comp">
                <h1>Set games rules</h1>
                    <ul>
                        <li>
                            <h2>Name</h2>
                            <input type="text" />
                        </li>
                        <li>
                            <h2>Info</h2>
                            <input type="text" />
                        </li>
                        <li>
                            <h2>Rating</h2>
                            <select name="" id=""></select>
                        </li>
                        <li>
                            <h2>Players</h2>
                            <input type="text" />
                        </li>
                        <li>
                            <h2>Allowed age</h2>
                            <input type="text" />       
                        </li>
                        <li>
                            <h2>Duration</h2>
                            <input type="text" />
                        </li>
                        <li>
                            <h2>Difficulty</h2>
                            <select name="" id=""></select>
                        </li>
                        <li>
                            <h2>Type</h2>
                            <select name="" id=""></select>
                        </li>
                    </ul>
                    <Btn variation='add-btn'>Add</Btn>
            </form>
        </>
    )
    
}

export default NewGame;