// Curso: Literatura ("Leia. Conecte. Argumente."). 4 módulos, 6 aulas.
// Segue o padrão de app/foundation-lessons.ts. As obras citadas são clássicas da literatura brasileira;
// as aulas resumem e comentam, sem reproduzir trechos longos.

import type { CourseContent } from "../foundation-lessons";
import { PROVA_LITERATURA } from "./literatura-prova";

export const LITERATURA: CourseContent = {
  closing: "Ler vai além de entender palavras: é conhecer outras realidades, pensar com a própria cabeça e defender ideias com clareza. Escolha o próximo livro e continue lendo, um pouco por dia.",
  quiz: PROVA_LITERATURA,
  stickers: [
    { id: "estante-completa", name: "Rato de biblioteca", how: "Abriu os 5 livros da estante." },
    { id: "mestre-do-modulo-1", name: "Leitor desperto", how: "Acertou 8 ou mais no quiz do Módulo 1." },
    { id: "mestre-do-modulo-2", name: "Dono das palavras", how: "Acertou 8 ou mais no quiz do Módulo 2." },
    { id: "mestre-do-modulo-3", name: "Olhar crítico", how: "Acertou 8 ou mais no quiz do Módulo 3." },
    { id: "mestre-do-modulo-4", name: "Bom de argumento", how: "Acertou 8 ou mais no quiz do Módulo 4." },
  ],
  modules: [
    {
      title: "Despertar o leitor",
      lessons: [
        {
          id: "como-ler-melhor",
          title: "Como ler melhor",
          summary: "Por que ler, estratégias para entender o texto e um hábito de leitura possível.",
          goals: ["Entender por que a leitura faz diferença no dia a dia", "Usar estratégias antes, durante e depois de ler", "Achar a ideia principal de um texto", "Criar uma rotina de leitura que dê para manter"],
          sections: [
            {
              title: "Por que ler",
              body: [
                "Ler não é só tarefa da escola. Quem lê bem entende melhor as notícias, um contrato, uma mensagem de golpe, uma questão de prova. A leitura ajuda a se comunicar, a ter autonomia e a pensar com a própria cabeça.",
                { box: "chave", text: "Ler é uma ferramenta para entender o mundo, defender ideias e fazer escolhas mais conscientes." },
              ],
            },
            {
              title: "Antes, durante e depois",
              body: [
                { table: { caption: "Estratégias de leitura", head: ["Momento", "O que fazer"], rows: [
                  ["Antes", "Olhe o título, o autor, a data e as imagens. Pergunte: do que deve tratar? Para que estou lendo?"],
                  ["Durante", "Marque palavras que não conhece, sublinhe pouco e pare no fim de cada parte para resumir de cabeça."],
                  ["Depois", "Feche o texto e explique com as suas palavras. Volte só no que ficou confuso."],
                ] } },
                { box: "pratica", text: "No próximo texto que ler, depois de cada parágrafo, escreva numa linha só: \"este parágrafo diz que...\"." },
              ],
            },
            {
              title: "A ideia principal",
              body: [
                "Todo texto tem um tema (o assunto) e uma ideia principal (o que o texto diz sobre o assunto). Também tem um objetivo (informar, convencer, divertir, emocionar) e um ponto de vista.",
                { box: "exemplo", text: "Tema: celular na escola. Ideia principal: \"o celular deveria ser usado só nas atividades com orientação do professor\". Objetivo: convencer. O tema é o mesmo para quem é contra ou a favor; a ideia principal muda." },
              ],
            },
            {
              title: "Um hábito de leitura possível",
              body: [
                { list: [
                  "Comece pequeno: 10 páginas ou 15 minutos por dia já fazem diferença.",
                  "Leia sempre no mesmo momento (no ônibus, depois do almoço, antes de dormir).",
                  "Escolha livros de que você goste. Não gostou? Pode trocar.",
                  "Anote em poucas linhas o que achou de cada capítulo.",
                ] },
                { tool: "estante" },
                { box: "atencao", text: "Errar o ritmo faz parte. Se ficar dias sem ler, volte com uma meta menor, sem culpa." },
              ],
            },
          ],
          activity: {
            title: "Meu perfil de leitor",
            steps: [
              "Qual foi o último texto longo que você leu até o fim? Por que terminou (ou por que parou)?",
              "O que mais atrapalha a sua leitura: tempo, palavras difíceis, distração ou falta de interesse?",
              "Que horário e meta (páginas ou minutos) você consegue manter nesta semana?",
            ],
            note: "Guarde as respostas: no fim do curso, compare com o que mudou.",
          },
          recap: ["Ler bem ajuda na escola, no trabalho e a não cair em armadilhas.", "Leia em três tempos: antes, durante e depois.", "Um pouco todo dia vale mais que muito de vez em quando."],
        },
        {
          id: "machado-de-assis",
          title: "Primeiro contato: Machado de Assis",
          summary: "Missa do Galo e Dom Casmurro, e a arte de deixar o leitor em dúvida.",
          goals: ["Conhecer Machado de Assis e o Realismo", "Ler Missa do Galo prestando atenção no não dito", "Entender por que o narrador de Dom Casmurro não é confiável"],
          sections: [
            {
              title: "Quem foi Machado de Assis",
              body: [
                "Machado de Assis (1839–1908) nasceu no Rio de Janeiro, numa família pobre, neto de pessoas escravizadas libertas. Aprendeu quase tudo sozinho, foi tipógrafo, jornalista e funcionário público, e se tornou o maior nome da literatura brasileira. Foi o primeiro presidente da Academia Brasileira de Letras.",
                "As obras mais maduras dele são do Realismo: mostram as pessoas como elas são, com interesses, vaidades e contradições, muitas vezes com ironia.",
              ],
            },
            {
              title: "Missa do Galo",
              body: [
                "Neste conto, um homem lembra de uma noite de Natal da juventude. Ele esperava a hora de ir à missa do galo, à meia-noite, e acabou conversando com Conceição, a dona da casa onde morava. Quase nada \"acontece\", mas a conversa é cheia de silêncios, olhares e frases pela metade.",
                { box: "exemplo", title: "Como o conto começa", text: "\"Nunca pude entender a conversação que tive com uma senhora, há muitos anos, contava eu dezessete, ela trinta.\"" },
                { box: "chave", text: "Em Machado, o que não é dito importa tanto quanto o que é dito. O leitor precisa ler as entrelinhas." },
              ],
            },
            {
              title: "Dom Casmurro",
              body: [
                "Bento Santiago, o Bentinho, já velho e apelidado de Dom Casmurro, conta a própria vida: a infância com Capitu, o casamento e o ciúme que cresce até ele ter certeza de que foi traído com o melhor amigo, Escobar.",
                { box: "exemplo", title: "Como o livro começa", text: "\"Uma noite destas, vindo da cidade para o Engenho Novo, encontrei no trem da Central um rapaz aqui do bairro…\"" },
                "O detalhe genial: quem conta é o próprio Bentinho. Só conhecemos a versão dele, e ele é um homem ciumento e magoado. Capitu traiu ou não? O livro não responde.",
                { box: "exemplo", text: "É como ouvir só um lado de uma briga entre dois amigos. Antes de concluir, vale perguntar: quem está contando, e que interesse essa pessoa tem?" },
              ],
            },
          ],
          activity: {
            title: "Quem está contando?",
            steps: [
              "Pense numa história que alguém já contou para você sobre uma briga.",
              "Que partes podem ter ficado de fora, ou ter sido aumentadas, por quem contou?",
              "Agora responda: por que o leitor de Dom Casmurro não consegue ter certeza se houve traição?",
            ],
            answer: "Porque o narrador é o próprio Bentinho, que está convencido da traição e cheio de ciúme. Tudo o que sabemos de Capitu passa pelo olhar dele. As \"provas\" que ele apresenta podem ser interpretadas de outro jeito. Esse tipo de narrador se chama narrador não confiável.",
          },
          recap: ["Machado de Assis é o maior nome do Realismo brasileiro.", "Em Missa do Galo, o não dito é o centro do conto.", "Em Dom Casmurro, só ouvimos a versão de Bentinho."],
        },
      ],
      quiz: {
        sticker: { id: "mestre-do-modulo-1", min: 8 },
        questions: [
          { question: "Pela tabela de estratégias, o que fazer antes de começar a ler?", options: ["Marcar as palavras desconhecidas e sublinhar pouco.", "Olhar título, autor, data e imagens.", "Fechar o texto e explicar com as próprias palavras.", "Procurar no dicionário as palavras difíceis do texto."], answer: 1, why: "Marcar palavras é durante a leitura; explicar com as próprias palavras é depois." },
          { question: "Qual é a diferença entre tema e ideia principal?", options: ["Tema é o que o texto diz; ideia principal é o assunto.", "Tema é o objetivo do autor; ideia principal é o título.", "São a mesma coisa, com nomes diferentes.", "Tema é o assunto; ideia principal, o que se diz dele."], answer: 3, why: "No exemplo, o tema é celular na escola; a ideia principal é o que o texto defende sobre isso." },
          { question: "No exemplo do celular na escola, o que muda entre quem é contra e quem é a favor?", options: ["O tema.", "A ideia principal.", "O assunto.", "O tipo de texto."], answer: 1, why: "O tema é o mesmo para os dois lados; a ideia principal muda." },
          { question: "Que meta a aula sugere para começar um hábito de leitura?", options: ["Um livro inteiro por semana.", "Uma hora por dia, sem pular nenhum.", "10 páginas ou 15 minutos por dia.", "50 páginas em cada fim de semana."], answer: 2, why: "Começar pequeno: 10 páginas ou 15 minutos por dia já fazem diferença." },
          { question: "Você ficou uma semana sem ler. O que a aula recomenda?", options: ["Voltar com uma meta menor, sem culpa.", "Compensar lendo o dobro no dia seguinte.", "Recomeçar o livro do início.", "Trocar a leitura por outro hábito."], answer: 0, why: "Errar o ritmo faz parte." },
          { question: "Qual papel Machado de Assis teve na Academia Brasileira de Letras?", options: ["Foi o fundador do jornal da Academia.", "Foi o primeiro presidente.", "Foi o primeiro tipógrafo.", "Foi o primeiro tesoureiro."], answer: 1, why: "Ele foi tipógrafo, jornalista e funcionário público, e o primeiro presidente da Academia." },
          { question: "Em Missa do Galo, com quem o narrador conversa naquela noite?", options: ["Capitu, a amiga de infância.", "Bertoleza, a companheira do vendeiro.", "Sinhá Vitória, a mulher do vaqueiro.", "Conceição, a dona da casa onde morava."], answer: 3, why: "Ele esperava a missa do galo e acabou conversando com Conceição." },
          { question: "Segundo a aula, em Machado, o que importa tanto quanto o que é dito?", options: ["O cenário da história.", "O título da obra.", "O que não é dito.", "O final da história."], answer: 2, why: "O leitor precisa ler as entrelinhas: silêncios, olhares e frases pela metade." },
          { question: "Por que o leitor de Dom Casmurro não consegue ter certeza da traição?", options: ["O último capítulo do livro se perdeu.", "Capitu conta a história e esconde a verdade.", "Escobar narra a história e defende a amiga de todas as acusações.", "Só conhecemos a versão de Bentinho, ciumento e magoado."], answer: 3, why: "É um narrador não confiável: tudo passa pelo olhar dele." },
          { question: "Com quem Bentinho acredita ter sido traído?", options: ["Com Escobar, o melhor amigo.", "Com João Romão, o vendeiro.", "Com o padre da missa do galo.", "Com Fabiano, o vaqueiro."], answer: 0, why: "Bentinho tem certeza de que Capitu o traiu com Escobar. O livro não responde." },
        ],
      },
    },
    {
      title: "Palavras e repertório",
      lessons: [
        {
          id: "vocabulario-e-estilos",
          title: "Vocabulário e estilos literários",
          summary: "Entender palavras pelo contexto e reconhecer os grandes movimentos da literatura brasileira.",
          goals: ["Descobrir o sentido de uma palavra pelo contexto", "Montar um glossário pessoal", "Reconhecer Romantismo, Realismo, Naturalismo e Modernismo"],
          sections: [
            {
              title: "A palavra pelo contexto",
              body: [
                "Nem sempre é preciso parar a leitura para procurar uma palavra. Muitas vezes, a frase em volta dá a pista.",
                { list: [
                  "Leia a frase inteira e a seguinte.",
                  "Pergunte: a palavra parece boa ou ruim? É uma ação, uma coisa ou uma característica?",
                  "Teste trocar por uma palavra que você conhece. A frase continua fazendo sentido?",
                  "Se ainda ficar em dúvida, aí sim procure no dicionário.",
                ], ordered: true },
                { box: "exemplo", text: "\"Depois de horas de caminhada sob o sol, chegou exausto e se jogou no chão.\" Mesmo sem conhecer \"exausto\", dá para deduzir: muito cansado." },
                { box: "pratica", text: "Monte um glossário: cada palavra nova vai para uma lista com a frase em que apareceu e o sentido com as suas palavras." },
              ],
            },
            {
              title: "Os grandes movimentos",
              body: [
                "Cada época escreveu de um jeito. Conhecer os movimentos ajuda a entender por que um livro é como é.",
                { table: { caption: "Quatro movimentos da literatura brasileira", head: ["Movimento", "Características", "Exemplo"], rows: [
                  ["Romantismo (século XIX)", "Emoção, amor idealizado, sentimentos intensos", "Uma Lágrima de Mulher, primeiro romance de Aluísio Azevedo"],
                  ["Realismo (fim do século XIX)", "Pessoas como elas são, com interesses e contradições; ironia", "Dom Casmurro e Missa do Galo, de Machado de Assis"],
                  ["Naturalismo (fim do século XIX)", "O ambiente e a pobreza moldam as pessoas; descrições cruas", "O Cortiço, de Aluísio Azevedo"],
                  ["Modernismo (século XX)", "Linguagem mais livre, olhar para o Brasil real, crítica social", "Vidas Secas, de Graciliano Ramos"],
                ] } },
                { box: "exemplo", text: "Aluísio Azevedo começou romântico e depois virou um dos principais naturalistas. O mesmo autor mudou de estilo junto com a época." },
              ],
            },
            {
              title: "Tema, personagens e conflito",
              body: [
                "Para analisar qualquer história, responda três perguntas:",
                { list: ["Tema: sobre o que é a história, no fundo (ciúme, pobreza, sobrevivência)?", "Personagens: quem são e o que querem?", "Conflito: o que impede os personagens de conseguir o que querem?"] },
                { box: "chave", text: "Toda história gira em torno de um conflito. Achou o conflito, achou o motor da história." },
              ],
            },
          ],
          activity: {
            title: "Descubra pelo contexto",
            steps: [
              "\"O sertanejo, resignado, aceitou a perda da colheita e recomeçou o trabalho no dia seguinte.\" O que quer dizer \"resignado\"?",
              "\"A notícia era tão efêmera que, no dia seguinte, ninguém lembrava dela.\" O que quer dizer \"efêmera\"?",
              "Escolha uma história que você conhece (livro, filme ou série) e diga o tema, os personagens principais e o conflito.",
            ],
            answer: "1) Resignado: que aceita uma situação ruim sem se revoltar. 2) Efêmera: que dura pouco, passageira. 3) Exemplo: num filme de super-herói, o tema pode ser responsabilidade; os personagens são o herói e o vilão; o conflito é o vilão querendo destruir a cidade enquanto o herói tenta salvar quem ama.",
          },
          recap: ["O contexto quase sempre dá a pista do sentido de uma palavra.", "Romantismo emociona, Realismo observa, Naturalismo mostra o ambiente, Modernismo renova.", "Tema, personagens e conflito: as três chaves de qualquer história."],
        },
      ],
      quiz: {
        sticker: { id: "mestre-do-modulo-2", min: 8 },
        questions: [
          { question: "Qual é o primeiro passo para entender uma palavra pelo contexto?", options: ["Procurar logo no dicionário.", "Ler a frase inteira e a seguinte.", "Pular a palavra e seguir lendo.", "Trocar por um sinônimo qualquer."], answer: 1, why: "Depois vêm: perguntar se é boa ou ruim, testar uma troca e, se ainda houver dúvida, o dicionário." },
          { question: "Quando a aula diz para recorrer ao dicionário?", options: ["Sempre, antes de continuar a leitura.", "Nunca: o contexto sempre resolve qualquer dúvida.", "Se ainda ficar em dúvida depois de usar o contexto.", "Só com livros do século XIX."], answer: 2, why: "O dicionário é o último passo." },
          { question: "O que vai no glossário, segundo a aula?", options: ["Só a palavra e o significado copiado do dicionário.", "A palavra, o autor e a página do livro.", "A palavra e um desenho para lembrar dela.", "A palavra, a frase onde apareceu e o sentido."], answer: 3, why: "O glossário guarda a palavra no contexto e o sentido explicado por você." },
          { question: "Uma Lágrima de Mulher é exemplo de qual movimento?", options: ["Romantismo", "Realismo", "Naturalismo", "Modernismo"], answer: 0, why: "É o primeiro romance de Aluísio Azevedo, ainda romântico." },
          { question: "Qual movimento mostra o ambiente e a pobreza moldando as pessoas, com descrições cruas?", options: ["Romantismo", "Realismo", "Modernismo", "Naturalismo"], answer: 3, why: "É o Naturalismo, de O Cortiço." },
          { question: "Pessoas como elas são, com interesses e contradições, e muita ironia: qual movimento?", options: ["Romantismo", "Realismo", "Naturalismo", "Modernismo"], answer: 1, why: "É o Realismo, de Dom Casmurro e Missa do Galo." },
          { question: "Em qual movimento a aula coloca Vidas Secas?", options: ["Naturalismo", "Romantismo", "Modernismo", "Realismo"], answer: 2, why: "Linguagem mais livre, olhar para o Brasil real e crítica social." },
          { question: "O que a aula conta sobre a carreira de Aluísio Azevedo?", options: ["Começou romântico e virou um dos principais naturalistas.", "Começou naturalista e terminou a carreira já como modernista.", "Foi o primeiro presidente da Academia de Letras.", "Escreveu os dois livros no sertão nordestino."], answer: 0, why: "O mesmo autor mudou de estilo junto com a época." },
          { question: "Quais são as três perguntas para analisar qualquer história?", options: ["Autor, data e editora.", "Começo, meio e fim.", "Tema, personagens e conflito.", "Cenário, narrador e título do livro."], answer: 2, why: "Sobre o que é, quem são e o que querem, e o que os impede." },
          { question: "Segundo a aula, o que é o motor de uma história?", options: ["O tema.", "O conflito.", "O narrador.", "O cenário."], answer: 1, why: "Toda história gira em torno de um conflito." },
        ],
      },
    },
    {
      title: "Ler o mundo criticamente",
      lessons: [
        {
          id: "literatura-e-sociedade",
          title: "Literatura e realidade social",
          summary: "O Cortiço e Vidas Secas como janelas para a desigualdade no Brasil.",
          goals: ["Relacionar obras literárias com a realidade social", "Analisar atitudes e conflitos de personagens", "Comparar pontos de vista sobre um mesmo tema"],
          sections: [
            {
              title: "O Cortiço",
              body: [
                "Publicado em 1890 por Aluísio Azevedo, o livro se passa num cortiço (um conjunto de casinhas pobres e apertadas) no Rio de Janeiro. O dono, João Romão, enriquece explorando os moradores e a própria companheira, Bertoleza, uma mulher escravizada que ele engana.",
                "No Naturalismo, o ambiente é quase um personagem: a pobreza, o calor e o aperto do cortiço moldam o comportamento das pessoas.",
                { box: "exemplo", title: "Como o livro começa", text: "\"João Romão foi, dos treze aos vinte e cinco anos, empregado de um vendeiro que enriqueceu…\"" },
                { box: "chave", text: "O livro mostra como a ambição de poucos se apoia no trabalho e no sofrimento de muitos." },
              ],
            },
            {
              title: "Vidas Secas",
              body: [
                "Publicado em 1938 por Graciliano Ramos, conta a vida de uma família de retirantes no sertão nordestino: Fabiano, Sinhá Vitória, os dois filhos (chamados só de menino mais velho e menino mais novo) e a cachorra Baleia. Eles fogem da seca, trabalham para um patrão que os explora e sonham com uma vida melhor.",
                "A linguagem é seca e curta, como a terra e como a vida dos personagens. Fabiano mal consegue falar, e isso o deixa à mercê de quem tem estudo e poder.",
                { box: "exemplo", title: "Como o livro começa", text: "\"Na planície avermelhada os juazeiros alargavam duas manchas verdes.\"" },
                { box: "exemplo", text: "Os filhos nem têm nome. É um jeito de mostrar como aquelas pessoas eram invisíveis para a sociedade." },
              ],
            },
            {
              title: "Um tema, vários olhares",
              body: [
                "Uma leitura crítica pergunta: de que ponto de vista essa história é contada? Quem tem voz e quem fica calado? O que mudou de lá para cá, e o que continua igual?",
                { table: { caption: "Duas obras, um tema: desigualdade", head: ["", "O Cortiço", "Vidas Secas"], rows: [
                  ["Onde", "Cidade (Rio de Janeiro)", "Sertão nordestino"],
                  ["Quem sofre", "Moradores pobres e Bertoleza", "A família de Fabiano"],
                  ["Quem lucra", "João Romão", "O patrão e as autoridades"],
                  ["Pergunta para hoje", "Onde vemos moradia precária e exploração hoje?", "Quem ainda migra fugindo da falta de oportunidade?"],
                ] } },
              ],
            },
          ],
          activity: {
            title: "Do livro para a vida real",
            steps: [
              "Escolha uma das duas obras.",
              "Aponte uma injustiça que aparece na história.",
              "Procure uma notícia recente sobre um problema parecido no Brasil.",
              "Escreva três linhas comparando o livro com a notícia: o que mudou e o que continua igual?",
            ],
            note: "Não há resposta única. O importante é justificar a comparação com algo do livro e algo da notícia.",
          },
          recap: ["O Cortiço mostra a exploração na cidade; Vidas Secas, a miséria no sertão.", "No Naturalismo, o ambiente molda as pessoas.", "Ler criticamente é perguntar quem tem voz e quem lucra."],
        },
        {
          id: "fatos-fontes-e-dinheiro",
          title: "Fatos, fontes e dinheiro",
          summary: "Separar fato de opinião, checar fontes e ler com olhar crítico até conselhos sobre dinheiro.",
          goals: ["Diferenciar fato, opinião e informação falsa", "Verificar se uma fonte é confiável", "Ler conselhos financeiros com senso crítico"],
          sections: [
            {
              title: "Fato, opinião e informação falsa",
              body: [
                { table: { caption: "Três coisas diferentes", head: ["Tipo", "O que é", "Exemplo"], rows: [
                  ["Fato", "Algo que pode ser comprovado", "\"Vidas Secas foi publicado em 1938.\""],
                  ["Opinião", "Um julgamento pessoal", "\"Vidas Secas é o livro mais triste do Brasil.\""],
                  ["Informação falsa", "Algo apresentado como fato, mas que não é verdade", "\"Graciliano Ramos nunca esteve no sertão.\""],
                ] } },
                { box: "chave", text: "Opinião não é mentira, mas também não é prova. Um bom argumento junta opinião com fatos." },
              ],
            },
            {
              title: "Como checar uma fonte",
              body: [
                { list: [
                  "Quem publicou? Um veículo conhecido, um órgão oficial, um especialista ou um perfil anônimo?",
                  "Tem data? A informação ainda vale?",
                  "Outras fontes sérias dizem a mesma coisa?",
                  "O título é exagerado ou tenta causar medo e raiva? Desconfie.",
                  "Leu só o título? Leia a matéria inteira antes de compartilhar.",
                ], ordered: true },
              ],
            },
            {
              title: "Ler conselhos sobre dinheiro",
              body: [
                "Em A Arte de Ganhar Dinheiro (1880), o empresário americano P. T. Barnum reuniu conselhos como fugir das dívidas, gastar menos do que se ganha, escolher um trabalho adequado e ser persistente.",
                "Alguns conselhos continuam úteis. Mas o livro é de outra época e de alguém que ficou famoso também por exagerar nas propagandas dos próprios espetáculos. Por isso vale ler com o mesmo olhar crítico de qualquer texto.",
                { box: "atencao", text: "Desconfie de qualquer promessa de dinheiro fácil, rápido e garantido, num livro antigo ou num vídeo de hoje. Para aprofundar, veja o curso de Educação financeira da Fundação." },
              ],
            },
          ],
          activity: {
            title: "Fato ou opinião?",
            steps: [
              "\"O Cortiço foi escrito por Aluísio Azevedo.\"",
              "\"Ninguém deveria ser obrigado a ler livros antigos na escola.\"",
              "\"Um vídeo diz que basta investir R$ 50 para ficar rico em um mês.\"",
            ],
            answer: "1) Fato: dá para comprovar. 2) Opinião: é um julgamento pessoal, que pode ser defendido com argumentos. 3) Promessa enganosa: ninguém pode garantir lucro alto e rápido. É um sinal clássico de golpe.",
          },
          recap: ["Fato se comprova; opinião se argumenta; informação falsa se desmente.", "Antes de acreditar: quem publicou, quando e quem mais confirma?", "Promessa de dinheiro fácil e garantido é sinal de alerta."],
        },
      ],
      quiz: {
        sticker: { id: "mestre-do-modulo-3", min: 8 },
        questions: [
          { question: "Quem publicou O Cortiço, e em que ano?", options: ["Machado de Assis, em 1899.", "Graciliano Ramos, em 1938.", "Aluísio Azevedo, em 1879.", "Aluísio Azevedo, em 1890."], answer: 3, why: "1879 é o ano de Uma Lágrima de Mulher, o primeiro romance dele." },
          { question: "Em O Cortiço, quem é Bertoleza?", options: ["A dona do cortiço, que explora os moradores.", "Uma escravizada que João Romão engana.", "A esposa de Fabiano, no sertão.", "Uma vizinha que denuncia João Romão."], answer: 1, why: "João Romão enriquece explorando os moradores e a própria companheira, Bertoleza." },
          { question: "Por que, segundo a aula, os filhos de Fabiano não têm nome?", options: ["Para o leitor escolher os nomes.", "Porque ainda eram bebês e não tinham sido batizados.", "Para mostrar como aquelas pessoas eram invisíveis.", "Porque o livro ficou sem revisão."], answer: 2, why: "São chamados só de menino mais velho e menino mais novo." },
          { question: "Como a aula descreve a linguagem de Vidas Secas?", options: ["Longa e enfeitada, cheia de adjetivos e de descrições.", "Cheia de ironia, como a de Machado.", "Romântica, com o amor idealizado.", "Seca e curta, como a vida dos personagens."], answer: 3, why: "Fabiano mal consegue falar, e isso o deixa à mercê de quem tem estudo e poder." },
          { question: "Na tabela que compara as duas obras, quem lucra em Vidas Secas?", options: ["O patrão e as autoridades.", "João Romão.", "O próprio Fabiano.", "Os moradores da cidade."], answer: 0, why: "Em O Cortiço quem lucra é João Romão." },
          { question: "\"Vidas Secas foi publicado em 1938.\" Pela tabela da aula, isso é:", options: ["Uma opinião.", "Um fato.", "Uma informação falsa.", "Um argumento."], answer: 1, why: "Pode ser comprovado." },
          { question: "O que a aula diz sobre a opinião?", options: ["É sempre uma informação falsa, disfarçada.", "É o mesmo que um fato.", "Não é mentira, mas também não é prova.", "Não pode ser defendida com argumentos."], answer: 2, why: "Um bom argumento junta opinião com fatos." },
          { question: "Qual destes é um dos passos para checar uma fonte?", options: ["Ver se outras fontes sérias dizem a mesma coisa.", "Confiar quando o título é chamativo e muito compartilhado.", "Compartilhar e esperar alguém corrigir.", "Ler só o título para ganhar tempo."], answer: 0, why: "Também: quem publicou, se tem data e se o título tenta causar medo ou raiva." },
          { question: "Em que ano saiu A Arte de Ganhar Dinheiro, de P. T. Barnum?", options: ["1890", "1938", "1899", "1880"], answer: 3, why: "1890 é O Cortiço; 1938, Vidas Secas; 1899, Dom Casmurro." },
          { question: "Por que a aula pede olhar crítico com o livro de Barnum?", options: ["Porque todos os conselhos dele estão errados.", "É de outra época, de alguém famoso por exagerar.", "Porque é uma obra de ficção, sem conselhos reais.", "Porque foi escrito por um banco para vender produtos."], answer: 1, why: "Alguns conselhos continuam úteis, mas vale ler com o mesmo olhar crítico de qualquer texto." },
        ],
      },
    },
    {
      title: "Conectar e argumentar",
      lessons: [
        {
          id: "argumentar-com-repertorio",
          title: "Argumentar com repertório",
          summary: "Montar um argumento, usar a leitura como repertório e planejar as próximas leituras.",
          goals: ["Diferenciar opinião solta de argumento", "Organizar um parágrafo argumentativo", "Usar obras lidas como repertório em debates e redações"],
          sections: [
            {
              title: "De opinião a argumento",
              body: [
                "Uma opinião sozinha é só um \"eu acho\". Um argumento explica por quê e mostra um exemplo ou uma prova.",
                { table: { caption: "A estrutura de um argumento", head: ["Parte", "O que é", "Exemplo"], rows: [
                  ["Ponto de vista", "O que você defende", "A leitura deveria ter mais espaço na escola."],
                  ["Justificativa", "Por que você defende", "Porque desenvolve a interpretação, útil em todas as matérias."],
                  ["Exemplo ou prova", "Um caso, dado ou obra que sustenta", "Em Dom Casmurro, aprendemos a desconfiar de quem conta a história, habilidade essencial para ler notícias."],
                ] } },
              ],
            },
            {
              title: "Leitura como repertório",
              body: [
                "Repertório é o conjunto de conhecimentos que você usa para sustentar ideias: livros, filmes, fatos históricos, dados. Na redação do ENEM, por exemplo, um repertório bem usado mostra que você conecta o tema com o que sabe.",
                { list: [
                  "Desigualdade social e moradia: O Cortiço.",
                  "Fome, seca e migração: Vidas Secas.",
                  "Ciúme, manipulação e versões de uma história: Dom Casmurro.",
                ] },
                { box: "atencao", text: "Repertório não é enfeite. Ele precisa ter ligação clara com o argumento, e você precisa explicar essa ligação." },
              ],
            },
            {
              title: "Debater com respeito",
              body: [
                { list: [
                  "Escute o argumento do outro até o fim.",
                  "Discorde da ideia, nunca ataque a pessoa.",
                  "Responda com justificativa e exemplo.",
                  "Mudar de opinião diante de um bom argumento é sinal de inteligência, não de fraqueza.",
                ] },
                { box: "pratica", text: "Monte o seu plano de leitura: escolha um livro, defina páginas por dia e uma data para terminar. No fim, escreva um parágrafo argumentativo sobre ele." },
              ],
            },
          ],
          activity: {
            title: "Seu parágrafo argumentativo",
            steps: [
              "Escolha um tema: desigualdade, fome ou confiança nas informações.",
              "Escreva o seu ponto de vista numa frase.",
              "Acrescente uma justificativa.",
              "Use uma obra do curso como exemplo e explique a ligação.",
            ],
            answer: "Exemplo: \"A desigualdade ainda prende muitas famílias à pobreza no Brasil (ponto de vista). Sem acesso a estudo e trabalho digno, fica difícil mudar de vida (justificativa). Em Vidas Secas, Fabiano trabalha muito, mas não consegue sair do lugar porque não sabe fazer contas nem se defender do patrão que o engana (exemplo).\"",
          },
          recap: ["Argumento é ponto de vista, justificativa e exemplo.", "Livros lidos viram repertório para debates e redações.", "No debate, discorde da ideia, nunca da pessoa."],
        },
      ],
      quiz: {
        sticker: { id: "mestre-do-modulo-4", min: 8 },
        questions: [
          { question: "Quais são as partes de um argumento, segundo a aula?", options: ["Tema, personagens e conflito.", "Introdução, desenvolvimento e conclusão do texto todo.", "Ponto de vista, justificativa e exemplo ou prova.", "Fato, opinião e informação falsa."], answer: 2, why: "Uma opinião sozinha é só um \"eu acho\"." },
          { question: "\"Porque desenvolve a interpretação, útil em todas as matérias.\" Que parte do argumento é essa?", options: ["Ponto de vista", "Justificativa", "Exemplo ou prova", "Conclusão"], answer: 1, why: "A justificativa diz por que você defende o ponto de vista." },
          { question: "O que é repertório, para a aula?", options: ["A lista de livros obrigatórios da escola no ano.", "O resumo de um livro lido.", "Uma opinião bem escrita, sem prova.", "Conhecimentos que sustentam as suas ideias."], answer: 3, why: "Livros, filmes, fatos históricos e dados." },
          { question: "Para falar de fome, seca e migração, qual obra a aula indica como repertório?", options: ["O Cortiço", "Dom Casmurro", "Vidas Secas", "Missa do Galo"], answer: 2, why: "O Cortiço é repertório para desigualdade e moradia; Dom Casmurro, para ciúme e versões de uma história." },
          { question: "Para falar de desigualdade social e moradia, qual obra a aula indica?", options: ["O Cortiço", "Vidas Secas", "Dom Casmurro", "Uma Lágrima de Mulher"], answer: 0, why: "O cortiço era um conjunto de casinhas pobres e apertadas." },
          { question: "Para falar de ciúme, manipulação e versões de uma história, qual obra a aula indica?", options: ["Vidas Secas", "Dom Casmurro", "O Cortiço", "Missa do Galo"], answer: 1, why: "Em Dom Casmurro, só ouvimos a versão de Bentinho." },
          { question: "Qual é o alerta da aula sobre o repertório?", options: ["Quanto mais citações, melhor o texto.", "Só vale citar livros cobrados no ENEM.", "Deve aparecer sempre no último parágrafo da redação.", "Ter ligação clara com o argumento, explicada."], answer: 3, why: "Repertório não é enfeite." },
          { question: "No debate, o que a aula recomenda?", options: ["Discordar da ideia, nunca atacar a pessoa.", "Interromper quando discordar.", "Ignorar os argumentos que forem diferentes do seu.", "Falar mais alto para ser ouvido."], answer: 0, why: "Escute até o fim e responda com justificativa e exemplo." },
          { question: "Mudar de opinião diante de um bom argumento é, segundo a aula:", options: ["Sinal de fraqueza no debate.", "Perder o debate.", "Sinal de inteligência, não de fraqueza.", "Proibido num debate formal."], answer: 2, why: "Um bom argumento pode, sim, mudar a nossa opinião." },
          { question: "O que o plano de leitura da aula pede?", options: ["Três livros lidos ao mesmo tempo.", "Um livro, páginas por dia e data para acabar.", "Ler só nas férias, sem meta.", "Um resumo de cada capítulo para entregar ao professor."], answer: 1, why: "No fim, você escreve um parágrafo argumentativo sobre o livro." },
        ],
      },
    },
  ],
};
