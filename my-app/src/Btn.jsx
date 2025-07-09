import './Btn.css'
//Popraviti variation i size a ne preko klase 
const Btn = ({onClick, variation, size, margin, marginTop, children}) => {

    return(
        <button className={`btn ${variation} ${size} ${margin} ${marginTop}`} onClick={onClick}>{children}</button>
    )
}

export default Btn;