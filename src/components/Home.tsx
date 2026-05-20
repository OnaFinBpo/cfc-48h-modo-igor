interface HomeProps {
  onStart: () => void;
  hasProgress: boolean;
  completedCount: number;
  totalPhases: number;
}

export default function Home({ onStart, hasProgress, completedCount, totalPhases }: HomeProps) {
  return (
    <div className="screen home">
      <div className="brand">
        <div className="brand-tag">CFC 48H</div>
        <h1 className="brand-title">Modo Igor</h1>
        <p className="brand-sub">Estudo rápido pra prova de amanhã</p>
      </div>

      <div className="card card-explain">
        <h2>Como funciona</h2>
        <p>Você vai estudar por <strong>fases</strong>. Cada fase tem:</p>
        <ul>
          <li>Resumo curto (1 minuto de leitura).</li>
          <li>Perguntas rápidas.</li>
          <li>Resposta na hora — com explicação.</li>
        </ul>
        <p className="emphasis">Não precisa decorar tudo agora. Só ir avançando.</p>
      </div>

      <div className="card card-stats">
        <div className="stat">
          <div className="stat-num">{totalPhases}</div>
          <div className="stat-label">fases</div>
        </div>
        <div className="stat">
          <div className="stat-num">~70</div>
          <div className="stat-label">perguntas</div>
        </div>
        <div className="stat">
          <div className="stat-num">{completedCount}</div>
          <div className="stat-label">já feitas</div>
        </div>
      </div>

      <button className="btn btn-primary btn-big" onClick={onStart}>
        {hasProgress ? 'Continuar de onde parei' : 'Bora começar'}
      </button>

      <p className="footer-note">
        A prova é <strong>21/05/2026, 14h</strong>. Refeitório da Cia. Chega 15 min antes.
      </p>
    </div>
  );
}
