// Curso: Autodesenvolvimento. 3 módulos (as três apostilas), 5 aulas.
// Segue o padrão de app/foundation-lessons.ts.

import type { CourseContent } from "../foundation-lessons";

export const AUTODESENVOLVIMENTO: CourseContent = {
  closing: "Grandes mudanças não acontecem da noite para o dia: começam com pequenas atitudes repetidas. Você não precisa mudar tudo hoje. Precisa só dar o primeiro passo e ser 1% melhor a cada dia.",
  modules: [
    {
      title: "Autoconhecimento e mentalidade",
      lessons: [
        {
          id: "autoconhecimento-e-mentalidade",
          title: "Autoconhecimento e mentalidade",
          summary: "Conhecer a si mesmo e acreditar que dá para aprender.",
          goals: ["Entender o que é autoconhecimento", "Diferenciar mentalidade fixa e de crescimento", "Identificar os seus padrões de comportamento"],
          sections: [
            {
              title: "O que é autoconhecimento?",
              body: [
                "Autoconhecimento é reconhecer e entender as suas emoções, pensamentos, valores, qualidades, dificuldades e comportamentos.",
                "Ele ajuda a:",
                { list: ["Ver seus pontos fortes e o que precisa melhorar", "Entender as próprias emoções", "Perceber comportamentos que atrapalham", "Tomar decisões mais conscientes", "Criar metas que combinam com você"] },
                { box: "chave", text: "Conhecer a si mesmo não é ser perfeito nem ter todas as respostas. É estar disposto a aprender sobre você." },
              ],
            },
            {
              title: "Mentalidade fixa e de crescimento",
              body: [
                "Mentalidade (ou mindset) é o jeito como a gente encara desafios, erros e dificuldades.",
                { table: { caption: "Dois jeitos de pensar", head: ["Mentalidade fixa", "Mentalidade de crescimento"], rows: [
                  ["\"Não sou capaz disso.\"", "\"Posso aprender a fazer isso.\""],
                  ["Foge de desafios por medo de errar", "Vê desafios como chance de aprender"],
                  ["Acha que errar é fracassar", "Usa os erros para ver o que melhorar"],
                  ["Desiste quando fica difícil", "Procura outro jeito de avançar"],
                ] } },
                "Ter mentalidade de crescimento não é achar que dá para fazer qualquer coisa sem limites. É saber que dá para aprender e melhorar com prática e esforço.",
              ],
            },
            {
              title: "Mudar a forma de pensar",
              body: [
                "O que a gente pensa influencia o que sente e o que faz. Quem acha que não vai conseguir, desanima e adia. Quem vê a tarefa como aprendizado, procura saídas e começa.",
                "Pensar positivo sozinho não resolve: o pensamento precisa vir junto com atitude e planejamento.",
                { box: "exemplo", text: "Uma pessoa quer estudar, mas acha que não tem disciplina. Em vez de desistir, ela começa com 15 minutos por dia, observa o que atrapalha e ajusta a rotina aos poucos." },
              ],
            },
            {
              title: "Identificando os seus padrões",
              body: [
                "Algumas perguntas ajudam a se conhecer melhor:",
                { list: ["Em quais situações eu costumo adiar as coisas?", "Quais são os meus pontos fortes?", "O que eu faço quando encontro uma dificuldade?", "Quais hábitos me ajudam a chegar aos meus objetivos?", "Quais comportamentos me afastam do que eu quero?"] },
              ],
            },
          ],
          activity: {
            title: "Conhecendo a si mesmo",
            steps: [
              "Meus pontos fortes: quais são três qualidades que podem me ajudar?",
              "Meus desafios: quais são dois comportamentos que quero melhorar?",
              "Minha mentalidade: como eu reajo quando erro?",
              "Minha mudança: que pequena atitude posso começar esta semana?",
            ],
            note: "Não existem respostas certas ou erradas. O objetivo é refletir e achar um primeiro passo possível.",
          },
          recap: ["Autoconhecimento é entender como você pensa, sente e age.", "Com mentalidade de crescimento, erro vira aprendizado.", "Pensamento e atitude precisam andar juntos."],
        },
      ],
    },
    {
      title: "Hábitos e procrastinação",
      lessons: [
        {
          id: "como-os-habitos-funcionam",
          title: "Como os hábitos funcionam",
          summary: "O ciclo gatilho, rotina e recompensa, e como mudar um hábito.",
          goals: ["Entender como um hábito se forma", "Conhecer o ciclo gatilho, rotina e recompensa", "Identificar os seus gatilhos"],
          sections: [
            {
              title: "O que é um hábito?",
              body: [
                "Hábito é um comportamento repetido tantas vezes que passa a acontecer quase no automático. O cérebro faz isso para economizar energia.",
                "Vale para os hábitos que ajudam e para os que atrapalham.",
                { box: "chave", text: "Hábito não é questão de caráter nem de \"força de vontade infinita\". É resultado de repetição, ambiente e estratégia." },
              ],
            },
            {
              title: "O ciclo do hábito",
              body: [
                { table: { caption: "O ciclo do hábito", head: ["Etapa", "O que é", "Exemplo"], rows: [
                  ["Gatilho", "O sinal que começa o comportamento", "Sentir tédio ao sentar para estudar"],
                  ["Rotina", "A ação que você faz", "Pegar o celular e abrir as redes sociais"],
                  ["Recompensa", "O que o cérebro ganha", "Alívio na hora e diversão"],
                ] } },
                "A boa notícia é que o ciclo pode ser refeito: dá para manter o gatilho e a recompensa e trocar a rotina por outra mais saudável, ou mudar o ambiente para dificultar o hábito ruim.",
              ],
            },
            {
              title: "Como criar bons hábitos",
              body: [
                { list: ["Comece pequeno: uma ação fácil de repetir vale mais que uma meta enorme.", "Facilite o começo: quanto menos passos, mais fácil agir.", "Junte com algo que você já faz: \"depois do café, estudo 15 minutos\".", "Organize o ambiente: deixe à vista o que ajuda e longe o que atrapalha.", "Comemore o progresso: pequenas vitórias fazem o cérebro querer repetir."], ordered: true },
                { box: "atencao", text: "Não existe um número mágico de dias para um hábito se firmar. Varia de pessoa para pessoa. O que importa é a constância, não a perfeição." },
              ],
            },
            {
              title: "Descobrindo os seus gatilhos",
              body: [
                "Os gatilhos costumam ser de cinco tipos: horário, lugar, emoção (tédio, cansaço, ansiedade), pessoas e o que você acabou de fazer.",
                "Quando perceber que fez algo no automático, pergunte:",
                { list: ["Onde eu estava?", "Que horas eram?", "Como eu estava me sentindo?", "Quem estava comigo?", "O que eu tinha acabado de fazer?"], ordered: true },
              ],
            },
          ],
          activity: {
            title: "Diário de gatilhos",
            steps: ["Escolha um hábito que você quer mudar.", "Durante 3 dias, toda vez que ele acontecer, anote as 5 respostas do último tópico.", "No fim, veja o que se repete."],
            answer: "O que mais se repete é o seu gatilho principal. Com ele identificado, fica mais fácil planejar uma troca de rotina, como você vai ver na próxima aula.",
          },
          recap: ["Hábito é repetição que vira automático.", "Todo hábito tem gatilho, rotina e recompensa.", "Para mudar, troque a rotina ou mude o ambiente."],
        },
        {
          id: "procrastinacao-e-plano",
          title: "Procrastinação e plano de mudança",
          summary: "Por que adiamos, oito estratégias e o seu plano de mudança.",
          goals: ["Entender por que procrastinamos", "Conhecer estratégias contra a procrastinação", "Montar um plano para mudar um hábito"],
          sections: [
            {
              title: "Por que adiamos?",
              body: [
                "Procrastinar é adiar algo importante mesmo sabendo que isso vai trazer problema. Na maioria das vezes não é preguiça: está ligado a emoções.",
                { table: { caption: "Principais causas da procrastinação", head: ["Causa", "Como aparece"], rows: [
                  ["Perfeccionismo", "\"Só começo quando estiver tudo perfeito.\""],
                  ["Medo de falhar", "\"E se eu não conseguir?\""],
                  ["Tarefa grande demais", "\"Não sei nem por onde começar.\""],
                  ["Falta de clareza", "\"Nem sei direito o que preciso fazer.\""],
                  ["Distrações", "Celular, redes sociais e notificações"],
                  ["Recompensa imediata", "O prazer rápido vence o benefício futuro"],
                ] } },
                { box: "chave", text: "Adiar alivia o desconforto na hora, mas ele volta maior depois. O objetivo não é se culpar, e sim criar condições para começar." },
              ],
            },
            {
              title: "Oito estratégias",
              body: [
                { list: [
                  "Regra dos 2 minutos: comece por só dois minutos. O difícil é começar.",
                  "Divida em partes: \"ler o capítulo 1\" em vez de \"estudar para a prova\".",
                  "Defina o primeiro passo: \"abrir o caderno e escrever o título\".",
                  "Blocos de tempo: 25 minutos de foco e 5 de pausa (Pomodoro).",
                  "Tire as distrações: celular em outro cômodo ou no modo foco.",
                  "Regra \"se... então...\": \"se der 19h, então abro o material\".",
                  "Recompensa depois: termine e faça algo de que você gosta.",
                  "Seja gentil com você: falhou um dia? Retome no outro, sem culpa.",
                ], ordered: true },
              ],
            },
            {
              title: "Mapeie os seus hábitos",
              body: [
                "Durante 3 a 7 dias, observe a sua rotina e anote os hábitos assim:",
                { table: { caption: "Exemplo de mapa de hábitos", head: ["Hábito", "Quando", "Gatilho", "Recompensa", "Ajuda ou atrapalha?"], rows: [
                  ["Abrir as redes sociais ao acordar", "Manhã", "Alarme tocando", "Distração e novidades", "Atrapalha"],
                ] } },
              ],
            },
            {
              title: "Monte o seu plano",
              body: [
                { list: [
                  "Escolha no máximo 1 ou 2 hábitos para mudar agora.",
                  "Defina o novo comportamento, bem específico: \"10 minutos à noite para planejar o dia seguinte\".",
                  "Decida quando e onde: \"depois de jantar, na mesa de estudo\".",
                  "Ajuste o ambiente: material pronto, celular longe.",
                  "Comece pequeno e aumente aos poucos.",
                  "Marque num calendário cada dia em que cumpriu.",
                  "No fim da semana, veja o que funcionou e ajuste.",
                ], ordered: true },
              ],
            },
          ],
          activity: {
            title: "Meu plano de mudança",
            steps: [
              "Quais são três hábitos que mais atrapalham os meus objetivos?",
              "O que dispara cada um (horário, lugar, emoção, pessoas ou ação anterior)?",
              "Que tarefa estou adiando agora, e qual é o menor primeiro passo?",
              "Qual das oito estratégias vou testar esta semana?",
              "Que hábito pequeno vou começar, e quando exatamente?",
            ],
            note: "Não existem respostas certas ou erradas. O mais importante é transformar a reflexão em um primeiro passo.",
          },
          recap: ["Procrastinar quase sempre tem a ver com emoção, não com preguiça.", "Começar pequeno e tirar distrações ajuda a sair do lugar.", "Um plano bom muda poucos hábitos por vez e é revisado toda semana."],
        },
      ],
    },
    {
      title: "Inteligência emocional e autocompaixão",
      lessons: [
        {
          id: "entender-e-nomear-emocoes",
          title: "Entender e nomear as emoções",
          summary: "O que as emoções avisam, a ligação com a procrastinação e uma técnica para se acalmar.",
          goals: ["Explicar com suas palavras o que é inteligência emocional", "Perceber a emoção que está por trás de um adiamento", "Dar um nome mais preciso ao que você sente", "Usar a técnica \"pare, respire, escolha\""],
          sections: [
            {
              title: "Emoção não é inimiga",
              body: [
                "Emoções não são boas ou ruins: são sinais. O medo avisa de um possível perigo. A raiva mostra que um limite foi ultrapassado. A tristeza indica que algo importante foi perdido.",
                "O problema não é sentir. É não saber o que fazer com o que se sente.",
                { box: "pratica", text: "Antes de seguir, responda: de 0 a 10, qual é a sua energia agora? E o seu estresse? Se o seu dia fosse um clima (sol, nublado, chuva ou tempestade), qual seria?" },
              ],
            },
            {
              title: "O que é inteligência emocional",
              body: [
                "É a capacidade de perceber, entender e lidar com as próprias emoções e com as dos outros. O psicólogo Daniel Goleman ajudou a popularizar o tema e dividiu essa capacidade em cinco habilidades:",
                { table: { caption: "As cinco habilidades", head: ["Habilidade", "Em palavras simples", "Exemplo"], rows: [
                  ["Autoconsciência", "Perceber o que estou sentindo", "\"Estou irritado porque estou com fome e atrasado.\""],
                  ["Autorregulação", "Não ser levado pelo impulso", "Respirar antes de responder uma mensagem que irritou"],
                  ["Motivação", "Seguir em frente por razões que importam para mim", "Estudar sem vontade, lembrando do objetivo"],
                  ["Empatia", "Entender o que o outro sente", "Perceber que um colega está sobrecarregado"],
                  ["Habilidades sociais", "Me relacionar bem", "Pedir ajuda ou dizer \"não\" com clareza"],
                ] } },
                "Este módulo foca nas duas primeiras, que são a base das outras.",
              ],
            },
            {
              title: "Emoção e procrastinação",
              body: [
                "Procrastinar tem mais a ver com lidar com emoções do que com organizar o tempo. Quando uma tarefa desperta algo desconfortável (insegurança, tédio, medo de não ficar boa), o cérebro busca alívio rápido, e o alívio mais rápido costuma ser trocar a tarefa pelo celular.",
                "O alívio vem, mas dura pouco. Depois chegam a culpa e a tarefa acumulada.",
                { box: "chave", text: "No ciclo do hábito que você viu no módulo 2, a emoção desconfortável é um gatilho escondido." },
              ],
            },
            {
              title: "Dar nome ao que você sente",
              body: [
                "Colocar a emoção em palavras ajuda a diminuir a intensidade dela. Dizer \"estou nervoso com a apresentação\" alivia mais do que ficar com um \"estou mal\" vago. O problema é que a maioria das pessoas usa poucas palavras: bem, mal, estressado.",
                { table: { caption: "Mapa das emoções", head: ["Família", "Palavras mais precisas"], rows: [
                  ["Medo", "Insegurança, preocupação, nervosismo, receio, pânico"],
                  ["Tristeza", "Desânimo, solidão, decepção, saudade, vazio"],
                  ["Raiva", "Irritação, frustração, ressentimento, impaciência"],
                  ["Vergonha e culpa", "Constrangimento, arrependimento, sentir-se inadequado"],
                  ["Alegria", "Alívio, orgulho, gratidão, entusiasmo, calma"],
                ] } },
                { box: "exemplo", text: "Use o modelo: \"Eu estou sentindo ______ porque ______. O meu corpo mostra isso em ______ (peito apertado, estômago, ombros tensos).\"" },
              ],
            },
            {
              title: "Pare, respire, escolha",
              body: [
                "Use quando perceber que a emoção está tomando conta:",
                { list: [
                  "Pare: interrompa o que está fazendo por alguns segundos.",
                  "Respire: puxe o ar pelo nariz contando até 4 e solte pela boca contando até 6. Repita 5 vezes. Soltar o ar devagar ajuda o corpo a desacelerar.",
                  "Nomeie: diga para você mesmo \"estou sentindo ______\".",
                  "Escolha: pergunte \"qual é o menor próximo passo que eu consigo dar agora?\".",
                ], ordered: true },
                { box: "pratica", text: "Faça uma rodada agora. Dê uma nota de 0 a 10 para a sua tensão antes e outra depois. Se a nota mudou pouco, tudo bem: é uma habilidade que melhora com treino." },
              ],
            },
          ],
          activity: {
            title: "Cace o gatilho emocional",
            steps: [
              "Pense em três tarefas que você costuma adiar.",
              "Para cada uma, anote a emoção que aparece quando você pensa em começar (use o mapa das emoções).",
              "Anote também o que você faz para fugir dela (por exemplo, abrir as redes sociais).",
              "Veja se alguma emoção se repete.",
            ],
            answer: "A emoção que se repete é o seu gatilho emocional principal. Na próxima vez que ela aparecer, use o \"pare, respire, escolha\" e dê só o menor passo da tarefa.",
          },
          recap: ["Emoções são sinais, não inimigas.", "Procrastinar muitas vezes é fugir de um desconforto.", "Dar nome à emoção e respirar devagar ajudam a acalmar."],
        },
        {
          id: "autocompaixao-e-resiliencia",
          title: "Autocompaixão e resiliência",
          summary: "Tratar a si mesmo como trataria um amigo e voltar depois de um tropeço.",
          goals: ["Entender o que é autocompaixão e o que ela não é", "Usar os três passos da autocompaixão num momento difícil", "Retomar o plano depois de um tropeço"],
          sections: [
            {
              title: "O que é autocompaixão",
              body: [
                "Imagine que um amigo diz: \"Adiei de novo aquela tarefa e me sinto um fracasso.\" O que você diria a ele? E o que você diz para si mesmo quando é você que adia? Se as respostas são bem diferentes, este tópico é para você.",
                "Autocompaixão é tratar a si mesmo com a mesma gentileza que você teria com alguém de quem gosta, principalmente quando erra ou sofre. A pesquisadora Kristin Neff descreve três partes:",
                { table: { caption: "As três partes da autocompaixão", head: ["Parte", "O que significa", "Em vez de"], rows: [
                  ["Autogentileza", "Ser compreensivo com você mesmo", "Se criticar duramente"],
                  ["Humanidade compartilhada", "Lembrar que errar faz parte da vida de todo mundo", "Achar que só você falha"],
                  ["Atenção plena", "Perceber o que sente, sem exagerar nem negar", "Se afundar na emoção ou fingir que ela não existe"],
                ] } },
              ],
            },
            {
              title: "O que autocompaixão não é",
              body: [
                { table: { caption: "Mitos e verdades", head: ["Mito", "Verdade"], rows: [
                  ["\"Ser gentil comigo é ser acomodado.\"", "Quem se trata com compaixão tende a assumir melhor os erros e tentar de novo."],
                  ["\"Se eu não me cobrar duro, não evoluo.\"", "A cobrança pesada gera medo de errar, e o medo alimenta a procrastinação."],
                  ["\"É sentir pena de si.\"", "É reconhecer a dificuldade e agir com cuidado, sem se fazer de vítima."],
                  ["\"É desculpa para não se esforçar.\"", "Pelo contrário: dá segurança para recomeçar."],
                ] } },
                { box: "chave", text: "A autocompaixão diminui a culpa e a vergonha, que são justamente o que faz a gente fugir da tarefa." },
              ],
            },
            {
              title: "Os três passos para um momento difícil",
              body: [
                "Use quando errar, adiar ou se sentir mal consigo mesmo:",
                { list: [
                  "\"Isso está sendo difícil.\" (Atenção plena: reconheça o que sente.)",
                  "\"Todo mundo passa por momentos assim.\" (Humanidade compartilhada: você não está sozinho.)",
                  "\"Que eu seja gentil comigo agora. Do que eu preciso neste momento?\" (Autogentileza: ofereça cuidado.)",
                ], ordered: true },
                { table: { caption: "Troque a frase", head: ["Crítica", "Versão gentil"], rows: [
                  ["\"Sou um desastre, nunca termino nada.\"", "\"Hoje não consegui terminar. O que posso fazer de pequeno amanhã?\""],
                  ["\"Todo mundo consegue, menos eu.\"", "\"Muita gente tem dificuldade com isso. Não estou sozinho.\""],
                  ["\"Estraguei tudo.\"", "\"Errei nesta parte. O que aprendi para a próxima?\""],
                ] } },
                { box: "pratica", text: "Escolha um erro ou adiamento recente e escreva uma carta curta para você, como se viesse de um amigo sábio e carinhoso: reconheça que foi difícil, lembre que errar é humano e sugira um passo pequeno para recomeçar." },
              ],
            },
            {
              title: "Resiliência: voltar depois de cair",
              body: [
                "Resiliência não é ser forte o tempo todo nem nunca cair. É conseguir voltar depois de cair. Tolerância à frustração é aguentar o desconforto de errar ou de não ver resultado logo, sem desistir.",
                "Lembra da mentalidade de crescimento, do módulo 1? A palavra \"ainda\" ajuda muito: \"eu não consigo manter a rotina\" vira \"eu ainda não consigo manter a rotina\".",
                { list: [
                  "Acolha: use os três passos da autocompaixão, sem se punir.",
                  "Entenda: o que aconteceu? Cansaço, meta grande demais, falta de planejamento? Sem culpa, só curiosidade.",
                  "Ajuste: diminua o passo. Se a meta era 30 minutos, tente 5.",
                  "Retome: volte ao plano na próxima chance. A regra de ouro é nunca falhar duas vezes seguidas.",
                ], ordered: true },
                { box: "exemplo", text: "Planeje a reação antes: \"Se eu ficar nervoso antes de começar o relatório, então vou respirar 5 vezes e escrever só o título.\"" },
                { box: "atencao", text: "Este curso é educativo e não substitui acompanhamento psicológico. Se a tristeza, a ansiedade ou o desânimo estiverem fortes ou durarem muito, procure um profissional de saúde. O CVV atende de graça pelo telefone 188, a qualquer hora." },
              ],
            },
          ],
          activity: {
            title: "A história da Marina",
            steps: [
              "Marina, 29 anos, decidiu estudar 1 hora por dia para um concurso. Na primeira semana foi tudo bem. Na segunda, o trabalho apertou e ela pulou três dias seguidos. Pensou: \"Eu sempre desisto de tudo. Não adianta tentar.\" E passou a semana sem abrir os livros, se sentindo culpada.",
              "Que emoções a Marina provavelmente sentiu?",
              "Qual frase de autocrítica mais atrapalhou?",
              "Como ela poderia usar os três passos da autocompaixão?",
              "Qual seria um passo pequeno e realista para ela retomar amanhã?",
            ],
            answer: "Ela provavelmente sentiu culpa, desânimo e frustração. A frase \"eu sempre desisto de tudo\" transformou um tropeço numa sentença sobre quem ela é. Com autocompaixão, ela poderia dizer: \"Foi uma semana difícil, isso acontece com muita gente. Vou voltar com 15 minutos hoje.\" Assim ela evita a segunda falha seguida e mantém o hábito vivo.",
          },
          recap: ["Autocompaixão é gentileza, humanidade compartilhada e atenção plena.", "Se cobrar duro aumenta o medo de errar e a procrastinação.", "Resiliência é voltar depois de cair: nunca falhe duas vezes seguidas."],
        },
      ],
    },
  ],
};
