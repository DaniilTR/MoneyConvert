import './App.css';
import ConvInput from './ConvInput';
import Actyal from './Actyal';
import React from 'react';

const App = () => {
  const [FromCur, SetFromCur] = React.useState('usd'); // USD по умолчанию
  const [ToCur, SetToCur] = React.useState('kzt'); // KZT по умолчанию
  const [FromPrice, SetFromPrice] = React.useState(1); // Значение 1 по умолчанию для USD
  const [ToPrice, SetToPrice] = React.useState(0); // Значение для KZT
  const [Eur, SetRates] = React.useState({});

  const truncateToTwoDecimals = (value) => {
    return Number(value.toFixed(2));
  };

  // Функция для пересчета цен на основе текущих валют
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const updatePrices = () => {
    if (Eur[FromCur] && Eur[ToCur]) {
      const priceInBaseCurrency = truncateToTwoDecimals(FromPrice / Eur[FromCur]);
      const result = truncateToTwoDecimals(priceInBaseCurrency * Eur[ToCur]);
      SetToPrice(result);
    }
  };

  // Загружаем курсы валют
  React.useEffect(() => {
    fetch('https://latest.currency-api.pages.dev/v1/currencies/eur.json')
      .then(res => res.json())
      .then((json) => {
        SetRates(json.eur);
        SetToPrice(truncateToTwoDecimals((1 / json.eur['usd']) * json.eur['kzt'])); // Устанавливаем значение для KZT
      })
      .catch(error => console.error('Ошибка загрузки курсов валют:', error));
  }, []);

  // Обновляем цены при изменении FromPrice, FromCur или ToCur
  React.useEffect(() => {
    updatePrices();
  }, [FromPrice, FromCur, ToCur, updatePrices]);

  const swapValues = () => {
    const tempPrice = FromPrice;
    const tempCur = FromCur;
    
    SetFromPrice(ToPrice);
    SetFromCur(ToCur);
    
    SetToPrice(tempPrice);
    SetToCur(tempCur);
  };

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
              onChangeValue={SetFromPrice}
            />
            <button className='Buttonconv' onClick={swapValues}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
              </svg>
            </button>
            <ConvInput 
              value={ToPrice} 
              currency={ToCur} 
              onChangeCurrency={SetToCur}
              onChangeValue={SetToPrice}
            />
          </div>
        </div>
        <Actyal eur={Eur}/>
      </section>
    </div>
  );
}

export default App;

