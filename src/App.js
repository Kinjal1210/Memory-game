import React from 'react';
import Game from './components/Game';
import './components/style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Memory Game</h1>
        <Game/>
      </header>
    </div>
  );
}

export default App;