// Perguntas da prova final de Primeiros socorros: 5 por módulo. A roleta sorteia 10, equilibrando os módulos.
// A primeira opção é sempre a certa; a ordem é embaralhada na hora de mostrar.

import type { QuizQuestion } from "../foundation-lessons";

export const PROVA_PRIMEIROS_SOCORROS: QuizQuestion[] = [
  // Módulo 1 · Introdução aos primeiros socorros
  {
    module: 0,
    question: "Num acidente de carro na estrada, o que vem antes de chegar perto das vítimas?",
    options: ["Ligar o pisca-alerta e colocar o triângulo bem antes do local.", "Tirar as vítimas do carro o mais rápido possível, antes que alguma coisa piore.", "Oferecer água às vítimas que estão acordadas.", "Fotografar a cena para mostrar à equipe depois."],
    why: "Proteger-se e sinalizar vem primeiro: um socorrista atropelado vira mais uma vítima. Mover as vítimas só se houver perigo imediato.",
    ref: "Aula 2 · Antes de ajudar e como pedir socorro",
  },
  {
    module: 0,
    question: "Para qual serviço se liga quando alguém está sendo agredido na rua?",
    options: ["190, Polícia Militar.", "192, SAMU.", "193, Corpo de Bombeiros.", "0800 722 6001, Disque-Intoxicação."],
    why: "Violência e risco à segurança são com a Polícia, no 190. Se houver feridos, o SAMU (192) também é acionado.",
    ref: "Aula 2 · Antes de ajudar e como pedir socorro",
  },
  {
    module: 0,
    question: "Qual destas atitudes está dentro do que um leigo pode fazer numa emergência?",
    options: ["Ligar para o 192 e seguir as orientações do atendente.", "Dar um remédio para a dor que tem em casa.", "Colocar no lugar um ombro que saiu do lugar.", "Dar água a uma pessoa desacordada."],
    why: "Pedir ajuda e seguir o atendente está ao alcance de qualquer pessoa. Remédio, osso no lugar e líquido para quem está desacordado podem piorar o quadro.",
    ref: "Aula 1 · O que são primeiros socorros",
  },
  {
    module: 0,
    question: "Num ferimento com sangue, como Rita protege as próprias mãos se não tiver luvas?",
    options: ["Com um saco plástico nas mãos.", "Lavando as mãos só depois de ajudar.", "Usando só as pontas dos dedos.", "Pedindo para a vítima apertar sozinha, mesmo desmaiando."],
    why: "Sem luvas, um saco plástico serve de barreira. Quem ajuda também precisa se proteger.",
    ref: "Aula 2 · Antes de ajudar e como pedir socorro",
  },
  {
    module: 0,
    question: "Para que servem os primeiros socorros?",
    options: ["Preservar a vida, evitar o agravamento e facilitar o atendimento até a ajuda chegar.", "Resolver o problema no próprio local, para a vítima não precisar ir a um hospital ou posto.", "Dar o diagnóstico para o médico já saber o que fazer.", "Garantir que a vítima vai ficar bem."],
    why: "Eles ajudam no começo, mas não substituem o atendimento nem garantem o resultado.",
    ref: "Aula 1 · O que são primeiros socorros",
  },

  // Módulo 2 · Identificar situações de emergência
  {
    module: 1,
    question: "Ao avaliar uma pessoa caída, por quanto tempo se observa se o peito sobe e desce?",
    options: ["Até 10 segundos.", "Um minuto inteiro.", "Até 3 minutos, para ter certeza.", "Não precisa olhar: basta ela não responder."],
    why: "Até 10 segundos bastam. Mais que isso atrasa o pedido de ajuda e o começo da RCP.",
    ref: "Aula 4 · Observar a vítima e pedir ajuda",
  },
  {
    module: 1,
    question: "Uma pessoa caída não responde, mas respira normalmente e não caiu de nenhuma altura. O que fazer depois de ligar para o 192?",
    options: ["Colocá-la na posição lateral de segurança e observar.", "Começar as compressões no peito, para garantir que o sangue continue circulando.", "Sentá-la e dar água.", "Sacudi-la até que acorde."],
    why: "Quem respira normalmente não recebe RCP. De lado, o caminho do ar fica livre enquanto a equipe vem.",
    ref: "Aula 4 · Observar a vítima e pedir ajuda",
  },
  {
    module: 1,
    question: "Qual destes casos é emergência, segundo a tabela de sinais de alerta?",
    options: ["Convulsão que dura mais de 5 minutos.", "Um corte pequeno que parou de sangrar com pressão.", "Tontura leve que passa ao sentar.", "Tornozelo torcido, com a pessoa apoiando o pé."],
    why: "Convulsão longa é sinal de alerta. Os outros casos pedem observação e atendimento comum.",
    ref: "Aula 3 · Sinais de alerta",
  },
  {
    module: 1,
    question: "Na dúvida sobre qual serviço chamar para uma pessoa passando mal, o que fazer?",
    options: ["Ligar para o 192 e explicar a situação: o atendente encaminha.", "Esperar para ver se os sinais pioram.", "Pesquisar os sintomas na internet antes de ligar.", "Levar a pessoa de ônibus até o hospital."],
    why: "Na dúvida, ligue. Esperar ou pesquisar atrasa a ajuda.",
    ref: "Aula 3 · Sinais de alerta",
  },
  {
    module: 1,
    question: "Alguém está caído no meio de uma avenida movimentada. Qual é a atitude da aula?",
    options: ["Não entrar no trânsito, pedir ajuda e sinalizar só se for seguro.", "Atravessar correndo para ver se ele respira.", "Arrastá-lo pelos braços até a calçada, longe dos carros, e só então ver se ele respira.", "Parar o trânsito ficando de pé na frente dos carros."],
    why: "A segurança de quem ajuda vem primeiro. Arrastar a vítima também pode piorar uma lesão.",
    ref: "Aula 4 · Observar a vítima e pedir ajuda",
  },

  // Módulo 3 · Desmaio, mal-estar, quedas e acidentes
  {
    module: 2,
    question: "Na posição lateral de segurança, qual joelho se dobra para virar a pessoa?",
    options: ["O do lado mais distante de quem ajuda, puxado na sua direção.", "O mais próximo de quem ajuda, empurrado para longe.", "Os dois juntos, encostados no peito.", "Nenhum: vira-se pela cabeça."],
    why: "Dobra-se o joelho do lado mais distante e puxa-se na sua direção, enquanto a mão dela apoia a bochecha.",
    ref: "Aula 5 · Desmaio e mal-estar",
  },
  {
    module: 2,
    question: "Um pedaço de vidro ficou cravado na perna de um rapaz. O que fazer?",
    options: ["Não retirar, apoiar o vidro com panos em volta e chamar o socorro.", "Puxar o vidro devagar, com a mão protegida, e logo apertar o corte com um pano limpo.", "Puxar rápido, para doer menos.", "Lavar com água corrente com o vidro no lugar e mexer para limpar."],
    why: "O objeto pode estar segurando o sangramento. Ele fica e é apoiado para não se mexer.",
    ref: "Aula 6 · Quedas, sangramentos e fraturas",
  },
  {
    module: 2,
    question: "Por que não se estoura a bolha de uma queimadura?",
    options: ["Porque ela protege a pele de baixo contra infecção.", "Porque o líquido dela é que resfria a pele.", "Porque estourar faz a queimadura crescer.", "Porque ela some sozinha em uma hora."],
    why: "A bolha é uma barreira natural. Estourar abre caminho para infecção.",
    ref: "Aula 7 · Acidentes comuns",
  },
  {
    module: 2,
    question: "Uma senhora de 80 anos, que toma remédio para \"afinar o sangue\", cai e bate o braço. O machucado parece pequeno. O que a aula diz?",
    options: ["Ela pode precisar de avaliação mesmo com um machucado que parece pequeno.", "Como o machucado é pequeno, basta passar pomada.", "Ela deve parar o remédio por uns dias.", "Só precisa de avaliação se o braço ficar torto, inchar muito ou ela não conseguir mexê-lo."],
    why: "Idosos e quem usa esses remédios podem ter sangramentos que não aparecem logo.",
    ref: "Aula 6 · Quedas, sangramentos e fraturas",
  },
  {
    module: 2,
    question: "Uma moça sente tontura, enjoo e suor frio na academia, mas não tem dor no peito. Qual é o primeiro cuidado?",
    options: ["Ajudá-la a se sentar ou deitar num lugar arejado e perguntar o que sente.", "Fazê-la continuar o treino mais devagar.", "Dar um energético ou um café forte para a pressão subir e ela terminar o treino.", "Deixá-la sozinha descansando no vestiário."],
    why: "Primeiro, segurança e repouso; depois, observar. Se aparecerem sinais de alerta, 192.",
    ref: "Aula 5 · Desmaio e mal-estar",
  },

  // Módulo 4 · Emergências e atendimento inicial
  {
    module: 3,
    question: "Duas pessoas fazem RCP numa vítima. De quanto em quanto tempo devem trocar quem comprime?",
    options: ["A cada 2 minutos, sem parar as compressões por muito tempo.", "A cada 10 minutos.", "Só quando a equipe chegar.", "A cada 30 compressões, parando um pouco para conferir se a pessoa voltou a respirar."],
    why: "Cansado, ninguém comprime bem. A troca a cada 2 minutos mantém a qualidade.",
    ref: "Aula 8 · Parada cardíaca: RCP e DEA",
  },
  {
    module: 3,
    question: "Uma grávida de 8 meses está com engasgo grave. Onde são feitas as compressões?",
    options: ["No meio do peito, e não na barriga.", "Acima do umbigo, como em qualquer adulto.", "Nas costas, só com tapas.", "Nenhuma: grávidas não recebem a manobra."],
    why: "Em grávidas e pessoas muito obesas, as compressões vão no meio do peito.",
    ref: "Aula 9 · Engasgo",
  },
  {
    module: 3,
    question: "Durante uma convulsão, alguém quer colocar uma colher na boca da pessoa para ela não \"engolir a língua\". O que a aula diz?",
    options: ["Não colocar nada na boca: ninguém engole a língua.", "Colocar um pano em vez da colher.", "Segurar a língua com os dedos.", "Colocar a colher só se a crise passar de 5 minutos."],
    why: "Objetos na boca podem quebrar dentes e causar engasgo, e ninguém engole a língua durante a crise.",
    ref: "Aula 10 · Convulsão e AVC",
  },
  {
    module: 3,
    question: "No método SAMU para reconhecer um AVC, o que se pede no \"A\"?",
    options: ["Que a pessoa levante os dois braços.", "Que a pessoa abra bem a boca.", "Que a pessoa ande alguns passos.", "Que a pessoa aperte a sua mão."],
    why: "A de Abraço: com os dois braços levantados, veja se um deles cai ou não sobe.",
    ref: "Aula 10 · Convulsão e AVC",
  },
  {
    module: 3,
    question: "Qual destes itens a aula diz para NÃO colocar no kit de primeiros socorros?",
    options: ["Remédios para distribuir sem orientação profissional.", "Luvas descartáveis.", "Tesoura sem ponta.", "Soro fisiológico."],
    why: "Remédio sem orientação pode fazer mal. O kit tem materiais simples para os cuidados iniciais.",
    ref: "Aula 11 · Infarto e o kit de primeiros socorros",
  },
];
