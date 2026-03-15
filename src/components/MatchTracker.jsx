import { useState } from 'react';

function getInitials(name) {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .toUpperCase()
    .slice(0, 3);
}

function EliminationBadge({ cause }) {
  if (!cause) return null;
  if (cause.type === 'life') {
    return <span className="elim-badge elim-life">40D</span>;
  }
  if (cause.type === 'commander') {
    return <span className="elim-badge elim-commander">CD-{getInitials(cause.killerName)}</span>;
  }
  return null;
}

export default function MatchTracker({ matchHistory }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className={`tracker-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        title="Match Tracker"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
          <rect x="9" y="3" width="6" height="4" rx="1" />
          <line x1="9" y1="12" x2="15" y2="12" />
          <line x1="9" y1="16" x2="13" y2="16" />
        </svg>
        <span className="tracker-toggle-label">History</span>
      </button>

      <div className={`tracker-panel ${isOpen ? 'open' : ''}`}>
        <div className="tracker-header">
          <h3>Match Tracker</h3>
          <button className="tracker-close" onClick={() => setIsOpen(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="tracker-content">
          {matchHistory.length === 0 ? (
            <p className="tracker-empty">No matches played yet.</p>
          ) : (
            matchHistory.map((match, idx) => (
              <div key={idx} className="match-record">
                <div className="match-record-header">
                  Match {matchHistory.length - idx}
                </div>
                <div className="match-record-results">
                  {match.results.map((result, rIdx) => (
                    <div
                      key={rIdx}
                      className={`match-result-row ${rIdx === 0 ? 'winner' : ''}`}
                    >
                      <span className="result-position">
                        {rIdx === 0 ? (
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                            <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 16.8l-6.2 4.5 2.4-7.4L2 9.4h7.6z" />
                          </svg>
                        ) : (
                          `#${rIdx + 1}`
                        )}
                      </span>
                      <span className={`result-name ${rIdx === 0 ? 'bold' : ''}`}>
                        {result.name}
                      </span>
                      <EliminationBadge cause={result.eliminationCause} />
                      <span className="result-life">{result.finalLife} HP</span>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {isOpen && <div className="tracker-backdrop" onClick={() => setIsOpen(false)} />}
    </>
  );
}
