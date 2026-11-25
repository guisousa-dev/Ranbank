// Curso: Dominó. 4 módulos (história, fundamentos básicos, fundamentos avançados e prática), 6 aulas.
// Segue o padrão de app/foundation-lessons.ts. As regras de pontuação são as do plano do curso
// e mudam de mesa para mesa: o texto sempre lembra de combinar antes.

import type { CourseContent } from "../foundation-lessons";
import { PROVA_DOMINO } from "./domino-prova";

export const DOMINO: CourseContent = {
  note: "As regras do dominó mudam de região para região. Este curso usa as regras descritas nas aulas; antes de cada partida, combine com a mesa quais valem.",
  closing: "Agora você conhece as peças, as regras, a contagem e o jogo em dupla. No dominó, quem observa e conta joga melhor, e isso só vem com prática. Junte a turma e bom jogo!",
  quiz: PROVA_DOMINO,
  stickers: [
    { id: "encaixe-certo", name: "Encaixe certo", how: "Acertou 7 ou mais em \"Encaixa ou não?\"." },
    { id: "mestre-do-modulo-1", name: "Historiador da mesa", how: "Acertou 8 ou mais no quiz do Módulo 1." },
    { id: "mestre-do-modulo-2", name: "Dono das pedras", how: "Acertou 8 ou mais no quiz do Módulo 2." },
    { id: "mestre-do-modulo-3", name: "Conta até sete", how: "Acertou 8 ou mais no quiz do Módulo 3." },
    { id: "mestre-do-modulo-4", name: "Bom de mesa", how: "Acertou 8 ou mais no quiz do Módulo 4." },
  ],
  modules: [
    {
      title: "Origem e história",
      lessons: [
        {
          id: "historia-do-domino",
          title: "A história do dominó",
          summary: "De onde o jogo veio, como chegou ao formato de hoje e como se espalhou.",
          goals: ["Conhecer as possíveis origens do dominó", "Saber como surgiu o formato de 28 peças", "Entender por que as regras mudam de lugar para lugar"],
          sections: [
            {
              title: "Possíveis raízes na China",
              body: [
                "Os registros históricos ligam os antepassados do dominó a jogos chineses de peças que representavam os resultados de dois dados. Esses jogos existiam na China muitos séculos antes de o dominó europeu ganhar a forma atual.",
                { box: "atencao", text: "Não existe uma história única e comprovada de como o jogo chinês virou o dominó europeu. Por isso o mais correto é falar em antepassados e possíveis influências." },
              ],
            },
            {
              title: "O dominó na Europa",
              body: [
                "O dominó no formato que conhecemos (peças retangulares divididas em duas metades, com pontos de zero a seis) ficou conhecido na Europa no século XVIII. A Itália costuma ser apontada como um dos lugares onde ele se popularizou primeiro.",
                "Esse conjunto se chama duplo-seis e tem 28 peças: todas as combinações possíveis de dois valores entre zero e seis, sem repetir a mesma combinação invertida.",
                "A origem do nome é discutida. Uma explicação muito repetida liga a palavra ao latim dominus (\"senhor\"), mas é uma hipótese, não uma certeza.",
              ],
            },
            {
              title: "Como o jogo se espalhou",
              body: [
                "O dominó atravessou fronteiras porque é fácil de levar, simples de começar e mistura sorte, observação e estratégia. Em cada lugar, ganhou costumes e regras próprias.",
                "No Brasil, virou presença em casas, praças, clubes e encontros entre amigos. Não há uma data aceita por todos para a chegada dele ao país. Com o tempo, surgiram nomes de peças e jeitos de pontuar diferentes em cada região.",
                { box: "chave", text: "Como as regras mudam de mesa para mesa, combinar as regras antes de começar faz parte do jogo." },
              ],
            },
          ],
          activity: {
            title: "Linha do tempo",
            steps: ["Monte uma linha do tempo com o que você aprendeu nesta aula.", "Escolha três fatos sobre a história do dominó.", "Marque qual deles é certeza e qual é hipótese."],
            answer: "Uma linha do tempo possível: jogos chineses de peças ligados aos dados (antepassados) → dominó europeu de 28 peças popular no século XVIII → espalhou-se pelo mundo com regras locais → presença forte no Brasil, sem data exata de chegada. A origem do nome e a passagem direta da China para a Europa são hipóteses.",
          },
          recap: ["Os antepassados do dominó são jogos chineses ligados aos dados.", "O conjunto duplo-seis, com 28 peças, ficou popular na Europa no século XVIII.", "As regras variam por região, por isso se combina antes de jogar."],
        },
      ],
      quiz: {
        sticker: { id: "mestre-do-modulo-1", min: 8 },
        questions: [
          { question: "A que a aula liga os antepassados do dominó?", options: ["A jogos italianos de cartas do século XVIII.", "A jogos de tabuleiro trazidos da Inglaterra.", "A jogos chineses de peças ligadas aos dados.", "A peças usadas em festas religiosas europeias."], answer: 2, why: "Eram jogos chineses de peças que representavam os resultados de dois dados." },
          { question: "Em que século o formato europeu do dominó ficou conhecido na Europa?", options: ["XV", "XVI", "XIX", "XVIII"], answer: 3, why: "O duplo-seis ficou conhecido na Europa no século XVIII." },
          { question: "Qual país costuma ser apontado como um dos primeiros onde o dominó europeu se popularizou?", options: ["Itália", "Inglaterra", "Portugal", "França"], answer: 0, why: "A Itália costuma ser apontada como um dos primeiros lugares." },
          { question: "Quantas peças tem o conjunto duplo-seis?", options: ["21", "28", "36", "49"], answer: 1, why: "Todas as combinações de dois valores entre zero e seis, sem repetir a combinação invertida." },
          { question: "O que a aula diz sobre a origem do nome \"dominó\"?", options: ["Vem com certeza do chinês e quer dizer \"dado\".", "Há hipóteses, como o latim dominus, mas nenhuma certeza.", "Foi inventado no Brasil, nos clubes e praças do interior.", "Vem do sobrenome do italiano que criou o jogo."], answer: 1, why: "A explicação do dominus (\"senhor\") é muito repetida, mas é hipótese." },
          { question: "Segundo a aula, por que o dominó se espalhou pelo mundo?", options: ["Era ensinado nas escolas de todos os países.", "Tinha regras únicas, iguais em todo lugar.", "Foi levado pelos campeonatos internacionais.", "É fácil de levar e simples de começar."], answer: 3, why: "Por isso atravessou fronteiras e ganhou costumes próprios em cada lugar." },
          { question: "Quando o dominó chegou ao Brasil, segundo a aula?", options: ["Em 1863, com os ingleses.", "Não há uma data aceita por todos.", "No século XVIII, com os italianos.", "Em 1890, com os imigrantes."], answer: 1, why: "Não há uma data única aceita para a chegada dele ao país." },
          { question: "Como a aula trata a passagem do jogo chinês para o dominó europeu?", options: ["Como possível influência, sem prova única.", "Como fato comprovado em documentos da época.", "Como lenda já desmentida pelos historiadores.", "Como invenção dos jogadores brasileiros."], answer: 0, why: "Por isso o mais correto é falar em antepassados e possíveis influências." },
          { question: "Por que é importante combinar as regras antes de jogar?", options: ["Porque o dominó não tem regra nenhuma.", "Porque assim a partida dura bem menos tempo no total.", "Porque as regras mudam de mesa para mesa e de região para região.", "Porque só quem começa conhece as regras."], answer: 2, why: "Em cada lugar o jogo ganhou costumes, nomes e pontuações diferentes." },
          { question: "Onde o dominó virou presença no Brasil, segundo a aula?", options: ["Só em campeonatos oficiais.", "Principalmente nas escolas.", "Só entre jogadores profissionais.", "Em casas, praças e clubes."], answer: 3, why: "É um jogo de espaços familiares e comunitários." },
        ],
      },
    },
    {
      title: "Fundamentos básicos",
      lessons: [
        {
          id: "pecas-e-encaixe",
          title: "As peças e o encaixe",
          summary: "As 28 peças, a bucha e como encaixar uma peça na outra.",
          goals: ["Reconhecer as 28 peças do conjunto duplo-seis", "Saber o que é uma bucha", "Encaixar peças nas pontas corretamente"],
          sections: [
            {
              title: "Conhecendo as peças",
              body: [
                "Cada peça tem duas metades, e cada metade tem de zero a seis pontos. O zero também é chamado de branco. A peça é chamada pela combinação: branco e três, dois e cinco, seis e seis.",
                "Cada valor aparece em sete peças. O seis, por exemplo, está no seis e seis, seis e cinco, seis e quatro, seis e três, seis e dois, seis e um e seis e branco.",
                { box: "exemplo", text: "Alguns conjuntos usam cores no lugar dos pontos, uma cor para cada valor. A lógica é a mesma: sete valores e 28 combinações." },
              ],
            },
            {
              title: "O que é uma bucha",
              body: [
                "Bucha (ou peça dupla, ou dobrada, dependendo da região) é a peça com o mesmo valor nas duas metades: branco e branco, um e um, quatro e quatro, seis e seis. São sete buchas no conjunto.",
                "Em muitas mesas, a bucha é colocada atravessada na linha de jogo, mas continua valendo o mesmo número dos dois lados.",
              ],
            },
            {
              title: "Como encaixar uma peça",
              body: [
                { list: [
                  "Olhe os dois valores abertos nas extremidades da fila de peças: essas são as pontas.",
                  "Escolha uma peça da sua mão que tenha pelo menos um valor igual ao de uma ponta.",
                  "Encoste o valor igual na ponta. O outro valor da peça vira a nova ponta.",
                  "Se não tiver peça que encaixe, você passa a vez ou compra do monte, conforme a regra combinada.",
                ], ordered: true },
                { box: "exemplo", text: "As pontas são 3 e 5. Você tem o 5 e 2: encosta o 5 na ponta 5, e a nova ponta passa a ser 2. Agora as pontas são 3 e 2." },
                {
                  sort: {
                    title: "Encaixa ou não? As pontas da mesa são 6 e 2.",
                    labels: ["Encaixa", "Não encaixa"],
                    items: [
                      { text: "6 e 3", answer: 0, why: "Encosta o 6 na ponta 6, e o 3 vira a nova ponta." },
                      { text: "4 e 5", answer: 1, why: "Nenhum dos dois valores é 6 ou 2." },
                      { text: "2 e 2 (bucha)", answer: 0, why: "Encaixa na ponta 2, e a ponta continua 2." },
                      { text: "Branco e 1", answer: 1, why: "Nem o branco nem o 1 aparecem nas pontas." },
                      { text: "5 e 6", answer: 0, why: "Encosta o 6 na ponta 6, e o 5 vira a nova ponta." },
                      { text: "3 e 3 (bucha)", answer: 1, why: "A bucha de 3 só encaixa numa ponta 3." },
                      { text: "2 e branco", answer: 0, why: "Encosta o 2 na ponta 2, e o branco vira a nova ponta." },
                      { text: "1 e 4", answer: 1, why: "Nenhum dos dois valores é 6 ou 2." },
                    ],
                    sticker: { id: "encaixe-certo", min: 7 },
                  },
                },
              ],
            },
            {
              title: "Quantas pessoas jogam",
              body: [
                "O dominó é jogado por duas, três ou quatro pessoas. Não dá para jogar sozinho, porque a partida depende da troca de jogadas entre os participantes.",
                { box: "chave", text: "Só se joga encostando valores iguais. Quem não tem peça que encaixe passa ou compra." },
              ],
            },
          ],
          activity: {
            title: "Treino de encaixe",
            steps: [
              "As pontas da mesa são 4 e 1. Na sua mão estão: 4 e 6, 2 e 3, 1 e 1, 5 e 0.",
              "Quais peças podem ser jogadas, e em qual ponta?",
              "Se você jogar o 4 e 6, quais passam a ser as pontas?",
            ],
            answer: "Podem ser jogadas o 4 e 6 (na ponta 4) e o 1 e 1 (na ponta 1, uma bucha). O 2 e 3 e o 5 e 0 não encaixam agora. Jogando o 4 e 6, as pontas passam a ser 6 e 1.",
          },
          recap: ["O conjunto duplo-seis tem 28 peças, e cada valor aparece em sete delas.", "Bucha é a peça com o mesmo valor nos dois lados.", "Para jogar, encoste um valor igual ao de uma ponta."],
        },
        {
          id: "modalidades-e-pontuacao",
          title: "Modalidades e pontuação",
          summary: "Jogo em dupla, jogo com duas ou três pessoas, compra, batida e pontos.",
          goals: ["Entender o jogo em dupla (parceirado)", "Diferenciar o jogo sem compra e o jogo de compra", "Conhecer as batidas e a pontuação usadas no curso"],
          sections: [
            {
              title: "Com quatro pessoas: o jogo em dupla",
              body: [
                "No jogo parceirado, quatro pessoas formam duas duplas. Os parceiros sentam um de frente para o outro, então cada pessoa tem um adversário de cada lado.",
                "O objetivo não é jogar só para você: é ganhar com a dupla. Para isso:",
                { list: [
                  "Observe quais valores o seu parceiro joga e repete.",
                  "Evite fechar uma ponta de que ele parece precisar, se houver outra jogada segura.",
                  "Pense no resultado da dupla: uma jogada boa para você pode não ser a melhor para a equipe.",
                ] },
                { box: "atencao", text: "A conversa com o parceiro acontece só pelas jogadas. Sinais combinados e dicas escondidas não valem." },
              ],
            },
            {
              title: "Com duas ou três pessoas",
              body: [
                "Com menos gente, sobram peças fora das mãos. Existem dois jeitos principais de jogar:",
                { table: { caption: "Duas modalidades", head: ["Modalidade", "Como funciona"], rows: [
                  ["Sem compra (clássico)", "As peças são distribuídas e quem não tem peça que encaixe passa a vez. Vence quem coloca todas as peças primeiro."],
                  ["Com compra", "Quem não tem peça que encaixe compra do monte até achar uma que sirva ou até o monte acabar. Se acabar, passa a vez."],
                ] } },
                "Se ninguém consegue mais jogar, a partida fica fechada. Nesse caso, o grupo pode decidir que vence quem tem menos pontos nas peças que sobraram na mão.",
              ],
            },
            {
              title: "Batida e pontuação",
              body: [
                "Batida é quando um jogador (ou dupla) termina a rodada colocando a última peça. A pontuação varia muito entre as mesas. Neste curso, vale assim:",
                { table: { caption: "Pontuação usada no curso", head: ["Batida", "Quando acontece", "Pontos"], rows: [
                  ["Simples", "A última peça da mão é colocada", "1"],
                  ["De bucha", "A última peça colocada é uma bucha", "2"],
                  ["Nas duas pontas", "A última peça serve nas duas pontas da mesa", "2"],
                ] } },
                { box: "chave", text: "Antes de cada partida, combinem: quantas peças cada um recebe, se tem compra, o que acontece se fechar, quanto vale cada batida e quem começa." },
              ],
            },
          ],
          activity: {
            title: "Quanto vale?",
            steps: [
              "As pontas são 2 e 2. Sua última peça é o 2 e 2. Que batida é essa?",
              "As pontas são 3 e 5. Sua última peça é o 3 e 5. Que batida é essa?",
              "As pontas são 1 e 4. Sua última peça é o 4 e 6. Que batida é essa?",
            ],
            answer: "1) Batida de bucha (e também nas duas pontas, já que serve dos dois lados): 2 pontos pela regra do curso. 2) Batida nas duas pontas, porque a peça serve tanto no 3 quanto no 5: 2 pontos. 3) Batida simples, porque só serve na ponta 4: 1 ponto.",
          },
          recap: ["No jogo em dupla, você joga para a equipe, não só para você.", "Com duas ou três pessoas, o jogo pode ser sem compra ou com compra.", "Batida de bucha e nas duas pontas valem 2 pontos neste curso."],
        },
      ],
      quiz: {
        sticker: { id: "mestre-do-modulo-2", min: 8 },
        questions: [
          { question: "Como também é chamado o zero no dominó?", options: ["Bucha", "Branco", "Ponta", "Dobrada"], answer: 1, why: "Bucha e dobrada são nomes da peça com o mesmo valor nos dois lados." },
          { question: "Em quantas peças do duplo-seis aparece cada valor?", options: ["Seis", "Oito", "Sete", "Quatro"], answer: 2, why: "O seis, por exemplo, está no 6-6, 6-5, 6-4, 6-3, 6-2, 6-1 e 6-branco." },
          { question: "O que é uma bucha?", options: ["A peça com o branco de um lado.", "A última peça que sobra na mão.", "A peça que serve nas duas pontas ao mesmo tempo.", "A peça com o mesmo valor nas duas metades."], answer: 3, why: "Branco e branco, um e um, quatro e quatro, seis e seis." },
          { question: "As pontas são 3 e 5. Você joga o 5 e 2. Quais passam a ser as pontas?", options: ["3 e 2", "5 e 2", "3 e 5", "2 e 2"], answer: 0, why: "Você encosta o 5 na ponta 5, e o 2 vira a nova ponta." },
          { question: "Você não tem peça que encaixe em nenhuma ponta. O que acontece?", options: ["Joga qualquer peça atravessada.", "Passa a vez ou compra do monte, conforme a regra.", "Perde a rodada na hora e a outra dupla marca ponto.", "Troca uma peça com o parceiro."], answer: 1, why: "Depende da modalidade combinada: sem compra, passa; com compra, compra." },
          { question: "Quantas pessoas podem jogar dominó, segundo a aula?", options: ["De uma a quatro.", "Só quatro, em duplas.", "De duas a seis.", "Duas, três ou quatro."], answer: 3, why: "Não dá para jogar sozinho: a partida depende da troca de jogadas." },
          { question: "No jogo em dupla, como é a comunicação com o parceiro?", options: ["Só pelas jogadas permitidas.", "Por sinais combinados antes da partida.", "Falando baixo na vez dele.", "Mostrando uma peça por baixo da mesa."], answer: 0, why: "Sinais combinados e dicas escondidas não valem." },
          { question: "No jogo de compra, o monte acabou e você não tem peça que encaixe. O que fazer?", options: ["Comprar uma peça do parceiro.", "Jogar uma bucha qualquer.", "Encerrar a rodada.", "Passar a vez."], answer: 3, why: "Compra-se até achar uma peça que sirva ou até o monte acabar; se acabar, passa." },
          { question: "Pela regra do curso, quanto vale a batida de bucha?", options: ["1 ponto", "2 pontos", "3 pontos", "4 pontos"], answer: 1, why: "A batida simples vale 1; a de bucha e a nas duas pontas valem 2." },
          { question: "A partida fechou: ninguém consegue jogar. O que o grupo pode decidir?", options: ["Que vence quem ainda tem mais buchas guardadas na mão.", "Que todos compram do monte de novo.", "Que vence quem tem menos pontos nas peças da mão.", "Que a dupla que começou vence."], answer: 2, why: "É uma das regras a combinar antes da partida." },
        ],
      },
    },
    {
      title: "Fundamentos avançados",
      lessons: [
        {
          id: "contar-as-pecas",
          title: "Contar as peças",
          summary: "A conta das sete peças de cada valor e o que ela revela sobre a mesa.",
          goals: ["Entender a lógica das sete peças de cada valor", "Contar o que já saiu e o que falta", "Saber quando a contagem dá certeza e quando dá só uma estimativa"],
          sections: [
            {
              title: "A lógica da contagem",
              body: [
                "São sete valores (do branco ao seis), e cada um aparece em sete peças. Quem acompanha um valor tenta descobrir quantas dessas sete peças já apareceram.",
                { box: "chave", text: "Peças que você tem + peças daquele valor já jogadas + peças ainda não vistas = 7." },
              ],
            },
            {
              title: "Como contar",
              body: [
                { list: [
                  "Conte quantas peças de cada valor estão na sua mão.",
                  "Durante a partida, guarde de cabeça (ou numa ficha, no treino) quais peças já foram jogadas.",
                  "Some as peças da sua mão com as que já apareceram na mesa.",
                  "Compare com 7: o que falta é o número de peças daquele valor que você ainda não viu.",
                ], ordered: true },
                { box: "exemplo", text: "Você tem duas peças com o seis e já saíram cinco peças com o seis. 2 + 5 = 7: todas foram vistas. Nenhum outro jogador tem peça com seis." },
              ],
            },
            {
              title: "Certeza ou estimativa?",
              body: [
                "Com quatro pessoas e todas as peças distribuídas, a leitura fica mais precisa: as peças estão nas mãos ou na mesa.",
                "Com duas ou três pessoas, sobram peças no monte, que ninguém vê. Aí você trabalha com possibilidades, não com certeza.",
                { box: "atencao", text: "Você só sabe exatamente onde está uma peça quando ela já foi jogada ou está na sua mão. O resto é estimativa, feita com a contagem e com o que os outros jogam." },
              ],
            },
          ],
          activity: {
            title: "Faça a conta",
            steps: [
              "Você tem três peças com o quatro. Já saíram três peças com o quatro. Quantas faltam aparecer?",
              "Você tem uma peça com o branco. Já saíram seis peças com o branco. Alguém mais pode ter branco?",
              "Num jogo de duas pessoas, com monte, faltam duas peças com o cinco. Dá para saber com quem elas estão?",
            ],
            answer: "1) 3 + 3 = 6, falta uma peça com o quatro. 2) 1 + 6 = 7: não, todas as peças com branco foram vistas. 3) Não com certeza: elas podem estar com o adversário ou no monte. Dá para estimar observando se o adversário passa ou compra quando a ponta é cinco.",
          },
          recap: ["Cada valor aparece em sete peças.", "Mão + mesa + não vistas = 7.", "Com monte na mesa, a contagem vira estimativa."],
        },
        {
          id: "pontas-e-parceiro",
          title: "Pontas e jogo para o parceiro",
          summary: "Fazer ponta, segurar ponta e jogar a favor da dupla.",
          goals: ["Entender o que é fazer ponta", "Usar a contagem para segurar uma ponta", "Escolher jogadas que favoreçam o parceiro"],
          sections: [
            {
              title: "Fazer ponta",
              body: [
                "Fazer ponta é conduzir a partida para que uma das pontas fique num valor que você (ou a sua dupla) consegue acompanhar. Se você tem muitas peças de um valor, vale tentar manter esse valor aberto: você continua jogando e os adversários ficam com menos opções.",
                { box: "atencao", text: "Fazer ponta não é só abrir um valor. É preciso ter peças suficientes (você ou o parceiro) para sustentar essa ponta." },
              ],
            },
            {
              title: "Segurar ponta",
              body: [
                "Segurar ponta é manter uma ponta num valor que a sua mão ou a do parceiro ainda acompanha, sem entregar o controle aos adversários. Aqui a contagem é essencial.",
                { table: { caption: "Contagens completas (somam 7)", head: ["Na mesa", "Na sua mão", "Total"], rows: [["5", "2", "7"], ["6", "1", "7"], ["4", "3", "7"]] } },
                "Quando a conta fecha em 7, ninguém mais tem aquele valor. Se a ponta está nele e só você tem, os adversários não conseguem acompanhar.",
              ],
            },
            {
              title: "Jogar para o parceiro",
              body: [
                "No jogo em dupla, a contagem também mostra o que o seu parceiro provavelmente tem. Observe o que ele jogou, quais pontas acompanhou e em quais passou.",
                { list: [
                  "Quando der, mantenha aberta uma ponta que o parceiro mostrou que consegue jogar.",
                  "Evite mudar para um valor em que ele já passou, a não ser que a estratégia peça.",
                  "Se ele estiver perto de bater, ajude: jogue para ele conseguir colocar as últimas peças.",
                  "Uma jogada só não revela a mão inteira dele. Junte várias pistas.",
                ] },
                { box: "chave", text: "Não basta contar: é preciso interpretar. A melhor jogada depende da posição, das suas peças, do parceiro, dos adversários e do objetivo da rodada." },
              ],
            },
          ],
          activity: {
            title: "Leia a mesa",
            steps: [
              "Jogo em dupla. A ponta está em 5. Você tem duas peças com o cinco, e já saíram cinco peças com o cinco.",
              "Os adversários podem acompanhar essa ponta?",
              "Na rodada anterior, o seu parceiro passou quando a ponta era 3. Vale a pena você abrir uma ponta em 3?",
            ],
            answer: "Os adversários não podem acompanhar a ponta 5: 2 + 5 = 7, então só você tem peças com o cinco. Abrir uma ponta em 3 não ajuda a dupla, porque o parceiro mostrou que não tem esse valor; a não ser que você queira travar os adversários e tenha certeza, pela contagem, de que eles também não têm.",
          },
          recap: ["Fazer ponta é manter aberto um valor que a sua dupla acompanha.", "Quando a conta fecha em 7, ninguém mais tem aquele valor.", "No jogo em dupla, jogue a favor do parceiro."],
        },
      ],
      quiz: {
        sticker: { id: "mestre-do-modulo-3", min: 8 },
        questions: [
          { question: "Na contagem de um valor, peças na mão + peças já jogadas + peças não vistas dá quanto?", options: ["6", "14", "28", "7"], answer: 3, why: "Cada valor aparece em sete peças." },
          { question: "Você tem três peças com o quatro e já saíram três. Quantas faltam aparecer?", options: ["Uma", "Três", "Quatro", "Nenhuma"], answer: 0, why: "3 + 3 = 6; falta uma." },
          { question: "Você tem uma peça com o branco e já saíram seis. Alguém mais tem branco?", options: ["Sim, o parceiro tem uma.", "Talvez: uma pode estar no monte.", "Sim, duas delas estão com os adversários da mesa.", "Não: todas as peças com branco foram vistas."], answer: 3, why: "1 + 6 = 7." },
          { question: "Em qual partida a contagem fica mais precisa?", options: ["Com duas pessoas e monte de compra.", "Com quatro pessoas e todas as peças distribuídas.", "Com três pessoas e a compra liberada até o fim do monte.", "Em qualquer partida, do mesmo jeito."], answer: 1, why: "Com todas as peças distribuídas, elas estão nas mãos ou na mesa." },
          { question: "Quando você sabe exatamente onde está uma peça?", options: ["Quando o adversário passa a vez.", "Quando o parceiro repete o mesmo valor duas vezes.", "Quando ela já foi jogada ou está na sua mão.", "Sempre que a conta chega a seis."], answer: 2, why: "O resto é estimativa, feita com a contagem e com o que os outros jogam." },
          { question: "O que é fazer ponta?", options: ["Colocar a bucha atravessada na linha.", "Bater com a última peça servindo nas duas pontas.", "Fechar o jogo para ninguém mais jogar.", "Manter aberto um valor que a dupla acompanha."], answer: 3, why: "Você continua jogando e os adversários ficam com menos opções." },
          { question: "Para fazer ponta, o que a aula diz que é preciso?", options: ["Ter peças suficientes, você ou o parceiro.", "Ter só buchas na mão.", "Ser o primeiro a jogar.", "Estar jogando com compra."], answer: 0, why: "Fazer ponta não é só abrir um valor: é preciso sustentá-lo." },
          { question: "A ponta está em 5. Você tem duas peças com o cinco e já saíram cinco. Os adversários podem acompanhar?", options: ["Sim, se comprarem do monte.", "Não: a conta fecha em 7.", "Sim, se tiverem a bucha de cinco.", "Só se o parceiro deles passar."], answer: 1, why: "2 + 5 = 7: só você tem peças com o cinco." },
          { question: "Seu parceiro passou quando a ponta era 3. O que a aula sugere?", options: ["Abrir o 3 para ele comprar.", "Repetir o 3 até ele jogar.", "Evitar mudar a ponta para 3, salvo estratégia.", "Ignorar: uma jogada revela a mão toda."], answer: 2, why: "Ele mostrou que não tem esse valor." },
          { question: "Qual é a \"regra de ouro\" da aula?", options: ["Jogue sempre as buchas primeiro.", "Feche o jogo o quanto antes.", "Bata sozinho, sem esperar o parceiro.", "Não basta contar: é preciso interpretar."], answer: 3, why: "A melhor jogada depende da posição, das peças, do parceiro, dos adversários e do objetivo." },
        ],
      },
    },
    {
      title: "Prática",
      lessons: [
        {
          id: "hora-de-jogar",
          title: "Hora de jogar",
          summary: "Como organizar o treino, os desafios e o que observar em cada partida.",
          goals: ["Organizar partidas de treino", "Praticar a contagem e o jogo em dupla", "Avaliar as próprias decisões depois de jogar"],
          sections: [
            {
              title: "Como organizar o treino",
              body: [
                { list: [
                  "Preparação: separe um conjunto duplo-seis, organize a mesa e combinem as regras.",
                  "Aquecimento: rodadas curtas para lembrar o encaixe, as buchas, as pontas e a pontuação.",
                  "Partidas: jogue com duas, três e quatro pessoas, incluindo o jogo em dupla.",
                  "Conversa no fim: o que deu certo, o que deu errado e o que dá para melhorar.",
                ], ordered: true },
                { box: "pratica", text: "Antes de começar, faça a lista das regras combinadas: quantas peças cada um recebe, se tem compra, o que acontece se fechar, quanto vale cada batida e quem começa." },
              ],
            },
            {
              title: "Desafios para treinar",
              body: [
                { table: { caption: "Desafios", head: ["Desafio", "Como fazer"], rows: [
                  ["Contagem", "Escolha um valor no começo da partida e diga, a qualquer momento, quantas peças dele já apareceram."],
                  ["Ponta", "Tente fazer e segurar uma ponta durante a rodada."],
                  ["Parceria", "Jogue em dupla priorizando as jogadas que ajudam o parceiro."],
                  ["Explique", "No fim, conte uma decisão que você tomou e por quê."],
                ] } },
              ],
            },
            {
              title: "O que observar no seu jogo",
              body: [
                "Ganhar não é a única medida. Veja se você:",
                { list: [
                  "Reconhece as peças e faz encaixes válidos.",
                  "Explica as regras antes de começar.",
                  "Reconhece as buchas e aplica a pontuação combinada.",
                  "Acompanha a contagem de pelo menos um valor.",
                  "Consegue fazer ou segurar uma ponta.",
                  "Observa o parceiro e joga a favor da dupla.",
                  "Respeita a vez, as regras e as outras pessoas.",
                ] },
                { box: "chave", text: "No dominó, a evolução aparece na qualidade das decisões, não só no placar." },
              ],
            },
          ],
          activity: {
            title: "Partida comentada",
            steps: [
              "Jogue uma partida completa, de preferência em dupla.",
              "Durante a partida, acompanhe a contagem de um valor.",
              "No fim, explique uma decisão estratégica que você tomou.",
              "Se jogou em dupla, conte como observou e ajudou o parceiro.",
            ],
            note: "Não tem resposta certa: o importante é conseguir explicar o raciocínio por trás das jogadas.",
          },
          recap: ["Combine as regras antes de cada partida.", "Treine contagem, ponta e parceria com desafios.", "Avalie as suas decisões, não só o resultado."],
        },
      ],
      quiz: {
        sticker: { id: "mestre-do-modulo-4", min: 8 },
        questions: [
          { question: "Qual é a primeira etapa do treino, segundo a aula?", options: ["Aquecimento com rodadas curtas para relembrar o jogo.", "Partidas com quatro pessoas.", "Preparação: separar as peças e combinar as regras.", "Conversa sobre erros e acertos."], answer: 2, why: "Depois vêm o aquecimento, as partidas e a conversa no fim." },
          { question: "Para que serve o aquecimento do treino?", options: ["Alongar as mãos antes de embaralhar.", "Lembrar encaixe, buchas, pontas e pontuação.", "Sortear as duplas da partida.", "Conferir se o conjunto tem as 28 peças."], answer: 1, why: "São rodadas curtas para relembrar os fundamentos." },
          { question: "No desafio de contagem, o que você faz?", options: ["Conta quantas rodadas cada jogador ganhou na partida.", "Soma os pontos de todas as peças.", "Conta quantas vezes cada um passou.", "Escolhe um valor e diz quantas peças dele já saíram."], answer: 3, why: "A qualquer momento da partida." },
          { question: "No desafio \"Explique\", o que se faz?", options: ["Conta uma decisão que tomou e por quê.", "Explica as regras para quem chega.", "Explica a história do dominó.", "Ensina um iniciante a encaixar."], answer: 0, why: "É no fim da partida." },
          { question: "Qual destas a aula não lista entre as coisas para observar no seu jogo?", options: ["Faz encaixes válidos.", "Acompanha a contagem de um valor.", "Respeita a vez e as regras.", "Quantas partidas venceu seguidas."], answer: 3, why: "Ganhar não é a única medida." },
          { question: "Segundo a aula, onde aparece a evolução no dominó?", options: ["Só no número de vitórias.", "Na qualidade das decisões, não só no placar.", "Na rapidez para jogar cada peça sem pensar muito.", "Na quantidade de buchas na mão."], answer: 1, why: "A avaliação olha as decisões, não só o resultado." },
          { question: "Qual destas é uma das regras para combinar antes de começar?", options: ["A cor da mesa.", "Quem guarda as peças no fim.", "Quanto vale cada batida.", "Quantas partidas por dia."], answer: 2, why: "Também: peças por jogador, compra, o que acontece se fechar e quem começa." },
          { question: "No desafio de parceria, o que se prioriza?", options: ["As jogadas que ajudam o parceiro.", "Bater sozinho o mais rápido possível.", "Fechar o jogo logo no começo.", "Trocar de dupla a cada rodada."], answer: 0, why: "É jogar em dupla pensando na equipe." },
          { question: "Na partida comentada, o que você acompanha durante o jogo?", options: ["O tempo de cada jogada.", "Quantas buchas cada um tem.", "Os pontos de cada adversário.", "A contagem de um valor."], answer: 3, why: "No fim, explica uma decisão e, se jogou em dupla, como ajudou o parceiro." },
          { question: "Na conversa do fim do treino, o que se discute?", options: ["Quem ganhou mais vezes no dia.", "O que deu certo, o que deu errado e o que melhorar.", "As regras novas que vão valer no próximo treino da turma.", "Quem vai trazer o dominó na próxima vez."], answer: 1, why: "É a hora de avaliar as decisões." },
        ],
      },
    },
  ],
};
