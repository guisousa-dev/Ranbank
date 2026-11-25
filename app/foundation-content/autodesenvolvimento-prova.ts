// Perguntas da prova final de Autodesenvolvimento: 5 por módulo. A roleta sorteia 10, equilibrando os módulos.
// A primeira opção é sempre a certa; a ordem é embaralhada na hora de mostrar.

import type { QuizQuestion } from "../foundation-lessons";

export const PROVA_AUTODESENVOLVIMENTO: QuizQuestion[] = [
  // Módulo 1 · Autoconhecimento e mentalidade
  {
    module: 0,
    question: "Qual frase a aula dá como exemplo de mentalidade de crescimento?",
    options: ["\"Posso aprender a fazer isso.\"", "\"Não sou capaz disso.\"", "\"Só faço se der certo de primeira.\"", "\"Isso não foi feito para mim.\""],
    why: "\"Não sou capaz disso\" é o exemplo da mentalidade fixa; \"posso aprender a fazer isso\", o da de crescimento.",
    ref: "Aula 1 · Autoconhecimento e mentalidade",
  },
  {
    module: 0,
    question: "Pela tabela da aula, o que a mentalidade fixa costuma fazer quando fica difícil?",
    options: ["Desiste.", "Procura outro jeito de avançar.", "Vê a dificuldade como chance de aprender.", "Usa o erro para ver o que melhorar."],
    why: "As outras três opções estão na coluna da mentalidade de crescimento.",
    ref: "Aula 1 · Autoconhecimento e mentalidade",
  },
  {
    module: 0,
    question: "Qual destes é um dos benefícios do autoconhecimento, segundo a aula?",
    options: ["Criar metas que combinam com você.", "Nunca mais errar nas decisões.", "Ter todas as respostas sobre si.", "Mudar todos os hábitos de uma vez."],
    why: "Autoconhecimento ajuda a ver pontos fortes, entender emoções, perceber o que atrapalha, decidir melhor e criar metas que combinam com você.",
    ref: "Aula 1 · Autoconhecimento e mentalidade",
  },
  {
    module: 0,
    question: "Segundo a aula, o que a gente pensa influencia o quê?",
    options: ["O que sente e o que faz.", "Só o que sente, nunca o que faz.", "Só o que os outros pensam de nós.", "Nada: o que importa é a força de vontade."],
    why: "Quem acha que não vai conseguir desanima e adia. Por isso pensamento e atitude precisam andar juntos.",
    ref: "Aula 1 · Autoconhecimento e mentalidade",
  },
  {
    module: 0,
    question: "Na atividade \"Conhecendo a si mesmo\", qual é a última pergunta?",
    options: ["Que pequena atitude posso começar esta semana?", "Quem é a pessoa mais disciplinada que eu conheço?", "Quantas horas por dia eu passo no celular?", "Qual meta eu quero cumprir daqui a dez anos?"],
    why: "A atividade termina num primeiro passo possível: uma pequena atitude para a semana.",
    ref: "Aula 1 · Autoconhecimento e mentalidade",
  },

  // Módulo 2 · Hábitos e procrastinação
  {
    module: 1,
    question: "No ciclo do hábito, o alívio na hora e a diversão de abrir as redes sociais são o quê?",
    options: ["A recompensa.", "O gatilho.", "A rotina.", "O ambiente."],
    why: "Gatilho é o sinal, rotina é a ação e recompensa é o que o cérebro ganha.",
    ref: "Aula 2 · Como os hábitos funcionam",
  },
  {
    module: 1,
    question: "Deixar à vista o que ajuda e longe o que atrapalha é qual princípio de bons hábitos?",
    options: ["Organizar o ambiente.", "Facilitar o começo.", "Comemorar o progresso.", "Começar pequeno."],
    why: "Os cinco princípios são começar pequeno, facilitar o começo, juntar com algo que já faz, organizar o ambiente e comemorar o progresso.",
    ref: "Aula 2 · Como os hábitos funcionam",
  },
  {
    module: 1,
    question: "Quais são os cinco tipos de gatilho da aula?",
    options: ["Horário, lugar, emoção, pessoas e o que veio antes.", "Manhã, tarde, noite, fim de semana e feriado prolongado.", "Fome, sono, sede, frio e calor.", "Celular, TV, redes sociais, jogos e música alta no fone."],
    why: "Para descobrir o gatilho, pergunte onde estava, que horas eram, como se sentia, quem estava junto e o que tinha acabado de fazer.",
    ref: "Aula 2 · Como os hábitos funcionam",
  },
  {
    module: 1,
    question: "\"Ler o capítulo 1\" em vez de \"estudar para a prova\" é qual estratégia contra a procrastinação?",
    options: ["Dividir em partes.", "Regra dos 2 minutos.", "Tirar as distrações.", "Recompensa depois."],
    why: "Passos pequenos diminuem a sensação de peso da tarefa.",
    ref: "Aula 3 · Procrastinação e plano de mudança",
  },
  {
    module: 1,
    question: "Por quanto tempo a aula sugere observar a rotina para mapear os hábitos?",
    options: ["De 3 a 7 dias.", "Um mês inteiro.", "Um dia só.", "Um ano."],
    why: "De 3 a 7 dias já mostram o que ajuda, o que atrapalha e o que pode ser ajustado.",
    ref: "Aula 3 · Procrastinação e plano de mudança",
  },

  // Módulo 3 · Inteligência emocional e autocompaixão
  {
    module: 2,
    question: "Segundo a aula, o que a tristeza indica?",
    options: ["Que algo importante foi perdido.", "Que existe um possível perigo.", "Que um limite foi ultrapassado.", "Que é hora de desistir."],
    why: "Emoções são sinais: o medo avisa de perigo, a raiva de um limite ultrapassado e a tristeza de uma perda.",
    ref: "Aula 4 · Entender e nomear as emoções",
  },
  {
    module: 2,
    question: "Qual das cinco habilidades da inteligência emocional é \"perceber o que estou sentindo\"?",
    options: ["Autoconsciência.", "Autorregulação.", "Empatia.", "Habilidades sociais."],
    why: "Autoconsciência e autorregulação são as duas que o módulo trabalha, por serem a base das outras.",
    ref: "Aula 4 · Entender e nomear as emoções",
  },
  {
    module: 2,
    question: "Por que vale trocar o \"estou mal\" por uma palavra mais precisa?",
    options: ["Isso diminui a intensidade da emoção.", "Assim a emoção some e não volta mais.", "A palavra certa deixa a emoção mais forte.", "Assim não é mais preciso sentir nada."],
    why: "Dizer \"estou nervoso com a apresentação\" alivia mais do que um \"estou mal\" vago.",
    ref: "Aula 4 · Entender e nomear as emoções",
  },
  {
    module: 2,
    question: "Segundo a aula, o que a cobrança pesada consigo mesmo costuma gerar?",
    options: ["Medo de errar.", "Mais disciplina.", "Segurança para recomeçar.", "Acomodação."],
    why: "É a autocompaixão que dá segurança para recomeçar. A cobrança dura aumenta o medo de errar.",
    ref: "Aula 5 · Autocompaixão e resiliência",
  },
  {
    module: 2,
    question: "No passo \"Ajuste\", para voltar depois de um tropeço, se a meta era 30 minutos, a aula sugere tentar quanto?",
    options: ["5 minutos.", "60 minutos.", "Os mesmos 30.", "Nenhum tempo."],
    why: "Ajustar é diminuir o passo para conseguir retomar: acolher, entender, ajustar e retomar.",
    ref: "Aula 5 · Autocompaixão e resiliência",
  },
];
