// Desafio final do curso Impressora 3D. Cada partida sorteia 10 destas perguntas,
// equilibradas entre os três módulos. A primeira opção é sempre a certa.
// Segue o padrão de QuizQuestion em app/foundation-lessons.ts.

import type { QuizQuestion } from "../foundation-lessons";

export const DESAFIO_IMPRESSORA_3D: QuizQuestion[] = [
  // Módulo 1: A máquina e os materiais
  {
    module: 0,
    question: "Na impressora 3D de filamento (FDM), como a peça é formada?",
    options: ["Em camadas finas, de baixo para cima", "Esculpida a partir de um bloco de plástico", "Endurecendo resina líquida com luz", "Injetando plástico derretido num molde"],
    why: "A FDM derrete o filamento e desenha a peça camada por camada, cada uma com uns 0,2 mm. Endurecer resina com luz é a impressora de resina (SLA), outro tipo.",
    ref: "Aula 1 · Camada por camada",
  },
  {
    module: 0,
    question: "Dentro do hotend, qual peça separa a parte fria da parte quente?",
    options: ["Garganta (heatbreak)", "Termistor", "Cartucho aquecedor", "Capa de silicone"],
    why: "A garganta é o tubo fino entre o dissipador e o bloco aquecedor. O termistor mede a temperatura, o cartucho esquenta o bloco e a capa protege.",
    ref: "Aula 1 · Por dentro do hotend",
  },
  {
    module: 0,
    question: "A primeira camada saiu transparente, com riscos, e o bico raspou na mesa. O que fazer?",
    options: ["Subir um pouco o bico no Z offset", "Descer um pouco o bico no Z offset", "Aumentar o preenchimento", "Trocar para filamento PETG"],
    why: "Camada transparente e bico raspando quer dizer bico baixo demais. A altura certa deixa as linhas achatadas e unidas.",
    ref: "Aula 1 · Nivelar a mesa e a primeira camada",
  },
  {
    module: 0,
    question: "Qual filamento usar numa capinha que precisa dobrar para encaixar no celular?",
    options: ["TPU", "PLA", "ABS", "PETG"],
    why: "O TPU é emborrachado e flexível. Imprima devagar, com pouca retração, de preferência numa impressora direct drive.",
    ref: "Aula 2 · Os quatro mais usados",
  },
  {
    module: 0,
    question: "A impressão faz estalos, como pipoca, e a peça sai cheia de fiapos. Qual a primeira suspeita?",
    options: ["Filamento úmido", "Bico de 0,4 mm", "Preenchimento baixo", "Mesa nivelada demais"],
    why: "O filamento absorve a umidade do ar. Antes de mexer nas configurações, seque o rolo e guarde com sílica gel.",
    ref: "Aula 2 · Guardar o filamento",
  },

  // Módulo 2: Do desenho à impressão
  {
    module: 1,
    question: "Qual arquivo traz as instruções finais para uma impressora específica?",
    options: ["G-code", "STL", "OBJ", "3MF"],
    why: "STL, OBJ e 3MF são o desenho. O G-code é a receita que o fatiador cria para aquela máquina, por isso não serve em outra.",
    ref: "Aula 3 · Os formatos de arquivo",
  },
  {
    module: 1,
    question: "Um pino precisa entrar num furo impresso. Quanto o furo deve ser maior que o pino?",
    options: ["De 0,2 a 0,4 mm", "Exatamente do mesmo tamanho", "De 2 a 4 mm", "Deve ser 0,2 mm menor"],
    why: "A impressora não é perfeitamente exata. Uma folga de 0,2 a 0,4 mm deixa a peça encaixar sem ficar solta.",
    ref: "Aula 3 · Medir antes de desenhar",
  },
  {
    module: 1,
    question: "Até mais ou menos qual inclinação uma parte da peça sai bem sem suporte?",
    options: ["45°", "15°", "30°", "75°"],
    why: "Até uns 45°, cada camada ainda se apoia um pouco na de baixo. Mais deitada que isso, a parte precisa de suporte.",
    ref: "Aula 4 · Suportes e a regra dos 45°",
  },
  {
    module: 1,
    question: "Qual altura de camada equilibra qualidade e tempo na maioria das peças?",
    options: ["0,20 mm", "0,12 mm", "0,28 mm", "0,40 mm"],
    why: "0,20 mm serve para quase tudo. 0,12 mm dá mais detalhe e demora bem mais; 0,28 mm é rápido, com camadas aparentes.",
    ref: "Aula 4 · Orientação, camadas e paredes",
  },
  {
    module: 1,
    question: "Para imprimir a figura de um bicho, cheia de formas arredondadas, qual suporte combina mais?",
    options: ["Árvore (tree)", "Normal (grade)", "Borda (brim)", "Saia (skirt)"],
    why: "O suporte em árvore toca só os pontos necessários e gasta menos plástico. Borda e saia não são suporte: servem para a peça grudar na mesa.",
    ref: "Aula 4 · Suportes e a regra dos 45°",
  },
  {
    module: 1,
    question: "Qual preenchimento (infill) resolve a maioria das peças?",
    options: ["De 15 a 20%", "5%", "De 50 a 60%", "100%, a peça maciça"],
    why: "15 a 20% sustenta as camadas de cima e economiza plástico e tempo. Mais de 50% só em peças que vão sofrer muita força.",
    ref: "Aula 4 · Preenchimento (infill)",
  },

  // Módulo 3: Problemas, acabamento e custos
  {
    module: 2,
    question: "Os cantos de uma caixa levantaram e ela ficou torta. O que ajuda a resolver?",
    options: ["Limpar a mesa com álcool isopropílico e ativar a borda (brim)", "Imprimir perto do ventilador", "Baixar a temperatura da mesa em 20 °C", "Aumentar o preenchimento para 80%"],
    why: "É o descolamento (warping): o plástico encolhe ao esfriar e puxa as bordas. Mesa limpa, borda, primeira camada bem nivelada e nada de vento ajudam.",
    ref: "Aula 5 · A peça descolou da mesa",
  },
  {
    module: 2,
    question: "Saíram fios finos, como teia de aranha, entre duas torres. Qual ajuste ajuda?",
    options: ["Aumentar a retração", "Aumentar a temperatura do bico em 15 °C", "Trocar a saia pela jangada", "Usar camadas de 0,12 mm"],
    why: "É o stringing. A retração puxa o filamento de volta antes do bico se mover. Secar o filamento e baixar 5 °C no bico também ajudam.",
    ref: "Aula 5 · Fiapos entre as partes",
  },
  {
    module: 2,
    question: "Como se troca o bico da impressora?",
    options: ["Com o hotend quente, segurando o bloco aquecedor com uma chave", "Com o hotend frio, para não se queimar", "Durante a impressão, para não perder tempo", "Puxando o bico com alicate, sem segurar o bloco"],
    why: "Com o bico frio, o plástico de dentro trava a rosca e pode vazar depois. A troca é feita perto de 230 °C, com o bloco firme, e sempre com supervisão.",
    ref: "Aula 5 · Manutenção preventiva",
  },
  {
    module: 2,
    question: "Uma peça usa 50 g de um filamento que custa R$ 100 o quilo. Quanto custa o material?",
    options: ["R$ 5,00", "R$ 0,50", "R$ 50,00", "R$ 2,00"],
    why: "50 g são 0,05 kg. 0,05 × R$ 100 = R$ 5,00. O preço final ainda soma energia, desgaste e a sua margem.",
    ref: "Aula 6 · Quanto custa uma peça",
  },
  {
    module: 2,
    question: "Qual é a ordem certa do acabamento?",
    options: ["Tirar os suportes, lixa grossa, massa, lixa fina, primer e pintura", "Primer, pintura, tirar os suportes e lixa fina", "Pintura, massa, primer e lixa grossa", "Lixa fina, tirar os suportes, pintura e primer"],
    why: "Primeiro saem os suportes e as marcas grandes, com lixa grossa. Depois vem a massa, a lixa fina, o primer para mostrar os defeitos e, por último, a pintura.",
    ref: "Aula 6 · Do suporte à pintura",
  },
];
