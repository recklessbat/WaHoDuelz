import { useState, useCallback, useEffect } from 'react';
import VictoryModal from './VictoryModal';

function getInitials(name) {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 3);
}

function EliminationAnimation({ playerName }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="elimination-animation">
      <div className="elimination-ghost">
        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" width="50" height="50">
          <path d="M30 5 C16 5 8 16 8 28 L8 48 L14 42 L20 48 L26 42 L32 48 L38 42 L44 48 L50 42 L52 48 L52 28 C52 16 44 5 30 5Z" stroke="#bbb" strokeWidth="2" fill="none" />
          <circle cx="22" cy="24" r="3" fill="#bbb" />
          <circle cx="38" cy="24" r="3" fill="#bbb" />
          <path d="M24 34 Q30 38 36 34" stroke="#bbb" strokeWidth="1.5" fill="none" />
        </svg>
      </div>
      <p className="elimination-text">{playerName} has fallen!</p>
    </div>
  );
}

export default function MatchMatrix({ players, onMatchEnd, onBackToSetup }) {
  const [gameState, setGameState] = useState(() =>
    players.map((p, idx) => ({
      ...p,
      life: 40,
      eliminated: false,
      eliminationOrder: null,
      commanderDamage: players.map(() => 0),
      idx,
    }))
  );
  const [eliminationCounter, setEliminationCounter] = useState(0);
  const [showElimination, setShowElimination] = useState(null);
  const [winner, setWinner] = useState(null);
  const [editingLife, setEditingLife] = useState(null);
  const [editValue, setEditValue] = useState('');

  const checkElimination = useCallback(
    (state) => {
      let updated = [...state];
      let changed = false;
      let newEliminationCounter = eliminationCounter;

      updated.forEach((player, pIdx) => {
        if (player.eliminated) return;

        // Check life <= 0
        if (player.life <= 0) {
          newEliminationCounter++;
          updated[pIdx] = { ...player, eliminated: true, eliminationOrder: newEliminationCounter };
          changed = true;
          setShowElimination(player.name);
          setTimeout(() => setShowElimination(null), 3000);
        }

        // Check commander damage >= 21
        player.commanderDamage.forEach((dmg, fromIdx) => {
          if (fromIdx !== pIdx && dmg >= 21 && !player.eliminated) {
            newEliminationCounter++;
            updated[pIdx] = { ...updated[pIdx], eliminated: true, eliminationOrder: newEliminationCounter };
            changed = true;
            setShowElimination(player.name);
            setTimeout(() => setShowElimination(null), 3000);
          }
        });
      });

      if (changed) {
        setEliminationCounter(newEliminationCounter);
      }

      // Check for victory
      const alive = updated.filter((p) => !p.eliminated);
      if (alive.length === 1 && updated.length > 1) {
        const victorPlayer = alive[0];
        setTimeout(() => {
          setWinner(victorPlayer);
        }, 1500);
      }

      return updated;
    },
    [eliminationCounter]
  );

  const adjustLife = (playerIdx, delta) => {
    setGameState((prev) => {
      const updated = prev.map((p, i) =>
        i === playerIdx ? { ...p, life: p.life + delta } : p
      );
      return checkElimination(updated);
    });
  };

  const startEditLife = (playerIdx, currentLife) => {
    setEditingLife(playerIdx);
    setEditValue(String(currentLife));
  };

  const commitEditLife = (playerIdx) => {
    const newLife = parseInt(editValue, 10);
    if (!isNaN(newLife)) {
      setGameState((prev) => {
        const updated = prev.map((p, i) =>
          i === playerIdx ? { ...p, life: newLife } : p
        );
        return checkElimination(updated);
      });
    }
    setEditingLife(null);
  };

  const adjustCommanderDamage = (targetIdx, sourceIdx, delta) => {
    setGameState((prev) => {
      const updated = prev.map((p, i) => {
        if (i === targetIdx) {
          const newDmg = [...p.commanderDamage];
          newDmg[sourceIdx] = Math.max(0, newDmg[sourceIdx] + delta);
          return { ...p, commanderDamage: newDmg };
        }
        return p;
      });
      return checkElimination(updated);
    });
  };

  const handleMatchEnd = (action) => {
    // Build results: winner first, then eliminated in reverse order, then any remaining
    const results = [];
    const winnerPlayer = gameState.find((p) => !p.eliminated);
    if (winnerPlayer) {
      results.push({ name: winnerPlayer.name, finalLife: winnerPlayer.life });
    }
    const eliminated = gameState
      .filter((p) => p.eliminated)
      .sort((a, b) => (b.eliminationOrder || 0) - (a.eliminationOrder || 0));
    eliminated.forEach((p) => {
      results.push({ name: p.name, finalLife: p.life });
    });

    onMatchEnd({ results });

    if (action === 'rematch') {
      setGameState(
        players.map((p, idx) => ({
          ...p,
          life: 40,
          eliminated: false,
          eliminationOrder: null,
          commanderDamage: players.map(() => 0),
          idx,
        }))
      );
      setWinner(null);
      setEliminationCounter(0);
    } else {
      onBackToSetup();
    }
  };

  const gridClass =
    players.length === 2
      ? 'matrix-grid grid-2'
      : players.length === 3
        ? 'matrix-grid grid-3'
        : 'matrix-grid grid-4';

  return (
    <div className="match-matrix">
      <div className={gridClass}>
        {gameState.map((player, pIdx) => (
          <div
            key={pIdx}
            className={`player-quadrant ${player.eliminated ? 'eliminated' : ''}`}
            style={{
              backgroundColor: player.eliminated ? '#f0f0f0' : player.color.bg,
              borderColor: player.eliminated ? '#ddd' : player.color.value,
            }}
          >
            {/* Header: Avatar + Name */}
            <div className="quadrant-header">
              <div
                className="quadrant-avatar-box"
                style={{ borderColor: player.eliminated ? '#ccc' : player.color.value }}
              >
                <div
                  className="quadrant-avatar"
                  style={{ color: player.eliminated ? '#ccc' : player.color.value }}
                >
                  {player.avatar.svg}
                </div>
              </div>
              <span className="quadrant-name">{player.name}</span>
            </div>

            {/* Life Total */}
            <div className="life-section">
              {editingLife === pIdx ? (
                <input
                  type="number"
                  className="life-edit-input"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  onBlur={() => commitEditLife(pIdx)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') commitEditLife(pIdx);
                    if (e.key === 'Escape') setEditingLife(null);
                  }}
                  autoFocus
                />
              ) : (
                <div
                  className="life-total"
                  onClick={() => !player.eliminated && startEditLife(pIdx, player.life)}
                  title="Click to edit"
                >
                  {player.life}
                </div>
              )}
              <div className="life-buttons">
                <button
                  className="life-btn minus"
                  onClick={() => adjustLife(pIdx, -1)}
                  disabled={player.eliminated}
                >
                  -
                </button>
                <button
                  className="life-btn plus"
                  onClick={() => adjustLife(pIdx, 1)}
                  disabled={player.eliminated}
                >
                  +
                </button>
              </div>
            </div>

            {/* Commander Damage Rows */}
            <div className="commander-damage-section">
              {gameState.map((opponent, oIdx) => {
                if (oIdx === pIdx) return null;
                return (
                  <div key={oIdx} className="commander-row">
                    <div className="commander-row-info">
                      <div
                        className="commander-avatar-mini"
                        style={{ borderColor: opponent.eliminated ? '#ccc' : opponent.color.value }}
                      >
                        <div
                          className="commander-avatar-icon"
                          style={{ color: opponent.eliminated ? '#ccc' : opponent.color.value }}
                        >
                          {opponent.avatar.svg}
                        </div>
                      </div>
                      <span className="commander-name-abbr">
                        {getInitials(opponent.name)}
                      </span>
                    </div>
                    <div className="commander-damage-controls">
                      <button
                        className="cmd-btn"
                        onClick={() => adjustCommanderDamage(pIdx, oIdx, -1)}
                        disabled={player.eliminated}
                      >
                        -
                      </button>
                      <span className={`cmd-damage-value ${player.commanderDamage[oIdx] >= 21 ? 'lethal' : ''}`}>
                        {player.commanderDamage[oIdx]}
                      </span>
                      <button
                        className="cmd-btn"
                        onClick={() => adjustCommanderDamage(pIdx, oIdx, 1)}
                        disabled={player.eliminated}
                      >
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Elimination overlay */}
            {player.eliminated && showElimination === player.name && (
              <EliminationAnimation playerName={player.name} />
            )}
          </div>
        ))}
      </div>

      {winner && (
        <VictoryModal
          winner={winner}
          onRematch={() => handleMatchEnd('rematch')}
          onNewSetup={() => handleMatchEnd('newSetup')}
        />
      )}
    </div>
  );
}
