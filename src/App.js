import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [inputValue, setInputValue] = useState('');

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h2>A fine presentation of cypress - huh</h2>
      </header>
      <main className='App-main'>
        <h1>This is for testing</h1>
        <input className='input1' value={inputValue} onChange={e => setInputValue(e.currentTarget.value)}></input>
      </main>
      <footer className='App-footer'>
        <p>A mighty fine footer</p>
        <p>With some info here too</p>

      </footer>
    </div>
  );
}

export default App;
