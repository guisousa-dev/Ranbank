// Perguntas da prova final de Xadrez: 5 por módulo. A roleta sorteia 10, equilibrando os módulos.
// A primeira opção é sempre a certa; a ordem é embaralhada na hora de mostrar.

import type { QuizQuestion } from "../foundation-lessons";

export const PROVA_XADREZ: QuizQuestion[] = [
  // Módulo 1 · As regras do jogo
  {
    module: 0,
    question: "Em que casa começa a dama preta?",
    options: ["d8, uma casa escura: a dama fica na casa da sua cor.", "e8, ao lado do rei, numa casa clara.", "d1, de frente para a dama branca.", "e8, porque a dama preta começa no lugar onde o rei branco ficaria espelhado."],
    why: "A dama fica na casa da sua cor: a branca em d1 (clara) e a preta em d8 (escura). O rei fica ao lado, em e8.",
    ref: "Aula 1 · O tabuleiro e as peças",
  },
  {
    module: 0,
    question: "Seu peão branco está em e5 e o peão preto acaba de ir de f7 para f5. Para onde vai o seu peão se você capturar en passant?",
    options: ["Para f6, e o peão de f5 sai do tabuleiro.", "Para f5, ocupando a casa do peão preto que foi capturado.", "Para e6, andando reto.", "Para d6, na outra diagonal."],
    why: "No en passant você captura como se o peão adversário tivesse andado só uma casa: o seu vai para f6 e o de f5 é retirado.",
    ref: "Aula 3 · Regras especiais e o fim da partida",
  },
  {
    module: 0,
    question: "No roque grande das brancas, para quais casas vão o rei e a torre?",
    options: ["Rei para c1 e torre para d1.", "Rei para b1 e torre para c1.", "Rei para g1 e torre para f1.", "Rei para d1 e torre para c1."],
    why: "No roque grande o rei anda duas casas para o lado da dama (c1), e a torre de a1 pula para o outro lado dele (d1). Rei em g1 e torre em f1 é o roque pequeno.",
    ref: "Aula 3 · Regras especiais e o fim da partida",
  },
  {
    module: 0,
    question: "Um cavalo está em e4. Em qual destas casas ele NÃO consegue chegar num lance?",
    options: ["e6, duas casas à frente na mesma coluna.", "f6, duas para a frente e uma para o lado.", "c3, duas para o lado e uma para trás.", "g5, duas para o lado e uma para a frente."],
    why: "O cavalo anda em L. De e4 ele vai para d6, f6, g5, g3, f2, d2, c3 e c5. Andar reto não é L.",
    ref: "Aula 2 · Como cada peça se move",
  },
  {
    module: 0,
    question: "Qual é a única peça que anda de um jeito e captura de outro?",
    options: ["O peão: anda para a frente e captura na diagonal.", "O cavalo, que pula as peças quando captura.", "O rei, que só captura peças desprotegidas.", "O bispo, que captura também na horizontal."],
    why: "Todas as outras peças capturam do mesmo jeito que andam. O peão anda reto e captura na diagonal.",
    ref: "Aula 2 · Como cada peça se move",
  },

  // Módulo 2 · Abertura e meio-jogo
  {
    module: 1,
    question: "O que significa o lance Dh5+ numa partida anotada?",
    options: ["A dama foi para h5 e deu xeque.", "A dama capturou uma peça em h5.", "A dama foi para h5 e deu xeque-mate.", "Um peão da coluna h promoveu a dama."],
    why: "D é a dama, h5 é a casa de destino e o + quer dizer xeque. Captura teria x; mate teria #.",
    ref: "Aula 4 · A abertura: começar bem",
  },
  {
    module: 1,
    question: "Por que a casa f7 é o ponto fraco das pretas no começo da partida?",
    options: ["Porque só o rei a defende.", "Porque fica no centro do tabuleiro.", "Porque o peão de f7 não pode andar duas casas.", "Porque é a casa onde a dama preta começa."],
    why: "No começo, f7 é protegida apenas pelo rei. Por isso o mate do pastor e a Abertura Italiana miram essa casa.",
    ref: "Aula 4 · A abertura: começar bem",
  },
  {
    module: 1,
    question: "No xeque duplo, qual é a única forma de se defender?",
    options: ["Mover o rei.", "Capturar uma das peças que dão xeque.", "Colocar uma peça no caminho de um dos xeques.", "Fazer o roque, se ainda for possível."],
    why: "Com duas peças dando xeque, capturar ou bloquear resolve só um deles. O rei precisa se mover.",
    ref: "Aula 5 · Táticas: garfo, cravada, espeto e xeque descoberto",
  },
  {
    module: 1,
    question: "Dois peões brancos estão na coluna c, um atrás do outro. Como se chamam?",
    options: ["Peões dobrados.", "Peões isolados.", "Peões atrasados.", "Peões passados."],
    why: "Dobrados são dois peões da mesma cor na mesma coluna. Isolado é o que não tem peões vizinhos; atrasado é o que ficou para trás dos vizinhos.",
    ref: "Aula 6 · O meio-jogo: plano e ataque ao rei",
  },
  {
    module: 1,
    question: "Onde a aula diz que as torres ficam mais ativas no meio-jogo?",
    options: ["Em colunas abertas ou semiabertas.", "Na frente dos próprios peões, no centro.", "Nos cantos, protegendo o rei.", "Na segunda fileira, atrás dos peões."],
    why: "A torre anda em linha reta. Numa coluna sem peões ela alcança o campo adversário.",
    ref: "Aula 6 · O meio-jogo: plano e ataque ao rei",
  },

  // Módulo 3 · Finais
  {
    module: 2,
    question: "Brancas: rei em a6 e dama em c7. Pretas: rei em a8. Vez das brancas. O que acontece com Rb6?",
    options: ["Afogamento: o rei preto fica sem lances e não está em xeque.", "Xeque-mate, porque o rei preto não tem casas.", "As pretas ganham a dama em c7.", "As pretas passam a vez e as brancas dão o mate no lance seguinte com a dama."],
    why: "Rb6 não dá xeque, e a7, b7 e b8 estão todas atacadas. Sem lance legal e sem xeque é empate. O mate seria Db7#.",
    ref: "Aula 8 · Finais de peão e empates",
  },
  {
    module: 2,
    question: "No mate com dama e rei, a que distância a aula sugere manter a dama do rei adversário enquanto ele é encurralado?",
    options: ["A um lance de cavalo dele.", "Encostada nele, para não deixar casas.", "Na mesma coluna, dando xeque a cada lance.", "Do outro lado do tabuleiro, sem se aproximar."],
    why: "A um lance de cavalo, a dama fecha as casas do rei sem ficar ao alcance dele, e a área vai diminuindo.",
    ref: "Aula 7 · Mates básicos e como evoluir",
  },
  {
    module: 2,
    question: "O rei rocou e ficou preso atrás dos próprios peões. Uma torre adversária dá xeque na última fileira e é mate. Como se chama esse mate?",
    options: ["Mate do corredor.", "Mate da escadinha.", "Mate do pastor.", "Xeque perpétuo."],
    why: "Sem casa de fuga, o rei fica preso no \"corredor\" da última fileira. Abrir uma janela (como h3) evita esse mate.",
    ref: "Aula 7 · Mates básicos e como evoluir",
  },
  {
    module: 2,
    question: "Peão branco em f5, rei preto em b5, rei branco longe. É a vez das brancas. O rei preto alcança o peão?",
    options: ["Não: como as brancas jogam, o quadrado começa em f6, e o rei não entra nele.", "Sim: contando a partir de f5, o rei preto já está dentro do quadrado do peão.", "Sim, porque o peão ainda precisa de três lances.", "Não dá para saber sem saber onde está o rei branco."],
    why: "Com a vez das brancas, o peão anda antes: o quadrado vai de f6 a f8 e até a coluna d. Do b5, o rei preto não entra nele.",
    ref: "Aula 8 · Finais de peão e empates",
  },
  {
    module: 2,
    question: "A mesma posição aparece pela terceira vez na partida. O que a regra permite?",
    options: ["O jogador pode pedir o empate por tripla repetição.", "Quem repetiu a posição perde a partida.", "A partida volta para a posição inicial.", "Nada: só a regra dos 50 lances leva ao empate."],
    why: "Na tripla repetição, o jogador pode reclamar o empate. É assim que o xeque perpétuo acaba empatando.",
    ref: "Aula 8 · Finais de peão e empates",
  },
];
