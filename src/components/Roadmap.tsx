import type { Phase } from '../data/modules';

interface RoadmapProps {
  phases: Phase[];
  completed: number[];
  onSelect: (index: number) => void;
  onReset: () => void;
  onFinish: () => void;
}

export default function Roadmap({ phases, completed, onSelect, onReset, onFinish }: RoadmapProps) {
  const total = phases.length;
  const done = completed.length;
  const pct = Math.round((done / total) * 100);
  const allDone = done === total;

  return (
    <div className="screen roadmap">
      <div className="page-head">
        <div className="page-head-top">
          <span className="brand-mini">CFC 48H</span>
          <button className="btn-link" onClick={onReset}>resetar</button>
        </div>
        <h1>Roadmap</h1>
        <p className="muted">{done} de {total} fases concluídas — {pct}%</p>
        <div className="progress-track">
          <div className="progress-fill" style={{ width: `${pct}%` }} />
        </div>
      </div>

      <div className="phase-list">
        {phases.map((ph, idx) => {
          const isDone = completed.includes(ph.id);
          const isNext = !isDone && (idx === 0 || completed.includes(phases[idx - 1].id));
          return (
            <button
              key={ph.id}
              className={`phase-card ${isDone ? 'done' : ''} ${isNext ? 'next' : ''}`}
              onClick={() => onSelect(idx)}
            >
              <div className="phase-card-num">
                {isDone ? '✓' : ph.id}
              </div>
              <div className="phase-card-body">
                <div className="phase-card-title">{ph.title}</div>
                <div className="phase-card-short">{ph.short}</div>
              </div>
              <div className="phase-card-arrow">›</div>
            </button>
          );
        })}
      </div>

      {allDone && (
        <button className="btn btn-primary btn-big" onClick={onFinish}>
          Ver tela final
        </button>
      )}
    </div>
  );
}
