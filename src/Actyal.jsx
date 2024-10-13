import './App.css';

function Actyal({eur}) {
    return(
        <div className="Actyal_main">
        <h3 style={{margin: '25px'}}> Актуальные курсы валют относительно KZT</h3>
        <ul className='nstroka'> 
        <li className="stroka">
            <p>1 USD : {eur['usd'] && eur['kzt'] ? (eur['kzt'] / eur['usd']).toFixed(2) : 'Loading...'} KZT</p>
        </li>
        <li className="stroka">
            <p>1 EUR : {eur['eur'] && eur['kzt'] ? (eur['kzt'] / eur['eur']).toFixed(2) : 'Loading...'} KZT</p>
        </li>
        <li className="stroka">
            <p>1 RUB : {eur['rub'] && eur['kzt'] ? (eur['kzt'] / eur['rub']).toFixed(2) : 'Loading...'} KZT</p>
        </li>
        <li className="stroka">
            <p>1 CNY(юань) : {eur['cny'] && eur['kzt'] ? (eur['kzt'] / eur['cny']).toFixed(2) : 'Loading...'} KZT</p>
        </li>
        <li className="stroka">
            <p>1 BTC : {eur['btc'] && eur['usd'] ? (eur['usd'] / eur['btc']).toFixed(2) : 'Loading...'} USD</p>
        </li>
        </ul>
    </div>
    )
    
}

export default Actyal;