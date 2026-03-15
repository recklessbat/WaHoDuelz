import { useState } from 'react';
import MatchSetup from './components/MatchSetup';
import MatchMatrix from './components/MatchMatrix';
import MatchTracker from './components/MatchTracker';
import './App.css';

function App() {
  const [screen, setScreen] = useState('setup');
  const [players, setPlayers] = useState(null);
  const [matchHistory, setMatchHistory] = useState([]);
  const [matchKey, setMatchKey] = useState(0);

  const handleStartMatch = (configuredPlayers) => {
    setPlayers(configuredPlayers);
    setMatchKey((k) => k + 1);
    setScreen('matrix');
  };

  const handleMatchEnd = (result) => {
    setMatchHistory((prev) => [result, ...prev]);
  };

  const handleBackToSetup = () => {
    setScreen('setup');
    setPlayers(null);
  };

  return (
    <div className="app">
      <MatchTracker matchHistory={matchHistory} />

      {screen === 'setup' && <MatchSetup onStartMatch={handleStartMatch} />}

      {screen === 'matrix' && players && (
        <MatchMatrix
          key={matchKey}
          players={players}
          onMatchEnd={handleMatchEnd}
          onBackToSetup={handleBackToSetup}
        />
      )}
    </div>
  );
}

export default App;
