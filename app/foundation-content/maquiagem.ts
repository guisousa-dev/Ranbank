// Curso: Maquiagem. 3 módulos (pele, técnicas e cuidados com os produtos), 5 aulas.
// Segue o padrão de app/foundation-lessons.ts. Linguagem neutra: maquiagem é para quem quiser.

import type { CourseContent } from "../foundation-lessons";

export const MAQUIAGEM: CourseContent = {
  note: "Se tiver pele sensível, alergia ou alguma doença de pele, teste cada produto antes num pedaço pequeno da pele e, na dúvida, fale com um dermatologista.",
  closing: "Agora você sabe preparar a pele, escolher o tom certo, fazer uma maquiagem rápida e uma produção para festa, e cuidar dos seus produtos. Maquiagem é treino e expressão: teste, erre, tire e faça de novo. Não existe um jeito certo de ser você.",
  modules: [
    {
      title: "A pele em primeiro lugar",
      lessons: [
        {
          id: "preparar-a-pele",
          title: "Preparar e cuidar da pele",
          summary: "Tipos de pele, limpeza, hidratação, protetor solar e como tirar a maquiagem.",
          goals: ["Descobrir o seu tipo de pele", "Preparar a pele antes da maquiagem", "Tirar a maquiagem do jeito certo"],
          sections: [
            {
              title: "Qual é o seu tipo de pele",
              body: [
                { table: { caption: "Tipos de pele", head: ["Tipo", "Como é", "O que procurar"], rows: [
                  ["Oleosa", "Brilha ao longo do dia, poros mais visíveis", "Produtos \"oil free\" e com acabamento matte"],
                  ["Seca", "Repuxa, pode descamar, quase não brilha", "Hidratantes mais ricos e bases com acabamento iluminado"],
                  ["Mista", "Oleosa na testa, no nariz e no queixo (a zona T) e normal ou seca no resto", "Cuidar de cada área com o que ela precisa"],
                  ["Normal", "Equilibrada, sem muito brilho nem ressecamento", "Quase tudo funciona; foco em manter"],
                ] } },
                { box: "pratica", text: "Lave o rosto com sabonete suave, não passe nada e espere uma hora. Depois, encoste um lenço de papel na testa, no nariz e nas bochechas. Muito óleo em tudo: pele oleosa. Óleo só na zona T: mista. Nada e pele repuxando: seca." },
              ],
            },
            {
              title: "A preparação",
              body: [
                { list: [
                  "Limpeza: lave o rosto com um sabonete próprio para o rosto.",
                  "Hidratação: um hidratante adequado ao seu tipo de pele, até em pele oleosa (em gel, nesse caso).",
                  "Protetor solar: todos os dias, mesmo nublado. Pode ser um hidratante que já tenha FPS.",
                  "Primer (opcional): ajuda a maquiagem a durar mais e a disfarçar poros.",
                ], ordered: true },
                { box: "chave", text: "Maquiagem bonita começa numa pele bem cuidada. Os produtos parecem melhores e duram mais." },
              ],
            },
            {
              title: "Tirar a maquiagem",
              body: [
                "Dormir de maquiagem entope os poros, irrita os olhos e pode causar espinhas.",
                { list: [
                  "Use um demaquilante (água micelar, óleo ou leite de limpeza) num algodão, sem esfregar com força.",
                  "Para os olhos, segure o algodão com demaquilante por alguns segundos antes de deslizar, para soltar o rímel.",
                  "Depois, lave o rosto com sabonete e passe hidratante.",
                ], ordered: true },
                { box: "atencao", text: "Antes de usar um produto novo, teste na parte de dentro do braço ou atrás da orelha e espere um dia. Se coçar, arder ou ficar vermelho, não use." },
              ],
            },
          ],
          activity: {
            title: "Minha rotina de pele",
            steps: [
              "Faça o teste do lenço e descubra o seu tipo de pele.",
              "Liste o que você já tem em casa para limpar, hidratar e proteger a pele.",
              "Monte a sua rotina da manhã e da noite com o que tem.",
            ],
            answer: "Uma rotina simples já funciona. Manhã: limpar, hidratar e passar protetor solar. Noite: tirar a maquiagem (se usou), limpar e hidratar. Não precisa de muitos produtos: precisa de constância.",
          },
          recap: ["Conhecer o tipo de pele ajuda a escolher os produtos.", "Limpar, hidratar e proteger do sol antes de maquiar.", "Sempre tire a maquiagem antes de dormir."],
        },
      ],
    },
    {
      title: "Técnicas",
      lessons: [
        {
          id: "base-e-corretivo",
          title: "Base e corretivo no seu tom",
          summary: "Subtom, teste da base, corretivo para olheiras e correção de cor.",
          goals: ["Descobrir o seu subtom", "Testar e escolher a base certa", "Usar corretivo e correção de cor"],
          sections: [
            {
              title: "Tom e subtom",
              body: [
                "O tom é o quanto a pele é clara ou escura. O subtom é a cor que fica \"por baixo\": quente (puxa para o amarelado ou dourado), frio (puxa para o rosado) ou neutro (um pouco dos dois).",
                { table: { caption: "Pistas do seu subtom", head: ["Teste", "Quente", "Frio"], rows: [
                  ["Veias do pulso, na luz do dia", "Parecem esverdeadas", "Parecem azuladas ou arroxeadas"],
                  ["Joias", "O dourado fica melhor", "O prateado fica melhor"],
                  ["No sol", "Bronzeia fácil", "Fica vermelho fácil"],
                ] } },
                "Se as respostas se misturam, o seu subtom provavelmente é neutro.",
              ],
            },
            {
              title: "Como testar a base",
              body: [
                { list: [
                  "Escolha duas ou três cores próximas do seu tom.",
                  "Passe uma faixa de cada na lateral do rosto, perto do maxilar (não na mão nem no pulso).",
                  "Olhe na luz do dia, perto de uma janela.",
                  "A cor certa é a que \"some\" na pele, sem deixar o rosto mais claro, mais escuro, acinzentado ou alaranjado em relação ao pescoço.",
                ], ordered: true },
                { box: "pratica", text: "Aplique a base em pouca quantidade, do centro do rosto para fora, com esponja úmida, pincel ou os dedos. Espalhe bem perto do maxilar e do cabelo para não marcar." },
              ],
            },
            {
              title: "Corretivo e correção de cor",
              body: [
                "O corretivo disfarça olheiras, manchas e espinhas. Para olheiras, use um tom um pouco mais claro que a base. Para manchas e espinhas, use o mesmo tom da pele, senão a área fica destacada.",
                { table: { caption: "Correção de cor", head: ["Problema", "Cor que neutraliza"], rows: [
                  ["Olheira arroxeada ou azulada", "Salmão ou pêssego (em peles escuras, laranja)"],
                  ["Vermelhidão e espinhas", "Verde"],
                  ["Pele sem viço, amarelada", "Lilás"],
                ] } },
                { box: "chave", text: "Correção de cor é feita em camadas finas e sempre coberta por base ou corretivo do tom da pele. Menos é mais." },
                "Para a maquiagem durar, sele com um pouco de pó translúcido, principalmente na zona T e embaixo dos olhos.",
              ],
            },
          ],
          activity: {
            title: "Encontre o seu tom",
            steps: [
              "Faça os três testes de subtom e anote o resultado.",
              "Se tiver acesso a amostras (ou a uma loja com testadores), faça o teste da base no maxilar, na luz do dia.",
              "Anote qual cor sumiu na sua pele.",
            ],
            answer: "Na hora de comprar, procure a base no seu tom e no seu subtom: muitas marcas indicam com letras (W para quente, C para frio, N para neutro) ou com nomes. Se a cor ficou levemente mais clara ou escura que o pescoço, procure a próxima da escala.",
          },
          recap: ["Subtom é a cor por baixo da pele: quente, frio ou neutro.", "Teste a base no maxilar, na luz do dia.", "Corretivo mais claro na olheira; do tom da pele nas manchas."],
        },
        {
          id: "maquiagem-do-dia-a-dia",
          title: "Maquiagem rápida para o dia a dia",
          summary: "Uma maquiagem natural em cerca de 10 minutos, boa para escola e trabalho.",
          goals: ["Fazer uma maquiagem leve em poucos minutos", "Arrumar as sobrancelhas e destacar os olhos sem exagero", "Adaptar a maquiagem ao ambiente"],
          sections: [
            {
              title: "O passo a passo",
              body: [
                { list: [
                  "Hidratante com protetor solar.",
                  "Pele leve: BB cream, base em pouca quantidade ou só corretivo onde precisa.",
                  "Corretivo nas olheiras, batendo levemente com o dedo anelar.",
                  "Sobrancelhas: penteie com uma escovinha e preencha falhas com lápis ou sombra no tom dos fios, em traços curtos.",
                  "Máscara de cílios (rímel): da raiz para as pontas, em zigue-zague.",
                  "Blush: sorria e aplique na parte mais alta das bochechas, esfumando em direção às têmporas.",
                  "Lábios: protetor labial com cor, gloss ou um batom de cor próxima à da boca.",
                ], ordered: true },
                { box: "chave", text: "No dia a dia, o objetivo é parecer descansado e com boa aparência, não parecer maquiado." },
              ],
            },
            {
              title: "Truques que economizam tempo",
              body: [
                { list: [
                  "Use o mesmo produto em creme nas bochechas e nos lábios.",
                  "Uma sombra clara e neutra passada com o dedo já ilumina o olhar.",
                  "Deixe os produtos do dia a dia juntos numa necessaire pequena.",
                  "Na pele oleosa, carregue lenços de papel para tirar o brilho sem acumular pó.",
                ] },
              ],
            },
            {
              title: "Maquiagem e ambiente",
              body: [
                "No trabalho e em entrevistas, prefira cores neutras e acabamento leve. Ambientes como cozinhas industriais, laboratórios e hospitais podem ter regras próprias sobre maquiagem: siga as orientações do lugar.",
                { box: "atencao", text: "Não compartilhe rímel, lápis de olho nem batom. Eles passam bactérias e vírus de uma pessoa para outra, como os da conjuntivite e da herpes." },
              ],
            },
          ],
          activity: {
            title: "Desafio dos 10 minutos",
            steps: [
              "Separe os produtos que você tem para a maquiagem do dia a dia.",
              "Coloque um cronômetro de 10 minutos e siga o passo a passo, pulando o que não tiver.",
              "Tire uma foto na luz do dia e veja: parece natural? O que você mudaria?",
            ],
            note: "Nenhum passo é obrigatório. Use o que fizer você se sentir bem.",
          },
          recap: ["Pele leve, corretivo, sobrancelha, rímel, blush e lábios.", "No dia a dia, natural é a regra.", "Rímel, lápis e batom não se compartilham."],
        },
        {
          id: "producao-para-ocasioes",
          title: "Produção para ocasiões especiais",
          summary: "Pele mais completa, contorno, olho esfumado, delineado e fixação.",
          goals: ["Montar uma pele que dure a noite toda", "Fazer contorno, iluminador e um olho esfumado", "Fazer um delineado gatinho e fixar a maquiagem"],
          sections: [
            {
              title: "Pele que dura",
              body: [
                { list: [
                  "Prepare a pele como na primeira aula e use primer.",
                  "Base com mais cobertura, em camadas finas.",
                  "Corretivo e pó translúcido para selar.",
                  "Contorno: um tom um pouco mais escuro que a pele, embaixo das maçãs do rosto, nas laterais da testa e embaixo do maxilar, bem esfumado.",
                  "Iluminador: nos pontos onde a luz bate (topo das maçãs, ponta do nariz, arco do cupido e canto interno dos olhos).",
                ], ordered: true },
                { box: "atencao", text: "Contorno mal esfumado vira mancha. Esfume até não dar para ver onde ele começa e termina." },
              ],
            },
            {
              title: "Olho esfumado",
              body: [
                { list: [
                  "Passe uma base para sombra ou corretivo nas pálpebras, para a sombra durar e a cor ficar viva.",
                  "Aplique uma sombra de transição (um tom pouco mais escuro que a pele) no côncavo, aquela dobrinha acima do olho, com movimentos de vai e vem.",
                  "Coloque a sombra mais escura no canto externo, formando um \"V\" deitado, e esfume para dentro e para cima.",
                  "Ilumine o canto interno e embaixo da sobrancelha com uma sombra clara.",
                  "Leve um pouco da sombra escura para a linha dos cílios de baixo.",
                ], ordered: true },
                { box: "pratica", text: "Faça a maquiagem dos olhos antes da pele. Se cair sombra no rosto, é só limpar sem estragar a base." },
              ],
            },
            {
              title: "Delineado, cílios e lábios",
              body: [
                "Delineado gatinho: com o olho aberto e olhando para a frente, faça um risquinho saindo do canto externo em direção ao fim da sobrancelha. Depois, ligue a ponta desse risco à linha dos cílios e preencha.",
                "Cílios: curve com o curvex antes do rímel e passe duas camadas. Cílios postiços são opcionais; use cola própria e nunca durma com eles.",
                "Lábios que duram: contorne e preencha a boca com lápis, passe o batom, tire o excesso com um lenço e passe outra camada.",
                { box: "chave", text: "Escolha um destaque: olho marcado com boca mais neutra, ou boca forte com olho mais leve. Os dois fortes ao mesmo tempo também valem, mas pedem mais equilíbrio." },
                "Para terminar, borrife um spray fixador ou um pouco de água termal para a maquiagem durar mais.",
              ],
            },
          ],
          activity: {
            title: "Planeje a sua produção",
            steps: [
              "Escolha uma ocasião: festa de aniversário, formatura ou casamento durante o dia.",
              "Decida qual será o destaque: olhos ou boca.",
              "Escreva a ordem dos passos que você faria, do preparo à fixação.",
            ],
            answer: "Uma ordem possível: preparar a pele e passar primer; fazer os olhos (base de sombra, transição, sombra escura, iluminar e delineado); limpar o que caiu; base, corretivo e pó; contorno, blush e iluminador; sobrancelhas; rímel; lábios; spray fixador. Para eventos durante o dia, prefira tons mais suaves; à noite, dá para ousar mais.",
          },
          recap: ["Primer, camadas finas e pó selam uma pele que dura.", "Olho esfumado: transição no côncavo e escuro no canto externo.", "Escolha um destaque e finalize com fixador."],
        },
      ],
    },
    {
      title: "Cuidados com os produtos",
      lessons: [
        {
          id: "pinceis-e-higiene",
          title: "Pincéis, produtos e higiene",
          summary: "Limpar pincéis e esponjas, validade dos produtos e como guardar.",
          goals: ["Limpar pincéis e esponjas do jeito certo", "Ler a validade dos produtos depois de abertos", "Guardar a maquiagem em boas condições"],
          sections: [
            {
              title: "Limpar pincéis e esponjas",
              body: [
                { list: [
                  "Molhe só as cerdas do pincel em água morna, com a ponta para baixo.",
                  "Passe um pouco de sabonete neutro ou xampu suave e esfregue as cerdas na palma da mão, em círculos.",
                  "Enxágue até a água sair limpa.",
                  "Tire o excesso de água com uma toalha e ajeite o formato das cerdas.",
                  "Deixe secar deitado ou com as cerdas para baixo, nunca em pé com as cerdas para cima.",
                ], ordered: true },
                { table: { caption: "Com que frequência limpar", head: ["Item", "Frequência"], rows: [
                  ["Esponja de maquiagem", "Depois de cada uso"],
                  ["Pincéis de base e corretivo (produtos cremosos)", "Toda semana"],
                  ["Pincéis de pó e sombra", "A cada duas semanas"],
                ] } },
                { box: "atencao", text: "Água entrando no cabo solta a cola das cerdas. Por isso, pincel nunca seca em pé com as cerdas para cima." },
              ],
            },
            {
              title: "Validade depois de aberto",
              body: [
                "Além da data de validade, a embalagem costuma ter o desenho de um potinho aberto com um número, como 6M ou 12M. Ele diz quantos meses o produto dura depois de aberto.",
                { table: { caption: "Tempo médio depois de aberto", head: ["Produto", "Dura cerca de"], rows: [
                  ["Rímel e delineador líquido", "3 a 6 meses"],
                  ["Base e corretivo líquidos", "6 a 12 meses"],
                  ["Batom e lápis", "12 a 24 meses"],
                  ["Pó, blush e sombras em pó", "Até 24 meses"],
                ] } },
                { box: "chave", text: "Cheiro diferente, mudança de cor ou de textura, ou separação do produto: jogue fora, mesmo dentro da validade." },
              ],
            },
            {
              title: "Como guardar",
              body: [
                { list: [
                  "Longe do calor, do sol e da umidade do banheiro, quando possível.",
                  "Sempre bem fechados.",
                  "Não coloque água nem saliva no rímel ou na base para \"render\": isso contamina o produto.",
                  "Aponte os lápis com frequência: a ponta nova é mais higiênica.",
                ] },
                { box: "pratica", text: "Escreva com caneta permanente, no fundo de cada produto, o mês em que ele foi aberto." },
              ],
            },
          ],
          activity: {
            title: "Faxina na necessaire",
            steps: [
              "Separe toda a sua maquiagem.",
              "Confira a validade e o símbolo do potinho aberto de cada produto.",
              "Descarte o que estiver vencido ou com cheiro e textura diferentes.",
              "Lave os pincéis e as esponjas.",
            ],
            answer: "O rímel costuma ser o primeiro a vencer (3 a 6 meses depois de aberto). Se você não sabe há quanto tempo ele está aberto, o mais seguro é trocar. Pós e sombras secas duram bem mais, desde que fiquem bem fechados e secos.",
          },
          recap: ["Esponja depois de cada uso; pincéis de cremosos toda semana.", "O potinho aberto com 6M ou 12M mostra quantos meses o produto dura.", "Guarde longe de calor e umidade e nunca dilua o produto."],
        },
      ],
    },
  ],
};
