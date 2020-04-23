import React from 'react';

import './App.css';
import Game from "./components/game/Game";

function App() {
  return (
    <main className="main">
      <Game/>
      <div className="console-button-container">
        <button className="console-button">Start</button>
      </div>
    </main>
  );
}

export default App;
