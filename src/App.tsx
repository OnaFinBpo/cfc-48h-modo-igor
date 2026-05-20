import { useEffect, useState } from 'react';
import { PHASES } from './data/modules';
import Home from './components/Home';
import Roadmap from './components/Roadmap';
import StudyModule from './components/StudyModule';
import FinalScreen from './components/FinalScreen';

type Screen = 'home' | 'roadmap' | 'phase' | 'final';

const STORAGE_KEY = 'cfc48h_progress_v1';

interface Progress {
  completedPhases: number[];
  answers: Record<string, { correct: boolean; tries: number }>;
  startedAt?: string;
}

const defaultProgress: Progress = { completedPhases: [], answers: {} };

function loadProgress(): Progress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultProgress;
    const parsed = JSON.parse(raw);
    return { ...defaultProgress, ...parsed };
  } catch {
    return defaultProgress;
  }
}

function saveProgress(p: Progress) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  } catch {
    // localStorage cheio ou bloqueado — ignora
  }
}

export default function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const [phaseIndex, setPhaseIndex] = useState<number>(0);
  const [progress, setProgress] = useState<Progress>(defaultProgress);

  useEffect(() => {
    setProgress(loadProgress());
  }, []);

  function startStudy() {
    const fresh = { ...progress, startedAt: progress.startedAt || new Date().toISOString() };
    setProgress(fresh);
    saveProgress(fresh);
    setScreen('roadmap');
  }

  function openPhase(idx: number) {
    setPhaseIndex(idx);
    setScreen('phase');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  function finishPhase(answers: Record<string, { correct: boolean; tries: number }>) {
    const completed = Array.from(new Set([...progress.completedPhases, PHASES[phaseIndex].id]));
    const updated: Progress = {
      ...progress,
      completedPhases: completed,
      answers: { ...progress.answers, ...answers },
    };
    setProgress(updated);
    saveProgress(updated);

    if (phaseIndex + 1 < PHASES.length) {
      setPhaseIndex(phaseIndex + 1);
      setScreen('roadmap');
    } else {
      setScreen('final');
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  function resetAll() {
    if (!confirm('Apagar todo o progresso e começar de novo?')) return;
    setProgress(defaultProgress);
    saveProgress(defaultProgress);
    setScreen('home');
  }

  function backToRoadmap() {
    setScreen('roadmap');
    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  return (
    <div className="app">
      {screen === 'home' && (
        <Home
          onStart={startStudy}
          hasProgress={progress.completedPhases.length > 0}
          completedCount={progress.completedPhases.length}
          totalPhases={PHASES.length}
        />
      )}
      {screen === 'roadmap' && (
        <Roadmap
          phases={PHASES}
          completed={progress.completedPhases}
          onSelect={openPhase}
          onReset={resetAll}
          onFinish={() => setScreen('final')}
        />
      )}
      {screen === 'phase' && (
        <StudyModule
          phase={PHASES[phaseIndex]}
          phaseNumber={phaseIndex + 1}
          totalPhases={PHASES.length}
          onFinish={finishPhase}
          onBack={backToRoadmap}
        />
      )}
      {screen === 'final' && (
        <FinalScreen
          progress={progress}
          onRestart={resetAll}
          onBack={backToRoadmap}
        />
      )}
    </div>
  );
}
