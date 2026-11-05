// Curso: Impressora 3D. Seis aulas em três módulos: a máquina e os materiais,
// do desenho à impressão, e problemas, acabamento e custos.
// Segue o padrão de app/foundation-lessons.ts.

import type { CourseContent } from "../foundation-lessons";

export const IMPRESSORA_3D: CourseContent = {
  note: "A impressora tem peças que passam de 200 °C e partes que se mexem sozinhas. Use sempre com alguém que conhece a máquina por perto, e nunca toque no bico ou na mesa enquanto estão quentes.",
  closing: "Agora você conhece o caminho completo: escolher o material, desenhar ou baixar o modelo, fatiar, imprimir, corrigir falhas e calcular o preço. A melhor forma de aprender é imprimir, errar e ajustar. Comece pequeno e vá aumentando o desafio.",
  modules: [
    {
      title: "A máquina e os materiais",
      lessons: [
        {
          id: "como-funciona",
          title: "Como funciona uma impressora 3D",
          summary: "Camada por camada: as partes da máquina, o hotend por dentro e a primeira camada.",
          goals: ["Entender como uma impressora 3D cria um objeto", "Reconhecer as principais partes da impressora", "Saber o que tem dentro do hotend", "Nivelar a mesa e avaliar a primeira camada"],
          sections: [
            {
              title: "Camada por camada",
              body: [
                { image: "/images/fundacao/aulas/impressora-3d/impressora-na-bancada.webp", alt: "Impressora 3D azul numa bancada, imprimindo a palavra Ranbank em plástico azul. Ao lado, um monitor com o logo do Ranbank, um rolo de filamento azul em cima da máquina e peças impressas espalhadas pela mesa, como um vaso torcido e um alicate." },
                "A impressora 3D mais comum derrete um fio de plástico, chamado filamento, e desenha a peça em camadas finas, de baixo para cima. Cada camada tem uns 0,2 mm, a espessura de duas folhas de papel. Esse jeito de imprimir se chama FDM.",
                { box: "exemplo", text: "Pense numa pistola de cola quente presa num braço de robô. Ela desenha um contorno na mesa, sobe um pouquinho, desenha o próximo por cima, e assim por diante, até a peça ficar pronta." },
                "Existe também a impressora de resina, que endurece um líquido com luz. Ela faz peças com muito detalhe, mas é mais cara de manter e exige luvas, ventilação e lavagem das peças.",
                { table: { caption: "Os dois tipos mais comuns", head: ["Tipo", "Como funciona", "Bom para"], rows: [
                  ["Filamento (FDM)", "Derrete um fio de plástico e desenha camada por camada", "Peças do dia a dia, protótipos, peças de reposição"],
                  ["Resina (SLA)", "Endurece resina líquida com luz", "Miniaturas e peças com muitos detalhes"],
                ] } },
                { box: "chave", text: "Toda impressão 3D é feita em camadas. Quase tudo neste curso (material, fatiador, falhas) tem a ver com fazer essas camadas saírem certas e bem grudadas umas nas outras." },
              ],
            },
            {
              title: "As partes da impressora",
              body: [
                { list: [
                  "Mesa: a base onde a peça é impressa. Quase sempre é aquecida, para o plástico grudar.",
                  "Eixos X, Y e Z: X e Y movem o bico para os lados e para frente e trás; Z sobe a cada camada.",
                  "Motores e correias: fazem os eixos andarem com precisão.",
                  "Extrusora: um motor com engrenagens que puxa o filamento do rolo e empurra para o bico.",
                  "Hotend: a parte quente, que derrete o plástico.",
                  "Bico: o furo por onde o plástico sai. O mais comum tem 0,4 mm.",
                  "Ventoinhas: esfriam a peça e protegem as partes que não podem esquentar.",
                  "Sensores de fim de curso: avisam a impressora onde cada eixo começa.",
                ] },
                "A extrusora pode ficar em cima do hotend (direct drive) ou longe dele, ligada por um tubo (Bowden). A direct drive controla melhor o filamento e imprime plástico flexível com mais facilidade; a Bowden deixa a cabeça mais leve e rápida.",
              ],
            },
            {
              title: "Por dentro do hotend",
              body: [
                { image: "/images/fundacao/aulas/impressora-3d/hotend-desmontado.webp", alt: "Quatro fotos em sequência mostrando a desmontagem de um hotend, com luvas azuis. Passo 1: tirar a capa do hotend com uma chave Allen. Passo 2: as peças separadas, com nomes: dissipador de calor, garganta (heatbreak), bloco aquecedor, bico de 0,4 mm, cartucho aquecedor, termistor e capa de silicone. Passo 3: soltar a garganta do bloco aquecedor com alicate e chave de boca. Passo 4: todas as peças e ferramentas organizadas numa bancada." },
                { list: [
                  "Dissipador de calor: aletas de metal com uma ventoinha, que mantêm a parte de cima fria.",
                  "Garganta (heatbreak): tubo fino que separa a parte fria da parte quente.",
                  "Bloco aquecedor: bloco de metal onde o plástico derrete.",
                  "Cartucho aquecedor: a \"resistência\" que esquenta o bloco.",
                  "Termistor: o sensor que mede a temperatura do bloco.",
                  "Bico: rosqueado embaixo do bloco, é por onde o plástico sai.",
                  "Capa de silicone: protege o bloco e ajuda a manter a temperatura.",
                ] },
                "O filamento entra frio por cima, passa pela garganta e só derrete no bloco. Se o calor subir demais, o plástico amolece antes da hora e entope o caminho. Por isso a ventoinha do dissipador fica sempre ligada.",
                { box: "atencao", text: "O bloco e o bico passam de 200 °C. Não toque neles com a impressora ligada e espere esfriar antes de mexer. Desmontar o hotend só com orientação de quem conhece a máquina." },
              ],
            },
            {
              title: "Nivelar a mesa e a primeira camada",
              body: [
                "Se a mesa estiver torta ou longe demais do bico, a peça não gruda. Muitas impressoras nivelam sozinhas com um sensor; nas outras, o ajuste é feito com uma folha de papel:",
                { list: [
                  "Aqueça a mesa e o bico, como se fosse imprimir.",
                  "Mande a impressora para a posição inicial (Home).",
                  "Leve o bico até um canto e coloque uma folha de papel sulfite entre o bico e a mesa.",
                  "Gire o parafuso daquele canto até o papel arrastar de leve no bico, sem rasgar.",
                  "Repita nos quatro cantos e no centro. Depois, confira tudo de novo.",
                ], ordered: true },
                "O ajuste fino é feito no Z offset, um número no menu da impressora que sobe ou desce o bico em centésimos de milímetro.",
                { table: { caption: "Como ler a primeira camada", head: ["O que aparece", "O que quer dizer"], rows: [
                  ["Linhas redondas, separadas, que soltam com a unha", "Bico alto demais: desça um pouco"],
                  ["Linhas achatadas, unidas, superfície lisa", "Altura certa"],
                  ["Camada transparente, com riscos ou o bico raspando", "Bico baixo demais: suba um pouco"],
                ] } },
                { box: "pratica", text: "Faça o nivelamento em dupla: uma pessoa gira os parafusos e a outra sente o papel. Depois, imprima um quadrado fino de teste e avaliem juntos a primeira camada." },
              ],
            },
          ],
          activity: {
            title: "Siga o caminho do filamento",
            steps: [
              "Com a impressora desligada e fria, encontre a mesa, os eixos X, Y e Z, a extrusora, o hotend e o bico.",
              "Descubra se a sua impressora é direct drive ou Bowden.",
              "Descreva, em ordem, o caminho que o filamento faz do rolo até a mesa.",
            ],
            answer: "Rolo → extrusora (que puxa e empurra o fio) → tubo, se for Bowden → hotend (dissipador, garganta e bloco aquecedor, onde derrete) → bico → mesa. Se a extrusora fica em cima do hotend, sem tubo comprido no meio, ela é direct drive.",
          },
          recap: ["A impressora FDM derrete filamento e monta a peça camada por camada.", "No hotend, o plástico só pode derreter no bloco aquecedor, nunca antes.", "A primeira camada certa é achatada e unida: ajuste a altura do bico até chegar nela."],
        },
        {
          id: "filamentos",
          title: "Filamentos: qual plástico usar",
          summary: "PLA, PETG, ABS e TPU: temperaturas, usos, como guardar e segurança.",
          goals: ["Conhecer os quatro filamentos mais usados", "Escolher o material certo para cada peça", "Guardar o filamento longe da umidade", "Trabalhar com segurança no laboratório"],
          sections: [
            {
              title: "O que é filamento",
              body: [
                "Filamento é um fio de plástico, quase sempre com 1,75 mm de espessura, vendido em rolos de 1 kg. Ele é um termoplástico: amolece com o calor e endurece de novo quando esfria. É isso que permite derreter, desenhar e deixar a peça firmar.",
                "Cada plástico derrete numa temperatura diferente e tem um jeito próprio: uns são mais duros, outros aguentam calor, outros dobram sem quebrar.",
              ],
            },
            {
              title: "Os quatro mais usados",
              body: [
                { table: { caption: "Temperaturas de referência (confira sempre o que diz a embalagem)", head: ["Material", "Bico", "Mesa", "Bom para"], rows: [
                  ["PLA", "190 a 215 °C", "50 a 60 °C", "Decoração, protótipos, primeiros projetos. É o mais fácil."],
                  ["PETG", "230 a 250 °C", "70 a 80 °C", "Peças que fazem força, pegam umidade ou ficam ao ar livre"],
                  ["ABS e ASA", "240 a 260 °C", "90 a 110 °C", "Peças que esquentam. Pede impressora fechada."],
                  ["TPU", "210 a 230 °C", "até 60 °C", "Peças flexíveis: capinhas, pés de borracha, vedações"],
                ] } },
                { list: [
                  "PLA: feito de fontes vegetais, como o milho. É fácil de imprimir, mas amolece no calor (dentro de um carro no sol, por exemplo). Só se decompõe em usinas de compostagem, não no lixo comum.",
                  "PETG: o mesmo plástico das garrafas, mais resistente a impacto e à água. Gruda muito na mesa: use uma camada de cola ou laquê se a mesa for de vidro.",
                  "ABS e ASA: aguentam calor e pancada, mas encolhem ao esfriar e soltam cheiro forte. O ASA aguenta melhor o sol.",
                  "TPU: emborrachado. Imprima devagar, com pouca retração, de preferência em impressora direct drive.",
                ] },
                { box: "chave", text: "Na dúvida, comece com PLA. Troque de material só quando a peça precisar de algo que o PLA não dá, como aguentar calor, sol ou dobrar." },
              ],
            },
            {
              title: "Guardar o filamento",
              body: [
                "O filamento absorve a umidade do ar. Filamento úmido faz estalos no bico, bolhas na peça e muitos fiapos.",
                { list: [
                  "Guarde os rolos em caixas ou sacos fechados, com saquinhos de sílica gel.",
                  "Depois de usar, prenda a ponta do fio no furo do rolo, para não desenrolar e embolar.",
                  "Se o filamento já pegou umidade, seque num secador de filamento antes de imprimir.",
                ] },
                { box: "exemplo", text: "A impressão começou a fazer barulhinhos de pipoca e a peça ficou cheia de fiapos? Antes de mexer nas configurações, desconfie do filamento úmido." },
              ],
            },
            {
              title: "Segurança no laboratório",
              body: [
                { image: "/images/fundacao/aulas/impressora-3d/maker-lab.webp", alt: "Laboratório com a placa luminosa \"Ranbank Maker Lab\" na parede. Em primeiro plano, uma impressora 3D preta imprimindo o logo do Ranbank, ao lado de um monitor, uma caixa de ferramentas, engrenagens e vasos azuis impressos e rolos de filamento azul e branco. Ao fundo, duas pessoas trabalham em bancadas." },
                { list: [
                  "Ventilação: plástico derretido solta gases e partículas finas. Deixe o ambiente arejado; ABS e ASA pedem impressora fechada com filtro ou exaustão.",
                  "Calor: mesa e bico ficam quentes por um bom tempo depois de desligar.",
                  "Eletricidade: ligue a impressora numa tomada própria, sem benjamim nem extensão improvisada.",
                  "Firmware: confira se a proteção contra superaquecimento (thermal runaway) está ativada. Ela desliga o aquecimento se algo der errado.",
                  "Supervisão: não deixe a impressora ligada sem ninguém por perto, principalmente nas primeiras horas de uma impressão.",
                ] },
                { box: "atencao", text: "Sentiu cheiro de queimado, viu fumaça ou a temperatura ficou maluca na tela? Desligue a impressora no botão e tire da tomada. Não abra a máquina quente." },
              ],
            },
          ],
          activity: {
            title: "Escolha o material",
            steps: [
              "Um chaveiro para dar de presente.",
              "Um suporte de vaso que vai ficar no quintal, no sol e na chuva.",
              "Uma capinha que precisa dobrar para encaixar no celular.",
              "Uma peça que fica perto de algo quente, como um motor.",
            ],
            answer: "1) PLA: fácil e bonito. 2) PETG ou ASA: aguentam água e sol. 3) TPU: é flexível. 4) ABS ou ASA: aguentam calor (lembrando que pedem impressora fechada).",
          },
          recap: ["PLA para começar, PETG para força e umidade, ABS e ASA para calor, TPU para flexibilidade.", "Filamento úmido estraga a impressão: guarde fechado, com sílica gel.", "Ambiente ventilado, tomada própria e alguém sempre por perto."],
        },
      ],
    },
    {
      title: "Do desenho à impressão",
      lessons: [
        {
          id: "modelagem",
          title: "Desenhar ou baixar o modelo",
          summary: "Formatos de arquivo, sites de modelos prontos, medir com paquímetro e desenhar no Tinkercad.",
          goals: ["Diferenciar STL, OBJ, 3MF e G-code", "Baixar modelos prontos respeitando a licença", "Medir uma peça com o paquímetro", "Desenhar uma peça simples no Tinkercad"],
          sections: [
            {
              title: "Os formatos de arquivo",
              body: [
                { table: { caption: "Arquivos que aparecem na impressão 3D", head: ["Formato", "O que guarda"], rows: [
                  ["STL", "Só a forma da peça, feita de pequenos triângulos. É o mais comum."],
                  ["OBJ", "A forma e, às vezes, cores e texturas."],
                  ["3MF", "A forma, as cores e as configurações de impressão, tudo num arquivo só."],
                  ["G-code", "As instruções finais para a impressora, criadas pelo fatiador."],
                ] } },
                "O G-code é uma lista de comandos, linha por linha. Uma linha como \"G1 X50 Y20 E0.5\" quer dizer: vá até o ponto 50, 20 empurrando meio milímetro de filamento. Você não precisa escrever G-code: o fatiador faz isso.",
                { box: "chave", text: "STL, OBJ e 3MF são o desenho. O G-code é a receita para aquela impressora específica. Por isso um G-code feito para uma máquina não serve em outra." },
              ],
            },
            {
              title: "Baixar modelos prontos",
              body: [
                "Antes de desenhar, veja se alguém já fez. Sites como Printables, MakerWorld e Thingiverse têm milhares de modelos gratuitos.",
                { list: [
                  "Veja as fotos de quem já imprimiu: elas mostram se o modelo funciona de verdade.",
                  "Leia os comentários: muitas vezes alguém já explicou a melhor posição ou o material ideal.",
                  "Confira a licença: alguns modelos são só para uso pessoal e não podem ser vendidos.",
                ] },
                { box: "atencao", text: "Respeite quem criou o modelo. Se a licença pede crédito, cite o autor; se proíbe uso comercial, não venda a peça." },
              ],
            },
            {
              title: "Medir antes de desenhar",
              body: [
                "Para fazer uma peça que encaixa em outra (uma tampa, um botão, um suporte), é preciso medir direito. A ferramenta para isso é o paquímetro, que mede em milímetros.",
                { list: [
                  "Feche o paquímetro e confira se ele marca zero.",
                  "Abra, encoste as pontas na peça sem apertar demais e leia a medida.",
                  "Meça duas ou três vezes e anote tudo num rascunho, com um desenho à mão.",
                ], ordered: true },
                "A impressora não é perfeitamente exata. Para peças que encaixam, deixe uma folga: o furo precisa ser de 0,2 a 0,4 mm maior que o pino que entra nele.",
                { box: "exemplo", text: "Quebrou a tampa do controle remoto? Meça a tampa velha (ou o espaço onde ela entra), desenhe com essas medidas, imprima e teste. Se ficar justa demais, aumente a folga e imprima de novo." },
              ],
            },
            {
              title: "Desenhar no Tinkercad",
              body: [
                "O Tinkercad é gratuito e funciona no navegador. Você monta a peça juntando formas simples, como peças de montar.",
                { list: [
                  "Crie uma conta e abra um novo projeto 3D.",
                  "Arraste formas básicas (caixa, cilindro, esfera) para a área de trabalho.",
                  "Clique na forma e digite as medidas exatas em milímetros.",
                  "Para fazer um furo, transforme uma forma em \"Furo\" e encaixe na outra.",
                  "Selecione tudo e clique em \"Agrupar\" para virar uma peça só.",
                  "Exporte em STL ou 3MF.",
                ], ordered: true },
                "Quando quiser peças mais precisas ou mecânicas, o próximo passo é um programa como o Fusion, que tem licença gratuita para estudantes e uso pessoal.",
              ],
            },
          ],
          activity: {
            title: "Desenhe um chaveiro",
            steps: [
              "No Tinkercad, crie uma caixa de 40 × 20 × 3 mm.",
              "Coloque um cilindro de 5 mm de diâmetro como \"Furo\" perto de uma das pontas.",
              "Escreva o seu nome com a ferramenta de texto, com 1 mm de altura, em cima da caixa.",
              "Agrupe tudo e exporte em STL. Guarde o arquivo: ele vai ser usado na próxima aula.",
            ],
            answer: "Confira: o furo atravessa a peça inteira? O texto está encostado na caixa, sem ficar flutuando? Se as duas respostas forem sim, o chaveiro está pronto para fatiar.",
          },
          recap: ["STL, OBJ e 3MF são o desenho; o G-code é a receita para a impressora.", "Antes de desenhar, procure um modelo pronto e respeite a licença.", "Meça com paquímetro e deixe folga de 0,2 a 0,4 mm nos encaixes."],
        },
        {
          id: "fatiador",
          title: "Fatiador: preparando a impressão",
          summary: "Orientação, camadas, preenchimento, suportes e aderência à mesa.",
          goals: ["Entender o que o fatiador faz", "Escolher altura de camada, paredes e preenchimento", "Decidir quando usar suporte e de qual tipo", "Conferir a impressão antes de enviar para a máquina"],
          sections: [
            {
              title: "O que o fatiador faz",
              body: [
                "O fatiador é o programa que corta o modelo em fatias e cria o G-code. Os mais usados são gratuitos: OrcaSlicer, PrusaSlicer e UltiMaker Cura.",
                { list: [
                  "Escolha o perfil da sua impressora e do filamento. Os perfis já trazem temperaturas e velocidades certas.",
                  "Arraste o arquivo STL ou 3MF para a mesa virtual.",
                  "Se aparecer um aviso de erro na malha (furos ou faces viradas), use a opção de consertar do próprio programa.",
                  "Confira o tamanho em milímetros. Modelos baixados às vezes vêm em outra escala.",
                ], ordered: true },
              ],
            },
            {
              title: "Orientação, camadas e paredes",
              body: [
                "Gire a peça para que a parte mais plana fique encostada na mesa. Isso ajuda a grudar e diminui o suporte.",
                "A peça é mais fraca entre uma camada e outra. Se ela vai fazer força numa direção, deite a peça de forma que as camadas não fiquem na mesma direção da força.",
                { table: { caption: "Altura de camada", head: ["Altura", "Resultado", "Quando usar"], rows: [
                  ["0,12 mm", "Mais detalhe, bem mais lento", "Miniaturas e rostos"],
                  ["0,20 mm", "Equilíbrio entre qualidade e tempo", "A maioria das peças"],
                  ["0,28 mm", "Rápido, camadas aparentes", "Rascunhos e peças grandes"],
                ] } },
                "As paredes (perímetros) são o contorno da peça. Duas paredes servem para peças decorativas; use três ou quatro em peças que vão fazer força.",
              ],
            },
            {
              title: "Preenchimento (infill)",
              body: [
                "Quase nenhuma peça é impressa maciça. Por dentro, o fatiador desenha uma estrutura com espaços vazios, que sustenta as camadas de cima e economiza plástico e tempo.",
                { list: [
                  "15 a 20% de preenchimento resolve a maioria das peças.",
                  "Giroide: forma ondulada, resistente em todas as direções.",
                  "Grade: mais simples e rápida.",
                  "Mais de 50% só em peças que vão sofrer muita força.",
                ] },
                { box: "exemplo", text: "É como o favo de mel: as abelhas usam pouca cera e, mesmo assim, a estrutura aguenta muito peso." },
              ],
            },
            {
              title: "Suportes e a regra dos 45°",
              body: [
                "A impressora não consegue imprimir no ar. Partes inclinadas até uns 45° saem bem, porque cada camada se apoia um pouco na de baixo. Mais deitadas que isso precisam de suporte. Pontes curtas, de um lado a outro, costumam sair sem suporte.",
                { table: { caption: "Tipos de suporte", head: ["Tipo", "Como é", "Bom para"], rows: [
                  ["Normal (grade)", "Colunas retas embaixo de toda a parte no ar", "Superfícies planas e grandes"],
                  ["Árvore (tree)", "Galhos que tocam só os pontos necessários", "Figuras, bichos e formas arredondadas. Gasta menos plástico."],
                ] } },
                "A distância entre o suporte e a peça (distância Z) fica perto da altura de uma camada, cerca de 0,2 mm. Assim o suporte segura, mas solta fácil depois.",
                { box: "pratica", text: "Antes de ligar o suporte, tente girar a peça. Muitas vezes uma posição diferente elimina o suporte e deixa o acabamento melhor." },
              ],
            },
            {
              title: "Aderência e conferência final",
              body: [
                { list: [
                  "Saia (skirt): uma linha em volta da peça, sem encostar nela, para o bico começar a soltar plástico.",
                  "Borda (brim): uma aba grudada na base da peça, que segura os cantos. Ajuda muito contra o descolamento.",
                  "Jangada (raft): uma base inteira embaixo da peça. Hoje quase não é preciso.",
                ] },
                "Limpe a mesa com álcool isopropílico antes de imprimir: gordura dos dedos é a maior inimiga da aderência.",
                "Depois de fatiar, olhe a pré-visualização camada por camada. Confira se nada está flutuando, veja o tempo estimado e quantos gramas de filamento vão ser usados. Então envie para a impressora por cartão de memória, pen drive ou Wi-Fi.",
                { box: "chave", text: "Fatiar bem é decidir com calma antes de gastar plástico: posição, camada, paredes, preenchimento, suporte e aderência." },
              ],
            },
          ],
          activity: {
            title: "Fatie o seu chaveiro",
            steps: [
              "Abra o fatiador e escolha o perfil da impressora e do PLA.",
              "Importe o chaveiro da aula anterior, deitado, com o texto para cima.",
              "Use camada de 0,20 mm, 2 paredes e 15% de preenchimento giroide, sem suporte e com saia.",
              "Fatie e anote o tempo e os gramas. Depois, veja a pré-visualização camada por camada.",
            ],
            answer: "Um chaveiro plano não precisa de suporte, porque nada fica no ar. Ele costuma levar menos de uma hora e gastar menos de 10 gramas. Na pré-visualização, as letras só começam a aparecer nas últimas camadas.",
          },
          recap: ["O fatiador transforma o desenho em G-code para a sua impressora.", "Camada de 0,20 mm, 15 a 20% de preenchimento e a parte plana na mesa servem para quase tudo.", "Suporte só passando de 45°; árvore para formas arredondadas, normal para planas."],
        },
      ],
    },
    {
      title: "Problemas, acabamento e custos",
      lessons: [
        {
          id: "problemas-e-manutencao",
          title: "Problemas comuns e manutenção",
          summary: "Descolamento, fiapos, entupimento, bolha no hotend e os cuidados de rotina.",
          goals: ["Reconhecer as falhas mais comuns pela aparência", "Saber o que ajustar em cada caso", "Limpar o bico e o hotend com segurança", "Manter a impressora em dia"],
          sections: [
            {
              title: "A peça descolou da mesa (warping)",
              body: [
                "Os cantos levantam e a peça entorta ou sai do lugar. Acontece porque o plástico encolhe ao esfriar e puxa as bordas para cima.",
                { list: [
                  "Limpe a mesa com álcool isopropílico.",
                  "Ative a borda (brim) no fatiador.",
                  "Confira o nivelamento e o Z offset: a primeira camada precisa estar achatada.",
                  "Aumente a temperatura da mesa em 5 °C.",
                  "Afaste a impressora de janelas, ventiladores e ar-condicionado.",
                ] },
              ],
            },
            {
              title: "Fiapos entre as partes (stringing)",
              body: [
                "Aparecem fios finos, como teia de aranha, entre partes separadas da peça. É o plástico que escorre do bico enquanto ele se move de um ponto a outro.",
                { list: [
                  "Seque o filamento: umidade é uma das maiores causas.",
                  "Aumente a retração, que puxa o filamento de volta antes do movimento. Em geral, de 0,5 a 2 mm na direct drive e de 2 a 6 mm na Bowden.",
                  "Baixe a temperatura do bico em 5 °C.",
                ] },
                { box: "pratica", text: "Mude uma coisa de cada vez e imprima um teste pequeno. Se mudar tudo junto, você não descobre o que resolveu." },
              ],
            },
            {
              title: "Falta de plástico e entupimento",
              body: [
                "A peça sai com falhas, buracos ou camadas fracas, e às vezes a extrusora dá estalos. É a sub-extrusão: está saindo menos plástico do que deveria.",
                { list: [
                  "Temperatura do bico baixa para aquele material.",
                  "Bico parcialmente entupido.",
                  "Filamento úmido, embolado no rolo ou preso.",
                ] },
                "Para limpar o bico, existe a puxada a frio (cold pull): aqueça o bico, empurre o filamento até sair, deixe esfriar até uns 90 °C (para o PLA) e puxe o fio com firmeza. A ponta sai com a sujeira de dentro. Se não resolver, troque o bico.",
              ],
            },
            {
              title: "Bolha de plástico no hotend",
              body: [
                { image: "/images/fundacao/aulas/impressora-3d/limpeza-do-hotend.webp", alt: "Quatro fotos em sequência, com luvas azuis. Passo 1: o problema, uma bolha de plástico vermelho grudada embaixo do hotend. Passo 2: com o hotend aquecido, o plástico é retirado com uma pinça. Passo 3: num hotend desmontado, um soprador térmico amolece o resto do plástico (uso cuidadoso). Passo 4: o hotend limpo e pronto para imprimir." },
                "Às vezes a peça solta da mesa e o plástico continua saindo, formando uma bola em volta do bloco aquecedor. Quanto antes você perceber, mais fácil de limpar.",
                { list: [
                  "Pare a impressão.",
                  "Aqueça o bico até a temperatura do material, para o plástico amolecer.",
                  "Com luvas e pinça, retire o plástico aos poucos, sem forçar os fios.",
                  "Se a capa de silicone estiver rasgada ou queimada, troque.",
                ], ordered: true },
                { box: "atencao", text: "Soprador térmico e desmontagem do hotend só com supervisão. Os fios do termistor e do cartucho aquecedor são finos e quebram fácil." },
              ],
            },
            {
              title: "Manutenção preventiva",
              body: [
                { table: { caption: "Rotina de cuidados", head: ["Quando", "O que fazer"], rows: [
                  ["A cada impressão", "Limpar a mesa com álcool isopropílico e tirar restos de plástico"],
                  ["Toda semana", "Conferir se as correias estão esticadas e limpar a poeira dos eixos"],
                  ["Todo mês", "Lubrificar o fuso do eixo Z e reapertar parafusos e rodinhas"],
                  ["Quando precisar", "Trocar o bico gasto ou entupido"],
                ] } },
                "A troca do bico é feita com o hotend quente (perto de 230 °C), segurando o bloco aquecedor com uma chave para não entortar nada. Com o bico frio, o plástico de dentro trava a rosca e pode vazar depois.",
                "Melhorias que fazem diferença: mesa magnética de PEI (a peça solta só de dobrar a chapa), sensor de nivelamento automático e tubo de PTFE de boa qualidade nas impressoras Bowden.",
              ],
            },
          ],
          activity: {
            title: "Hospital de impressoras",
            steps: [
              "Os cantos de uma caixa levantaram e ela ficou torta.",
              "Duas torres saíram ligadas por fios finos, como teia.",
              "A peça saiu com linhas faltando e a extrusora fez estalos.",
              "A primeira camada saiu transparente, com riscos, e o bico raspou na mesa.",
            ],
            answer: "1) Descolamento (warping): limpar a mesa, usar borda e aquecer um pouco mais a mesa. 2) Fiapos (stringing): secar o filamento, aumentar a retração ou baixar a temperatura. 3) Sub-extrusão: conferir a temperatura, fazer a puxada a frio ou trocar o bico. 4) Bico baixo demais: subir um pouco o Z offset.",
          },
          recap: ["Descolou: mesa limpa, borda e primeira camada bem nivelada.", "Fiapos: filamento seco e retração ajustada. Falhas: bico limpo e temperatura certa.", "Uma rotina simples de limpeza evita a maioria dos problemas."],
        },
        {
          id: "acabamento-e-custos",
          title: "Acabamento e custo da peça",
          summary: "Tirar suportes, lixar, pintar e calcular quanto custa cada peça.",
          goals: ["Dar acabamento a uma peça impressa", "Calcular o custo real de uma impressão", "Definir um preço justo para vender", "Planejar um projeto do começo ao fim"],
          sections: [
            {
              title: "Do suporte à pintura",
              body: [
                { list: [
                  "Tirar os suportes: com alicate de corte e espátula, devagar, puxando na direção do suporte.",
                  "Lixar grosso: lixa 120 ou 220 para tirar marcas de suporte e rebarbas.",
                  "Preencher: massa plástica ou massa de acabamento nos buracos e nas marcas das camadas.",
                  "Lixar fino: lixas 400, 600 e 800, de preferência com água.",
                  "Primer: uma demão fina, que mostra os defeitos que faltam e ajuda a tinta a grudar.",
                  "Pintura: spray ou pincel, em camadas finas.",
                ], ordered: true },
                "Peças de ABS podem ficar lisas e brilhantes com vapor de acetona, que derrete só a superfície. No PLA isso não funciona.",
                { box: "atencao", text: "Use óculos e máscara para lixar e pintar. Acetona é inflamável e solta vapor forte: só com supervisão, em local aberto e longe de fogo." },
              ],
            },
            {
              title: "Quanto custa uma peça",
              body: [
                "O preço de uma peça impressa vai muito além do plástico. Some quatro partes:",
                { list: [
                  "Material: peso da peça (o fatiador mostra) × preço do quilo do filamento.",
                  "Energia: potência da impressora em kW × horas de impressão × preço do kWh da conta de luz.",
                  "Desgaste: um valor por hora para guardar dinheiro para bicos, correias, mesa e consertos.",
                  "Margem: o seu trabalho de desenhar, preparar, acompanhar e dar acabamento, e o lucro.",
                ] },
                "Use a calculadora abaixo com os números da sua peça. Os valores já preenchidos são só um exemplo.",
                { tool: "custo-impressao-3d" },
                { box: "exemplo", text: "Uma peça de 50 g, com filamento de R$ 100 o quilo, impressa em 3 horas numa máquina de 150 W, com energia a R$ 1,00 o kWh: material R$ 5,00, energia R$ 0,45 e desgaste de R$ 0,75 (R$ 0,25 por hora). Custo de R$ 6,20. Com margem de 50%, o preço fica em R$ 9,30." },
                { box: "chave", text: "Quem cobra só o plástico trabalha de graça. Tempo de máquina, energia e desgaste também são custo." },
              ],
            },
            {
              title: "O projeto final",
              body: [
                "Para fechar o curso, faça um projeto inteiro, do problema à peça pronta:",
                { list: [
                  "Escolha um problema real: uma peça quebrada, um organizador, um suporte, um brinde.",
                  "Meça, desenhe (ou baixe e adapte) e fatie.",
                  "Imprima, corrija o que der errado e imprima de novo, se precisar.",
                  "Dê acabamento e calcule o custo.",
                  "Apresente: qual era o problema, como você resolveu, o que deu errado no caminho e quanto custou.",
                ], ordered: true },
                { box: "pratica", text: "Guarde as peças que deram errado. Na apresentação, elas mostram o que você aprendeu tanto quanto a peça final." },
              ],
            },
          ],
          activity: {
            title: "Calcule o preço",
            steps: [
              "Uma luminária de 120 g, impressa em 6 horas.",
              "O filamento custa R$ 110 o quilo, a impressora usa 200 W e o kWh custa R$ 0,95.",
              "Considere R$ 0,40 por hora de desgaste e margem de 60%.",
              "Quanto custa a peça e por quanto vender? Confira na calculadora.",
            ],
            answer: "Material: 0,12 kg × R$ 110 = R$ 13,20. Energia: 0,2 kW × 6 h × R$ 0,95 = R$ 1,14. Desgaste: 6 h × R$ 0,40 = R$ 2,40. Custo: R$ 16,74. Preço com 60% de margem: R$ 16,74 × 1,6 = R$ 26,78.",
          },
          recap: ["Acabamento é por etapas: tirar suporte, lixar do grosso ao fino, primer e pintura.", "Custo = material + energia + desgaste; o preço ainda soma a sua margem.", "Um bom projeto resolve um problema real e mostra o caminho, inclusive os erros."],
        },
      ],
    },
  ],
};
