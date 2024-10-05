import './App.css';

function App() {
  return (
    <div className="App">
      <header className='Head'>
        <div className="Logo_Name">
          <h2>MoneyConvert</h2>
        </div>
      </header>
      <section>
        <div className="main">
          <div className='main_flex'>
            <div className='convInput'>
              <input 
                className="Textinput-Control" 
                inputmode="decimal" 
                maxlength="20"
                defaultValue="0" 
              />
              <span className='buttonSelect'>
                <button></button>
              </span>
            </div>
            <button className='Buttonconv'></button>
            <div className='convInput'>
              <input   
                className="Textinput-Control" 
                inputmode="decimal" 
                maxlength="20" 
                defaultValue="0" 
              />
              <span className='buttonSelect'>
                <button></button>
              </span>
            </div>
          </div>
        </div>
        <h3 style={{margin: '25px'}}> Актуальный курс валют </h3>
      </section>
    </div>
  );
}

export default App;
