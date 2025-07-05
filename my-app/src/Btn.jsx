import './Btn.css'

const Btn = ({onClick, variation, children}) => {

    return(
        <button className={`button ${variation}`} onClick={onClick}>{children}</button>
    )
}

export default Btn;