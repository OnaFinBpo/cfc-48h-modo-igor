import { useState } from 'react';
import type { Question } from '../data/modules';

interface QuestionCardProps {
  question: Question;
  index: number;
  total: number;
  onAnswer: (correct: boolean) => void;
  onNext: () => void;
}

export default function QuestionCard({ question, index, total, onAnswer, onNext }: QuestionCardProps) {
  const [selected, setSelected] = useState<number | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function tagLabel(tag?: string) {
    switch (tag) {
      case 'pegadinha': return { text: 'PEGADINHA', cls: 'tag-pegadinha' };
      case 'cai-muito': return { text: 'CAI MUITO', cls: 'tag-cai-muito' };
      case 'decore': return { text: 'DECORE', cls: 'tag-decore' };
      case 'atencao': return { text: 'ATENÇÃO', cls: 'tag-atencao' };
      default: return null;
    }
  }

  const tag = tagLabel(question.tag);

  function handleChoose(i: number) {
    if (submitted) return;
    setSelected(i);
  }

  function handleSubmit() {
    if (selected === null) return;
    setSubmitted(true);
    const isCorrect = selected === question.correct;
    onAnswer(isCorrect);
  }

  function handleReveal() {
    setRevealed(true);
    onAnswer(true); // pergunta revelável conta como "vista"
  }

  const isMc = question.type === 'mc';
  const isTf = question.type === 'tf';
  const isReveal = question.type === 'reveal';

  return (
    <div className="qcard">
      <div className="qcard-top">
        <span className="q-counter">Pergunta {index + 1} de {total}</span>
        {tag && <span className={`tag ${tag.cls}`}>{tag.text}</span>}
      </div>

      <h3 className="q-text">{question.question}</h3>

      {(isMc || isTf) && (
        <div className="options">
          {isTf && (
            <>
              <button
                className={`opt ${selected === 0 ? 'selected' : ''} ${submitted && question.correct === 0 ? 'correct' : ''} ${submitted && selected === 0 && selected !== question.correct ? 'wrong' : ''}`}
                onClick={() => handleChoose(0)}
                disabled={submitted}
              >
                <span className="opt-letter">C</span>
                <span className="opt-text">CERTO</span>
              </button>
              <button
                className={`opt ${selected === 1 ? 'selected' : ''} ${submitted && question.correct === 1 ? 'correct' : ''} ${submitted && selected === 1 && selected !== question.correct ? 'wrong' : ''}`}
                onClick={() => handleChoose(1)}
                disabled={submitted}
              >
                <span className="opt-letter">E</span>
                <span className="opt-text">ERRADO</span>
              </button>
            </>
          )}
          {isMc && question.options?.map((opt, i) => (
            <button
              key={i}
              className={`opt ${selected === i ? 'selected' : ''} ${submitted && question.correct === i ? 'correct' : ''} ${submitted && selected === i && selected !== question.correct ? 'wrong' : ''}`}
              onClick={() => handleChoose(i)}
              disabled={submitted}
            >
              <span className="opt-letter">{String.fromCharCode(65 + i)}</span>
              <span className="opt-text">{opt}</span>
            </button>
          ))}
        </div>
      )}

      {isReveal && !revealed && (
        <button className="btn btn-secondary btn-big" onClick={handleReveal}>
          Tocar para ver a resposta
        </button>
      )}

      {isReveal && revealed && (
        <div className="reveal-box">
          <div className="reveal-label">Resposta:</div>
          <div className="reveal-answer">{question.answer}</div>
        </div>
      )}

      {(isMc || isTf) && !submitted && (
        <button
          className={`btn btn-primary btn-big ${selected === null ? 'disabled' : ''}`}
          onClick={handleSubmit}
          disabled={selected === null}
        >
          Confirmar resposta
        </button>
      )}

      {(submitted || revealed) && (
        <div className={`feedback ${submitted && selected === question.correct ? 'ok' : submitted ? 'err' : 'info'}`}>
          <div className="feedback-head">
            {submitted && selected === question.correct && '✓ Acertou'}
            {submitted && selected !== question.correct && '✗ Não foi essa'}
            {revealed && 'ℹ Fixa essa'}
          </div>
          <div className="feedback-body">{question.explanation}</div>
        </div>
      )}

      {(submitted || revealed) && (
        <button className="btn btn-primary btn-big" onClick={onNext}>
          {index + 1 === total ? 'Concluir fase' : 'Próxima pergunta'}
        </button>
      )}
    </div>
  );
}
