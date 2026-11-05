// Curso: Educação financeira pessoal. 5 módulos, 8 aulas.
// Segue o padrão de app/foundation-lessons.ts.

import type { CourseContent } from "../foundation-lessons";

export const EDUCACAO_FINANCEIRA: CourseContent = {
  note: "Material educativo. As informações sobre crédito e investimentos são introdutórias e não são recomendação de contratar ou aplicar em nada.",
  closing: "Educação financeira se constrói aos poucos. Você não precisa mudar tudo de uma vez: comece com uma atitude possível, acompanhe e ajuste sempre que precisar.",
  modules: [
    {
      title: "Primeiros passos com o dinheiro",
      lessons: [
        {
          id: "entendendo-o-dinheiro",
          title: "Entendendo o dinheiro",
          summary: "Para que serve o dinheiro e a diferença entre necessidade e desejo.",
          goals: ["Entender para que serve o dinheiro", "Separar necessidades de desejos", "Pensar antes de comprar"],
          sections: [
            {
              title: "O que é dinheiro?",
              body: [
                { image: "/images/fundacao/aulas/educacao-financeira/cade-meu-dinheiro.webp", alt: "Imagem de abertura do curso \"Cadê meu dinheiro?\": uma mulher sorrindo numa mesa com cofrinho, notas de dinheiro, celular e notebook. Texto: aprenda a organizar seu dinheiro, economizar e fazer escolhas financeiras mais conscientes. Organizar, economizar, planejar. Temas: orçamento, economia, crédito e dívidas, reserva de emergência, investimentos e seu plano financeiro." },
                "O dinheiro é um meio de troca. Com ele, compramos produtos, pagamos serviços e guardamos recursos para usar depois.",
                "Como o dinheiro é limitado, toda escolha tem um custo: o que você gasta em uma coisa não pode gastar em outra.",
              ],
            },
            {
              title: "Necessidades e desejos",
              body: [
                "Necessidades são o que é importante para viver bem: comida, moradia, transporte e material de estudo.",
                "Desejos são coisas que queremos, mas que podem esperar. Por exemplo: trocar um celular que ainda funciona ou comprar algo só porque está na moda.",
                { box: "chave", text: "A diferença muda de pessoa para pessoa. Para quem trabalha longe de casa, o transporte é uma necessidade. Para outra pessoa, pode não ser." },
              ],
            },
            {
              title: "De onde vem o dinheiro?",
              body: [
                "Ele pode vir de salário, trabalho por conta própria, pequenos serviços, mesada ou bolsa de estudos.",
                "Todo valor que entra precisa ser cuidado, mesmo quando parece pequeno.",
              ],
            },
            {
              title: "Escolhas e consequências",
              body: [
                "Antes de comprar, faça três perguntas:",
                { list: ["Eu preciso disso agora?", "Tenho esse dinheiro disponível?", "Essa compra atrapalha alguma meta minha?"], ordered: true },
                "Comparar opções e esperar um pouco antes de comprar ajuda a evitar decisões por impulso.",
                { box: "exemplo", text: "Ana recebeu R$ 200 por um serviço. Ela quer um tênis de R$ 180, mas o passe de ônibus do mês custa R$ 120. Fazendo as três perguntas, ela vê que o passe vem primeiro e que o tênis pode virar uma meta para os próximos meses." },
              ],
            },
          ],
          activity: {
            title: "Necessidade ou desejo?",
            steps: [
              "Faça uma lista com 6 coisas que você comprou ou quis comprar no último mês.",
              "Marque cada uma como necessidade (N) ou desejo (D).",
              "Escolha um desejo e escreva por quanto tempo ele poderia esperar.",
            ],
            answer: "Não existe lista certa: depende da sua realidade. O importante é perceber que as necessidades vêm primeiro no planejamento e que os desejos podem esperar.",
          },
          recap: ["O dinheiro é um meio de troca e é limitado.", "Necessidades vêm antes dos desejos.", "Três perguntas antes de comprar evitam compras por impulso."],
        },
        {
          id: "organizando-o-dinheiro",
          title: "Organizando o dinheiro",
          summary: "O que entra, o que sai e o primeiro orçamento.",
          goals: ["Separar o que entra do que sai", "Diferenciar gastos fixos e variáveis", "Montar um orçamento simples"],
          sections: [
            {
              title: "Receitas e despesas",
              body: [
                "Receitas são os valores que entram: salário, mesada ou pagamento por um serviço.",
                "Despesas são os valores que saem: alimentação, transporte, contas e lazer.",
                "Conhecer os dois lados é o primeiro passo para organizar o dinheiro.",
              ],
            },
            {
              title: "Gastos fixos e variáveis",
              body: [
                { table: { caption: "Tipos de gasto", head: ["Tipo", "Como é", "Exemplos"], rows: [["Fixo", "Aparece todo mês, com valor igual ou parecido", "Mensalidade, aluguel, plano de celular"], ["Variável", "Muda conforme o uso", "Lanche fora de casa, passeios, compras"]] } },
                "Os gastos variáveis também precisam ser anotados: é neles que o dinheiro costuma sumir.",
              ],
            },
            {
              title: "Como montar um orçamento",
              body: [
                { list: ["Anote quanto você recebe no mês.", "Liste todos os gastos.", "Separe em essenciais, compromissos, lazer e objetivos.", "Some os gastos e compare com o que você recebe.", "Se os gastos forem maiores, reveja as prioridades e ajuste o que der."], ordered: true },
                { box: "exemplo", text: "Caio recebe R$ 900. Gasta R$ 300 com transporte, R$ 250 com alimentação, R$ 100 com o celular e R$ 200 com lazer. Total: R$ 850. Sobram R$ 50, que ele pode guardar para uma meta." },
              ],
            },
            {
              title: "Registro financeiro",
              body: [
                "Você pode anotar num caderno, numa planilha ou num aplicativo confiável. O que importa é anotar sempre e conferir se o plano está funcionando.",
                { box: "pratica", text: "Não precisa começar com algo complicado. Uma folha com duas colunas, \"entrou\" e \"saiu\", já resolve." },
              ],
            },
          ],
          activity: {
            title: "Meu primeiro orçamento",
            steps: [
              "Anote quanto você recebe no mês. Se ainda não tem renda, invente um valor.",
              "Liste os seus gastos de uma semana, separando fixos e variáveis.",
              "Some tudo e veja: sobrou ou faltou?",
            ],
            answer: "Se sobrou, decida o que fazer com a sobra antes de gastá-la. Se faltou, olhe primeiro os gastos variáveis: são os mais fáceis de ajustar.",
          },
          recap: ["Receita é o que entra; despesa é o que sai.", "Gastos variáveis pedem atenção, porque mudam todo mês.", "Um orçamento simples compara o que entra com o que sai."],
        },
      ],
    },
    {
      title: "Economia e consumo consciente",
      lessons: [
        {
          id: "economizando",
          title: "Economizando com inteligência",
          summary: "Poupar, criar metas e acompanhar o progresso.",
          goals: ["Diferenciar economizar de poupar", "Criar uma meta com valor e prazo", "Escolher pequenas atitudes que reduzem gastos"],
          sections: [
            {
              title: "Economizar e poupar",
              body: [
                "Economizar é usar o dinheiro com atenção e evitar desperdício. Poupar é guardar uma parte para usar no futuro.",
                { box: "chave", text: "Não precisa guardar muito de uma vez. Guardar sempre, mesmo pouco, vale mais do que o valor do começo." },
              ],
            },
            {
              title: "Metas financeiras",
              body: [
                "Uma boa meta tem três partes: um objetivo claro, um valor e um prazo.",
                { box: "exemplo", text: "Meta: juntar R$ 300 em 6 meses para comprar material de curso. Conta: R$ 300 ÷ 6 = R$ 50 por mês." },
              ],
            },
            {
              title: "Pequenas atitudes",
              body: [
                { list: ["Comparar preços antes de comprar", "Planejar as compras do mês", "Evitar desperdício de comida", "Levar lanche de casa quando der", "Revisar assinaturas que você quase não usa"] },
                "Escolha as mudanças que fazem sentido para a sua realidade.",
              ],
            },
            {
              title: "Acompanhar o progresso",
              body: ["Anote quanto já guardou e quanto falta. Se ficar difícil, mude o prazo ou o valor da meta, em vez de desistir."],
            },
          ],
          activity: {
            title: "Calcule a sua meta",
            steps: ["Escolha algo que você quer conquistar.", "Pesquise o preço e defina um prazo em meses.", "Divida o valor pelo número de meses."],
            answer: "O resultado é quanto você precisa guardar por mês. Se não couber no orçamento, aumente o prazo. Exemplo: R$ 600 em 6 meses dá R$ 100 por mês; em 12 meses, R$ 50.",
          },
          recap: ["Poupar é guardar para o futuro; o hábito importa mais que o valor.", "Meta boa tem objetivo, valor e prazo.", "Ajustar a meta é melhor do que desistir dela."],
        },
        {
          id: "consumo-consciente",
          title: "Consumo consciente",
          summary: "Comprar com planejamento e fugir do impulso.",
          goals: ["Reconhecer compras por impulso", "Comparar preços do jeito certo", "Ligar consumo e meio ambiente"],
          sections: [
            {
              title: "Comprar com consciência",
              body: [
                "Consumo consciente é pensar no que compramos, por que compramos e o que essa escolha causa.",
                "Uma compra planejada considera necessidade, qualidade, preço, durabilidade e o peso no orçamento.",
              ],
            },
            {
              title: "Compras por impulso",
              body: [
                "Promoções, influenciadores, tendências e parcelas pequenas fazem a gente comprar rápido.",
                { box: "pratica", text: "Antes de comprar algo que não estava nos planos, espere 24 horas. Se a vontade passar, era impulso." },
              ],
            },
            {
              title: "Como comparar preços",
              body: [
                "Olhe além do preço da etiqueta:",
                { list: ["Preço final, com frete", "Quantidade e qualidade", "Garantia", "Forma de pagamento e juros"] },
                { box: "atencao", text: "Nem toda promoção é economia. Um produto \"em oferta\" pode sair mais caro que outro sem desconto." },
                { box: "exemplo", text: "Pacote A: 1 kg por R$ 12. Pacote B, \"em promoção\": 800 g por R$ 10. Por quilo, o B sai R$ 12,50, mais caro que o A." },
              ],
            },
            {
              title: "Consumo e meio ambiente",
              body: ["Evitar desperdício, cuidar dos objetos, reutilizar e comprar só o necessário ajuda o seu bolso e o meio ambiente."],
            },
          ],
          activity: {
            title: "Caça à promoção",
            steps: ["Escolha um produto que você costuma comprar.", "Encontre o preço em dois lugares diferentes.", "Calcule o preço por unidade ou por quilo, já com o frete."],
            answer: "A opção mais barata é a de menor preço por unidade, com frete. Se a diferença for pequena, a garantia e a qualidade podem pesar mais.",
          },
          recap: ["Consumo consciente é pensar antes de comprar.", "Esperar um dia ajuda a fugir do impulso.", "Compare o preço final por unidade, não só a etiqueta."],
        },
      ],
    },
    {
      title: "Crédito, dívidas e imprevistos",
      lessons: [
        {
          id: "credito-e-dividas",
          title: "Crédito, cartão e dívidas",
          summary: "Como o crédito funciona e como não se enrolar.",
          goals: ["Entender o que é crédito", "Usar o cartão sem perder o controle", "Saber o que são juros e o CET", "Evitar dívidas"],
          sections: [
            {
              title: "O que é crédito?",
              body: [
                "Crédito é usar um valor agora e pagar depois, seguindo um contrato.",
                { box: "chave", text: "Crédito não é dinheiro extra. Tudo o que você usar vai ter que ser pago, muitas vezes com juros e tarifas." },
              ],
            },
            {
              title: "Cartão de crédito",
              body: [
                "As compras do cartão chegam juntas na fatura. Acompanhe os gastos durante o mês e confira a fatura antes do vencimento.",
                "O limite do cartão não é renda. Ter limite alto não quer dizer que é seguro gastar tudo.",
              ],
            },
            {
              title: "Juros e atraso",
              body: [
                "Juros são o valor cobrado pelo uso do crédito ou pelo atraso no pagamento.",
                { box: "atencao", text: "Pagar só uma parte da fatura faz o restante virar dívida, com juros altos." },
                "Antes de contratar crédito, leia as condições e procure o CET (Custo Efetivo Total). Ele mostra quanto o crédito custa de verdade, somando juros e tarifas.",
              ],
            },
            {
              title: "Como evitar dívidas",
              body: [
                { list: ["Planeje as compras antes de usar o cartão", "Some todas as parcelas antes de fazer uma nova", "Não empreste o seu cartão nem a sua senha", "Se não conseguir pagar, procure o banco cedo para negociar"] },
                { box: "atencao", text: "Nunca passe senha ou código de segurança para ninguém, nem para quem diz ser do banco." },
              ],
            },
          ],
          activity: {
            title: "Some as parcelas",
            steps: [
              "Imagine estas compras no cartão: celular em 10× de R$ 120, tênis em 4× de R$ 75 e curso em 6× de R$ 50.",
              "Some quanto você vai pagar por mês enquanto as três estiverem ativas.",
              "Compare com uma renda de R$ 900.",
            ],
            answer: "R$ 120 + R$ 75 + R$ 50 = R$ 245 por mês, mais de um quarto de R$ 900. Parcelas pequenas, somadas, pesam muito no orçamento.",
          },
          recap: ["Crédito é dinheiro emprestado, não renda.", "Pagar só parte da fatura gera juros altos.", "Some todas as parcelas antes de fazer uma nova."],
        },
        {
          id: "reserva-de-emergencia",
          title: "Reserva de emergência",
          summary: "Um dinheiro guardado para os imprevistos.",
          goals: ["Reconhecer o que é uma emergência de verdade", "Entender para que serve uma reserva", "Começar a montar a sua, mesmo com pouco"],
          sections: [
            {
              title: "O que é uma emergência?",
              body: [
                "É algo inesperado e necessário que exige dinheiro: um conserto urgente ou um remédio, por exemplo.",
                { box: "chave", text: "Uma promoção ou um desejo não é emergência." },
              ],
            },
            {
              title: "Para que serve a reserva?",
              body: [
                "A reserva ajuda a passar por imprevistos sem precisar de empréstimo ou de cartão.",
                "O valor certo muda de pessoa para pessoa: depende da renda, dos gastos e das responsabilidades de cada um.",
              ],
            },
            {
              title: "Como começar",
              body: [
                { list: ["Descubra quanto você gasta com o essencial por mês.", "Defina uma primeira meta pequena e possível.", "Guarde um pouco todo mês, sem pular."], ordered: true },
                { box: "pratica", text: "Se você ainda não tem renda, pratique com valores inventados. O hábito de planejar já é um começo." },
              ],
            },
            {
              title: "Segurança e acesso",
              body: [
                "O dinheiro da reserva precisa estar seguro e ser fácil de sacar quando você precisar.",
                { box: "atencao", text: "Antes de escolher onde guardar, entenda as regras, os riscos e os custos. Não coloque a reserva em algo que você não entende." },
              ],
            },
          ],
          activity: {
            title: "Emergência ou não?",
            steps: [
              "Leia as situações: 1) a geladeira quebrou; 2) saiu um celular novo; 3) precisei de um remédio; 4) vai ter um show que eu queria muito; 5) o pneu da moto que uso para trabalhar furou.",
              "Marque cada uma como emergência (E) ou não (N).",
            ],
            answer: "Emergências: 1, 3 e 5. Não são emergências: 2 e 4. São desejos, que podem virar metas.",
          },
          recap: ["Emergência é inesperada e necessária.", "A reserva evita empréstimo na hora do aperto.", "Comece pequeno e guarde sempre."],
        },
      ],
    },
    {
      title: "Primeiros passos nos investimentos",
      lessons: [
        {
          id: "investimentos",
          title: "Primeiros passos nos investimentos",
          summary: "Poupar, investir e três ideias que todo iniciante precisa saber.",
          goals: ["Diferenciar poupar de investir", "Entender rentabilidade, liquidez e risco", "Reconhecer sinais de golpe"],
          sections: [
            {
              title: "Poupar e investir",
              body: [
                "Poupar é guardar dinheiro. Investir é aplicar esse dinheiro buscando um resultado no futuro.",
                { box: "chave", text: "Todo investimento tem algum risco. Não existe opção sem risco nenhum." },
              ],
            },
            {
              title: "Três ideias importantes",
              body: [
                { table: { caption: "Ideias básicas de investimento", head: ["Ideia", "O que quer dizer"], rows: [["Rentabilidade", "Quanto o investimento pode render"], ["Liquidez", "Quão rápido você consegue ter o dinheiro de volta"], ["Risco", "A chance de o resultado ser diferente do esperado, inclusive com perda"]] } },
              ],
            },
            {
              title: "Antes de investir",
              body: [
                "Entenda o seu objetivo, o prazo, quando vai precisar do dinheiro, os riscos, as taxas e as regras do produto.",
                { box: "atencao", text: "Desconfie de lucro garantido muito alto, de pressão para decidir rápido e de pedido de transferência para desconhecidos. São sinais comuns de golpe." },
              ],
            },
            {
              title: "Aprender antes de decidir",
              body: [
                "Quem está começando deve buscar informação em fontes confiáveis e entender o produto antes de aplicar.",
                "Esta aula é educativa: não indica nenhum investimento e não substitui a orientação de um profissional.",
              ],
            },
          ],
          activity: {
            title: "Golpe ou não?",
            steps: [
              "Leia a mensagem: \"Invista R$ 100 hoje e receba R$ 1.000 em uma semana. Garantido! Só até meia-noite. Faça o Pix para este número.\"",
              "Conte quantos sinais de golpe você encontra.",
            ],
            answer: "Pelo menos três: lucro garantido e alto demais (10 vezes em uma semana), pressa (\"só até meia-noite\") e Pix para um número desconhecido. É golpe.",
          },
          recap: ["Poupar é guardar; investir é aplicar buscando resultado, com risco.", "Rentabilidade, liquidez e risco andam juntos.", "Lucro garantido e pressa são sinais de golpe."],
        },
      ],
    },
    {
      title: "Meu plano financeiro pessoal",
      lessons: [
        {
          id: "meu-plano",
          title: "Meu plano financeiro pessoal",
          summary: "Juntar tudo em um plano que cabe na sua vida.",
          goals: ["Conhecer a sua situação real", "Definir prioridades", "Criar uma meta e acompanhar"],
          sections: [
            {
              title: "Conheça a sua realidade",
              body: [
                "Um plano começa com informações verdadeiras: quanto entra, quais são os gastos, o que precisa ser pago e quais são os seus objetivos.",
                { box: "chave", text: "O plano é seu. Você não precisa mostrar os seus números para ninguém." },
              ],
            },
            {
              title: "Defina prioridades",
              body: ["Separe gastos essenciais, compromissos e desejos. Veja o que precisa ser pago primeiro e o que pode ser reduzido ou adiado."],
            },
            {
              title: "Crie uma meta",
              body: ["Escolha um objetivo, estime o valor e defina um prazo possível. Divida o valor pelo prazo para saber quanto guardar. Se não couber no orçamento, ajuste o prazo ou a meta."],
            },
            {
              title: "Acompanhe e ajuste",
              body: [
                "Revise o plano de tempos em tempos. Se a renda, os gastos ou as prioridades mudarem, o plano muda junto.",
                "Um bom plano não precisa ser perfeito: precisa ser realista e ajudar você a decidir melhor.",
              ],
            },
          ],
          activity: {
            title: "Ficha: meu plano financeiro",
            steps: [
              "Meu objetivo financeiro é:",
              "Quanto preciso juntar (R$):",
              "Até quando quero chegar lá:",
              "Quanto posso separar por semana ou por mês (R$):",
              "Quais gastos posso planejar melhor:",
              "Como vou acompanhar o meu progresso:",
            ],
            note: "Responda num caderno ou no celular. Pode usar valores inventados ou os seus, sem mostrar para ninguém.",
          },
          recap: ["Um plano bom começa pela realidade.", "Prioridades primeiro, desejos depois.", "Revise e ajuste: o plano acompanha a sua vida."],
        },
      ],
    },
  ],
};
