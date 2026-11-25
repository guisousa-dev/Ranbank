// Curso: Futebol. 3 módulos (futebol de campo, futsal e futebol de areia), 9 aulas.
// O conteúdo segue só o material do curso. Segue o padrão de app/foundation-lessons.ts.

import type { CourseContent } from "../foundation-lessons";
import { PROVA_FUTEBOL } from "./futebol-prova";

export const FUTEBOL: CourseContent = {
  note: "O treino deve respeitar a idade, o condicionamento e o nível de cada pessoa. As regras citadas são as do formato adulto mais comum; campeonatos podem ter regulamento próprio.",
  closing: "Agora você conhece as regras, as posições, os fundamentos e as táticas no campo, na quadra e na areia. O próximo passo é jogar: com disciplina, respeito e trabalho em equipe.",
  quiz: PROVA_FUTEBOL,
  stickers: [
    { id: "ataque-ou-defesa", name: "Leitura de jogo", how: "Acertou 8 ou mais em \"Ataque ou defesa?\"." },
    { id: "mestre-do-modulo-1", name: "Craque de campo", how: "Acertou 8 ou mais no quiz do Módulo 1." },
    { id: "mestre-do-modulo-2", name: "Rei da quadra", how: "Acertou 8 ou mais no quiz do Módulo 2." },
    { id: "mestre-do-modulo-3", name: "Pé na areia", how: "Acertou 8 ou mais no quiz do Módulo 3." },
  ],
  modules: [
    {
      title: "Futebol de campo",
      lessons: [
        {
          id: "historia-e-regras",
          title: "História e regras do futebol",
          summary: "De onde veio o futebol, como é uma partida e as regras principais.",
          goals: ["Conhecer um pouco da história do futebol", "Saber como funciona uma partida", "Entender gol, impedimento, faltas, cartões e reinícios"],
          sections: [
            {
              title: "Um pouco de história",
              body: [
                "O futebol é um esporte coletivo jogado por duas equipes, normalmente com 11 jogadores cada, contando o goleiro. O objetivo é marcar gols na meta adversária e impedir que o adversário marque.",
                "O futebol moderno foi organizado na Inglaterra no século XIX. Em 1863, a criação da Football Association ajudou a padronizar as regras. O esporte chegou ao Brasil no fim do século XIX e cresceu em clubes, escolas e comunidades, virando uma das modalidades mais populares do país.",
                { image: "/images/fundacao/aulas/futebol/historia-partida-antiga.webp", alt: "Ilustração em estilo de foto antiga, em tons de sépia: uma partida de futebol na Inglaterra do começo do século XX, num campo de terra. Um jogador de camisa escura conduz a bola diante de um defensor de camisa clara, o goleiro espera perto da trave e a arquibancada está lotada. Ao fundo, casas com chaminés e uma bandeira do Reino Unido." },
                { box: "chave", text: "O futebol desenvolve resistência, coordenação motora, velocidade, agilidade, raciocínio tático e trabalho em equipe, e ensina disciplina e respeito." },
              ],
            },
            {
              title: "Como é uma partida",
              body: [
                { list: [
                  "Duração: dois tempos de 45 minutos, mais os acréscimos que a arbitragem decidir.",
                  "Jogadores: até 11 por equipe em campo, contando o goleiro.",
                  "Mínimo: a partida não começa nem continua se uma equipe tiver menos de 7 jogadores.",
                ] },
                "O árbitro aplica as regras e controla a partida, com a ajuda dos assistentes.",
                { image: "/images/fundacao/aulas/futebol/como-e-uma-partida.webp", alt: "Infográfico em quatro quadros. Duração da partida: dois tempos de 45 minutos, mais os acréscimos que a arbitragem decidir, com um cronômetro marcando 45:00. Jogadores em campo: até 11 jogadores por equipe, contando o goleiro, com um time abraçado. Mínimo: a partida não começa nem continua se uma equipe tiver menos de 7 jogadores. Árbitro e assistentes: o árbitro aplica as regras e controla a partida, com a ajuda dos assistentes, que seguram bandeiras." },
              ],
            },
            {
              title: "As regras principais",
              body: [
                { table: { caption: "Regras que todo jogador precisa saber", head: ["Regra", "O que é"], rows: [
                  ["Gol", "A bola passa inteira da linha do gol, entre as traves e abaixo do travessão, sem infração."],
                  ["Impedimento", "O jogador participa ativamente de uma jogada estando em posição irregular no momento do passe de um companheiro."],
                  ["Falta", "Uma infração prevista nas regras, como empurrar, segurar ou dar uma entrada perigosa."],
                  ["Cartão amarelo", "Advertência. Dois amarelos no mesmo jogo viram vermelho."],
                  ["Cartão vermelho", "Expulsão: o jogador sai e a equipe fica com um a menos."],
                  ["Lateral", "A bola sai pela linha lateral e é reposta com as mãos."],
                  ["Escanteio", "A bola sai pela linha de fundo depois de tocar por último num defensor, sem gol."],
                  ["Tiro de meta", "A bola sai pela linha de fundo depois de tocar por último num atacante, sem gol."],
                ] } },
                { image: "/images/fundacao/aulas/futebol/regras-principais.webp", alt: "Infográfico \"Futebol de campo: as regras principais\", com uma foto para cada regra. Gol: a bola passa inteira da linha do gol, entre as traves e abaixo do travessão, sem infração. Falta: uma infração prevista nas regras, como empurrar, segurar ou dar uma entrada perigosa. Cartão amarelo: advertência; dois amarelos no mesmo jogo viram vermelho. Cartão vermelho: expulsão; o jogador sai e a equipe fica com um a menos. Lateral: a bola sai pela linha lateral e é reposta com as mãos. Escanteio: a bola sai pela linha de fundo depois de tocar por último num defensor, sem gol. Tiro de meta: a bola sai pela linha de fundo depois de tocar por último num atacante, sem gol." },
                { box: "atencao", text: "No impedimento, o que vale é a posição no momento do passe do companheiro." },
              ],
            },
          ],
          activity: {
            title: "O que o árbitro marca?",
            steps: [
              "Um zagueiro afasta a bola, que sai pela linha de fundo do próprio campo.",
              "A bola sai pela linha lateral depois de tocar num atacante.",
              "Um jogador recebe o segundo cartão amarelo no jogo.",
            ],
            answer: "1) Escanteio para o adversário, porque o último toque foi de um defensor. 2) Lateral para a equipe que defendia, cobrado com as mãos. 3) Ele recebe o vermelho e é expulso.",
          },
          recap: ["O futebol moderno foi organizado na Inglaterra e chegou ao Brasil no fim do século XIX.", "Partida de 2 tempos de 45 minutos, com até 11 jogadores por equipe e mínimo de 7.", "Impedimento se confere no momento do passe."],
        },
        {
          id: "posicoes-e-funcoes",
          title: "Posições e funções",
          summary: "O que faz cada jogador em campo, do goleiro ao centroavante.",
          goals: ["Conhecer as posições do futebol de campo", "Entender a função de cada uma", "Saber o que cada posição precisa desenvolver"],
          sections: [
            {
              title: "Goleiro e zagueiros",
              body: [
                { list: [
                  "Goleiro: é responsável por defender a meta. Principais habilidades: reflexos, posicionamento, agilidade, comunicação e reposição de bola.",
                  "Zagueiros: protegem principalmente a região central da defesa. Precisam desenvolver marcação, antecipação, cobertura defensiva, jogo aéreo e saída de bola.",
                ] },
              ],
            },
            {
              title: "Laterais e volantes",
              body: [
                { list: [
                  "Laterais: atuam pelos lados do campo e ajudam tanto na defesa quanto no ataque. Precisam desenvolver velocidade, resistência, cruzamentos, marcação e apoio ofensivo.",
                  "Volantes: protegem a defesa, recuperam bolas e ajudam na saída de jogo.",
                ] },
              ],
            },
            {
              title: "Meias, pontas e centroavante",
              body: [
                { list: [
                  "Meias: organizam as jogadas ofensivas e ligam o meio-campo ao ataque.",
                  "Pontas: atuam pelos lados do ataque, usando velocidade, dribles e cruzamentos.",
                  "Centroavante: procura finalizar as jogadas e marcar gols.",
                ] },
              ],
            },
          ],
          activity: {
            title: "Quem faz o quê?",
            steps: [
              "Quem tem como função principal proteger a defesa e recuperar bolas?",
              "Quem ajuda na defesa e no ataque correndo pelos lados do campo?",
              "Quem organiza as jogadas ofensivas e liga o meio-campo ao ataque?",
              "Quem procura finalizar as jogadas e marcar gols?",
            ],
            answer: "1) O volante. 2) Os laterais (no ataque, os pontas também atuam pelos lados). 3) O meia. 4) O centroavante.",
          },
          recap: ["Goleiro defende a meta; zagueiros protegem o centro da defesa.", "Laterais ajudam na defesa e no ataque; volantes protegem a defesa e recuperam bolas.", "Meias organizam, pontas atacam pelos lados e o centroavante finaliza."],
        },
        {
          id: "fundamentos-tecnicos",
          title: "Fundamentos técnicos",
          summary: "Passe, domínio, condução, drible, finalização e cabeceio.",
          goals: ["Conhecer os fundamentos do futebol", "Diferenciar passe, domínio e condução", "Saber as formas de finalizar"],
          sections: [
            {
              title: "Passe e domínio",
              body: [
                "Passe é o movimento usado para enviar a bola a um companheiro. Tipos: passe curto, passe longo, passe rasteiro, passe aéreo e passe de primeira.",
                "Domínio é controlar a bola recebida. O jogador pode usar o pé, a coxa, o peito e outras partes do corpo permitidas pelas regras.",
                { box: "chave", text: "Passe é enviar a bola; domínio é controlar a bola que chega." },
              ],
            },
            {
              title: "Condução e drible",
              body: [
                "Condução é o deslocamento com a bola controlada. O jogador deve manter a bola perto o suficiente para não perder a posse.",
                "Drible é usado para superar um adversário com movimentos técnicos.",
              ],
            },
            {
              title: "Finalização e cabeceio",
              body: [
                "Finalização é a tentativa de marcar um gol. Pode ser feita com:",
                { list: ["Parte interna do pé.", "Peito do pé.", "Parte externa do pé.", "Cabeceio.", "Voleio."] },
                "O cabeceio é jogar a bola com a cabeça para passar, finalizar ou afastar.",
                { box: "atencao", text: "O cabeceio deve ser ensinado com atenção à segurança e à idade dos participantes." },
              ],
            },
          ],
          activity: {
            title: "Passe entre duplas",
            steps: [
              "Com um parceiro, troque 20 passes curtos e rasteiros.",
              "Na volta, domine a bola antes de passar. Depois tente o passe de primeira.",
              "Anote: qual foi mais difícil, dominar antes ou passar de primeira? Por quê?",
            ],
            note: "Não tem resposta errada: o importante é perceber a diferença entre controlar a bola recebida e enviá-la direto.",
          },
          recap: ["Passe envia a bola; domínio controla a bola recebida.", "Condução é deslocar-se com a bola controlada; drible é superar o adversário.", "Finaliza-se com a parte interna, o peito ou a parte externa do pé, de cabeça ou de voleio."],
        },
        {
          id: "sistemas-e-principios",
          title: "Sistemas táticos e princípios de jogo",
          summary: "4-4-2, 4-3-3, 4-2-3-1 e 3-5-2, como atacar, defender e fazer a transição.",
          goals: ["Ler os números de um sistema tático", "Comparar os sistemas da aula", "Entender os princípios de ataque, defesa e transição"],
          sections: [
            {
              title: "Os sistemas",
              body: [
                "Os números contam os jogadores de trás para a frente: defensores, meio-campistas e atacantes.",
                { table: { caption: "Sistemas táticos", head: ["Sistema", "Como é", "Características"], rows: [
                  ["4-4-2", "4 defensores, 4 meio-campistas e 2 atacantes", "Equilíbrio entre defesa e ataque, boa organização coletiva e dois atacantes"],
                  ["4-3-3", "4 defensores, 3 meio-campistas e 3 atacantes", "Usa os lados do campo, dá amplitude ofensiva e permite pressionar a saída adversária"],
                  ["4-2-3-1", "4 defensores, 2 meio-campistas de proteção, 3 mais avançados no meio e 1 centroavante", "Proteção da defesa, apoio à criação e flexibilidade tática"],
                  ["3-5-2", "3 defensores, 5 no meio-campo e 2 atacantes", "Ocupa bem o meio-campo, os alas participam do ataque e precisa de boa cobertura defensiva"],
                ] } },
              ],
            },
            {
              title: "Princípios de ataque e de defesa",
              body: [
                { table: { caption: "Princípios táticos", head: ["Ataque", "Defesa"], rows: [
                  ["Criar espaços", "Proteger a meta"],
                  ["Fazer ultrapassagens", "Fechar linhas de passe"],
                  ["Trocar passes", "Marcar adversários"],
                  ["Usar a largura do campo", "Fazer coberturas"],
                  ["Movimentar-se sem a bola", "Recuperar a posse da bola"],
                ] } },
                {
                  sort: {
                    title: "Ataque ou defesa?",
                    labels: ["Ataque", "Defesa"],
                    items: [
                      { text: "Fechar linhas de passe.", answer: 1, why: "É um princípio de defesa: tirar as opções de passe do adversário." },
                      { text: "Usar a largura do campo.", answer: 0, why: "É um princípio de ataque." },
                      { text: "Fazer coberturas.", answer: 1, why: "É um princípio de defesa." },
                      { text: "Fazer ultrapassagens.", answer: 0, why: "É um princípio de ataque." },
                      { text: "Recuperar a posse da bola.", answer: 1, why: "É um princípio de defesa." },
                      { text: "Criar espaços.", answer: 0, why: "É um princípio de ataque." },
                      { text: "Marcar adversários.", answer: 1, why: "É um princípio de defesa." },
                      { text: "Movimentar-se sem a bola.", answer: 0, why: "É um princípio de ataque." },
                      { text: "Proteger a meta.", answer: 1, why: "É um princípio de defesa." },
                      { text: "Trocar passes.", answer: 0, why: "É um princípio de ataque." },
                    ],
                    sticker: { id: "ataque-ou-defesa", min: 8 },
                  },
                },
              ],
            },
            {
              title: "Transições",
              body: [
                "Transição ofensiva: acontece quando a equipe recupera a bola e começa a atacar.",
                "Transição defensiva: acontece quando a equipe perde a bola e precisa reorganizar a defesa.",
              ],
            },
          ],
          activity: {
            title: "Escolha o sistema",
            steps: [
              "O seu time tem dois centroavantes muito bons e quer equilíbrio. Que sistema faz sentido?",
              "O seu time quer usar os lados do campo e pressionar a saída de bola do adversário. E agora?",
              "Qual sistema ocupa bem o meio-campo, mas precisa de boa cobertura defensiva?",
            ],
            answer: "1) O 4-4-2, que tem dois atacantes e equilíbrio entre defesa e ataque. 2) O 4-3-3, que usa os lados do campo e permite pressionar a saída. 3) O 3-5-2.",
          },
          recap: ["Os números do sistema contam defensores, meio-campistas e atacantes.", "No ataque, criar espaços e trocar passes; na defesa, proteger a meta e marcar.", "Transição é a hora de recuperar ou perder a bola."],
        },
        {
          id: "preparacao-e-treino",
          title: "Preparação física e treino",
          summary: "Capacidades físicas, um exemplo de treino, exercícios, arbitragem e disciplina.",
          goals: ["Conhecer as capacidades físicas do futebol", "Montar um treino simples", "Entender o papel da arbitragem e da disciplina"],
          sections: [
            {
              title: "Capacidades físicas",
              body: [
                { table: { caption: "Capacidades físicas no futebol", head: ["Capacidade", "Para que serve"], rows: [
                  ["Resistência", "Sustentar os esforços durante a partida"],
                  ["Força", "Disputas de bola, saltos e acelerações"],
                  ["Velocidade", "Executar movimentos rapidamente"],
                  ["Agilidade", "Facilitar mudanças de direção"],
                  ["Potência", "Ações explosivas, como saltos e arrancadas"],
                  ["Mobilidade", "Executar movimentos com amplitude adequada"],
                ] } },
              ],
            },
            {
              title: "Exemplo de treino",
              body: [
                { table: { caption: "Exemplo de treino", head: ["Tempo", "Atividade"], rows: [
                  ["10 min", "Aquecimento"],
                  ["10 min", "Passes"],
                  ["10 min", "Condução e dribles"],
                  ["10 min", "Finalizações"],
                  ["15 min", "Jogo reduzido"],
                  ["5 min", "Recuperação e avaliação"],
                ] } },
                "Outros exercícios: passe entre duplas, condução entre cones, finalização após passe, jogo de posse de bola, situações de ataque contra defesa e jogo coletivo com objetivos táticos.",
                { box: "atencao", text: "O treinador precisa planejar as atividades de acordo com a idade, o condicionamento e o nível técnico dos jogadores." },
              ],
            },
            {
              title: "Arbitragem e disciplina",
              body: [
                "O árbitro é responsável por aplicar as regras e controlar a partida. É importante conhecer: impedimento, faltas, pênaltis, tiros livres, cartões, escanteios, laterais e tiros de meta.",
                { box: "chave", text: "A disciplina envolve respeito aos adversários, aos companheiros e à equipe de arbitragem." },
              ],
            },
          ],
          activity: {
            title: "Monte o seu treino",
            steps: [
              "Você tem 45 minutos e oito pessoas. Monte um treino com aquecimento, uma parte técnica, jogo reduzido e recuperação.",
              "Diga quantos minutos vai dar para cada parte.",
              "Escolha um dos exercícios da aula para a parte técnica.",
            ],
            answer: "Um exemplo: 10 minutos de aquecimento; 10 minutos de passe entre duplas; 20 minutos de jogo reduzido; 5 minutos de recuperação e avaliação. Qualquer treino com as partes e o tempo certos vale.",
          },
          recap: ["Resistência, força, velocidade, agilidade, potência e mobilidade são as capacidades físicas.", "O treino vai do aquecimento ao jogo reduzido, com recuperação e avaliação no fim.", "O árbitro aplica as regras; disciplina é respeito a todos."],
        },
      ],
      quiz: {
        sticker: { id: "mestre-do-modulo-1", min: 8 },
        questions: [
          { question: "Pela aula, a partida não começa nem continua se uma equipe tiver menos de quantos jogadores?", options: ["9", "5", "7", "8"], answer: 2, why: "Cada equipe pode ter até 11 em campo, mas com menos de 7 a partida não começa nem continua." },
          { question: "Em que ano a criação da Football Association ajudou a padronizar as regras do futebol?", options: ["1863", "1894", "1904", "1930"], answer: 0, why: "O futebol moderno foi organizado na Inglaterra no século XIX; a Football Association é de 1863." },
          { question: "Um zagueiro afasta a bola, que sai pela linha de fundo do próprio campo, sem gol. O que o árbitro marca?", options: ["Tiro de meta.", "Lateral.", "Tiro livre.", "Escanteio."], answer: 3, why: "Escanteio: a bola saiu pela linha de meta depois do último toque de um defensor." },
          { question: "Pela aula, quando acontece o impedimento?", options: ["Quando o atacante passa do meio-campo antes da bola, mesmo sem participar.", "Quando participa da jogada em posição irregular no momento do passe.", "Quando o jogador está em posição irregular no momento em que a bola chega.", "Quando o atacante fica atrás do goleiro adversário, com ou sem a bola."], answer: 1, why: "Precisa participar ativamente da jogada, e a posição vale no momento do passe do companheiro." },
          { question: "Qual destas é uma das principais habilidades que a aula lista para o goleiro?", options: ["Cruzamentos.", "Jogo aéreo.", "Apoio ofensivo.", "Reposição de bola."], answer: 3, why: "Goleiro: reflexos, posicionamento, agilidade, comunicação e reposição de bola. Jogo aéreo é do zagueiro; cruzamentos e apoio ofensivo, do lateral." },
          { question: "Quem protege a defesa, recupera bolas e ajuda na saída de jogo?", options: ["O volante.", "O meia.", "O zagueiro.", "O ponta."], answer: 0, why: "O meia organiza o ataque; o zagueiro protege o centro da defesa; o ponta ataca pelos lados." },
          { question: "Qual é a diferença entre passe e domínio?", options: ["Passe é sempre rasteiro e curto; domínio é sempre feito com o peito.", "Passe é com o pé; domínio é deslocar-se com a bola controlada.", "Passe envia a bola ao companheiro; domínio controla a que chega.", "Passe controla a bola recebida; domínio envia a bola a um companheiro."], answer: 2, why: "Deslocar-se com a bola controlada é a condução." },
          { question: "Quais características a aula aponta no sistema 4-3-3?", options: ["Ocupação ampla do meio-campo e participação ofensiva dos alas.", "Proteção da defesa, apoio à criação e flexibilidade.", "Equilíbrio, organização coletiva e dois atacantes.", "Uso dos lados, amplitude e pressão na saída adversária."], answer: 3, why: "As outras opções descrevem o 3-5-2, o 4-2-3-1 e o 4-4-2." },
          { question: "O que é a transição defensiva?", options: ["A equipe perde a bola e precisa reorganizar a defesa.", "A equipe recupera a bola e começa a atacar.", "A equipe troca de sistema tático no intervalo.", "O goleiro repõe a bola rápido para os zagueiros saírem jogando."], answer: 0, why: "Recuperar a bola e começar a atacar é a transição ofensiva." },
          { question: "No exemplo de treino da aula, quanto tempo vai para o jogo reduzido?", options: ["10 minutos.", "15 minutos.", "5 minutos.", "20 minutos."], answer: 1, why: "São 10 minutos para aquecimento, passes, condução e dribles e finalizações; 15 de jogo reduzido; 5 de recuperação." },
        ],
      },
    },
    {
      title: "Futsal",
      lessons: [
        {
          id: "futsal-regras-e-posicoes",
          title: "Futsal: regras, posições e fundamentos",
          summary: "Como é o jogo na quadra, as posições e os fundamentos.",
          goals: ["Conhecer as regras principais do futsal", "Entender as funções de goleiro, fixo, ala e pivô", "Ver como ficam os fundamentos em espaço reduzido"],
          sections: [
            {
              title: "O que é o futsal",
              body: [
                "O futsal é uma modalidade de futebol jogada em quadra, com espaço reduzido, velocidade de execução e intensa participação dos jogadores. Desenvolveu-se na América do Sul no século XX e ficou popular em escolas, clubes e competições internacionais.",
                { table: { caption: "Regras principais", head: ["Regra", "Como é"], rows: [
                  ["Jogadores", "5 por equipe, contando o goleiro"],
                  ["Duração", "2 tempos de 20 minutos cronometrados"],
                  ["Bola", "Uma bola específica"],
                  ["Impedimento", "Não existe"],
                  ["Lateral", "Cobrado com os pés"],
                  ["Substituições", "Ilimitadas, seguindo o procedimento das regras"],
                  ["Faltas acumuladas", "A partir da sexta falta da equipe em cada período, pode ser concedido um tiro livre direto sem barreira"],
                ] } },
                "O goleiro tem regras específicas para controlar e distribuir a bola, e as infrações podem resultar em advertências e expulsões.",
              ],
            },
            {
              title: "As posições",
              body: [
                { list: [
                  "Goleiro: defende a meta e participa da organização defensiva.",
                  "Fixo: atua principalmente na defesa e ajuda a organizar a saída de bola.",
                  "Alas: atuam pelos lados da quadra e participam do ataque e da defesa.",
                  "Pivô: joga mais perto da defesa adversária e procura receber a bola, protegê-la, fazer tabelas e finalizar.",
                ] },
              ],
            },
            {
              title: "Fundamentos na quadra",
              body: [
                { list: [
                  "Passe: essencial para a bola circular rápido. Tipos: curto, longo, lateral, diagonal e de primeira.",
                  "Domínio: controlar a bola para preparar a ação seguinte. A sola do pé é muito usada, porque facilita o controle em espaços pequenos.",
                  "Condução: avançar com a bola controlada, com toques curtos e precisos.",
                  "Drible: superar adversários em espaços reduzidos.",
                  "Finalização: com o peito do pé, a parte interna ou a parte externa.",
                  "Proteção de bola: usar o corpo, respeitando as regras, para dificultar a chegada do adversário.",
                  "Marcação: impedir que os adversários avancem, troquem passes ou finalizem com facilidade.",
                ] },
              ],
            },
          ],
          activity: {
            title: "Campo ou quadra?",
            steps: [
              "Em qual das duas modalidades não existe impedimento?",
              "Como é cobrado o lateral no futsal?",
              "Por que o domínio com a sola é tão usado na quadra?",
              "Uma equipe cometeu a sexta falta no primeiro tempo. O que pode acontecer?",
            ],
            answer: "1) No futsal. 2) Com os pés. 3) Porque facilita o controle da bola em espaços pequenos. 4) Pode ser concedido um tiro livre direto sem barreira para o adversário.",
          },
          recap: ["No futsal são 5 por equipe, 2 tempos de 20 minutos e não há impedimento.", "Fixo defende e organiza a saída; pivô recebe perto do gol adversário.", "Sola do pé, toques curtos e proteção de bola são essenciais na quadra."],
        },
        {
          id: "futsal-sistemas-e-estrategias",
          title: "Futsal: sistemas e estratégias",
          summary: "2-2, 3-1, 1-2-1 e 4-0, goleiro-linha, marcação e preparação física.",
          goals: ["Comparar os sistemas do futsal", "Entender vantagens e desvantagens do goleiro-linha", "Conhecer as estratégias de ataque e os tipos de marcação"],
          sections: [
            {
              title: "Sistemas do futsal",
              body: [
                { table: { caption: "Sistemas", head: ["Sistema", "Como é", "Vantagens"], rows: [
                  ["2-2", "Dois numa linha mais recuada e dois numa linha mais avançada", "Estrutura simples, facilita combinações e ajuda iniciantes a entender o posicionamento"],
                  ["3-1", "Três participam da construção e da movimentação, e um pivô fica mais adiantado", "Usa o pivô, permite tabelas e cria espaços"],
                  ["1-2-1", "Um fixo atrás, dois alas pelos lados e um pivô na frente", "Equilíbrio entre defesa e ataque"],
                  ["4-0", "Os quatro de linha se movimentam e trocam de posição, sem pivô fixo", "Circulação de bola, movimentação constante e criação de espaços"],
                ] } },
              ],
            },
            {
              title: "Goleiro-linha",
              body: [
                "O goleiro-linha é uma estratégia para aumentar as opções de passe e a presença da equipe no ataque.",
                { table: { caption: "Vantagens e desvantagens", head: ["Vantagens", "Desvantagens"], rows: [
                  ["Superioridade numérica no ataque", "Maior exposição da meta"],
                  ["Maior circulação de bola", "Risco de sofrer gols após erros"],
                  ["Possibilidade de criar espaços", "Necessidade de boa organização coletiva"],
                ] } },
              ],
            },
            {
              title: "Ataque, defesa e preparo",
              body: [
                "Estratégias ofensivas: tabelas rápidas, trocas de posição, movimentação do pivô, infiltrações, passes diagonais e finalizações após cruzamentos rasteiros.",
                { table: { caption: "Tipos de marcação", head: ["Marcação", "Como funciona"], rows: [
                  ["Individual", "Cada jogador acompanha um adversário de referência"],
                  ["Por zona", "Cada jogador protege uma região da quadra"],
                  ["Mista", "Combina a individual e a por zona"],
                ] } },
                "A escolha da marcação depende das características da equipe e do adversário.",
                "O futsal exige esforços intensos, acelerações curtas e mudanças rápidas de direção. As capacidades mais importantes são velocidade, agilidade, força, potência, resistência, coordenação e equilíbrio.",
              ],
            },
          ],
          activity: {
            title: "Situações de jogo",
            steps: [
              "Seu time tem um pivô forte. Qual sistema usa o pivô mais adiantado?",
              "Quais são as vantagens e as desvantagens do goleiro-linha?",
              "Na marcação por zona, o que cada jogador protege?",
            ],
            answer: "1) O 3-1. 2) Vantagens: superioridade numérica no ataque, mais circulação de bola e criação de espaços. Desvantagens: meta mais exposta, risco de gol após erros e necessidade de boa organização. 3) Uma região da quadra.",
          },
          recap: ["3-1 usa o pivô; 4-0 roda todo mundo; 2-2 é simples para começar.", "Goleiro-linha dá superioridade no ataque, mas expõe a meta.", "A marcação pode ser individual, por zona ou mista."],
        },
      ],
      quiz: {
        sticker: { id: "mestre-do-modulo-2", min: 8 },
        questions: [
          { question: "Quanto dura uma partida adulta oficial de futsal, no formato mais comum?", options: ["Dois tempos de 45 minutos, com acréscimos.", "Três períodos de 12 minutos.", "Dois tempos de 20 minutos cronometrados.", "Dois tempos de 25 minutos corridos."], answer: 2, why: "Dois tempos de 45 é o futebol de campo; três de 12, o beach soccer." },
          { question: "Como é cobrado o lateral no futsal?", options: ["Com as mãos, como no campo.", "Com os pés.", "Pelo goleiro, com as mãos.", "Com um chute de dentro da área."], answer: 1, why: "No futsal, o tiro lateral é cobrado com os pés." },
          { question: "A partir de qual falta acumulada da equipe, em cada período, pode ser concedido tiro livre direto sem barreira?", options: ["A terceira.", "A quinta.", "A décima.", "A sexta."], answer: 3, why: "A partir da sexta falta acumulada da equipe em cada período." },
          { question: "Qual é a função do fixo?", options: ["Atua mais na defesa e ajuda a organizar a saída de bola.", "Joga perto da defesa adversária para receber e finalizar.", "Atua pelos lados da quadra, no ataque e na defesa.", "Sai do gol para jogar como mais um na linha."], answer: 0, why: "Perto da defesa adversária é o pivô; pelos lados, os alas; sair do gol é o goleiro-linha." },
          { question: "Por que o domínio com a sola é tão usado no futsal?", options: ["Deixa o chute seguinte mais forte.", "É o único domínio permitido na quadra.", "Faz a bola quicar mais alto para o passe.", "Facilita o controle em espaços pequenos."], answer: 3, why: "Na quadra o espaço é reduzido, e a sola segura a bola com mais controle." },
          { question: "No sistema 4-0, como atuam os jogadores de linha?", options: ["Dois mais recuados e dois mais avançados.", "Movimentam-se e trocam de posição, sem pivô fixo.", "Três constroem e um pivô fica adiantado.", "Os quatro ficam na defesa, perto do goleiro."], answer: 1, why: "Dois e dois é o 2-2; três e um pivô, o 3-1." },
          { question: "Qual destas é uma desvantagem do goleiro-linha?", options: ["Menos circulação de bola.", "Inferioridade numérica no ataque.", "Maior exposição da meta.", "Menos opções de passe."], answer: 2, why: "As outras são o contrário das vantagens: o goleiro-linha dá superioridade no ataque e mais circulação de bola." },
          { question: "Na marcação por zona, o que cada jogador faz?", options: ["Protege uma região da quadra.", "Acompanha um adversário de referência.", "Combina as duas formas de marcar.", "Marca só o pivô adversário."], answer: 0, why: "Acompanhar um adversário é a individual; combinar as duas é a mista." },
          { question: "Qual destas a aula lista como estratégia ofensiva do futsal?", options: ["Marcação mista.", "Marcação por zona.", "Proteger a região central.", "Infiltrações."], answer: 3, why: "Tabelas rápidas, trocas de posição, movimentação do pivô, infiltrações, passes diagonais e finalizações após cruzamentos rasteiros." },
          { question: "Qual destas a aula não cita como tipo de passe no futsal?", options: ["Passe diagonal.", "Passe lateral.", "Passe de primeira.", "Passe de calcanhar."], answer: 3, why: "Os tipos da aula são curto, longo, lateral, diagonal e de primeira." },
        ],
      },
    },
    {
      title: "Futebol de areia",
      lessons: [
        {
          id: "areia-regras-e-posicoes",
          title: "Futebol de areia: regras e posições",
          summary: "O beach soccer, suas regras, posições e o preparo para jogar na areia.",
          goals: ["Conhecer as características do beach soccer", "Saber as regras principais", "Entender as posições e o preparo físico na areia"],
          sections: [
            {
              title: "O que é o beach soccer",
              body: [
                "É o futebol jogado na areia. Desenvolveu-se a partir de jogos recreativos nas praias e ganhou organização competitiva internacional na década de 1990. Exige técnica, criatividade, equilíbrio e capacidade de se mover numa superfície instável.",
                { table: { caption: "Regras principais", head: ["Regra", "Como é"], rows: [
                  ["Jogadores", "5 por equipe, contando o goleiro"],
                  ["Duração", "3 períodos de 12 minutos"],
                  ["Impedimento", "Não existe"],
                  ["Substituições", "Frequentes, com procedimento próprio"],
                  ["Jogo", "Grande uso de passes e chutes aéreos"],
                ] } },
                { box: "atencao", text: "Faltas, tiros livres e a atuação do goleiro têm regras próprias. Consulte o regulamento oficial da competição para dimensões, reinícios e sanções." },
              ],
            },
            {
              title: "As posições",
              body: [
                { list: [
                  "Goleiro: defende a meta e inicia jogadas com reposições de bola.",
                  "Defensor: ajuda a proteger a meta e pode iniciar as jogadas ofensivas.",
                  "Alas: atuam pelos lados, ajudando na construção e na finalização das jogadas.",
                  "Atacante: procura criar oportunidades de gol e finalizar.",
                ] },
                { box: "chave", text: "No beach soccer, os jogadores trocam de função com frequência, acompanhando a bola e as necessidades da equipe." },
              ],
            },
            {
              title: "O corpo na areia",
              body: [
                "A areia oferece mais resistência ao deslocamento do que superfícies firmes e pode aumentar a exigência muscular. Por isso, a preparação deve respeitar a condição física de cada atleta. Capacidades importantes: força, potência, equilíbrio, agilidade, coordenação, velocidade e resistência.",
                { list: [
                  "Aquecimento progressivo.",
                  "Corridas curtas na areia.",
                  "Exercícios de equilíbrio.",
                  "Controle e passe aéreo.",
                  "Finalizações.",
                  "Jogo reduzido.",
                  "Recuperação e hidratação.",
                ], ordered: true },
                { box: "atencao", text: "A intensidade e o volume do treino devem aumentar aos poucos." },
              ],
            },
          ],
          activity: {
            title: "Campo, quadra ou areia?",
            steps: [
              "Quantos jogadores tem cada equipe no beach soccer?",
              "Quantos períodos tem uma partida, e de quantos minutos?",
              "Por que a preparação na areia deve respeitar a condição de cada atleta?",
            ],
            answer: "1) Cinco, contando o goleiro (como no futsal). 2) Três períodos de 12 minutos. 3) Porque a areia oferece mais resistência ao deslocamento e pode aumentar a exigência muscular.",
          },
          recap: ["Beach soccer: 5 por equipe, 3 períodos de 12 minutos, sem impedimento.", "Todos trocam de função com frequência.", "A areia exige mais dos músculos: aumente o treino aos poucos."],
        },
        {
          id: "areia-fundamentos-e-jogo",
          title: "Futebol de areia: fundamentos e jogo",
          summary: "Controle aéreo, voleio, bicicleta, organização da equipe e exercícios.",
          goals: ["Conhecer os fundamentos típicos da areia", "Entender as organizações 2-2 e 3-1", "Conhecer exercícios práticos"],
          sections: [
            {
              title: "Fundamentos de areia",
              body: [
                { list: [
                  "Controle aéreo: controlar a bola enquanto ela está no ar. É importante porque muitas jogadas acontecem sem que a bola fique no chão.",
                  "Passe aéreo: enviar a bola a um companheiro por cima da areia.",
                  "Voleio: o chute feito antes que a bola toque o chão.",
                  "Meia-bicicleta: finalização acrobática em que o jogador gira o corpo e chuta a bola no ar.",
                  "Bicicleta: chute acrobático no ar, com o corpo inclinado para trás e as pernas num movimento parecido com pedalar.",
                  "Cabeceio: para passar, finalizar ou afastar a bola.",
                  "Chute de longa distância: para tentar surpreender o goleiro ou aproveitar uma chance de finalizar.",
                ] },
                { box: "atencao", text: "Meia-bicicleta e bicicleta exigem coordenação e técnica. Devem ser aprendidas aos poucos, com orientação e em condições seguras." },
              ],
            },
            {
              title: "Organização da equipe",
              body: [
                { table: { caption: "Organizações", head: ["Organização", "Como é", "Objetivos"], rows: [
                  ["2-2", "Dois com funções mais defensivas e dois mais ofensivas, com ajustes durante o jogo", "Distribuir as responsabilidades, criar linhas de passe e equilibrar ataque e defesa"],
                  ["3-1", "Três dão apoio e constroem; um atua mais adiantado", "Criar opções de passe, aproximar jogadores do ataque e facilitar combinações"],
                ] } },
                "Essas estruturas são referências didáticas, não posições fixas obrigatórias.",
                "No ataque: passes aéreos, voleios, chutes de longa distância, movimentação sem a bola, tabelas, aproveitamento de rebotes e jogadas ensaiadas em tiros livres.",
                "Na defesa: proteger a região central, reduzir os espaços para finalização, dificultar os passes aéreos, acompanhar as movimentações, recuperar a posição após perder a bola e evitar faltas desnecessárias em regiões perigosas.",
              ],
            },
            {
              title: "Exercícios práticos",
              body: [
                { table: { caption: "Quatro exercícios", head: ["Exercício", "Como fazer", "Objetivo"], rows: [
                  ["Controle de bola no ar", "Um jogador lança a bola; o companheiro controla e devolve", "Melhorar coordenação e domínio aéreo"],
                  ["Passe e finalização", "Um faz um passe aéreo; o outro prepara a bola e finaliza", "Desenvolver precisão e finalização"],
                  ["Voleio", "Com supervisão, chutes de voleio a partir de lançamentos controlados", "Melhorar o tempo de bola e a técnica de chute"],
                  ["Jogo reduzido", "Partidas com equipes pequenas, num espaço adequado", "Desenvolver movimentação, posicionamento e tomada de decisão"],
                ] } },
                { box: "chave", text: "O jogo pode mudar rápido depois de uma finalização ou de um erro de passe: a equipe precisa aproveitar as oportunidades." },
              ],
            },
          ],
          activity: {
            title: "Pense como jogador de areia",
            steps: [
              "Por que o equilíbrio é tão importante na areia?",
              "Qual a diferença entre voleio e bicicleta?",
              "Que cuidados tomar ao treinar meia-bicicleta e bicicleta?",
            ],
            answer: "1) Porque a areia é uma superfície instável. 2) Voleio é o chute antes que a bola toque o chão; bicicleta é um chute acrobático no ar, com o corpo inclinado para trás e as pernas como se pedalassem. 3) Aprender aos poucos, com orientação e em condições seguras.",
          },
          recap: ["Na areia, a bola fica muito no ar: controle aéreo e voleio são essenciais.", "2-2 e 3-1 são referências, não posições fixas.", "Acrobacias só aos poucos, com orientação e em condições seguras."],
        },
      ],
      quiz: {
        sticker: { id: "mestre-do-modulo-3", min: 8 },
        questions: [
          { question: "Quanto dura uma partida adulta oficial de beach soccer, no formato mais comum?", options: ["Dois tempos de 20 minutos.", "Três períodos de 12 minutos.", "Dois tempos de 45 minutos.", "Quatro períodos de 10 minutos."], answer: 1, why: "Dois tempos de 20 é o futsal; dois de 45, o futebol de campo." },
          { question: "Em que década o beach soccer ganhou organização competitiva internacional?", options: ["1970", "1980", "1990", "2000"], answer: 2, why: "Nasceu de jogos recreativos nas praias e se organizou em competições internacionais nos anos 1990." },
          { question: "O que é o voleio?", options: ["Um chute de longa distância para surpreender o goleiro.", "Um passe por cima da areia para um companheiro.", "Um chute acrobático com o corpo inclinado para trás.", "O chute feito antes que a bola toque o chão."], answer: 3, why: "O chute de longa distância, o passe aéreo e a bicicleta são outros fundamentos." },
          { question: "O que é a meia-bicicleta?", options: ["Uma finalização acrobática girando o corpo e chutando a bola no ar.", "Um chute com o corpo inclinado para trás e as pernas pedalando.", "O controle da bola no ar antes de passar para o companheiro.", "Um cabeceio de costas para afastar a bola da região central da defesa."], answer: 0, why: "O corpo inclinado para trás com as pernas \"pedalando\" é a bicicleta." },
          { question: "Por que o controle aéreo é importante na areia, pela aula?", options: ["Porque é proibido tocar a bola no chão.", "Porque o goleiro só pode repor a bola pelo alto, nunca rasteira.", "Porque muitas jogadas acontecem sem a bola no chão.", "Porque as regras não permitem passe rasteiro."], answer: 2, why: "Não é regra: é que, na areia, muitas jogadas são feitas sem que a bola permaneça no chão." },
          { question: "Por que a areia pode aumentar a exigência muscular?", options: ["A bola usada na areia é mais pesada.", "Oferece mais resistência ao deslocamento.", "A partida é mais longa que a de campo.", "Não há substituições durante o jogo."], answer: 1, why: "A areia resiste mais ao deslocamento do que superfícies firmes. E as substituições são frequentes." },
          { question: "Qual destes é um objetivo da organização 3-1 na areia?", options: ["Deixar os quatro jogadores fixos na defesa.", "Tirar o goleiro do gol para atacar.", "Manter cada jogador preso à sua posição.", "Aproximar jogadores da região ofensiva."], answer: 3, why: "O 3-1 busca criar opções de passe, aproximar jogadores do ataque e facilitar combinações." },
          { question: "O que a aula diz sobre as organizações 2-2 e 3-1 no beach soccer?", options: ["São referências didáticas, não posições fixas.", "São as únicas organizações permitidas.", "Só podem ser usadas no primeiro período.", "Valem só para equipes de iniciantes."], answer: 0, why: "Os jogadores trocam de função com frequência; as estruturas são só referências." },
          { question: "Qual destas é uma das preocupações da defesa no beach soccer?", options: ["Usar a largura do campo.", "Fazer ultrapassagens.", "Evitar faltas desnecessárias em regiões perigosas.", "Aproveitar os rebotes."], answer: 2, why: "Largura e ultrapassagens são princípios de ataque; rebotes, uma estratégia ofensiva da areia." },
          { question: "No exercício \"Controle de bola no ar\", qual é o objetivo?", options: ["Desenvolver precisão e finalização.", "Melhorar o tempo de bola e a técnica de chute.", "Desenvolver movimentação e tomada de decisão.", "Melhorar coordenação e domínio aéreo."], answer: 3, why: "Os outros são os objetivos dos exercícios de passe e finalização, voleio e jogo reduzido." },
        ],
      },
    },
  ],
};
