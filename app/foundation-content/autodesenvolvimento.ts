// Curso: Autodesenvolvimento. 3 módulos (as três apostilas), 5 aulas, um quiz por módulo e a prova final.
// Segue o padrão de app/foundation-lessons.ts.

import type { CourseContent } from "../foundation-lessons";
import { PROVA_AUTODESENVOLVIMENTO } from "./autodesenvolvimento-prova";

export const AUTODESENVOLVIMENTO: CourseContent = {
  closing: "Grandes mudanças não acontecem da noite para o dia: começam com pequenas atitudes repetidas. Você não precisa mudar tudo hoje. Precisa só dar o primeiro passo e ser 1% melhor a cada dia.",
  quiz: PROVA_AUTODESENVOLVIMENTO,
  stickers: [
    { id: "mente-de-crescimento", name: "Mente de crescimento", how: "Acertou 7 ou mais em \"Fixa ou de crescimento?\"." },
    { id: "respira-fundo", name: "Respira fundo", how: "Fez as 5 respirações do \"Pare, respire, escolha\"." },
    { id: "mestre-do-modulo-1", name: "Primeiro passo", how: "Acertou 8 ou mais no quiz do Módulo 1." },
    { id: "mestre-do-modulo-2", name: "Hábito na mão", how: "Acertou 8 ou mais no quiz do Módulo 2." },
    { id: "mestre-do-modulo-3", name: "Calma por dentro", how: "Acertou 8 ou mais no quiz do Módulo 3." },
  ],
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
                {
                  sort: {
                    title: "Fixa ou de crescimento?",
                    labels: ["Mentalidade fixa", "Mentalidade de crescimento"],
                    items: [
                      { text: "\"Não sou capaz disso.\"", answer: 0, why: "A frase já decide que a capacidade é limitada e não pode mudar." },
                      { text: "Vê um desafio como chance de aprender.", answer: 1, why: "Quem tem mentalidade de crescimento encara o desafio como oportunidade." },
                      { text: "Acha que errar é fracassar.", answer: 0, why: "Na mentalidade fixa, o erro vira fracasso, e não informação." },
                      { text: "\"Posso aprender a fazer isso.\"", answer: 1, why: "Reconhece que a habilidade pode ser desenvolvida com prática." },
                      { text: "Foge de desafios por medo de errar.", answer: 0, why: "O medo de errar leva a evitar o que é novo." },
                      { text: "Usa os erros para ver o que melhorar.", answer: 1, why: "O erro vira pista do que ajustar." },
                      { text: "Desiste quando fica difícil.", answer: 0, why: "Diante do obstáculo, a mentalidade fixa para." },
                      { text: "Procura outro jeito de avançar.", answer: 1, why: "Quando uma estratégia não funciona, busca outra." },
                    ],
                    sticker: { id: "mente-de-crescimento", min: 7 },
                  },
                },
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
      quiz: {
        sticker: { id: "mestre-do-modulo-1", min: 8 },
        questions: [
          { question: "Para a aula, o que conhecer a si mesmo NÃO exige?", options: ["Estar disposto a aprender sobre você.","Ser perfeito e ter todas as respostas.","Perceber comportamentos que atrapalham.","Entender as próprias emoções."], answer: 1, why: "A aula diz que conhecer a si mesmo não é ser perfeito nem ter todas as respostas, e sim estar disposto a aprender." },
          { question: "Diante de uma prova difícil, Ana pensa: \"vou procurar outro jeito de estudar\". Pela tabela da aula, que mentalidade é essa?", options: ["Fixa, porque ela admite que o jeito atual de estudar falhou.","Fixa, porque ela fugiu do jeito de sempre.","Nenhuma das duas: é só uma decisão prática.","De crescimento: procura outro jeito de avançar."], answer: 3, why: "Procurar outro jeito de avançar está na coluna da mentalidade de crescimento." },
          { question: "Como a mentalidade fixa costuma enxergar um erro?", options: ["Como informação para melhorar.","Como chance de aprender algo novo.","Como fracasso.","Como algo que nunca acontece com ela."], answer: 2, why: "Na mentalidade fixa, errar é fracassar. Na de crescimento, o erro mostra o que melhorar." },
          { question: "Segundo a aula, ter mentalidade de crescimento significa:", options: ["Acreditar que dá para fazer qualquer coisa, sem limites.","Saber que dá para aprender e melhorar com prática.","Pensar positivo e esperar que as coisas mudem sozinhas.","Nunca sentir medo de errar diante de um desafio."], answer: 1, why: "A aula avisa que não é achar que dá para fazer tudo sem limites: é saber que dá para aprender com prática e esforço." },
          { question: "Por que, para a aula, pensar positivo sozinho não resolve?", options: ["O pensamento precisa vir com atitude e planejamento.","Pensar positivo atrapalha o autoconhecimento da pessoa.","Só a força de vontade consegue mudar um comportamento.","Os pensamentos não influenciam o que a gente faz no dia a dia."], answer: 0, why: "O que pensamos influencia o que sentimos e fazemos, mas precisa vir junto com atitude e planejamento." },
          { question: "No exemplo da aula, alguém quer estudar, mas acha que não tem disciplina. O que essa pessoa faz?", options: ["Espera a disciplina aparecer para começar a estudar.","Estuda quatro horas seguidas para provar que consegue.","Desiste, porque disciplina é algo que a pessoa tem ou não tem.","Começa com 15 minutos por dia e ajusta aos poucos."], answer: 3, why: "Ela começa pequeno, observa o que atrapalha e ajusta a rotina aos poucos." },
          { question: "Segundo a aula, o que costuma acontecer com quem acha que não vai conseguir uma tarefa?", options: ["Procura saídas e começa logo.","Faz tudo mais rápido para acabar.","Desanima e adia.","Pede ajuda antes de tentar."], answer: 2, why: "Quem acha que não vai conseguir desanima e adia; quem vê a tarefa como aprendizado procura saídas." },
          { question: "Qual destas é uma das perguntas que a aula sugere para identificar os seus padrões?", options: ["Quanto tempo as outras pessoas estudam por dia?","Em quais situações eu costumo adiar as coisas?","Qual foi a minha nota mais alta na escola?","Quem tem mais disciplina na minha família?"], answer: 1, why: "As perguntas olham para você: quando adia, seus pontos fortes, o que faz na dificuldade, hábitos que ajudam e que afastam." },
          { question: "Na atividade \"Conhecendo a si mesmo\", o que você anota?", options: ["Três qualidades e dois comportamentos a melhorar.","Duas qualidades e três comportamentos a melhorar.","Cinco metas para o próximo ano inteiro.","Uma lista de tudo o que deu errado na semana."], answer: 0, why: "São três pontos fortes, dois desafios, como você reage ao erro e uma pequena atitude para a semana." },
          { question: "Para a aula, o que é mentalidade (mindset)?", options: ["A quantidade de coisas que alguém consegue aprender.","Um teste que mede a inteligência de uma pessoa.","A lista de metas que você escreve no começo do ano.","O jeito como a gente encara desafios, erros e dificuldades."], answer: 3, why: "Mentalidade é o jeito de encarar desafios, erros e dificuldades." },
        ],
      },
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
      quiz: {
        sticker: { id: "mestre-do-modulo-2", min: 8 },
        questions: [
          { question: "Por que, segundo a aula, um hábito passa a acontecer quase no automático?", options: ["Porque a pessoa tem força de vontade infinita.","Porque o cérebro busca economizar energia.","Porque hábitos são uma questão de caráter.","Porque o hábito se fixa em exatos 21 dias."], answer: 1, why: "A repetição faz o cérebro automatizar a ação para gastar menos energia. Não é caráter nem força de vontade infinita." },
          { question: "No exemplo da aula, sentir tédio ao sentar para estudar é qual parte do ciclo do hábito?", options: ["Rotina.","Recompensa.","Gatilho.","Ambiente."], answer: 2, why: "O tédio é o sinal que começa o comportamento. Pegar o celular é a rotina; o alívio é a recompensa." },
          { question: "Bia pega o celular toda vez que sente tédio no estudo. Qual saída a aula sugere?", options: ["Contar só com a força de vontade para resistir.","Estudar mais horas seguidas até o tédio passar.","Proibir o celular e se punir quando falhar.","Trocar a rotina por outra ou mudar o ambiente."], answer: 3, why: "O ciclo pode ser refeito: manter gatilho e recompensa trocando a rotina, ou mudar o ambiente para dificultar o hábito ruim." },
          { question: "\"Depois do café, estudo 15 minutos.\" Qual princípio de bons hábitos é esse?", options: ["Juntar com algo que você já faz.","Comemorar cada pequeno progresso.","Organizar o ambiente de estudo.","Facilitar o começo da tarefa."], answer: 0, why: "Ligar o hábito novo a uma rotina que já existe ajuda na constância." },
          { question: "Quanto tempo leva para um hábito se firmar, segundo a aula?", options: ["21 dias, para todo mundo.","Varia; não existe número mágico.","Exatamente uma semana.","Sempre 66 dias seguidos."], answer: 1, why: "Varia de pessoa para pessoa e de hábito para hábito. O que importa é a constância." },
          { question: "Terminar uma tarefa e logo abrir o celular: que tipo de gatilho é esse?", options: ["Horário.","Lugar.","Pessoas.","Ação anterior."], answer: 3, why: "É algo que acabou de acontecer e puxa o hábito." },
          { question: "\"Só começo quando estiver tudo perfeito.\" Qual causa da procrastinação é essa?", options: ["Medo de falhar.","Perfeccionismo.","Falta de clareza.","Tarefa grande demais."], answer: 1, why: "É o perfeccionismo. O medo de falhar aparece como \"e se eu não conseguir?\"." },
          { question: "\"Se der 19h, então abro o material.\" Que estratégia é essa?", options: ["Regra dos 2 minutos.","Blocos de tempo.","Regra \"se... então...\".","Recompensa depois."], answer: 2, why: "Decidir antes o que fazer em cada situação diminui a hesitação na hora." },
          { question: "Como é o bloco de tempo da técnica Pomodoro, na aula?", options: ["25 minutos de foco e 5 de pausa.","50 minutos de foco e 10 de pausa.","2 minutos de foco e 2 de pausa.","15 minutos de foco e 15 de pausa."], answer: 0, why: "Foco total por um período curto, 25 minutos, e uma pausa de 5." },
          { question: "No plano de mudança, quantos hábitos a aula recomenda mudar de uma vez?", options: ["Todos os que atrapalham, para aproveitar a motivação.","Pelo menos cinco, um para cada dia útil.","Um novo a cada dia, até completar a lista.","No máximo 1 ou 2."], answer: 3, why: "Tentar mudar tudo de uma vez costuma levar à desistência." },
        ],
      },
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
                { tool: "respiracao" },
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
      quiz: {
        sticker: { id: "mestre-do-modulo-3", min: 8 },
        questions: [
          { question: "Segundo a aula, a raiva é um sinal de quê?", options: ["Que algo importante foi perdido.","Que um limite foi ultrapassado.","Que existe um possível perigo.","Que a pessoa é agressiva."], answer: 1, why: "O medo avisa de perigo, a raiva mostra um limite ultrapassado e a tristeza indica uma perda." },
          { question: "\"Respirar antes de responder uma mensagem que irritou\" é exemplo de qual habilidade?", options: ["Empatia.","Motivação.","Autoconsciência.","Autorregulação."], answer: 3, why: "Autorregulação é não ser levado pelo impulso. Autoconsciência é perceber o que se sente." },
          { question: "Por que a aula diz que procrastinar tem mais a ver com emoções do que com organizar o tempo?", options: ["A tarefa incomoda e o cérebro busca alívio rápido.","Quem procrastina não sabe usar uma agenda direito.","Falta inteligência para fazer a tarefa difícil.","As emoções fazem o dia parecer mais curto do que é."], answer: 0, why: "Insegurança, tédio ou medo de não ficar bom levam o cérebro a trocar a tarefa por algo agradável, como o celular." },
          { question: "No mapa das emoções, qual palavra é da família do medo?", options: ["Decepção.","Impaciência.","Insegurança.","Arrependimento."], answer: 2, why: "Decepção é tristeza, impaciência é raiva e arrependimento é vergonha e culpa." },
          { question: "No \"pare, respire, escolha\", como é a respiração?", options: ["Puxa contando até 6 e solta até 4, 3 vezes.","Puxa até 4, segura até 7 e solta até 8.","Puxa contando até 4 e solta até 6, 5 vezes.","Puxa e solta bem rápido, 10 vezes seguidas."], answer: 2, why: "Puxar pelo nariz até 4 e soltar pela boca até 6, cinco vezes. Soltar devagar ajuda o corpo a desacelerar." },
          { question: "Qual é a função do último passo, \"escolha\"?", options: ["Definir o menor próximo passo possível.","Resolver todos os problemas de uma vez.","Deixar a emoção de lado e seguir em frente.","Trocar a tarefa por outra mais fácil."], answer: 0, why: "A pergunta é: qual é o menor próximo passo que eu consigo dar agora?" },
          { question: "Qual destas NÃO é uma das três partes da autocompaixão?", options: ["Autogentileza.","Cobrança dura para não errar mais.","Humanidade compartilhada.","Atenção plena."], answer: 1, why: "As três partes são autogentileza, humanidade compartilhada e atenção plena. A cobrança dura alimenta o medo de errar." },
          { question: "\"Todo mundo passa por momentos assim.\" Esse passo corresponde a qual parte da autocompaixão?", options: ["Autogentileza.","Atenção plena.","Autorregulação.","Humanidade compartilhada."], answer: 3, why: "Lembrar que errar faz parte da vida de todo mundo é a humanidade compartilhada." },
          { question: "Qual é a regra de ouro para voltar depois de um tropeço?", options: ["Nunca mais errar.","Esperar a motivação voltar.","Nunca falhar duas vezes seguidas.","Recomeçar do zero na segunda-feira."], answer: 2, why: "Retomar na próxima chance evita que um tropeço vire abandono." },
          { question: "Marina pulou três dias e pensou: \"eu sempre desisto de tudo\". Pela aula, o que mais atrapalhou?", options: ["Ter tido uma semana pesada no trabalho, sem tempo.","Ter escolhido estudar só uma hora por dia.","Ter um concurso difícil como objetivo.","A frase de autocrítica que ela disse."], answer: 3, why: "A frase de autocrítica fez ela passar a semana sem estudar. Com autocompaixão, voltaria com 15 minutos." },
        ],
      },
    },
  ],
};
