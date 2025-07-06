import './NewGame.css'

const NewGame = () => {

    return(
        <>
            <form className="new-game-comp">
                <h1>Name</h1>
                <h2>Info</h2>
                <h3>Rating</h3>
                <h4>Players</h4>
                <h5>Allowed age</h5>
                <h6>Duration</h6>
                <span>Difficulty</span>
                <span>Type</span>
            </form>
        </>
    )
    
}

export default NewGame;