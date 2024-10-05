import './App.css';
import ConvInput from './ConvInput';




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
            <ConvInput/>
            <button className='Buttonconv'></button>
            <ConvInput/>
          </div>
        </div>
        <h3 style={{margin: '25px'}}> Актуальный курс валют </h3>
      </section>
    </div>
  );
}

export default App;
