// Curso: Literatura ("Leia. Conecte. Argumente."). 4 módulos, 6 aulas.
// Segue o padrão de app/foundation-lessons.ts. As obras citadas são clássicas da literatura brasileira;
// as aulas resumem e comentam, sem reproduzir trechos longos.

import type { CourseContent } from "../foundation-lessons";

export const LITERATURA: CourseContent = {
  closing: "Ler vai além de entender palavras: é conhecer outras realidades, pensar com a própria cabeça e defender ideias com clareza. Escolha o próximo livro e continue lendo, um pouco por dia.",
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
                { box: "chave", text: "Em Machado, o que não é dito importa tanto quanto o que é dito. O leitor precisa ler as entrelinhas." },
              ],
            },
            {
              title: "Dom Casmurro",
              body: [
                "Bento Santiago, o Bentinho, já velho e apelidado de Dom Casmurro, conta a própria vida: a infância com Capitu, o casamento e o ciúme que cresce até ele ter certeza de que foi traído com o melhor amigo, Escobar.",
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
                { box: "chave", text: "O livro mostra como a ambição de poucos se apoia no trabalho e no sofrimento de muitos." },
              ],
            },
            {
              title: "Vidas Secas",
              body: [
                "Publicado em 1938 por Graciliano Ramos, conta a vida de uma família de retirantes no sertão nordestino: Fabiano, Sinhá Vitória, os dois filhos (chamados só de menino mais velho e menino mais novo) e a cachorra Baleia. Eles fogem da seca, trabalham para um patrão que os explora e sonham com uma vida melhor.",
                "A linguagem é seca e curta, como a terra e como a vida dos personagens. Fabiano mal consegue falar, e isso o deixa à mercê de quem tem estudo e poder.",
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
    },
  ],
};
