import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';

function App() {

  const [displayValue, setDisplayValue] = useState('');
  const [inputValue, setInputValue] = useState('0');

  const handleClear = () => {
    setDisplayValue('');
    setInputValue('0');
  }

  const handleResult = (e) => {
    const resultCal = eval(displayValue.toString())
    setDisplayValue(resultCal);
    setInputValue(resultCal);
  }


  const handleNumberInput = (e) => {
    if (inputValue === '0') {
      setInputValue(e.target.value);
      setDisplayValue(e.target.value);
    } else {
      setInputValue( inputValue + e.target.value);
      setDisplayValue((prevDisplayValue) => prevDisplayValue + e.target.value)
    }
  }


  const handleDecimalInput = (e) => {
  const lastNumber = displayValue.split(/[-+*/]/).pop();
  if (lastNumber.includes('.')) {
    return;
  } else {
    setInputValue((prevDisplayValue) => prevDisplayValue + e.target.value);
    setDisplayValue((prevDisplayValue) => prevDisplayValue + e.target.value);
  }
  }

  const handleSignInput = (e) => {
    const operators = ['+', '*', '/','-'];
    const lastChar = displayValue.toString().slice(-1);
  
    if (operators.includes(e.target.value) && operators.includes(lastChar) && e.target.value !== '-') {
      const newDisplayValue = displayValue.slice(0, -1) + e.target.value;
      setDisplayValue(newDisplayValue);
    } else {
      setDisplayValue(displayValue + e.target.value);
    }
  
    if (operators.includes(e.target.value) && e.target.value !== '-') {
      setInputValue(e.target.value);
    } else {
      setInputValue(displayValue + e.target.value);
    }
  }

  return (
    <div className='App'>
      <div className="Calculator">
        <div className="formulaScreen" id="formula">{displayValue}</div>
        <div className='outputScreen' id="display">{inputValue}</div>
        <div className='calculatorBtn'>
          <button className='jumbo' id="clear" onClick={handleClear}>AC</button>
          <button id="divide" onClick={handleSignInput} value="/">/</button>
          <button id="multiply" onClick={handleSignInput} value="*">X</button>
          <button id="seven" onClick={handleNumberInput} value="7">7</button>
          <button id="eight" onClick={handleNumberInput} value="8">8</button>
          <button id="nine" onClick={handleNumberInput} value="9">9</button>
          <button id="subtract" onClick={handleSignInput} value="-">-</button>
          <button id="four" onClick={handleNumberInput} value="4">4</button>
          <button id="five" onClick={handleNumberInput} value="5">5</button>
          <button id="six" onClick={handleNumberInput} value="6">6</button>
          <button id="add" onClick={handleSignInput} value="+">+</button>
          <button id="one" onClick={handleNumberInput} value="1">1</button>
          <button id="two" onClick={handleNumberInput} value="2">2</button>
          <button id="three" onClick={handleNumberInput} value="3">3</button>
          <button className='jumbo' id="zero" onClick={handleNumberInput} value="0">0</button>
          <button id="decimal" onClick={handleDecimalInput} value=".">.</button>
          <button className='equal' id="equals" onClick={() => handleResult('=')}>=</button>
        </div>

      </div></div>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <App />
    </div>
  );
}