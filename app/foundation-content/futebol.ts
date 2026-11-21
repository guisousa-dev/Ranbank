// Curso: Futebol. 3 módulos (futebol de campo, futsal e futebol de areia), 9 aulas.
// Segue o padrão de app/foundation-lessons.ts.

import type { CourseContent } from "../foundation-lessons";

export const FUTEBOL: CourseContent = {
  note: "Antes de qualquer treino, aqueça, beba água e respeite os seus limites. As regras citadas são as do formato adulto mais comum; campeonatos podem ter regulamento próprio.",
  closing: "Agora você conhece as regras, as posições, os fundamentos e as táticas no campo, na quadra e na areia. O próximo passo é jogar: com respeito, em equipe e sempre aquecendo antes.",
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
                "O futebol moderno foi organizado na Inglaterra no século XIX. Em 1863, a criação da Football Association ajudou a padronizar as regras. O esporte chegou ao Brasil no fim do século XIX e cresceu em clubes, escolas e comunidades.",
                { box: "chave", text: "Além de divertido, o futebol desenvolve resistência, coordenação, velocidade, raciocínio tático, trabalho em equipe, disciplina e respeito." },
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
              ],
            },
            {
              title: "As regras principais",
              body: [
                { table: { caption: "Regras que todo jogador precisa saber", head: ["Regra", "O que é"], rows: [
                  ["Gol", "A bola passa inteira da linha do gol, entre as traves e abaixo do travessão, sem infração."],
                  ["Falta", "Uma infração prevista nas regras, como empurrar, segurar ou dar uma entrada perigosa."],
                  ["Cartão amarelo", "Advertência. Dois amarelos no mesmo jogo viram vermelho."],
                  ["Cartão vermelho", "Expulsão: o jogador sai e a equipe fica com um a menos."],
                  ["Lateral", "A bola sai pela linha lateral e é reposta com as mãos."],
                  ["Escanteio", "A bola sai pela linha de fundo depois de tocar por último num defensor, sem gol."],
                  ["Tiro de meta", "A bola sai pela linha de fundo depois de tocar por último num atacante, sem gol."],
                ] } },
              ],
            },
            {
              title: "Impedimento, sem complicação",
              body: [
                "No momento do passe, o atacante está impedido se, no campo do adversário, estiver mais perto da linha do gol do que a bola e do que o penúltimo defensor (normalmente, o goleiro é o último).",
                "Só é marcado se ele participar da jogada. Estar em posição de impedimento sem participar não é infração.",
                { box: "exemplo", text: "O meia passa a bola. Nesse instante, o centroavante já está atrás do último zagueiro, sozinho com o goleiro. Se ele recebe e chuta, é impedimento. Se ele estivesse na mesma linha do zagueiro, estaria em condição legal." },
                { box: "atencao", text: "O que vale é a posição no momento do passe, e não no momento em que a bola chega." },
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
          recap: ["O futebol moderno nasceu na Inglaterra e chegou ao Brasil no fim do século XIX.", "Partida de 2 tempos de 45 minutos, com até 11 jogadores por equipe.", "Impedimento se confere no momento do passe."],
        },
        {
          id: "posicoes-e-funcoes",
          title: "Posições e funções",
          summary: "O que faz cada jogador em campo, com a numeração tradicional.",
          goals: ["Conhecer as posições do futebol de campo", "Entender a função de cada uma", "Ligar as posições à numeração tradicional das camisas"],
          sections: [
            {
              title: "Defesa",
              body: [
                { list: [
                  "Goleiro: defende a meta. Precisa de reflexo, posicionamento, agilidade, comunicação e boa reposição de bola.",
                  "Zagueiros: protegem o meio da defesa. Trabalham marcação, antecipação, cobertura, jogo aéreo e saída de bola.",
                  "Laterais: jogam pelos lados do campo e ajudam na defesa e no ataque. Precisam de velocidade, resistência, cruzamento e marcação.",
                ] },
              ],
            },
            {
              title: "Meio-campo e ataque",
              body: [
                { list: [
                  "Volantes: protegem a defesa, recuperam bolas e ajudam a começar as jogadas.",
                  "Meias: organizam o ataque e ligam o meio-campo aos atacantes.",
                  "Pontas: atacam pelos lados, com velocidade, drible e cruzamento.",
                  "Centroavante: fica mais perto do gol e procura finalizar.",
                ] },
                { box: "exemplo", text: "Pense numa equipe como uma corrente: a defesa segura, o meio-campo liga e o ataque finaliza. Se um elo falha, a corrente toda sente." },
              ],
            },
            {
              title: "A numeração tradicional",
              body: [
                "No Brasil, a numeração clássica das camisas acompanha a posição. Hoje os clubes usam números livres, mas essa referência ainda é muito usada para falar de posições.",
                { table: { caption: "Numeração tradicional no Brasil", head: ["Número", "Posição"], rows: [
                  ["1", "Goleiro"],
                  ["2", "Lateral-direito"],
                  ["3 e 4", "Zagueiros"],
                  ["5", "Volante"],
                  ["6", "Lateral-esquerdo"],
                  ["7", "Ponta-direita"],
                  ["8", "Meia (ou segundo volante)"],
                  ["9", "Centroavante"],
                  ["10", "Meia-armador"],
                  ["11", "Ponta-esquerda"],
                ] } },
                { box: "chave", text: "Posição não é prisão: os jogadores se movimentam o tempo todo. A posição mostra a função principal de cada um." },
              ],
            },
          ],
          activity: {
            title: "Quem faz o quê?",
            steps: [
              "Quem tem como função principal proteger a defesa e recuperar bolas?",
              "Quem ajuda na defesa e no ataque correndo pelos lados?",
              "Na numeração tradicional, qual número é o do centroavante? E o do meia-armador?",
            ],
            answer: "1) O volante. 2) Os laterais (e, no ataque, os pontas também jogam pelos lados). 3) O centroavante é o 9 e o meia-armador é o 10.",
          },
          recap: ["Goleiro, zagueiros e laterais formam a defesa.", "Volantes e meias ligam a defesa ao ataque; pontas e centroavante finalizam.", "Na numeração tradicional, 1 é goleiro, 9 é centroavante e 10 é o armador."],
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
                "Passe é mandar a bola para um companheiro. Pode ser curto ou longo, rasteiro ou pelo alto, e até de primeira (sem dominar antes).",
                "Domínio é controlar a bola que chega. Dá para usar o pé, a coxa, o peito e outras partes do corpo permitidas (menos braços e mãos).",
                { box: "chave", text: "Passe é entregar a bola; domínio é receber e controlar. Um bom domínio já prepara a próxima jogada." },
              ],
            },
            {
              title: "Condução e drible",
              body: [
                "Condução é andar com a bola controlada, sem deixá-la longe demais do pé para não perder a posse.",
                "Drible é passar pelo adversário com um movimento técnico: uma finta, uma mudança de direção ou de velocidade.",
                { box: "pratica", text: "Coloque cinco objetos em linha (garrafas ou chinelos) e conduza a bola em zigue-zague entre eles, usando a parte de dentro e a de fora do pé." },
              ],
            },
            {
              title: "Finalização e cabeceio",
              body: [
                "Finalizar é tentar fazer o gol. As formas mais comuns:",
                { list: ["Parte de dentro do pé: mais precisão", "Peito do pé: mais força", "Parte de fora do pé: dá efeito à bola", "Voleio: chute antes de a bola tocar o chão", "Cabeceio"] },
                "O cabeceio serve para passar, finalizar ou afastar a bola.",
                { box: "atencao", text: "O cabeceio deve ser ensinado com cuidado, respeitando a idade e com bolas leves no começo. Em crianças, o ideal é limitar bastante esse treino." },
              ],
            },
          ],
          activity: {
            title: "Treino em casa ou na quadra",
            steps: [
              "Com um parceiro, troque 20 passes com a parte de dentro do pé, a uns 5 passos de distância.",
              "Na volta, domine a bola antes de passar. Depois tente passar de primeira.",
              "Anote: qual foi mais difícil, dominar ou passar de primeira? Por quê?",
            ],
            answer: "O passe de primeira costuma ser mais difícil, porque exige preparar o corpo antes de a bola chegar. Ele é mais rápido e surpreende a marcação, mas pede mais treino. Dominar dá mais tempo para pensar.",
          },
          recap: ["Passe entrega a bola; domínio recebe e controla.", "Condução é andar com a bola perto do pé; drible é passar pelo adversário.", "A parte de dentro do pé dá precisão; o peito do pé dá força."],
        },
        {
          id: "sistemas-e-principios",
          title: "Sistemas táticos e princípios de jogo",
          summary: "4-4-2, 4-3-3, 4-2-3-1 e 3-5-2, como atacar, defender e fazer a transição.",
          goals: ["Ler os números de um sistema tático", "Comparar os sistemas mais usados", "Entender os princípios de ataque, defesa e transição"],
          sections: [
            {
              title: "Como ler um sistema",
              body: [
                "Os números contam os jogadores de linha de trás para a frente: defensores, meio-campistas e atacantes. O goleiro não entra na conta. No 4-4-2, são 4 defensores, 4 no meio e 2 atacantes: 4 + 4 + 2 = 10, mais o goleiro.",
                { table: { caption: "Sistemas mais usados", head: ["Sistema", "Como é", "Ponto forte", "Cuidado"], rows: [
                  ["4-4-2", "4 defensores, 4 meias, 2 atacantes", "Equilíbrio entre defesa e ataque", "Pode ficar com menos gente no meio"],
                  ["4-3-3", "4 defensores, 3 meias, 3 atacantes", "Usa os lados e pressiona a saída do adversário", "Pede muito esforço dos pontas na defesa"],
                  ["4-2-3-1", "4 defensores, 2 volantes, 3 meias, 1 centroavante", "Protege a defesa e ajuda a criar", "O centroavante pode ficar isolado"],
                  ["3-5-2", "3 zagueiros, 5 no meio (com 2 alas), 2 atacantes", "Domina o meio-campo; alas atacam muito", "Precisa de boa cobertura pelos lados"],
                ] } },
              ],
            },
            {
              title: "Princípios de ataque e de defesa",
              body: [
                { table: { caption: "O que fazer com e sem a bola", head: ["Com a bola (ataque)", "Sem a bola (defesa)"], rows: [
                  ["Criar espaços", "Proteger a meta"],
                  ["Usar a largura do campo", "Fechar as linhas de passe"],
                  ["Trocar passes", "Marcar os adversários"],
                  ["Fazer ultrapassagens", "Fazer coberturas"],
                  ["Movimentar-se sem a bola", "Recuperar a posse"],
                ] } },
              ],
            },
            {
              title: "Transições",
              body: [
                "Transição ofensiva: a equipe recupera a bola e começa a atacar. Quanto mais rápido, mais o adversário estará desorganizado.",
                "Transição defensiva: a equipe perde a bola e precisa se reorganizar para defender.",
                { box: "chave", text: "Os momentos logo depois de ganhar ou perder a bola são os que mais geram gols. Reagir rápido faz diferença." },
              ],
            },
          ],
          activity: {
            title: "Escolha o sistema",
            steps: [
              "O seu time tem dois centroavantes muito bons e quer equilíbrio. Que sistema faz sentido?",
              "O seu time tem pontas rápidos e quer pressionar a saída de bola do adversário. E agora?",
              "Num 3-5-2, quem precisa cobrir os lados quando os alas sobem?",
            ],
            answer: "1) O 4-4-2, que usa dois atacantes e mantém o equilíbrio. 2) O 4-3-3, que usa a largura do campo e pressiona a saída. 3) Os zagueiros dos lados e os meias precisam fazer a cobertura; é o ponto de atenção desse sistema.",
          },
          recap: ["Os números do sistema contam defensores, meias e atacantes, sem o goleiro.", "Com a bola, crie espaço; sem a bola, feche espaço.", "Transição é o momento logo após ganhar ou perder a bola."],
        },
        {
          id: "preparacao-e-treino",
          title: "Preparação física e treino",
          summary: "Capacidades físicas, um treino completo, exercícios e cuidados para evitar lesões.",
          goals: ["Conhecer as capacidades físicas do futebol", "Montar um treino simples", "Prevenir lesões e respeitar o fair play"],
          sections: [
            {
              title: "Capacidades físicas",
              body: [
                { table: { caption: "O que o futebol exige do corpo", head: ["Capacidade", "Para que serve"], rows: [
                  ["Resistência", "Aguentar o esforço durante a partida inteira"],
                  ["Força", "Disputas de bola, saltos e arrancadas"],
                  ["Velocidade", "Fazer os movimentos rapidamente"],
                  ["Agilidade", "Mudar de direção com rapidez"],
                  ["Potência", "Ações explosivas, como saltar e arrancar"],
                  ["Mobilidade", "Movimentar o corpo com amplitude, sem travar"],
                ] } },
              ],
            },
            {
              title: "Um treino completo em uma hora",
              body: [
                { table: { caption: "Exemplo de treino", head: ["Tempo", "Atividade"], rows: [
                  ["10 min", "Aquecimento"],
                  ["10 min", "Passes em dupla"],
                  ["10 min", "Condução entre cones e dribles"],
                  ["10 min", "Finalização depois de um passe"],
                  ["15 min", "Jogo reduzido (poucos jogadores, campo menor)"],
                  ["5 min", "Volta à calma, alongamento e conversa sobre o treino"],
                ] } },
                "Outros exercícios úteis: jogo de posse de bola, situações de ataque contra defesa e jogo coletivo com um objetivo tático (por exemplo, \"só vale gol depois de cinco passes\").",
                { box: "atencao", text: "O treino deve respeitar a idade, o preparo físico e o nível técnico de quem joga. Aumente a intensidade aos poucos." },
              ],
            },
            {
              title: "Cuidados e disciplina",
              body: [
                { list: [
                  "Aqueça antes e desacelere no fim.",
                  "Beba água antes, durante e depois.",
                  "Use calçado adequado ao piso.",
                  "Pare se sentir dor forte, tontura ou falta de ar.",
                  "Respeite companheiros, adversários e arbitragem: sem entradas violentas nem reclamações agressivas.",
                ] },
                { box: "chave", text: "Fair play (jogo limpo) também é fundamento: sem respeito, não existe jogo." },
              ],
            },
          ],
          activity: {
            title: "Monte o seu treino",
            steps: [
              "Você tem 45 minutos e oito pessoas. Monte um treino com aquecimento, uma parte técnica, um jogo reduzido e a volta à calma.",
              "Diga quantos minutos vai dar para cada parte.",
              "Escolha uma regra especial para o jogo reduzido que treine algo do curso.",
            ],
            answer: "Um exemplo: 8 minutos de aquecimento; 12 minutos de passes e domínio em duplas; 20 minutos de jogo reduzido, quatro contra quatro, em que só vale gol depois de três passes (treina a troca de passes); 5 minutos de volta à calma e conversa. Qualquer treino que tenha as quatro partes e respeite o tempo está certo.",
          },
          recap: ["Resistência, força, velocidade, agilidade, potência e mobilidade são a base física.", "Todo treino tem aquecimento, parte principal e volta à calma.", "Água, aquecimento e fair play previnem lesões e confusão."],
        },
      ],
    },
    {
      title: "Futsal",
      lessons: [
        {
          id: "futsal-regras-e-posicoes",
          title: "Futsal: regras, posições e fundamentos",
          summary: "Como é o jogo na quadra, as posições e os fundamentos que mudam.",
          goals: ["Conhecer as regras principais do futsal", "Entender as funções de goleiro, fixo, ala e pivô", "Ver o que muda nos fundamentos em espaço pequeno"],
          sections: [
            {
              title: "O que é o futsal",
              body: [
                "O futsal é o futebol jogado em quadra, com espaço pequeno, muita velocidade e todos os jogadores participando o tempo todo. Desenvolveu-se na América do Sul no século XX e ficou popular em escolas, clubes e competições internacionais.",
                { table: { caption: "Regras principais", head: ["Regra", "Como é"], rows: [
                  ["Jogadores", "5 por equipe, contando o goleiro"],
                  ["Duração", "2 tempos de 20 minutos cronometrados (o relógio para quando a bola para)"],
                  ["Impedimento", "Não existe"],
                  ["Lateral", "Cobrado com os pés"],
                  ["Substituições", "Ilimitadas, seguindo o procedimento das regras"],
                  ["Faltas acumuladas", "A partir da sexta falta da equipe em cada tempo, o adversário cobra tiro livre direto sem barreira"],
                ] } },
              ],
            },
            {
              title: "As posições",
              body: [
                { list: [
                  "Goleiro: defende a meta e ajuda a organizar a defesa.",
                  "Fixo: joga mais atrás, defende e organiza a saída de bola.",
                  "Alas: jogam pelos lados e participam do ataque e da defesa.",
                  "Pivô: fica perto da defesa adversária para receber, proteger a bola, tabelar e finalizar.",
                ] },
                { box: "exemplo", text: "O fixo é parecido com o zagueiro do campo, e o pivô com o centroavante. A diferença é que, na quadra, todos defendem e atacam o tempo inteiro." },
              ],
            },
            {
              title: "Fundamentos na quadra",
              body: [
                "Os fundamentos são os mesmos do campo, mas em espaço menor e com bola mais pesada, que quica menos:",
                { list: [
                  "Domínio com a sola do pé: muito usado, porque segura a bola em pouco espaço.",
                  "Condução com toques curtos e precisos.",
                  "Proteção de bola: usar o corpo, dentro das regras, para o adversário não chegar na bola.",
                  "Marcação: impedir que o adversário avance, passe ou chute com facilidade.",
                  "Passes curtos, laterais e diagonais, e passes de primeira para a bola circular rápido.",
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
              "Uma equipe cometeu a sexta falta no primeiro tempo. O que acontece?",
            ],
            answer: "1) No futsal. 2) Com os pés. 3) Porque a sola segura a bola parada em pouco espaço e prepara a próxima jogada. 4) O adversário cobra um tiro livre direto sem barreira.",
          },
          recap: ["No futsal são 5 por equipe, 2 tempos de 20 minutos e não há impedimento.", "Fixo defende e organiza; pivô recebe perto do gol adversário.", "Sola do pé, toques curtos e proteção de bola são essenciais na quadra."],
        },
        {
          id: "futsal-sistemas-e-estrategias",
          title: "Futsal: sistemas e estratégias",
          summary: "3-1, 4-0 e 2-2, goleiro-linha, marcação e preparação física.",
          goals: ["Comparar os sistemas do futsal", "Entender vantagens e riscos do goleiro-linha", "Conhecer os tipos de marcação"],
          sections: [
            {
              title: "Sistemas do futsal",
              body: [
                "Os números contam os 4 jogadores de linha, sem o goleiro.",
                { table: { caption: "Sistemas mais usados", head: ["Sistema", "Como é", "Vantagens"], rows: [
                  ["3-1", "Três constroem as jogadas e um pivô fica mais à frente", "Usa o pivô, facilita tabelas e abre espaços"],
                  ["4-0", "Os quatro se movimentam e trocam de posição, sem pivô fixo", "Bola circulando e movimentação constante"],
                  ["2-2", "Dois mais atrás e dois mais à frente", "Estrutura simples, boa para iniciantes entenderem o posicionamento"],
                ] } },
              ],
            },
            {
              title: "Goleiro-linha",
              body: [
                "É quando o goleiro sai do gol para jogar como jogador de linha no ataque, criando cinco contra quatro.",
                { table: { caption: "Vantagens e riscos", head: ["Vantagens", "Riscos"], rows: [
                  ["Um jogador a mais no ataque", "O gol fica mais exposto"],
                  ["Mais opções de passe", "Um erro pode virar gol do adversário"],
                  ["Mais facilidade para abrir espaços", "Exige muita organização"],
                ] } },
                { box: "exemplo", text: "Uma equipe perdendo por um gol no fim do jogo costuma usar o goleiro-linha para tentar o empate." },
              ],
            },
            {
              title: "Ataque e defesa",
              body: [
                "Estratégias de ataque: tabelas rápidas, troca de posições, movimentação do pivô, infiltrações, passes diagonais e chutes depois de cruzamentos rasteiros.",
                { table: { caption: "Tipos de marcação", head: ["Marcação", "Como funciona"], rows: [
                  ["Individual", "Cada jogador acompanha um adversário"],
                  ["Por zona", "Cada jogador protege uma região da quadra"],
                  ["Mista", "Mistura as duas"],
                ] } },
                "O futsal exige arrancadas curtas e mudanças rápidas de direção. Velocidade, agilidade, força, potência, resistência, coordenação e equilíbrio são as capacidades mais treinadas.",
              ],
            },
          ],
          activity: {
            title: "Situações de jogo",
            steps: [
              "Seu time tem um pivô forte, bom de costas para o gol. Qual sistema aproveita isso?",
              "Seu time está perdendo por 1 a 0 com dois minutos para o fim. Que estratégia pode ajudar, e qual o risco?",
              "Na marcação por zona, o que cada jogador protege?",
            ],
            answer: "1) O 3-1, que usa o pivô mais à frente. 2) O goleiro-linha: cria cinco contra quatro no ataque, mas deixa o gol vazio se a bola for perdida. 3) Uma região da quadra, e não um adversário específico.",
          },
          recap: ["3-1 usa o pivô; 4-0 roda todo mundo; 2-2 é simples para começar.", "Goleiro-linha dá um a mais no ataque, mas expõe o gol.", "A marcação pode ser individual, por zona ou mista."],
        },
      ],
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
                "É o futebol jogado na areia. Nasceu dos jogos de praia e ganhou competições internacionais organizadas na década de 1990. Exige técnica, criatividade e equilíbrio, porque a areia é um piso instável.",
                { table: { caption: "Regras principais", head: ["Regra", "Como é"], rows: [
                  ["Jogadores", "5 por equipe, contando o goleiro"],
                  ["Duração", "3 períodos de 12 minutos"],
                  ["Impedimento", "Não existe"],
                  ["Substituições", "Frequentes, com procedimento próprio"],
                  ["Jogo", "Muitos passes e chutes pelo alto, porque a bola rola mal na areia"],
                ] } },
                { box: "atencao", text: "Faltas, tiros livres e reposição do goleiro têm regras próprias. Em campeonatos, consulte o regulamento oficial." },
              ],
            },
            {
              title: "As posições",
              body: [
                { list: [
                  "Goleiro: defende a meta e começa as jogadas com a reposição de bola.",
                  "Defensor: protege a meta e pode iniciar o ataque.",
                  "Alas: jogam pelos lados, ajudando a construir e finalizar.",
                  "Atacante: cria chances e finaliza.",
                ] },
                { box: "chave", text: "Na areia, todos trocam de função o tempo inteiro, acompanhando a bola e o que a equipe precisa." },
              ],
            },
            {
              title: "O corpo na areia",
              body: [
                "A areia oferece mais resistência para correr do que um piso firme e cansa mais os músculos. Por isso o preparo deve respeitar a condição de cada pessoa e aumentar aos poucos.",
                { list: [
                  "Aquecimento progressivo.",
                  "Corridas curtas na areia.",
                  "Exercícios de equilíbrio.",
                  "Controle e passe aéreo.",
                  "Finalizações.",
                  "Jogo reduzido.",
                  "Recuperação e muita hidratação.",
                ], ordered: true },
                { box: "atencao", text: "Na praia, proteja-se do sol (protetor, horários mais frescos) e beba água com frequência. Areia muito quente pode queimar os pés." },
              ],
            },
          ],
          activity: {
            title: "Campo, quadra ou areia?",
            steps: [
              "Quantos jogadores tem cada equipe no beach soccer?",
              "Quantos períodos tem uma partida, e de quantos minutos?",
              "Por que a bola é jogada tanto pelo alto na areia?",
            ],
            answer: "1) Cinco, contando o goleiro (como no futsal). 2) Três períodos de 12 minutos. 3) Porque a bola rola mal e quica de forma irregular na areia; pelo alto ela chega mais rápido e com mais controle.",
          },
          recap: ["Beach soccer: 5 por equipe, 3 períodos de 12 minutos, sem impedimento.", "Todos trocam de função o tempo todo.", "A areia cansa mais: aumente a carga aos poucos e hidrate-se."],
        },
        {
          id: "areia-fundamentos-e-jogo",
          title: "Futebol de areia: fundamentos e jogo",
          summary: "Controle aéreo, voleio, bicicleta, organização da equipe e exercícios.",
          goals: ["Conhecer os fundamentos típicos da areia", "Entender as organizações 2-2 e 3-1", "Praticar com exercícios simples e seguros"],
          sections: [
            {
              title: "Fundamentos de areia",
              body: [
                { list: [
                  "Controle aéreo: dominar a bola ainda no ar, já que ela quase não fica no chão.",
                  "Passe aéreo: mandar a bola por cima da areia para o companheiro.",
                  "Voleio: chutar antes de a bola tocar o chão.",
                  "Meia-bicicleta: finalização acrobática com rotação do corpo, chutando a bola no ar.",
                  "Bicicleta: chute no ar com o corpo inclinado para trás e as pernas \"pedalando\".",
                  "Cabeceio e chute de longa distância, para surpreender o goleiro.",
                ] },
                { box: "atencao", text: "Bicicleta e meia-bicicleta exigem técnica e devem ser aprendidas aos poucos, com orientação e em lugar seguro. Nunca tente perto de outras pessoas." },
              ],
            },
            {
              title: "Organização da equipe",
              body: [
                { table: { caption: "Organizações mais usadas", head: ["Organização", "Como é", "Objetivo"], rows: [
                  ["2-2", "Dois mais defensivos e dois mais ofensivos", "Dividir as funções e equilibrar ataque e defesa"],
                  ["3-1", "Três dão apoio e constroem; um fica mais à frente", "Criar opções de passe e aproximar gente do gol"],
                ] } },
                "São referências, não posições fixas: os jogadores ajustam o tempo todo.",
                "No ataque: passes aéreos, voleios, chutes de longe, movimentação sem a bola, tabelas, aproveitar rebotes e jogadas ensaiadas nos tiros livres.",
                "Na defesa: proteger o meio, reduzir o espaço para o chute, atrapalhar os passes aéreos, acompanhar as movimentações e evitar faltas perto do gol.",
              ],
            },
            {
              title: "Exercícios práticos",
              body: [
                { table: { caption: "Quatro exercícios", head: ["Exercício", "Como fazer", "Treina"], rows: [
                  ["Bola no ar", "Um joga a bola com a mão; o outro controla e devolve", "Coordenação e domínio aéreo"],
                  ["Passe e chute", "Um faz um passe aéreo; o outro ajeita e finaliza", "Precisão e finalização"],
                  ["Voleio", "Com supervisão, chutar de voleio a partir de lançamentos controlados", "Tempo de bola e técnica de chute"],
                  ["Jogo reduzido", "Partidas com equipes pequenas num espaço adequado", "Movimentação, posicionamento e decisão"],
                ] } },
                { box: "chave", text: "Como o jogo muda muito rápido depois de um chute ou de um passe errado, movimentar-se sem a bola é o que cria as chances." },
              ],
            },
          ],
          activity: {
            title: "Pense como jogador de areia",
            steps: [
              "Por que o equilíbrio é tão importante na areia?",
              "Qual a diferença entre voleio e bicicleta?",
              "Que cuidados tomar ao treinar finalizações acrobáticas?",
            ],
            answer: "1) Porque a areia afunda e é instável: sem equilíbrio, fica difícil dominar, chutar e mudar de direção. 2) Voleio é qualquer chute antes de a bola tocar o chão; a bicicleta é um voleio acrobático, com o corpo de costas e inclinado para trás. 3) Aprender aos poucos, com orientação, num lugar seguro e longe de outras pessoas.",
          },
          recap: ["Na areia, a bola joga pelo alto: controle aéreo e voleio são essenciais.", "2-2 e 3-1 são referências, não posições fixas.", "Acrobacias só com orientação e em lugar seguro."],
        },
      ],
    },
  ],
};
