// Perguntas da prova final de Jogos: 5 por módulo. A roleta sorteia 10, equilibrando os módulos.
// A primeira opção é sempre a certa; a ordem é embaralhada na hora de mostrar.

import type { QuizQuestion } from "../foundation-lessons";

export const PROVA_JOGOS: QuizQuestion[] = [
  // Módulo 1 · Introdução aos games
  {
    module: 0,
    question: "Quais destes a aula dá como exemplo de jogos offline?",
    options: ["Mad Max e God of War.", "Fortnite e Valorant.", "Free Fire e Call of Duty.", "GTA V e Fifa."],
    why: "GTA V e Fifa dão para jogar dos dois jeitos; Fortnite, Valorant, Free Fire e Call of Duty são online.",
    ref: "Aula 1 · Online, offline e onde jogar",
  },
  {
    module: 0,
    question: "Pela aula, o que é preciso para jogar com pessoas reais de outro estado ou país?",
    options: ["Internet: é um jogo online.", "Um console Xbox ou PlayStation.", "Um jogo do tipo estratégia.", "Um controle ligado ao computador."],
    why: "No jogo online você precisa de internet para jogar com pessoas reais de diferentes lugares.",
    ref: "Aula 1 · Online, offline e onde jogar",
  },
  {
    module: 0,
    question: "Clash of Clans aparece em qual tipo de jogo na aula?",
    options: ["Estratégia.", "Puzzle.", "Tiro.", "Luta."],
    why: "Os exemplos de estratégia são League of Legends, Minecraft e Clash of Clans.",
    ref: "Aula 1 · Online, offline e onde jogar",
  },
  {
    module: 0,
    question: "Qual destes a aula usa como exemplo de puzzle?",
    options: ["Tetris.", "Resident Evil.", "Counter-Strike.", "League of Legends."],
    why: "Os exemplos de puzzle são o quebra-cabeça e o Tetris.",
    ref: "Aula 1 · Online, offline e onde jogar",
  },
  {
    module: 0,
    question: "Pela aula, o que quem cria um jogo de navegador pode fazer com ele?",
    options: ["Vender o jogo para o site ou colocar o jogo nele.", "Só deixar o jogo disponível para jogar offline.", "Mandar o jogo para a PlayStation aprovar antes.", "Deixar o jogo funcionando só com o controle ligado."],
    why: "Nos jogos de sites, você pode vender o jogo para eles ou colocar o jogo no site.",
    ref: "Aula 1 · Online, offline e onde jogar",
  },

  // Módulo 2 · Design de jogos
  {
    module: 1,
    question: "Pela aula, o que as regras de um jogo dizem?",
    options: ["O que pode e o que não pode fazer.", "Onde o jogo acontece.", "Quem aparece no jogo.", "O que precisa conseguir para vencer."],
    why: "Onde acontece é o cenário, quem aparece são os personagens e o que precisa conseguir é o objetivo.",
    ref: "Aula 2 · Os elementos de um jogo",
  },
  {
    module: 1,
    question: "\"Vencer uma partida\" é exemplo de qual elemento?",
    options: ["Objetivo.", "Regra.", "Cenário.", "Personagem."],
    why: "Vencer uma partida, completar uma missão ou passar de fase são os exemplos de objetivo.",
    ref: "Aula 2 · Os elementos de um jogo",
  },
  {
    module: 1,
    question: "A história de um jogo se passa em outro planeta. Esse planeta é qual elemento?",
    options: ["Cenário.", "Objetivo.", "Regra.", "Personagem."],
    why: "Cenários são os lugares onde o jogo acontece: cidades, florestas ou até outros planetas.",
    ref: "Aula 2 · Os elementos de um jogo",
  },
  {
    module: 1,
    question: "Um chefão ataca sozinho, sem ninguém no controle. Pela aula, o que ele é?",
    options: ["Um personagem controlado pelo próprio jogo.", "Um cenário da última fase, onde a luta acontece.", "Uma regra do que o jogador não pode fazer.", "O objetivo final do jogo."],
    why: "Personagens podem ser controlados pelo jogador ou pelo próprio jogo.",
    ref: "Aula 2 · Os elementos de um jogo",
  },
  {
    module: 1,
    question: "Seja offline, online ou os dois, o que a aula diz que todo jogo precisa ter?",
    options: ["Começo, meio e fim.", "Um trailer com o modo online.", "Personagens controlados por pessoas reais.", "Uma atualização a cada mês."],
    why: "O estilo pode variar, mas um jogo precisa ter começo, meio e fim.",
    ref: "Aula 2 · Os elementos de um jogo",
  },

  // Módulo 3 · Desenvolvimento de jogos
  {
    module: 2,
    question: "Para que servem motores de jogos como Unreal Engine e Unity?",
    options: ["Trazem as ferramentas para criar, programar e animar jogos.", "Vendem o jogo prontinho nas lojas do Xbox e da PlayStation.", "Testam o jogo antes do lançamento, no lugar das pessoas.", "Fazem a capa e o trailer do jogo sozinhos, sem a equipe."],
    why: "São plataformas de software completas, com as ferramentas necessárias para fazer o jogo.",
    ref: "Aula 3 · Como um jogo é criado",
  },
  {
    module: 2,
    question: "Quem cria os códigos e faz o jogo funcionar?",
    options: ["Os programadores.", "Os designers.", "Os testadores.", "Quem faz o trailer."],
    why: "Designers criam ideias, personagens, fases e cenários; testadores procuram erros antes do lançamento.",
    ref: "Aula 3 · Como um jogo é criado",
  },
  {
    module: 2,
    question: "Pela aula, quando os testadores entram em ação?",
    options: ["Antes do lançamento, jogando para achar erros.", "Depois do lançamento, fazendo as atualizações.", "No planejamento, pensando na história.", "Na criação visual, desenhando os cenários."],
    why: "Testadores jogam antes do lançamento para encontrar erros e problemas.",
    ref: "Aula 3 · Como um jogo é criado",
  },
  {
    module: 2,
    question: "Por que, segundo a aula, um jogo precisa de capa?",
    options: ["Sem a capa, as pessoas não saberiam qual é o jogo.", "A capa mostra o jogo em movimento, como o trailer.", "Sem capa, o jogo não pode receber atualizações.", "A capa é exigida para o jogo rodar no computador."],
    why: "Sem a capa, não saberiam qual é o jogo; sem o trailer, não saberiam como ele é.",
    ref: "Aula 3 · Como um jogo é criado",
  },
  {
    module: 2,
    question: "Como eram as capas dos jogos antigamente, pela aula?",
    options: ["Numa caixa de plástico de disco, com fotos e informações.", "Só em fotos na internet, do mesmo jeito que é hoje.", "Desenhadas à mão pelos testadores, antes do lançamento do jogo.", "Dentro do trailer, mostradas antes da partida começar."],
    why: "Os jogos eram em discos, numa caixa de plástico. Hoje temos só as fotos pela internet.",
    ref: "Aula 3 · Como um jogo é criado",
  },
];
