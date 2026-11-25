// Curso: Maquiagem. 3 módulos (pele, técnicas e cuidados com os produtos), 5 aulas.
// Segue o padrão de app/foundation-lessons.ts. Linguagem neutra: maquiagem é para quem quiser.

import type { CourseContent } from "../foundation-lessons";
import { PROVA_MAQUIAGEM } from "./maquiagem-prova";

export const MAQUIAGEM: CourseContent = {
  note: "Se tiver pele sensível, alergia ou alguma doença de pele, teste cada produto antes num pedaço pequeno da pele e, na dúvida, fale com um dermatologista.",
  closing: "Agora você sabe preparar a pele, escolher o tom certo, fazer uma maquiagem rápida e uma produção para festa, e cuidar dos seus produtos. Maquiagem é treino e expressão: teste, erre, tire e faça de novo. Não existe um jeito certo de ser você.",
  quiz: PROVA_MAQUIAGEM,
  stickers: [
    { id: "necessaire-em-dia", name: "Necessaire em dia", how: "Acertou 7 ou mais em \"Pode usar ou descarte?\"." },
    { id: "mestre-do-modulo-1", name: "Pele pronta", how: "Acertou 8 ou mais no quiz do Módulo 1." },
    { id: "mestre-do-modulo-2", name: "Mão na técnica", how: "Acertou 8 ou mais no quiz do Módulo 2." },
    { id: "mestre-do-modulo-3", name: "Pincel limpo", how: "Acertou 8 ou mais no quiz do Módulo 3." },
  ],
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
      quiz: {
        sticker: { id: "mestre-do-modulo-1", min: 8 },
        questions: [
          { question: "No teste do lenço, o óleo apareceu só na testa, no nariz e no queixo. Qual é o tipo de pele?", options: ["Oleosa", "Mista", "Seca", "Normal"], answer: 1, why: "Óleo só na zona T indica pele mista." },
          { question: "Depois de lavar o rosto, quanto tempo a aula manda esperar para fazer o teste do lenço?", options: ["Dez minutos.", "Meia hora.", "Duas horas.", "Uma hora."], answer: 3, why: "Lave com sabonete suave, não passe nada e espere uma hora." },
          { question: "Para pele oleosa, o que a tabela recomenda procurar?", options: ["Produtos \"oil free\" e com acabamento matte.", "Bases com acabamento iluminado.", "Hidratantes mais ricos e cremosos.", "Pular o hidratante e passar só pó compacto por cima."], answer: 0, why: "Acabamento iluminado e hidratantes mais ricos são para a pele seca." },
          { question: "Pele oleosa também deve usar hidratante?", options: ["Não: o hidratante piora o brilho.", "Sim, de preferência em gel.", "Só no inverno, em creme.", "Só se ele tiver FPS alto."], answer: 1, why: "A hidratação vale até para a pele oleosa, com hidratante em gel." },
          { question: "Qual é a ordem da preparação da pele, segundo a aula?", options: ["Primer, limpeza, hidratação e protetor solar.", "Limpeza, primer, protetor solar e hidratação.", "Hidratação, limpeza, primer e protetor solar.", "Limpeza, hidratação, protetor solar e primer."], answer: 3, why: "O primer é o último passo, e é opcional." },
          { question: "Quando passar protetor solar, segundo a aula?", options: ["Só em dias de sol forte.", "Só quando for à praia ou à piscina.", "Todos os dias, mesmo nublado.", "Só quando a base não tiver FPS."], answer: 2, why: "Pode ser um hidratante que já tenha FPS." },
          { question: "O que o primer faz, segundo a aula?", options: ["Substitui o protetor solar nos dias nublados.", "Ajuda a maquiagem a durar mais e disfarça poros.", "Limpa a pele e tira o resto de sabonete antes da base.", "Tira a oleosidade da pele de vez."], answer: 1, why: "Ele é opcional: entra depois do protetor solar." },
          { question: "Como a aula manda tirar o rímel?", options: ["Segurar o algodão úmido uns segundos antes de deslizar.", "Esfregar o algodão seco com força até sair tudo dos cílios.", "Lavar só com sabonete e água bem quente, de olhos abertos.", "Passar hidratante e esperar o rímel soltar."], answer: 0, why: "O demaquilante solta o rímel, sem esfregar com força." },
          { question: "O que fazer depois de passar o demaquilante?", options: ["Dormir: a pele já está limpa.", "Passar primer para proteger a pele durante a noite toda.", "Lavar o rosto com sabonete e passar hidratante.", "Passar protetor solar para a noite."], answer: 2, why: "O demaquilante tira a maquiagem; o sabonete e o hidratante fecham a limpeza." },
          { question: "Onde testar um produto novo antes de usar?", options: ["Direto no rosto, numa área pequena da bochecha.", "Na palma da mão, que é mais resistente.", "Na pálpebra, que é mais sensível.", "Atrás da orelha ou dentro do braço."], answer: 3, why: "Espere um dia: se coçar, arder ou ficar vermelho, não use." },
        ],
      },
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
      quiz: {
        sticker: { id: "mestre-do-modulo-2", min: 8 },
        questions: [
          { question: "O que é o subtom?", options: ["O quanto a pele é clara ou escura.", "A cor que fica \"por baixo\" da pele.", "O acabamento da base, matte ou iluminado.", "A cor da pele depois de bronzeada."], answer: 1, why: "O quanto a pele é clara ou escura é o tom." },
          { question: "Na luz do dia, as veias do seu pulso parecem azuladas, e o prateado fica melhor em você. Qual é o subtom provável?", options: ["Quente", "Neutro", "Depende do tom", "Frio"], answer: 3, why: "Veias azuladas e joias prateadas são pistas de subtom frio." },
          { question: "Onde a aula manda testar a cor da base?", options: ["Nas costas da mão, que tem tom parecido.", "No pulso, por dentro, perto das veias.", "Na lateral do rosto, perto do maxilar.", "Na testa, perto da raiz do cabelo."], answer: 2, why: "E olhar na luz do dia, perto de uma janela." },
          { question: "Que cor neutraliza a vermelhidão e as espinhas?", options: ["Verde", "Salmão", "Lilás", "Laranja"], answer: 0, why: "Salmão e laranja são para olheiras; lilás, para pele sem viço." },
          { question: "Onde a aula manda aplicar o blush?", options: ["No alto das bochechas, rumo às têmporas.", "No meio da bochecha, em círculo, sem sorrir.", "Embaixo das maçãs, como um contorno.", "Perto do nariz, para dar cor ao centro."], answer: 0, why: "Sorria e aplique na parte mais alta das bochechas, esfumando." },
          { question: "Qual é o objetivo da maquiagem do dia a dia, segundo a aula?", options: ["Cobrir tudo com uma base de alta cobertura.", "Parecer descansado, sem parecer maquiado.", "Destacar olhos e boca ao mesmo tempo.", "Usar o máximo de produtos em 10 minutos."], answer: 1, why: "No dia a dia, natural é a regra." },
          { question: "Por que não compartilhar rímel, lápis de olho e batom?", options: ["Porque o produto acaba bem mais rápido quando é dividido.", "Porque cada pessoa precisa de uma cor diferente.", "Porque a validade depois de aberto cai pela metade.", "Porque passam bactérias e vírus de uma pessoa a outra."], answer: 3, why: "Como os da conjuntivite e da herpes." },
          { question: "No olho esfumado, onde vai a sombra de transição?", options: ["No canto interno do olho, para iluminar.", "No côncavo, a dobrinha acima do olho.", "Na linha dos cílios de baixo.", "Embaixo da sobrancelha."], answer: 1, why: "A sombra mais escura vai no canto externo, num \"V\" deitado." },
          { question: "Por que a aula sugere fazer os olhos antes da pele?", options: ["Para a base secar enquanto isso.", "Porque a sombra gruda melhor na pele sem base nenhuma.", "Para limpar sombra caída sem estragar a base.", "Para o primer agir por mais tempo."], answer: 2, why: "Se cair sombra no rosto, é só limpar." },
          { question: "Onde vai o iluminador, segundo a aula?", options: ["Onde a luz bate, como a ponta do nariz.", "Embaixo das maçãs do rosto e do maxilar.", "Nas laterais da testa, rente ao cabelo.", "Só nas pálpebras, por cima da sombra."], answer: 0, why: "Topo das maçãs, ponta do nariz, arco do cupido e canto interno dos olhos. Embaixo das maçãs e nas laterais da testa vai o contorno." },
        ],
      },
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
                {
                  sort: {
                    title: "Pode usar ou descarte? Olhe o tempo de aberto e o estado de cada produto.",
                    labels: ["Pode usar", "Descarte"],
                    items: [
                      { text: "Rímel aberto há 8 meses", answer: 1, why: "Rímel dura cerca de 3 a 6 meses depois de aberto." },
                      { text: "Pó compacto aberto há 1 ano, bem fechado e seco", answer: 0, why: "Pó, blush e sombras em pó duram até 24 meses." },
                      { text: "Base dentro da validade, mas com cheiro diferente", answer: 1, why: "Cheiro diferente: jogue fora, mesmo dentro da validade." },
                      { text: "Batom aberto há 10 meses, sem mudança", answer: 0, why: "Batom e lápis duram de 12 a 24 meses." },
                      { text: "Delineador líquido aberto há 7 meses", answer: 1, why: "Delineador líquido dura cerca de 3 a 6 meses, como o rímel." },
                      { text: "Corretivo líquido aberto há 4 meses, sem mudança", answer: 0, why: "Base e corretivo líquidos duram de 6 a 12 meses." },
                      { text: "Base que separou dentro da embalagem", answer: 1, why: "Separação do produto é sinal para jogar fora." },
                      { text: "Sombra em pó aberta há 18 meses, sem mudança", answer: 0, why: "Sombras em pó duram até 24 meses." },
                    ],
                    sticker: { id: "necessaire-em-dia", min: 7 },
                  },
                },
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
      quiz: {
        sticker: { id: "mestre-do-modulo-3", min: 8 },
        questions: [
          { question: "Com que frequência lavar a esponja de maquiagem?", options: ["Toda semana.", "A cada duas semanas.", "Depois de cada uso.", "Uma vez por mês."], answer: 2, why: "Pincéis de cremosos, toda semana; de pó e sombra, a cada duas semanas." },
          { question: "Com que frequência lavar os pincéis de pó e sombra?", options: ["A cada duas semanas.", "Depois de cada uso.", "Toda semana.", "Uma vez por mês."], answer: 0, why: "Os de base e corretivo, que pegam produto cremoso, são toda semana." },
          { question: "Por que o pincel não pode secar em pé, com as cerdas para cima?", options: ["Porque as cerdas perdem a cor e o formato.", "A água desce no cabo e solta a cola.", "Porque junta poeira e bactérias nas cerdas.", "Porque demora mais para secar."], answer: 1, why: "Seque deitado ou com as cerdas para baixo." },
          { question: "O que quer dizer \"12M\" no desenho do potinho aberto?", options: ["Que o produto vence em 12 meses, fechado ou aberto.", "Que pode ser usado 12 vezes por mês.", "Que tem 12 mililitros de produto.", "Que dura 12 meses depois de aberto."], answer: 3, why: "É diferente da data de validade da embalagem." },
          { question: "Qual destes costuma vencer primeiro depois de aberto?", options: ["Batom", "Pó compacto", "Rímel", "Lápis"], answer: 2, why: "Rímel e delineador líquido duram cerca de 3 a 6 meses." },
          { question: "Quanto tempo a base líquida dura, em média, depois de aberta?", options: ["3 a 6 meses", "12 a 24 meses", "Até 24 meses", "6 a 12 meses"], answer: 3, why: "O mesmo vale para o corretivo líquido." },
          { question: "Sua base está na validade, mas mudou de cheiro. O que fazer?", options: ["Usar até acabar: está na validade.", "Jogar fora.", "Misturar com um pouco de água.", "Guardar na geladeira até voltar ao normal."], answer: 1, why: "Cheiro, cor ou textura diferente: jogue fora, mesmo na validade." },
          { question: "Por que não colocar água no rímel para ele render?", options: ["Porque isso contamina o produto.", "Porque o rímel fica grosso demais.", "Porque muda a cor do rímel.", "Porque estraga a escovinha."], answer: 0, why: "Água e saliva contaminam o rímel e a base." },
          { question: "Por que apontar os lápis com frequência?", options: ["Para o traço ficar mais fino e preciso.", "Para o lápis durar mais tempo.", "Porque a ponta velha muda de cor.", "Porque a ponta nova é mais higiênica."], answer: 3, why: "Está nas dicas de como guardar a maquiagem." },
          { question: "Na hora de lavar o pincel, o que se molha?", options: ["Só as cerdas, com a ponta para baixo.", "O pincel inteiro, cabo e cerdas juntos.", "Só o cabo, para tirar a sujeira de fora.", "As cerdas viradas para cima, na torneira."], answer: 0, why: "Em água morna, para a água não entrar no cabo." },
        ],
      },
    },
  ],
};
