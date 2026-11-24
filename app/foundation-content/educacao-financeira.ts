// Curso: Educação financeira pessoal. 5 módulos com 3 aulas cada.
// Módulo 1 pronto; os outros entram assim que forem revisados.
// Segue o padrão de app/foundation-lessons.ts.

import type { CourseContent } from "../foundation-lessons";

export const EDUCACAO_FINANCEIRA: CourseContent = {
  note: "Material educativo. As informações sobre crédito e investimentos são introdutórias e não são recomendação de contratar ou aplicar em nada.",
  closing: "Educação financeira se constrói aos poucos. Você não precisa mudar tudo de uma vez: comece com uma atitude possível, acompanhe e ajuste sempre que precisar.",
  cover: { color: "#d99b9e", ink: "#94535b", glow: "#f2bcc0", desk: "mesa-rosa" },
  stickers: [
    { id: "ponto-de-partida", name: "Ponto de partida", how: "Fez o diagnóstico inicial." },
    { id: "primeiro-olhar", name: "Primeiro olhar", how: "Respondeu o mito ou verdade da Aula 1." },
    { id: "olhar-treinado", name: "Olhar treinado", how: "Acertou 6 ou mais no necessidade ou desejo." },
    { id: "prioridades-claras", name: "Prioridades claras", how: "Escolheu as suas três prioridades." },
    { id: "mente-fria", name: "Mente fria", how: "Terminou o mês da Lia com a meta e sem parcelas." },
    { id: "mestre-do-modulo-1", name: "Mestre do módulo", how: "Acertou 8 ou mais no quiz do Módulo 1." },
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
          { question: "Educação financeira serve principalmente para...", options: ["Nunca gastar com lazer.", "Tomar decisões mais conscientes e organizar os recursos.", "Garantir que a pessoa fique rica."], answer: 1, why: "Educação financeira é sobre decidir com consciência. Ela não proíbe o lazer e não promete riqueza." },
          { question: "Uma compra por impulso costuma acontecer quando...", options: ["Planejamos e comparamos preços.", "Decidimos sem refletir, muitas vezes levados por emoção ou urgência.", "Registramos a compra no orçamento antes."], answer: 1, why: "O impulso é a compra sem reflexão, puxada por emoção ou urgência. Planejar e registrar são o oposto. Reveja a Aula 2." },
          { question: "No ciclo do hábito, a recompensa é...", options: ["A situação que dispara o comportamento.", "O comportamento que se repete.", "A sensação boa que faz o cérebro querer repetir o ciclo."], answer: 2, why: "A recompensa é a sensação boa que reforça o ciclo. A situação que dispara é o gatilho; o comportamento é a ação." },
          { question: "Rafael gasta R$ 15 por dia útil, 5 dias por semana. Por mês, isso dá aproximadamente:", options: ["R$ 75", "R$ 325", "R$ 3.900"], answer: 1, why: "R$ 15 × 5 = R$ 75 por semana; R$ 75 × 52 ÷ 12 ≈ R$ 325 por mês. R$ 75 é a semana; R$ 3.900 é o ano." },
          { question: "Qual atitude cria atrito saudável para compras por impulso?", options: ["Remover o cartão salvo dos aplicativos de compra.", "Seguir mais perfis de ofertas.", "Aumentar o limite do cartão."], answer: 0, why: "Tirar o cartão salvo cria uma pausa antes da compra. Seguir ofertas e aumentar o limite facilitam o impulso." },
          { question: "Sobre necessidades e desejos, é correto dizer que...", options: ["Existe uma lista fixa que vale para todas as pessoas.", "Desejos devem ser sempre eliminados.", "A mesma compra pode ser necessidade para uma pessoa e desejo para outra, conforme o contexto."], answer: 2, why: "O contexto define. Um notebook pode ser ferramenta de trabalho ou lazer. Não há lista fixa, e desejos podem ser planejados. Reveja a Aula 3." },
          { question: "Num anúncio \"de R$ 400 por R$ 249\", o preço de R$ 400 funciona como...", options: ["Uma âncora, que faz R$ 249 parecer vantajoso mesmo que a compra não seja necessária.", "Uma garantia de que o produto vale R$ 400.", "Um desconto obrigatório por lei."], answer: 0, why: "É a ancoragem: o primeiro preço vira referência e faz o segundo parecer barato. Ele não prova o valor real do produto." },
          { question: "Por que a comparação com outras pessoas nas redes sociais pode atrapalhar?", options: ["Porque todas as pessoas nas redes mentem.", "Porque não conhecemos a renda, as dívidas e as condições por trás do que vemos.", "Porque comprar o mesmo que os amigos é sempre errado."], answer: 1, why: "O que aparece nas redes é só uma parte da vida das pessoas. Não é que todos mintam, mas não vemos renda, dívidas ou parcelas." },
          { question: "Antes de aceitar uma compra parcelada \"sem juros\", o mais importante é verificar...", options: ["Se as parcelas cabem nos próximos meses, junto com os outros compromissos.", "Apenas se a primeira parcela cabe neste mês.", "Se a loja é bonita."], answer: 0, why: "Parcelas ocupam a renda dos próximos meses. Olhar só a primeira é o erro mais comum. O tema volta no Módulo 3." },
          { question: "Para quem não sabe para onde vai o dinheiro, um bom primeiro passo é...", options: ["Pegar um empréstimo para organizar as contas.", "Registrar todos os gastos por alguns dias, inclusive os pequenos.", "Cancelar todas as despesas de uma vez."], answer: 1, why: "Registrar mostra para onde o dinheiro vai, como fez a Camila. Empréstimo não organiza nada, e cortar tudo dificilmente se mantém." },
        ],
      },
    },
    { title: "Organização financeira", lessons: [] },
    { title: "Crédito e dívidas", lessons: [] },
    { title: "Consumo consciente", lessons: [] },
    { title: "Poupança e investimentos", lessons: [] },
  ],
};
