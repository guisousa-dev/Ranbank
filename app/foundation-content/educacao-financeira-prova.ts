// Prova final do curso Educação financeira pessoal. Cada partida sorteia 10 destas perguntas,
// duas de cada módulo. A primeira opção é sempre a certa: a ordem é embaralhada na hora.
// As perguntas são casos com números, diferentes das do quiz de cada módulo.
// Segue o padrão de QuizQuestion em app/foundation-lessons.ts.

import type { QuizQuestion } from "../foundation-lessons";

export const PROVA_EDUCACAO_FINANCEIRA: QuizQuestion[] = [
  // Módulo 1: Mentalidade financeira
  {
    module: 0,
    question: "Júnior gasta R$ 15 por dia útil, 5 dias por semana, com refrigerante e doces. Quanto isso dá por mês, aproximadamente?",
    options: ["R$ 325", "R$ 300", "R$ 450", "R$ 3.900"],
    why: "São R$ 75 por semana. Um mês tem em média 4,33 semanas: R$ 75 × 52 ÷ 12 ≈ R$ 325. Multiplicar por 4 deixa dias de fora; R$ 3.900 é o valor do ano.",
    ref: "Aula 2 · Quanto custa um gasto formiga",
  },
  {
    module: 0,
    question: "Desde que passou a pagar tudo por aproximação no celular, Gabi gasta mais do que quando usava dinheiro vivo. Qual armadilha da mente explica isso?",
    options: ["Pagamento sem dor", "Ancoragem", "Efeito manada", "Viés do presente"],
    why: "Quanto mais fácil pagar, menos sentimos o dinheiro saindo. Ancoragem é o primeiro preço virar referência; efeito manada é seguir os outros; viés do presente é preferir o prazer de agora.",
    ref: "Aula 2 · Armadilhas da mente",
  },
  {
    module: 0,
    question: "Toda noite, ao chegar cansada do trabalho, Lu abre o aplicativo de delivery. Pela aula, qual mudança tem mais chance de funcionar?",
    options: ["Manter o descanso como recompensa e trocar a ação, com uma refeição simples já planejada.", "Prometer a si mesma que, a partir de segunda-feira, não pede mais nada.", "Apagar o aplicativo só nos dias em que estiver menos cansada.", "Deixar o cartão salvo, mas ativar um alerta para cada compra."],
    why: "Força de vontade sozinha costuma falhar. Funciona trocar a ação e manter a recompensa, e criar atrito de verdade, como tirar o cartão salvo.",
    ref: "Aula 2 · Como mudar um hábito",
  },
  {
    module: 0,
    question: "Iara vê as amigas viajando todo mês nas redes e sente que está ficando para trás. O que a aula sugere?",
    options: ["Lembrar que as redes mostram um recorte e comparar com o próprio mês anterior.", "Viajar também, parcelando, para não ficar de fora do grupo.", "Parar de sair com as amigas até conseguir juntar dinheiro.", "Seguir perfis de viagens baratas para encontrar promoções."],
    why: "As redes mostram momentos escolhidos, não a fatura. A melhor comparação é com você mesma, e seguir mais perfis de viagem só aumenta a vontade de gastar.",
    ref: "Aula 3 · Valores e prioridades",
  },

  // Módulo 2: Organização financeira
  {
    module: 1,
    question: "Edu é motoboy. Nos últimos três meses, recebeu R$ 2.900, R$ 2.300 e R$ 3.100. Qual renda ele deve usar para montar o orçamento?",
    options: ["R$ 2.300, a menor dos três meses.", "Cerca de R$ 2.770, a média dos três meses.", "R$ 3.100, a do último mês.", "R$ 8.300, a soma dos três meses."],
    why: "Com renda variável, o orçamento usa a menor renda dos últimos meses. O que vier a mais vai para metas e reserva. Usar a média deixa meses no vermelho.",
    ref: "Aula 4 · Receitas e despesas",
  },
  {
    module: 1,
    question: "A matrícula e o material escolar dos filhos de Kátia custam R$ 1.200 todo mês de fevereiro. Como a aula manda tratar esse gasto?",
    options: ["Separar R$ 100 por mês ao longo do ano.", "Pagar com a reserva de emergência quando chegar fevereiro.", "Parcelar no cartão em fevereiro, para caber no mês.", "Cortar outros gastos só no mês de fevereiro."],
    why: "É uma despesa esporádica, mas previsível: R$ 1.200 ÷ 12 = R$ 100 por mês. A reserva é para imprevistos, e parcelar joga o gasto para os meses seguintes.",
    ref: "Aula 4 · Receitas e despesas",
  },
  {
    module: 1,
    question: "Com renda líquida de R$ 3.000, como fica a divisão 50-30-20?",
    options: ["R$ 1.500 necessidades, R$ 900 desejos e R$ 600 metas e dívidas.", "R$ 1.500 necessidades, R$ 600 desejos e R$ 900 metas e dívidas.", "R$ 1.500 necessidades, R$ 1.000 desejos e R$ 500 metas e dívidas.", "R$ 2.000 necessidades, R$ 600 desejos e R$ 400 metas e dívidas."],
    why: "50% de R$ 3.000 são R$ 1.500 para necessidades, 30% são R$ 900 para desejos e 20% são R$ 600 para metas e dívidas. É uma referência para ajustar à sua realidade.",
    ref: "Aula 5 · Montando o orçamento",
  },
  {
    module: 1,
    question: "Nina quer guardar R$ 150 por mês, mas deixa para o fim do mês e nunca sobra nada. O que a aula sugere?",
    options: ["Transferir os R$ 150 para a meta no dia em que o salário cai.", "Guardar o que sobrar, mas anotar melhor os gastos do mês.", "Esperar um aumento de salário para começar a guardar.", "Juntar R$ 450 a cada três meses, quando sobrar mais."],
    why: "É o \"pague-se primeiro\": a meta sai logo que o dinheiro entra, como se fosse uma conta. O que fica para o fim do mês costuma ser gasto antes.",
    ref: "Aula 6 · Metas e acompanhamento",
  },

  // Módulo 3: Crédito e dívidas
  {
    module: 2,
    question: "Uma dívida de R$ 2.000 no cheque especial, a 8% ao mês, fica 2 meses sem pagamento. Quanto ela vira, aproximadamente?",
    options: ["R$ 2.333", "R$ 2.320", "R$ 2.160", "R$ 2.016"],
    why: "Juros compostos: R$ 2.000 × 1,08 = R$ 2.160 no primeiro mês e R$ 2.160 × 1,08 ≈ R$ 2.333 no segundo. R$ 2.320 seria com juros simples.",
    ref: "Aula 7 · Juros: o preço do dinheiro no tempo",
  },
  {
    module: 2,
    question: "Ana não conseguiu pagar, até a fatura seguinte, o saldo que foi para o rotativo. Pela regra atual, o que acontece?",
    options: ["O banco precisa oferecer o parcelamento do saldo, também com juros.", "A dívida é cancelada depois de 30 dias no rotativo.", "Ela continua no rotativo, sem prazo para acabar.", "O banco passa a cobrar só a multa, sem juros."],
    why: "O rotativo só pode ser usado até a fatura seguinte. Depois, o banco oferece o parcelamento, que também tem juros, mas costuma sair mais barato que o rotativo.",
    ref: "Aula 8 · Pagar só o mínimo",
  },
  {
    module: 2,
    question: "Davi ganha R$ 2.000 e tem parcelas de R$ 150 (faltam 4 meses) e R$ 200 (faltam 8). Ele quer parcelar um sofá em 6 × R$ 120. Como fica o primeiro mês, pela linha de alerta da aula?",
    options: ["R$ 470 em parcelas, acima do limite de R$ 400.", "R$ 470 em parcelas, abaixo do limite de R$ 600.", "R$ 350 em parcelas, abaixo do limite de R$ 400.", "R$ 320 em parcelas, abaixo do limite de R$ 400."],
    why: "R$ 150 + R$ 200 + R$ 120 = R$ 470. A linha de alerta é 20% da renda: R$ 400. O sofá faria as parcelas passarem do limite nos primeiros meses.",
    ref: "Aula 8 · Parcelas que se acumulam",
  },
  {
    module: 2,
    question: "Uma empresa promete \"limpar o seu nome\" em 24 horas, cobrando R$ 300 por Pix. O que a aula diz?",
    options: ["Desconfiar: a negociação é feita direto com o credor, pelos canais oficiais.", "Pagar, desde que a empresa tenha CNPJ e um site.", "Pagar metade agora e o resto depois que o nome for limpo.", "Aceitar, porque é mais rápido que negociar com cada banco."],
    why: "Quem cobra para \"limpar o nome\" costuma ser golpe. A negociação é feita direto com o credor, pelo aplicativo, site ou agência, e mutirões oficiais também ajudam.",
    ref: "Aula 9 · Negociar com segurança",
  },

  // Módulo 4: Consumo consciente
  {
    module: 3,
    question: "O café vem em pacote de 250 g por R$ 9 ou em pacote de 1 kg por R$ 32. Qual sai mais barato por quilo?",
    options: ["O de 1 kg: R$ 32 o quilo, contra R$ 36.", "O de 250 g, que custa R$ 9, bem menos que R$ 32.", "Os dois saem pelo mesmo preço por quilo.", "O de 1 kg: R$ 32 o quilo, contra R$ 27."],
    why: "Quatro pacotes de 250 g fazem 1 kg: 4 × R$ 9 = R$ 36. O pacote de 1 kg sai R$ 4 mais barato por quilo, se o café for usado antes de perder o sabor.",
    ref: "Aula 11 · O preço por unidade",
  },
  {
    module: 3,
    question: "Um vestido de festa custa R$ 400, e Mel o usaria 2 vezes. O aluguel custa R$ 120 por vez. O que sai mais em conta?",
    options: ["Alugar: R$ 240 nas duas vezes, contra R$ 400.", "Comprar, porque o vestido fica com ela para sempre.", "Comprar: sai R$ 200 por uso, menos que alugar duas vezes.", "Tanto faz: os dois custam perto de R$ 200 por uso."],
    why: "Comprando, são R$ 200 por uso; alugando, R$ 120 por uso, R$ 240 no total. Comprar só passaria a compensar com mais usos.",
    ref: "Aula 10 · O preço da etiqueta não é o preço da compra",
  },
  {
    module: 3,
    question: "A etiqueta da prateleira diz R$ 18,90, mas no caixa o produto passa por R$ 21,90. Quanto o cliente paga?",
    options: ["R$ 18,90, o menor preço.", "R$ 21,90, porque vale o preço do sistema.", "A média dos dois preços.", "O que a loja decidir, desde que avise antes."],
    why: "Quando o preço da etiqueta e o do caixa são diferentes, o consumidor paga o menor.",
    ref: "Aula 12 · O que a lei garante",
  },
  {
    module: 3,
    question: "O liquidificador que Beto comprou numa loja física parou de funcionar com 50 dias de uso. Ele ainda pode reclamar?",
    options: ["Sim: produto durável tem 90 dias para reclamar do defeito.", "Não: o prazo de 30 dias para reclamar já passou.", "Não: o prazo de 7 dias vale para qualquer compra.", "Sim, mas só se tivesse comprado pela internet."],
    why: "Liquidificador é durável: são 90 dias para reclamar do defeito. Os 30 dias valem para não duráveis, e os 7 dias de arrependimento, para compras fora da loja.",
    ref: "Aula 12 · O que a lei garante",
  },

  // Módulo 5: Poupança e investimentos
  {
    module: 4,
    question: "Fabi é autônoma, a renda dela varia muito, e as despesas essenciais somam R$ 2.000. Qual reserva faz mais sentido?",
    options: ["Perto de 6 meses ou mais: R$ 12.000 ou mais.", "3 meses, R$ 6.000, como para qualquer pessoa.", "1 mês, R$ 2.000, porque a renda dela varia.", "Nenhuma: com renda variável, é melhor investir tudo."],
    why: "A referência é de 3 a 6 meses das despesas essenciais. Quem tem renda variável ou trabalha por conta própria deve mirar perto de 6 meses, ou mais.",
    ref: "Aula 13 · Quanto guardar",
  },
  {
    module: 4,
    question: "A aplicação de Nico rendeu 4% no ano, e a inflação foi de 5%. O que aconteceu com o dinheiro dele?",
    options: ["O saldo subiu, mas ele perdeu poder de compra.", "Ele ganhou 4%, porque o saldo aumentou.", "Ele ganhou 9%, somando o rendimento e a inflação.", "Ficou empatado, porque a diferença é pequena."],
    why: "O que importa é o rendimento acima da inflação. Os preços subiram mais que o saldo: o dinheiro compra cerca de 1% menos do que antes.",
    ref: "Aula 14 · A inflação come o dinheiro parado",
  },
  {
    module: 4,
    question: "Ana e Bia guardam R$ 100 por mês com o mesmo rendimento de 10% ao ano. Ana começa aos 25 anos, Bia aos 35, e as duas param aos 45. Como elas terminam?",
    options: ["Ana deposita o dobro, mas termina com mais que o triplo.", "Ana termina com o dobro, porque depositou o dobro.", "As duas terminam iguais, porque o rendimento é o mesmo.", "Ana termina com pouco mais, já que os juros são os mesmos."],
    why: "Ana deposita R$ 24.000 e Bia, R$ 12.000. Com juros compostos, Ana chega a cerca de R$ 72.000 e Bia a uns R$ 20.000. O tempo é o que mais pesa.",
    ref: "Aula 14 · Juros compostos a seu favor",
  },
  {
    module: 4,
    question: "Rui aplicou num CDB que só pode ser resgatado daqui a 3 anos e, depois, precisou do dinheiro para um conserto urgente. Qual característica ele não considerou?",
    options: ["Liquidez", "Rentabilidade", "Risco", "Inflação"],
    why: "Liquidez é em quanto tempo o dinheiro volta para a conta. Dinheiro para imprevistos precisa de resgate rápido, mesmo rendendo menos.",
    ref: "Aula 14 · Rentabilidade, liquidez e risco",
  },
];
