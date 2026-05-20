interface FinalScreenProps {
  progress: {
    completedPhases: number[];
    answers: Record<string, { correct: boolean; tries: number }>;
  };
  onRestart: () => void;
  onBack: () => void;
}

export default function FinalScreen({ progress, onRestart, onBack }: FinalScreenProps) {
  const total = Object.keys(progress.answers).length;
  const correct = Object.values(progress.answers).filter(a => a.correct).length;
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;

  return (
    <div className="screen final">
      <div className="final-badge">✓</div>
      <h1>Revisão concluída</h1>
      <p className="final-sub">Você passou pelas 8 fases. Agora é dormir, revisar leve e confiar.</p>

      <div className="card card-summary">
        <p className="summary-score">{correct} / {total} acertos no total</p>
        <p className="muted">{pct}% de aproveitamento</p>
      </div>

      <div className="card card-explain">
        <h2>Antes da prova (21/05 — 14h)</h2>
        <ul>
          <li>Dorme bem hoje. Sono é memória.</li>
          <li>Almoço leve amanhã. Sem fritura. Hidrata.</li>
          <li>Chega 13h45 no Refeitório — 15 min antes (item 6.a do edital).</li>
          <li>Material: caneta azul/preta, lápis, borracha, calculadora. SEM celular como calculadora.</li>
          <li>Lê cada questão DUAS vezes. A interpretação faz parte da prova.</li>
          <li>Não trava em pergunta difícil — marca com ? e volta depois.</li>
        </ul>
      </div>

      <div className="card card-explain emphasis-card">
        <p><strong>Frase pra repetir antes de começar:</strong></p>
        <p className="quote">
          "Eu fiz o que precisava fazer. Agora é hora de aplicar. Vou ler com calma. Vou pensar. Vou marcar com firmeza. E o que não souber, sigo em frente."
        </p>
      </div>

      <button className="btn btn-primary btn-big" onClick={onBack}>
        Revisar uma fase
      </button>
      <button className="btn btn-secondary btn-big" onClick={onRestart}>
        Recomeçar do zero
      </button>

      <p className="footer-note">Boa prova, Igor.</p>
    </div>
  );
}
