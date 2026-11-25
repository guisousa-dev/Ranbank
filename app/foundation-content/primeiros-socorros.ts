// Curso: Primeiros socorros. 4 módulos, 11 aulas, um quiz por módulo e a prova final.
// Segue o material do curso enviado pelo grupo (4 módulos) e o padrão de app/foundation-lessons.ts.
// Orientações para leigos, em linha com as recomendações atuais (SAMU 192, Bombeiros 193, RCP só com
// compressões). As técnicas aparecem como noções: o aviso do curso lembra que nada substitui um
// treinamento prático e que, numa emergência, valem as orientações do atendente do 192.

import type { CourseContent } from "../foundation-lessons";
import { PROVA_PRIMEIROS_SOCORROS } from "./primeiros-socorros-prova";

export const PRIMEIROS_SOCORROS: CourseContent = {
  review: "Estas aulas ainda vão passar pela leitura de um profissional de saúde. Até lá, siga sempre as orientações do SAMU (192) e dos Bombeiros (193).",
  note: "Este curso é introdutório e não substitui um treinamento prático com profissionais (oferecido, por exemplo, pela Cruz Vermelha e pelo Corpo de Bombeiros). O certificado não habilita ninguém a prestar atendimento de saúde. Em qualquer emergência, ligue para o SAMU (192) ou para os Bombeiros (193).",
  closing: "Em primeiros socorros, agir com responsabilidade também é reconhecer os próprios limites. Manter a calma, proteger-se e pedir ajuda no momento certo fazem diferença. Se puder, faça um curso prático para treinar com as mãos o que aprendeu aqui.",
  quiz: PROVA_PRIMEIROS_SOCORROS,
  stickers: [
    { id: "olho-clinico", name: "Olho atento", how: "Acertou 5 ou mais no \"Emergência ou pode esperar?\"." },
    { id: "sem-mitos", name: "Sem mitos", how: "Acertou 7 ou mais no \"Faz ou não faz?\"." },
    { id: "ritmo-certo", name: "Ritmo certo", how: "Fez 30 compressões seguidas no ritmo, no treino da RCP." },
    { id: "mestre-do-modulo-1", name: "Cena segura", how: "Acertou 8 ou mais no quiz do Módulo 1." },
    { id: "mestre-do-modulo-2", name: "Sinal de alerta", how: "Acertou 8 ou mais no quiz do Módulo 2." },
    { id: "mestre-do-modulo-3", name: "Mãos firmes", how: "Acertou 8 ou mais no quiz do Módulo 3." },
    { id: "mestre-do-modulo-4", name: "Cada minuto conta", how: "Acertou 8 ou mais no quiz do Módulo 4." },
  ],
  modules: [
    {
      title: "Introdução aos primeiros socorros",
      lessons: [
        {
          id: "o-que-sao-primeiros-socorros",
          title: "O que são primeiros socorros",
          summary: "O que são, para que servem e até onde vai quem não é profissional de saúde.",
          goals: ["Entender o que são primeiros socorros e para que servem", "Reconhecer situações em que eles podem ser necessários", "Respeitar os limites de quem não tem formação"],
          sections: [
            {
              title: "Os cuidados iniciais",
              body: [
                "Primeiros socorros são os cuidados iniciais prestados a uma pessoa que sofreu um acidente ou teve um problema de saúde de repente. Eles acontecem enquanto se espera a equipe especializada, ou até a pessoa receber o atendimento adequado.",
                "Uma emergência pode acontecer em casa, na escola, no trabalho ou na rua, muitas vezes quando menos esperamos. Não é preciso ser profissional da saúde para ajudar: o primeiro passo é reconhecer o risco, manter a segurança e não piorar a situação.",
                { box: "exemplo", text: "Uma pessoa caminha na rua e, de repente, passa mal e cai. Quem está por perto pode ver se o local é seguro, ligar para o serviço de emergência e seguir as orientações do atendente. Isso já é prestar primeiros socorros." },
                { video: { youtubeId: "1MtKw-uP1NM", title: "noções básicas de primeiros socorros", minutes: 13 } },
              ],
            },
            {
              title: "Quando podem ser necessários",
              body: [
                {
                  cards: [
                    { title: "Quedas e acidentes", text: "Podem causar dor, cortes, sangramentos ou suspeita de fratura. Evite mover a pessoa se houver suspeita de lesão grave." },
                    { title: "Desmaio e mal-estar", text: "Observe se a pessoa responde, confira a segurança do local e peça ajuda conforme a gravidade." },
                    { title: "Cortes e sangramentos", text: "Pode ser preciso apertar o ferimento com um material limpo e chamar o serviço de emergência." },
                    { title: "Engasgo e falta de ar", text: "Podem ficar graves muito rápido. Reconheça os sinais e peça ajuda imediatamente." },
                  ],
                },
                { box: "chave", text: "Primeiros socorros não significam resolver tudo sozinho. Muitas vezes, a atitude mais importante é reconhecer o risco e chamar ajuda." },
              ],
            },
            {
              title: "Para que servem",
              body: [
                {
                  list: [
                    "Preservar a vida: manter a pessoa em segurança e favorecer um atendimento rápido.",
                    "Evitar o agravamento: não fazer nada que piore a lesão ou o estado da vítima.",
                    "Diminuir o sofrimento: oferecer uma ajuda inicial adequada à situação.",
                    "Facilitar o atendimento: contar aos profissionais o que aconteceu e o que você observou.",
                  ],
                },
                "Os primeiros socorros não substituem o atendimento médico e não garantem que a pessoa vai ficar bem. A função deles é ajudar no começo, até ela receber o atendimento de que precisa.",
              ],
            },
            {
              title: "Quem pode ajudar",
              body: [
                "Qualquer pessoa pode ajudar numa emergência, desde que respeite os próprios limites e não se coloque em risco. Não é preciso ser médico ou enfermeiro para ligar para o SAMU, avisar outras pessoas de um perigo ou seguir as instruções do atendente.",
                "Algumas intervenções exigem treinamento. Ninguém deve fazer procedimentos para os quais não está preparado. Este curso traz conceitos e noções: ele não forma profissionais de saúde nem substitui um treinamento prático.",
                {
                  check: {
                    question: "Marta não trabalha na área da saúde e vê um passageiro passar mal no ônibus. O que ela pode fazer?",
                    options: ["Nada: sem formação, o certo é não se envolver.", "Avisar o motorista, ligar para o 192 e seguir as orientações do atendente.", "Dar ao passageiro um remédio que ela tem na bolsa."],
                    answer: 1,
                    why: "Pedir ajuda e seguir o atendente está ao alcance de qualquer pessoa. Dar remédio por conta própria pode piorar a situação.",
                  },
                },
              ],
            },
          ],
          activity: {
            title: "Primeiros socorros no meu dia a dia",
            steps: ["Responda com as suas palavras. Não existe resposta única."],
            fields: [
              "Por que é importante conhecer primeiros socorros?",
              "Em quais lugares do meu dia a dia uma emergência pode acontecer?",
              "Qual seria a minha primeira atitude ao perceber uma situação de risco?",
              "Por que devo respeitar os meus limites ao tentar ajudar?",
            ],
            answer: "Uma boa resposta lembra que a primeira atitude é olhar se o local é seguro e pedir ajuda, e que respeitar os limites evita piorar o estado da vítima e evita que você vire mais uma vítima.",
          },
          recap: [
            "Primeiros socorros são os cuidados iniciais até a ajuda especializada chegar.",
            "Eles servem para preservar a vida, evitar o agravamento e facilitar o atendimento.",
            "Qualquer pessoa pode ajudar, dentro dos próprios limites e sem se colocar em risco.",
          ],
        },
        {
          id: "cena-segura-e-socorro",
          title: "Antes de ajudar e como pedir socorro",
          summary: "Os cinco princípios, a segurança de quem ajuda e como ligar para o número certo.",
          goals: ["Seguir os cinco princípios antes de ajudar", "Proteger-se ao chegar perto de uma vítima", "Ligar para o número certo e passar as informações"],
          sections: [
            {
              title: "Os cinco princípios",
              body: [
                {
                  ordered: true,
                  list: [
                    "Observe o local: fios elétricos, fogo, trânsito, fumaça, produtos químicos ou objetos que possam cair. Se não for seguro, não se aproxime.",
                    "Mantenha a calma: respire, organize as ideias e peça ajuda a outras pessoas.",
                    "Observe a vítima: se for seguro chegar perto, veja se ela responde quando você fala e se respira normalmente. Não sacuda a pessoa.",
                    "Acione o serviço de emergência: diante de risco de vida, inconsciência ou dificuldade para respirar, peça ajuda na hora e siga o atendente.",
                    "Ajude dentro do que você sabe: não dê remédio, comida ou bebida a quem está inconsciente, não tente colocar ossos no lugar e não faça procedimentos que não conhece.",
                  ],
                },
                { box: "chave", title: "Regra de ouro", text: "Proteja-se primeiro, avalie a situação e peça ajuda. Um socorrista ferido vira mais uma vítima." },
              ],
            },
            {
              title: "Proteja-se",
              body: [
                {
                  list: [
                    "Em acidentes de trânsito, ligue o pisca-alerta e coloque o triângulo bem antes do local.",
                    "Se houver sangue, use luvas ou proteja as mãos com um saco plástico.",
                    "Peça para alguém afastar os curiosos e abrir espaço.",
                  ],
                },
              ],
            },
            {
              title: "Para quem ligar",
              body: [
                {
                  table: {
                    caption: "Números de emergência no Brasil (ligação gratuita)",
                    head: ["Número", "Serviço", "Quando ligar"],
                    rows: [
                      ["192", "SAMU", "Emergências médicas: inconsciência, falta de ar importante, suspeita de infarto ou AVC"],
                      ["193", "Corpo de Bombeiros", "Incêndio, resgate, salvamento, vítimas presas"],
                      ["190", "Polícia Militar", "Violência, ameaças e risco à segurança"],
                    ],
                  },
                },
                "Ao ligar, fale com calma: o endereço com um ponto de referência, o que aconteceu, quantas pessoas precisam de ajuda, como a vítima está e quais riscos há no local. Não desligue antes de o atendente orientar: ele pode dizer o que fazer até a equipe chegar.",
                { box: "pratica", text: "Se houver outras pessoas, aponte para uma delas: \"Você, de camiseta azul, ligue para o 192 e volte aqui.\" Pedidos para ninguém em especial (\"alguém liga!\") costumam não funcionar." },
              ],
            },
            {
              title: "O que não fazer",
              body: [
                {
                  list: [
                    "Se colocar em risco para tentar salvar outra pessoa.",
                    "Mover alguém com suspeita de lesão na coluna ou de fratura, a não ser que haja perigo imediato no local.",
                    "Dar água, comida ou remédio a quem está inconsciente.",
                    "Passar pasta de dente, manteiga ou outras receitas caseiras em queimaduras.",
                    "Tentar procedimentos que você não conhece.",
                    "Demorar para chamar ajuda quando há sinais de gravidade.",
                  ],
                },
              ],
            },
          ],
          activity: {
            title: "Treine a ligação",
            steps: [
              "Imagine que um senhor caiu na calçada em frente à sua casa e não responde.",
              "Escreva, em ordem, o que você faria antes de chegar perto dele.",
              "Escreva o que você falaria ao atendente do 192.",
            ],
            fields: ["O que eu faria antes de chegar perto:", "O que eu falaria ao 192:"],
            answer: "Antes: olhar se há perigo (carros, fios), chamar o senhor e ver se ele respira, e pedir para alguém específico ligar para o 192 (ou ligar você mesmo, no viva-voz). Ao atendente: \"Um senhor caiu na calçada e não responde. Ele respira (ou não respira normalmente). Endereço: rua tal, número tal, perto da padaria tal. Meu telefone é tal.\" E seguir as orientações sem desligar.",
          },
          recap: [
            "Observe o local, mantenha a calma, veja a vítima, ligue e ajude dentro do que sabe.",
            "SAMU 192, Bombeiros 193, Polícia 190: endereço com referência e não desligue.",
            "Peça ajuda a uma pessoa específica e nunca dê nada pela boca a quem está inconsciente.",
          ],
        },
      ],
      quiz: {
        sticker: { id: "mestre-do-modulo-1", min: 8 },
        questions: [
          { question: "Na saída da escola, Caio vê uma moto bater num carro. O motociclista está caído no meio da rua, e os carros continuam passando. O que Caio faz primeiro?", options: ["Corre até o motociclista para ver se ele responde.", "Tira o capacete do motociclista para ele respirar melhor.", "Fica na calçada, liga para o 192 e pede para alguém sinalizar a rua.", "Puxa o motociclista para a calçada, longe dos carros, e só depois liga para o 192."], answer: 2, why: "Com trânsito passando, o local não é seguro. O primeiro princípio é observar o local e não se tornar mais uma vítima; depois, pedir ajuda." },
          { question: "Dona Lúcia, de 68 anos, nunca fez curso de primeiros socorros e encontra o vizinho caído na cozinha, sem responder. O que a aula diz?", options: ["Ela pode ligar para o 192 e seguir as orientações do atendente.", "Ela não deve fazer nada, porque não tem formação.", "Ela deve esperar alguém com curso chegar para ajudar.", "Ela deve levantar o vizinho e levá-lo ao posto de saúde."], answer: 0, why: "Qualquer pessoa pode pedir ajuda e seguir o atendente. Levantar e levar a vítima pode piorar uma lesão." },
          { question: "Bia ajudou uma moça que desmaiou pela primeira vez. A moça acordou e Bia diz: \"Pronto, os primeiros socorros resolveram, não precisa de médico\". O que a aula diz?", options: ["Bia está certa: se a moça acordou, o problema acabou.", "Primeiros socorros não substituem o atendimento: a moça deve procurar avaliação.", "Só precisa de médico se ela desmaiar de novo no mesmo dia ou sentir dor de cabeça forte.", "Bia está certa, desde que a moça coma algo doce."], answer: 1, why: "Os primeiros socorros ajudam no começo, mas não substituem o atendimento nem garantem que a pessoa está bem. Um primeiro desmaio merece avaliação." },
          { question: "Ao ligar para o 192, qual informação ajuda a equipe a chegar até a vítima?", options: ["O nome completo e a idade da vítima.", "O que você acha que a vítima tem.", "O número do documento de quem está ligando.", "O endereço com um ponto de referência."], answer: 3, why: "Sem endereço e referência, a ambulância não chega. Não é preciso saber o diagnóstico, e o nome completo da vítima não é o mais importante." },
          { question: "Rafa ligou para o 192 e passou o endereço. O atendente continua fazendo perguntas, mas a vítima parece melhor. O que Rafa faz?", options: ["Desliga, porque o endereço já foi passado.", "Continua na linha até o atendente dizer que pode desligar.", "Desliga para deixar a linha livre e liga de novo só se a vítima piorar.", "Passa o telefone para a vítima e vai buscar ajuda."], answer: 1, why: "O atendente pode orientar o que fazer até a equipe chegar. Não se desliga antes de ele orientar." },
          { question: "Numa praça cheia, uma senhora desmaia. Qual pedido de ajuda costuma funcionar melhor?", options: ["\"Você, de mochila verde, ligue para o 192 e volte aqui.\"", "\"Alguém liga para a ambulância!\"", "\"Todo mundo se afasta, e alguém chama ajuda!\"", "Não pedir nada e esperar alguém tomar a iniciativa."], answer: 0, why: "Quando o pedido é para todos, cada um acha que outro vai ligar. Escolher uma pessoa específica faz a ligação acontecer." },
          { question: "Um prédio está pegando fogo e há pessoas presas no andar de cima. Para qual número ligar?", options: ["192, SAMU.", "190, Polícia Militar.", "193, Corpo de Bombeiros.", "199, Defesa Civil."], answer: 2, why: "Incêndio, resgate e vítimas presas são com os Bombeiros, no 193. O SAMU, no 192, é para as emergências médicas." },
          { question: "Na cozinha, Léo derruba água fervendo na mão. A avó sugere passar manteiga. O que a aula diz?", options: ["Manteiga ajuda a evitar a bolha.", "Pasta de dente funciona melhor que manteiga, porque refresca e evita a bolha.", "Gelo direto na pele é o mais indicado.", "Nada de receitas caseiras: o certo é água corrente fresca."], answer: 3, why: "Manteiga, pasta de dente e outras receitas caseiras podem prejudicar a lesão. Gelo também não: o certo é resfriar com água corrente fresca." },
          { question: "Um rapaz cai de bicicleta e o braço fica torto. Um amigo diz que sabe \"colocar o osso no lugar\". O que fazer?", options: ["Não mexer no braço e chamar ajuda.", "Deixar o amigo tentar, já que ele diz que sabe.", "Puxar o braço devagar para alinhar e depois enfaixar.", "Massagear o local para a dor diminuir antes de ligar."], answer: 0, why: "Colocar osso no lugar está fora do que um leigo deve fazer. Mexer pode piorar a lesão." },
          { question: "Um homem desmaiou e não acorda. Alguém quer dar a ele um copo de água com açúcar. O que fazer?", options: ["Dar, mas em goles pequenos.", "Não dar nada pela boca a quem está inconsciente.", "Dar, porque o açúcar ajuda a pessoa a recuperar a consciência mais rápido.", "Dar só se ele for diabético."], answer: 1, why: "Quem está inconsciente pode se engasgar com qualquer líquido ou alimento. Nada pela boca, seja qual for o motivo." },
        ],
      },
    },
    {
      title: "Identificar situações de emergência",
      lessons: [
        {
          id: "sinais-de-alerta",
          title: "Sinais de alerta",
          summary: "Os sinais que mostram que alguém precisa de ajuda rápida, sem tentar adivinhar a doença.",
          goals: ["Entender o que é uma situação de emergência", "Reconhecer os principais sinais de alerta", "Pedir ajuda sem tentar dar um diagnóstico"],
          sections: [
            {
              title: "O que é uma emergência",
              body: [
                "Emergência é quando alguém tem um problema de repente ou sofre um acidente que pode pôr a saúde ou a vida em risco, e precisa de atendimento rápido.",
                "Alguns sinais são evidentes, como uma pessoa que não responde ou não consegue respirar. Outros aparecem aos poucos. A pessoa pode mostrar que precisa de ajuda pela fala, pela respiração, pela aparência ou pelo comportamento.",
                { box: "chave", text: "Não é preciso descobrir qual é a doença ou a lesão. O importante é perceber que algo está errado, manter a segurança e pedir ajuda." },
              ],
            },
            {
              title: "Os principais sinais",
              body: [
                {
                  table: {
                    caption: "Sinais que pedem atendimento rápido",
                    head: ["Sinal", "O que observar"],
                    rows: [
                      ["Respiração", "Dificuldade forte para respirar, respiração muito irregular, engasgo grave ou ausência de respiração normal"],
                      ["Consciência", "Desmaio, dificuldade para acordar, confusão de repente ou nenhuma resposta quando chamada"],
                      ["Dor no peito", "Dor ou pressão no peito, ainda mais com falta de ar, suor frio, enjoo ou mal-estar forte"],
                      ["Sangramento", "Sangramento forte ou que não para com pressão, ou fraqueza e palidez depois de uma lesão"],
                      ["AVC", "Rosto torto, fraqueza de repente num braço ou dificuldade para falar"],
                      ["Convulsão", "Principalmente se for a primeira, durar mais de 5 minutos, se repetir ou a pessoa não acordar"],
                      ["Reação alérgica", "Inchaço na língua ou na garganta, falta de ar, tontura forte ou desmaio depois de contato com algo"],
                    ],
                  },
                },
                "Esses sinais não servem para diagnóstico. São exemplos de situações que pedem atendimento rápido. Se a pessoa está em perigo, peça ajuda sem esperar todos os sinais aparecerem.",
              ],
            },
            {
              title: "Na dúvida, ligue",
              body: [
                "Nem todo mal-estar tem a mesma gravidade. Diante de sinais importantes ou de uma piora rápida, ligue e peça orientação. Se não souber qual serviço chamar, ligue para o 192 e explique a situação: o atendente encaminha.",
                {
                  sort: {
                    title: "Emergência ou pode esperar?",
                    labels: ["Ligue para o 192 agora", "Observe e procure atendimento comum"],
                    items: [
                      { text: "Dor no peito com suor frio, num homem de 55 anos.", answer: 0, why: "Dor no peito com suor frio é sinal de alerta de emergência cardíaca. Não espere passar." },
                      { text: "Um corte pequeno no dedo que parou de sangrar depois de apertar.", answer: 1, why: "Sangramento que para com pressão não é emergência. Limpe e cubra; procure atendimento se infeccionar." },
                      { text: "Uma convulsão numa pessoa que nunca teve crise antes.", answer: 0, why: "A primeira crise conhecida é motivo para chamar o 192, mesmo que passe rápido." },
                      { text: "Uma leve tontura depois de muito tempo em pé, que passa ao sentar.", answer: 1, why: "Sem outros sinais e melhorando ao sentar, dá para observar. Se voltar com frequência, procure avaliação." },
                      { text: "Língua inchando e voz rouca depois de uma picada de abelha.", answer: 0, why: "Inchaço na língua ou garganta pode fechar a passagem do ar. É emergência." },
                      { text: "Tornozelo torcido e inchado, mas a pessoa consegue apoiar o pé.", answer: 1, why: "Repouso, gelo e elevação; procure atendimento se a dor piorar ou ela não conseguir apoiar o pé." },
                    ],
                    sticker: { id: "olho-clinico", min: 5 },
                  },
                },
              ],
            },
          ],
          activity: {
            title: "Reconhecendo uma emergência",
            steps: ["Num lugar público, uma pessoa começa de repente a falar de forma confusa e não consegue levantar um dos braços. Escreva como você agiria."],
            fields: ["Como eu confiro a segurança do local:", "Quais sinais eu observei:", "O que eu falaria ao 192:"],
            answer: "Conferir se o local é seguro, perceber os sinais (fala confusa e fraqueza num braço podem ser AVC), anotar o horário em que começaram e ligar para o 192 na hora, informando o endereço, os sinais e o horário. Não dar comida, bebida ou remédio, e ficar com a pessoa.",
          },
          recap: [
            "Emergência é um problema de repente que pode pôr a vida em risco.",
            "Fique de olho na respiração, na consciência, na dor no peito, em sangramentos, AVC, convulsões e alergias.",
            "Não tente adivinhar a doença: na dúvida, ligue para o 192.",
          ],
        },
        {
          id: "observar-a-vitima",
          title: "Observar a vítima e pedir ajuda",
          summary: "Responde? Respira? O passo a passo para avaliar com segurança e saber o que dizer ao 192.",
          goals: ["Avaliar a vítima com segurança, passo a passo", "Saber o que é e o que não é respiração normal", "Agir conforme a vítima responde e respira"],
          sections: [
            {
              title: "Passo a passo",
              body: [
                {
                  ordered: true,
                  list: [
                    "Verifique a cena: trânsito, fogo, eletricidade, fumaça, violência, produtos químicos. Não entre em local inseguro.",
                    "Veja se a pessoa responde: se for seguro, toque nos ombros e pergunte em voz alta se ela está bem. Não a sacuda.",
                    "Observe a respiração: olhe o peito por até 10 segundos. Ele sobe e desce normalmente?",
                    "Peça ajuda: alguém liga para o 192. Se houver suspeita de parada cardíaca e um DEA (desfibrilador) por perto, peça que alguém o busque.",
                    "Siga as instruções: conte o que observou. Se a pessoa não responde e não respira normalmente, diga isso com clareza.",
                  ],
                },
              ],
            },
            {
              title: "Respiração normal ou não?",
              body: [
                "Respiração ausente, muito irregular ou só com suspiros isolados não é respiração normal. Esses suspiros fortes e espaçados aparecem nos primeiros minutos de uma parada cardíaca e enganam muita gente.",
                {
                  check: {
                    question: "Um homem caído não responde e, de vez em quando, dá um suspiro forte. Como entender essa respiração?",
                    options: ["É normal: ele está respirando.", "Não é respiração normal: ligue para o 192 e diga isso ao atendente.", "É sinal de que ele está acordando, basta esperar."],
                    answer: 1,
                    why: "Suspiros isolados não são respiração normal e podem indicar parada cardíaca. Cada minuto conta.",
                  },
                },
              ],
            },
            {
              title: "Responde? Respira? O que fazer",
              body: [
                {
                  table: {
                    caption: "As duas perguntas que guiam o atendimento",
                    head: ["Situação", "O que fazer"],
                    rows: [
                      ["Responde", "Pergunte o que sente e quando começou, observe e ligue se houver sinais de alerta"],
                      ["Não responde, mas respira normalmente", "Ligue para o 192. Sem suspeita de trauma, coloque na posição lateral de segurança (Aula 5)"],
                      ["Não responde e não respira normalmente", "Ligue para o 192 no viva-voz, peça um DEA e siga o atendente: é hora da RCP (Aula 8)"],
                    ],
                  },
                },
                { box: "atencao", text: "Se houver suspeita de trauma (queda, batida, acidente), evite mover a pessoa, a não ser que o local ofereça perigo ou que seja preciso para ela continuar respirando." },
              ],
            },
            {
              title: "Situações do dia a dia",
              body: [
                {
                  cards: [
                    { title: "Na escola", text: "Alguém cai, bate a cabeça e fica confuso. Veja se responde e se piora ou vomita, não o deixe sozinho e peça ajuda. Não tente fazê-lo levantar." },
                    { title: "No trabalho", text: "Um colega sente pressão no peito e falta de ar. Pare a atividade, deixe-o em repouso, ligue para o 192 e não deixe que ele dirija." },
                    { title: "Em casa", text: "Alguém fica com a fala enrolada e um lado do rosto diferente. Pode ser AVC: anote o horário e ligue para o 192 na hora." },
                    { title: "Na rua", text: "Alguém está caído numa rua movimentada. Não entre no trânsito: peça ajuda e sinalize só se for seguro." },
                  ],
                },
              ],
            },
            {
              title: "Erros que devemos evitar",
              body: [
                {
                  list: [
                    "Esperar muito para pedir ajuda quando há sinais graves.",
                    "Tentar dar um diagnóstico sem formação.",
                    "Dar comida, bebida ou remédio a quem está inconsciente.",
                    "Sacudir, levantar ou mover a vítima sem necessidade.",
                    "Deixar a vítima sozinha quando há risco, se for possível ficar em segurança.",
                    "Desligar a ligação antes de receber as orientações.",
                  ],
                },
              ],
            },
          ],
          activity: {
            title: "O que eu observo",
            steps: ["No intervalo, um colega escorrega, bate a cabeça no chão e fica confuso, sem saber onde está."],
            fields: ["O que eu confiro antes de chegar perto:", "O que eu observo nele:", "O que eu falo ao 192:"],
            answer: "Conferir se não há perigo, chegar perto, chamá-lo e ver se responde e respira normalmente. Observar a confusão, se piora, se vomita ou se reclama de dor no pescoço. Não levantá-lo e não deixá-lo sozinho. Ao 192: endereço, o que aconteceu, que ele bateu a cabeça e está confuso, e se respira normalmente.",
          },
          recap: [
            "Cena segura, responde, respira, pedir ajuda e seguir o atendente.",
            "Suspiros isolados não são respiração normal.",
            "Não responde e não respira normalmente: 192 no viva-voz e DEA.",
          ],
        },
      ],
      quiz: {
        sticker: { id: "mestre-do-modulo-2", min: 8 },
        questions: [
          { question: "No almoço, a tia de Nina começa a falar enrolado e o lado direito da boca cai. Dez minutos depois, ela parece melhor. O que fazer?", options: ["Esperar mais um pouco, já que ela melhorou.", "Dar o remédio de pressão dela e deixá-la descansar.", "Ligar para o 192 e informar a hora em que os sinais começaram.", "Levá-la ao posto no dia seguinte, se voltar a acontecer."], answer: 2, why: "Fala enrolada e rosto torto são sinais de AVC. Mesmo que melhorem, é emergência, e o horário de início ajuda a equipe." },
          { question: "Um homem caído não responde e, a cada 10 segundos, dá um suspiro forte. O peito se mexe nesses suspiros. Como entender?", options: ["Não é respiração normal: tratar como emergência e ligar para o 192.", "É respiração normal, porque o peito se mexe a cada suspiro; basta observar.", "Ele está dormindo profundamente; basta esperar.", "É sinal de que ele está acordando sozinho."], answer: 0, why: "Suspiros isolados não são respiração normal e podem indicar parada cardíaca, mesmo com o peito se mexendo neles." },
          { question: "Depois de comer camarão numa festa, Vitor fica com a língua inchada e a voz rouca. O que fazer?", options: ["Dar água gelada e observar, porque é uma alergia leve.", "Ligar para o 192 na hora: é um sinal de alerta.", "Esperar umas horas para o inchaço descer.", "Dar leite, que ajuda a neutralizar a reação."], answer: 1, why: "Inchaço na língua ou na garganta depois de contato com algo pode fechar a passagem do ar. É emergência." },
          { question: "Na quadra, um aluno tem uma convulsão pela primeira vez. A crise passa em 2 minutos e ele está respirando. Precisa ligar para o 192?", options: ["Não, porque durou menos de 5 minutos.", "Não: basta ele descansar e voltar para a aula.", "Só se ele tiver mordido a língua.", "Sim: a primeira crise conhecida é motivo para chamar o 192."], answer: 3, why: "Crise que dura mais de 5 minutos é um motivo, mas não o único. A primeira crise conhecida também pede o 192." },
          { question: "Ju cortou a perna num vidro. Mesmo apertando com um pano por vários minutos, o sangue não para, e ela está pálida e fraca. O que isso indica?", options: ["É normal: corte na perna sangra mais e logo para.", "Ela deve tirar o pano e lavar para ver o tamanho do corte.", "É sinal de alerta: ligar para o 192 e continuar apertando.", "Basta trocar o pano encharcado por um limpo."], answer: 2, why: "Sangramento que não para com pressão, com palidez e fraqueza, é sinal de alerta. Não se tira o pano: põe-se outro por cima." },
          { question: "Pedro encontra o vizinho caído no quintal, ao lado de um fio elétrico partido. O que fazer?", options: ["Puxar o vizinho pela roupa seca, que não conduz eletricidade, para longe do fio.", "Afastar o fio com um cabo de vassoura molhado.", "Jogar água no fio para ele parar de soltar faísca.", "Manter distância, não tocar e chamar ajuda especializada."], answer: 3, why: "Fio exposto é risco para quem ajuda. Água conduz eletricidade. O certo é não tocar e chamar quem pode cortar a energia com segurança." },
          { question: "Qual destas listas tem o que a aula manda dizer ao 192?", options: ["Endereço com referência, o que houve, quantas vítimas e como elas estão.", "Nome completo da vítima, idade e o provável diagnóstico.", "Só o endereço, porque o resto a equipe vê quando chegar.", "O que aconteceu, o nome da vítima e para qual hospital ela deve ser levada."], answer: 0, why: "O atendente precisa saber onde é, o que houve e como as vítimas estão para mandar o recurso certo. Diagnóstico não é papel de quem ajuda." },
          { question: "Um colega sente pressão no peito e falta de ar e diz que vai dirigir até o hospital, que fica perto. O que fazer?", options: ["Deixar, já que o hospital é perto.", "Ir junto no carro dele, para assumir o volante ou pedir ajuda se ele piorar.", "Não deixar que ele dirija, mantê-lo em repouso e ligar para o 192.", "Dar um copo de água e esperar a dor passar."], answer: 2, why: "Pressão no peito com falta de ar pode ser emergência cardíaca. Ele pode desmaiar dirigindo; o certo é repouso e 192." },
          { question: "Ao ver alguém passar mal, Duda tenta descobrir se é pressão baixa ou diabetes antes de ligar. O que a aula diz?", options: ["Está certa: o atendente precisa do diagnóstico.", "Não precisa: basta perceber que algo está errado e pedir ajuda.", "Ela deve medir a pressão e a glicose antes de ligar, para informar ao atendente.", "Ela deve ligar só se tiver certeza de que é grave."], answer: 1, why: "Diagnóstico não é papel de quem ajuda. O importante é reconhecer os sinais de alerta e não atrasar o pedido de ajuda." },
          { question: "No intervalo, uma aluna cai, bate a cabeça e fica confusa. O que fazer?", options: ["Ajudá-la a levantar e levá-la para descansar na sala.", "Dar um copo de água com açúcar para ela se recuperar.", "Esperar meia hora sentada com ela, para ver se a confusão passa sozinha antes de chamar alguém.", "Ficar com ela, ver se piora ou vomita e chamar ajuda, sem fazê-la levantar."], answer: 3, why: "Confusão depois de bater a cabeça é sinal de alerta. Não se levanta a pessoa nem se dá nada pela boca; fica-se perto e chama-se ajuda." },
        ],
      },
    },
    {
      title: "Desmaio, mal-estar, quedas e acidentes",
      lessons: [
        {
          id: "desmaio-e-mal-estar",
          title: "Desmaio e mal-estar",
          summary: "Ajudar quem desmaiou, a posição lateral de segurança e quando o mal-estar é grave.",
          goals: ["Reconhecer os sinais de que alguém vai desmaiar", "Ajudar quem desmaiou sem piorar a situação", "Colocar alguém na posição lateral de segurança"],
          sections: [
            {
              title: "Desmaio: como reconhecer",
              body: [
                "O desmaio (síncope) é uma perda rápida da consciência, que costuma acontecer quando o cérebro recebe menos sangue por alguns instantes. A pessoa pode cair e acordar sozinha logo depois.",
                "Antes, podem aparecer tontura, fraqueza, visão escurecendo, suor frio, enjoo, palidez, sensação de calor e zumbido no ouvido. Se a pessoa ainda estiver de pé e tonta, ajude-a a se deitar ou a se sentar antes que caia.",
              ],
            },
            {
              title: "Como agir",
              body: [
                {
                  ordered: true,
                  list: [
                    "Veja se o local é seguro e evite que a pessoa se machuque.",
                    "Veja se ela responde quando você chama.",
                    "Se estiver inconsciente, veja se respira normalmente. Se não respirar normalmente, ligue para o 192 e siga o atendente.",
                    "Se respira e não há suspeita de trauma, deite-a de costas e, se possível, levante as pernas. Se ela vomitar, vire-a de lado.",
                    "Quando acordar, deixe-a descansar e não a deixe levantar rápido. Se foi o primeiro desmaio, ela deve procurar avaliação.",
                  ],
                },
                "Se ela não acordar em cerca de 1 minuto, ligue para o 192.",
                { box: "atencao", title: "Não faça", text: "Não dê tapas, não jogue água no rosto, não dê comida, bebida ou remédio enquanto a pessoa estiver desacordada e não tente colocá-la de pé à força." },
                { video: { youtubeId: "fYZpdFpF_bQ", title: "primeiros socorros no desmaio", minutes: 10 } },
              ],
            },
            {
              title: "Posição lateral de segurança",
              body: [
                "Serve para quem está desacordado, mas respira normalmente, e não tem suspeita de lesão na coluna. Ela mantém o caminho do ar livre e evita engasgo se a pessoa vomitar.",
                {
                  ordered: true,
                  list: [
                    "Ajoelhe-se ao lado da pessoa deitada de costas.",
                    "Dobre o braço mais próximo de você em ângulo reto, com a palma para cima.",
                    "Traga o outro braço por cima do peito e apoie as costas da mão dele na bochecha do lado de você.",
                    "Dobre o joelho do lado mais distante.",
                    "Puxe esse joelho na sua direção para virar a pessoa de lado.",
                    "Incline a cabeça levemente para trás e continue observando a respiração.",
                  ],
                },
              ],
            },
            {
              title: "Mal-estar",
              body: [
                "Mal-estar é a sensação de que algo não vai bem: tontura, enjoo, fraqueza, suor frio, dor ou coração disparado. As causas são muitas, por isso não tente fechar um diagnóstico.",
                "Ajude a pessoa a se sentar ou se deitar num lugar seguro e arejado, longe do calor. Afrouxe roupas apertadas, pergunte o que sente e quando começou, e observe a respiração. Não dê nada pela boca se ela estiver sonolenta, confusa ou com dificuldade para engolir.",
                { box: "atencao", title: "Ligue para o 192 se houver", text: "Dor ou pressão no peito, falta de ar importante, desmaio sem recuperação rápida, confusão de repente, convulsão, sinais de AVC, sangramento forte ou piora rápida." },
              ],
            },
          ],
          activity: {
            title: "Certo ou errado?",
            steps: [
              "\"Depois que alguém desmaia, um copo de água com açúcar ajuda a acordar.\"",
              "\"Jogar água fria no rosto faz a pessoa voltar mais rápido.\"",
              "\"Uma pessoa desacordada que respira bem, sem suspeita de queda, pode ser colocada de lado.\"",
            ],
            answer: "1) Errado: nada de comer ou beber enquanto a pessoa não estiver bem acordada. 2) Errado: jogar água ou dar tapas não ajuda e pode piorar. 3) Certo: é a posição lateral de segurança, que mantém o caminho do ar livre.",
          },
          recap: [
            "Desmaio: deitar, pernas para cima se não houver trauma e conferir a respiração.",
            "Desacordado e respirando, sem suspeita de trauma: posição lateral de segurança.",
            "Mal-estar com dor no peito, falta de ar ou confusão: 192 na hora.",
          ],
        },
        {
          id: "quedas-sangramentos-fraturas",
          title: "Quedas, sangramentos e fraturas",
          summary: "Ajudar depois de uma queda, estancar um sangramento e cuidar de torções sem piorar.",
          goals: ["Ajudar depois de uma queda sem mover quem não deve ser movido", "Estancar um sangramento com pressão direta", "Agir em torções e suspeitas de fratura"],
          sections: [
            {
              title: "Depois de uma queda",
              body: [
                "Uma queda pode causar desde um arranhão até fraturas e lesões na cabeça, no pescoço e na coluna. Mesmo que a pessoa diga que está bem, observe.",
                {
                  ordered: true,
                  list: [
                    "Confira se o ambiente é seguro.",
                    "Converse com a pessoa e pergunte onde dói. Veja se está confusa, sonolenta ou com dificuldade para se mexer.",
                    "Não a levante rápido. Com dor forte, deformidade ou suspeita de lesão na cabeça, pescoço ou coluna, não a mova e espere a ajuda.",
                    "Mantenha a pessoa aquecida e tranquila enquanto espera.",
                  ],
                },
                { box: "atencao", title: "Procure atendimento urgente se houver", text: "Desmaio, confusão, convulsão, vômitos repetidos, dor de cabeça forte depois de bater a cabeça, dor no pescoço ou nas costas, formigamento, fraqueza, deformidade, sangramento importante ou queda de grande impacto. Idosos, crianças pequenas e quem usa remédio que \"afina o sangue\" podem precisar de avaliação mesmo com um machucado que parece pequeno." },
              ],
            },
            {
              title: "Cortes e sangramentos",
              body: [
                {
                  ordered: true,
                  list: [
                    "Proteja as mãos (luvas ou saco plástico).",
                    "Aperte firme o ferimento com um pano limpo ou gaze.",
                    "Se o pano encharcar, não tire: coloque outro por cima e continue apertando.",
                    "Em sangramento forte, profundo ou que não para, ligue para o 192 e não pare de apertar.",
                  ],
                },
                { box: "atencao", text: "Não retire objetos cravados (faca, vidro, pedaço de madeira): eles podem estar segurando o sangramento. Apoie o objeto com panos em volta para não se mexer e espere o socorro." },
                "Sangramento pelo nariz: sente a pessoa com a cabeça levemente para a frente (não para trás) e aperte a parte mole do nariz por 10 minutos.",
              ],
            },
            {
              title: "Torções e suspeita de fratura",
              body: [
                "Na torção, a articulação (tornozelo, joelho, punho) fica dolorida e inchada. Nas primeiras horas:",
                {
                  list: [
                    "Repouso: pare a atividade e não force.",
                    "Gelo: envolto num pano, por 15 a 20 minutos, nunca direto na pele.",
                    "Compressão leve com uma faixa, sem apertar a ponto de formigar.",
                    "Elevação: deixe a parte machucada mais alta.",
                  ],
                },
                "Suspeite de fratura se houver dor forte, deformidade, inchaço grande ou impossibilidade de mexer. Nesse caso, deixe a parte na posição em que está, sem puxar nem endireitar, e procure atendimento.",
                { box: "atencao", text: "Não tente colocar o osso no lugar e não massageie. Se o osso estiver exposto, cubra com um pano limpo sem empurrar e ligue para o 192." },
              ],
            },
          ],
          activity: {
            title: "Desafio: a queda na praça",
            steps: ["Num lugar público, uma pessoa cai, bate a cabeça e fica confusa. Escreva, em ordem, o que você faria até a equipe chegar."],
            fields: ["Minha sequência de atitudes:"],
            answer: "1) Ver se o local é seguro. 2) Chegar perto, chamá-la e ver se responde e respira normalmente. 3) Pedir para alguém específico ligar para o 192 (ou ligar no viva-voz), informando que ela bateu a cabeça e está confusa. 4) Não levantá-la nem movê-la, não dar nada pela boca e mantê-la aquecida e tranquila. 5) Ficar perto, observando se piora ou vomita, e seguir o atendente.",
          },
          recap: [
            "Depois de uma queda, não levante rápido; com dor no pescoço ou nas costas, não mova.",
            "Sangramento: pressão direta e não tire o pano encharcado nem objetos cravados.",
            "Torção: repouso, gelo, compressão e elevação; fratura: não colocar no lugar.",
          ],
        },
        {
          id: "acidentes-comuns",
          title: "Acidentes comuns",
          summary: "Trânsito, queimaduras, choque elétrico e intoxicação: o primeiro cuidado de cada um.",
          goals: ["Agir com segurança num acidente de trânsito", "Cuidar de queimaduras e choques elétricos", "Saber o que fazer numa intoxicação"],
          sections: [
            {
              title: "Acidente de trânsito",
              body: [
                "Proteja-se antes de ajudar: não entre no meio do trânsito sem segurança e peça para alguém sinalizar o local (pisca-alerta e triângulo bem antes). Ligue para o 192 ou o 193, conforme a situação.",
                { box: "atencao", text: "Não tire o capacete de um motociclista e evite mover as vítimas, principalmente se houver suspeita de lesão na coluna. A exceção é um perigo imediato, como fogo." },
              ],
            },
            {
              title: "Queimaduras",
              body: [
                {
                  ordered: true,
                  list: [
                    "Afaste a pessoa da fonte de calor sem se colocar em risco.",
                    "Deixe a área queimada sob água corrente fresca por cerca de 20 minutos.",
                    "Tire anéis, relógios e pulseiras antes de inchar, se for fácil. Não puxe roupas grudadas na pele.",
                    "Cubra com um pano limpo ou filme plástico, sem apertar.",
                  ],
                },
                "Não use gelo, pasta de dente, manteiga, óleo nem outras receitas caseiras, e não estoure as bolhas: elas protegem contra infecção. Procure atendimento se a queimadura for extensa ou profunda, química ou elétrica, se atingir rosto, mãos, pés, genitais ou articulações, ou se a vítima for criança ou idosa.",
              ],
            },
            {
              title: "Choque elétrico",
              body: [
                "Não toque na vítima enquanto ela estiver em contato com a fonte de energia. Desligue o disjuntor ou tire da tomada só se for seguro chegar até eles. Afaste outras pessoas e ligue para o 193 ou o 192. Só chegue perto quando tiver certeza de que a energia foi cortada.",
              ],
            },
            {
              title: "Intoxicação e envenenamento",
              body: [
                "Não provoque vômito e não dê leite, comida, bebida ou remédio para tentar neutralizar a substância. Afaste a pessoa do produto, se for seguro, guarde a embalagem e peça orientação na hora.",
                { box: "pratica", title: "Disque-Intoxicação: 0800 722 6001", text: "É um serviço gratuito de orientação. Se a pessoa tiver falta de ar, convulsão ou estiver desacordada, ligue para o 192." },
                {
                  sort: {
                    title: "Faz ou não faz?",
                    labels: ["Faz", "Não faz"],
                    items: [
                      { text: "Deixar a queimadura sob água corrente fresca por uns 20 minutos.", answer: 0, why: "Resfriar com água corrente fresca diminui a lesão e a dor." },
                      { text: "Passar pasta de dente na queimadura para refrescar.", answer: 1, why: "Receitas caseiras podem piorar a lesão e causar infecção." },
                      { text: "Estourar a bolha da queimadura para secar mais rápido.", answer: 1, why: "A bolha protege a pele de baixo contra infecção." },
                      { text: "Desligar o disjuntor antes de chegar perto de quem levou choque, se for seguro.", answer: 0, why: "Só depois de cortar a energia é seguro encostar na vítima." },
                      { text: "Puxar pelo braço quem está grudado num fio, para soltar rápido.", answer: 1, why: "A corrente passa para quem encosta. Você vira mais uma vítima." },
                      { text: "Provocar vômito em quem engoliu produto de limpeza.", answer: 1, why: "O produto pode queimar de novo o caminho na volta. Não provoque vômito." },
                      { text: "Guardar a embalagem do produto que a criança engoliu.", answer: 0, why: "A embalagem diz o que é a substância e ajuda na orientação." },
                      { text: "Tirar o capacete do motociclista para ele respirar melhor.", answer: 1, why: "Pode haver lesão no pescoço. O capacete fica até a equipe chegar." },
                    ],
                    sticker: { id: "sem-mitos", min: 7 },
                  },
                },
              ],
            },
          ],
          activity: {
            title: "Três situações",
            steps: [
              "Cozinhando, você queima as costas da mão na panela. Uma bolha começa a aparecer. O que fazer?",
              "Seu irmão de 3 anos aparece com um frasco de desinfetante aberto e a boca molhada. O que fazer?",
              "Na rua, um motociclista caiu, está acordado e pede para tirar o capacete. O que fazer?",
            ],
            answer: "1) Água corrente fresca por cerca de 20 minutos, tirar anel ou relógio, cobrir com pano limpo, não estourar a bolha nem passar nada. Se for maior que a palma da mão, procurar atendimento. 2) Não provocar vômito nem dar leite, guardar o frasco e ligar para o Disque-Intoxicação (0800 722 6001) ou para o 192 se ele tiver falta de ar, convulsão ou ficar sonolento. 3) Não tirar o capacete, mantê-lo parado e tranquilo, sinalizar o local com segurança e ligar para o 192.",
          },
          recap: [
            "No trânsito: segurança primeiro, sinalizar, não mover a vítima e não tirar o capacete.",
            "Queimadura: água corrente fresca por uns 20 minutos, sem gelo nem receitas caseiras.",
            "Choque: corte a energia antes de tocar; intoxicação: não provoque vômito e ligue 0800 722 6001.",
          ],
        },
      ],
      quiz: {
        sticker: { id: "mestre-do-modulo-3", min: 8 },
        questions: [
          { question: "Na fila do banco, uma moça fica pálida, diz que está tonta e desmaia. Ela respira normalmente e não bateu a cabeça. O que fazer?", options: ["Sentá-la e dar água com açúcar para ela acordar.", "Deitá-la de costas, levantar as pernas e observar a respiração.", "Jogar água no rosto e dar tapinhas para ela despertar.", "Levantá-la logo para ela não ficar no chão frio."], answer: 1, why: "Sem suspeita de trauma, deitar de costas com as pernas para cima ajuda o sangue a voltar ao cérebro. Água, tapas e comida estão na lista do que não fazer." },
          { question: "A moça acorda depois de alguns segundos e quer levantar rápido para não perder a vez. Foi o primeiro desmaio dela. O que fazer?", options: ["Deixá-la levantar, já que acordou bem.", "Dar um café forte antes de ela levantar.", "Pedir que descanse antes de levantar e que procure avaliação.", "Ajudá-la a caminhar, para o sangue circular."], answer: 2, why: "Levantar rápido pode causar outro desmaio. E um primeiro desmaio merece avaliação de um profissional." },
          { question: "Um homem está desacordado, respira normalmente e não caiu nem bateu em nada. Ele começa a fazer barulho de quem vai vomitar. O que fazer?", options: ["Colocá-lo na posição lateral de segurança e continuar observando.", "Mantê-lo de costas, com as pernas para cima, para o sangue voltar à cabeça.", "Sentá-lo encostado na parede.", "Virá-lo de bruços, com a cabeça para baixo."], answer: 0, why: "De lado, o vômito sai pela boca em vez de ir para o caminho do ar. A posição lateral é para quem respira e não tem suspeita de trauma." },
          { question: "Seu Jorge cai da escada e reclama de dor no pescoço e formigamento nas mãos. O que fazer?", options: ["Ajudá-lo a sentar devagar para ver se ele consegue se mexer.", "Levantá-lo com cuidado e levá-lo de carro ao hospital.", "Colocá-lo na posição lateral de segurança.", "Não movê-lo, manter o local seguro e ligar para o 192."], answer: 3, why: "Dor no pescoço com formigamento sugere lesão na coluna. Mover pode piorar; a equipe faz a imobilização certa." },
          { question: "O pano que Tati aperta sobre o corte do irmão encharcou de sangue. O que fazer?", options: ["Tirar o pano encharcado e colocar um limpo.", "Parar de apertar para ver se o sangue diminuiu.", "Colocar outro pano por cima, sem tirar o primeiro, e continuar apertando.", "Lavar o corte com água corrente para tirar o sangue e ver o tamanho do ferimento."], answer: 2, why: "Tirar o primeiro pano arranca o coágulo que está se formando. Põe-se outro por cima e mantém-se a pressão." },
          { question: "O nariz de Gui começa a sangrar. A tia manda ele inclinar a cabeça para trás. O que a aula diz?", options: ["Cabeça levemente para a frente e apertar a parte mole do nariz por 10 minutos.", "Cabeça inclinada para trás, para o sangue parar de escorrer pelo nariz, por 10 minutos.", "Deitar de costas e colocar gelo na testa.", "Assoar o nariz com força para tirar os coágulos."], answer: 0, why: "Com a cabeça para trás, o sangue desce pela garganta e pode causar enjoo ou engasgo. Para a frente e apertando, ele para." },
          { question: "Lia queimou o braço na chapa da lanchonete. Por quanto tempo deve deixar o braço na água corrente fresca?", options: ["Uns 30 segundos, só para aliviar a dor.", "Até a bolha aparecer.", "Água não: o certo é gelo direto na pele.", "Cerca de 20 minutos."], answer: 3, why: "Cerca de 20 minutos de água corrente fresca resfriam a pele de verdade. Gelo direto pode agravar a lesão." },
          { question: "Um rapaz está grudado num fio elétrico. O disjuntor fica no quadro da garagem, longe do fio. O que fazer?", options: ["Puxá-lo rápido, antes que o choque piore.", "Desligar o disjuntor, se for seguro chegar até ele, e só então se aproximar.", "Empurrá-lo com o pé, usando tênis de sola de borracha, que isola a corrente elétrica.", "Jogar água para cortar a corrente."], answer: 1, why: "Enquanto há energia, quem encosta leva choque também. Primeiro corta-se a energia com segurança." },
          { question: "Um menino de 3 anos bebeu água sanitária. A mãe quer fazê-lo vomitar e dar leite. O que fazer?", options: ["Fazê-lo vomitar logo, para tirar o produto.", "Dar um copo de leite, que neutraliza a água sanitária, e depois levá-lo ao posto de saúde.", "Não provocar vômito nem dar leite, guardar a embalagem e ligar para o 0800 722 6001.", "Dar bastante água e esperar os sintomas aparecerem."], answer: 2, why: "Vômito faz o produto passar de novo pela garganta, e leite não neutraliza. A embalagem ajuda na orientação." },
          { question: "No futebol, Rui torce o tornozelo. Incha, mas ele consegue mexer o pé. Quais cuidados nas primeiras horas?", options: ["Massagear o tornozelo e voltar a jogar se a dor passar.", "Gelo direto na pele por uma hora.", "Bolsa de água quente para desinchar.", "Repouso, gelo envolto em pano, faixa sem apertar e pé elevado."], answer: 3, why: "Repouso, gelo (envolto, 15 a 20 minutos), compressão leve e elevação. Gelo direto queima a pele, e calor aumenta o inchaço no começo." },
        ],
      },
    },
    {
      title: "Emergências e atendimento inicial",
      lessons: [
        {
          id: "parada-cardiaca",
          title: "Parada cardíaca: RCP e DEA",
          summary: "Reconhecer a parada, chamar o 192 no viva-voz, as noções de RCP e o desfibrilador.",
          goals: ["Reconhecer uma possível parada cardiorrespiratória", "Pedir ajuda do jeito certo, sem perder tempo", "Conhecer as noções de RCP e do DEA"],
          sections: [
            {
              title: "Reconhecer a parada",
              body: [
                "Na parada cardiorrespiratória (PCR), o coração deixa de bombear sangue e a circulação para. É uma das situações mais graves que existem: cada minuto conta.",
                {
                  list: [
                    "A pessoa não responde quando chamada ou tocada.",
                    "Não respira normalmente: pode dar suspiros isolados ou ter respiração irregular, que não são respiração normal.",
                  ],
                },
                { box: "atencao", text: "Não espere a pessoa melhorar sozinha e não dê água, comida ou remédio." },
              ],
            },
            {
              title: "Ligue e coloque no viva-voz",
              body: [
                "Garanta que o local é seguro, peça ajuda em voz alta e ligue para o 192. Coloque o telefone no viva-voz para ouvir as instruções com as mãos livres. Diga que a pessoa não responde e não respira normalmente: o atendente vai orientar o que fazer até a equipe chegar.",
                "Se houver outras pessoas, uma liga e outra vai buscar o DEA (desfibrilador), se houver um por perto.",
              ],
            },
            {
              title: "Noções de RCP",
              body: [
                "RCP (reanimação cardiopulmonar) são as ações que mantêm um pouco de sangue circulando até o socorro chegar. Para quem não tem treinamento, ela é feita só com compressões no peito, como o atendente do 192 orienta:",
                {
                  ordered: true,
                  list: [
                    "Deite a pessoa de costas, numa superfície firme.",
                    "Ajoelhe-se ao lado, coloque a base de uma mão no centro do peito e a outra por cima, com os dedos entrelaçados.",
                    "Braços esticados, ombros acima das mãos: empurre o peito para baixo uns 5 cm e solte, deixando o peito voltar.",
                    "Ritmo de 100 a 120 compressões por minuto, sem parar, até a equipe chegar, o DEA pedir ou a pessoa reagir.",
                  ],
                },
                { box: "chave", text: "Começar logo é mais importante do que fazer perfeito. Se houver outra pessoa, troquem a cada 2 minutos: cansado, ninguém comprime bem. E, sempre que puder, faça um curso prático: a técnica se aprende com as mãos." },
                "Treine o ritmo abaixo. Aperte o botão (ou a barra de espaço) como se fossem as compressões. Se quiser, ligue o som para ouvir o ritmo certo.",
                { tool: "ritmo-rcp" },
                { video: { youtubeId: "jtEDnhcR23w", title: "RCP no adulto, aula prática", minutes: 13 } },
                { video: { youtubeId: "uRxmiksNtN8", title: "RCP no bebê, aula prática", minutes: 10 } },
              ],
            },
            {
              title: "O desfibrilador (DEA)",
              body: [
                "O DEA é um aparelho portátil que analisa o ritmo do coração e, quando precisa, orienta um choque. Ele existe em shoppings, aeroportos, academias e estações, e foi feito para ser usado por qualquer pessoa: ele fala o que fazer.",
                {
                  ordered: true,
                  list: [
                    "Ligue o aparelho e siga as instruções de voz e as figuras.",
                    "Cole as pás no peito sem roupa, como mostra o desenho nelas.",
                    "Quando ele analisar e pedir, ninguém encosta na vítima.",
                    "Se ele indicar o choque, aperte o botão. Depois, volte às compressões na hora.",
                  ],
                },
                { box: "atencao", text: "Não atrase a ligação para o 192 para procurar o aparelho. Primeiro a ligação; o DEA vem com quem puder buscá-lo." },
              ],
            },
          ],
          activity: {
            title: "Coloque em ordem",
            steps: [
              "Organize estes passos na ordem certa: começar as compressões; verificar se o local é seguro; ligar para o 192 no viva-voz e pedir um DEA; chamar a pessoa e ver se ela responde e respira; ligar o DEA quando ele chegar.",
              "Quantas compressões por minuto?",
              "Quanto o peito deve afundar num adulto?",
            ],
            answer: "Ordem: 1) verificar se o local é seguro; 2) chamar a pessoa e ver se responde e respira; 3) ligar para o 192 no viva-voz e pedir um DEA; 4) começar as compressões, como o atendente orientar; 5) ligar o DEA quando ele chegar e seguir as instruções. São 100 a 120 compressões por minuto, afundando cerca de 5 cm.",
          },
          recap: [
            "Não responde e não respira normalmente: possível parada. 192 no viva-voz.",
            "Compressões fortes e rápidas no centro do peito, 100 a 120 por minuto.",
            "O DEA fala o que fazer; não atrase a ligação para buscá-lo.",
          ],
        },
        {
          id: "engasgo",
          title: "Engasgo",
          summary: "Diferenciar engasgo leve de grave e as noções para adultos, crianças e bebês.",
          goals: ["Diferenciar engasgo leve de engasgo grave", "Conhecer as noções das compressões abdominais", "Saber o que muda para bebês"],
          sections: [
            {
              title: "Leve ou grave?",
              body: [
                "O engasgo acontece quando um alimento ou objeto bloqueia, em parte ou totalmente, a passagem do ar.",
                {
                  table: {
                    caption: "Como reconhecer",
                    head: ["Engasgo leve", "Engasgo grave"],
                    rows: [
                      ["A pessoa tosse forte", "Não consegue tossir, ou a tosse é fraca"],
                      ["Consegue falar ou chorar", "Não consegue falar nem chorar"],
                      ["Respira, mesmo com dificuldade", "Não respira ou faz um chiado agudo"],
                      ["", "Leva as mãos ao pescoço; lábios ficando roxos"],
                    ],
                  },
                },
                { box: "chave", text: "Se a pessoa tosse com força, incentive-a a continuar tossindo e fique perto. A tosse é a melhor forma de soltar o objeto. Não dê água e não tente tirar nada da boca às cegas." },
              ],
            },
            {
              title: "Engasgo grave: adulto e criança acima de 1 ano",
              body: [
                "Peça para alguém ligar para o 192, de preferência no viva-voz. As noções das compressões abdominais (manobra de Heimlich) são:",
                {
                  ordered: true,
                  list: [
                    "Fique atrás da pessoa e passe os braços pela cintura dela.",
                    "Feche uma das mãos e coloque-a, com o polegar para dentro, um pouco acima do umbigo, bem abaixo das costelas.",
                    "Segure o punho com a outra mão e puxe com força para dentro e para cima.",
                    "Repita até o objeto sair ou a pessoa desmaiar.",
                  ],
                },
                "Em criança pequena, ajoelhe-se para ficar da altura dela. Em grávidas e pessoas muito obesas, as compressões são feitas no meio do peito, e não na barriga.",
                { box: "atencao", text: "Se a pessoa desmaiar, deite-a no chão com cuidado, confirme que o 192 foi chamado e siga o atendente para a RCP (Aula 8)." },
              ],
            },
            {
              title: "Bebês (menos de 1 ano)",
              body: [
                "Bebês precisam de cuidados próprios: não se usa neles a mesma manobra do adulto. As noções são:",
                {
                  ordered: true,
                  list: [
                    "Deite o bebê de bruços sobre o seu antebraço, com a cabeça mais baixa que o corpo, segurando o queixo dele com a mão.",
                    "Dê 5 tapas firmes nas costas, entre as escápulas, com a base da outra mão.",
                    "Vire o bebê de barriga para cima, apoiado no outro braço, com a cabeça mais baixa.",
                    "Faça 5 compressões no meio do peito, logo abaixo da linha dos mamilos, com dois dedos.",
                    "Repita até o objeto sair ou o socorro chegar.",
                  ],
                },
                { box: "atencao", text: "Não sacuda o bebê, não o vire de cabeça para baixo pelos pés e não tente tirar o objeto com o dedo se você não estiver vendo: pode empurrá-lo ainda mais para dentro." },
              ],
            },
            {
              title: "Depois que o engasgo passar",
              body: [
                "Mesmo que pareça tudo bem, observe a pessoa. Tosse que não passa, dificuldade para respirar, dor, voz alterada ou mal-estar pedem avaliação médica. Quem recebeu compressões abdominais também deve ser avaliado.",
                "As técnicas mudam conforme a idade. Para aprender de verdade, faça um treinamento presencial para adultos, crianças e bebês.",
              ],
            },
          ],
          activity: {
            title: "O que você faria?",
            steps: [
              "No almoço, um colega começa a tossir muito forte e diz \"engasguei\". O que fazer?",
              "Minutos depois, outra pessoa leva as mãos ao pescoço, não fala e não tosse. O que fazer?",
              "Um bebê de 8 meses engasga com um pedaço de fruta e não chora. Quais são os passos?",
            ],
            answer: "1) Ele tosse e fala: é engasgo leve. Incentive a tossir, fique perto e observe. Não dê água nem bata nas costas. 2) Engasgo grave: peça para alguém ligar para o 192 e faça as compressões abdominais até o objeto sair. 3) Ligue (ou peça para ligarem) para o 192 e alterne 5 tapas nas costas com 5 compressões no peito com dois dedos, sempre com a cabeça do bebê mais baixa.",
          },
          recap: [
            "Tossindo forte: deixe tossir. Sem tosse e sem fala: engasgo grave, 192.",
            "Adultos e crianças: compressões abdominais para dentro e para cima.",
            "Bebês: 5 tapas nas costas e 5 compressões no peito, nunca sacudir.",
          ],
        },
        {
          id: "convulsao-e-avc",
          title: "Convulsão e AVC",
          summary: "Proteger a pessoa durante uma convulsão e reconhecer o AVC com o método SAMU.",
          goals: ["Proteger alguém durante e depois de uma convulsão", "Reconhecer os sinais de AVC com o método SAMU", "Saber o que informar ao 192 num AVC"],
          sections: [
            {
              title: "Durante a convulsão",
              body: [
                "Na convulsão, a pessoa pode cair, ficar rígida, ter movimentos involuntários e ficar confusa depois. Nem toda crise é igual.",
                {
                  list: [
                    "Mantenha a calma e afaste objetos em que ela possa se machucar.",
                    "Proteja a cabeça com algo macio, como uma blusa dobrada.",
                    "Afrouxe roupas apertadas no pescoço.",
                    "Marque o horário de início e quanto tempo dura a crise.",
                  ],
                },
                { box: "atencao", title: "Nunca faça", text: "Não coloque nada na boca (nem colher, nem pano, nem dedo) e não tente segurar os movimentos. Ninguém \"engole a língua\" durante a convulsão." },
                { video: { youtubeId: "8fk2-liGO0A", title: "o que fazer numa convulsão", minutes: 9 } },
              ],
            },
            {
              title: "Depois da crise",
              body: [
                "Veja se a pessoa respira normalmente. Se respira e não há suspeita de trauma, coloque-a de lado, na posição lateral de segurança, e fique por perto. É comum ela ficar sonolenta ou confusa por um tempo: fale com calma e explique o que aconteceu. Não dê água, comida ou remédio enquanto ela não estiver bem acordada.",
                { box: "pratica", title: "Ligue para o 192 se", text: "For a primeira crise conhecida, durar mais de 5 minutos, vier outra crise sem a pessoa acordar, houver dificuldade para respirar, ferimento, gravidez, a crise acontecer na água ou houver qualquer dúvida." },
              ],
            },
            {
              title: "AVC: o método SAMU",
              body: [
                "O AVC acontece quando uma parte do cérebro deixa de receber sangue ou há um sangramento. É emergência: quanto mais rápido o atendimento, menores as sequelas.",
                {
                  table: {
                    caption: "Reconheça os sinais",
                    head: ["Letra", "Lembrete", "O que observar"],
                    rows: [
                      ["S", "Sorriso", "Peça para sorrir. Um lado do rosto está caído ou diferente?"],
                      ["A", "Abraço", "Peça para levantar os dois braços. Um deles cai ou não sobe?"],
                      ["M", "Mensagem", "Peça para repetir uma frase simples. A fala está enrolada ou confusa?"],
                      ["U", "Urgência", "Anote o horário em que os sinais começaram, ou quando a pessoa foi vista bem pela última vez, e ligue para o 192."],
                    ],
                  },
                },
                "Outros sinais possíveis: perda de força ou de sensibilidade de repente, principalmente de um lado do corpo; mudança de repente na visão, no equilíbrio ou na coordenação; dor de cabeça súbita e muito forte, sem causa aparente.",
              ],
            },
            {
              title: "Como agir no AVC",
              body: [
                "Ligue para o 192 na hora e informe os sinais e o horário em que começaram. Deixe a pessoa em repouso, num lugar seguro. Não dê comida, bebida ou remédio.",
                { box: "chave", text: "Não espere os sinais passarem: mesmo que melhorem, a avaliação urgente continua necessária. E não leve a pessoa dirigindo se dá para chamar o SAMU." },
                { video: { youtubeId: "uHkpYIhSWb4", title: "primeiros socorros no AVC", minutes: 10 } },
              ],
            },
          ],
          activity: {
            title: "Dois casos",
            steps: [
              "Uma pessoa cai e começa a ter movimentos involuntários. Alguém sugere colocar uma colher na boca dela para não morder a língua. O que você diz?",
              "Uma pessoa começa a falar enrolado e fica com um lado do rosto diferente. Minutos depois, parece melhor. Dá para esperar?",
            ],
            answer: "1) Não: nunca se coloca nada na boca. Afaste objetos perigosos, proteja a cabeça, marque o tempo e chame o 192 se for a primeira crise ou passar de 5 minutos. 2) Não: pode ser AVC. Ligue para o 192 na hora e informe o horário em que os sinais começaram, mesmo que tenham diminuído.",
          },
          recap: [
            "Convulsão: afaste objetos, proteja a cabeça, marque o tempo e nada na boca.",
            "Depois da crise, de lado e acompanhada; 192 se for a primeira ou passar de 5 minutos.",
            "AVC: Sorriso, Abraço, Mensagem e Urgência, com o horário de início.",
          ],
        },
        {
          id: "infarto-e-kit",
          title: "Infarto e o kit de primeiros socorros",
          summary: "Os sinais de infarto, o que fazer até o SAMU chegar e como montar e cuidar de um kit.",
          goals: ["Reconhecer os sinais de um possível infarto", "Saber o que fazer até o socorro chegar", "Montar e conservar um kit de primeiros socorros"],
          sections: [
            {
              title: "Sinais de infarto",
              body: [
                "O infarto acontece quando o sangue deixa de chegar a uma parte do músculo do coração. Os sinais variam de pessoa para pessoa e nem sempre são uma dor muito forte.",
                {
                  list: [
                    "Dor, pressão, aperto ou desconforto no peito, que pode durar alguns minutos ou ir e voltar.",
                    "Dor que se espalha para os braços, as costas, o pescoço, a mandíbula ou o estômago.",
                    "Falta de ar, suor frio, enjoo, tontura ou fraqueza.",
                  ],
                },
                { box: "atencao", text: "Em algumas pessoas, principalmente mulheres, idosos e diabéticos, os sinais podem ser menos típicos: cansaço forte, falta de ar ou mal-estar, às vezes sem dor no peito." },
              ],
            },
            {
              title: "Até o socorro chegar",
              body: [
                {
                  list: [
                    "Faça a pessoa parar o esforço e ficar numa posição confortável.",
                    "Ligue para o 192 e conte os sinais, o horário em que começaram e o endereço.",
                    "Fique com ela e observe se piora ou desmaia.",
                    "Não deixe que ela dirija nem vá caminhando até um serviço de saúde.",
                    "Não dê remédio por conta própria: siga o atendente do SAMU.",
                  ],
                },
                { box: "chave", title: "Não espere passar", text: "Dor no peito com falta de ar, suor frio, desmaio ou mal-estar pode ser emergência do coração. Se a pessoa desmaiar e não respirar normalmente, avise o 192 na hora e siga as orientações de RCP." },
              ],
            },
            {
              title: "O kit de primeiros socorros",
              body: [
                "Um kit reúne materiais simples para os cuidados iniciais de pequenos acidentes. Ele não substitui os profissionais.",
                {
                  table: {
                    caption: "Materiais básicos",
                    head: ["Material", "Para que serve"],
                    rows: [
                      ["Luvas descartáveis", "Evitar contato com sangue e outros fluidos; descarte depois de usar"],
                      ["Gazes e curativos adesivos", "Proteger pequenos ferimentos limpos; não reutilize"],
                      ["Ataduras e fita", "Manter um curativo no lugar, sem apertar demais"],
                      ["Soro fisiológico", "Limpeza simples, conforme o rótulo ou um profissional"],
                      ["Tesoura sem ponta", "Cortar gaze e fita; guarde longe de crianças"],
                      ["Máscara de barreira", "Proteção na ventilação, para quem tem treinamento"],
                      ["Saco para descarte", "Separar o material usado até jogar fora do jeito certo"],
                    ],
                  },
                },
              ],
            },
            {
              title: "Organização e conservação",
              body: [
                {
                  list: [
                    "Guarde o kit num lugar seco, limpo, identificado e fácil de achar pelos adultos.",
                    "Proteja os materiais do calor, da umidade e do sol.",
                    "Confira de tempos em tempos as embalagens e a validade.",
                    "Troque na hora o que foi usado, venceu ou estragou.",
                    "Deixe fora do alcance de crianças pequenas.",
                  ],
                },
                { box: "atencao", text: "Não coloque no kit remédios para distribuir sem orientação profissional. Ferimentos graves, queimaduras extensas, suspeita de fratura ou sangramento importante pedem atendimento de emergência." },
              ],
            },
          ],
          activity: {
            title: "O kit da minha casa",
            steps: ["Confira o que existe na sua casa (ou na escola, ou no trabalho) e responda."],
            fields: ["O que já temos:", "O que falta:", "Onde o kit vai ficar e quando vou conferir a validade:"],
            answer: "Um bom começo são luvas, gazes, curativos, atadura, fita, soro fisiológico, tesoura sem ponta e um saco para descarte. Escolha um lugar seco e fácil de achar, longe de crianças, e marque na agenda uma conferência a cada seis meses.",
          },
          recap: [
            "Infarto: dor ou aperto no peito, que pode ir para braço, costas ou mandíbula, com falta de ar e suor frio.",
            "Pare o esforço, ligue para o 192, não deixe dirigir e não dê remédio por conta própria.",
            "Kit em lugar seco e identificado, conferido e sem remédios para distribuir.",
          ],
        },
      ],
      quiz: {
        sticker: { id: "mestre-do-modulo-4", min: 8 },
        questions: [
          { question: "Numa reunião, um homem cai, não responde e só dá suspiros espaçados. O que vem primeiro?", options: ["Esperar um minuto para ver se ele volta sozinho.", "Pedir ajuda em voz alta e ligar para o 192 no viva-voz, dizendo que ele não respira normalmente.", "Dar água para ele reagir.", "Colocá-lo na posição lateral de segurança, para os suspiros ficarem mais fáceis, e aguardar a ambulância."], answer: 1, why: "Não responde e não respira normalmente é uma possível parada. A posição lateral é para quem respira normalmente; aqui, é 192 e RCP." },
          { question: "Nas compressões da RCP, qual é o ritmo certo?", options: ["Uma por segundo, para não cansar.", "Cerca de 30 por minuto, com pausas para conferir.", "De 100 a 120 por minuto, umas duas por segundo.", "O mais rápido possível, sem contar."], answer: 2, why: "De 100 a 120 por minuto mantém o sangue circulando. Mais devagar circula pouco; rápido demais não dá tempo de o peito voltar." },
          { question: "Onde e quanto se empurra nas compressões de um adulto?", options: ["No lado esquerdo do peito, em cima do coração, uns 2 cm.", "No centro do peito, uns 5 cm, deixando o peito voltar a cada vez.", "Na barriga, logo abaixo das costelas, uns 5 cm.", "No centro do peito, uns 5 cm, sem deixar o peito voltar."], answer: 1, why: "As mãos vão no centro do peito, afundando cerca de 5 cm. Deixar o peito voltar é o que permite o coração se encher de novo." },
          { question: "Alguém traz um DEA, que diz \"analisando, não toque no paciente\". O que fazer?", options: ["Continuar as compressões enquanto ele analisa, para o sangue não parar de circular.", "Desligar o aparelho, se ninguém tiver curso.", "Segurar a mão da vítima para acalmá-la.", "Parar, e ninguém encosta na vítima até o aparelho mandar."], answer: 3, why: "Se alguém encosta, o aparelho pode ler errado o ritmo do coração. Depois do choque ou da análise, voltam as compressões." },
          { question: "Só há você e a vítima, que não responde e não respira normalmente. O DEA fica no outro andar. O que vem primeiro?", options: ["Ligar para o 192 no viva-voz e seguir o atendente.", "Buscar o DEA antes de ligar.", "Começar as compressões e só ligar depois de cinco minutos.", "Descer para pedir ajuda e voltar com alguém."], answer: 0, why: "A aula é clara: não atrase o chamado para procurar o aparelho. O atendente orienta a RCP enquanto a equipe vai até você." },
          { question: "Na lanchonete, Bia engasga, tosse forte e diz \"engasguei\". O que fazer?", options: ["Dar tapas fortes nas costas dela, para ajudar a soltar o alimento.", "Fazer as compressões abdominais na hora.", "Incentivar a tosse e ficar perto, observando.", "Dar água para ajudar a descer."], answer: 2, why: "Quem tosse forte e fala tem engasgo leve. A tosse é a melhor forma de soltar o objeto; tapas e manobras são para o engasgo grave." },
          { question: "Um homem leva as mãos ao pescoço, não fala e não tosse. Alguém já ligou para o 192. Qual é a noção da aula?", options: ["Compressões abdominais: atrás dele, punho acima do umbigo, puxando para dentro e para cima.", "Dar água para o alimento descer.", "Tentar tirar o alimento com o dedo, mesmo sem vê-lo.", "Deitá-lo de costas e esperar a ambulância."], answer: 0, why: "Sem tosse e sem fala, é engasgo grave. Dedo às cegas pode empurrar o objeto para dentro." },
          { question: "Um bebê de 7 meses engasga e não chora nem tosse. Qual é a noção da aula?", options: ["Fazer a mesma manobra do adulto, com menos força, abraçando o bebê pela barriga.", "Virar o bebê de cabeça para baixo, segurando pelos pés.", "Sacudir o bebê para o alimento sair.", "Alternar 5 tapas nas costas e 5 compressões no peito, com a cabeça mais baixa."], answer: 3, why: "Bebês têm técnica própria: 5 tapas entre as escápulas e 5 compressões com dois dedos. Sacudir ou virar pelos pés pode machucar." },
          { question: "Ao ligar para o 192 por suspeita de AVC, que informação o método SAMU pede para você ter?", options: ["A pressão arterial da pessoa.", "O horário em que os sinais começaram, ou quando ela foi vista bem pela última vez.", "Os remédios que ela toma e os que você já deu para baixar a pressão até a equipe chegar.", "Há quantos anos ela tem pressão alta."], answer: 1, why: "O U de Urgência é anotar o horário e ligar. Esse horário muda o tratamento que a equipe pode fazer." },
          { question: "Dona Rosa, que tem diabetes, sente cansaço forte, falta de ar e mal-estar, sem dor no peito. A filha acha que não é do coração. O que a aula diz?", options: ["Sem dor no peito, não é infarto.", "Ela deve tomar um remédio do coração que tiver em casa e deitar até o mal-estar passar.", "Pode ser infarto: em mulheres, idosos e diabéticos os sinais podem ser menos típicos.", "Ela deve caminhar um pouco para ver se melhora."], answer: 2, why: "Nesses grupos, o infarto pode vir só com cansaço, falta de ar ou mal-estar. Na dúvida, 192, repouso e nada de remédio por conta própria." },
        ],
      },
    },
  ],
};
