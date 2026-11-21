// Curso: Primeiros socorros. 2 módulos, 5 aulas.
// Segue o padrão de app/foundation-lessons.ts. Orientações para leigos, em linha com as recomendações
// atuais (SAMU 192, Bombeiros 193, RCP só com compressões). O aviso do curso lembra que nada substitui
// um treinamento prático.

import type { CourseContent } from "../foundation-lessons";

export const PRIMEIROS_SOCORROS: CourseContent = {
  note: "Este curso é introdutório e não substitui um treinamento prático com profissionais (oferecido, por exemplo, pela Cruz Vermelha e pelo Corpo de Bombeiros). Em qualquer emergência, ligue para o SAMU (192) ou para os Bombeiros (193).",
  closing: "Nos primeiros minutos de uma emergência, quem sabe o básico faz diferença: manter a calma, se proteger, chamar ajuda e agir sem piorar a situação. Se puder, faça um curso prático para treinar com as mãos o que aprendeu aqui.",
  modules: [
    {
      title: "Antes de ajudar",
      lessons: [
        {
          id: "cena-segura-e-socorro",
          title: "Cena segura e como chamar socorro",
          summary: "Proteger-se primeiro, avaliar a vítima e passar as informações certas.",
          goals: ["Avaliar se o local é seguro antes de ajudar", "Verificar se a vítima responde e respira", "Ligar para o número certo e passar as informações"],
          sections: [
            {
              title: "Primeiro, a sua segurança",
              body: [
                "Antes de chegar perto, olhe em volta: há trânsito, fogo, fumaça, fios elétricos, risco de desabamento, água, violência? Se houver, não se aproxime. Ligue para o socorro e espere a ajuda especializada.",
                { box: "chave", text: "Um socorrista ferido vira mais uma vítima. Ajudar começa por não se machucar." },
                { list: [
                  "Sinalize o local em acidentes de trânsito (pisca-alerta e triângulo bem antes do acidente).",
                  "Use luvas ou um saco plástico nas mãos se houver sangue.",
                  "Peça para alguém afastar os curiosos.",
                ] },
              ],
            },
            {
              title: "A vítima responde? Respira?",
              body: [
                { list: [
                  "Toque nos ombros e chame em voz alta: \"Você está bem? Consegue me ouvir?\"",
                  "Se não responder, olhe para o peito por até 10 segundos: ele sobe e desce normalmente?",
                  "Não responde e não respira (ou só dá suspiros fracos e raros): é parada cardíaca. Peça ajuda e comece a RCP (aula 3).",
                  "Não responde, mas respira normalmente: chame o socorro e, se não houver suspeita de trauma, coloque na posição lateral de segurança (aula 4).",
                ], ordered: true },
                { box: "atencao", text: "Em quedas, batidas ou acidentes, não mova a vítima, a não ser que haja perigo imediato (fogo, risco de explosão). Pode haver lesão na coluna." },
              ],
            },
            {
              title: "Para quem ligar",
              body: [
                { table: { caption: "Números de emergência no Brasil (ligação gratuita)", head: ["Número", "Serviço", "Quando ligar"], rows: [
                  ["192", "SAMU", "Emergências médicas: desmaio, parada, engasgo, ferimentos graves"],
                  ["193", "Corpo de Bombeiros", "Incêndio, resgate, afogamento, acidentes com vítimas presas"],
                  ["190", "Polícia Militar", "Violência, crimes, risco à segurança"],
                ] } },
                "Ao ligar, fale com calma: o que aconteceu, o endereço completo com um ponto de referência, quantas vítimas há, se elas respondem e respiram, e o seu telefone. Não desligue antes de o atendente mandar: ele pode orientar o que fazer até a ajuda chegar.",
                { box: "pratica", text: "Se houver outras pessoas, aponte para uma delas e diga: \"Você, de camiseta azul, ligue para o 192 e volte aqui.\" Pedidos genéricos (\"alguém liga!\") costumam não funcionar." },
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
            answer: "Antes: olhar se há perigo (carros, fios), chamar o senhor tocando nos ombros e ver se respira, e pedir para alguém ligar para o 192 (ou ligar você mesmo no viva-voz). Ao atendente: \"Um senhor caiu na calçada e não responde. [Respira / não respira.] Endereço: Rua tal, número tal, perto da padaria tal. Meu telefone é tal.\" E seguir as orientações sem desligar.",
          },
          recap: ["Primeiro a sua segurança, depois a da vítima.", "Responde? Respira? Essas duas respostas guiam o que fazer.", "SAMU 192, Bombeiros 193, Polícia 190: endereço com referência e não desligue."],
        },
      ],
    },
    {
      title: "Emergências comuns",
      lessons: [
        {
          id: "engasgo",
          title: "Engasgo",
          summary: "Reconhecer o engasgo grave e agir em adultos, crianças e bebês.",
          goals: ["Diferenciar engasgo leve de engasgo grave", "Fazer as compressões abdominais (manobra de Heimlich)", "Saber o que muda para bebês"],
          sections: [
            {
              title: "Leve ou grave?",
              body: [
                { table: { caption: "Como reconhecer", head: ["Engasgo leve", "Engasgo grave"], rows: [
                  ["A pessoa tosse forte", "Não consegue tossir, ou a tosse é fraca"],
                  ["Consegue falar ou chorar", "Não consegue falar nem chorar"],
                  ["Respira, mesmo com dificuldade", "Não respira ou faz um chiado agudo"],
                  ["", "Leva as mãos ao pescoço; lábios ficando roxos"],
                ] } },
                { box: "chave", text: "Se a pessoa tosse com força, incentive a tossir e não bata nas costas. A tosse é a melhor forma de soltar o objeto." },
              ],
            },
            {
              title: "Adulto e criança acima de 1 ano",
              body: [
                { list: [
                  "Peça para alguém ligar para o 192.",
                  "Fique atrás da pessoa e passe os braços pela cintura dela.",
                  "Feche uma das mãos e coloque-a, com o polegar para dentro, um pouco acima do umbigo (bem abaixo das costelas).",
                  "Segure o punho com a outra mão e puxe com força para dentro e para cima, como se desenhasse a letra J.",
                  "Repita até o objeto sair ou a pessoa desmaiar.",
                ], ordered: true },
                "Em criança pequena, ajoelhe-se para ficar da altura dela. Em grávidas e pessoas muito obesas, as compressões são feitas no meio do peito, e não na barriga.",
                { box: "atencao", text: "Se a pessoa desmaiar, deite-a no chão com cuidado, confirme que o 192 foi chamado e comece a RCP (aula 3)." },
              ],
            },
            {
              title: "Bebês (menos de 1 ano)",
              body: [
                { list: [
                  "Deite o bebê de bruços sobre o seu antebraço, com a cabeça mais baixa que o corpo, segurando o queixo dele com a mão.",
                  "Dê 5 tapas firmes nas costas, entre as escápulas, com a base da outra mão.",
                  "Vire o bebê de barriga para cima, apoiado no outro braço, com a cabeça mais baixa.",
                  "Faça 5 compressões no meio do peito, logo abaixo da linha dos mamilos, com dois dedos.",
                  "Repita 5 tapas e 5 compressões até o objeto sair ou o socorro chegar.",
                ], ordered: true },
                { box: "atencao", text: "Não tente tirar o objeto com o dedo se você não estiver vendo: pode empurrá-lo ainda mais para dentro. Nunca vire o bebê de cabeça para baixo pelos pés." },
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
            answer: "1) Ele tosse e fala: é engasgo leve. Incentive a tossir, fique perto e observe. Não bata nas costas. 2) Engasgo grave: peça para alguém ligar para o 192 e faça as compressões abdominais (manobra de Heimlich) até o objeto sair. 3) Ligue (ou peça para ligarem) para o 192 e alterne 5 tapas nas costas com 5 compressões no peito com dois dedos, sempre com a cabeça do bebê mais baixa.",
          },
          recap: ["Tossindo forte: deixe tossir. Sem tosse, sem fala: engasgo grave.", "Adultos e crianças: compressões abdominais para dentro e para cima.", "Bebês: 5 tapas nas costas e 5 compressões no peito."],
        },
        {
          id: "parada-cardiaca",
          title: "Parada cardíaca: RCP e DEA",
          summary: "Reconhecer a parada, fazer as compressões e usar o desfibrilador.",
          goals: ["Reconhecer uma parada cardíaca", "Fazer compressões torácicas do jeito certo", "Saber usar um desfibrilador (DEA)"],
          sections: [
            {
              title: "Reconhecer a parada",
              body: [
                "Na parada cardíaca, o coração para de bombear sangue. A pessoa cai, não responde e não respira normalmente (pode dar suspiros fracos e espaçados, que não são respiração de verdade).",
                { box: "chave", text: "Cada minuto sem compressões diminui muito a chance de sobreviver. Começar logo é mais importante do que fazer perfeito." },
              ],
            },
            {
              title: "Como fazer as compressões",
              body: [
                { list: [
                  "Peça para alguém ligar para o 192 e buscar um DEA (desfibrilador), se houver por perto.",
                  "Deite a pessoa de costas, numa superfície firme.",
                  "Ajoelhe-se ao lado, coloque a base de uma mão no centro do peito e a outra mão por cima, com os dedos entrelaçados.",
                  "Braços esticados, ombros acima das mãos: empurre o peito para baixo uns 5 cm e solte, deixando o peito voltar.",
                  "Ritmo de 100 a 120 compressões por minuto, sem parar, até o socorro chegar ou a pessoa reagir.",
                ], ordered: true },
                { box: "exemplo", text: "O ritmo é o de músicas com batida rápida e constante, como \"Stayin' Alive\", dos Bee Gees: cerca de duas compressões por segundo." },
                { box: "atencao", text: "Quem não tem treinamento deve fazer só as compressões, sem respiração boca a boca. Se houver outra pessoa, troquem a cada 2 minutos: cansado, ninguém comprime bem." },
              ],
            },
            {
              title: "O desfibrilador (DEA)",
              body: [
                "O DEA é um aparelho portátil que dá um choque para o coração voltar a bater no ritmo certo. Ele existe em shoppings, aeroportos, academias e estações, e foi feito para ser usado por qualquer pessoa: ele fala o que fazer.",
                { list: [
                  "Ligue o aparelho e siga as instruções faladas.",
                  "Cole as pás no peito sem roupa, como mostra o desenho nelas.",
                  "Quando o aparelho analisar e mandar, ninguém encosta na vítima.",
                  "Se ele indicar o choque, aperte o botão. Depois, volte às compressões imediatamente.",
                ], ordered: true },
                { box: "chave", text: "O DEA só dá choque se for necessário. Não tenha medo de usar: ele não deixa você errar." },
              ],
            },
          ],
          activity: {
            title: "Coloque em ordem",
            steps: [
              "Organize estes passos na ordem certa: começar as compressões; verificar se o local é seguro; pedir para ligar 192 e buscar um DEA; tocar nos ombros e ver se responde e respira; ligar o DEA quando ele chegar.",
              "Quantas compressões por minuto?",
              "Quanto o peito deve afundar num adulto?",
            ],
            answer: "Ordem: 1) verificar se o local é seguro; 2) tocar nos ombros e ver se responde e respira; 3) pedir para ligar 192 e buscar um DEA; 4) começar as compressões; 5) ligar o DEA quando ele chegar e seguir as instruções. São 100 a 120 compressões por minuto, afundando cerca de 5 cm.",
          },
          recap: ["Não responde e não respira normalmente: é parada cardíaca.", "Compressões fortes e rápidas no centro do peito, 100 a 120 por minuto.", "O DEA fala o que fazer e só dá choque se precisar."],
        },
        {
          id: "desmaio-e-convulsao",
          title: "Desmaio, convulsão e posição lateral",
          summary: "O que fazer quando alguém desmaia ou tem uma convulsão.",
          goals: ["Ajudar alguém que desmaiou", "Proteger uma pessoa durante uma convulsão", "Colocar alguém na posição lateral de segurança"],
          sections: [
            {
              title: "Desmaio",
              body: [
                "Desmaio é uma perda rápida da consciência, normalmente por pouco tempo. Antes, a pessoa pode ficar pálida, suar frio, sentir tontura ou ver tudo escuro.",
                { list: [
                  "Se ela ainda estiver de pé e tonta, ajude-a a se deitar ou a se sentar com a cabeça entre os joelhos.",
                  "Já desmaiada: deite-a de costas e, se não houver suspeita de queda forte, levante as pernas uns 30 cm.",
                  "Afrouxe roupas apertadas e deixe o ar circular.",
                  "Confira se ela respira.",
                  "Se não acordar em cerca de 1 minuto, ligue para o 192.",
                ], ordered: true },
                { box: "atencao", text: "Não dê água, café ou nada para comer ou beber a quem está desacordado, e não jogue água no rosto. Ela pode se engasgar." },
              ],
            },
            {
              title: "Convulsão",
              body: [
                "Na convulsão, a pessoa pode cair, ficar rígida e ter movimentos involuntários. Normalmente passa sozinha em poucos minutos.",
                { list: [
                  "Afaste objetos em que ela possa se machucar.",
                  "Proteja a cabeça com algo macio (uma blusa dobrada).",
                  "Afrouxe roupas apertadas no pescoço.",
                  "Marque o tempo da crise.",
                  "Quando os movimentos pararem, vire-a de lado (posição lateral) e fique por perto até ela despertar.",
                ] },
                { box: "atencao", text: "Não coloque nada na boca da pessoa (nem dedo, nem pano, nem colher) e não tente segurar os movimentos. Ninguém \"engole a língua\" durante a convulsão." },
                "Ligue para o 192 se a crise passar de 5 minutos, se for a primeira vez, se a pessoa se machucar, estiver grávida, não acordar depois ou tiver outra crise em seguida.",
              ],
            },
            {
              title: "Posição lateral de segurança",
              body: [
                "Serve para quem está desacordado, mas respirando, e sem suspeita de lesão na coluna. Ela mantém o caminho do ar livre e evita que a pessoa se engasgue se vomitar.",
                { list: [
                  "Ajoelhe-se ao lado da pessoa deitada de costas.",
                  "Dobre o braço mais próximo de você em ângulo reto, com a palma para cima.",
                  "Traga o outro braço por cima do peito e apoie as costas da mão dele na bochecha do lado de você.",
                  "Dobre o joelho do lado mais distante.",
                  "Puxe esse joelho na sua direção para virar a pessoa de lado.",
                  "Incline a cabeça levemente para trás, para o ar passar, e continue observando a respiração.",
                ], ordered: true },
              ],
            },
          ],
          activity: {
            title: "Certo ou errado?",
            steps: [
              "\"Durante a convulsão, devo segurar a língua da pessoa para ela não engolir.\"",
              "\"Depois que alguém desmaia, um copo de água com açúcar ajuda a acordar.\"",
              "\"Uma pessoa desacordada que respira bem, sem suspeita de queda, pode ser colocada de lado.\"",
            ],
            answer: "1) Errado: não se coloca nada na boca, e a língua não é engolida. 2) Errado: nada de comer ou beber enquanto a pessoa não estiver bem acordada. 3) Certo: é a posição lateral de segurança, que mantém o caminho do ar livre.",
          },
          recap: ["Desmaio: deitar, pernas para cima e conferir a respiração.", "Convulsão: proteger a cabeça, nada na boca, marcar o tempo.", "Desacordado e respirando: posição lateral de segurança."],
        },
        {
          id: "sangramentos-queimaduras-torcoes",
          title: "Sangramentos, queimaduras e torções",
          summary: "Estancar um sangramento, cuidar de queimaduras e de lesões em ossos e articulações.",
          goals: ["Estancar um sangramento com pressão direta", "Cuidar de uma queimadura do jeito certo", "Agir em torções e suspeitas de fratura sem piorar"],
          sections: [
            {
              title: "Sangramentos",
              body: [
                { list: [
                  "Proteja as mãos (luvas ou saco plástico).",
                  "Aperte firme o ferimento com um pano limpo ou gaze.",
                  "Se o pano encharcar, não tire: coloque outro por cima e continue apertando.",
                  "Se for no braço ou na perna e não houver suspeita de fratura, deixe a parte mais alta que o coração.",
                  "Em sangramento forte, ligue para o 192 e não pare de apertar.",
                ], ordered: true },
                { box: "atencao", text: "Não retire objetos cravados (faca, vidro, pedaço de madeira): eles podem estar segurando o sangramento. Apoie o objeto com panos em volta para não se mexer e espere o socorro." },
                "Sangramento pelo nariz: sente a pessoa com a cabeça levemente para a frente (não para trás) e aperte a parte mole do nariz por 10 minutos.",
              ],
            },
            {
              title: "Queimaduras",
              body: [
                { list: [
                  "Afaste a pessoa da fonte de calor.",
                  "Coloque a área queimada sob água corrente fria (não gelada) por pelo menos 10 a 20 minutos.",
                  "Retire anéis, relógios e pulseiras antes de inchar. Não arranque roupas grudadas na pele.",
                  "Cubra com um pano limpo ou filme plástico, sem apertar.",
                ], ordered: true },
                { box: "atencao", text: "Não passe pasta de dente, manteiga, óleo, pó de café, clara de ovo nem gelo. E não estoure as bolhas: elas protegem contra infecção." },
                "Procure atendimento se a queimadura for maior que a palma da mão da pessoa, se atingir rosto, mãos, pés, genitais ou articulações, se for causada por eletricidade ou produto químico, ou se a vítima for criança ou idosa.",
              ],
            },
            {
              title: "Torções e suspeita de fratura",
              body: [
                "Na torção, a articulação (tornozelo, joelho, punho) fica dolorida e inchada. Nas primeiras horas:",
                { list: [
                  "Repouso: pare a atividade e não force.",
                  "Gelo: aplique gelo envolto num pano por 15 a 20 minutos, nunca direto na pele.",
                  "Compressão leve com uma faixa, sem apertar a ponto de formigar.",
                  "Elevação: deixe a parte machucada mais alta.",
                ] },
                "Suspeite de fratura se houver dor forte, deformidade, inchaço grande ou impossibilidade de mexer. Nesse caso, imobilize a parte na posição em que está (com uma tala improvisada, como papelão ou revista, e uma faixa) e procure atendimento.",
                { box: "atencao", text: "Não tente colocar o osso no lugar, não massageie e não puxe a parte machucada. Fratura com osso exposto: cubra com pano limpo sem empurrar e ligue para o 192." },
              ],
            },
            {
              title: "O que não fazer, em resumo",
              body: [
                { table: { caption: "Mitos comuns", head: ["Mito", "O certo"], rows: [
                  ["Pasta de dente na queimadura", "Água corrente fria por 10 a 20 minutos"],
                  ["Cabeça para trás no sangramento do nariz", "Cabeça para a frente e apertar o nariz"],
                  ["Tirar a faca do ferimento", "Deixar o objeto e apoiá-lo com panos"],
                  ["Puxar a língua na convulsão", "Nada na boca; proteger a cabeça"],
                  ["Dar água a quem desmaiou", "Nada de comer ou beber até acordar bem"],
                  ["Mover a vítima de acidente", "Só mover se houver perigo imediato"],
                ] } },
              ],
            },
          ],
          activity: {
            title: "Três situações",
            steps: [
              "Cozinhando, você queima o dorso da mão na panela. Uma bolha começa a aparecer. O que fazer?",
              "Um amigo corta o braço num vidro, sangrando bastante, e o pano que você colocou encharcou. E agora?",
              "No futebol, uma pessoa torce o tornozelo, que incha, mas ela consegue mexer o pé. Quais cuidados?",
            ],
            answer: "1) Água corrente fria por 10 a 20 minutos, tirar anel ou relógio, cobrir com pano limpo e não estourar a bolha nem passar nada. Se a área for maior que a palma da mão, procure atendimento. 2) Não tire o pano: coloque outro por cima, continue apertando, levante o braço e ligue para o 192 se o sangramento não diminuir. 3) Repouso, gelo envolto em pano por 15 a 20 minutos, faixa sem apertar e pé elevado. Se a dor piorar ou não conseguir apoiar o pé, procure atendimento para descartar fratura.",
          },
          recap: ["Sangramento: pressão direta e não tire o pano encharcado.", "Queimadura: água corrente fria e nada de pasta de dente.", "Torção: repouso, gelo, compressão e elevação; fratura: imobilizar e não colocar no lugar."],
        },
      ],
    },
  ],
};
