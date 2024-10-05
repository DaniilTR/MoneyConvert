import './App.css';


function ConvInput() {
    return(
       <div className='convInput'>
        <input 
        className="Textinput-Control" 
        inputmode="decimal" 
        maxlength="20"
        defaultValue="0" />
        <span className='buttonSelect'>
            <button></button>
        </span>
    </div> 
)
}
export default ConvInput;