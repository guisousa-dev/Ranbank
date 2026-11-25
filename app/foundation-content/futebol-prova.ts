// Perguntas da prova final de Futebol: 5 por módulo. A roleta sorteia 10, equilibrando os módulos.
// A primeira opção é sempre a certa; a ordem é embaralhada na hora de mostrar.

import type { QuizQuestion } from "../foundation-lessons";

export const PROVA_FUTEBOL: QuizQuestion[] = [
  // Módulo 1 · Futebol de campo
  {
    module: 0,
    question: "Quantos jogadores normalmente começam uma partida de futebol de campo por equipe?",
    options: ["11, contando o goleiro.", "11, sem contar o goleiro.", "10, contando o goleiro.", "7, contando o goleiro."],
    why: "Até 11 por equipe, contando o goleiro. Com menos de 7, a partida não começa nem continua.",
    ref: "Aula 1 · História e regras do futebol",
  },
  {
    module: 0,
    question: "Quem procura finalizar as jogadas e marcar gols?",
    options: ["O centroavante.", "O volante de contenção.", "O lateral-direito.", "O zagueiro central."],
    why: "O volante protege a defesa, o lateral atua pelos lados e o zagueiro protege o centro da defesa.",
    ref: "Aula 2 · Posições e funções",
  },
  {
    module: 0,
    question: "Qual destas é uma forma de finalização citada na aula?",
    options: ["Voleio.", "Passe de primeira.", "Condução.", "Passe rasteiro."],
    why: "Finaliza-se com a parte interna, o peito ou a parte externa do pé, de cabeça ou de voleio.",
    ref: "Aula 3 · Fundamentos técnicos",
  },
  {
    module: 0,
    question: "Como a aula descreve o sistema 3-5-2?",
    options: ["Três defensores, cinco no meio-campo e dois atacantes.", "Três atacantes, cinco no meio-campo e dois defensores.", "Três defensores, dois no meio-campo e cinco atacantes.", "Três zagueiros, dois volantes e cinco meias ofensivos."],
    why: "Os números contam de trás para a frente: defensores, meio-campistas e atacantes.",
    ref: "Aula 4 · Sistemas táticos e princípios de jogo",
  },
  {
    module: 0,
    question: "Pela aula, para que serve a potência?",
    options: ["Ações explosivas, como saltos e arrancadas.", "Sustentar os esforços durante a partida.", "Executar movimentos com amplitude adequada.", "Facilitar as mudanças rápidas de direção na partida."],
    why: "As outras são a resistência, a mobilidade e a agilidade.",
    ref: "Aula 5 · Preparação física e treino",
  },

  // Módulo 2 · Futsal
  {
    module: 1,
    question: "Quantos jogadores atuam por equipe no futsal?",
    options: ["Cinco, contando o goleiro.", "Seis, contando o goleiro.", "Cinco, sem contar o goleiro.", "Sete, contando o goleiro."],
    why: "Cada equipe normalmente usa cinco jogadores, incluindo o goleiro.",
    ref: "Aula 6 · Futsal: regras, posições e fundamentos",
  },
  {
    module: 1,
    question: "Qual destas é uma característica do futsal, pela aula?",
    options: ["Não existe impedimento.", "O lateral é cobrado com as mãos.", "As substituições são limitadas a três.", "São três períodos de 12 minutos."],
    why: "No futsal, o lateral é cobrado com os pés, as substituições são ilimitadas e são dois tempos de 20 minutos.",
    ref: "Aula 6 · Futsal: regras, posições e fundamentos",
  },
  {
    module: 1,
    question: "Quem atua pelos lados da quadra, participando do ataque e da defesa?",
    options: ["Os alas.", "O fixo.", "O pivô.", "O goleiro."],
    why: "O fixo atua mais na defesa e o pivô, perto da defesa adversária.",
    ref: "Aula 6 · Futsal: regras, posições e fundamentos",
  },
  {
    module: 1,
    question: "Qual é uma vantagem do goleiro-linha?",
    options: ["Superioridade numérica no ataque.", "Menor exposição da meta.", "Menos risco de gol depois de erros.", "Menos necessidade de organização."],
    why: "As outras são o contrário das desvantagens: meta exposta, risco após erros e necessidade de boa organização.",
    ref: "Aula 7 · Futsal: sistemas e estratégias",
  },
  {
    module: 1,
    question: "O que é a marcação mista?",
    options: ["Combina a marcação individual e a por zona.", "Cada jogador acompanha um adversário de referência.", "Cada jogador protege uma região da quadra.", "Dois jogadores marcam e dois ficam no ataque."],
    why: "Acompanhar um adversário é a individual; proteger uma região é a por zona.",
    ref: "Aula 7 · Futsal: sistemas e estratégias",
  },

  // Módulo 3 · Futebol de areia
  {
    module: 2,
    question: "Quantos jogadores atuam por equipe no beach soccer?",
    options: ["Cinco, contando o goleiro.", "Sete, contando o goleiro.", "Onze, contando o goleiro.", "Quatro de linha e nenhum goleiro."],
    why: "Como no futsal, são cinco por equipe, incluindo o goleiro.",
    ref: "Aula 8 · Futebol de areia: regras e posições",
  },
  {
    module: 2,
    question: "Por que o equilíbrio é tão importante no beach soccer?",
    options: ["A areia é uma superfície instável.", "A bola usada na areia é bem mais leve.", "O campo de areia é sempre inclinado.", "Não existe goleiro fixo na areia."],
    why: "A modalidade exige movimentos numa superfície instável.",
    ref: "Aula 8 · Futebol de areia: regras e posições",
  },
  {
    module: 2,
    question: "Quem defende a meta e inicia jogadas com reposições de bola?",
    options: ["O goleiro.", "O defensor.", "O ala.", "O atacante."],
    why: "O defensor ajuda a proteger a meta e pode iniciar o ataque, mas a reposição é do goleiro.",
    ref: "Aula 8 · Futebol de areia: regras e posições",
  },
  {
    module: 2,
    question: "O que é a bicicleta?",
    options: ["Chute no ar, corpo inclinado para trás e pernas como se pedalassem.", "Chute antes de a bola tocar o chão, sempre de frente para o gol e sem girar.", "Finalização acrobática em que o jogador gira o corpo de lado.", "Passe pelo alto, por cima da areia, para um companheiro."],
    why: "Chute antes de a bola tocar o chão é o voleio; girar o corpo é a meia-bicicleta; passe por cima da areia é o passe aéreo.",
    ref: "Aula 9 · Futebol de areia: fundamentos e jogo",
  },
  {
    module: 2,
    question: "No exercício de voleio, como os jogadores praticam?",
    options: ["Com supervisão, a partir de lançamentos controlados.", "Sozinhos, chutando bolas paradas na areia fofa.", "Em jogo reduzido, sem nenhum lançamento de bola.", "Com passe rasteiro e cabeceio para afastar."],
    why: "O objetivo é melhorar o tempo de bola e a técnica de chute.",
    ref: "Aula 9 · Futebol de areia: fundamentos e jogo",
  },
];
