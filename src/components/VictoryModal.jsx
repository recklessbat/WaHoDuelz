import { useEffect, useState } from 'react';

export default function VictoryModal({ winner, onRematch, onNewSetup }) {
  const [show, setShow] = useState(false);
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
    const newSparkles = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 1 + Math.random() * 2,
      size: 4 + Math.random() * 8,
    }));
    setSparkles(newSparkles);
  }, []);

  return (
    <div className={`victory-overlay ${show ? 'visible' : ''}`}>
      <div className="victory-modal">
        <div className="victory-sparkles">
          {sparkles.map((s) => (
            <div
              key={s.id}
              className="sparkle"
              style={{
                left: `${s.left}%`,
                animationDelay: `${s.delay}s`,
                animationDuration: `${s.duration}s`,
                width: `${s.size}px`,
                height: `${s.size}px`,
              }}
            />
          ))}
        </div>

        <div className="victory-crown">
          <svg viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="crown-svg">
            <path d="M5 40 L5 15 L20 28 L40 5 L60 28 L75 15 L75 40 Z" stroke="#DAA520" strokeWidth="2.5" fill="none" />
            <circle cx="5" cy="13" r="3" fill="#DAA520" />
            <circle cx="40" cy="3" r="3" fill="#DAA520" />
            <circle cx="75" cy="13" r="3" fill="#DAA520" />
            <line x1="5" y1="40" x2="75" y2="40" stroke="#DAA520" strokeWidth="2.5" />
            <line x1="5" y1="45" x2="75" y2="45" stroke="#DAA520" strokeWidth="2.5" />
          </svg>
        </div>

        <div className="victory-avatar" style={{ color: winner.color.value }}>
          {winner.avatar.svg}
        </div>

        <h2 className="victory-title">Victory!</h2>
        <p className="victory-name">{winner.name} wins the match!</p>

        <div className="victory-buttons">
          <button className="victory-btn rematch-btn" onClick={onRematch}>
            Rematch
          </button>
          <button className="victory-btn new-setup-btn" onClick={onNewSetup}>
            New Setup
          </button>
        </div>
      </div>
    </div>
  );
}
