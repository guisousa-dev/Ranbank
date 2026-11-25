// Curso: Xadrez. 3 módulos (regras, abertura e meio-jogo, finais), 8 aulas, um quiz por módulo e a prova final.
// Segue o padrão de app/foundation-lessons.ts. As casas usam a notação algébrica (a1 a h8) e as letras
// das peças em português (R, D, T, B, C).

import type { CourseContent } from "../foundation-lessons";
import { PROVA_XADREZ } from "./xadrez-prova";

export const XADREZ: CourseContent = {
  closing: "Agora você conhece as regras, a abertura, as táticas do meio-jogo e os finais básicos. O xadrez se aprende jogando: jogue muito, perca sem medo e analise as suas partidas. Cada derrota ensina alguma coisa.",
  quiz: PROVA_XADREZ,
  stickers: [
    { id: "quadrado-certo", name: "Olho de rei", how: "Acertou 5 ou mais no treino da regra do quadrado." },
    { id: "mestre-do-modulo-1", name: "Peças no lugar", how: "Acertou 8 ou mais no quiz do Módulo 1." },
    { id: "mestre-do-modulo-2", name: "Golpe certeiro", how: "Acertou 8 ou mais no quiz do Módulo 2." },
    { id: "mestre-do-modulo-3", name: "Final perfeito", how: "Acertou 8 ou mais no quiz do Módulo 3." },
  ],
  modules: [
    {
      title: "As regras do jogo",
      lessons: [
        {
          id: "tabuleiro-e-pecas",
          title: "O tabuleiro e as peças",
          summary: "Como montar o tabuleiro, o nome das casas e quanto vale cada peça.",
          goals: ["Montar o tabuleiro e as peças na posição certa", "Ler o nome das casas (a1 a h8)", "Conhecer o valor de cada peça"],
          sections: [
            {
              title: "O tabuleiro",
              body: [
                "O tabuleiro tem 64 casas, 8 por 8, alternando claras e escuras. Ele precisa ficar com uma casa clara no canto direito de cada jogador.",
                "As colunas (de cima para baixo) têm letras de a até h, da esquerda para a direita das brancas. As fileiras (de lado a lado) têm números de 1 a 8, começando do lado das brancas. Cada casa é o encontro de uma coluna e uma fileira: e4, d5, h8.",
                { box: "pratica", text: "Para lembrar a posição do tabuleiro: \"clara à direita\". Se a casa do seu canto direito for escura, gire o tabuleiro." },
              ],
            },
            {
              title: "A posição inicial",
              body: [
                "Cada jogador começa com 16 peças: 1 rei, 1 dama, 2 torres, 2 bispos, 2 cavalos e 8 peões.",
                { list: [
                  "Na primeira fileira (as brancas na 1, as pretas na 8), de fora para dentro: torre, cavalo e bispo dos dois lados.",
                  "A dama fica na casa da sua cor: dama branca na casa clara (d1), dama preta na casa escura (d8).",
                  "O rei fica na casa que sobrou, ao lado da dama (e1 e e8).",
                  "Os peões ocupam toda a segunda fileira (brancos na 2, pretos na 7).",
                ] },
                { box: "chave", text: "As brancas sempre fazem o primeiro lance. Depois os jogadores alternam, um lance por vez." },
              ],
            },
            {
              title: "Quanto vale cada peça",
              body: [
                "Os valores ajudam a decidir se uma troca é boa. O peão é a unidade de medida. Não são regras, são uma referência.",
                { table: { caption: "Valor aproximado das peças", head: ["Peça", "Valor"], rows: [["Peão", "1"], ["Cavalo", "3"], ["Bispo", "3"], ["Torre", "5"], ["Dama", "9"], ["Rei", "Não tem valor: se ele cair, a partida acaba"]] } },
                { box: "exemplo", text: "Trocar o seu cavalo (3) pela torre do adversário (5) costuma ser um bom negócio: você ganha 2 pontos de material." },
              ],
            },
          ],
          activity: {
            title: "Monte e confira",
            steps: [
              "Monte o tabuleiro com as peças (pode ser um tabuleiro de verdade ou um aplicativo).",
              "Confira: a casa do canto direito é clara? A dama branca está numa casa clara?",
              "Diga em que casa está cada um destes: rei branco, dama preta, cavalo branco do lado do rei.",
            ],
            answer: "Rei branco em e1, dama preta em d8, e o cavalo branco do lado do rei em g1. Se o tabuleiro estiver com a casa clara à direita e as damas nas casas da própria cor, a montagem está certa.",
          },
          recap: ["Tabuleiro com casa clara no canto direito.", "Dama na casa da sua cor; o rei ao lado dela.", "Peão vale 1, cavalo e bispo 3, torre 5 e dama 9."],
        },
        {
          id: "como-as-pecas-andam",
          title: "Como cada peça se move",
          summary: "Torre, bispo, dama, rei, cavalo e peão, e como cada um captura.",
          goals: ["Mover cada peça corretamente", "Entender como cada peça captura", "Conhecer o jeito especial do peão"],
          sections: [
            {
              title: "As peças de longa distância",
              body: [
                { table: { caption: "Torre, bispo e dama", head: ["Peça", "Como anda"], rows: [
                  ["Torre", "Em linha reta, na horizontal ou na vertical, quantas casas quiser"],
                  ["Bispo", "Na diagonal, quantas casas quiser. Fica sempre na mesma cor de casa"],
                  ["Dama", "Como a torre e o bispo juntos: reta ou diagonal, quantas casas quiser"],
                ] } },
                "Nenhuma delas pode pular outras peças. Para capturar, a peça para na casa ocupada por uma peça adversária e a tira do tabuleiro. A captura nunca é obrigatória.",
              ],
            },
            {
              title: "Rei e cavalo",
              body: [
                "O rei anda uma casa para qualquer lado. Ele nunca pode ir para uma casa atacada por uma peça adversária.",
                "O cavalo anda em L: duas casas numa direção e uma para o lado (ou uma e depois duas). É a única peça que pode pular outras. Ele sempre muda de cor de casa a cada lance.",
                { box: "exemplo", text: "Um cavalo em e4 pode ir para d6, f6, g5, g3, f2, d2, c3 e c5: até oito casas. No canto, como em a1, ele tem só duas." },
                { box: "chave", text: "Cavalo no canto do tabuleiro tem poucas casas. Por isso se diz que cavalo na borda é cavalo fraco." },
              ],
            },
            {
              title: "O peão",
              body: [
                { list: [
                  "Anda só para a frente, uma casa por vez. Nunca volta.",
                  "No primeiro lance de cada peão, ele pode andar uma ou duas casas.",
                  "Captura na diagonal, uma casa para a frente. Ele não captura andando reto.",
                  "Se houver uma peça na frente dele, ele fica bloqueado.",
                ] },
                { box: "atencao", text: "O peão é a única peça que anda de um jeito e captura de outro. É a regra que os iniciantes mais esquecem." },
              ],
            },
          ],
          activity: {
            title: "Para onde vai?",
            steps: [
              "Um bispo branco está em c1, com o caminho livre. Ele consegue chegar em h6? E em c4, algum dia?",
              "Uma torre está em a1. Cite três casas para onde ela pode ir com o caminho livre.",
              "Um peão branco em e2 nunca se moveu. Para onde ele pode ir? E se houver uma peça preta em d3?",
            ],
            answer: "1) Em h6 sim, pela diagonal c1-d2-e3-f4-g5-h6. Em c4 nunca: c1 é uma casa escura e c4 é clara, e o bispo fica sempre na mesma cor. 2) Por exemplo a5, a8, d1 ou h1. 3) Para e3 ou e4. Com uma peça preta em d3, ele também pode capturá-la na diagonal.",
          },
          recap: ["Torre anda reto, bispo na diagonal, dama dos dois jeitos.", "Rei anda uma casa; cavalo anda em L e pula peças.", "Peão anda para a frente e captura na diagonal."],
        },
        {
          id: "regras-especiais",
          title: "Regras especiais e o fim da partida",
          summary: "Roque, en passant, promoção, xeque, xeque-mate e empates.",
          goals: ["Fazer o roque, o en passant e a promoção", "Diferenciar xeque, xeque-mate e afogamento", "Conhecer os jeitos de empatar"],
          sections: [
            {
              title: "Roque",
              body: [
                "É o único lance em que duas peças se movem: o rei anda duas casas em direção a uma torre, e a torre pula para o outro lado do rei. Ele protege o rei e ativa a torre.",
                { table: { caption: "Os dois roques das brancas", head: ["Roque", "Rei vai para", "Torre vai para"], rows: [["Pequeno (lado do rei)", "g1", "f1"], ["Grande (lado da dama)", "c1", "d1"]] } },
                { box: "atencao", text: "Só pode rocar se: o rei e aquela torre nunca se moveram; não há peças entre eles; o rei não está em xeque; e o rei não passa nem para numa casa atacada." },
              ],
            },
            {
              title: "Promoção e en passant",
              body: [
                "Promoção: quando um peão chega à última fileira (a 8 para as brancas, a 1 para as pretas), ele vira dama, torre, bispo ou cavalo, à escolha do jogador. Quase sempre se escolhe a dama.",
                "En passant (\"de passagem\"): se um peão adversário anda duas casas no primeiro lance e para ao lado do seu peão, você pode capturá-lo como se ele tivesse andado só uma. Só vale no lance imediatamente seguinte.",
                { box: "exemplo", text: "Seu peão branco está em e5. O peão preto sai de d7 para d5, ao lado do seu. No lance seguinte, você pode jogar o peão de e5 para d6 e tirar o peão de d5." },
              ],
            },
            {
              title: "Xeque, xeque-mate e afogamento",
              body: [
                { table: { caption: "Como a partida termina", head: ["Situação", "O que é", "Resultado"], rows: [
                  ["Xeque", "O rei está atacado. É obrigatório sair do xeque no próximo lance", "A partida continua"],
                  ["Xeque-mate", "O rei está atacado e não há nenhum lance que o salve", "Vitória de quem deu o mate"],
                  ["Afogamento", "O jogador da vez não está em xeque, mas não tem nenhum lance legal", "Empate"],
                ] } },
                "Para sair do xeque, há três jeitos: mover o rei, capturar a peça que ataca ou colocar uma peça no caminho.",
                "Outros empates: acordo entre os jogadores, a mesma posição se repetindo três vezes, xeques sem fim (xeque perpétuo), 50 lances seguidos sem captura nem movimento de peão, ou peças insuficientes para dar mate (por exemplo, só os dois reis). A Aula 8 volta a esse assunto.",
              ],
            },
          ],
          activity: {
            title: "Pode ou não pode?",
            steps: [
              "Seu rei já andou uma casa e voltou para e1. Você pode rocar?",
              "Seu peão chegou à oitava fileira. Pode virar um segundo rei?",
              "O adversário não está em xeque, mas não tem nenhum lance possível. Quem ganha?",
            ],
            answer: "1) Não: o rei já se moveu, mesmo tendo voltado. 2) Não: o peão vira dama, torre, bispo ou cavalo, nunca rei. 3) Ninguém: é afogamento, e o resultado é empate. Por isso, com grande vantagem, cuidado para não afogar o adversário.",
          },
          recap: ["Roque só se rei e torre nunca se moveram e o caminho está livre e seguro.", "Peão na última fileira vira outra peça, quase sempre dama.", "Xeque-mate vence; afogamento empata."],
        },
      ],
      quiz: {
        sticker: { id: "mestre-do-modulo-1", min: 8 },
        questions: [
          { question: "O bispo branco que começa em f1 pode, em algum momento da partida, chegar à casa c5?", options: ["Sim, desde que o caminho pela diagonal esteja livre.", "Não: f1 é uma casa clara e c5 é escura, e o bispo nunca muda de cor.", "Sim, mas só depois de capturar alguma peça no caminho.", "Só se antes ele passar pela casa c4, que fica logo atrás de c5 na mesma coluna."], answer: 1, why: "O bispo anda só na diagonal e fica sempre na mesma cor de casa. Ele não alcança uma casa de outra cor, por mais lances que faça." },
          { question: "No tabuleiro vazio, para quantas casas um cavalo em a1 consegue ir?", options: ["Oito, como em qualquer outra casa.", "Quatro, porque ele está na borda.", "Três: b3, c2 e b2.", "Duas: b3 e c2."], answer: 3, why: "No canto, o L só cabe para dentro do tabuleiro em duas direções. Por isso cavalo na borda é cavalo fraco." },
          { question: "Seu peão está em e5. O adversário joga d7-d5, você responde com outro lance e só no lance seguinte tenta capturar o peão de d5 en passant. Pode?", options: ["Sim: o en passant vale enquanto os peões estiverem lado a lado.", "Não: o en passant só vale no lance imediatamente seguinte.", "Sim, desde que o peão de d5 não tenha se movido de novo.", "Não, porque o en passant só vale para peões da coluna e."], answer: 1, why: "A captura de passagem só pode ser feita logo em seguida. Se você jogar outra coisa, perde o direito." },
          { question: "Seu rei e a torre de h1 nunca se moveram e não há peças entre eles, mas um bispo adversário ataca a casa f1. Você pode fazer o roque pequeno?", options: ["Sim, porque o rei não está em xeque.", "Sim, desde que o rei não termine em f1.", "Não: o rei passaria por uma casa atacada.", "Sim, porque quem passa por f1 é a torre, não o rei."], answer: 2, why: "No roque pequeno o rei passa por f1 até g1. Ele não pode passar nem parar numa casa atacada." },
          { question: "As pretas não estão em xeque, mas não têm nenhum lance legal, e é a vez delas. As brancas têm uma dama a mais. Qual é o resultado?", options: ["Vitória das brancas, porque as pretas não conseguem jogar.", "As pretas passam a vez e a partida continua.", "Vitória das brancas por xeque-mate.", "Empate por afogamento."], answer: 3, why: "Sem xeque e sem lance legal é afogamento, que é empate, por maior que seja a vantagem de material." },
          { question: "Seu peão chega à oitava fileira e, se virar cavalo, dá xeque e ataca a dama adversária ao mesmo tempo. Você pode escolher o cavalo?", options: ["Sim: o peão pode virar dama, torre, bispo ou cavalo.", "Não: a promoção é sempre para dama.", "Só se você já tiver perdido um cavalo antes.", "Só se não houver dama disponível fora do tabuleiro."], answer: 0, why: "A escolha é livre entre dama, torre, bispo e cavalo, e não depende das peças já capturadas. Quase sempre é a dama, mas não é obrigatório." },
          { question: "Lia montou o tabuleiro e a casa do canto direito dela ficou escura. O que isso indica?", options: ["Que as pretas começam a partida.", "Que ela deve trocar a dama e o rei de lugar.", "Que o tabuleiro está girado: deve ficar com a casa clara à direita.", "Nada: a cor do canto não importa."], answer: 2, why: "A regra é \"clara à direita\". Com o tabuleiro girado, a dama não fica na casa da sua cor e toda a notação das casas sai errada." },
          { question: "Você troca a sua torre pelo bispo do adversário. Pela tabela de valores, como fica o material?", options: ["Você ganha 2 pontos.", "Você perde 2 pontos.", "Fica igual: as duas são peças maiores.", "Você perde 6 pontos."], answer: 1, why: "A torre vale 5 e o bispo vale 3. Entregar 5 para receber 3 é perder 2 pontos de material." },
          { question: "Seu rei está em xeque. Qual destas jogadas NÃO tira o rei do xeque, mesmo que o rei e a torre nunca tenham se movido?", options: ["Mover o rei para uma casa que não esteja atacada.", "Capturar a peça que está dando o xeque.", "Colocar uma peça entre o rei e a peça que ataca.", "Fazer o roque para levar o rei para longe."], answer: 3, why: "Não se pode rocar estando em xeque. Para sair do xeque, só mover o rei, capturar quem ataca ou bloquear o caminho." },
          { question: "Um peão branco está em e4 e há um cavalo preto em e5, logo à frente. O que o peão pode fazer?", options: ["Nada nessa direção: ele está bloqueado e não captura andando reto.", "Capturar o cavalo, porque ele está logo à frente.", "Pular o cavalo e ir para e6.", "Capturar o cavalo, mas só se estiver no primeiro lance."], answer: 0, why: "O peão captura na diagonal. Uma peça bem na frente bloqueia o peão, seja de que cor for." },
        ],
      },
    },
    {
      title: "Abertura e meio-jogo",
      lessons: [
        {
          id: "abertura",
          title: "A abertura: começar bem",
          summary: "A notação, os princípios dos primeiros lances, a Abertura Italiana e o mate do pastor.",
          goals: ["Ler e escrever lances na notação", "Aplicar os princípios da abertura", "Defender-se do mate do pastor"],
          sections: [
            {
              title: "Como se anotam os lances",
              body: [
                "Cada peça tem uma letra: R (rei), D (dama), T (torre), B (bispo) e C (cavalo). O peão não tem letra. O lance é a letra da peça mais a casa de destino. Anotar as partidas serve para revê-las depois e achar os erros.",
                { list: [
                  "e4: um peão vai para e4.",
                  "Cf3: um cavalo vai para f3.",
                  "Bxc6: um bispo captura em c6 (o x quer dizer captura).",
                  "exd5: o peão da coluna e captura em d5.",
                  "O-O: roque pequeno. O-O-O: roque grande.",
                  "+ quer dizer xeque e # quer dizer xeque-mate.",
                ] },
              ],
            },
            {
              title: "Os quatro princípios",
              body: [
                { list: [
                  "Controle o centro: as casas d4, e4, d5 e e5 são as mais importantes. Ocupe-as com os peões do rei e da dama (1. e4 ou 1. d4) e evite avançar os peões da borda.",
                  "Desenvolva as peças: tire cavalos e bispos da primeira fileira logo no começo. Os cavalos costumam ir para f3 e c3.",
                  "Proteja o rei: faça o roque cedo, de preferência até o 7º ou 10º lance.",
                  "Não mova a mesma peça várias vezes sem motivo, e não tire a dama cedo demais: ela vira alvo das peças menores.",
                ], ordered: true },
              ],
            },
            {
              title: "A Abertura Italiana",
              body: [
                "É uma das aberturas mais usadas para aprender, porque segue todos os princípios: 1. e4 e5 2. Cf3 Cc6 3. Bc4.",
                { list: [
                  "O peão de e4 ocupa o centro e controla a casa d5.",
                  "O cavalo de f3 e o bispo de c4 saem rápido, sem atrapalhar as outras peças.",
                  "O bispo de c4 mira a casa f7, o ponto fraco das pretas, e deixa o caminho livre para o roque (O-O).",
                ] },
                { box: "exemplo", text: "Se as pretas responderem 3... Bc5, os dois bispos ficam espelhados (essa linha se chama Giuoco Piano). O bispo branco mira f7 e o preto mira f2." },
              ],
            },
            {
              title: "O mate do pastor",
              body: [
                "No começo da partida, a casa f7 (f2 para as brancas) é a mais fraca do tabuleiro: só o rei a defende. O mate do pastor junta a dama e o bispo contra ela.",
                { box: "exemplo", text: "1. e4 e5 2. Dh5 Cc6 3. Bc4 Cf6?? 4. Dxf7#. A dama captura em f7 protegida pelo bispo de c4, e o rei não pode capturá-la." },
                { box: "chave", title: "Como se defender", text: "Depois de 2. Dh5, jogue 2... Cc6, defendendo o peão de e5. Depois de 3. Bc4, jogue 3... g6, que fecha o caminho da dama. Se vier 4. Df3, ameaçando f7 de novo, jogue 4... Cf6: o cavalo vai para a melhor casa e bloqueia a dama. As pretas ficam com mais peças desenvolvidas." },
                { box: "atencao", text: "Cuidado com a ordem: 2... g6?? logo de cara perde o peão de e5 com 3. Dxe5+, um garfo da dama no rei e na torre de h8." },
              ],
            },
          ],
          activity: {
            title: "Bom ou ruim?",
            steps: [
              "Lance 1: as brancas jogam h4. Segue algum princípio?",
              "Lance 1: as brancas jogam e4. Que princípios ele segue?",
              "No lance 3, as pretas movem a dama pela terceira vez. Qual princípio está sendo quebrado?",
            ],
            answer: "1) Não muito: h4 não controla o centro nem ajuda a desenvolver peças. 2) e4 ocupa o centro e abre caminho para o bispo e a dama. 3) Mover a mesma peça várias vezes e tirar a dama cedo: enquanto isso, o adversário desenvolve as outras peças.",
          },
          recap: ["Centro, desenvolvimento e roque cedo.", "Lance anotado = letra da peça + casa de destino.", "Proteja f7 (ou f2): contra o pastor, Cc6, g6 e Cf6."],
        },
        {
          id: "taticas",
          title: "Táticas: garfo, cravada, espeto e xeque descoberto",
          summary: "Os golpes que ganham material e como enxergá-los.",
          goals: ["Reconhecer o garfo (ataque duplo)", "Entender a cravada, o espeto e o xeque descoberto", "Procurar táticas antes de cada lance"],
          sections: [
            {
              title: "Garfo",
              body: [
                "Garfo (ou ataque duplo) é quando uma peça ataca duas peças adversárias ao mesmo tempo. O adversário só consegue salvar uma.",
                { box: "exemplo", text: "Um cavalo branco pula para c7 e ataca ao mesmo tempo o rei preto em e8 e a torre em a8. As pretas precisam salvar o rei, e o cavalo captura a torre no lance seguinte." },
                { box: "chave", text: "O cavalo é o grande especialista em garfos, porque ataca casas que as outras peças não alcançam. Garfo com xeque é o mais forte: o rei é obrigado a sair." },
              ],
            },
            {
              title: "Cravada",
              body: [
                "Cravada é quando uma peça não pode (ou não deve) sair do lugar porque, atrás dela, há uma peça mais valiosa na mesma linha.",
                { list: [
                  "Cravada absoluta: atrás está o rei. Mover a peça cravada é proibido, porque deixaria o rei em xeque.",
                  "Cravada relativa: atrás está uma peça valiosa, como a dama. Mover é permitido, mas custa caro.",
                ] },
                { box: "exemplo", text: "Um bispo branco em b5 ataca um cavalo preto em c6, e atrás dele, em e8, está o rei preto. O cavalo está cravado: não pode sair de c6. Já um bispo em g5 contra um cavalo em f6, com a dama preta em d8, é uma cravada relativa." },
              ],
            },
            {
              title: "Espeto",
              body: [
                "Espeto é o contrário da cravada: a peça mais valiosa está na frente e é atacada. Ela foge, e a de trás fica exposta e é capturada.",
                { box: "exemplo", text: "Uma torre branca em e1 dá xeque no rei preto em e5. Atrás do rei, na mesma coluna, está a dama preta em e8. O rei sai do xeque e a torre captura a dama." },
              ],
            },
            {
              title: "Xeque descoberto",
              body: [
                "Acontece quando uma peça sai da frente e libera a linha de outra peça de longa distância (torre, bispo ou dama), que passa a dar xeque. A peça que se moveu fica livre para atacar outra coisa, e o adversário precisa cuidar primeiro do xeque.",
                { box: "exemplo", text: "Uma torre branca em e1 está atrás do cavalo branco, na mesma coluna do rei preto. O cavalo pula para d7 atacando a dama preta, e a torre dá xeque. As pretas salvam o rei e perdem a dama." },
                { box: "chave", text: "Se a peça que se moveu também der xeque, é um xeque duplo: aí a única saída é mover o rei." },
              ],
            },
            {
              title: "O hábito de procurar",
              body: [
                "Antes de cada lance, faça três perguntas:",
                { list: ["Quais peças minhas estão atacadas?", "O que o lance do adversário ameaça?", "Tenho algum xeque, captura ou ameaça que funcione?"], ordered: true },
                { box: "atencao", text: "A maioria das partidas entre iniciantes é decidida por uma peça deixada sem defesa. Uma peça está segura quando tem tantos defensores quanto atacantes, ou mais." },
              ],
            },
          ],
          activity: {
            title: "Dê nome ao golpe",
            steps: [
              "Uma torre branca dá xeque ao rei preto, que está na mesma coluna e na frente da dama preta. O rei sai e a torre captura a dama. Que tática é essa?",
              "Um cavalo ataca ao mesmo tempo a dama e uma torre adversárias. Que tática é essa?",
              "Um bispo ataca um cavalo que tem o rei atrás, na mesma diagonal. O cavalo pode se mexer?",
              "Um bispo branco sai da frente da dama branca e, com isso, a dama dá xeque. Que tática é essa?",
            ],
            answer: "1) Espeto: a peça mais valiosa (o rei) estava na frente e teve de sair, deixando a dama. 2) Garfo. 3) Não: é uma cravada absoluta, porque mover o cavalo deixaria o próprio rei em xeque. 4) Xeque descoberto: o bispo liberou a linha da dama, e agora pode capturar ou ameaçar outra peça.",
          },
          recap: ["Garfo ataca duas peças ao mesmo tempo.", "Cravada prende uma peça na frente de outra mais valiosa; espeto é o contrário.", "No xeque descoberto, a peça que sai libera o xeque de outra."],
        },
        {
          id: "meio-jogo",
          title: "O meio-jogo: plano e ataque ao rei",
          summary: "Peças ativas, colunas abertas, peões fracos e os passos para atacar o rei.",
          goals: ["Deixar as peças ativas e coordenadas", "Reconhecer peões fracos como alvos", "Seguir os passos de um ataque ao rei"],
          sections: [
            {
              title: "Depois da abertura",
              body: [
                "O meio-jogo começa quando as peças já saíram, os reis rocaram e os peões do centro definiram a estrutura. Agora não basta seguir princípios gerais: é preciso olhar a posição e escolher um plano.",
              ],
            },
            {
              title: "Peças ativas",
              body: [
                { list: [
                  "Torres em colunas abertas (sem peões) ou semiabertas (só com peão adversário).",
                  "Bispos em diagonais livres, sem os próprios peões no caminho.",
                  "Cavalos em casas centrais e avançadas, de onde nenhum peão adversário consiga expulsá-los.",
                  "Domínio do centro, para levar as peças de um lado para o outro do tabuleiro mais rápido.",
                ] },
                { box: "chave", text: "Uma peça ativa ataca muitas casas. Se uma peça sua não faz nada, procure uma casa melhor para ela." },
              ],
            },
            {
              title: "Peões fracos",
              body: [
                { table: { caption: "Peões que viram alvo", head: ["Peão", "O que é"], rows: [
                  ["Isolado", "Não tem peões da mesma cor nas colunas vizinhas: nenhum peão pode defendê-lo"],
                  ["Dobrado", "Dois peões da mesma cor na mesma coluna, um atrás do outro"],
                  ["Atrasado", "Ficou para trás dos vizinhos e não consegue avançar com segurança"],
                ] } },
                "Peões fracos no campo do adversário são alvos para pressionar com as peças.",
              ],
            },
            {
              title: "Atacar o rei",
              body: [
                { list: [
                  "Garanta o centro antes de atacar pelas laterais.",
                  "Provoque o avanço dos peões que protegem o rei adversário (como h6 ou g6): eles deixam casas fracas.",
                  "Abra colunas e diagonais em direção ao rei, com avanços de peão ou trocas.",
                  "Ataque com mais peças do que ele tem para defender aquele lado.",
                ], ordered: true },
                { box: "atencao", text: "Um ataque com poucas peças costuma ser rebatido. Antes de partir para cima, conte: quantas peças minhas chegam lá? Quantas defendem?" },
              ],
            },
          ],
          activity: {
            title: "Qual é o plano?",
            steps: [
              "Sua torre está em a1, atrás do próprio peão, e a coluna d está aberta. O que fazer com ela?",
              "O adversário tem dois peões na coluna c, um atrás do outro. Como se chama isso e por que interessa?",
              "Você quer atacar o rei que rocou do lado do rei, mas só a sua dama está perto. O que falta?",
            ],
            answer: "1) Levar a torre para a coluna d aberta (por exemplo, Td1), onde ela fica ativa. 2) Peões dobrados: são mais difíceis de defender e viram alvos. 3) Trazer mais peças para aquele lado antes de atacar, e de preferência provocar o avanço dos peões que protegem o rei.",
          },
          recap: ["Torres em colunas abertas, bispos em diagonais livres, cavalos no centro.", "Peões isolados, dobrados e atrasados são alvos.", "Ataque o rei com mais peças do que ele tem para se defender."],
        },
      ],
      quiz: {
        sticker: { id: "mestre-do-modulo-2", min: 8 },
        questions: [
          { question: "Numa partida anotada, aparece o lance exd5. O que aconteceu?", options: ["Um peão da coluna e capturou uma peça em d5.", "A dama foi da casa e para d5.", "Uma peça qualquer capturou em d5 e deu xeque.", "O rei saiu de e4 e foi para d5."], answer: 0, why: "Peão não tem letra. Na captura de peão, aparece a coluna de onde ele saiu, o x e a casa de destino." },
          { question: "Seguindo os princípios da aula, para quais casas os cavalos brancos costumam ir no começo da partida?", options: ["Para h3 e a3, para não atrapalhar os peões.", "Para d2 e e2, perto do rei.", "Para f3 e c3, de onde olham o centro.", "Para e5 e d5, logo no primeiro lance."], answer: 2, why: "De f3 e c3, os cavalos controlam as casas centrais. Na borda (a3, h3) eles ficam fracos." },
          { question: "Até que lance, mais ou menos, a aula recomenda fazer o roque?", options: ["Só depois de trocar as damas.", "Até o 7º ou 10º lance.", "Só quando o rei levar o primeiro xeque.", "Até o 20º lance, depois de atacar."], answer: 1, why: "Com o rei no centro, ele fica exposto assim que as colunas abrem. Rocar cedo protege o rei e ativa a torre." },
          { question: "Na Abertura Italiana (1. e4 e5 2. Cf3 Cc6 3. Bc4), qual casa o bispo de c4 mira?", options: ["d5, para ocupar o centro.", "f7, o ponto fraco das pretas, defendido só pelo rei.", "a6, para impedir o avanço dos peões da borda.", "e5, para atacar o peão central de novo."], answer: 1, why: "f7 é defendida só pelo rei no começo da partida. O bispo de c4 pressiona essa casa e libera o roque." },
          { question: "Depois de 1. e4 e5 2. Dh5 Cc6 3. Bc4, as brancas ameaçam Dxf7#. Qual defesa a aula ensina?", options: ["3... Cf6, atacando a dama.", "3... Re7, tirando o rei de perto de f7.", "3... d6, abrindo a diagonal do bispo.", "3... g6, fechando o caminho da dama."], answer: 3, why: "3... Cf6?? é justamente o erro que permite 4. Dxf7#. O g6 bloqueia a dama, e depois de 4. Df3 vem 4... Cf6." },
          { question: "Depois de 1. e4 e5 2. Dh5, as pretas jogam 2... g6?? e vem 3. Dxe5+. Que golpe é esse?", options: ["Um garfo: a dama ataca o rei e a torre de h8 ao mesmo tempo.", "Uma cravada absoluta do peão de e5.", "Um espeto: o rei sai do xeque e a dama captura a torre de a8 logo atrás.", "Um xeque descoberto do bispo de f1."], answer: 0, why: "Da casa e5, a dama dá xeque no rei de e8 e ataca, na diagonal, a torre de h8. É um ataque duplo." },
          { question: "Um cavalo branco sai da frente de uma torre branca, ataca a dama preta e, com isso, a torre passa a dar xeque. Que tática é essa?", options: ["Espeto.", "Cravada relativa.", "Xeque descoberto.", "Mate do corredor."], answer: 2, why: "A peça que se moveu liberou a linha da torre. As pretas cuidam do xeque e perdem a dama." },
          { question: "Um bispo branco em g5 ataca um cavalo preto em f6, e atrás do cavalo está a dama preta em d8. Como se chama essa cravada?", options: ["Absoluta: o cavalo não pode se mover pela regra.", "Relativa: o cavalo pode se mover, mas a dama fica exposta.", "Não é cravada, porque a dama não é o rei.", "É um espeto, porque a peça de trás vale mais."], answer: 1, why: "Atrás do cavalo está a dama, não o rei. Mover é permitido, mas entrega a dama." },
          { question: "Seu cavalo está atacado por duas peças adversárias e defendido por uma só peça sua. Pela aula, ele está seguro?", options: ["Sim: tendo pelo menos um defensor, qualquer peça está segura contra capturas.", "Sim, se o defensor for uma peça de valor maior.", "Só se o cavalo estiver no centro do tabuleiro.", "Não: ele precisa de tantos defensores quanto atacantes, ou mais."], answer: 3, why: "Com mais atacantes do que defensores, a sequência de capturas termina com você perdendo material." },
          { question: "Você quer atacar o rei que rocou. Pelos passos da aula, o que vem antes de abrir colunas na direção dele?", options: ["Trocar a sua dama para simplificar a posição.", "Avançar todos os peões da frente do seu próprio rei para abrir espaço às torres.", "Garantir o centro e provocar o avanço dos peões que protegem o rei.", "Mover o seu rei para o meio do tabuleiro."], answer: 2, why: "Primeiro o centro, depois enfraquecer o escudo de peões, abrir linhas e atacar com mais peças do que a defesa." },
        ],
      },
    },
    {
      title: "Finais",
      lessons: [
        {
          id: "mates-e-analise",
          title: "Mates básicos e como evoluir",
          summary: "Mate com dama, com torre, a escadinha, o mate do corredor e a análise das partidas.",
          goals: ["Dar mate com dama ou torre contra rei sozinho", "Usar o mate da escadinha e o do corredor", "Analisar as próprias partidas para melhorar"],
          sections: [
            {
              title: "Mate da escadinha",
              body: [
                "Com duas torres (ou dama e torre) contra o rei sozinho, as peças se revezam empurrando o rei fileira por fileira até a borda.",
                { list: [
                  "Uma torre corta uma fileira, impedindo o rei de passar.",
                  "A outra torre dá xeque na fileira seguinte, empurrando o rei.",
                  "Repita, alternando as torres, até o rei chegar à borda.",
                  "Na borda, um xeque com a outra torre cortando a fuga é mate.",
                ], ordered: true },
                { box: "atencao", text: "Se o rei adversário se aproximar de uma torre, leve-a para longe, do outro lado do tabuleiro, e continue." },
              ],
            },
            {
              title: "Mate com dama e rei",
              body: [
                "Com dama e rei contra o rei sozinho, use a dama para encurralar o rei numa área cada vez menor, sempre a um lance de cavalo de distância dele. Depois traga o seu rei para ajudar, e dê o mate na borda.",
                { box: "exemplo", text: "Rei branco em f6, dama em g7 e rei preto em h8: é mate. A dama dá xeque e o rei branco a protege, então o rei preto não pode capturá-la." },
                { box: "atencao", text: "Cuidado com o afogamento: se o rei adversário ficar sem nenhum lance e não estiver em xeque, a partida empata. Sempre deixe uma casa livre até a hora do mate." },
              ],
            },
            {
              title: "Mate com torre e rei",
              body: [
                "Com uma torre só, o rei precisa ajudar o tempo todo. A torre corta o rei adversário numa parte do tabuleiro, e o seu rei vai se aproximando. Quando os dois reis ficam frente a frente (na mesma coluna, com uma casa entre eles), a torre dá xeque pelo lado e o rei adversário precisa recuar uma fileira.",
                { box: "exemplo", text: "Rei branco em f6, rei preto em f8 e torre branca dando xeque em a8: é mate. O rei branco impede o preto de subir para e7, f7 e g7, e a torre cuida da oitava fileira." },
              ],
            },
            {
              title: "Mate do corredor",
              body: [
                "Acontece quando o rei rocou e ficou preso atrás dos próprios peões, sem casa para fugir. Uma torre ou a dama dá xeque na última fileira e é mate.",
                { box: "pratica", text: "Para evitar, em algum momento da partida abra uma \"janela\" para o rei, avançando um dos peões na frente dele (por exemplo, h3)." },
              ],
            },
            {
              title: "Como evoluir",
              body: [
                { list: [
                  "Jogue partidas mais lentas, com tempo para pensar, e anote os lances.",
                  "Depois de cada partida, procure o momento em que ela virou. Onde foi o erro?",
                  "Use o analisador gratuito de sites como o Lichess para ver os lances que você não enxergou.",
                  "Resolva alguns problemas de tática por dia.",
                ] },
                { box: "chave", text: "Perder faz parte. Quem analisa as derrotas aprende muito mais do que quem só joga mais uma partida." },
              ],
            },
          ],
          activity: {
            title: "Treino de mate",
            steps: [
              "Num tabuleiro ou aplicativo, coloque o rei preto em e8 e duas torres brancas em a1 e b1 (rei branco em e1).",
              "Dê o mate da escadinha.",
              "Agora troque as torres por uma dama em d1 e tente de novo, sem afogar.",
            ],
            answer: "Com as torres: 1. Ta7 corta a sétima fileira e o rei preto fica preso na oitava. Se ele for para d8, 2. Tb8 é mate. Se ele se aproximar das torres (indo para c8 ou b8), leve as torres para o outro lado do tabuleiro, por exemplo Th1 e depois Tg7, sempre mantendo uma delas cortando a sétima fileira, e dê o mate com a outra na oitava (Th8). Com a dama, o caminho é prender o rei na oitava fileira com a dama longe do alcance dele, trazer o seu rei até ficar na frente do rei preto e dar o mate na borda, sempre deixando uma casa livre até o golpe final.",
          },
          recap: ["Duas torres dão o mate da escadinha, fileira por fileira.", "Com dama ou torre, o seu rei ajuda e o mate é na borda.", "Analisar as partidas é o jeito mais rápido de evoluir."],
        },
        {
          id: "finais-de-peao-e-empates",
          title: "Finais de peão e empates",
          summary: "O rei que ataca, a regra do quadrado, a oposição e todos os jeitos de empatar.",
          goals: ["Usar o rei como peça de ataque no final", "Aplicar a regra do quadrado e a oposição", "Reconhecer os tipos de empate"],
          sections: [
            {
              title: "O rei entra no jogo",
              body: [
                "No final, com poucas peças no tabuleiro, o rei deixa de se esconder. Ele vira uma peça de ataque, que vale uns 3 ou 4 pontos: acompanha os peões até a promoção e bloqueia o rei adversário.",
                { box: "chave", text: "Nos finais de peões, quem consegue promover primeiro um peão a dama costuma ganhar a partida." },
              ],
            },
            {
              title: "A regra do quadrado",
              body: [
                "Serve para saber, sem calcular lance por lance, se o rei consegue alcançar um peão que corre sozinho para a promoção.",
                { list: [
                  "Imagine um quadrado com um lado indo do peão até a casa de promoção.",
                  "Se o rei adversário conseguir entrar nesse quadrado no lance dele, ele alcança o peão.",
                  "Se for a vez de quem tem o peão, o peão anda antes: comece o quadrado uma casa à frente dele.",
                  "Peão que ainda não saiu da casa inicial pode andar duas casas: conte como se ele já estivesse uma casa à frente.",
                ], ordered: true },
                "Treine com o tabuleiro abaixo. Responda e veja o quadrado aparecer.",
                { tool: "regra-do-quadrado" },
              ],
            },
            {
              title: "A oposição",
              body: [
                "Os reis estão em oposição quando ficam na mesma coluna, fileira ou diagonal com uma casa vazia entre eles. Como um rei não pode encostar no outro, quem tem de jogar é obrigado a ceder espaço.",
                { box: "exemplo", text: "Rei branco em e4 e rei preto em e6, com a vez das pretas: o rei preto não pode ir para d5, e5 nem f5, então precisa sair para o lado ou recuar. O rei branco avança e abre caminho para o seu peão." },
                { box: "chave", text: "Quem NÃO tem a vez de jogar tem a oposição. Num final de rei e peão, ela decide quem passa." },
              ],
            },
            {
              title: "Os tipos de empate",
              body: [
                { table: { caption: "Como uma partida empata", head: ["Empate", "Quando acontece"], rows: [
                  ["Afogamento", "Quem tem a vez não tem nenhum lance legal e o rei não está em xeque. Empata na hora"],
                  ["Material insuficiente", "Ninguém consegue dar mate: rei contra rei, rei e bispo contra rei, rei e cavalo contra rei"],
                  ["Xeque perpétuo", "Um lado dá xeques sem fim, dos quais o outro não consegue escapar"],
                  ["Tripla repetição", "A mesma posição se repete três vezes. O jogador pode pedir o empate"],
                  ["50 lances", "Passam 50 lances de cada lado sem nenhuma captura e sem nenhum movimento de peão. O jogador pode pedir o empate"],
                  ["Acordo", "Os dois jogadores combinam o empate"],
                ] } },
                { box: "atencao", text: "O afogamento é o erro mais comum de quem está ganhando: encurrala o rei sozinho sem deixar nenhuma casa livre e sem dar xeque. Antes de cada lance, confira se o rei adversário ainda tem para onde ir." },
              ],
            },
          ],
          activity: {
            title: "Mate ou empate?",
            steps: [
              "Brancas: rei em f6 e dama em c7. Pretas: rei em h8. É a vez das brancas. Qual lance dá mate?",
              "Na mesma posição, o que acontece se as brancas jogarem Df7?",
              "Brancas: rei em a6 e dama em c7. Pretas: rei em a8. Por que Db7 é mate e Rb6 empata?",
            ],
            answer: "1) Dg7#: a dama dá xeque e o rei de f6 a protege. 2) Afogamento: o rei preto não está em xeque e g8, g7 e h7 estão todas atacadas. Empate. 3) Db7 dá xeque, e o rei de a6 protege a dama: o rei preto não pode capturá-la nem fugir. Já Rb6 não dá xeque e deixa o rei preto sem nenhum lance: afogamento.",
          },
          recap: ["No final, o rei é peça de ataque.", "Regra do quadrado: se o rei entra no quadrado, alcança o peão.", "Sem lances e sem xeque é afogamento, e afogamento é empate."],
        },
      ],
      quiz: {
        sticker: { id: "mestre-do-modulo-3", min: 8 },
        questions: [
          { question: "Brancas: rei em f6 e dama em c7. Pretas: rei em h8. Vez das brancas. Qual lance dá mate?", options: ["Dh7, encostando a dama no rei.", "Dc8, dando xeque pela oitava fileira.", "Df7, fechando as casas g8 e h7.", "Dg7, com a dama protegida pelo rei de f6."], answer: 3, why: "Em g7 a dama dá xeque e está protegida pelo rei. Em h7 ela seria capturada; com Dc8+ o rei foge para h7." },
          { question: "Na mesma posição (rei branco f6, dama c7, rei preto h8), as brancas jogam Df7. O que acontece?", options: ["É xeque-mate, porque o rei preto ficou sem nenhuma casa para onde ir.", "Afogamento: o rei preto não está em xeque e não tem lance. Empate.", "As pretas passam a vez e as brancas jogam de novo.", "O rei preto captura a dama em f7."], answer: 1, why: "Df7 não dá xeque, mas tira g8, g7 e h7 do rei. Sem lance legal e sem xeque é afogamento." },
          { question: "Rei branco em f6, rei preto em f8 e torre branca vai para a8 dando xeque. Por que é mate?", options: ["Porque a torre, na oitava fileira, fica protegida pelo rei branco e não pode ser capturada.", "Porque o rei preto está afogado.", "Porque o rei branco cobre e7, f7 e g7, e a torre cuida da oitava fileira.", "Porque a torre também ataca a casa f7."], answer: 2, why: "Com os reis frente a frente, o rei branco bloqueia a fuga para a sétima fileira, e a torre dá xeque na oitava." },
          { question: "Peão branco em e5, rei preto em c7, rei branco longe. É a vez das pretas. Pela regra do quadrado, o que acontece?", options: ["O rei preto entra no quadrado e alcança o peão.", "O peão promove, porque já passou do meio do tabuleiro.", "O rei preto só alcança se o peão estiver na casa inicial.", "Não dá para saber sem o rei branco."], answer: 0, why: "O quadrado vai de e5 a e8 e até a coluna b. O rei de c7 já está dentro dele e alcança o peão." },
          { question: "Um peão branco ainda está na casa inicial, a2. Como ele entra na regra do quadrado?", options: ["Como se estivesse em a1, porque ainda não andou.", "Como se estivesse em a3, porque pode andar duas casas.", "Como se estivesse em a4, porque anda duas casas duas vezes.", "A regra do quadrado não vale para peões na casa inicial."], answer: 1, why: "No primeiro lance o peão pode andar duas casas. Por isso o quadrado começa uma casa à frente dele." },
          { question: "Rei branco em e4 e rei preto em e6, com uma casa vazia entre eles. É a vez das pretas. Quem tem a oposição?", options: ["As pretas, porque quem tem a vez de jogar escolhe para onde o rei vai.", "As brancas, porque quem NÃO tem a vez tem a oposição.", "Ninguém, porque os reis estão na mesma coluna.", "Quem tiver mais peões no tabuleiro."], answer: 1, why: "Quem precisa jogar é obrigado a ceder espaço. Quem não tem a vez fica com a vantagem: a oposição." },
          { question: "Sobraram só o rei e um cavalo das brancas contra o rei sozinho das pretas. O que acontece?", options: ["As brancas ganham, porque têm uma peça a mais.", "A partida continua até a regra dos 50 lances.", "As brancas ganham, se o cavalo chegar ao centro.", "Empate: com rei e cavalo não dá para forçar o mate."], answer: 3, why: "Rei e cavalo (ou rei e bispo) contra rei é material insuficiente para dar mate. A partida empata." },
          { question: "A dama das pretas dá xeque atrás de xeque, e o rei branco não tem como escapar deles. Como se chama essa situação?", options: ["Afogamento.", "Mate do corredor.", "Xeque perpétuo, que leva ao empate.", "Xeque descoberto."], answer: 2, why: "Os xeques sem fim repetem a posição. É o recurso de quem está perdendo para salvar o empate." },
          { question: "Na regra dos 50 lances, o que faz a contagem voltar do zero?", options: ["Qualquer xeque.", "Qualquer captura ou qualquer movimento de peão.", "Qualquer lance de rei, já que ele é a peça mais importante.", "Um pedido de empate que o adversário recusou."], answer: 1, why: "A regra conta lances sem captura e sem movimento de peão. Qualquer um desses dois zera a contagem." },
          { question: "Por que, no final, a aula diz que o rei vale uns 3 ou 4 pontos?", options: ["Porque nessa fase ele passa a valer o mesmo que um cavalo ou um bispo nas trocas de peças.", "Porque ele pode ser capturado como as outras peças.", "Porque, com poucas peças, ele vira peça de ataque e ajuda os peões a promover.", "Porque ele passa a andar duas casas por lance."], answer: 2, why: "Sem o perigo de mate no meio do tabuleiro, o rei sai do esconderijo, bloqueia o rei adversário e acompanha os peões." },
        ],
      },
    },
  ],
};
