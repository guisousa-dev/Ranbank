// Curso: Autodesenvolvimento. 2 módulos (as duas apostilas), 3 aulas.
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
  ],
};
