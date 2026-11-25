// Curso: Jogos ("Game Academy"). 3 módulos (introdução aos games, design de jogos e desenvolvimento), 3 aulas.
// O conteúdo segue só o material do curso. Segue o padrão de app/foundation-lessons.ts.

import type { CourseContent } from "../foundation-lessons";
import { PROVA_JOGOS } from "./jogos-prova";

export const JOGOS: CourseContent = {
  closing: "Você conheceu o lado de quem cria: jogos online e offline, onde se joga, os tipos de jogos, os elementos de um jogo, as etapas de criação e quem faz cada parte. Todo jogo começa no planejamento: pense na história, nos personagens e em como ele vai funcionar.",
  quiz: PROVA_JOGOS,
  stickers: [
    { id: "online-ou-offline", name: "Conexão certa", how: "Acertou 7 ou mais em \"Online ou offline?\"." },
    { id: "mestre-do-modulo-1", name: "Player 1", how: "Acertou 8 ou mais no quiz do Módulo 1." },
    { id: "mestre-do-modulo-2", name: "Game designer", how: "Acertou 8 ou mais no quiz do Módulo 2." },
    { id: "mestre-do-modulo-3", name: "Level up", how: "Acertou 8 ou mais no quiz do Módulo 3." },
  ],
  modules: [
    {
      title: "Introdução aos games",
      lessons: [
        {
          id: "online-offline-e-onde-jogar",
          title: "Online, offline e onde jogar",
          summary: "A diferença entre jogos online e offline, onde um jogo pode ser jogado e os tipos de jogos.",
          goals: ["Diferenciar jogos online e offline", "Saber onde um jogo pode ser jogado", "Reconhecer os tipos de jogos"],
          sections: [
            {
              title: "Jogo online",
              body: [
                "Jogos online são jogos em que você precisa ter internet. Com ela, você joga com pessoas reais de diferentes lugares, que podem ser de outro estado ou de outro país.",
                { box: "exemplo", text: "Exemplos de jogos online: Fortnite, Free Fire, Valorant e Call of Duty." },
              ],
            },
            {
              title: "Jogo offline e os dois modos",
              body: [
                "Jogos offline são jogos em que você não precisa de internet, mas também não consegue jogar com pessoas reais. E tem jogos em que dá para jogar tanto offline quanto online.",
                { table: { caption: "Exemplos da aula", head: ["Tipo", "Exemplos"], rows: [
                  ["Online", "Fortnite, Free Fire, Valorant e Call of Duty"],
                  ["Offline", "Mad Max, State of Decay, Red Dead Redemption 2 e God of War"],
                  ["Os dois", "GTA V, Fifa e Minecraft"],
                ] } },
                {
                  sort: {
                    title: "Online ou offline?",
                    labels: ["Online", "Offline"],
                    items: [
                      { text: "Fortnite", answer: 0, why: "A aula cita como jogo online: precisa de internet e você joga com pessoas reais." },
                      { text: "Mad Max", answer: 1, why: "A aula cita como jogo offline: não precisa de internet." },
                      { text: "Free Fire", answer: 0, why: "A aula cita como jogo online." },
                      { text: "State of Decay", answer: 1, why: "A aula cita como jogo offline." },
                      { text: "Valorant", answer: 0, why: "A aula cita como jogo online." },
                      { text: "Red Dead Redemption 2", answer: 1, why: "A aula cita como jogo offline." },
                      { text: "Call of Duty", answer: 0, why: "A aula cita como jogo online." },
                      { text: "God of War", answer: 1, why: "A aula cita como jogo offline." },
                    ],
                    sticker: { id: "online-ou-offline", min: 7 },
                  },
                },
              ],
            },
            {
              title: "Onde pode ser jogado",
              body: [
                { list: [
                  "Sites: jogos que rodam no navegador, como o Google Chrome ou o Opera GX. Quem cria pode vender o jogo para eles ou colocar o jogo no site.",
                  "Xbox e PlayStation: você manda o jogo para o site ou o app da PlayStation ou do Xbox, e eles veem se querem e aceitam o jogo, caso ele tenha condições de funcionar no console.",
                  "Computador: jogos que você baixa de um site confiável. Também dá para jogar por serviços como o da própria Xbox, em que você paga para jogar; a maioria precisa de controle e poucos jogos funcionam com teclado.",
                ] },
              ],
            },
            {
              title: "Tipos de jogos",
              body: [
                { table: { caption: "Tipos de jogos e exemplos", head: ["Tipo", "Exemplos"], rows: [
                  ["Tiro (refletem um campo de tiro)", "Fortnite, Call of Duty, Counter-Strike e Valorant"],
                  ["Terror", "Resident Evil e State of Decay"],
                  ["Puzzle", "Quebra-cabeça e Tetris"],
                  ["Luta", "Mortal Kombat e Street Fighter"],
                  ["Estratégia", "League of Legends, Minecraft e Clash of Clans"],
                ] } },
              ],
            },
          ],
          activity: {
            title: "Seu raio-x de jogador",
            steps: [
              "Liste três jogos que você joga ou já jogou.",
              "Para cada um, diga onde você joga (site, console ou computador) e se ele é online, offline ou os dois.",
              "Diga o tipo de cada um: tiro, terror, puzzle, luta ou estratégia.",
              "Qual tipo aparece mais na sua lista?",
            ],
            note: "Não tem resposta errada. O tipo que você mais joga é uma boa pista do jogo que você vai querer planejar no fim do curso.",
          },
          recap: ["Online precisa de internet e junta pessoas reais; offline, não. Alguns jogos têm os dois.", "Um jogo pode ser jogado em sites, no Xbox e na PlayStation ou no computador.", "Os tipos da aula são tiro, terror, puzzle, luta e estratégia."],
        },
      ],
      quiz: {
        sticker: { id: "mestre-do-modulo-1", min: 8 },
        questions: [
          { question: "Qual destes a aula dá como exemplo de jogo que dá para jogar tanto offline quanto online?", options: ["Valorant", "God of War", "GTA V", "Mad Max"], answer: 2, why: "GTA V, Fifa e Minecraft são os exemplos dos dois modos. Valorant é online; God of War e Mad Max, offline." },
          { question: "Pela aula, o que o jogador não consegue fazer num jogo offline?", options: ["Salvar o progresso para continuar depois.", "Jogar com pessoas reais.", "Jogar no computador, só no console.", "Escolher o tipo de jogo que quer."], answer: 1, why: "No offline você não precisa de internet, mas também não joga com pessoas reais." },
          { question: "Na lista de exemplos da aula, em quais grupos aparece o State of Decay?", options: ["Online e tiro.", "Os dois modos e estratégia.", "Offline e luta.", "Offline e terror."], answer: 3, why: "State of Decay é citado entre os offline e entre os de terror, junto com Resident Evil." },
          { question: "Em qual tipo de jogo a aula coloca o Minecraft?", options: ["Estratégia", "Puzzle", "Terror", "Luta"], answer: 0, why: "Os exemplos de estratégia são League of Legends, Minecraft e Clash of Clans." },
          { question: "Qual destes a aula não cita como jogo online?", options: ["Free Fire", "Call of Duty", "Red Dead Redemption 2", "Fortnite"], answer: 2, why: "Red Dead Redemption 2 está nos exemplos de jogo offline." },
          { question: "Que navegadores a aula usa como exemplo de onde rodam jogos em sites?", options: ["Microsoft Edge e Safari.", "Google Chrome e Opera GX.", "Edge e Brave.", "Opera GX e Mozilla Firefox."], answer: 1, why: "A aula cita o Google Chrome e o Opera GX." },
          { question: "Bia fez um jogo e quer lançar na PlayStation. Pela aula, como isso acontece?", options: ["Ela publica sozinha na loja do console, e o jogo aparece na hora para todos.", "Ela vende primeiro o jogo para um navegador, que repassa para a PlayStation.", "Ela manda para o site ou o app da PlayStation, que vê se aceita.", "Ela só consegue lançar se o jogo for offline e não precisar de internet."], answer: 2, why: "A PlayStation e o Xbox veem se querem e aceitam o jogo, caso ele tenha condições de funcionar no console." },
          { question: "Pela aula, como é jogar no computador por serviços como o da Xbox?", options: ["Você paga, e a maioria dos jogos precisa de controle.", "É grátis, e todos os jogos funcionam com teclado.", "Você paga por jogo, e todos funcionam só com teclado.", "É grátis, mas só vale para os jogos offline."], answer: 0, why: "Você paga para poder jogar, e a maioria precisa de controle; poucos funcionam com teclado." },
          { question: "Qual destes a aula coloca entre os jogos de tiro?", options: ["Street Fighter", "Clash of Clans", "Tetris", "Counter-Strike"], answer: 3, why: "Os exemplos de tiro são Fortnite, Call of Duty, Counter-Strike e Valorant." },
          { question: "De onde a aula diz para baixar jogos no computador?", options: ["Do link que um amigo mandar.", "De um site confiável.", "De qualquer site que tenha o jogo grátis.", "Do primeiro anúncio que aparecer."], answer: 1, why: "Os jogos de computador são baixados de um site confiável." },
        ],
      },
    },
    {
      title: "Design de jogos",
      lessons: [
        {
          id: "elementos-de-um-jogo",
          title: "Os elementos de um jogo",
          summary: "Personagens, cenários, objetivos, regras e o começo, meio e fim.",
          goals: ["Identificar os elementos de um jogo", "Diferenciar objetivo e regra", "Saber que todo jogo tem começo, meio e fim"],
          sections: [
            {
              title: "Personagens e cenários",
              body: [
                { list: [
                  "Personagens: são os personagens que aparecem no jogo. Eles podem ser controlados pelo jogador ou pelo próprio jogo.",
                  "Cenários: são os lugares onde o jogo acontece. Podem ser cidades, florestas ou até outros planetas.",
                ] },
              ],
            },
            {
              title: "Objetivos e regras",
              body: [
                { list: [
                  "Objetivos: todo jogo precisa ter algum objetivo, como vencer uma partida, completar uma missão ou passar de fase.",
                  "Regras: são as regras que dizem o que pode ou não pode fazer dentro de um jogo.",
                ] },
                { box: "chave", text: "Objetivo é o que o jogador precisa conseguir. Regra é o que ele pode ou não pode fazer para chegar lá." },
              ],
            },
            {
              title: "Começo, meio e fim",
              body: [
                "O estilo do jogo pode ser offline, online ou os dois. Seja qual for, um jogo precisa ter começo, meio e fim!",
              ],
            },
          ],
          activity: {
            title: "Desmonte um jogo",
            steps: [
              "Escolha um jogo que você conhece bem.",
              "Quem são os personagens? Quais você controla e quais o jogo controla?",
              "Qual é o cenário e qual é o objetivo?",
              "Escreva duas regras: uma do que pode e uma do que não pode.",
              "Como é o começo, o meio e o fim de uma partida?",
            ],
            answer: "Exemplo com o Fifa: os personagens são os jogadores do seu time, que você controla, e os do time adversário, que o jogo controla no modo offline; o cenário é o estádio; o objetivo é vencer a partida; uma regra do que pode é chutar a bola com os pés, e uma do que não pode é pegar a bola com a mão (só o goleiro pode); o começo é o apito inicial, o meio são os dois tempos e o fim é o apito final.",
          },
          recap: ["Personagens são controlados pelo jogador ou pelo próprio jogo.", "Cenário é onde o jogo acontece; objetivo é o que se precisa conseguir; regras dizem o que pode ou não.", "Offline, online ou os dois: todo jogo precisa de começo, meio e fim."],
        },
      ],
      quiz: {
        sticker: { id: "mestre-do-modulo-2", min: 8 },
        questions: [
          { question: "Num jogo, os inimigos andam e atacam sozinhos, sem ninguém controlar. Pela aula, o que eles são?", options: ["Cenários, porque fazem parte do lugar da fase.", "Regras, porque dizem até onde o jogador pode ir.", "Objetivos, porque precisam ser vencidos.", "Personagens controlados pelo próprio jogo."], answer: 3, why: "Personagens podem ser controlados pelo jogador ou pelo próprio jogo." },
          { question: "Qual é a diferença entre regra e objetivo, pela aula?", options: ["Regra diz o que pode ou não fazer; objetivo é o que precisa conseguir.", "Regra é o que precisa conseguir; objetivo diz o que pode ou não fazer.", "Regra vale só no online; objetivo vale só no offline.", "Não há diferença: as duas palavras querem dizer o mesmo."], answer: 0, why: "Objetivos são coisas como vencer, completar uma missão ou passar de fase. Regras dizem o que pode ou não pode." },
          { question: "\"Passar de fase\" é exemplo de qual elemento de um jogo?", options: ["Regra", "Cenário", "Objetivo", "Personagem"], answer: 2, why: "A aula dá três exemplos de objetivo: vencer uma partida, completar uma missão ou passar de fase." },
          { question: "No plano de um jogo está escrito: \"o robô não pode tocar na água\". Que elemento é esse?", options: ["Objetivo", "Regra", "Cenário", "Estilo"], answer: 1, why: "Diz o que não pode ser feito dentro do jogo, então é uma regra." },
          { question: "Quais exemplos de cenário a aula dá?", options: ["Menus, botões e telas de carregamento.", "Músicas, sons e efeitos.", "Placar, vidas e tempo de partida.", "Cidades, florestas e até outros planetas."], answer: 3, why: "Cenários são os lugares onde o jogo acontece." },
          { question: "Qual destes a aula dá como exemplo de objetivo?", options: ["Completar uma missão.", "Escolher a roupa do personagem.", "Baixar o jogo de um site confiável.", "Jogar com pessoas de outro país."], answer: 0, why: "Vencer uma partida, completar uma missão ou passar de fase são os exemplos de objetivo." },
          { question: "Ao falar de estilo, o que a aula diz que todo jogo precisa ter?", options: ["Modo online e offline ao mesmo tempo.", "Começo, meio e fim.", "Pelo menos três tipos misturados.", "Um personagem que conversa com o jogador."], answer: 1, why: "O estilo pode ser offline, online ou os dois, mas o jogo precisa ter começo, meio e fim." },
          { question: "Pela aula, como pode ser o estilo de um jogo?", options: ["Só online, para jogar com pessoas reais.", "Só offline, para ter começo, meio e fim.", "Offline, online ou os dois.", "Online, desde que seja um jogo de tiro."], answer: 2, why: "O estilo pode ser tanto offline quanto online, ou mesmo os dois." },
          { question: "Segundo a aula, quem pode controlar um personagem?", options: ["Só o jogador.", "Só outro jogador, numa partida online.", "Só os testadores, antes do lançamento.", "O jogador ou o próprio jogo."], answer: 3, why: "Personagens podem ser controlados pelo jogador ou pelo próprio jogo." },
          { question: "O plano diz: \"um robô explora uma cidade abandonada para encontrar a saída\". O que é a cidade abandonada?", options: ["O cenário.", "O objetivo.", "Uma regra.", "Um personagem."], answer: 0, why: "Cenário é o lugar onde o jogo acontece. Encontrar a saída é o objetivo, e o robô é o personagem." },
        ],
      },
    },
    {
      title: "Desenvolvimento de jogos",
      lessons: [
        {
          id: "como-um-jogo-e-criado",
          title: "Como um jogo é criado",
          summary: "Programação, motores de jogos, etapas, profissionais, atualizações, capa e trailer.",
          goals: ["Saber do que um jogo precisa para funcionar", "Conhecer as etapas de criação e quem faz o quê", "Entender por que atualizações, capa e trailer importam"],
          sections: [
            {
              title: "Do que um jogo precisa",
              body: [
                { list: [
                  "Programação: é toda a parte de sistemas que programam os objetos, os personagens, a física, os sons e as plataformas.",
                  "Unreal Engine e Unity: são motores de jogos, plataformas de software completas que trazem as ferramentas necessárias para criar, programar, animar, simular física e renderizar jogos eletrônicos.",
                ] },
              ],
            },
            {
              title: "As etapas",
              body: [
                { list: [
                  "Planejamento: antes de criar um jogo, é preciso pensar na história, nos personagens e em como ele vai funcionar.",
                  "Desenvolvimento: é quando os criadores começam a montar o jogo e fazer as ideias virarem realidade.",
                  "Criação visual: é a parte em que são feitos os personagens, os cenários e os objetos que aparecem no jogo e nas cenas.",
                ], ordered: true },
              ],
            },
            {
              title: "Quem faz o jogo",
              body: [
                { table: { caption: "Profissionais dos jogos", head: ["Profissional", "O que faz"], rows: [
                  ["Programadores", "Criam os códigos e fazem o jogo funcionar"],
                  ["Designers", "Criam as ideias, os personagens, as fases e os cenários"],
                  ["Testadores", "Jogam antes do lançamento para encontrar erros e problemas"],
                ] } },
              ],
            },
            {
              title: "Atualizações",
              body: [
                "Atualizações são mudanças feitas depois que o jogo é lançado. Elas podem trazer novidades, novos personagens, mapas e correções de erros.",
                { box: "atencao", text: "Atualizações são necessárias porque as pessoas vão querer jogar o jogo atualizado, com coisas novas. Se não, o jogo fica enjoativo e o desempenho cai." },
              ],
            },
            {
              title: "Capa e trailer",
              body: [
                "Além do próprio jogo, a capa e o trailer também chamam atenção e são necessários: sem a capa, as pessoas não saberiam qual é o jogo; sem o trailer, não saberiam como ele é.",
                { list: [
                  "Trailer: mostra para quem está vendo como é o jogo, qual é o estilo, o gráfico e se dá para jogar online ou offline.",
                  "Capa: antigamente, os jogos eram em discos e vinham numa caixa de plástico de CD, DVD ou Blu-Ray, com fotos do jogo, dos cenários e informações. O tempo passou, e agora temos só as fotos dos jogos pela internet.",
                ] },
              ],
            },
          ],
          activity: {
            title: "Planeje o seu jogo",
            steps: [
              "Dê um nome ao jogo e escolha o tipo: tiro, terror, puzzle, luta ou estratégia.",
              "Diga se ele vai ser online, offline ou os dois, e onde vai ser jogado.",
              "Descreva os personagens, o cenário, o objetivo e duas regras.",
              "Diga quem da equipe faria o quê: programar, criar personagens e fases, testar.",
              "Descreva como seriam a capa e o trailer.",
            ],
            note: "No curso, o que conta é a criatividade, o funcionamento do jogo e a participação nas atividades.",
          },
          recap: ["Um jogo precisa de programação, e motores como Unreal Engine e Unity trazem as ferramentas.", "Planejamento, desenvolvimento e criação visual, com programadores, designers e testadores.", "Atualizações mantêm o jogo novo; capa e trailer mostram qual é o jogo e como ele é."],
        },
      ],
      quiz: {
        sticker: { id: "mestre-do-modulo-3", min: 8 },
        questions: [
          { question: "Pela aula, do que cuida a programação de um jogo?", options: ["Só das cores dos personagens e dos cenários que aparecem nas fases.", "Dos sistemas de objetos, personagens, física, sons e plataformas.", "Da capa e do trailer que mostram o jogo antes do lançamento.", "Da escolha de quem vai testar o jogo e procurar os erros."], answer: 1, why: "Programação é toda a parte de sistemas que programam objetos, personagens, física, sons e plataformas." },
          { question: "O que são Unreal Engine e Unity?", options: ["Lojas digitais onde os jogos prontos são vendidos e atualizados.", "Consoles de videogame concorrentes do Xbox e da PlayStation.", "Navegadores próprios para rodar jogos em sites, como o Opera GX.", "Motores de jogos, plataformas com ferramentas para criar jogos."], answer: 3, why: "São motores de jogos: plataformas de software completas para criar, programar, animar, simular física e renderizar." },
          { question: "Em que etapa se pensa na história, nos personagens e em como o jogo vai funcionar?", options: ["Planejamento", "Desenvolvimento", "Criação visual", "Atualização"], answer: 0, why: "O planejamento vem antes de criar o jogo." },
          { question: "Fazer os personagens, os cenários e os objetos que aparecem no jogo e nas cenas é qual etapa?", options: ["Planejamento", "Desenvolvimento", "Criação visual", "Teste"], answer: 2, why: "Na criação visual são feitos os personagens, os cenários e os objetos." },
          { question: "Quem joga antes do lançamento para encontrar erros e problemas?", options: ["Os programadores", "Os designers", "Os jogadores online", "Os testadores"], answer: 3, why: "Testadores jogam antes do lançamento justamente para achar erros e problemas." },
          { question: "Pela aula, quem cria as ideias, os personagens, as fases e os cenários?", options: ["Os programadores", "Os designers", "Os testadores", "Quem faz o trailer"], answer: 1, why: "Designers criam ideias, personagens, fases e cenários. Programadores criam os códigos." },
          { question: "Segundo a aula, o que as atualizações podem trazer?", options: ["Só correções de erros, sem novidades.", "Uma capa nova para a caixa do disco.", "Novidades, personagens, mapas e correções de erros.", "Um motor de jogo novo para o jogador instalar."], answer: 2, why: "Atualizações são mudanças depois do lançamento: novidades, novos personagens, mapas e correções." },
          { question: "Pela aula, o que acontece com um jogo que não recebe atualizações?", options: ["Fica enjoativo e o desempenho cai.", "Deixa de funcionar no modo offline.", "Perde a capa nas lojas da internet.", "Passa a precisar de controle para jogar."], answer: 0, why: "As pessoas querem jogar o jogo atualizado, com coisas novas. Sem isso, ele fica enjoativo e o desempenho cai." },
          { question: "Segundo a aula, o que o trailer mostra?", options: ["Só a história e os nomes dos personagens principais.", "As regras e o objetivo de cada fase do jogo.", "Quem programou, quem desenhou e quem testou o jogo.", "O estilo, o gráfico e se tem modo online ou offline."], answer: 3, why: "O trailer mostra como é o jogo: o estilo, o gráfico e se tem como jogar online ou offline." },
          { question: "Quando os criadores começam a montar o jogo e fazer as ideias virarem realidade, é qual etapa?", options: ["Planejamento", "Desenvolvimento", "Criação visual", "Atualização"], answer: 1, why: "O desenvolvimento vem depois do planejamento: é quando o jogo começa a ser montado." },
        ],
      },
    },
  ],
};
