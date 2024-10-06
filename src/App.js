import './App.css';
import ConvInput from './ConvInput';
import React from 'react';



function App() {
  const [FromCur, SetFromCur] = React.useState('kzt')
  const [ToCur, SetToCur] = React.useState('rub')
  
  const [FromPrice, SetFromPrice] = React.useState(0)
  const [ToPrice, SetToPrice] = React.useState(0)
 
  const [eur, Setrates] = React.useState({});

  const truncateToTwoDecimals = (value) => {
    return Math.floor(value * 100) / 100;
  };
  
  const OnchangeFromPrice = (value) => {
    const price = truncateToTwoDecimals(value / (eur[FromCur] || 1)); 
    const result = truncateToTwoDecimals(price * (eur[ToCur] || 1));

    SetToPrice(result)
    SetFromPrice(value)
  }

  const OnchangeToPrice = (value) => {
    const result = truncateToTwoDecimals((eur[FromCur] / (eur[ToCur] || 1)) * value);
    SetFromPrice(result)
    SetToPrice(value)
  }
  React.useEffect(() => {
    fetch('https://latest.currency-api.pages.dev/v1/currencies/eur.json')
    .then(res => res.json())  // Преобразуем ответ в JSON
    .then((json) => {
      Setrates(json.eur)
    })
  })

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
            <ConvInput 
            value={FromPrice} 
            currency={FromCur} 
            onChangeCurrency={SetFromCur}
            onChangeValue={OnchangeFromPrice}
            />
            <button className='Buttonconv'>↔</button>
            <ConvInput 
            value={ToPrice} 
            currency={ToCur} 
            onChangeCurrency={SetToCur}
            onChangeValue={OnchangeToPrice}
            />
          </div>
        </div>
        <h3 style={{margin: '25px'}}> Актуальный курс валют </h3>
      </section>
    </div>
  );
}

export default App;
