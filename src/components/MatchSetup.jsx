import { useState } from 'react';
import avatarData from './Avatars';

const PASTEL_COLORS = [
  { name: 'Rose', value: '#FFD1DC', bg: '#FFF0F3' },
  { name: 'Lavender', value: '#C8A2C8', bg: '#F3EAF3' },
  { name: 'Sky', value: '#87CEEB', bg: '#EBF5FB' },
  { name: 'Mint', value: '#98FB98', bg: '#EEFBEE' },
  { name: 'Peach', value: '#FFDAB9', bg: '#FFF5EB' },
  { name: 'Lilac', value: '#B19CD9', bg: '#F0EBF8' },
  { name: 'Butter', value: '#FFFACD', bg: '#FFFEF0' },
  { name: 'Coral', value: '#F08080', bg: '#FCEAEA' },
  { name: 'Sage', value: '#B2D8B2', bg: '#EFF7EF' },
  { name: 'Periwinkle', value: '#CCCCFF', bg: '#F2F2FF' },
];

const defaultPlayers = [
  { name: '', avatarId: 'owl', colorIdx: 0 },
  { name: '', avatarId: 'fox', colorIdx: 1 },
  { name: '', avatarId: 'deer', colorIdx: 2 },
  { name: '', avatarId: 'rabbit', colorIdx: 3 },
];

export default function MatchSetup({ onStartMatch }) {
  const [playerCount, setPlayerCount] = useState(2);
  const [players, setPlayers] = useState(defaultPlayers);

  const updatePlayer = (idx, field, value) => {
    setPlayers((prev) => prev.map((p, i) => (i === idx ? { ...p, [field]: value } : p)));
  };

  const canStart = players.slice(0, playerCount).every((p) => p.name.trim() !== '');

  const handleStart = () => {
    if (!canStart) return;
    const activePlayers = players.slice(0, playerCount).map((p) => ({
      name: p.name.trim(),
      avatar: avatarData.find((a) => a.id === p.avatarId),
      color: PASTEL_COLORS[p.colorIdx],
    }));
    onStartMatch(activePlayers);
  };

  return (
    <div className="setup-screen">
      <div className="setup-card">
        <h1 className="app-title">WaHo Duelz</h1>
        <p className="app-subtitle">Commander Life Tracker</p>

        <div className="setup-section">
          <label className="setup-label">Number of Players</label>
          <div className="player-count-selector">
            {[2, 3, 4].map((n) => (
              <button
                key={n}
                className={`count-btn ${playerCount === n ? 'active' : ''}`}
                onClick={() => setPlayerCount(n)}
              >
                {n}
              </button>
            ))}
          </div>
        </div>

        <div className="players-config">
          {Array.from({ length: playerCount }).map((_, idx) => {
            const player = players[idx];
            const selectedAvatar = avatarData.find((a) => a.id === player.avatarId);
            return (
              <div key={idx} className="player-config-row">
                <div className="player-number">P{idx + 1}</div>

                <div className="avatar-selector">
                  <div
                    className="avatar-preview"
                    style={{ color: PASTEL_COLORS[player.colorIdx].value }}
                  >
                    {selectedAvatar?.svg}
                  </div>
                  <div className="avatar-options">
                    {avatarData.map((avatar) => (
                      <button
                        key={avatar.id}
                        className={`avatar-option ${player.avatarId === avatar.id ? 'selected' : ''}`}
                        onClick={() => updatePlayer(idx, 'avatarId', avatar.id)}
                        title={avatar.name}
                      >
                        <div className="avatar-option-icon">{avatar.svg}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <input
                  type="text"
                  className="player-name-input"
                  placeholder={`Player ${idx + 1} name`}
                  value={player.name}
                  onChange={(e) => updatePlayer(idx, 'name', e.target.value)}
                  maxLength={20}
                />

                <select
                  className="color-select"
                  value={player.colorIdx}
                  onChange={(e) => updatePlayer(idx, 'colorIdx', parseInt(e.target.value))}
                  style={{
                    backgroundColor: PASTEL_COLORS[player.colorIdx].bg,
                    borderColor: PASTEL_COLORS[player.colorIdx].value,
                  }}
                >
                  {PASTEL_COLORS.map((c, i) => (
                    <option key={i} value={i}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>
            );
          })}
        </div>

        <button className="start-btn" disabled={!canStart} onClick={handleStart}>
          Start Match
        </button>
      </div>
    </div>
  );
}

export { PASTEL_COLORS };
