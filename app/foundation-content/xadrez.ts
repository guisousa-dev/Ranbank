// Curso: Xadrez. 2 módulos (regras e estratégia), 6 aulas.
// Segue o padrão de app/foundation-lessons.ts. As casas usam a notação algébrica (a1 a h8).

import type { CourseContent } from "../foundation-lessons";

export const XADREZ: CourseContent = {
  closing: "Agora você conhece as regras, as primeiras estratégias e os mates básicos. O xadrez se aprende jogando: jogue muito, perca sem medo e analise as suas partidas. Cada derrota ensina alguma coisa.",
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
                "Os valores ajudam a decidir se uma troca é boa. Não são regras, são uma referência.",
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
                "Nenhuma delas pode pular outras peças. Para capturar, a peça para na casa ocupada por uma peça adversária e a tira do tabuleiro.",
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
                  "Anda só para a frente, uma casa por vez.",
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
                "Outros empates: acordo entre os jogadores, a mesma posição se repetindo três vezes, 50 lances seguidos sem captura nem movimento de peão, ou peças insuficientes para dar mate (por exemplo, só os dois reis).",
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
    },
    {
      title: "Estratégia",
      lessons: [
        {
          id: "abertura",
          title: "A abertura: começar bem",
          summary: "Os princípios para os primeiros lances e as armadilhas mais comuns.",
          goals: ["Aplicar os princípios da abertura", "Ler e escrever lances na notação", "Evitar o mate do pastor"],
          sections: [
            {
              title: "Como se anotam os lances",
              body: [
                "Cada peça tem uma letra: R (rei), D (dama), T (torre), B (bispo) e C (cavalo). O peão não tem letra. O lance é a letra da peça mais a casa de destino.",
                { list: ["e4: um peão vai para e4.", "Cf3: um cavalo vai para f3.", "Bxc6: um bispo captura em c6 (o x quer dizer captura).", "O-O: roque pequeno. O-O-O: roque grande.", "+ quer dizer xeque e # quer dizer xeque-mate."] },
              ],
            },
            {
              title: "Os quatro princípios",
              body: [
                { list: [
                  "Controle o centro: as casas d4, e4, d5 e e5 são as mais importantes. Peões e peças ali têm mais força.",
                  "Desenvolva as peças: tire cavalos e bispos da primeira fileira logo no começo.",
                  "Proteja o rei: faça o roque cedo.",
                  "Não mova a mesma peça várias vezes sem motivo, e não tire a dama cedo demais: ela vira alvo.",
                ], ordered: true },
                { box: "exemplo", text: "Um começo clássico: 1. e4 e5 2. Cf3 Cc6 3. Bc4. As brancas ocupam o centro, desenvolvem duas peças e já preparam o roque." },
              ],
            },
            {
              title: "O mate do pastor",
              body: [
                "É uma armadilha que pega muitos iniciantes: as brancas atacam a casa f7 (a mais fraca das pretas, defendida só pelo rei) com a dama e o bispo.",
                { box: "exemplo", text: "1. e4 e5 2. Bc4 Cc6 3. Dh5 Cf6?? 4. Dxf7#. A dama, protegida pelo bispo, captura em f7 e dá xeque-mate." },
                { box: "chave", text: "Para se defender, proteja f7 a tempo. No exemplo, 3... g6 ou 3... De7 seguram o ataque, e a dama branca, saindo cedo, depois vira alvo." },
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
          recap: ["Centro, desenvolvimento e roque cedo.", "Lance anotado = letra da peça + casa de destino.", "Proteja f7 (ou f2) contra o mate do pastor."],
        },
        {
          id: "taticas",
          title: "Táticas: garfo, cravada e espeto",
          summary: "Os golpes que ganham material e como enxergá-los.",
          goals: ["Reconhecer o garfo (ataque duplo)", "Entender a cravada e o espeto", "Procurar táticas antes de cada lance"],
          sections: [
            {
              title: "Garfo",
              body: [
                "Garfo (ou ataque duplo) é quando uma peça ataca duas peças adversárias ao mesmo tempo. O adversário só consegue salvar uma.",
                { box: "exemplo", text: "Um cavalo branco pula para c7 e ataca ao mesmo tempo o rei preto em e8 e a torre em a8. As pretas precisam salvar o rei, e o cavalo captura a torre no lance seguinte." },
                { box: "chave", text: "O cavalo é o grande especialista em garfos, porque ataca casas que as outras peças não alcançam." },
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
                { box: "exemplo", text: "Um bispo branco em b5 ataca um cavalo preto em c6, e atrás dele, em e8, está o rei preto. O cavalo está cravado: não pode sair de c6." },
              ],
            },
            {
              title: "Espeto e o hábito de procurar",
              body: [
                "Espeto é o contrário da cravada: a peça mais valiosa está na frente. Ela foge, e a de trás fica exposta e é capturada.",
                "Antes de cada lance, faça três perguntas:",
                { list: ["Quais peças minhas estão atacadas?", "O que o lance do adversário ameaça?", "Tenho algum xeque, captura ou ameaça que funcione?"], ordered: true },
                { box: "atencao", text: "A maioria das partidas entre iniciantes é decidida por uma peça deixada sem defesa. Conferir as ameaças antes de jogar já evita muitas derrotas." },
              ],
            },
          ],
          activity: {
            title: "Dê nome ao golpe",
            steps: [
              "Uma torre branca dá xeque ao rei preto, que está na mesma coluna e na frente da dama preta. O rei sai e a torre captura a dama. Que tática é essa?",
              "Um cavalo ataca ao mesmo tempo a dama e uma torre adversárias. Que tática é essa?",
              "Um bispo ataca um cavalo que tem o rei atrás, na mesma diagonal. O cavalo pode se mexer?",
            ],
            answer: "1) Espeto: a peça mais valiosa (o rei) estava na frente e teve de sair, deixando a dama. 2) Garfo. 3) Não: é uma cravada absoluta, porque mover o cavalo deixaria o próprio rei em xeque.",
          },
          recap: ["Garfo ataca duas peças ao mesmo tempo.", "Cravada prende uma peça na frente de outra mais valiosa; espeto é o contrário.", "Antes de jogar, procure xeques, capturas e ameaças."],
        },
        {
          id: "mates-e-analise",
          title: "Mates básicos e como evoluir",
          summary: "Mate com dama, mate da escadinha, mate do corredor e a análise das partidas.",
          goals: ["Dar mate com dama e rei contra rei sozinho", "Usar o mate da escadinha e o do corredor", "Analisar as próprias partidas para melhorar"],
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
                { box: "atencao", text: "Cuidado com o afogamento: se o rei adversário ficar sem nenhum lance e não estiver em xeque, a partida empata. Sempre deixe uma casa livre até a hora do mate." },
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
                  "Jogue partidas mais lentas, com tempo para pensar.",
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
          recap: ["Duas torres dão o mate da escadinha, fileira por fileira.", "Com dama, encurrale o rei sem afogá-lo.", "Analisar as partidas é o jeito mais rápido de evoluir."],
        },
      ],
    },
  ],
};
