// Curso: Educação financeira pessoal. 5 módulos com 3 aulas cada.
// Os 5 módulos estão prontos, cada um com uma interação e um quiz de 10 perguntas.
// Segue o padrão de app/foundation-lessons.ts.

import type { CourseContent } from "../foundation-lessons";
import { PROVA_EDUCACAO_FINANCEIRA } from "./educacao-financeira-prova";

export const EDUCACAO_FINANCEIRA: CourseContent = {
  note: "Material educativo. As informações sobre crédito e investimentos são introdutórias e não são recomendação de contratar ou aplicar em nada.",
  quiz: PROVA_EDUCACAO_FINANCEIRA,
  closing: "Educação financeira se constrói aos poucos. Você não precisa mudar tudo de uma vez: comece com uma atitude possível, acompanhe e ajuste sempre que precisar.",
  cover: { color: "#d99b9e", ink: "#94535b", glow: "#f2bcc0", desk: "mesa-rosa" },
  stickers: [
    { id: "ponto-de-partida", name: "Ponto de partida", how: "Fez o diagnóstico inicial." },
    { id: "primeiro-olhar", name: "Primeiro olhar", how: "Respondeu o mito ou verdade da Aula 1." },
    { id: "olhar-treinado", name: "Olhar treinado", how: "Acertou 6 ou mais no necessidade ou desejo." },
    { id: "prioridades-claras", name: "Prioridades claras", how: "Escolheu as suas três prioridades." },
    { id: "mente-fria", name: "Mente fria", how: "Terminou o mês da Lia com a meta e sem parcelas." },
    { id: "mestre-do-modulo-1", name: "Mestre do módulo", how: "Acertou 8 ou mais no quiz do Módulo 1." },
    { id: "orcamento-fechado", name: "Conta fechada", how: "Montou um orçamento sem faltar dinheiro e com algo para as metas." },
    { id: "mestre-do-modulo-2", name: "Orçamento na mão", how: "Acertou 8 ou mais no quiz do Módulo 2." },
    { id: "parcela-que-cabe", name: "Parcela que cabe", how: "Testou uma compra nova sem passar de 20% da renda em nenhum mês." },
    { id: "mestre-do-modulo-3", name: "Crédito sob controle", how: "Acertou 8 ou mais no quiz do Módulo 3." },
    { id: "etiqueta-decifrada", name: "Etiqueta decifrada", how: "Comparou duas ou mais opções pelo preço por unidade." },
    { id: "mestre-do-modulo-4", name: "Consumidor atento", how: "Acertou 8 ou mais no quiz do Módulo 4." },
    { id: "juros-a-favor", name: "Juros a favor", how: "Simulou um investimento com os seus próprios números." },
    { id: "mestre-do-modulo-5", name: "Futuro planejado", how: "Acertou 8 ou mais no quiz do Módulo 5." },
  ],
  modules: [
    {
      title: "Mentalidade financeira",
      lessons: [
        {
          id: "introducao-educacao-financeira",
          title: "Introdução à educação financeira",
          summary: "O seu ponto de partida, o que é educação financeira e o que ela não é.",
          goals: ["Descobrir o seu ponto de partida com um diagnóstico rápido", "Entender o que é, e o que não é, educação financeira", "Conhecer as palavras que vão aparecer no curso"],
          sections: [
            {
              title: "Seu ponto de partida",
              body: [
                "Antes de falar de orçamento, juros ou investimentos, este módulo olha para quem toma as decisões: você. Não existe certo ou errado no ponto de partida, existe o seu ponto de partida.",
                "Responda pensando nos últimos três meses. Não é prova e não tem nota: é uma fotografia de onde você está agora.",
                { tool: "diagnostico-financeiro" },
              ],
            },
            {
              title: "O que é educação financeira?",
              body: [
                "Educação financeira é o conjunto de conhecimentos, atitudes e hábitos que ajudam uma pessoa a administrar os próprios recursos, tomar decisões, planejar objetivos e lidar com imprevistos.",
                "Ela não depende de quanto você ganha: quem recebe um salário mínimo e quem recebe dez decide, todo mês, como usar o que tem. O objetivo não é ficar rico rápido nem viver contando moedas. É fazer o dinheiro trabalhar a favor da vida que você quer.",
                { box: "chave", title: "Ideia-chave", text: "Educação financeira é usar o dinheiro de forma consciente, alinhada às suas prioridades e à sua realidade. Ela é sobre escolhas, não sobre privação." },
                {
                  sort: {
                    title: "Mito ou verdade?",
                    labels: ["Mito", "Verdade"],
                    sticker: { id: "primeiro-olhar", min: 0 },
                    items: [
                      { text: "Educação financeira é só para quem ganha bem.", answer: 0, why: "Quem ganha pouco é justamente quem mais sente o peso de cada real. Organização ajuda em qualquer renda." },
                      { text: "Ser organizado com dinheiro significa nunca gastar com lazer.", answer: 0, why: "Lazer planejado faz parte de uma vida financeira saudável. Planos que proíbem tudo costumam ser abandonados." },
                      { text: "Pequenos gastos frequentes podem pesar mais no mês do que uma compra grande.", answer: 1, why: "Gastos pequenos e repetidos somam centenas de reais por mês e passam despercebidos. Você vai ver isso na Aula 2." },
                      { text: "Se eu ganhar mais, meus problemas com dinheiro vão se resolver sozinhos.", answer: 0, why: "Sem hábitos e organização, os gastos tendem a crescer junto com a renda." },
                    ],
                  },
                },
              ],
            },
            {
              title: "Por que isso importa no dia a dia",
              body: [
                "Quase todo dia você toma uma decisão financeira: pegar o ônibus ou o aplicativo, cozinhar ou pedir comida, parcelar ou esperar, aceitar ou recusar um convite. Sozinhas, parecem pequenas. Somadas, definem se o mês termina com folga ou com aperto.",
                "Quem entende as próprias escolhas ganha autonomia: deixa de depender da sorte, de promoções ou da opinião dos outros. E o dinheiro deixa de ser um assunto que dá ansiedade.",
                "O curso foi organizado como uma escada. Este módulo é o primeiro degrau:",
                {
                  cards: [
                    { title: "Conhecer", text: "Saber como você pensa e para onde vai o seu dinheiro.", tag: "Módulos 1 e 2" },
                    { title: "Planejar", text: "Montar um orçamento e definir metas possíveis.", tag: "Módulo 2" },
                    { title: "Decidir", text: "Usar crédito e consumir com consciência.", tag: "Módulos 3 e 4" },
                    { title: "Proteger e crescer", text: "Criar reserva, entender a inflação e investir.", tag: "Módulo 5" },
                  ],
                },
              ],
            },
            {
              title: "O que educação financeira não é",
              body: [
                {
                  list: [
                    "Não é cortar todo o lazer. Um plano que ignora o prazer costuma ser abandonado.",
                    "Não é só para quem ganha muito. Com pouca renda, cada real pesa mais, então organizar faz mais diferença.",
                    "Não é só matemática. A maior parte das decisões passa por emoções, hábitos e valores.",
                    "Não é culpa. Errar faz parte. O que importa é perceber o padrão e ajustar o próximo passo.",
                  ],
                },
                { box: "atencao", title: "Ganhar mais resolve?", text: "Ajuda, mas nem sempre resolve. Sem organização, os gastos crescem junto com a renda: o aumento vira uma assinatura nova, um celular mais caro, mais pedidos de comida. Por isso os hábitos vêm antes." },
                "Palavras que você vai usar no curso:",
                {
                  cards: [
                    { title: "Receita ou renda", text: "Todo dinheiro que entra: salário, bicos, vendas." },
                    { title: "Despesa", text: "Todo dinheiro que sai: contas, compras, parcelas." },
                    { title: "Saldo", text: "O que sobra (ou falta) depois das despesas." },
                    { title: "Orçamento", text: "O plano de como usar a renda no mês." },
                    { title: "Juros", text: "O preço do dinheiro no tempo, cobrado ou recebido." },
                    { title: "Reserva", text: "Dinheiro guardado para imprevistos." },
                  ],
                },
              ],
            },
            {
              title: "Camila e o dinheiro que \"sumia\"",
              body: [
                "Camila, 23 anos, recebe R$ 2.000 por mês como assistente de loja. Todo fim de mês, ela não sabia para onde o dinheiro tinha ido. Veja o que ela fez:",
                {
                  ordered: true,
                  list: [
                    "Registrou tudo por uma semana, inclusive valores pequenos, no bloco de notas do celular.",
                    "Encontrou dois padrões: pedia comida pelo aplicativo duas vezes por semana (cerca de R$ 30 cada) e pagava três assinaturas de R$ 30, mas só usava uma.",
                    "Calculou o mês: delivery = R$ 30 × 2 × 4,33 semanas ≈ R$ 260; assinaturas = R$ 90.",
                    "Decidiu, sem cortar tudo: manteve um delivery por semana (≈ R$ 130) e uma assinatura (R$ 30).",
                  ],
                },
                {
                  table: {
                    caption: "O mês da Camila, antes e depois",
                    head: ["Gasto", "Antes", "Depois", "Diferença"],
                    rows: [
                      ["Delivery", "R$ 260", "R$ 130", "R$ 130"],
                      ["Assinaturas", "R$ 90", "R$ 30", "R$ 60"],
                      ["Por mês", "R$ 350", "R$ 160", "R$ 190"],
                      ["Em 12 meses", "", "", "R$ 2.280"],
                    ],
                  },
                },
                "O que fez a diferença não foi uma regra rígida, e sim enxergar o padrão. Camila continua pedindo comida, só que agora por escolha, não no automático.",
                {
                  check: {
                    question: "Qual frase descreve melhor o que Camila fez primeiro?",
                    options: ["Cortou todos os gastos com lazer.", "Observou e registrou os próprios gastos antes de decidir.", "Procurou um emprego com salário maior."],
                    answer: 1,
                    why: "Camila começou observando. Registrar os gastos mostrou os padrões e permitiu decidir sem cortar tudo. Cortar todo o lazer seria uma regra difícil de manter, e um salário maior não resolve o problema de não saber para onde o dinheiro vai.",
                  },
                },
              ],
            },
          ],
          activity: {
            title: "Minha história com o dinheiro",
            steps: ["Nossa relação com o dinheiro começa cedo, com o que ouvimos e vimos em casa. Responda com calma."],
            fields: [
              "Uma frase sobre dinheiro que eu ouvia na infância ou na adolescência:",
              "Como essa frase ainda aparece nas minhas decisões hoje?",
              "O que eu gostaria que fosse diferente na minha relação com o dinheiro daqui a um ano?",
            ],
            answer: "Não há resposta certa. Repare se a frase da infância virou uma regra que ainda decide por você, como \"dinheiro é para gastar logo\" ou \"falar de dinheiro é feio\". Tente reescrever a frase de um jeito que ajude.",
          },
          recap: [
            "Educação financeira é sobre escolhas conscientes, não sobre cortar tudo.",
            "Ela vale para qualquer renda: com pouco dinheiro, cada real pesa mais.",
            "O primeiro passo é enxergar para onde o dinheiro vai, como fez a Camila.",
          ],
        },
        {
          id: "comportamento-e-habitos",
          title: "Comportamento e hábitos financeiros",
          summary: "Como emoções, gatilhos e rotinas decidem por nós, e como retomar o controle.",
          goals: ["Entender o ciclo do hábito: gatilho, ação e recompensa", "Reconhecer os gatilhos e as armadilhas que levam a gastos automáticos", "Calcular o peso de um gasto pequeno no mês e no ano"],
          sections: [
            {
              title: "O piloto automático das compras",
              body: [
                "Grande parte do nosso dia é feita no automático: o caminho até o trabalho, o café da manhã, o celular na mão antes de dormir. Com o dinheiro acontece o mesmo. Muitas compras não são decisões pensadas, são respostas automáticas a uma situação ou a uma emoção.",
                "Isso não é defeito de caráter: é o cérebro economizando energia, repetindo o que já conhece. A boa notícia é que o que foi aprendido pode ser reaprendido. Todo hábito segue um ciclo de três partes:",
                {
                  cards: [
                    { title: "Gatilho", text: "A situação ou emoção que dispara a ação.", tag: "Chego cansada do trabalho." },
                    { title: "Ação", text: "O comportamento repetido.", tag: "Abro o app e peço comida." },
                    { title: "Recompensa", text: "A sensação boa que reforça o ciclo.", tag: "Alívio, conforto, prazer." },
                  ],
                },
                "Depois da recompensa, o cérebro aprende: \"da próxima vez que eu estiver cansada, faço isso de novo\". Assim o ciclo se repete.",
              ],
            },
            {
              title: "Gatilhos emocionais mais comuns",
              body: [
                "Sentir vontade de comprar não é um problema. O risco está em agir sempre do mesmo jeito sem perceber o que está por trás.",
                {
                  cards: [
                    { title: "Estresse e cansaço", text: "Comprar vira uma recompensa rápida depois de um dia difícil." },
                    { title: "Tédio", text: "Rolar a tela de lojas \"só para olhar\" e acabar no carrinho." },
                    { title: "Tristeza ou ansiedade", text: "A compra traz alívio na hora, mas o problema continua depois." },
                    { title: "Comemoração", text: "\"Eu mereço\" é verdade, mas pode virar desculpa para gastar além do plano." },
                    { title: "Comparação", text: "Ver amigos e influenciadores com algo novo dá a sensação de estar para trás." },
                    { title: "Urgência", text: "\"Só hoje\", \"últimas unidades\" e contagem regressiva apressam a decisão." },
                  ],
                },
              ],
            },
            {
              title: "Armadilhas da mente",
              body: [
                "Algumas tendências do nosso pensamento, estudadas pela economia comportamental, deixam as decisões com dinheiro mais difíceis:",
                {
                  table: {
                    caption: "Armadilhas que aparecem nas compras",
                    head: ["Armadilha", "Como funciona", "Exemplo"],
                    rows: [
                      ["Viés do presente", "Valorizamos muito mais o prazer de agora do que um benefício no futuro.", "Gastar hoje o que seria guardado para a viagem."],
                      ["Ancoragem", "O primeiro número que vemos vira referência e faz o segundo parecer barato.", "\"De R$ 300 por R$ 199.\""],
                      ["Efeito manada", "Se muita gente está fazendo, parece certo fazer também.", "Comprar o produto que \"todo mundo tem\"."],
                      ["Gastos formiga", "Valores pequenos e frequentes passam despercebidos, mas somam muito.", "Café, lanche, taxa de entrega, apostas."],
                      ["Pagamento sem dor", "Quanto mais fácil pagar, menos sentimos o dinheiro saindo.", "Cartão salvo no app, Pix com um toque."],
                    ],
                  },
                },
                { box: "chave", title: "Ideia-chave", text: "Perceber o motivo de uma compra é o que transforma uma reação automática em uma escolha. A pergunta \"por que eu quero isso agora?\" já é uma ferramenta." },
              ],
            },
            {
              title: "Quanto custa um gasto formiga",
              body: [
                "Rafael compra um café (R$ 8) e um salgado (R$ 12) todos os dias úteis, 5 dias por semana. Parece pouco. Veja a conta:",
                {
                  table: {
                    caption: "O lanche do Rafael",
                    head: ["Passo", "Conta", "Resultado"],
                    rows: [
                      ["Por dia", "R$ 8 + R$ 12", "R$ 20"],
                      ["Por semana", "R$ 20 × 5 dias", "R$ 100"],
                      ["Por mês", "R$ 100 × 52 semanas ÷ 12 meses", "≈ R$ 433"],
                      ["Por ano", "R$ 100 × 52 semanas", "R$ 5.200"],
                    ],
                  },
                },
                "Rafael não quis abrir mão do café. Decidiu levar lanche de casa em 3 dos 5 dias: R$ 12 × 3 = R$ 36 por semana, cerca de R$ 156 por mês (36 × 52 ÷ 12). Ele mantém o prazer do café e libera dinheiro para uma meta.",
                { box: "exemplo", title: "Por que 52 ÷ 12?", text: "Um mês tem, em média, 4,33 semanas. Multiplicar por 4 deixa alguns dias de fora e faz o gasto parecer menor do que é." },
                "Agora faça a conta com um gasto seu:",
                { tool: "gasto-formiga" },
              ],
            },
            {
              title: "Como mudar um hábito",
              body: [
                "Força de vontade sozinha costuma falhar. Funciona melhor mudar o ambiente e o ciclo do hábito:",
                {
                  ordered: true,
                  list: [
                    "Troque a ação, mantenha a recompensa. Se o delivery traz descanso, busque outro descanso: um banho demorado, uma série, uma comida simples já planejada.",
                    "Crie atrito para o gasto por impulso. Tire o cartão salvo dos aplicativos, desative notificações de promoções e saia de grupos de ofertas.",
                    "Facilite o hábito bom. Programe uma transferência para a meta no dia em que o dinheiro entra. O que é automático acontece.",
                    "Comece pequeno. Mudar um hábito por vez é mais realista do que mudar tudo na segunda-feira.",
                    "Registre e acompanhe. Ver o progresso no papel motiva e mostra o que funciona.",
                  ],
                },
                {
                  check: {
                    question: "Qual destas atitudes cria \"atrito\" para compras por impulso?",
                    options: ["Salvar o cartão em mais aplicativos para pagar mais rápido.", "Ativar as notificações de ofertas relâmpago.", "Remover o cartão salvo e esperar 24 horas antes de comprar algo não planejado."],
                    answer: 2,
                    why: "Tirar o cartão salvo e esperar 24 horas cria uma pausa entre a vontade e a compra, e é nessa pausa que você decide. As outras duas deixam a compra ainda mais fácil.",
                  },
                },
                { box: "pratica", title: "Desafio dos 7 dias", text: "Durante sete dias seguidos, anote tudo o que gastar, inclusive valores pequenos, Pix e compras no cartão. Ao lado de cada gasto, escreva N (necessidade) ou D (desejo) e o motivo ou a emoção do momento. No fim, some tudo e multiplique por 52 ÷ 12 para ter uma ideia do mês. Guarde esse registro: no Módulo 2 ele vira a base do seu primeiro orçamento." },
              ],
            },
          ],
          activity: {
            title: "Meu mapa de gatilhos",
            steps: [
              "Lembre de uma compra recente que não estava nos seus planos.",
              "Preencha o ciclo dela: o que disparou, como você se sentia, o que fez e quanto gastou.",
              "Pense numa alternativa para a próxima vez, usando uma das cinco estratégias.",
            ],
            fields: [
              "Situação (o gatilho):",
              "Como eu me sentia:",
              "O que eu fiz (e quanto gastei):",
              "O que vou fazer da próxima vez (nova ação e atrito que vou criar):",
            ],
            answer: "Um bom plano mantém a recompensa, cria um atrito concreto (tirar o cartão salvo, desativar notificações) e tem prazo para acompanhar, como duas semanas.",
          },
          recap: [
            "Muitas compras são respostas automáticas: gatilho, ação e recompensa.",
            "Gastos pequenos e repetidos pesam muito: calcule semana × 52 ÷ 12.",
            "Criar atrito para o impulso e facilitar o hábito bom funciona melhor do que força de vontade.",
          ],
        },
        {
          id: "necessidades-desejos-prioridades",
          title: "Necessidades, desejos e prioridades",
          summary: "Separar o essencial do adiável e decidir com base no que importa para você.",
          goals: ["Diferenciar necessidade e desejo no seu contexto", "Usar as 5 perguntas e a regra da espera antes de comprar", "Definir as suas prioridades e testar tudo num mês de tentações"],
          sections: [
            {
              title: "Necessidade ou desejo?",
              body: [
                {
                  cards: [
                    { title: "Necessidade", text: "O que mantém o seu bem-estar, a sua segurança e a rotina funcionando: moradia, alimentação, saúde, transporte para trabalhar ou estudar, contas básicas." },
                    { title: "Desejo", text: "O que gostaríamos de ter ou fazer, mas pode esperar ou ser trocado: um modelo mais novo, uma roupa a mais, um passeio. Desejos não são vilões: dão prazer à vida e podem ser planejados." },
                  ],
                },
                "O contexto muda tudo. Um notebook é ferramenta de trabalho para quem é designer e diversão para quem só assiste a filmes. Por isso não existe uma lista que vale para todo mundo: a pergunta certa é \"para mim, agora, isso é necessário?\"",
                {
                  sort: {
                    title: "Treine o olhar",
                    labels: ["Necessidade", "Desejo"],
                    sticker: { id: "olhar-treinado", min: 6 },
                    items: [
                      { text: "Pagar a conta de luz do mês.", answer: 0, why: "Energia elétrica é conta básica de moradia." },
                      { text: "Comprar um terceiro tênis branco, tendo dois em bom estado.", answer: 1, why: "Já existem dois tênis em bom estado: o terceiro é vontade, não falta." },
                      { text: "Recarregar o cartão de ônibus para ir ao trabalho.", answer: 0, why: "O transporte para trabalhar mantém a renda e a rotina." },
                      { text: "Trocar o celular pelo lançamento, sendo que o atual funciona bem.", answer: 1, why: "O aparelho atual funciona. Trocar pelo lançamento é desejo, que pode ser planejado." },
                      { text: "Comprar o remédio de uso contínuo receitado pelo médico.", answer: 0, why: "Saúde é necessidade, principalmente um tratamento receitado." },
                      { text: "Assinar mais um streaming para ver uma única série.", answer: 1, why: "É diversão extra. Pode caber no lazer, mas não é essencial." },
                      { text: "Fazer as compras do mês no mercado.", answer: 0, why: "Alimentação é necessidade. Mas atenção: dentro do mercado também há itens de desejo." },
                      { text: "Jantar num restaurante para comemorar um aniversário.", answer: 1, why: "É um desejo legítimo e importante para muitas pessoas. A dica é planejar o valor, não proibir." },
                    ],
                  },
                },
              ],
            },
            {
              title: "O celular do Bruno",
              body: [
                "Muitas vezes, uma compra tem uma parte necessidade e uma parte desejo. O celular de Bruno quebrou, e ele usa o aparelho para receber pedidos no trabalho como entregador. Na loja, ficou entre um modelo de R$ 1.400 e o lançamento de R$ 5.000.",
                {
                  ordered: true,
                  list: [
                    "Qual é a necessidade? Um celular confiável, com boa bateria, GPS e os aplicativos de trabalho funcionando.",
                    "O modelo de R$ 1.400 atende? Sim. Ele cumpre tudo o que o trabalho exige.",
                    "O que é desejo? A câmera melhor e o status do lançamento: R$ 5.000 − R$ 1.400 = R$ 3.600 de desejo.",
                    "Decisão: comprou o modelo de R$ 1.400. Se ainda quiser o lançamento, pode planejar essa compra no futuro, sem parcelas longas.",
                  ],
                },
                {
                  check: {
                    question: "No exemplo do Bruno, qual parte da compra era desejo?",
                    options: ["Todo o valor, porque celular não é necessidade.", "A diferença de R$ 3.600 entre o lançamento e o modelo que atende ao trabalho.", "Nenhuma parte, porque ele trabalha com o celular."],
                    answer: 1,
                    why: "O celular era necessidade, porque Bruno trabalha com ele. A necessidade era atendida pelo modelo de R$ 1.400; os R$ 3.600 a mais pagavam câmera e status, ou seja, desejo.",
                  },
                },
              ],
            },
            {
              title: "As 5 perguntas antes de comprar",
              body: [
                "Use estas perguntas para qualquer compra que não seja essencial. Se a resposta for \"não\" em duas ou mais, vale esperar.",
                {
                  cards: [
                    { title: "Preciso?", text: "Resolve uma necessidade real?" },
                    { title: "Já tenho?", text: "Tenho algo parecido que funciona?" },
                    { title: "Cabe?", text: "Cabe no mês sem afetar o essencial?" },
                    { title: "Comparei?", text: "Pesquisei preço, frete e qualidade?" },
                    { title: "Vou querer?", text: "Ainda vou querer depois de esperar?" },
                  ],
                },
                { box: "chave", title: "A regra da espera", text: "Para compras pequenas não planejadas, espere 24 horas. Para compras maiores, espere 30 dias e anote o item numa lista de desejos. Se a vontade continuar e a compra couber no plano, ela deixa de ser impulso e passa a ser escolha." },
              ],
            },
            {
              title: "Valores e prioridades",
              body: [
                "Prioridade é aquilo que você considera mais importante. Duas pessoas com a mesma renda podem fazer escolhas muito diferentes, porque têm objetivos, responsabilidades e valores diferentes.",
                "Quando você sabe o que é prioridade, fica mais fácil dizer não para o que não é, sem culpa, inclusive diante das redes sociais. Lembre que não conhecemos a renda, as dívidas nem as condições por trás do que vemos ali.",
                {
                  cards: [
                    { title: "Lembre do recorte", text: "As redes mostram momentos escolhidos, não a fatura do cartão." },
                    { title: "Limpe o feed", text: "Deixe de seguir perfis que despertam vontade constante de comprar." },
                    { title: "Compare com você", text: "A melhor comparação é com o seu mês anterior, não com a vida dos outros." },
                  ],
                },
                { tool: "prioridades" },
              ],
            },
            {
              title: "Simulação: um mês de tentações",
              body: [
                "Lia tem 24 anos e trabalha como auxiliar administrativa. Ela recebe R$ 2.400 por mês. Depois de pagar o essencial (aluguel dividido, contas, mercado e transporte, que somam R$ 1.750), sobram R$ 650 livres para o mês.",
                "A meta da Lia é guardar R$ 250 neste mês para um curso que ela quer fazer. Ou seja: o saldo livre precisa terminar o mês com pelo menos R$ 250. Tome as decisões por ela e veja como cada escolha muda o fim do mês.",
                { tool: "simulacao-lia" },
                { box: "chave", title: "Lazer também é escolha consciente", text: "A simulação não premia quem gasta zero. Ir ao show ou pedir comida pode ser uma ótima decisão, desde que caiba no plano e venha de uma escolha, não de um impulso." },
              ],
            },
          ],
          activity: {
            title: "O caso da Marina",
            steps: [
              "Marina tem 27 anos e recebe R$ 3.200 por mês. Quer viajar daqui a 12 meses e precisa juntar R$ 2.400, ou seja, R$ 200 por mês. Hoje sobram só R$ 144 e ela sente culpa sempre que gasta.",
              "Ela pede comida quase sempre à noite, depois de dias cansativos, e comprou roupas em promoções relâmpago, com o cartão salvo em quatro aplicativos.",
              "Gastos do mês: aluguel R$ 950, mercado R$ 520, contas R$ 260, transporte R$ 210, delivery R$ 390 (13 pedidos de cerca de R$ 30), parcelas de roupas R$ 340 (terminam em 4 meses), saídas e presentes R$ 180, academia R$ 110 (vai 3 vezes por semana) e três streamings R$ 96 (usa só um). Total: R$ 3.056.",
            ],
            fields: [
              "Dois gatilhos da Marina, e o ciclo de um deles:",
              "O que é necessidade, o que é desejo e o que \"depende\"?",
              "Três ações (um atrito, um hábito novo e uma ligada à viagem) e a conta de quanto sobra:",
              "Como ela pode ter lazer sem culpa?",
            ],
            answer: "Gatilhos: cansaço à noite → pede comida → alívio; promoções relâmpago com cartão salvo → compra rápida de roupas. Necessidades: aluguel, mercado, contas e transporte. Desejos: streamings extras, roupas por impulso, a maior parte do delivery e as saídas. Depende: a academia (ela frequenta, pode ser prioridade). Um plano possível: tirar o cartão salvo dos aplicativos (atrito), reduzir o delivery de 13 para 6 pedidos com jantares simples planejados (ganha R$ 210) e cancelar 2 dos 3 streamings (ganha R$ 64), com transferência automática de R$ 200 para a viagem no dia do salário. Nova sobra: R$ 144 + R$ 210 + R$ 64 = R$ 418. Ela guarda R$ 200 e ainda fica com R$ 218. Para o lazer, vale manter um valor fixo para saídas, usado sem culpa porque está no plano. Outros planos também valem, desde que respeitem as necessidades e mostrem os números.",
          },
          recap: [
            "Necessidade e desejo dependem do contexto: separe a parte necessária da parte desejada.",
            "As 5 perguntas e a regra da espera transformam impulso em escolha.",
            "Saber as suas prioridades ajuda a dizer não sem culpa e a usar o lazer a seu favor.",
          ],
        },
      ],
      quiz: {
        sticker: { id: "mestre-do-modulo-1", min: 8 },
        questions: [
          // Padrão das perguntas: 4 opções plausíveis (as erradas são enganos comuns), sem pistas de tamanho ou de
          // "sempre/nunca", e a maioria em situações e contas que só quem fez as aulas resolve com segurança.
          { question: "Paulo teve um aumento de R$ 600. Três meses depois, continua sem sobrar nada no fim do mês. Pela Aula 1, qual é a explicação mais provável?", options: ["O aumento foi pequeno demais para mudar alguma coisa.", "Sem organização, os gastos cresceram junto com a renda.", "Organizar o dinheiro só faz diferença a partir de certa renda.", "Ele precisaria cortar todo o lazer para o aumento aparecer."], answer: 1, why: "É o alerta do \"Ganhar mais resolve?\": sem organização, o aumento vira assinatura nova, celular mais caro e mais pedidos. Organizar vale para qualquer renda, e cortar todo o lazer é o tipo de plano que costuma ser abandonado." },
          { question: "Duda chega exausta toda sexta e pede pizza para descansar. Seguindo a estratégia \"troque a ação, mantenha a recompensa\", o que ela deveria fazer?", options: ["Proibir-se de pedir comida às sextas, só na força de vontade.", "Continuar pedindo, mas escolher sempre a pizza mais barata.", "Pedir só nas sextas em que sobrar dinheiro no fim do mês.", "Deixar um jantar simples pronto e descansar vendo uma série."], answer: 3, why: "A recompensa dela é descansar. A estratégia troca a ação (pedir comida) por outra que dá o mesmo descanso. Proibir depende só de força de vontade, que costuma falhar; as outras duas mantêm a mesma ação." },
          { question: "Bia gasta R$ 12 por dia em lanche, 5 dias por semana. Usando a conta da aula, quanto isso pesa por mês, aproximadamente?", options: ["R$ 240", "R$ 360", "R$ 260", "R$ 300"], answer: 2, why: "R$ 12 × 5 = R$ 60 por semana; R$ 60 × 52 ÷ 12 = R$ 260 por mês. Multiplicar por 4 dá R$ 240 e esquece parte do mês; R$ 360 conta 30 dias, inclusive fins de semana; R$ 300 conta 5 semanas." },
          { question: "Um aplicativo mostra: \"De R$ 300 por R$ 199. Só hoje!\". Quais dois recursos o próprio anúncio usa para apressar a compra?", options: ["Ancoragem e urgência.", "Efeito manada e gasto formiga.", "Viés do presente e pagamento sem dor.", "Ancoragem e efeito manada."], answer: 0, why: "\"De R$ 300\" é a âncora que faz R$ 199 parecer barato, e \"só hoje\" é o gatilho de urgência. O anúncio não diz que todo mundo está comprando (efeito manada) nem facilita o pagamento." },
          { question: "Desde que salvou o cartão no aplicativo de delivery, Lucas paga com um toque e pede bem mais do que antes. Que armadilha explica isso, e o que a aula sugere?", options: ["Gasto formiga: anotar os pedidos no fim do mês.", "Pagamento sem dor: tirar o cartão salvo do aplicativo.", "Viés do presente: aumentar o limite para não se apertar.", "Efeito manada: deixar de seguir perfis de comida."], answer: 1, why: "Quanto mais fácil pagar, menos se sente o dinheiro saindo: é o pagamento sem dor. Tirar o cartão salvo cria atrito, uma pausa entre a vontade e a compra. Anotar ajuda, mas não ataca a causa; aumentar o limite piora." },
          { question: "O notebook de Júlio, designer autônomo, parou de funcionar. Ele está entre um modelo de R$ 3.200, que roda os programas de trabalho, e um de R$ 5.000, mais fino e com tela maior. Como a aula classificaria essa compra?", options: ["Tudo é desejo, porque notebook não é item básico como comida.", "Tudo é necessidade, porque ele trabalha com o notebook.", "R$ 3.200 são necessidade, e os R$ 1.800 a mais são desejo.", "Depende só de ele conseguir parcelar sem juros."], answer: 2, why: "É o raciocínio do celular do Bruno: o trabalho torna o notebook uma necessidade, e o modelo de R$ 3.200 já atende. Os R$ 1.800 a mais pagam conforto e aparência, ou seja, desejo. Parcelar não muda a classificação." },
          { question: "Ana quer uma caixa de som de R$ 900. Ela já tem uma que funciona e não comparou preços, mas o valor cabe no mês. Pelas 5 perguntas e pela regra da espera, o melhor é:", options: ["Comprar agora, porque cabe no mês sem afetar o essencial.", "Esperar 24 horas e comprar amanhã se a vontade continuar.", "Anotar na lista de desejos e esperar 30 dias.", "Comprar se achar um cupom, já que não pesquisou o preço."], answer: 2, why: "\"Já tenho?\" e \"Comparei?\" deram não: com dois ou mais nãos, vale esperar. Como é uma compra maior, a regra é a lista de desejos e 30 dias. As 24 horas são para compras pequenas, e caber no mês sozinho não basta." },
          { question: "Na simulação, Lia tem R$ 650 livres e quer guardar R$ 250. Se ela for a um show de R$ 180 e pedir comida 4 vezes, a R$ 45 cada, como termina o mês?", options: ["Abaixo da meta: faltam R$ 40.", "Acima da meta: sobram R$ 290.", "Acima da meta: sobram R$ 470.", "Abaixo da meta: sobram só R$ 110."], answer: 1, why: "4 × R$ 45 = R$ 180. R$ 650 − R$ 180 − R$ 180 = R$ 290, ou seja, R$ 40 acima da meta de R$ 250. R$ 470 esquece os pedidos de comida. E o lazer cabe: foi uma escolha dentro do plano." },
          { question: "Qual destas atitudes usa a estratégia \"facilite o hábito bom\"?", options: ["Agendar a transferência para o dia do salário.", "Desativar as notificações de promoções no celular.", "Anotar todos os gastos durante sete dias seguidos.", "Trocar o delivery por um banho demorado depois do trabalho."], answer: 0, why: "Deixar a transferência automática faz o hábito bom acontecer sem esforço. Desativar notificações é criar atrito, anotar é registrar e acompanhar, e o banho é trocar a ação mantendo a recompensa: são as outras estratégias da aula." },
          { question: "No caso da Marina, sobram R$ 144 por mês. Se ela reduzir o delivery de 13 para 6 pedidos (cerca de R$ 30 cada) e cancelar 2 dos 3 streamings (R$ 32 cada), quanto passa a sobrar?", options: ["R$ 354", "R$ 208", "R$ 534", "R$ 418"], answer: 3, why: "7 pedidos a menos × R$ 30 = R$ 210, e 2 streamings × R$ 32 = R$ 64. R$ 144 + R$ 210 + R$ 64 = R$ 418: dá para guardar os R$ 200 da viagem e ainda sobra. R$ 354 conta só o delivery; R$ 534 corta todos os pedidos." },
        ],
      },
    },
    {
      title: "Organização financeira",
      lessons: [
        {
          id: "receitas-e-despesas",
          title: "Receitas e despesas",
          summary: "Saber quanto entra de verdade, separar os tipos de gasto e registrar sem complicação.",
          goals: ["Calcular a renda que realmente cai na conta", "Separar despesas fixas, variáveis e esporádicas", "Escolher um jeito simples de registrar o mês"],
          sections: [
            {
              title: "Quanto entra de verdade",
              body: [
                "No Módulo 1 você descobriu para onde vai o dinheiro. Agora é hora de colocar os números no papel, começando pelo que entra: a receita, ou renda.",
                "O valor que importa é a renda líquida: o que cai na conta depois dos descontos. Quem tem carteira assinada vê no holerite o salário bruto e, abaixo, descontos como INSS e vale-transporte. Planejar com o bruto é contar com um dinheiro que nunca chega.",
                { box: "exemplo", title: "Bruto ou líquido?", text: "Rita tem salário de R$ 2.500, mas R$ 220 são descontados em folha. A renda dela para o orçamento é R$ 2.280, não R$ 2.500." },
                "Some também o que entra além do salário: bicos, vendas, pensão, bolsa de estudos. Tudo o que entra com frequência faz parte da receita.",
                { box: "atencao", title: "Renda que muda todo mês", text: "Para quem trabalha por conta, com comissão ou por aplicativo, use como base o menor valor dos últimos três meses, e não a média nem o melhor mês. O que vier a mais vai direto para uma meta ou para a reserva. Assim o mês fraco não pega você de surpresa." },
              ],
            },
            {
              title: "Fixas, variáveis e esporádicas",
              body: [
                "Do lado das despesas, ajuda separar os gastos em três tipos:",
                {
                  cards: [
                    { title: "Fixas", text: "Mesmo valor (ou quase) todo mês: aluguel, internet, mensalidade, plano do celular.", tag: "Fáceis de prever" },
                    { title: "Variáveis", text: "Mudam conforme o uso: mercado, luz, água, transporte por aplicativo, lazer.", tag: "Pedem acompanhamento" },
                    { title: "Esporádicas", text: "Aparecem poucas vezes por ano: IPVA, IPTU, material escolar, presentes de fim de ano, manutenção.", tag: "As que mais surpreendem" },
                  ],
                },
                "As esporádicas são as que mais bagunçam o orçamento, porque a gente esquece delas até a hora de pagar. A saída é dividir o valor anual por 12 e guardar um pouco todo mês.",
                { box: "exemplo", title: "O IPVA de março", text: "Bruna paga R$ 960 de IPVA todo mês de março e sempre se aperta. Guardando R$ 80 por mês (960 ÷ 12), em março o dinheiro já está separado." },
                {
                  sort: {
                    title: "Fixa ou variável?",
                    labels: ["Fixa", "Variável"],
                    items: [
                      { text: "Aluguel de R$ 750.", answer: 0, why: "O valor se repete todo mês." },
                      { text: "Conta de luz.", answer: 1, why: "Depende do consumo: no verão, com ventilador ligado, costuma subir." },
                      { text: "Plano do celular de R$ 50.", answer: 0, why: "Valor combinado no contrato, igual todo mês." },
                      { text: "Compras do mercado.", answer: 1, why: "Mudam conforme o que se compra e os preços do mês." },
                      { text: "Mensalidade da academia.", answer: 0, why: "Valor fixo, mesmo nos meses em que a pessoa vai pouco." },
                      { text: "Corridas por aplicativo.", answer: 1, why: "Dependem de quantas vezes e para onde se vai." },
                    ],
                  },
                },
              ],
            },
            {
              title: "Como registrar sem desistir",
              body: [
                "O melhor registro é o que você consegue manter. Pode ser um caderno, uma planilha ou um aplicativo confiável: o formato importa menos do que a constância.",
                {
                  list: [
                    "Use poucas categorias: moradia, contas, mercado, transporte, saúde, lazer, compras, metas e dívidas.",
                    "Reserve cinco minutos no mesmo horário todo dia, como antes de dormir.",
                    "Anote também o Pix, o débito e o dinheiro em espécie, que somem mais fácil da memória.",
                    "No cartão de crédito, anote a compra no dia em que fez, e não só quando a fatura chegar.",
                  ],
                },
                { box: "pratica", title: "Use o seu desafio dos 7 dias", text: "Se você fez o desafio do Módulo 1, já tem uma semana de gastos anotados. Multiplique por 52 ÷ 12 para ter uma estimativa do mês: esse é o ponto de partida do seu orçamento na próxima aula." },
                {
                  check: {
                    question: "Téo é motoboy e ganhou R$ 2.100, R$ 2.600 e R$ 1.800 nos últimos três meses. Com qual valor ele deveria montar o orçamento?",
                    options: ["R$ 2.600, o melhor mês, para não se limitar.", "R$ 2.167, a média dos três meses.", "R$ 1.800, o menor dos três meses."],
                    answer: 2,
                    why: "Com renda que varia, a base segura é o menor valor recente. A média parece justa, mas nos meses abaixo dela falta dinheiro. O que vier a mais vai para uma meta ou para a reserva.",
                  },
                },
              ],
            },
          ],
          activity: {
            title: "Meu mês em números",
            steps: ["Use os seus valores reais ou, se preferir, valores de exemplo. Os números ficam só neste aparelho."],
            fields: [
              "Minha renda líquida (e de onde ela vem):",
              "Minhas despesas fixas e o total delas:",
              "Minhas despesas variáveis mais comuns e quanto gasto com elas, em média:",
              "Uma despesa esporádica do ano e quanto eu deveria separar por mês para ela (valor ÷ 12):",
            ],
            answer: "Confira três pontos: a renda é a líquida, e não o salário bruto; se a renda varia, a base é o menor mês recente; e cada esporádica virou um valor mensal. Com isso você já tem quase tudo para montar o orçamento na próxima aula.",
          },
          recap: [
            "Planeje com a renda líquida; se ela varia, use o menor mês recente.",
            "Despesas fixas, variáveis e esporádicas: as esporádicas viram um valor por mês (÷ 12).",
            "O registro bom é o simples que você mantém, com Pix e cartão anotados no dia.",
          ],
        },
        {
          id: "montando-o-orcamento",
          title: "Montando o orçamento",
          summary: "Juntar receitas e despesas num plano, dividir a renda e saber o que fazer quando a conta não fecha.",
          goals: ["Montar um orçamento em quatro passos", "Usar a divisão 50-30-20 como ponto de partida", "Ajustar o plano quando as despesas passam da renda"],
          sections: [
            {
              title: "O orçamento em quatro passos",
              body: [
                "Orçamento é o plano de como usar a renda do mês. Ele não é uma lista de proibições: é a decisão, tomada com calma e antes do mês começar, de para onde cada real vai.",
                {
                  ordered: true,
                  list: [
                    "Anote a renda líquida do mês.",
                    "Liste as despesas em três grupos: necessidades, desejos, e metas e dívidas.",
                    "Some tudo e faça a conta: receitas − despesas = saldo.",
                    "Se o saldo for negativo, ajuste antes do mês começar. Se for positivo, dê um destino para ele.",
                  ],
                },
                { box: "chave", title: "Ponto-chave", text: "Dinheiro sem destino costuma ir embora no automático. Até a sobra precisa de um plano: uma meta, a reserva ou um lazer escolhido." },
              ],
            },
            {
              title: "Uma divisão para começar: 50-30-20",
              body: [
                "Uma referência muito usada divide a renda líquida assim:",
                {
                  table: {
                    caption: "A divisão 50-30-20 numa renda de R$ 2.000",
                    head: ["Grupo", "Parte da renda", "Valor", "Exemplos"],
                    rows: [
                      ["Necessidades", "50%", "R$ 1.000", "Moradia, contas, mercado, transporte, saúde"],
                      ["Desejos", "30%", "R$ 600", "Lazer, delivery, assinaturas, roupas além do básico"],
                      ["Metas e dívidas", "20%", "R$ 400", "Reserva, objetivos, parcelas e dívidas"],
                    ],
                  },
                },
                "É um ponto de partida, não uma regra. Em muitas famílias brasileiras, só as necessidades já passam de 50% da renda, principalmente por causa do aluguel. Tudo bem: você ajusta os percentuais à sua realidade, por exemplo 65-20-15, e tenta melhorar aos poucos.",
                { box: "atencao", title: "O que não pode faltar", text: "Seja qual for a divisão, o grupo de metas não deve ficar zerado. Mesmo um valor pequeno todo mês cria o hábito e começa a reserva." },
              ],
            },
            {
              title: "O orçamento do Diego",
              body: [
                "Diego, 26 anos, é auxiliar de logística e recebe R$ 2.200 líquidos. Ele montou o orçamento pela primeira vez e levou um susto:",
                {
                  table: {
                    caption: "O mês do Diego",
                    head: ["Grupo", "Despesas", "Total"],
                    rows: [
                      ["Necessidades", "Aluguel R$ 750, contas R$ 210, mercado R$ 480, transporte R$ 180, celular R$ 50", "R$ 1.670"],
                      ["Desejos", "Saídas R$ 200, delivery R$ 160, assinaturas R$ 75, academia R$ 125", "R$ 560"],
                      ["Metas e dívidas", "Parcela do celular novo R$ 150 (faltam 5 meses)", "R$ 150"],
                      ["Saldo", "R$ 2.200 − R$ 2.380", "− R$ 180"],
                    ],
                  },
                },
                "Só as necessidades somam 76% da renda. E o mês fecha no vermelho: todo mês faltavam R$ 180, que iam para o cheque especial. Veja como ele ajustou, sem cortar tudo:",
                {
                  ordered: true,
                  list: [
                    "Cancelou duas das três assinaturas: − R$ 50.",
                    "Reduziu o delivery para um pedido por semana: − R$ 100.",
                    "Trocou o plano de internet por um mais barato com a mesma velocidade: − R$ 30.",
                    "Diminuiu um pouco as saídas: − R$ 30.",
                  ],
                },
                "Total: R$ 210 a menos. O saldo passou de − R$ 180 para + R$ 30, e Diego manteve academia, saídas e um delivery por semana. Quando a parcela do celular acabar, daqui a 5 meses, os R$ 150 vão direto para a reserva, em vez de virarem uma parcela nova.",
              ],
            },
            {
              title: "Quando a conta não fecha",
              body: [
                "Se as despesas passam da renda, siga esta ordem:",
                {
                  ordered: true,
                  list: [
                    "Proteja as necessidades: moradia, comida, contas básicas, saúde e transporte vêm primeiro.",
                    "Reveja os desejos e as assinaturas, como fez o Diego.",
                    "Renegocie as despesas fixas: planos de internet e celular, tarifas do banco, seguros.",
                    "Procure aumentar a renda de forma pontual, com um bico ou a venda de algo parado.",
                  ],
                },
                { box: "atencao", title: "Crédito não fecha orçamento", text: "Cobrir a diferença com cheque especial ou cartão só empurra o problema para o mês seguinte, agora com juros. Você vai ver por que no Módulo 3." },
                "Agora é a sua vez. Monte o seu orçamento abaixo, com valores reais ou de exemplo:",
                { tool: "orcamento" },
              ],
            },
          ],
          activity: {
            title: "Meu plano de ajuste",
            steps: ["Olhe para o orçamento que você montou na ferramenta acima.", "Se sobrou dinheiro, decida o destino. Se faltou, escolha os ajustes seguindo a ordem da aula."],
            fields: [
              "Meu saldo do mês (receitas − despesas):",
              "Dois ajustes que eu posso fazer, e quanto cada um libera:",
              "Para onde vai a sobra (ou o dinheiro que os ajustes liberarem):",
            ],
            answer: "Um bom plano começa pelos desejos e assinaturas, renegocia o que é fixo e não usa crédito para fechar a conta. A sobra sempre ganha um destino, nem que seja pequeno: meta, reserva ou um lazer escolhido.",
          },
          recap: [
            "Orçamento: renda líquida − despesas = saldo, decidido antes do mês começar.",
            "50-30-20 é um ponto de partida; ajuste à sua realidade, sem zerar as metas.",
            "Se não fecha: proteja o essencial, corte desejos, renegocie fixos e não cubra com crédito.",
          ],
        },
        {
          id: "metas-e-acompanhamento",
          title: "Metas e acompanhamento",
          summary: "Transformar prioridades em metas com valor e prazo, guardar primeiro e acompanhar sem desistir.",
          goals: ["Escrever uma meta com o quê, quanto e até quando", "Calcular quanto guardar por mês e ajustar o prazo", "Acompanhar o planejado e o realizado"],
          sections: [
            {
              title: "Meta boa tem valor e prazo",
              body: [
                "No Módulo 1 você escolheu as suas prioridades. Agora elas viram metas. \"Quero viajar\" é um sonho; uma meta responde três perguntas:",
                {
                  cards: [
                    { title: "O quê?", text: "O objetivo, bem específico: um curso, uma viagem, a reserva de emergência." },
                    { title: "Quanto?", text: "O valor aproximado, pesquisado. Chute costuma sair baixo." },
                    { title: "Até quando?", text: "Um prazo possível, com mês e ano." },
                  ],
                },
                { box: "exemplo", title: "De sonho a meta", text: "\"Quero fazer um curso de inglês\" vira \"Juntar R$ 1.200 até dezembro para o curso de inglês\". Agora dá para calcular, acompanhar e saber quando chegou." },
                "Separe também as metas pelo prazo: curto (até 1 ano), médio (1 a 5 anos) e longo (mais de 5 anos). As de curto prazo mantêm a motivação; as de longo prazo mudam a vida.",
              ],
            },
            {
              title: "Quanto guardar por mês",
              body: [
                "A conta é simples: valor da meta ÷ número de meses = quanto guardar por mês.",
                { box: "exemplo", title: "A meta do Igor", text: "Igor quer R$ 1.800 em 6 meses: seriam R$ 300 por mês. Mas o orçamento dele só tem espaço para R$ 200. Em vez de desistir, ele aumentou o prazo: 1.800 ÷ 200 = 9 meses." },
                "Se o valor não cabe no orçamento, você tem três caminhos: aumentar o prazo, diminuir o valor da meta ou abrir espaço no orçamento. O que não funciona é manter uma meta que não cabe e \"guardar o que sobrar\": quase nunca sobra.",
              ],
            },
            {
              title: "Pague-se primeiro",
              body: [
                "Pagar-se primeiro é separar a parte da meta assim que o dinheiro entra, antes de qualquer outro gasto, como se fosse uma conta a pagar. É o \"facilite o hábito bom\" do Módulo 1 aplicado às metas.",
                {
                  list: [
                    "Programe uma transferência automática para o dia do salário.",
                    "Guarde a meta em um lugar separado da conta do dia a dia, como uma conta ou \"caixinha\" só para isso.",
                    "Dê um nome para esse dinheiro: \"Curso de inglês\" é mais difícil de gastar do que \"sobra\".",
                  ],
                },
                {
                  check: {
                    question: "O que significa \"pagar-se primeiro\"?",
                    options: ["Pagar primeiro as contas mais caras do mês.", "Separar o valor da meta assim que o dinheiro entra, antes dos outros gastos.", "Guardar no fim do mês tudo o que sobrar."],
                    answer: 1,
                    why: "A meta é tratada como uma conta: sai primeiro, no dia em que o dinheiro entra. Guardar o que sobrar no fim do mês é justamente o que costuma não dar certo.",
                  },
                },
              ],
            },
            {
              title: "Acompanhar e ajustar",
              body: [
                "Uma vez por mês, compare o planejado com o realizado. A diferença não é fracasso: é informação.",
                {
                  table: {
                    caption: "O acompanhamento de março da Sol",
                    head: ["Categoria", "Planejado", "Realizado", "O que ela decidiu"],
                    rows: [
                      ["Mercado", "R$ 300", "R$ 390", "Planejou baixo demais: vai planejar R$ 360 e fazer lista antes de ir"],
                      ["Lazer", "R$ 150", "R$ 110", "Sobraram R$ 40, que foram para a meta"],
                      ["Meta da viagem", "R$ 200", "R$ 200", "Guardou no dia do salário, como combinado"],
                    ],
                  },
                },
                "Imprevistos vão acontecer. Quando a meta atrasar, ajuste o prazo ou o valor, mas não abandone o plano. Um plano realista e ajustado vale mais do que um plano perfeito abandonado em março.",
              ],
            },
          ],
          activity: {
            title: "Minha primeira meta",
            steps: ["Escolha uma das prioridades que você marcou no Módulo 1 e transforme em meta."],
            fields: [
              "O quê:",
              "Quanto (valor pesquisado):",
              "Até quando (mês e ano):",
              "Quanto guardar por mês (valor ÷ meses) e se isso cabe no meu orçamento:",
              "Como vou me pagar primeiro (dia e lugar onde vou guardar):",
            ],
            answer: "Confira se a meta tem as três respostas (o quê, quanto e até quando) e se o valor mensal cabe no orçamento. Se não couber, aumente o prazo, diminua o valor ou abra espaço no orçamento. E deixe a transferência marcada para o dia em que o dinheiro entra.",
          },
          recap: [
            "Meta tem o quê, quanto e até quando; valor ÷ meses diz quanto guardar.",
            "Se não cabe, ajuste o prazo, o valor ou o orçamento. \"Guardar o que sobrar\" não funciona.",
            "Pague-se primeiro e compare planejado com realizado todo mês.",
          ],
        },
      ],
      quiz: {
        sticker: { id: "mestre-do-modulo-2", min: 8 },
        questions: [
          { question: "Rita tem salário de R$ 2.500, mas R$ 220 são descontados em folha. As despesas dela somam R$ 1.850. Quanto sobra de verdade no mês?", options: ["R$ 650", "R$ 870", "R$ 430", "R$ 210"], answer: 2, why: "O orçamento usa a renda líquida: R$ 2.500 − R$ 220 = R$ 2.280. R$ 2.280 − R$ 1.850 = R$ 430. R$ 650 é a conta com o salário bruto, que nunca chega inteiro na conta." },
          { question: "Bruna paga R$ 960 de IPVA todo mês de março e sempre se aperta nesse mês. O que a aula sugere?", options: ["Parcelar o IPVA no cartão todo ano.", "Separar R$ 80 por mês ao longo do ano para esse gasto.", "Tratar o IPVA como emergência e usar a reserva.", "Deixar para pagar com o 13º salário, que chega em março."], answer: 1, why: "IPVA é uma despesa esporádica: 960 ÷ 12 = R$ 80 por mês. Ele não é emergência, porque se sabe a data. E o 13º salário é pago no fim do ano, não em março." },
          { question: "Téo, motoboy, ganhou R$ 2.100, R$ 2.600 e R$ 1.800 nos últimos três meses. Que valor a aula recomenda como base do orçamento?", options: ["R$ 2.600, o melhor mês.", "R$ 2.167, a média dos três meses.", "R$ 2.100, o mês mais recente.", "R$ 1.800, o menor dos três meses."], answer: 3, why: "Com renda variável, a base segura é o menor valor recente. Pela média, faltaria dinheiro em todo mês abaixo dela. O que entrar a mais vai para uma meta ou para a reserva." },
          { question: "Pela divisão 50-30-20, quanto de uma renda líquida de R$ 1.800 vai para metas e dívidas?", options: ["R$ 360", "R$ 540", "R$ 900", "R$ 180"], answer: 0, why: "Metas e dívidas são os 20%: R$ 1.800 × 0,20 = R$ 360. R$ 900 são as necessidades (50%), R$ 540 os desejos (30%) e R$ 180 seriam só 10%." },
          { question: "No orçamento do Diego, só as necessidades somam 76% da renda. O que a aula diz sobre isso?", options: ["O orçamento está errado e ele precisa se mudar logo.", "O 50-30-20 é ponto de partida; ele ajusta à realidade dele.", "Ele precisa zerar o lazer até as necessidades caírem para 50%.", "Ele pode usar o cartão para cobrir a parte acima dos 50%."], answer: 1, why: "Em muitas famílias as necessidades passam de 50%, principalmente pelo aluguel. A divisão se adapta, sem zerar as metas. Cortar todo o lazer não se sustenta, e crédito não fecha orçamento." },
          { question: "O orçamento de Kátia não fecha: faltam R$ 120 todo mês. Pela ordem da aula, qual deve ser o primeiro ajuste?", options: ["Cortar parte do mercado, que é o maior gasto variável.", "Usar o cheque especial até a renda melhorar.", "Rever desejos e assinaturas e renegociar contas fixas.", "Atrasar o aluguel um mês para equilibrar."], answer: 2, why: "Primeiro se protegem as necessidades (mercado e aluguel entram aqui). Depois vêm desejos e assinaturas e a renegociação de fixos. O cheque especial só adia o problema, com juros." },
          { question: "A parcela de R$ 150 do celular do Diego termina daqui a 5 meses. Segundo a aula, o que fazer com esse dinheiro depois?", options: ["Mandar os R$ 150 direto para a reserva.", "Usar a folga para parcelar algo novo.", "Aumentar o lazer na mesma proporção.", "Deixar o valor na conta, sem destino definido."], answer: 0, why: "Dinheiro sem destino vai embora no automático, e uma parcela nova ocupa o espaço que acabou de abrir. Diego decidiu antes: os R$ 150 viram reserva." },
          { question: "Qual destas metas tem tudo o que a aula pede: o quê, quanto e até quando?", options: ["Juntar R$ 1.200 para pagar o curso de inglês completo.", "Fazer o curso de inglês até dezembro, sem falta.", "Juntar R$ 1.200 até dezembro para o curso de inglês.", "Guardar R$ 100 por mês, sem data para parar."], answer: 2, why: "Só a C tem objetivo (o curso), valor (R$ 1.200) e prazo (dezembro). A A não tem prazo, a B não tem valor, e a D não tem objetivo nem prazo." },
          { question: "Igor quer R$ 1.800 em 6 meses, mas só cabem R$ 200 por mês no orçamento. Qual ajuste a aula sugere?", options: ["Manter os 6 meses e guardar o que der.", "Pegar um empréstimo para completar o que faltar.", "Desistir da meta até ganhar mais.", "Aumentar o prazo para 9 meses."], answer: 3, why: "1.800 ÷ 200 = 9 meses. Aumentar o prazo mantém a meta possível. \"Guardar o que der\" quase nunca dá, e empréstimo para meta é pagar juros para guardar dinheiro." },
          { question: "O que significa \"pagar-se primeiro\"?", options: ["Pagar primeiro as contas mais caras do mês.", "Separar a meta assim que o dinheiro entra.", "Quitar todas as dívidas antes de qualquer outro gasto.", "Guardar no fim do mês tudo o que sobrar."], answer: 1, why: "A meta é tratada como uma conta que sai no dia em que o dinheiro entra, de preferência com transferência automática. Guardar o que sobrar é o oposto disso." },
        ],
      },
    },
    {
      title: "Crédito e dívidas",
      lessons: [
        {
          id: "credito-e-juros",
          title: "Crédito e juros",
          summary: "O que é crédito, como os juros crescem e como comparar o custo real de um empréstimo.",
          goals: ["Entender que crédito é dinheiro adiantado, não renda extra", "Ver como os juros compostos fazem uma dívida crescer", "Comparar empréstimos pelo CET"],
          sections: [
            {
              title: "Crédito não é dinheiro a mais",
              body: [
                "Crédito é usar agora um dinheiro que você vai pagar depois, conforme um contrato. Cartão de crédito, cheque especial, empréstimo, financiamento e crediário de loja são formas de crédito.",
                "Ele pode ajudar: comprar uma geladeira que quebrou, financiar um estudo, atravessar um aperto. O problema é tratar o crédito como se fosse renda. Todo real usado vai sair da sua renda dos próximos meses, quase sempre com um custo a mais: os juros.",
                { box: "chave", title: "Ponto-chave", text: "O limite do cartão ou do cheque especial não é seu dinheiro: é quanto o banco aceita adiantar. Quem usa o limite como se fosse salário está gastando a renda do futuro." },
              ],
            },
            {
              title: "Juros: o preço do dinheiro no tempo",
              body: [
                "Juros são o valor cobrado por usar um dinheiro que não é seu, ou o valor que você recebe quando empresta o seu (por exemplo, ao investir). Em quase toda dívida, os juros são compostos: cada mês, eles são calculados sobre o valor que já cresceu. São juros sobre juros.",
                {
                  table: {
                    caption: "Uma dívida de R$ 1.000 a 5% ao mês, sem nenhum pagamento",
                    head: ["Depois de", "Juros simples (só sobre os R$ 1.000)", "Juros compostos (juros sobre juros)"],
                    rows: [
                      ["1 mês", "R$ 1.050", "R$ 1.050"],
                      ["6 meses", "R$ 1.300", "R$ 1.340"],
                      ["12 meses", "R$ 1.600", "R$ 1.796"],
                      ["24 meses", "R$ 2.200", "R$ 3.225"],
                    ],
                  },
                },
                "No começo a diferença é pequena. Com o tempo, ela dispara. É por isso que uma dívida esquecida cresce tão rápido, e é a mesma força que, a seu favor, faz um investimento render (Módulo 5).",
              ],
            },
            {
              title: "Os tipos de crédito e o custo de cada um",
              body: [
                {
                  table: {
                    caption: "Do mais barato ao mais caro (em geral)",
                    head: ["Crédito", "Como funciona", "Custo"],
                    rows: [
                      ["Consignado", "A parcela é descontada direto do salário ou do benefício", "Entre os juros mais baixos, porque o risco para o banco é menor"],
                      ["Financiamento", "Para um bem específico, como carro ou casa, que fica como garantia", "Baixo a médio, mas por muitos anos"],
                      ["Empréstimo pessoal", "Valor na conta, pago em parcelas fixas", "Médio a alto"],
                      ["Cheque especial", "Limite que entra quando a conta fica negativa", "Alto: por regra, no máximo 8% ao mês"],
                      ["Rotativo do cartão", "O que fica sem pagar na fatura", "Entre os mais altos do mercado, em geral acima de 10% ao mês"],
                    ],
                  },
                },
                { box: "atencao", title: "Compare pelo CET", text: "A taxa de juros não conta tudo. O CET (Custo Efetivo Total) soma juros, tarifas, seguros e impostos, e o banco é obrigado a informar. Dois empréstimos com a mesma taxa podem ter CETs bem diferentes. Compare também o valor total que você vai pagar, e não só se a parcela cabe." },
                {
                  check: {
                    question: "Dois empréstimos têm a mesma taxa de juros, mas um deles tem seguro e tarifa embutidos. O que mostra o custo real para comparar?",
                    options: ["O valor da parcela de cada um.", "O CET de cada um.", "O prazo em meses de cada um."],
                    answer: 1,
                    why: "O CET junta juros, tarifas, seguros e impostos. A parcela pode ser menor só porque o prazo é maior, e o prazo sozinho não diz quanto você paga no total.",
                  },
                },
              ],
            },
          ],
          activity: {
            title: "Meus créditos",
            steps: ["Liste os créditos que você usa ou já usou. Se não usa nenhum, pense em alguém da família ou num exemplo."],
            fields: [
              "Quais tipos de crédito eu uso (cartão, cheque especial, crediário, empréstimo...):",
              "Qual deles tem os juros mais altos:",
              "Uma situação em que o crédito me ajudou e uma em que ele me atrapalhou:",
            ],
            answer: "Repare se o crédito mais usado é também o mais caro, como o rotativo do cartão ou o cheque especial. É o mais comum, e é por onde vale começar a mudar.",
          },
          recap: [
            "Crédito é renda do futuro usada agora, quase sempre com juros.",
            "Juros compostos são juros sobre juros: a dívida cresce cada vez mais rápido.",
            "Compare empréstimos pelo CET e pelo valor total pago, não só pela parcela.",
          ],
        },
        {
          id: "cartao-de-credito",
          title: "Cartão de crédito sem susto",
          summary: "Fatura, limite, pagamento mínimo e parcelas que se acumulam: como usar o cartão a seu favor.",
          goals: ["Entender fechamento, vencimento e o melhor dia de compra", "Saber o que acontece quando se paga só o mínimo", "Enxergar o peso das parcelas somadas nos próximos meses"],
          sections: [
            {
              title: "Como a fatura funciona",
              body: [
                "Tudo o que você compra no cartão durante o mês entra numa fatura. Ela tem duas datas:",
                {
                  cards: [
                    { title: "Fechamento", text: "Até esse dia, as compras entram na fatura atual. Depois dele, vão para a próxima." },
                    { title: "Vencimento", text: "O dia de pagar. Costuma ser cerca de 7 a 10 dias depois do fechamento." },
                  ],
                },
                { box: "exemplo", title: "O melhor dia de compra", text: "A fatura de Leo fecha no dia 5 e vence no dia 15. Uma compra no dia 6 só entra na próxima fatura, que vence no dia 15 do mês seguinte: quase 40 dias para pagar. Uma compra no dia 4 vence já no dia 15, em 11 dias." },
                "Use o cartão como meio de pagamento, não como renda extra: anote cada compra no dia, como no Módulo 2, para a fatura não ser uma surpresa.",
              ],
            },
            {
              title: "Pagar só o mínimo",
              body: [
                "A fatura mostra um pagamento mínimo, bem menor que o total. Pagar só o mínimo não é ficar em dia: o que sobra entra no crédito rotativo, um dos juros mais caros do mercado.",
                { box: "exemplo", title: "A fatura da Ana", text: "A fatura de Ana veio de R$ 1.000 e ela pagou o mínimo, R$ 150. Os R$ 850 restantes entram no rotativo e, com juros de cerca de 13% ao mês, viram mais de R$ 960 na fatura seguinte, antes de qualquer compra nova." },
                "Pela regra atual, o rotativo só pode ser usado até a fatura seguinte. Depois disso, o banco precisa oferecer o parcelamento do saldo, também com juros. Desde 2024, os juros e encargos do rotativo e do parcelamento da fatura não podem passar do valor da dívida original, mas mesmo assim uma dívida de R$ 850 pode chegar a R$ 1.700.",
                { box: "atencao", title: "Se não der para pagar tudo", text: "Pague o máximo que puder, não só o mínimo, e pare de usar o cartão até organizar o orçamento. Se a fatura não cabe de jeito nenhum, procure o banco para negociar antes do vencimento: o parcelamento costuma sair mais barato que o rotativo." },
              ],
            },
            {
              title: "Parcelas que se acumulam",
              body: [
                "\"Sem juros\" não quer dizer \"sem custo\". Cada parcela ocupa um pedaço da renda dos próximos meses. Sozinha, parece leve; somadas, as parcelas deixam pouco espaço para o resto.",
                { box: "exemplo", title: "As parcelas da Júlia", text: "Júlia tem três parcelas: R$ 120 (faltam 2 meses), R$ 80 (faltam 5) e R$ 150 (faltam 10). Hoje ela paga R$ 350 por mês. No terceiro mês, a primeira acaba e sobram R$ 230. Só no décimo primeiro mês a renda fica livre de parcelas." },
                "Antes de parcelar, pergunte: somando com o que já tenho, quanto fica comprometido em cada um dos próximos meses? E veja se há desconto à vista: às vezes ele é maior do que parece.",
                "Teste na linha do tempo abaixo. A renda é a do Diego, R$ 2.200, e a linha de alerta é 20% da renda, a parte de metas e dívidas da divisão 50-30-20.",
                { tool: "parcelas" },
              ],
            },
          ],
          activity: {
            title: "O raio-x do meu cartão",
            steps: ["Abra a fatura do seu cartão (ou use um exemplo) e responda."],
            fields: [
              "Dia de fechamento, dia de vencimento e o meu melhor dia de compra:",
              "Quantas parcelas eu tenho e quanto elas somam por mês:",
              "Em que mês a última parcela termina:",
              "Uma regra que vou seguir no cartão daqui para a frente:",
            ],
            answer: "Uma boa regra é simples e concreta: \"pago sempre o total da fatura\", \"não faço parcela nova enquanto tiver três ativas\" ou \"anoto cada compra no dia\". Se as parcelas somadas passam de um quinto da renda, segure as novas até algumas acabarem.",
          },
          recap: [
            "Comprar logo depois do fechamento dá mais prazo; anote cada compra no dia.",
            "Pagar só o mínimo joga o resto no rotativo, um dos juros mais altos que existem.",
            "Parcelas somadas ocupam a renda futura: olhe o mês a mês antes de parcelar.",
          ],
        },
        {
          id: "saindo-das-dividas",
          title: "Saindo das dívidas",
          summary: "Organizar as dívidas, decidir o que pagar primeiro, negociar e fugir dos golpes.",
          goals: ["Montar a lista das dívidas", "Decidir a ordem de pagamento", "Negociar com segurança e reconhecer golpes"],
          sections: [
            {
              title: "Primeiro, a lista",
              body: [
                "Dívida que não se olha cresce. O primeiro passo é colocar todas no papel, com cinco informações: com quem é, quanto falta, os juros ao mês, o valor da parcela e se está em dia ou atrasada.",
                {
                  table: {
                    caption: "As dívidas do Wesley (renda de R$ 2.000)",
                    head: ["Dívida", "Quanto falta", "Juros", "Situação"],
                    rows: [
                      ["Rotativo do cartão", "R$ 1.200", "cerca de 13% ao mês", "Pagando o mínimo"],
                      ["Cheque especial", "R$ 400", "8% ao mês", "Conta negativa há 2 meses"],
                      ["Conta de luz", "R$ 180", "Multa e juros de atraso", "Atrasada, com aviso de corte"],
                      ["Crediário da loja", "4 × R$ 90", "Sem juros", "Em dia"],
                    ],
                  },
                },
                "Só de juros, o rotativo custa a Wesley cerca de R$ 156 por mês (13% de R$ 1.200), e o cheque especial mais R$ 32. É dinheiro que não diminui a dívida.",
              ],
            },
            {
              title: "A ordem de pagamento",
              body: [
                {
                  ordered: true,
                  list: [
                    "Primeiro, as contas essenciais com risco de corte ou despejo: luz, água, aluguel. Sem elas, a vida para.",
                    "Depois, as dívidas de juros mais altos, como rotativo e cheque especial. Cada mês delas custa caro.",
                    "Por último, as de juros baixos ou sem juros que estão em dia, como o crediário do Wesley: basta mantê-las em dia.",
                  ],
                },
                "Uma estratégia possível é trocar uma dívida cara por uma mais barata: por exemplo, um empréstimo pessoal ou consignado a 4% ao mês para quitar o rotativo de 13%. Só funciona com uma condição: parar de usar o cartão até o orçamento estar organizado. Senão, em poucos meses a pessoa tem as duas dívidas.",
                {
                  check: {
                    question: "Pela ordem da aula, qual dívida Wesley deve resolver primeiro?",
                    options: ["O rotativo do cartão, que tem os juros mais altos.", "A conta de luz atrasada, pelo risco de corte.", "O crediário da loja, para limpar o nome mais rápido."],
                    answer: 1,
                    why: "Contas essenciais com risco de corte vêm primeiro: sem luz, a vida para. Em seguida vem o rotativo, que tem os juros mais altos. O crediário está em dia e sem juros, então basta continuar pagando.",
                  },
                },
              ],
            },
            {
              title: "Negociar com segurança",
              body: [
                {
                  list: [
                    "Procure o credor pelos canais oficiais: o aplicativo, o site ou a agência. Mutirões de renegociação organizados por órgãos oficiais também costumam ter boas condições.",
                    "Antes de aceitar, pergunte o CET e o valor total que vai pagar, não só a parcela.",
                    "Só aceite uma parcela que caiba no orçamento. Um acordo quebrado costuma piorar a dívida.",
                    "Peça tudo por escrito e guarde os comprovantes.",
                  ],
                },
                { box: "atencao", title: "Golpes comuns", text: "Ninguém do banco pede senha, código recebido por SMS ou que você faça um Pix para \"cancelar uma compra\". Se receber uma ligação assim, desligue e ligue você mesmo para o número que está no verso do cartão ou no aplicativo. Desconfie também de quem cobra para \"limpar o seu nome\": a negociação é feita direto com o credor." },
                "Se as dívidas já passaram do que é possível pagar sem faltar o básico, a lei do superendividamento permite uma renegociação conjunta de todas elas. O Procon e a Defensoria Pública da sua cidade orientam de graça.",
              ],
            },
          ],
          activity: {
            title: "Meu plano para as dívidas",
            steps: ["Se você não tem dívidas, use as do Wesley e monte o plano dele."],
            fields: [
              "A lista das dívidas (com quem, quanto falta, juros e situação):",
              "A ordem em que vou pagar e por quê:",
              "Uma dívida que vale negociar e o que vou perguntar antes de aceitar:",
            ],
            answer: "Para o Wesley: primeiro a conta de luz (R$ 180), pelo risco de corte. Depois o rotativo (13% ao mês), negociando o parcelamento com o banco ou trocando por um crédito mais barato, e o cheque especial (8% ao mês). O crediário segue em dia. Em qualquer negociação: perguntar o CET e o valor total, aceitar só parcela que cabe no orçamento e parar de usar o cartão até organizar as contas.",
          },
          recap: [
            "Coloque todas as dívidas no papel: com quem, quanto, juros e situação.",
            "Primeiro as essenciais com risco de corte, depois as de juros mais altos.",
            "Negocie pelos canais oficiais, olhe o CET e nunca passe senha ou código.",
          ],
        },
      ],
      quiz: {
        sticker: { id: "mestre-do-modulo-3", min: 8 },
        questions: [
          { question: "Uma dívida de R$ 1.000 cresce 5% ao mês, com juros sobre juros, durante 12 meses, sem nenhum pagamento. Quanto ela vira, aproximadamente?", options: ["R$ 1.050", "R$ 1.600", "R$ 1.796", "R$ 2.200"], answer: 2, why: "Com juros compostos, cada mês os 5% são calculados sobre o valor que já cresceu: chega a cerca de R$ 1.796. R$ 1.600 seria com juros simples, só sobre os R$ 1.000 iniciais." },
          { question: "Maria tem renda de R$ 1.800 e um limite de R$ 3.000 no cartão. O que a aula diz sobre esse limite?", options: ["É quanto ela pode gastar por mês com segurança.", "É crédito: o que ela usar vai sair da renda dos próximos meses.", "Pode servir de reserva de emergência, já que está sempre disponível.", "Usar o limite todo todo mês ajuda a aumentá-lo no futuro."], answer: 1, why: "O limite é quanto o banco aceita adiantar, não dinheiro dela. Tratar o limite como renda ou como reserva é gastar o futuro, quase sempre com juros." },
          { question: "A fatura de Ana veio de R$ 1.000 e ela pagou o mínimo, R$ 150. O que acontece com os R$ 850 restantes?", options: ["Passam para a próxima fatura sem custo, se ela pagar em dia.", "São parcelados pelo banco sem juros adicionais.", "Ficam bloqueados no limite até ela quitar, sem juros.", "Entram no rotativo, com juros entre os mais altos do mercado."], answer: 3, why: "O que fica sem pagar entra no rotativo, com juros em geral acima de 10% ao mês. Na fatura seguinte, os R$ 850 já passam de R$ 960, antes de qualquer compra nova." },
          { question: "Bruno precisa de R$ 2.000. O banco A oferece 12 × R$ 230. O banco B anuncia \"a menor parcela\": 18 × R$ 175. O que ele deve concluir?", options: ["O B sai R$ 390 mais caro; compare o CET e o total pago.", "O B é melhor, porque a parcela menor cabe mais fácil no orçamento.", "Os dois custam parecido, porque a diferença de parcela é só R$ 55.", "O A é pior, porque pagar mais por mês aperta o orçamento à toa."], answer: 0, why: "No A ele paga R$ 2.760 no total; no B, R$ 3.150. A parcela menor veio de um prazo maior. A aula manda comparar o CET e o valor total, não só se a parcela cabe." },
          { question: "Em geral, qual destas formas de crédito tem os juros mais altos?", options: ["Consignado.", "Empréstimo pessoal.", "Cheque especial.", "Rotativo do cartão."], answer: 3, why: "O rotativo costuma passar de 10% ao mês. O cheque especial também é caro, mas tem um teto de 8% ao mês. O consignado está entre os mais baratos, porque a parcela sai direto do salário." },
          { question: "A fatura de Leo fecha no dia 5 e vence no dia 15. Para ter o maior prazo para pagar uma compra, em que dia ele deveria comprar?", options: ["No dia 4.", "No dia 6.", "No dia 14.", "No dia 15."], answer: 1, why: "No dia 6 a fatura já fechou: a compra vai para a próxima, que vence no dia 15 do mês seguinte, quase 40 dias depois. No dia 4 ela ainda entra na fatura que vence em 11 dias." },
          { question: "Júlia tem três parcelas: R$ 120 (faltam 2 meses), R$ 80 (faltam 5) e R$ 150 (faltam 10). Quanto estará comprometido no terceiro mês?", options: ["R$ 230", "R$ 350", "R$ 150", "R$ 200"], answer: 0, why: "A parcela de R$ 120 termina depois do segundo mês. No terceiro, continuam R$ 80 + R$ 150 = R$ 230. R$ 350 é o total de hoje." },
          { question: "Wesley tem rotativo (13% ao mês), cheque especial (8% ao mês), conta de luz atrasada com aviso de corte e um crediário sem juros em dia. O que ele deve resolver primeiro?", options: ["O rotativo do cartão, que tem os juros mais altos.", "O cheque especial, para a conta parar de ficar negativa.", "A conta de luz, pelo risco de corte.", "O crediário, para não sujar o nome."], answer: 2, why: "Primeiro vêm as contas essenciais com risco de corte. Depois, as de juros mais altos, começando pelo rotativo. O crediário está em dia e sem juros: basta continuar pagando." },
          { question: "Wesley conseguiu um empréstimo a 4% ao mês para quitar o rotativo de 13%. O que a aula diz que é indispensável para isso dar certo?", options: ["Parar de usar o cartão até organizar o orçamento.", "Pegar um valor maior que a dívida, para sobrar um pouco.", "Escolher o prazo mais longo, para a parcela ficar mínima.", "Continuar pagando o mínimo do cartão por segurança."], answer: 0, why: "Trocar dívida cara por barata só funciona se a cara não voltar. Se ele continuar usando o cartão, em poucos meses terá o empréstimo e um rotativo novo. Prazo longo demais aumenta o total pago." },
          { question: "Alguém liga dizendo ser da central do banco, fala de uma compra suspeita e pede o código que chegou por SMS para cancelar. O que fazer?", options: ["Passar o código, já que é para cancelar a compra.", "Desligar e ligar no número do verso do cartão.", "Pedir que a pessoa confirme o seu CPF antes de passar o código.", "Passar só parte do código, por segurança."], answer: 1, why: "Banco nenhum pede senha ou código por telefone. Saber o seu CPF não prova nada: golpistas costumam ter esses dados. O caminho seguro é você ligar para o número oficial." },
        ],
      },
    },
    {
      title: "Consumo consciente",
      lessons: [
        {
          id: "comprar-com-consciencia",
          title: "Comprar com consciência",
          summary: "Olhar além da etiqueta: custo por uso, custo de ter e os cuidados antes de uma compra grande.",
          goals: ["Calcular o custo por uso de uma compra", "Somar o custo total de ter um produto", "Checar a loja e o produto antes de comprar"],
          sections: [
            {
              title: "O preço da etiqueta não é o preço da compra",
              body: [
                "No Módulo 1 você viu como as emoções e as promoções puxam a compra por impulso. Aqui o foco é outro: quando a compra é planejada, como saber se ela vale o que custa?",
                "Uma boa conta é o custo por uso: o preço dividido pelo número de vezes que você vai usar. Ela mostra que o mais barato na etiqueta nem sempre é o mais barato na vida.",
                {
                  table: {
                    caption: "Os tênis da Carla",
                    head: ["Tênis", "Preço", "Usos até gastar", "Custo por uso"],
                    rows: [
                      ["Mais barato", "R$ 120", "cerca de 80", "R$ 1,50"],
                      ["Mais resistente", "R$ 300", "cerca de 300", "R$ 1,00"],
                    ],
                  },
                },
                "O mesmo vale ao contrário: uma blusa de R$ 80 \"com 50% de desconto\" que Carla usaria só 4 vezes custa R$ 20 por uso. O desconto não muda o fato de que ela quase não seria usada.",
                {
                  check: {
                    question: "Uma furadeira de R$ 250 seria usada umas 5 vezes por ano. Um vizinho aluga uma por R$ 20 o dia. Pelo custo por uso, o que faz mais sentido no primeiro ano?",
                    options: ["Comprar, porque a furadeira fica para sempre.", "Alugar: 5 dias custam R$ 100, menos da metade do preço.", "Comprar, porque R$ 250 é um valor baixo para uma ferramenta."],
                    answer: 1,
                    why: "Comprando, o primeiro ano sai a R$ 50 por uso. Alugando, R$ 20 por uso, e o dinheiro fica livre. Comprar passa a valer a pena se o uso aumentar bastante.",
                  },
                },
              ],
            },
            {
              title: "O custo de ter",
              body: [
                "Muitos produtos continuam custando depois da compra: acessórios, manutenção, assinatura, energia, seguro. Antes de decidir, some tudo o que vem junto.",
                { box: "exemplo", title: "O videogame do Nando", text: "O console custa R$ 2.500. Nando compra uns 4 jogos por ano, a R$ 250 cada, e precisa da assinatura online de R$ 40 por mês para jogar com os amigos. No primeiro ano, o videogame custa R$ 2.500 + R$ 1.000 + R$ 480 = R$ 3.980, e a partir do segundo, R$ 1.480 por ano." },
                "Com carro é ainda mais forte: além da parcela, entram combustível, seguro, IPVA, licenciamento, manutenção e estacionamento. Quem olha só a parcela costuma ver o orçamento estourar nos meses seguintes.",
              ],
            },
            {
              title: "Antes de uma compra grande",
              body: [
                {
                  list: [
                    "Compare pelo menos três lojas, contando o frete.",
                    "Leia avaliações de quem já comprou e veja como a loja responde às reclamações em sites como o consumidor.gov.br.",
                    "Confira se a loja tem CNPJ, endereço e canais de atendimento. Desconfie de preço muito abaixo de todas as outras.",
                    "Veja a garantia e quem dá assistência técnica na sua cidade.",
                    "Pague por meios que permitem contestar, como cartão ou boleto de empresa conhecida. Pix para pessoa física desconhecida é difícil de recuperar.",
                  ],
                },
                { box: "atencao", title: "Loja falsa", text: "Golpistas criam sites e perfis bonitos com preços bem abaixo do mercado, quase sempre pedindo Pix e com \"últimas unidades\". Se o preço parece bom demais e a loja não tem CNPJ nem histórico, não compre." },
              ],
            },
          ],
          activity: {
            title: "O custo de verdade",
            steps: ["Escolha uma compra que você fez ou quer fazer e faça as contas."],
            fields: [
              "O produto e o preço:",
              "Quantas vezes vou usar (ou usei) e o custo por uso:",
              "Os custos que vêm depois da compra:",
              "Depois das contas, essa compra vale a pena? Por quê?",
            ],
            answer: "Não existe resposta certa única: o objetivo é decidir com os números na mão. Um custo por uso alto não proíbe a compra, mas mostra que ela é um desejo, e desejos entram na parte dos 30% do orçamento, não no lugar das metas.",
          },
          recap: [
            "Custo por uso é o preço dividido pelas vezes que você vai usar.",
            "Some o custo de ter: acessórios, manutenção, assinaturas e taxas.",
            "Antes de uma compra grande, compare lojas, cheque a loja e prefira meios de pagamento contestáveis.",
          ],
        },
        {
          id: "comparar-precos",
          title: "Comparando preços e promoções",
          summary: "Preço por unidade, frete, à vista ou parcelado e as promoções que não são promoção.",
          goals: ["Comparar produtos pelo preço por quilo, litro ou unidade", "Incluir frete e taxas na comparação", "Decidir entre à vista e parcelado e reconhecer descontos falsos"],
          sections: [
            {
              title: "O preço por unidade",
              body: [
                "Embalagens diferentes escondem o preço real. O jeito de comparar é dividir o preço pela quantidade: quanto sai o quilo, o litro ou a unidade. Nos supermercados, a etiqueta da prateleira costuma mostrar esse valor em letras pequenas.",
                {
                  table: {
                    caption: "O sabão da Patrícia",
                    head: ["Embalagem", "Preço", "Preço por litro"],
                    rows: [
                      ["1 litro", "R$ 12,00", "R$ 12,00"],
                      ["3 litros", "R$ 30,00", "R$ 10,00"],
                    ],
                  },
                },
                "A embalagem maior só compensa se você vai usar tudo antes de estragar ou vencer. O mesmo vale para o \"leve 3, pague 2\": é um bom desconto para o que você já ia comprar, e um gasto a mais para o que não ia.",
                { box: "atencao", title: "A embalagem que encolhe", text: "Às vezes o preço fica igual e a quantidade diminui. Um biscoito que tinha 200 g passa a ter 160 g pelos mesmos R$ 5: o preço a cada 100 g sobe de R$ 2,50 para cerca de R$ 3,13, uma alta de 25%. Olhe o peso, não só o preço." },
              ],
            },
            {
              title: "Frete, taxas e o preço final",
              body: [
                "Na internet, compare sempre o preço final, com frete e taxas. O produto mais barato pode sair mais caro quando chega na sua casa.",
                {
                  table: {
                    caption: "O fone do Renato",
                    head: ["Loja", "Produto", "Frete", "Total"],
                    rows: [
                      ["A", "R$ 189", "R$ 35", "R$ 224"],
                      ["B", "R$ 209", "Grátis", "R$ 209"],
                      ["C", "R$ 199", "R$ 15", "R$ 214"],
                    ],
                  },
                },
                "Teste no comparador abaixo. Ele faz a conta do preço por quilo, litro ou unidade, já com o frete.",
                { tool: "comparador" },
              ],
            },
            {
              title: "À vista ou parcelado?",
              body: [
                "\"Em 10 vezes sem juros\" parece de graça. Mas, se a loja dá desconto para quem paga à vista, o parcelado custa mais: a diferença é o juro escondido.",
                { box: "exemplo", title: "A geladeira da Vitória", text: "A geladeira custa R$ 3.000 em 10 × R$ 300 ou R$ 2.700 à vista. Parcelando, Vitória paga R$ 300 a mais. Ela já tinha guardado o dinheiro para essa compra, separado da reserva de emergência, então pagar à vista foi o melhor negócio." },
                "Se não há desconto à vista e as parcelas cabem no orçamento, parcelar sem juros pode fazer sentido. E se a pessoa não tem o dinheiro, juntar antes de comprar costuma sair mais barato que parcelar com juros.",
              ],
            },
            {
              title: "Promoções que não são promoção",
              body: [
                "Em datas como a Black Friday, algumas lojas aumentam o preço semanas antes para depois anunciar um \"desconto\". O preço \"de\" é inventado, e o \"por\" é o mesmo de sempre.",
                {
                  list: [
                    "Acompanhe o preço com antecedência: sites e aplicativos comparadores mostram o histórico.",
                    "Faça a lista do que você precisa antes da data, para não comprar só porque está barato.",
                    "Desconfie de contagem regressiva e de \"últimas unidades\": é pressão, como você viu no Módulo 1.",
                  ],
                },
                {
                  check: {
                    question: "Um produto custava R$ 150 em outubro. Na Black Friday, aparece \"de R$ 250 por R$ 150\". Qual é o desconto real?",
                    options: ["40%, como mostra o anúncio.", "Nenhum: o preço é o mesmo de outubro.", "R$ 100, a diferença entre o \"de\" e o \"por\"."],
                    answer: 1,
                    why: "O que vale é comparar com o preço de antes. Se em outubro já custava R$ 150, o \"de R$ 250\" foi inflado para parecer desconto.",
                  },
                },
              ],
            },
          ],
          activity: {
            title: "Detetive de preços",
            steps: ["Na próxima ida ao mercado ou numa compra pela internet, compare um produto em pelo menos duas embalagens ou lojas."],
            fields: [
              "O produto e as opções que comparei (preço e quantidade de cada uma):",
              "O preço por quilo, litro ou unidade de cada uma, com o frete se tiver:",
              "Qual saiu mais barato e quanto economizei:",
            ],
            answer: "Pegue o preço final (com frete e taxas) e divida pela quantidade. Se uma opção é maior, confira se você vai usar tudo antes de vencer. Muitas vezes a diferença por compra é pequena, mas repetida todo mês ela vira uma boa economia no ano.",
          },
          recap: [
            "Compare pelo preço por quilo, litro ou unidade, e olhe o peso da embalagem.",
            "Na internet, o que vale é o preço final, com frete e taxas.",
            "Com desconto à vista, o parcelado \"sem juros\" custa mais; e desconfie do preço \"de\" inflado.",
          ],
        },
        {
          id: "direitos-e-sustentabilidade",
          title: "Seus direitos e o consumo sustentável",
          summary: "O que o Código de Defesa do Consumidor garante e como gastar menos gastando melhor.",
          goals: ["Conhecer o direito de arrependimento e a garantia legal", "Saber onde reclamar", "Usar o consumo sustentável a favor do bolso"],
          sections: [
            {
              title: "O que a lei garante",
              body: [
                "O Código de Defesa do Consumidor protege quem compra. Conhecer os pontos principais evita prejuízo e discussão no balcão.",
                {
                  table: {
                    caption: "Situações comuns",
                    head: ["Situação", "O que a lei diz"],
                    rows: [
                      ["Compra pela internet, telefone ou fora da loja", "Você tem 7 dias para desistir, sem precisar explicar, contados do recebimento. O dinheiro volta todo, com o frete."],
                      ["Produto com defeito", "Você tem 30 dias (não duráveis, como alimentos) ou 90 dias (duráveis, como eletrodomésticos) para reclamar. Se o conserto não sair em 30 dias, você escolhe: troca, dinheiro de volta ou desconto no preço."],
                      ["Troca por tamanho, cor ou gosto, em loja física", "A lei não obriga. Vale o que a loja prometeu, então pergunte antes e peça por escrito."],
                      ["Preço da etiqueta diferente do caixa", "Você paga o menor preço."],
                    ],
                  },
                },
                {
                  check: {
                    question: "Vitória comprou um fone pela internet, recebeu no dia 10 e, no dia 15, desistiu. Ele não tem defeito. O que ela pode fazer?",
                    options: ["Nada: sem defeito, não há devolução.", "Devolver, mas pagando o frete de volta.", "Devolver e receber tudo de volta, inclusive o frete."],
                    answer: 2,
                    why: "Compras fora da loja têm 7 dias de arrependimento a partir do recebimento. Do dia 10 ao 15 são 5 dias, e o valor volta inteiro, com o frete.",
                  },
                },
              ],
            },
            {
              title: "Onde reclamar",
              body: [
                {
                  ordered: true,
                  list: [
                    "Primeiro, o atendimento da própria loja. Anote o número do protocolo, a data e o nome de quem atendeu.",
                    "Se não resolver, registre a reclamação no consumidor.gov.br, o site oficial em que a empresa precisa responder.",
                    "Ainda sem solução, procure o Procon da sua cidade. Em casos maiores, o Juizado Especial Cível atende sem advogado para valores de até 20 salários mínimos.",
                  ],
                },
                "Guarde sempre a nota fiscal, o comprovante de pagamento e as conversas com a loja. Sem prova, fica difícil exigir o direito.",
              ],
            },
            {
              title: "Consumo sustentável também economiza",
              body: [
                "Consumir de forma consciente é pensar no bolso e também no impacto da compra. Na maior parte das vezes, as duas coisas andam juntas.",
                {
                  cards: [
                    { title: "Consertar", text: "Trocar a bateria de um celular que funciona bem custa bem menos que um aparelho novo e evita lixo eletrônico." },
                    { title: "Comprar usado", text: "Roupas, livros, móveis e eletrônicos seminovos de lojas confiáveis custam uma fração do novo." },
                    { title: "Emprestar ou alugar", text: "O que se usa pouco, como a furadeira da Aula 1, pode ser dividido com vizinhos ou alugado." },
                    { title: "Não desperdiçar", text: "Planejar as refeições e comprar com lista evita jogar comida, e dinheiro, no lixo." },
                    { title: "Descartar certo", text: "Pilhas, baterias e eletrônicos vão para pontos de coleta, que muitas lojas e supermercados têm." },
                  ],
                },
                { box: "chave", title: "Ponto-chave", text: "O produto que dura mais costuma ser o mais barato por uso e o que gera menos lixo. Durabilidade é economia e sustentabilidade ao mesmo tempo." },
              ],
            },
          ],
          activity: {
            title: "Meu jeito de consumir",
            steps: ["Responda pensando no último mês."],
            fields: [
              "Algo que eu poderia ter consertado, comprado usado ou pegado emprestado:",
              "Um direito do consumidor que eu não conhecia e quando ele me seria útil:",
              "Uma mudança no meu consumo que ajuda o bolso e o ambiente:",
            ],
            answer: "Boas mudanças são pequenas e concretas: \"vou levar lista ao mercado\", \"antes de trocar o celular, vou ver quanto custa o conserto\", \"vou guardar as notas fiscais das compras grandes\". Escolha uma e teste por um mês.",
          },
          recap: [
            "Compra fora da loja tem 7 dias de arrependimento; defeito tem 30 ou 90 dias para reclamar.",
            "Reclame na loja, depois no consumidor.gov.br e no Procon, sempre com as provas guardadas.",
            "Consertar, comprar usado e não desperdiçar economiza e gera menos lixo.",
          ],
        },
      ],
      quiz: {
        sticker: { id: "mestre-do-modulo-4", min: 8 },
        questions: [
          { question: "Carla viu uma blusa \"de R$ 160 por R$ 80\" que usaria umas 4 vezes, e uma calça de R$ 160 que usaria umas 80 vezes. Pelo custo por uso, como as duas se comparam?", options: ["As duas saem iguais, porque a blusa está com 50% de desconto.", "Blusa: R$ 20 por uso; calça: R$ 2 por uso.", "A blusa é melhor, porque custa a metade da calça.", "Blusa: R$ 2 por uso; calça: R$ 20 por uso."], answer: 1, why: "Custo por uso é o preço dividido pelas vezes que se usa: R$ 80 ÷ 4 = R$ 20 e R$ 160 ÷ 80 = R$ 2. O desconto não muda o fato de que a blusa quase não seria usada." },
          { question: "O console de Nando custa R$ 2.500. Ele compra 4 jogos por ano a R$ 250 e paga uma assinatura online de R$ 40 por mês. Quanto o videogame custa no primeiro ano?", options: ["R$ 2.500", "R$ 3.500", "R$ 2.980", "R$ 3.980"], answer: 3, why: "R$ 2.500 do console + R$ 1.000 em jogos + R$ 480 de assinatura (12 × R$ 40) = R$ 3.980. Olhar só a etiqueta esconde o custo de ter o produto." },
          { question: "O celular de Patrícia tem 2 anos, funciona bem, mas a bateria está fraca. Um novo custa R$ 1.800; trocar a bateria custa R$ 250 e dá mais uns 2 anos de uso. Qual atitude o módulo indica?", options: ["Trocar a bateria: gasta bem menos e gera menos lixo eletrônico.", "Comprar o novo, porque consertar aparelho antigo é dinheiro perdido.", "Comprar o novo parcelado, já que as parcelas cabem no orçamento.", "Esperar a bateria parar de vez e só então decidir o que fazer."], answer: 0, why: "Consertar o que ainda funciona bem custa uma fração do novo e evita lixo eletrônico. Parcelas que cabem não mudam o fato de que o gasto não era necessário agora." },
          { question: "Um biscoito tinha 200 g e passou a ter 160 g, pelos mesmos R$ 5. O que aconteceu com o preço?", options: ["Não mudou, porque o pacote continua custando R$ 5.", "Subiu 20%, a mesma redução que teve o peso.", "Subiu 25%: de R$ 2,50 para cerca de R$ 3,13 a cada 100 g.", "Caiu, porque o pacote menor custa menos para fabricar."], answer: 2, why: "R$ 5 ÷ 2 = R$ 2,50 a cada 100 g antes; R$ 5 ÷ 1,6 ≈ R$ 3,13 depois. O peso caiu 20%, mas o preço por grama subiu 25%. Por isso vale olhar o peso, não só o preço." },
          { question: "Renato vai comprar um fone. Loja A: R$ 189 + R$ 35 de frete. Loja B: R$ 209 com frete grátis. Loja C: R$ 199 + R$ 15 de frete. Onde sai mais barato?", options: ["Na loja A, que tem o menor preço do produto.", "Na loja B, que sai R$ 209 no total.", "Na loja C, que sai R$ 199 no total.", "Tanto faz, porque o frete é cobrado à parte."], answer: 1, why: "Os totais são R$ 224 (A), R$ 209 (B) e R$ 214 (C). O que vale é o preço final, com frete. Na C, o total é R$ 214, não R$ 199." },
          { question: "A geladeira custa R$ 3.000 em 10 × R$ 300 sem juros, ou R$ 2.700 à vista. Vitória já tem os R$ 2.700 guardados, fora da reserva. Qual é a melhor escolha?", options: ["Parcelar, porque sem juros o preço final é o mesmo.", "Parcelar e deixar os R$ 2.700 rendendo para cobrir a diferença.", "Pagar à vista: o parcelado custa R$ 300 a mais.", "Tanto faz, já que as parcelas caberiam no orçamento dela."], answer: 2, why: "Com desconto à vista, o \"sem juros\" tem juros escondidos: R$ 300. Deixar o dinheiro rendendo não cobre isso, porque o saldo cai R$ 300 a cada mês e rende bem menos que 10% no período." },
          { question: "Um produto custava R$ 150 em outubro. Na Black Friday, aparece \"de R$ 250 por R$ 150, só hoje\". O que isso mostra?", options: ["Um desconto de 40%, como diz o anúncio.", "Um desconto de R$ 100, que só vale aproveitar no dia.", "Um desconto real, porque a loja não pode inventar o preço \"de\".", "Não há desconto: o preço é o mesmo de outubro."], answer: 3, why: "O desconto real se mede pelo preço de antes. Se já custava R$ 150, o \"de R$ 250\" foi inflado, e o \"só hoje\" é pressão para decidir rápido." },
          { question: "Vitória comprou um fone pela internet, recebeu no dia 10 e, no dia 15, desistiu da compra. O fone não tem defeito. O que diz a lei?", options: ["Ela pode desistir e receber tudo de volta, inclusive o frete.", "Ela só pode devolver se o fone tiver algum defeito.", "Ela pode devolver, mas o frete de volta fica por conta dela.", "Ela perdeu o prazo, que conta a partir do dia da compra."], answer: 0, why: "Compra fora da loja tem 7 dias de arrependimento, contados do recebimento: do dia 10 ao 15 são 5 dias. O valor volta inteiro, com o frete." },
          { question: "A máquina de lavar de Sílvio parou com 2 meses de uso. Ele mandou para a assistência há 30 dias e ainda não consertaram. O que ele pode fazer?", options: ["Esperar o conserto, porque a lei não define prazo.", "Nada, porque a garantia legal é de só 30 dias.", "Escolher entre troca, dinheiro de volta ou desconto no preço.", "Pedir só um novo conserto, já que a troca não é prevista."], answer: 2, why: "Máquina de lavar é durável: são 90 dias para reclamar do defeito. Se o conserto não sai em 30 dias, o consumidor escolhe entre troca, dinheiro de volta ou abatimento." },
          { question: "Caio comprou uma camiseta numa loja física. Ela não tem defeito, mas ele não gostou da cor. O que diz a lei?", options: ["Ele tem 7 dias para trocar, como em qualquer compra.", "A troca não é obrigatória: vale o que a loja prometeu.", "Ele tem 30 dias para trocar, por ser um produto não durável.", "A loja é obrigada a trocar se ele apresentar a nota fiscal."], answer: 1, why: "Os 7 dias valem para compras fora da loja, e os 30 ou 90 dias, para defeitos. Troca por gosto em loja física depende do que a loja prometeu, por isso vale perguntar antes." },
        ],
      },
    },
    {
      title: "Poupança e investimentos",
      lessons: [
        {
          id: "reserva-de-emergencia",
          title: "Reserva de emergência",
          summary: "O que é uma emergência, quanto guardar e onde deixar esse dinheiro.",
          goals: ["Separar emergência de gasto previsível", "Calcular o tamanho da sua reserva", "Saber o que procurar num lugar para guardar a reserva"],
          sections: [
            {
              title: "O que é uma emergência",
              body: [
                "Emergência é um gasto necessário que você não tinha como prever: a moto de trabalho que quebrou, um remédio urgente, a renda que parou por um tempo. A reserva existe para isso não virar dívida no cartão ou no cheque especial.",
                "Promoção não é emergência. E gasto que se repete todo ano também não: IPVA, material escolar e presentes de fim de ano são despesas esporádicas, que entram no orçamento divididas por mês, como você viu no Módulo 2.",
                {
                  sort: {
                    title: "Emergência ou não?",
                    labels: ["É emergência", "Não é emergência"],
                    items: [
                      { text: "A geladeira parou e a comida vai estragar.", answer: 0, why: "Necessário e inesperado: é para isso que a reserva existe." },
                      { text: "O IPVA que vence em janeiro.", answer: 1, why: "Ele vem todo ano. É despesa esporádica: entra no orçamento dividida por mês." },
                      { text: "Uma TV pela metade do preço na Black Friday.", answer: 1, why: "Uma oportunidade não é uma emergência. Se a TV é uma meta, ela tem a própria poupança." },
                      { text: "Ficar dois meses sem salário depois de uma demissão.", answer: 0, why: "Cobrir as despesas essenciais enquanto a renda não volta é um dos usos mais importantes da reserva." },
                      { text: "Um conserto urgente no encanamento que vazou.", answer: 0, why: "Necessário e sem aviso. Adiar costuma deixar o problema mais caro." },
                      { text: "A viagem com os amigos, marcada para daqui a três meses.", answer: 1, why: "Com data marcada, é uma meta: dá para dividir o valor pelos meses que faltam." },
                    ],
                  },
                },
              ],
            },
            {
              title: "Quanto guardar",
              body: [
                "A referência mais usada é ter de 3 a 6 meses das suas despesas essenciais. Quem tem renda variável, trabalha por conta própria ou sustenta outras pessoas deve mirar mais perto de 6 meses, ou até mais.",
                { box: "exemplo", title: "A reserva do Diego", text: "No orçamento do Módulo 2, as despesas essenciais de Diego (moradia, contas, mercado e transporte) somam R$ 1.640. A reserva dele fica entre R$ 4.920 (3 meses) e R$ 9.840 (6 meses). A conta usa as despesas essenciais, não o salário." },
                "Parece muito, e é. Por isso vale começar com um primeiro degrau: R$ 500, R$ 1.000 ou um mês de despesas. Guardando R$ 150 por mês, Diego chega a um mês de despesas em 11 meses, e cada degrau já evita uma dívida.",
                { box: "pratica", title: "Usou, reponha", text: "Usar a reserva numa emergência é exatamente o que ela deve fazer. Depois, volte a guardar até chegar ao valor de antes." },
              ],
            },
            {
              title: "Onde guardar",
              body: [
                "A reserva precisa de duas coisas antes do rendimento:",
                {
                  cards: [
                    { title: "Segurança", text: "O risco de perder dinheiro deve ser muito baixo. Nada de ações, criptomoedas ou aplicações que você não entende." },
                    { title: "Liquidez", text: "Você precisa conseguir resgatar rápido, no mesmo dia ou no seguinte, sem multa e sem perder rendimento." },
                  ],
                },
                "Opções comuns são a poupança, CDBs ou contas remuneradas com liquidez diária de bancos cobertos pelo FGC, e o Tesouro Selic. Elas rendem diferente, mas todas atendem às duas regras. Deixe a reserva separada da conta do dia a dia, para não gastar sem perceber.",
                {
                  check: {
                    question: "Para a reserva de emergência, o que pesa mais na escolha de onde guardar?",
                    options: ["O maior rendimento possível, mesmo com risco.", "Segurança e resgate rápido, mesmo rendendo menos.", "Um prazo longo de resgate, que costuma render mais."],
                    answer: 1,
                    why: "A reserva precisa estar lá, inteira, no dia do imprevisto. Rendimento alto com risco ou dinheiro preso por anos não servem para isso.",
                  },
                },
              ],
            },
          ],
          activity: {
            title: "O tamanho da minha reserva",
            steps: ["Use as despesas essenciais do seu orçamento do Módulo 2. Se não tiver, use as do Diego."],
            fields: [
              "Minhas despesas essenciais por mês (R$):",
              "Minha reserva de 3 meses e de 6 meses (R$):",
              "Meu primeiro degrau e quanto vou guardar por mês para chegar nele:",
              "Onde vou guardar e por quê:",
            ],
            answer: "Multiplique as despesas essenciais por 3 e por 6. Para o primeiro degrau, divida o valor pelo que dá para guardar por mês: R$ 1.000 com R$ 100 por mês levam 10 meses. O lugar precisa ser seguro e permitir resgate rápido.",
          },
          recap: [
            "Emergência é gasto necessário e imprevisto; despesa que se repete todo ano vai no orçamento.",
            "A reserva vai de 3 a 6 meses das despesas essenciais; comece por um primeiro degrau.",
            "Guarde em algo seguro e com resgate rápido, separado da conta do dia a dia.",
          ],
        },
        {
          id: "poupar-e-investir",
          title: "Poupar, investir e a inflação",
          summary: "Por que dinheiro parado perde valor, como os juros compostos ajudam e o que olhar antes de investir.",
          goals: ["Entender a inflação e o rendimento real", "Ver os juros compostos trabalhando a seu favor", "Avaliar rentabilidade, liquidez e risco e reconhecer golpes"],
          sections: [
            {
              title: "A inflação come o dinheiro parado",
              body: [
                "Inflação é o aumento geral dos preços. Com inflação de 5% ao ano, o que custa R$ 100 hoje passa a custar R$ 105. Quem guarda R$ 1.000 na gaveta continua com R$ 1.000, mas eles compram o que antes custava cerca de R$ 952.",
                "Poupar é separar dinheiro. Investir é aplicar esse dinheiro para ele render, aceitando regras, prazos e algum risco. Poupar vem primeiro; investir faz o dinheiro poupado não perder para a inflação.",
                { box: "chave", title: "Rendimento real", text: "O que importa é quanto o investimento rende acima da inflação. Se ele rendeu 6% no ano e a inflação foi de 5%, o ganho real foi de cerca de 1%. Se rendeu 4%, você perdeu poder de compra, mesmo com o saldo maior." },
              ],
            },
            {
              title: "Juros compostos a seu favor",
              body: [
                "No Módulo 3, os juros sobre juros faziam a dívida crescer. Investindo, a mesma força trabalha para você: o rendimento de cada mês também passa a render.",
                { box: "exemplo", title: "R$ 200 por mês durante 10 anos", text: "Guardando R$ 200 por mês, a pessoa deposita R$ 24.000 em 10 anos. Com rendimento de 10% ao ano, chega a cerca de R$ 40.000: uns R$ 16.000 vieram dos juros. Com inflação de 4% ao ano, esses R$ 40.000 valem uns R$ 27.000 em dinheiro de hoje, ainda bem acima do que foi depositado." },
                "O que mais pesa é o tempo. Teste no simulador: mude os anos e veja quanto dos juros aparece no fim.",
                { tool: "juros-compostos" },
              ],
            },
            {
              title: "Rentabilidade, liquidez e risco",
              body: [
                {
                  cards: [
                    { title: "Rentabilidade", text: "Quanto o investimento rende. Olhe o rendimento depois de taxas e Imposto de Renda." },
                    { title: "Liquidez", text: "Em quanto tempo o dinheiro volta para a sua conta quando você resgata." },
                    { title: "Risco", text: "A chance de o resultado ser diferente do esperado, inclusive com perda." },
                  ],
                },
                "Nenhum investimento tem o máximo dos três. Em geral, quem quer mais rendimento aceita mais risco ou menos liquidez. Por isso a escolha depende do objetivo e do prazo.",
                {
                  table: {
                    caption: "Alguns investimentos comuns",
                    head: ["Investimento", "Como funciona", "Proteção e risco"],
                    rows: [
                      ["Poupança", "Rende menos que boa parte da renda fixa; isenta de Imposto de Renda", "Coberta pelo FGC"],
                      ["CDB", "Você empresta ao banco; há opções com liquidez diária", "Coberto pelo FGC até R$ 250 mil por CPF em cada instituição"],
                      ["Tesouro Selic", "Você empresta ao governo federal; resgate rápido", "Garantido pelo Tesouro Nacional, risco muito baixo"],
                      ["Ações e fundos de ações", "Você vira sócio de empresas; o valor sobe e desce", "Sem garantia: risco alto, para prazos longos"],
                    ],
                  },
                },
              ],
            },
            {
              title: "Promessa boa demais",
              body: [
                {
                  list: [
                    "Rendimento garantido muito acima do mercado, como \"1% ao dia\" ou \"dobre em 3 meses\".",
                    "Pressão para decidir rápido e pedido de Pix para pessoa física.",
                    "Ganho que depende de trazer mais gente: é pirâmide, e os primeiros a receber pagam com o dinheiro dos novos.",
                  ],
                },
                { box: "atencao", title: "Antes de investir", text: "Confira se a empresa é autorizada pelo Banco Central ou pela CVM, nos sites oficiais de cada um. Pirâmides costumam pagar direitinho no começo, e é assim que convencem mais gente. Não invista em nada que você não consegue explicar." },
                {
                  check: {
                    question: "Uma empresa paga 5% ao mês a quem investe e dá um bônus para cada pessoa nova que você trouxer. O que isso indica?",
                    options: ["Um investimento de risco alto, mas legítimo.", "Um bom negócio, enquanto continuar pagando.", "Uma pirâmide: o dinheiro dos novos paga os antigos."],
                    answer: 2,
                    why: "Quando o ganho depende de trazer gente, quem paga os rendimentos são os que entram depois. Quando param de entrar pessoas, a pirâmide desaba e a maioria perde.",
                  },
                },
              ],
            },
          ],
          activity: {
            title: "Meu dinheiro e a inflação",
            steps: ["Responda com os seus números ou com um exemplo."],
            fields: [
              "Onde está o dinheiro que eu guardo hoje (ou onde eu guardaria):",
              "Ele rende mais ou menos que a inflação?",
              "Um objetivo de longo prazo e quanto eu teria, pelo simulador, guardando um valor por mês:",
            ],
            answer: "Dinheiro na gaveta ou na conta-corrente comum perde para a inflação. Para a reserva, o foco é segurança e liquidez; para objetivos de longo prazo, dá para buscar mais rendimento, sempre entendendo o risco. Confira o índice de inflação do último ano em fontes oficiais, como o IBGE.",
          },
          recap: [
            "A inflação tira poder de compra; o que importa é o rendimento acima dela.",
            "Juros compostos fazem o rendimento render, e o tempo é o que mais pesa.",
            "Equilibre rentabilidade, liquidez e risco, e desconfie de ganho garantido alto.",
          ],
        },
        {
          id: "meu-plano-financeiro",
          title: "Meu plano financeiro",
          summary: "Juntar tudo o que você aprendeu num plano possível e fácil de acompanhar.",
          goals: ["Colocar as prioridades em ordem", "Transformar um objetivo em meta com valor e prazo", "Criar uma rotina para acompanhar o plano"],
          sections: [
            {
              title: "Conheça a sua realidade",
              body: [
                "Todo plano começa com números verdadeiros: quanto entra, quanto sai, quanto você deve e o que você quer. Você já tem esses pedaços: o diagnóstico do Módulo 1, o orçamento do Módulo 2 e a lista de dívidas do Módulo 3. Não precisa mostrar seus números para ninguém.",
              ],
            },
            {
              title: "A ordem das prioridades",
              body: [
                {
                  ordered: true,
                  list: [
                    "Orçamento no azul: as despesas cabem na renda (Módulo 2).",
                    "Um primeiro degrau da reserva, para o próximo imprevisto não virar dívida.",
                    "Sair das dívidas caras, como rotativo e cheque especial (Módulo 3).",
                    "Completar a reserva de emergência.",
                    "Investir para as metas, de acordo com o prazo de cada uma.",
                  ],
                },
                "Investir antes de quitar uma dívida cara não compensa: o rotativo cobra mais de 10% ao mês, e nenhum investimento seguro rende perto disso.",
                {
                  check: {
                    question: "Marcos tem o orçamento no azul, nenhuma dívida e nenhuma reserva. Recebeu R$ 1.000 a mais este mês. Pela ordem da aula, o que vem primeiro?",
                    options: ["Investir em ações, pensando na aposentadoria.", "Começar a reserva de emergência.", "Antecipar a troca do celular, já que sobrou."],
                    answer: 1,
                    why: "Sem dívidas, o passo seguinte ao orçamento no azul é a reserva. Investir para metas longas vem depois que ela estiver pronta.",
                  },
                },
              ],
            },
            {
              title: "Metas e acompanhamento",
              body: [
                "Para cada objetivo, use a regra do Módulo 2: o quê, quanto e até quando. Divida o valor pelos meses para saber quanto guardar. Se não couber no orçamento, ajuste o prazo ou o valor, mas mantenha a meta.",
                "Para metas de até um ano, segurança e liquidez pesam mais. Para metas de muitos anos, como a aposentadoria, o tempo deixa os juros compostos trabalharem e permite buscar mais rendimento.",
                {
                  cards: [
                    { title: "Toda semana", tag: "5 minutos", text: "Anote os gastos e confira o saldo." },
                    { title: "Todo mês", tag: "15 minutos", text: "Compare o planejado com o realizado e transfira o valor das metas logo que o dinheiro entrar." },
                    { title: "Todo ano", tag: "1 hora", text: "Revise as metas, a reserva e as dívidas. A vida muda, e o plano muda junto." },
                  ],
                },
                { box: "chave", title: "Ponto-chave", text: "Um bom plano não precisa ser perfeito: precisa ser realista e ser seguido. Comece com uma atitude possível e ajuste no caminho." },
              ],
            },
          ],
          activity: {
            title: "Meu plano financeiro pessoal",
            steps: ["Preencha com os seus dados ou com valores de exemplo. É a sua ficha do curso: dá para voltar e atualizar quando quiser."],
            fields: [
              "Meu objetivo financeiro:",
              "Quanto preciso juntar (R$):",
              "Até quando quero chegar lá:",
              "Quanto posso separar por semana ou por mês (R$):",
              "Quais gastos posso planejar melhor:",
              "Como e quando vou acompanhar o meu progresso:",
            ],
            answer: "Confira se a conta fecha: o valor por mês multiplicado pelo número de meses precisa chegar ao total. Se não fechar, aumente o prazo, diminua a meta ou encontre um gasto para ajustar. E deixe a transferência marcada para o dia em que o dinheiro entra.",
          },
          recap: [
            "O plano parte dos seus números de verdade: renda, gastos, dívidas e objetivos.",
            "A ordem é orçamento no azul, primeiro degrau da reserva, dívidas caras, reserva completa e investimentos.",
            "Acompanhe toda semana, todo mês e todo ano, e ajuste quando a vida mudar.",
          ],
        },
      ],
      quiz: {
        sticker: { id: "mestre-do-modulo-5", min: 8 },
        questions: [
          { question: "Qual destes gastos é um bom motivo para usar a reserva de emergência?", options: ["O IPVA que vence em janeiro.", "Uma TV pela metade do preço na Black Friday.", "O conserto da moto que Rafa usa para trabalhar.", "O presente de aniversário da mãe, no mês que vem."], answer: 2, why: "A reserva é para gastos necessários e imprevistos. O IPVA e o presente são previsíveis e entram no orçamento; a TV é uma oportunidade, não uma emergência." },
          { question: "Diego ganha R$ 2.200 e tem R$ 1.640 de despesas essenciais. Ele tem carteira assinada e não sustenta outras pessoas. Qual é a faixa de reserva indicada?", options: ["Entre R$ 4.920 e R$ 9.840.", "Entre R$ 6.600 e R$ 13.200.", "R$ 1.640, um mês de despesas.", "R$ 26.400, um ano de salário."], answer: 0, why: "São de 3 a 6 meses das despesas essenciais: 3 × R$ 1.640 e 6 × R$ 1.640. A faixa de R$ 6.600 a R$ 13.200 usa o salário, e não as despesas." },
          { question: "Lia vai começar a reserva de emergência. Qual destas opções atende ao que a aula pede para a reserva?", options: ["Um CDB que só pode ser resgatado daqui a 3 anos, porque rende mais.", "Ações de empresas grandes, que costumam se recuperar das quedas.", "Criptomoedas, que podem ser vendidas a qualquer hora do dia.", "Um CDB com liquidez diária, de um banco coberto pelo FGC."], answer: 3, why: "A reserva pede segurança e resgate rápido. O CDB de 3 anos prende o dinheiro; ações e criptomoedas podem estar em queda justo no dia do imprevisto." },
          { question: "Rafa guardou R$ 1.000 em casa durante um ano em que a inflação foi de 5%. O que aconteceu com esse dinheiro?", options: ["Continua comprando o mesmo, já que o valor não mudou.", "Compra o que antes custava cerca de R$ 952.", "Passou a valer R$ 1.050, porque os preços subiram.", "Só perderia valor se estivesse no banco."], answer: 1, why: "Os preços subiram 5%, e os R$ 1.000 continuaram R$ 1.000: compram cerca de R$ 1.000 ÷ 1,05 ≈ R$ 952 do que compravam antes. Guardado em casa ou parado na conta, perde do mesmo jeito." },
          { question: "Um investimento rendeu 6% no ano, e a inflação foi de 5%. Qual foi o ganho real, aproximadamente?", options: ["11%", "6%", "Cerca de 1%", "Houve perda de 1%"], answer: 2, why: "O ganho real é o que sobra acima da inflação: cerca de 6% − 5% = 1%. O saldo subiu 6%, mas os preços subiram 5%." },
          { question: "Ana guardou R$ 200 por mês durante 10 anos, com rendimento de 10% ao ano, e terminou com cerca de R$ 40.000. Quanto ela depositou e quanto veio dos juros?", options: ["Depositou R$ 24.000; cerca de R$ 16.000 são juros.", "Depositou R$ 2.400; o resto veio dos juros.", "Depositou R$ 24.000; os juros foram R$ 2.400, 10% do total.", "Depositou R$ 20.000; os juros foram outros R$ 20.000."], answer: 0, why: "R$ 200 × 120 meses = R$ 24.000. Os outros R$ 16.000 vieram dos juros compostos: o rendimento de cada mês também passou a render." },
          { question: "Um conhecido oferece um investimento com rendimento garantido alto, resgate quando quiser e \"risco zero\". O que fazer?", options: ["Investir pouco para testar e aumentar se pagar certo.", "Aceitar se a empresa tiver um site bonito e muitos seguidores.", "Aceitar se um amigo já recebeu os rendimentos.", "Desconfiar: nenhum investimento reúne as três coisas."], answer: 3, why: "Alta rentabilidade, liquidez total e risco zero não existem juntos. Pirâmides pagam os primeiros para atrair os próximos, então testar com pouco e o amigo que recebeu são justamente a isca." },
          { question: "Paulo tinha R$ 20 mil num CDB de um banco que quebrou. O que acontece com esse dinheiro?", options: ["Ele perde tudo, porque CDB é um investimento de risco.", "Ele recebe de volta pelo FGC, que cobre até R$ 250 mil por CPF em cada instituição.", "Ele só recebe de volta o que tivesse na poupança, não no CDB.", "Ele recebe de volta pelo Tesouro Nacional, que garante os bancos."], answer: 1, why: "O FGC protege poupança e CDB até R$ 250 mil por CPF em cada instituição. O Tesouro Nacional garante os títulos do Tesouro Direto, não os bancos." },
          { question: "Sol guarda R$ 300 por mês numa gaveta para uma viagem daqui a 2 anos. Como a aula descreve o que ela está fazendo?", options: ["Está poupando, mas não investindo: o dinheiro perde para a inflação.", "Está investindo, porque guarda todo mês com disciplina.", "Está investindo, porque o objetivo é de longo prazo.", "Não está poupando, porque poupar é usar a caderneta de poupança."], answer: 0, why: "Poupar é separar o dinheiro; investir é aplicá-lo para render. Parado na gaveta, ele perde poder de compra para a inflação." },
          { question: "Tati tem R$ 1.000 no rotativo, já tem um pequeno degrau de reserva e juntou mais R$ 800. Ela quer começar a investir a cerca de 1% ao mês. O que o plano da aula indica?", options: ["Investir os R$ 800 e continuar pagando o mínimo do cartão.", "Dividir: R$ 400 no investimento e R$ 400 no cartão.", "Usar os R$ 800 para abater o rotativo antes de investir.", "Investir tudo e quitar o cartão com o rendimento."], answer: 2, why: "O rotativo custa mais de 10% ao mês, e o investimento rende cerca de 1%. Abater a dívida cara vale muito mais. Na ordem do plano, ela vem antes dos investimentos." },
        ],
      },
    },
  ],
};
