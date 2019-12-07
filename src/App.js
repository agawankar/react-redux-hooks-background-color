import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const initialColor = '#000'
  const [backColor, setBackColor] = useState(initialColor)

  const updateBackgroundColor = () => {
    let color = '#'+ Math.random().toString(16).slice(-6)
    setBackColor(color)
  }

  return (
    <div className="App" style={{backgroundColor:`${backColor}`}} onClick={ updateBackgroundColor }>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Click to change background color </p>
      </header>
    </div>
  );
}

export default App;
