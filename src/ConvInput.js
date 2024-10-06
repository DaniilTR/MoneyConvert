import React, { useState } from 'react';
import './App.css';

const curensi = ['rub', 'usd', 'eur', 'kzt'];

function ConvInput({ value, currency, onChangeValue, onChangeCurrency }) {
  // Состояние для открытия/закрытия списка валют
  const [isOpen, setIsOpen] = useState(false);

  // Функция для изменения валюты и закрытия выпадающего списка
  const handleCurrencyChange = (cur) => {
    onChangeCurrency(cur);
    setIsOpen(false); // Закрываем меню после выбора
  };

  // Функция для открытия/закрытия меню
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="convInput">
      <input
        onChange={(e) => onChangeValue(e.target.value)}
        value={value}
        type="number"
        className="Textinput-Control"
      />
      <p>{currency}</p>
    <button onClick={toggleDropdown} className='buttonSelect' >
        <svg fill="#fff"
            className='svg'
            height="35px" width="35px" 
            version="1.1" id="Layer_1" 
            xmlns="http://www.w3.org/2000/svg"  
            viewBox="0 0 1792 1792">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier"> 
                    <path d="M996,1314.5c-55.2,55.2-139.5,55.2-194.8,0c-2.4-2.8-2.4-2.8-2.4-2.8L154.4,670.1c-52.4-55.2-52.4-139.2,0-194.4 c55.2-52.8,139.5-52.8,194.4,0l549.7,552.1l547.2-546.9c52.4-52.4,139.5-52.4,192,0c52.4,52.8,52.4,139.5,0,192L996,1314.5z"></path>
                </g>
        </svg>
        {/* Выпадающий список, отображаемый только при открытом состоянии */}
        {isOpen && (
        <ul className="currencies" >
            {curensi.map((cur) => (
            <li
                onClick={() => handleCurrencyChange(cur)}
                className={currency === cur ? 'active' : ''}
                key={cur}
                style={listItemStyles}
                >
                {cur}
            </li>
            ))}
        </ul>
        )}
    </button>
      
    </div>
  );
}

// Пример простых стилей для списка и элементов


const listItemStyles = {
  padding: '5px 10px',
  cursor: 'pointer',
};

export default ConvInput;

