import { useState } from 'react';
import type { Phase } from '../data/modules';
import QuestionCard from './QuestionCard';
import ProgressBar from './ProgressBar';

interface StudyModuleProps {
  phase: Phase;
  phaseNumber: number;
  totalPhases: number;
  onFinish: (answers: Record<string, { correct: boolean; tries: number }>) => void;
  onBack: () => void;
}

type Stage = 'intro' | 'questions' | 'summary';

export default function StudyModule({ phase, phaseNumber, totalPhases, onFinish, onBack }: StudyModuleProps) {
  const [stage, setStage] = useState<Stage>('intro');
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, { correct: boolean; tries: number }>>({});
  const [hits, setHits] = useState(0);

  function startQuestions() {
    setStage('questions');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  function recordAnswer(correct: boolean) {
    const q = phase.questions[qIndex];
    setAnswers(prev => ({
      ...prev,
      [q.id]: { correct, tries: (prev[q.id]?.tries ?? 0) + 1 },
    }));
    if (correct) setHits(h => h + 1);
  }

  function nextQuestion() {
    if (qIndex + 1 < phase.questions.length) {
      setQIndex(qIndex + 1);
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      setStage('summary');
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }

  function finishPhase() {
    onFinish(answers);
  }

  return (
    <div className="screen study">
      <div className="page-head">
        <div className="page-head-top">
          <button className="btn-link" onClick={onBack}>‹ voltar</button>
          <span className="brand-mini">Fase {phaseNumber} de {totalPhases}</span>
        </div>
        <h1>{phase.title}</h1>
        <p className="muted">{phase.short}</p>
      </div>

      {stage === 'intro' && (
        <>
          <div className="card card-explain">
            <p className="intro-text">{phase.intro}</p>
          </div>

          <div className="card card-pocket">
            <h3 className="pocket-title">📌 Resumo de bolso</h3>
            <ul>
              {phase.pocket.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>

          <div className="card card-meta">
            <div className="meta-row">
              <span>Perguntas nesta fase:</span>
              <strong>{phase.questions.length}</strong>
            </div>
            <div className="meta-row">
              <span>Tempo estimado:</span>
              <strong>~{Math.max(3, phase.questions.length * 1)} min</strong>
            </div>
          </div>

          <button className="btn btn-primary btn-big" onClick={startQuestions}>
            Entendi, bora pras perguntas
          </button>
        </>
      )}

      {stage === 'questions' && (
        <>
          <ProgressBar current={qIndex + 1} total={phase.questions.length} label={`Pergunta ${qIndex + 1} de ${phase.questions.length}`} />
          <QuestionCard
            key={phase.questions[qIndex].id}
            question={phase.questions[qIndex]}
            index={qIndex}
            total={phase.questions.length}
            onAnswer={recordAnswer}
            onNext={nextQuestion}
          />
        </>
      )}

      {stage === 'summary' && (
        <>
          <div className="card card-summary">
            <h2>Fase concluída ✓</h2>
            <p className="summary-score">{hits} / {phase.questions.length} acertos</p>
            <p className="muted">
              {hits === phase.questions.length && 'Excelente. Próxima.'}
              {hits >= Math.ceil(phase.questions.length * 0.7) && hits < phase.questions.length && 'Bom. Só releia os erros.'}
              {hits < Math.ceil(phase.questions.length * 0.7) && 'Releia o resumo de bolso e segue. Vai fixar com o tempo.'}
            </p>
          </div>

          <div className="card card-pocket">
            <h3 className="pocket-title">📌 Reveja antes de seguir</h3>
            <ul>
              {phase.pocket.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>

          <button className="btn btn-primary btn-big" onClick={finishPhase}>
            {phaseNumber === totalPhases ? 'Terminar' : 'Avançar para próxima fase'}
          </button>
        </>
      )}
    </div>
  );
}
