// Conteúdo das 8 fases — banco de perguntas curtas, diretas, mobile-first.
// Tipos: 'tf' = certo/errado, 'mc' = múltipla escolha, 'reveal' = pergunta com resposta revelável.

export type QuestionType = 'tf' | 'mc' | 'reveal';

export interface Question {
  id: string;
  type: QuestionType;
  question: string;
  options?: string[]; // mc
  correct?: number; // mc: índice da correta. tf: 0=certo, 1=errado
  answer?: string; // reveal
  explanation: string;
  tag?: 'pegadinha' | 'decore' | 'atencao' | 'cai-muito';
}

export interface Phase {
  id: number;
  title: string;
  short: string;
  intro: string;
  pocket: string[]; // resumo de bolso (bullets)
  questions: Question[];
}

export const PHASES: Phase[] = [
  // ============ FASE 1 — PRIORIDADE MÁXIMA ============
  {
    id: 1,
    title: 'O que mais cai',
    short: 'Aquecimento',
    intro: 'Começa por aqui. São perguntas que SEMPRE caem em prova militar. Se errar, sem stress — a explicação vem na hora.',
    pocket: [
      '4 Símbolos Nacionais: Bandeira, Hino, Armas, Selo.',
      '5 graus de comportamento militar.',
      '6 punições do RDE.',
      'Deserção: mais de 8 dias.',
      'Dormir em serviço é CRIME (não transgressão).',
      'Patrono do Exército: Duque de Caxias.',
    ],
    questions: [
      {
        id: 'f1q1', type: 'mc', tag: 'decore',
        question: 'Quantos são os Símbolos Nacionais?',
        options: ['2', '3', '4', '5'],
        correct: 2,
        explanation: 'São 4: Bandeira, Hino, Armas e Selo. (Lei 5.700/1971)',
      },
      {
        id: 'f1q2', type: 'tf', tag: 'pegadinha',
        question: 'Dormir em serviço é uma transgressão disciplinar.',
        correct: 1,
        explanation: 'ERRADO. Dormir em serviço é CRIME MILITAR (Art. 203 CPM). Pega muita gente.',
      },
      {
        id: 'f1q3', type: 'mc', tag: 'cai-muito',
        question: 'A partir de quantos dias de ausência configura deserção?',
        options: ['3 dias', '5 dias', 'Mais de 8 dias', '15 dias'],
        correct: 2,
        explanation: 'Mais de 8 dias. Até 8 = ausência sem licença (transgressão). 9 em diante = deserção (crime, Art. 187 CPM).',
      },
      {
        id: 'f1q4', type: 'reveal', tag: 'decore',
        question: 'Quem é o Patrono do Exército Brasileiro?',
        answer: 'Duque de Caxias (Luís Alves de Lima e Silva).',
        explanation: 'Caxias. Dia do Soldado: 25 de agosto (aniversário dele).',
      },
      {
        id: 'f1q5', type: 'mc', tag: 'decore',
        question: 'Qual o calibre do fuzil FAL?',
        options: ['5,56 x 45 mm', '7,62 x 51 mm OTAN', '9 mm', '7,62 x 39 mm'],
        correct: 1,
        explanation: '7,62 x 51 mm OTAN. Decora — sempre cai.',
      },
      {
        id: 'f1q6', type: 'mc', tag: 'decore',
        question: 'Quantos graus de comportamento militar o RDE prevê?',
        options: ['3', '4', '5', '6'],
        correct: 2,
        explanation: 'São 5: Excepcional, Ótimo, Bom, Insuficiente, Mau.',
      },
      {
        id: 'f1q7', type: 'mc', tag: 'decore',
        question: 'Quantos tipos de punição disciplinar o RDE prevê?',
        options: ['4', '5', '6', '7'],
        correct: 2,
        explanation: 'São 6: Advertência, Impedimento, Repreensão, Detenção, Prisão, Licenciamento/Exclusão.',
      },
      {
        id: 'f1q8', type: 'tf', tag: 'pegadinha',
        question: 'O Brasil faz fronteira com TODOS os países da América do Sul.',
        correct: 1,
        explanation: 'ERRADO. NÃO faz fronteira com Chile e Equador. Faz com os outros 10.',
      },
    ],
  },

  // ============ FASE 2 — RDE ============
  {
    id: 2,
    title: 'RDE — Justiça e Disciplina',
    short: 'O maior bloco',
    intro: 'RDE = Regulamento Disciplinar do Exército. Provavelmente o tema com mais questões na prova. Foco total.',
    pocket: [
      'RDE = Decreto 4.346/2002.',
      'Trata de TRANSGRESSÕES (faltas administrativas) — não de crimes.',
      '6 punições: Advertência, Impedimento, Repreensão, Detenção, Prisão, Licenciamento/Exclusão.',
      '5 graus de comportamento: Excepcional, Ótimo, Bom, Insuficiente, Mau.',
      'Classificação da transgressão: Leve, Média, Grave.',
    ],
    questions: [
      {
        id: 'f2q1', type: 'reveal', tag: 'cai-muito',
        question: 'O que é transgressão disciplinar?',
        answer: 'Ação contrária aos preceitos da ética, dos deveres e das obrigações militares.',
        explanation: 'Decora a frase-chave: "ética, deveres e obrigações militares". Cai sempre.',
      },
      {
        id: 'f2q2', type: 'mc', tag: 'decore',
        question: 'Quais são as 6 punições do RDE, na ordem crescente de gravidade?',
        options: [
          'Repreensão, Advertência, Impedimento, Detenção, Prisão, Exclusão',
          'Advertência, Impedimento, Repreensão, Detenção, Prisão, Licenciamento/Exclusão',
          'Advertência, Repreensão, Impedimento, Prisão, Detenção, Exclusão',
          'Impedimento, Advertência, Repreensão, Detenção, Prisão, Exclusão',
        ],
        correct: 1,
        explanation: 'Ordem: Advertência → Impedimento → Repreensão → Detenção → Prisão → Licenciamento/Exclusão.',
      },
      {
        id: 'f2q3', type: 'mc', tag: 'decore',
        question: 'Quais são os 5 graus de comportamento militar?',
        options: [
          'Ótimo, Bom, Regular, Insuficiente, Mau',
          'Excepcional, Bom, Regular, Insuficiente, Mau',
          'Excepcional, Ótimo, Bom, Insuficiente, Mau',
          'Exemplar, Ótimo, Bom, Insuficiente, Péssimo',
        ],
        correct: 2,
        explanation: 'Excepcional > Ótimo > Bom > Insuficiente > Mau. NÃO existe "Regular".',
      },
      {
        id: 'f2q4', type: 'tf', tag: 'pegadinha',
        question: 'Bom comportamento anterior é uma CAUSA AGRAVANTE.',
        correct: 1,
        explanation: 'ERRADO. Bom comportamento anterior é ATENUANTE (diminui a pena), não agravante.',
      },
      {
        id: 'f2q5', type: 'tf',
        question: 'Reincidência é causa agravante da transgressão.',
        correct: 0,
        explanation: 'CERTO. Reincidência é agravante — junto com conluio, premeditação, ser cometida em serviço.',
      },
      {
        id: 'f2q6', type: 'mc',
        question: 'O comportamento "EXCEPCIONAL" exige quantos anos sem qualquer punição?',
        options: ['5 anos', '7 anos', '9 anos', '10 anos'],
        correct: 2,
        explanation: '9 anos de efetivo serviço sem nenhuma punição disciplinar.',
      },
      {
        id: 'f2q7', type: 'reveal', tag: 'cai-muito',
        question: 'Qual o comportamento militar mínimo para concorrer ao CFC?',
        answer: 'BOM.',
        explanation: 'Tradicionalmente, comportamento BOM (no mínimo). Insuficiente ou Mau desclassifica.',
      },
      {
        id: 'f2q8', type: 'mc',
        question: 'A classificação das transgressões disciplinares é em:',
        options: [
          'Pequena, Média, Grande',
          'Leve, Média, Grave',
          'Simples, Comum, Qualificada',
          'Branda, Moderada, Severa',
        ],
        correct: 1,
        explanation: 'Leve, Média, Grave (Art. 22 do RDE).',
      },
      {
        id: 'f2q9', type: 'tf',
        question: 'Conluio (mais de uma pessoa envolvida) é causa AGRAVANTE da transgressão.',
        correct: 0,
        explanation: 'CERTO. Conluio aumenta a pena.',
      },
      {
        id: 'f2q10', type: 'reveal',
        question: 'Qual o decreto que aprova o RDE?',
        answer: 'Decreto nº 4.346, de 26 de agosto de 2002.',
        explanation: 'Decreto 4.346/2002. Pode aparecer na prova.',
      },
    ],
  },

  // ============ FASE 3 — CPM ============
  {
    id: 3,
    title: 'CPM — Crimes Militares',
    short: 'Crime ≠ transgressão',
    intro: 'CPM = Código Penal Militar. Não confunda com RDE. Aqui é CRIME — vai pra Justiça Militar.',
    pocket: [
      'CPM = Decreto-Lei 1.001/1969.',
      'Crime: julgado pela Justiça Militar (não pelo comando da OM).',
      'Dormir em serviço, abandono de posto, embriaguez em serviço = CRIMES.',
      'Deserção = mais de 8 dias.',
      'Pena de morte: SÓ em tempo de guerra. Nunca em paz.',
    ],
    questions: [
      {
        id: 'f3q1', type: 'tf', tag: 'cai-muito',
        question: 'Embriaguez em serviço é crime militar.',
        correct: 0,
        explanation: 'CERTO. Art. 202 CPM. Pena: detenção de 6 meses a 2 anos.',
      },
      {
        id: 'f3q2', type: 'mc', tag: 'pegadinha',
        question: 'Abandono de posto, sem ordem superior, configura:',
        options: [
          'Transgressão disciplinar leve',
          'Transgressão disciplinar grave',
          'Crime militar (Art. 195 CPM)',
          'Falta administrativa sem consequência',
        ],
        correct: 2,
        explanation: 'CRIME militar (Art. 195 CPM). Pena: detenção de 3 meses a 1 ano.',
      },
      {
        id: 'f3q3', type: 'mc',
        question: 'A partir de quantos dias de ausência configura deserção?',
        options: ['3 dias', '5 dias', 'Mais de 8 dias', 'Mais de 15 dias'],
        correct: 2,
        explanation: 'Mais de 8 dias (Art. 187 CPM). Do 1º ao 8º dia = ausência sem licença.',
      },
      {
        id: 'f3q4', type: 'tf', tag: 'pegadinha',
        question: 'O CPM prevê pena de morte em tempo de PAZ.',
        correct: 1,
        explanation: 'ERRADO. Pena de morte só em tempo de GUERRA (e por crimes específicos). Em paz, nunca.',
      },
      {
        id: 'f3q5', type: 'reveal',
        question: 'Qual o decreto-lei do CPM?',
        answer: 'Decreto-Lei nº 1.001, de 21 de outubro de 1969.',
        explanation: 'Decreto-Lei 1.001/1969.',
      },
      {
        id: 'f3q6', type: 'mc',
        question: 'Quem julga crime militar?',
        options: [
          'O Comandante da OM',
          'A Justiça Militar (auditorias militares e STM)',
          'A Justiça Comum',
          'O Conselho de Justificação',
        ],
        correct: 1,
        explanation: 'Justiça Militar (auditorias militares e Superior Tribunal Militar).',
      },
      {
        id: 'f3q7', type: 'reveal', tag: 'cai-muito',
        question: 'Qual a diferença prática entre transgressão e crime?',
        answer: 'Transgressão = falta administrativa, vai pro RDE. Crime = conduta tipificada no CPM, vai pra Justiça Militar.',
        explanation: 'Se está no CPM, é CRIME. Se não está, pode ser transgressão. Decora isso.',
      },
      {
        id: 'f3q8', type: 'tf',
        question: 'Desrespeitar superior diante de outro militar é crime militar.',
        correct: 0,
        explanation: 'CERTO. Art. 160 CPM — desrespeito a superior. Detenção de 3 meses a 1 ano.',
      },
    ],
  },

  // ============ FASE 4 — POSTOS, SÍMBOLOS, PATRONOS ============
  {
    id: 4,
    title: 'Postos, Símbolos, Patronos',
    short: 'Decorar é o jogo',
    intro: 'Aqui não tem técnica. É memorização pura. Repete em voz alta.',
    pocket: [
      'Praça: Soldado, Cabo, 3º/2º/1º Sargento, Subtenente.',
      'Oficial: 2º/1º Tenente, Capitão, Major, Ten-Cel, Coronel, Generais.',
      'Marechal: SÓ em tempo de guerra.',
      '4 Símbolos: Bandeira, Hino, Armas, Selo.',
      'Patrono do Exército: Caxias. Cavalaria: Osório. Infantaria: Sampaio. Artilharia: Mallet. Engenharia: Vilagran Cabrita.',
    ],
    questions: [
      {
        id: 'f4q1', type: 'mc', tag: 'cai-muito',
        question: 'Marque a sequência CORRETA do menor para o maior na hierarquia:',
        options: [
          'Soldado, Cabo, Sargento, Tenente, Subtenente, Capitão',
          'Soldado, Cabo, Sargento, Subtenente, Tenente, Capitão',
          'Cabo, Soldado, Sargento, Subtenente, Tenente, Capitão',
          'Soldado, Sargento, Cabo, Subtenente, Tenente, Capitão',
        ],
        correct: 1,
        explanation: 'Soldado → Cabo → Sargento → Subtenente → Tenente → Capitão. SUBTENENTE é PRAÇA, fica abaixo de Tenente.',
      },
      {
        id: 'f4q2', type: 'tf', tag: 'pegadinha',
        question: 'Subtenente é um oficial subalterno.',
        correct: 1,
        explanation: 'ERRADO. Subtenente é PRAÇA (a praça mais antiga). Oficial subalterno é Tenente.',
      },
      {
        id: 'f4q3', type: 'mc',
        question: 'A graduação de Marechal só é conferida:',
        options: [
          'Após 40 anos de serviço',
          'Em tempo de guerra',
          'A critério do Presidente em tempo de paz',
          'Após o General de Exército se aposentar',
        ],
        correct: 1,
        explanation: 'Só em TEMPO DE GUERRA. Em paz, posto ativo máximo é General de Exército.',
      },
      {
        id: 'f4q4', type: 'reveal', tag: 'decore',
        question: 'Quem é o patrono da Cavalaria?',
        answer: 'General Manuel Luís Osório (Marquês do Herval).',
        explanation: 'Osório — herói das cargas de cavalaria na Guerra do Paraguai.',
      },
      {
        id: 'f4q5', type: 'reveal', tag: 'decore',
        question: 'Quem é o patrono da Infantaria?',
        answer: 'Brigadeiro Antônio de Sampaio.',
        explanation: 'Sampaio — morreu de ferimento em Tuiuti (Guerra do Paraguai).',
      },
      {
        id: 'f4q6', type: 'reveal',
        question: 'Quem é o patrono da Artilharia?',
        answer: 'Marechal Emílio Luís Mallet.',
        explanation: 'Mallet — defesa da artilharia em Tuiuti.',
      },
      {
        id: 'f4q7', type: 'mc',
        question: 'Quantas estrelas tem a Bandeira do Brasil?',
        options: ['26', '27', '28', 'Varia conforme o número de estados'],
        correct: 1,
        explanation: '27 estrelas — 26 estados + DF.',
      },
      {
        id: 'f4q8', type: 'reveal', tag: 'cai-muito',
        question: 'O que as estrelas da Bandeira representam?',
        answer: 'O céu visto da cidade do Rio de Janeiro em 15 de novembro de 1889.',
        explanation: 'Céu do RJ em 15/11/1889 — proclamação da República. NÃO é ordem alfabética nem regional.',
      },
      {
        id: 'f4q9', type: 'reveal',
        question: 'Qual o lema da Bandeira Nacional?',
        answer: 'ORDEM E PROGRESSO.',
        explanation: 'Escrito na faixa branca que cruza o círculo azul.',
      },
      {
        id: 'f4q10', type: 'reveal',
        question: 'Quais são os 4 Símbolos Nacionais?',
        answer: 'Bandeira, Hino, Armas (Brasão) e Selo.',
        explanation: 'Lei 5.700/1971. Decora essa sequência.',
      },
    ],
  },

  // ============ FASE 5 — PÁRA-FAL E ORIENTAÇÃO ============
  {
    id: 5,
    title: 'Pára-FAL e Orientação',
    short: 'Operacional',
    intro: 'Armamento, segurança, mapa. Coisas que você já vê no quartel — só precisa fixar o vocabulário técnico.',
    pocket: [
      'FAL: 7,62 x 51 mm OTAN. Origem belga. Carregador 20 cartuchos.',
      'Pára-FAL: versão paraquedista, cano curto, coronha rebatível.',
      'Toda arma é considerada CARREGADA.',
      'Azimute: a partir do NORTE, sentido HORÁRIO, 0° a 360°.',
      '3 nortes: Verdadeiro, Magnético, de Quadrícula.',
      'Escala 1:50.000 → 1 cm na carta = 500 m no terreno.',
    ],
    questions: [
      {
        id: 'f5q1', type: 'mc', tag: 'cai-muito',
        question: 'Qual o calibre do fuzil FAL?',
        options: ['5,56 x 45 mm', '7,62 x 51 mm OTAN', '9 mm', '7,62 x 39 mm'],
        correct: 1,
        explanation: '7,62 x 51 mm OTAN.',
      },
      {
        id: 'f5q2', type: 'reveal',
        question: 'Qual a capacidade do carregador padrão do FAL?',
        answer: '20 cartuchos.',
        explanation: 'Carregador padrão = 20 cartuchos.',
      },
      {
        id: 'f5q3', type: 'tf', tag: 'pegadinha',
        question: 'Se a arma está aparentemente descarregada, pode-se apontar para um colega em brincadeira.',
        correct: 1,
        explanation: 'ERRADO. NUNCA aponte arma para algo que não pretenda destruir, MESMO descarregada. Regra de ouro.',
      },
      {
        id: 'f5q4', type: 'reveal',
        question: 'Toda arma é considerada o quê?',
        answer: 'CARREGADA — até prova em contrário.',
        explanation: 'Primeira regra de segurança. Sempre.',
      },
      {
        id: 'f5q5', type: 'mc', tag: 'cai-muito',
        question: 'Sobre azimute, marque a CORRETA:',
        options: [
          'Medido a partir do Leste, sentido anti-horário, 0° a 90°.',
          'Medido a partir do Norte, sentido horário, 0° a 360°.',
          'Medido a partir do Sul, sentido horário, 0° a 360°.',
          'Distância em metros entre dois pontos.',
        ],
        correct: 1,
        explanation: 'A partir do NORTE, sentido HORÁRIO, varia de 0° a 360°.',
      },
      {
        id: 'f5q6', type: 'mc',
        question: 'Qual o azimute do LESTE?',
        options: ['0°', '90°', '180°', '270°'],
        correct: 1,
        explanation: 'Leste = 90°. Sul = 180°. Oeste = 270°. Norte = 0° ou 360°.',
      },
      {
        id: 'f5q7', type: 'mc', tag: 'cai-muito',
        question: 'Em uma carta 1:50.000, 1 cm na carta corresponde a:',
        options: ['50 m', '500 m', '5.000 m', '50.000 m'],
        correct: 1,
        explanation: '1 cm × 50.000 = 50.000 cm = 500 m.',
      },
      {
        id: 'f5q8', type: 'reveal',
        question: 'Quais os 3 tipos de NORTE?',
        answer: 'Norte Verdadeiro (geográfico), Norte Magnético (bússola), Norte de Quadrícula (linhas da carta).',
        explanation: 'NV, NM, NQ. Decora.',
      },
    ],
  },

  // ============ FASE 6 — MATEMÁTICA ============
  {
    id: 6,
    title: 'Matemática básica',
    short: 'Cabeça fria, conta certa',
    intro: 'Sem matemática avançada — só o que está no edital: 4 operações, média, %, regra de três, equação 1º grau.',
    pocket: [
      'Média = soma ÷ quantidade.',
      'x% de y = (x ÷ 100) × y.',
      'Regra de três direta: a/b = c/x → x = (b·c)/a.',
      'Regra de três inversa: inverte uma coluna antes de cruzar.',
      'Equação: isola o X, divide pelo coeficiente.',
    ],
    questions: [
      {
        id: 'f6q1', type: 'mc',
        question: 'Quanto é 20% de 200?',
        options: ['20', '30', '40', '50'],
        correct: 2,
        explanation: '20% = 0,20. 0,20 × 200 = 40.',
      },
      {
        id: 'f6q2', type: 'mc',
        question: 'Qual a média de 4, 8 e 12?',
        options: ['6', '7', '8', '10'],
        correct: 2,
        explanation: '(4+8+12) ÷ 3 = 24 ÷ 3 = 8.',
      },
      {
        id: 'f6q3', type: 'mc',
        question: 'Se 3 kg custam R$ 15, quanto custam 6 kg?',
        options: ['R$ 25', 'R$ 30', 'R$ 35', 'R$ 45'],
        correct: 1,
        explanation: 'Direta: 3/6 = 15/x → x = (6×15)/3 = 30.',
      },
      {
        id: 'f6q4', type: 'mc', tag: 'atencao',
        question: 'Se 6 operários constroem um muro em 10 dias, quantos dias 4 operários levam para o mesmo muro?',
        options: ['8 dias', '12 dias', '15 dias', '18 dias'],
        correct: 2,
        explanation: 'INVERSA (menos operários, mais dias). 6/4 = x/10 → x = 60/4 = 15.',
      },
      {
        id: 'f6q5', type: 'mc',
        question: 'Resolva: 3x + 5 = 20. x = ?',
        options: ['3', '5', '7', '15'],
        correct: 1,
        explanation: '3x = 20 − 5 = 15. x = 15 ÷ 3 = 5.',
      },
      {
        id: 'f6q6', type: 'mc',
        question: 'Resolva: 4x − 7 = 2x + 5. x = ?',
        options: ['3', '4', '5', '6'],
        correct: 3,
        explanation: '4x − 2x = 5 + 7 → 2x = 12 → x = 6.',
      },
      {
        id: 'f6q7', type: 'mc',
        question: 'Em um pelotão de 50, 40 foram aprovados. Qual o percentual?',
        options: ['70%', '75%', '80%', '85%'],
        correct: 2,
        explanation: '40 ÷ 50 = 0,80 = 80%.',
      },
      {
        id: 'f6q8', type: 'mc',
        question: 'Calcule: (15 − 7) × 3 + 12 ÷ 4.',
        options: ['25', '27', '30', '33'],
        correct: 1,
        explanation: '(15-7) = 8. 8×3 = 24. 12÷4 = 3. 24+3 = 27.',
      },
    ],
  },

  // ============ FASE 7 — REDAÇÃO ============
  {
    id: 7,
    title: 'Redação',
    short: 'Estrutura é tudo',
    intro: 'Redação militar não é literatura. É clareza + estrutura + alinhamento institucional. Decora a forma.',
    pocket: [
      'Estrutura: Introdução + 2 parágrafos de Desenvolvimento + Conclusão.',
      'Tese (sua posição) vai no FIM da introdução.',
      'Cada parágrafo do desenvolvimento defende UM argumento.',
      'Conclusão fecha — NÃO traz argumento novo.',
      'Tamanho ideal: 20 a 30 linhas.',
      'Hierarquia e disciplina = pilares constitucionais (Art. 142 CF).',
    ],
    questions: [
      {
        id: 'f7q1', type: 'mc',
        question: 'Quantas partes tem uma dissertação?',
        options: ['1 (texto único)', '2 (introdução e conclusão)', '3 (introdução, desenvolvimento, conclusão)', '4 (intro, tese, argumento, fim)'],
        correct: 2,
        explanation: '3 partes: Introdução + Desenvolvimento + Conclusão.',
      },
      {
        id: 'f7q2', type: 'mc',
        question: 'Em qual parte fica a TESE (sua opinião principal)?',
        options: ['No início da introdução', 'No fim da introdução', 'No desenvolvimento', 'Na conclusão'],
        correct: 1,
        explanation: 'A tese fecha a introdução. Apresenta o tema e termina com sua posição.',
      },
      {
        id: 'f7q3', type: 'reveal', tag: 'cai-muito',
        question: 'Quais os 2 pilares constitucionais das Forças Armadas?',
        answer: 'Hierarquia e Disciplina (Art. 142 da Constituição Federal).',
        explanation: 'Decora — provavelmente o tema de redação vai por aqui.',
      },
      {
        id: 'f7q4', type: 'tf', tag: 'atencao',
        question: 'Na conclusão da redação, posso trazer um argumento novo, forte, pra impressionar.',
        correct: 1,
        explanation: 'ERRADO. Conclusão NÃO traz argumento novo — só fecha. Argumento novo na conclusão é erro de estrutura.',
      },
      {
        id: 'f7q5', type: 'mc',
        question: 'Tamanho ideal de uma redação para essa prova:',
        options: ['10 a 15 linhas', '20 a 30 linhas', '40 a 50 linhas', 'O maior possível'],
        correct: 1,
        explanation: '20 a 30 linhas. Menos parece pobre. Mais cansa o avaliador.',
      },
      {
        id: 'f7q6', type: 'mc', tag: 'atencao',
        question: 'Qual destes erros pode ZERAR a redação?',
        options: [
          'Letra um pouco torta',
          'Uma vírgula errada',
          'Fugir do tema',
          'Repetir uma palavra',
        ],
        correct: 2,
        explanation: 'FUGIR DO TEMA zera. Os outros perdem ponto, mas não zeram.',
      },
    ],
  },

  // ============ FASE 8 — SIMULADO RELÂMPAGO ============
  {
    id: 8,
    title: 'Simulado relâmpago',
    short: 'Último treino',
    intro: 'Mistura de tudo. Se passar daqui acertando metade, está pronto. Não trave em pergunta difícil — segue.',
    pocket: [
      'Leia DUAS vezes cada questão.',
      'Sublinhe palavras como "incorreto", "exceto", "apenas".',
      'Não chute na primeira leitura — marca com ? e volta depois.',
      'Elimine alternativas absurdas.',
    ],
    questions: [
      {
        id: 'f8q1', type: 'mc',
        question: 'A Batalha dos Guararapes ocorreu em qual estado?',
        options: ['Bahia', 'Rio de Janeiro', 'Pernambuco', 'Paraíba'],
        correct: 2,
        explanation: 'PERNAMBUCO. 1648-1649. Marco do Exército (Dia do Exército: 19 de abril).',
      },
      {
        id: 'f8q2', type: 'mc',
        question: 'A FEB combateu em qual país na 2ª Guerra Mundial?',
        options: ['França', 'Alemanha', 'Itália', 'Bélgica'],
        correct: 2,
        explanation: 'ITÁLIA. Comandada pelo Marechal Mascarenhas de Morais.',
      },
      {
        id: 'f8q3', type: 'tf',
        question: 'O CPM prevê a pena de morte em tempo de paz no Brasil.',
        correct: 1,
        explanation: 'ERRADO. Pena de morte só em tempo de guerra.',
      },
      {
        id: 'f8q4', type: 'mc',
        question: 'Quantos estados tem a região Nordeste?',
        options: ['7', '8', '9', '11'],
        correct: 2,
        explanation: '9: AL, BA, CE, MA, PB, PE, PI, RN, SE.',
      },
      {
        id: 'f8q5', type: 'mc',
        question: 'O ponto mais alto do Brasil é:',
        options: ['Pico da Bandeira', 'Pico das Agulhas Negras', 'Pico da Neblina', 'Monte Roraima'],
        correct: 2,
        explanation: 'Pico da Neblina (AM), 2.995 m.',
      },
      {
        id: 'f8q6', type: 'mc',
        question: 'Em uma carta 1:25.000, 1 cm corresponde a:',
        options: ['25 m', '250 m', '2.500 m', '25.000 m'],
        correct: 1,
        explanation: '1 × 25.000 = 25.000 cm = 250 m.',
      },
      {
        id: 'f8q7', type: 'tf',
        question: 'Reincidência é uma causa atenuante da transgressão disciplinar.',
        correct: 1,
        explanation: 'ERRADO. Reincidência é AGRAVANTE.',
      },
      {
        id: 'f8q8', type: 'mc',
        question: 'Resolva: 2(x + 4) = 18. x = ?',
        options: ['3', '5', '7', '9'],
        correct: 1,
        explanation: '2x + 8 = 18 → 2x = 10 → x = 5.',
      },
      {
        id: 'f8q9', type: 'mc',
        question: 'A Lei dos Símbolos Nacionais é:',
        options: ['Lei 5.700/1971', 'Lei 6.880/1980', 'Decreto 4.346/2002', 'CF Art. 142'],
        correct: 0,
        explanation: 'Lei 5.700/1971. Define os 4 Símbolos.',
      },
      {
        id: 'f8q10', type: 'mc',
        question: 'A 1ª Divisão de Exército tem o cognome de:',
        options: [
          'Divisão Caxias',
          'Divisão Osório',
          'Divisão Mascarenhas de Morais',
          'Divisão Tamandaré',
        ],
        correct: 2,
        explanation: 'Divisão Mascarenhas de Morais — comandante da FEB na 2ª Guerra.',
      },
      {
        id: 'f8q11', type: 'tf',
        question: 'Dormir em serviço pode ser apenas advertência verbal se for a primeira vez.',
        correct: 1,
        explanation: 'ERRADO. É CRIME (Art. 203 CPM), com pena de detenção. Não é falta administrativa.',
      },
      {
        id: 'f8q12', type: 'mc',
        question: 'Qual o azimute do Sul?',
        options: ['0°', '90°', '180°', '270°'],
        correct: 2,
        explanation: 'Sul = 180°.',
      },
      {
        id: 'f8q13', type: 'tf',
        question: 'O Brasil faz fronteira com a Argentina.',
        correct: 0,
        explanation: 'CERTO. Argentina faz fronteira com RS, SC e PR.',
      },
      {
        id: 'f8q14', type: 'mc',
        question: 'Calcule: 30% de 250.',
        options: ['50', '60', '75', '80'],
        correct: 2,
        explanation: '0,30 × 250 = 75.',
      },
      {
        id: 'f8q15', type: 'reveal',
        question: 'Para ingressar no CFC, qual o comportamento mínimo do candidato?',
        answer: 'BOM (no mínimo).',
        explanation: 'Bom comportamento militar. Insuficiente ou Mau desclassifica.',
      },
    ],
  },
];
