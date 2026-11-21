// Curso: Jogos ("Game Academy"). 3 módulos (introdução aos games, design de jogos e desenvolvimento), 5 aulas.
// Segue o padrão de app/foundation-lessons.ts.

import type { CourseContent } from "../foundation-lessons";

export const JOGOS: CourseContent = {
  closing: "Você saiu do lado de quem só joga para o lado de quem cria. Todo grande jogo começou como uma ideia simples num papel. Continue testando, errando e melhorando: é assim que se faz um jogo.",
  modules: [
    {
      title: "Introdução aos games",
      lessons: [
        {
          id: "mundo-dos-games",
          title: "O mundo dos games",
          summary: "Um pouco de história, jogos online e offline, plataformas e gêneros.",
          goals: ["Conhecer um pouco da história dos videogames", "Diferenciar jogos online e offline", "Reconhecer as plataformas e os principais gêneros"],
          sections: [
            {
              title: "Um pouco de história",
              body: [
                "Os videogames começaram como experimentos em laboratórios nos anos 1950 e 1960. Em 1972, Pong (um tênis de mesa bem simples) virou sucesso nos fliperamas. Depois vieram os consoles em casa, os computadores pessoais, os jogos em 3D, a internet e os celulares.",
                "Hoje, os games são uma das maiores indústrias de entretenimento do mundo e empregam programadores, artistas, roteiristas, músicos e muitos outros profissionais.",
              ],
            },
            {
              title: "Online ou offline",
              body: [
                { table: { caption: "Dois jeitos de jogar", head: ["Tipo", "Como é", "Exemplos"], rows: [
                  ["Online", "Precisa de internet. Você joga com pessoas reais de outros lugares.", "Fortnite, Free Fire, Valorant"],
                  ["Offline", "Não precisa de internet. Você joga sozinho ou com quem está ao lado.", "God of War, Red Dead Redemption 2"],
                  ["Os dois", "Tem modo sozinho e modo online.", "Minecraft, GTA V, jogos de futebol"],
                ] } },
                { box: "atencao", text: "Nos jogos online, não passe dados pessoais, senhas ou fotos para desconhecidos, e desconfie de quem oferece itens ou moedas \"de graça\" em troca de login." },
              ],
            },
            {
              title: "Onde se joga",
              body: [
                { list: [
                  "Computador: jogos baixados de lojas oficiais (como Steam ou Microsoft Store) ou jogados direto no navegador.",
                  "Consoles: PlayStation, Xbox e Nintendo Switch, com lojas próprias.",
                  "Celular: a plataforma com mais jogadores no mundo.",
                ] },
                { box: "exemplo", text: "Quem cria um jogo pode publicá-lo em lojas de computador, de console ou de celular. Cada loja tem as suas regras e analisa o jogo antes de aceitar." },
              ],
            },
            {
              title: "Gêneros de jogos",
              body: [
                { table: { caption: "Alguns gêneros", head: ["Gênero", "O que tem", "Exemplos"], rows: [
                  ["Tiro", "Mirar e acertar alvos", "Valorant, Counter-Strike"],
                  ["Terror", "Suspense e sustos", "Resident Evil"],
                  ["Puzzle", "Resolver enigmas e quebra-cabeças", "Tetris"],
                  ["Luta", "Combates entre personagens", "Street Fighter, Mortal Kombat"],
                  ["Estratégia", "Planejar e tomar decisões", "Clash of Clans, League of Legends"],
                  ["Simulação", "Imitar a vida real ou uma atividade", "The Sims"],
                ] } },
                "Muitos jogos misturam gêneros. O Minecraft, por exemplo, tem construção, sobrevivência e aventura.",
              ],
            },
          ],
          activity: {
            title: "Seu raio-x de jogador",
            steps: [
              "Liste três jogos que você joga ou já jogou.",
              "Para cada um, diga a plataforma, se é online ou offline e o gênero.",
              "Qual gênero aparece mais? O que você acha que ele tem de especial?",
            ],
            note: "Não tem resposta errada. O gênero que você mais gosta é uma boa pista do tipo de jogo que você vai querer criar no projeto final.",
          },
          recap: ["Os videogames começaram nos anos 1950 e hoje são uma indústria gigante.", "Online precisa de internet; offline, não.", "Gênero é o tipo de jogo: tiro, puzzle, luta, estratégia e muitos outros."],
        },
      ],
    },
    {
      title: "Design de jogos",
      lessons: [
        {
          id: "elementos-de-um-jogo",
          title: "Os elementos de um jogo",
          summary: "Personagens, cenários, objetivos, regras e o que deixa um jogo divertido.",
          goals: ["Identificar os elementos que todo jogo tem", "Diferenciar regras e mecânicas", "Entender o que deixa um jogo divertido"],
          sections: [
            {
              title: "O que todo jogo tem",
              body: [
                { list: [
                  "Personagens: quem aparece no jogo, controlado pelo jogador ou pelo próprio jogo.",
                  "Cenários: os lugares onde o jogo acontece (uma cidade, uma floresta, outro planeta).",
                  "Objetivo: o que o jogador precisa conseguir (vencer a partida, completar a missão, passar de fase).",
                  "Regras: o que pode e o que não pode ser feito.",
                  "Começo, meio e fim: mesmo jogos sem fim têm partidas com um começo e um encerramento.",
                ] },
              ],
            },
            {
              title: "Regras e mecânicas",
              body: [
                "Regras dizem o que é permitido. Mecânicas são as ações que o jogador faz: pular, atirar, construir, trocar cartas, correr.",
                { box: "exemplo", text: "No futebol de videogame, a regra é \"a bola não pode sair do campo\". As mecânicas são passar, chutar e driblar." },
                { box: "chave", text: "Um bom jogo tem poucas mecânicas fáceis de aprender e difíceis de dominar." },
              ],
            },
            {
              title: "O que deixa um jogo divertido",
              body: [
                { table: { caption: "Ingredientes da diversão", head: ["Ingrediente", "O que é"], rows: [
                  ["Desafio na medida", "Nem fácil demais (fica chato) nem difícil demais (dá raiva). A dificuldade sobe aos poucos."],
                  ["Resposta clara", "O jogo mostra na hora o que aconteceu: um som, uma luz, uma pontuação."],
                  ["Escolhas", "O jogador decide coisas que fazem diferença."],
                  ["Progresso", "Dá para ver que está melhorando: novas fases, itens, níveis."],
                ] } },
                { box: "pratica", text: "Pense num jogo que você largou. Qual desses ingredientes faltou nele?" },
              ],
            },
            {
              title: "Personagens e história",
              body: [
                "Um bom personagem tem um objetivo, um jeito próprio e uma aparência que combina com ele. A história explica por que o jogador está ali e o que está em jogo.",
                { list: ["Quem é o personagem?", "O que ele quer?", "O que o impede (o desafio ou o vilão)?", "Onde a história acontece?"] },
              ],
            },
          ],
          activity: {
            title: "Desmonte um jogo",
            steps: [
              "Escolha um jogo que você conhece bem.",
              "Liste o personagem principal, o cenário, o objetivo e duas regras.",
              "Liste três mecânicas (ações do jogador).",
              "Diga qual ingrediente da diversão ele faz melhor.",
            ],
            answer: "Exemplo com um jogo de corrida: personagem, o piloto; cenário, as pistas; objetivo, chegar em primeiro; regras, não cortar caminho fora da pista e completar as voltas; mecânicas, acelerar, frear e fazer curvas; ingrediente forte, a resposta clara (velocidade, posição e tempo aparecem o tempo todo).",
          },
          recap: ["Todo jogo tem personagens, cenários, objetivo e regras.", "Regras dizem o que pode; mecânicas são o que o jogador faz.", "Diversão vem de desafio na medida, resposta clara, escolhas e progresso."],
        },
        {
          id: "como-um-jogo-e-criado",
          title: "Como um jogo é criado",
          summary: "Etapas, profissionais, ferramentas, testes, atualizações, capa e trailer.",
          goals: ["Conhecer as etapas de criação de um jogo", "Saber quem faz o quê numa equipe", "Conhecer ferramentas para começar"],
          sections: [
            {
              title: "As etapas",
              body: [
                { list: [
                  "Planejamento: a ideia, a história, os personagens e como o jogo vai funcionar.",
                  "Desenvolvimento: programar e montar o jogo, transformando a ideia em algo jogável.",
                  "Arte e som: personagens, cenários, objetos, músicas e efeitos.",
                  "Testes: jogar várias vezes para achar erros (os bugs) e ajustar a dificuldade.",
                  "Lançamento e atualizações: publicar e, depois, corrigir erros e trazer novidades.",
                ], ordered: true },
                { box: "chave", text: "Atualizações mantêm o jogo vivo: corrigem erros e trazem mapas, personagens e modos novos para os jogadores voltarem." },
              ],
            },
            {
              title: "Quem faz o quê",
              body: [
                { table: { caption: "Profissões dos games", head: ["Profissional", "O que faz"], rows: [
                  ["Game designer", "Cria as regras, as fases e o que torna o jogo divertido"],
                  ["Programador", "Escreve o código que faz o jogo funcionar"],
                  ["Artista", "Desenha personagens, cenários e objetos"],
                  ["Roteirista", "Escreve a história e os diálogos"],
                  ["Músico e sonoplasta", "Cria as músicas e os efeitos sonoros"],
                  ["Testador (QA)", "Joga antes do lançamento para encontrar erros"],
                ] } },
              ],
            },
            {
              title: "Ferramentas para criar",
              body: [
                "Motores de jogo (engines) são programas que já trazem física, gráficos, som e controles prontos, para a equipe focar no jogo em si.",
                { list: [
                  "Scratch: gratuito, com blocos coloridos de encaixar. Ótimo para o primeiro jogo, sem precisar digitar código.",
                  "Godot: gratuito e de código aberto, para jogos 2D e 3D.",
                  "Unity e Unreal Engine: muito usados por estúdios profissionais, com versões gratuitas para quem está aprendendo.",
                ] },
                { box: "atencao", text: "Baixe as ferramentas só do site oficial de cada uma. Versões \"crackeadas\" ou de sites desconhecidos podem trazer vírus." },
              ],
            },
            {
              title: "Capa e trailer",
              body: [
                "Antes de jogar, as pessoas veem a capa e o trailer. A capa mostra o clima e o estilo do jogo numa imagem só. O trailer mostra como é jogar: o gráfico, o estilo e se tem modo online.",
                "Antigamente a capa ia numa caixa de plástico com o disco. Hoje ela aparece nas lojas digitais, mas continua sendo o primeiro contato com o jogo.",
              ],
            },
          ],
          activity: {
            title: "Monte a equipe",
            steps: [
              "Imagine que você vai criar um jogo de terror curto com três amigos.",
              "Que funções cada pessoa vai ter?",
              "Em qual etapa vocês acham que vão gastar mais tempo, e por quê?",
            ],
            answer: "Uma divisão possível: uma pessoa no game design e no roteiro, uma na programação, uma na arte e uma no som e nos testes. Em equipes pequenas, todo mundo acumula funções. A etapa que mais demora costuma ser o desenvolvimento junto com os testes, porque cada erro encontrado precisa ser corrigido e testado de novo.",
          },
          recap: ["Planejar, desenvolver, fazer arte e som, testar e atualizar.", "Um jogo junta designer, programador, artista, roteirista, músico e testador.", "Scratch e Godot são gratuitos e ótimos para começar."],
        },
      ],
    },
    {
      title: "Desenvolvimento de jogos",
      lessons: [
        {
          id: "programacao-e-mecanicas",
          title: "Programação básica e mecânicas",
          summary: "Instruções, condições, repetições e variáveis, explicadas com exemplos de jogos.",
          goals: ["Entender o que é programar", "Reconhecer condições, repetições e variáveis num jogo", "Transformar uma regra em instruções"],
          sections: [
            {
              title: "O que é programar",
              body: [
                "Programar é dar instruções ao computador, passo a passo e na ordem certa. O computador não adivinha nada: faz exatamente o que foi mandado.",
                { box: "exemplo", text: "Uma receita de bolo é um programa para pessoas: tem os ingredientes (os dados) e os passos na ordem. Se pular um passo, o bolo dá errado. No código, é igual." },
              ],
            },
            {
              title: "Os blocos básicos",
              body: [
                { table: { caption: "Quatro ideias que aparecem em todo jogo", head: ["Ideia", "O que é", "Exemplo num jogo"], rows: [
                  ["Sequência", "Fazer uma coisa depois da outra", "Mostrar a tela inicial, depois carregar a fase"],
                  ["Condição (se... então...)", "Fazer algo só se uma coisa for verdade", "Se o personagem tocar no espinho, então perde uma vida"],
                  ["Repetição", "Fazer algo várias vezes", "Enquanto o jogo estiver rodando, mover os inimigos"],
                  ["Variável", "Um lugar que guarda um valor que muda", "Pontos, vidas, tempo restante"],
                ] } },
                { box: "chave", text: "Quase toda mecânica de jogo é uma mistura de condições, repetições e variáveis." },
              ],
            },
            {
              title: "Da regra ao código",
              body: [
                "Pegue a regra \"o jogador ganha 10 pontos ao pegar uma moeda e a moeda some\". Em instruções, fica assim:",
                { list: [
                  "Repetir o tempo todo:",
                  "Se o personagem encostar numa moeda, então:",
                  "somar 10 na variável pontos,",
                  "tocar o som de moeda,",
                  "esconder a moeda.",
                ], ordered: true },
                "No Scratch, cada uma dessas linhas é um bloco de encaixar. Em outras ferramentas, vira uma linha de código, mas a lógica é a mesma.",
                { box: "pratica", text: "Abra o Scratch (site oficial scratch.mit.edu, gratuito, funciona no navegador) e faça um personagem andar com as setas do teclado." },
              ],
            },
          ],
          activity: {
            title: "Escreva as instruções",
            steps: [
              "Regra: \"o jogador tem 3 vidas; se cair num buraco, perde uma vida e volta ao começo; com 0 vidas, aparece Fim de Jogo\".",
              "Qual é a variável dessa regra?",
              "Quais são as condições?",
              "Escreva as instruções em passos, como no exemplo da moeda.",
            ],
            answer: "A variável é vidas (começa em 3). As condições são \"se cair num buraco\" e \"se vidas for 0\". Instruções: começar com vidas = 3; repetir o tempo todo: se o personagem cair num buraco, então tirar 1 de vidas e levar o personagem ao começo; se vidas for 0, então mostrar Fim de Jogo e parar.",
          },
          recap: ["Programar é dar instruções em ordem para o computador.", "Condição, repetição e variável formam a maioria das mecânicas.", "Toda regra do jogo pode ser escrita em passos."],
        },
        {
          id: "projeto-meu-jogo",
          title: "Projeto: crie o seu jogo",
          summary: "Do documento de uma página ao protótipo, aos testes e à apresentação.",
          goals: ["Planejar um jogo simples em uma página", "Fazer um protótipo e testar com outras pessoas", "Apresentar o jogo criado"],
          sections: [
            {
              title: "O plano de uma página",
              body: [
                "Antes de abrir qualquer programa, escreva o plano do jogo numa página só:",
                { list: [
                  "Nome do jogo.",
                  "Gênero e plataforma.",
                  "Personagem principal e o que ele quer.",
                  "Objetivo do jogador.",
                  "Três regras.",
                  "Duas ou três mecânicas.",
                  "Como se ganha e como se perde.",
                ] },
                { box: "atencao", text: "Comece pequeno: uma fase só, um personagem e uma mecânica principal. Um jogo pequeno terminado vale mais que um enorme pela metade." },
              ],
            },
            {
              title: "Protótipo e testes",
              body: [
                "Protótipo é uma versão simples para testar a ideia. Pode ser no papel (com cartas, dados e desenhos) ou no Scratch.",
                { list: [
                  "Faça a versão mais simples que dê para jogar.",
                  "Peça para alguém jogar sem você explicar nada.",
                  "Observe em silêncio: onde a pessoa travou, se divertiu ou se irritou?",
                  "Anote, ajuste e teste de novo.",
                ], ordered: true },
                { box: "chave", text: "Quem testa o seu jogo está ajudando. Críticas mostram o que melhorar." },
              ],
            },
            {
              title: "Apresentar o jogo",
              body: [
                "Na apresentação, mostre: a ideia em uma frase, o que o jogador faz, uma partida rápida, o que você mudou depois dos testes e o que faria se tivesse mais tempo.",
                { box: "pratica", text: "Faça uma capa para o seu jogo: uma imagem com o nome e o personagem principal que mostre, de longe, o clima do jogo." },
              ],
            },
          ],
          activity: {
            title: "Meu jogo em uma página",
            steps: [
              "Preencha o plano de uma página com os sete itens.",
              "Faça um protótipo em papel ou no Scratch.",
              "Teste com pelo menos duas pessoas e anote o que elas acharam.",
              "Faça uma mudança a partir dos testes e apresente o jogo.",
            ],
            note: "O que conta é a criatividade, o jogo funcionar e você conseguir explicar as suas escolhas, não o gráfico.",
          },
          recap: ["Planeje o jogo numa página antes de começar.", "Protótipo simples, testes com outras pessoas e ajustes.", "Um jogo pequeno terminado vale mais que um grande pela metade."],
        },
      ],
    },
  ],
};
