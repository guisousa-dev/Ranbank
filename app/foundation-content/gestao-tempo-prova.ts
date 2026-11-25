// Perguntas da prova final de Gestão de tempo: 5 por módulo. A roleta sorteia 10, equilibrando os módulos.
// A primeira opção é sempre a certa; a ordem é embaralhada na hora de mostrar.

import type { QuizQuestion } from "../foundation-lessons";

export const PROVA_GESTAO_TEMPO: QuizQuestion[] = [
  // Módulo 1 · Fundamentos e diagnóstico
  {
    module: 0,
    question: "Qual dos cinco fundamentos é acompanhar o que funcionou e ajustar o plano?",
    options: ["Revisão.", "Clareza.", "Foco.", "Prioridades."],
    why: "Os cinco são clareza, objetivos, prioridades, foco e revisão. Revisar é olhar para trás e ajustar.",
    ref: "Aula 1 · O que é gestão do tempo",
  },
  {
    module: 0,
    question: "Para a aula, o que é gestão do tempo?",
    options: ["Usar o tempo com consciência, equilibrando responsabilidades, produtividade e descanso.", "Fazer tudo o mais rápido possível para sobrar tempo no fim do dia.", "Ocupar cada minuto do dia com alguma tarefa útil, sem deixar nenhum espaço vazio na agenda.", "Ter uma agenda e anotar todos os compromissos nela."],
    why: "Não é correr mais nem lotar o dia, e uma agenda sozinha não basta: é decidir com consciência como usar o tempo.",
    ref: "Aula 1 · O que é gestão do tempo",
  },
  {
    module: 0,
    question: "Lavar a louça precisa ser feito, mas não faz você avançar nos seus objetivos. Como a aula classifica essa atividade?",
    options: ["Necessária.", "Essencial.", "Importante.", "Dispensável."],
    why: "Necessária é o que precisa ser feito sem fazer você avançar. Dispensável é o que dá para cortar.",
    ref: "Aula 2 · Diagnóstico da rotina e objetivos",
  },
  {
    module: 0,
    question: "\"Vou ler mais livros\" é um objetivo vago. Qual versão deixa ele claro?",
    options: ["\"Vou ler 15 páginas por noite, de domingo a quinta, até o fim do mês.\"", "\"Vou ler muitos livros este ano, sem falta.\"", "\"Vou ler sempre que eu tiver um tempo livre durante a semana, sem falta.\"", "\"Vou virar uma pessoa que gosta de ler.\""],
    why: "Objetivo claro tem ação, medida e prazo: 15 páginas, cinco noites por semana, até o fim do mês.",
    ref: "Aula 2 · Diagnóstico da rotina e objetivos",
  },
  {
    module: 0,
    question: "No diagnóstico da rotina, qual destas perguntas a aula sugere fazer sobre o registro?",
    options: ["Em que momentos aparecem as interrupções?", "Quem tem a rotina mais cheia da família?", "Quantas horas a mais dá para trabalhar?", "Qual atividade dá para fazer mais rápido sem pausa?"],
    why: "As perguntas são: o que ocupa mais tempo, o que é essencial, quando aparecem interrupções e se existe tempo para descanso.",
    ref: "Aula 2 · Diagnóstico da rotina e objetivos",
  },

  // Módulo 2 · Planejar e priorizar
  {
    module: 1,
    question: "Rolar as redes sociais sem objetivo, em vez de estudar, fica em que quadrante da Matriz de Eisenhower?",
    options: ["Nem urgente nem importante: reduzir, adiar ou cortar.", "Urgente e importante: fazer agora.", "Importante, não urgente: agendar.", "Urgente, menos importante: passar para outra pessoa da casa resolver."],
    why: "Não tem prazo nem contribui para os objetivos. É o que dá para reduzir ou cortar.",
    ref: "Aula 3 · Prioridades e planejamento do dia",
  },
  {
    module: 1,
    question: "Qual é a diferença entre urgente e importante?",
    options: ["Urgente tem prazo perto; importante faz diferença no resultado.", "Urgente é sempre mais importante do que importante.", "Importante é o que tem prazo perto; urgente é o que faz diferença no resultado.", "São a mesma coisa com nomes diferentes."],
    why: "Uma tarefa pode ser urgente e importante, só uma das duas, ou nenhuma.",
    ref: "Aula 3 · Prioridades e planejamento do dia",
  },
  {
    module: 1,
    question: "Nos cinco passos \"do objetivo à agenda\", qual é a ordem certa?",
    options: ["Listar, esclarecer, estimar, agendar e revisar.", "Agendar, listar, estimar, revisar e esclarecer.", "Estimar, listar, agendar, esclarecer e revisar.", "Listar, agendar, esclarecer, revisar e estimar."],
    why: "Primeiro anotar tudo, depois definir o resultado, calcular o tempo, escolher o horário e acompanhar.",
    ref: "Aula 4 · Planejar a semana",
  },
  {
    module: 1,
    question: "Um trabalho em grupo é para sexta. Pela aula, como planejar a semana?",
    options: ["Dividir em etapas menores e espalhar pelos dias.", "Deixar tudo para quinta à noite, quando todos estão livres.", "Fazer tudo na segunda, sem pausas.", "Esperar o grupo decidir sozinho quando começar."],
    why: "Tarefas grandes viram etapas pequenas, distribuídas pela semana: dividir, pesquisar, escrever, juntar e revisar.",
    ref: "Aula 4 · Planejar a semana",
  },
  {
    module: 1,
    question: "Por que vale deixar folga na agenda?",
    options: ["Porque deslocamentos, pausas e imprevistos sempre aparecem.", "Porque a folga pode virar mais uma tarefa depois.", "Porque é proibido planejar mais de 8 horas por dia.", "Porque agenda cheia dá a impressão de que você está ocupado."],
    why: "Com o dia 100% ocupado, o primeiro imprevisto derruba o plano.",
    ref: "Aula 4 · Planejar a semana",
  },

  // Módulo 3 · Foco e prática
  {
    module: 2,
    question: "Segundo a aula, procrastinação se resolve só com força de vontade?",
    options: ["Não: deixar a tarefa clara e começar pequeno ajuda.", "Sim: basta se esforçar mais.", "Sim, desde que a pessoa durma bem e se cobre mais a cada dia.", "Não, procrastinação não tem solução."],
    why: "Reduzir as barreiras, esclarecer a próxima ação e começar com algo de 5 a 10 minutos facilita começar.",
    ref: "Aula 5 · Foco, distrações e procrastinação",
  },
  {
    module: 2,
    question: "O que diz o Princípio de Pareto (80/20), como a aula apresenta?",
    options: ["Uma parte menor das ações pode trazer a maior parte dos resultados.", "Devemos trabalhar 80% do dia e descansar 20%.", "Que 80% das tarefas do dia são urgentes e só 20% delas são importantes.", "É uma regra exata que vale para tudo."],
    why: "É uma referência para achar o que mais importa, não uma regra exata.",
    ref: "Aula 5 · Foco, distrações e procrastinação",
  },
  {
    module: 2,
    question: "Na rotina possível, o que se faz no fim do dia?",
    options: ["Ver o que foi concluído, reorganizar as pendências e preparar o dia seguinte.", "Escolher a prioridade do dia.", "Começar as tarefas mais pesadas.", "Responder todas as mensagens que foram se acumulando ao longo do dia de trabalho."],
    why: "De manhã escolhe-se a prioridade; durante o dia, blocos e pausas; no fim, revisão e preparação.",
    ref: "Aula 7 · Uma rotina possível e o plano de 7 dias",
  },
  {
    module: 2,
    question: "Duas prioridades do seu chefe bateram no mesmo horário. O que a aula diz para fazer?",
    options: ["Avisar o responsável sobre o conflito.", "Escolher sozinho a mais fácil.", "Fazer as duas pela metade.", "Esperar alguém perceber o problema."],
    why: "Entre as boas atitudes no trabalho está avisar o responsável quando duas prioridades baterem.",
    ref: "Aula 6 · Gestão do tempo nos estudos e no trabalho",
  },
  {
    module: 2,
    question: "Qual é o objetivo do plano de 7 dias?",
    options: ["Experimentar uma mudança pequena e acompanhar por uma semana.", "Mudar a rotina inteira de uma vez, para os hábitos novos pegarem mais rápido.", "Cumprir tudo perfeitamente para não recomeçar.", "Descobrir quantas tarefas cabem num dia."],
    why: "O plano é para experimentar, não buscar perfeição. No sétimo dia, avalia-se e planeja-se a próxima semana.",
    ref: "Aula 7 · Uma rotina possível e o plano de 7 dias",
  },
];
