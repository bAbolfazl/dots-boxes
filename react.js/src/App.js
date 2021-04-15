import './App.css';
import Game from './pages/game.component';
import Header from './containers/header.component';
import { useState } from 'react';

function App() {
  const [redScore, setredScore] = useState(0)
  const [blueScore, setBlueScore] = useState(0)

  return (
    <div style={{ height: '100vh' }} className="bg--blue">
      <Header redScore={redScore} blueScore={blueScore} />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Game />
      </div>
    </div>
  );
}

export default App;
