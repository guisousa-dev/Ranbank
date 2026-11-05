// Curso: Gestão de tempo. 2 módulos, 4 aulas (os 4 encontros do plano do curso).
// Segue o padrão de app/foundation-lessons.ts.

import type { CourseContent } from "../foundation-lessons";

export const GESTAO_TEMPO: CourseContent = {
  closing: "Organizar o tempo é organizar prioridades. Quando você sabe o que precisa ser feito e por que isso importa, trabalha com mais clareza e ainda sobra tempo para descansar.",
  modules: [
    {
      title: "Fundamentos e planejamento",
      lessons: [
        {
          id: "o-que-e-gestao-do-tempo",
          title: "O que é gestão do tempo",
          summary: "O que é, para que serve e as quatro ideias principais.",
          goals: ["Entender o que é gestão do tempo", "Conhecer os benefícios de organizar a rotina", "Diferenciar planejamento, prioridade, foco e organização"],
          sections: [
            {
              title: "O que é gestão do tempo?",
              body: [
                "Gestão do tempo é planejar, organizar e acompanhar como você usa o seu tempo para fazer as atividades e chegar aos seus objetivos.",
                { box: "chave", text: "A ideia não é fazer tudo correndo nem ocupar cada minuto do dia. É usar o tempo com consciência, equilibrando responsabilidades, produtividade e descanso." },
                { box: "exemplo", text: "Um funcionário organiza as tarefas no começo do expediente. Ele vê o que precisa ser entregue primeiro, evita esquecimentos e trabalha com mais clareza." },
              ],
            },
            {
              title: "Por que vale a pena",
              body: [
                { list: ["Mais produtividade e qualidade nas entregas", "Menos atrasos, esquecimentos e retrabalho", "Mais facilidade para cumprir prazos e decidir", "Menos sensação de sobrecarga", "Mais responsabilidade, disciplina e autonomia", "Equilíbrio entre trabalho, estudo, descanso e vida pessoal"] },
              ],
            },
            {
              title: "As quatro ideias principais",
              body: [
                { table: { caption: "Ideias principais da gestão do tempo", head: ["Ideia", "O que é", "Exemplo"], rows: [
                  ["Planejamento", "Decidir antes o que vai ser feito, quando e com o quê", "Organizar as tarefas antes de começar o expediente"],
                  ["Priorização", "Ver o que precisa de atenção primeiro, pela importância, urgência e prazo", "Terminar o relatório que vence hoje antes de arrumar arquivos sem prazo"],
                  ["Foco", "Dar atenção a uma atividade e evitar interrupções", "Terminar a planilha antes de olhar as mensagens"],
                  ["Organização", "Manter tarefas, documentos e horários em ordem", "Usar uma agenda para reuniões e prazos"],
                ] } },
              ],
            },
            {
              title: "Tempo e qualidade de vida",
              body: [
                "Gerenciar o tempo não é trabalhar sem parar. Uma boa organização inclui pausas, alimentação, sono, lazer, estudos e convivência com outras pessoas.",
                "Imprevistos acontecem. Um bom planejamento é flexível e permite ajustes.",
              ],
            },
          ],
          activity: {
            title: "Para onde vai o meu tempo?",
            steps: ["Pense no dia de ontem, do momento em que acordou até dormir.", "Anote, de hora em hora, o que você fez.", "Marque o que foi importante e o que poderia ter ficado para depois."],
            answer: "Não existe resposta certa. O objetivo é enxergar a sua rotina como ela é. Muita gente se surpreende com o tempo que vai embora em coisas pequenas, como olhar o celular entre uma tarefa e outra.",
          },
          recap: ["Gestão do tempo é usar o tempo com consciência, não correr mais.", "Planejar, priorizar, focar e organizar andam juntos.", "Descanso também faz parte de um bom planejamento."],
        },
        {
          id: "prioridades-e-planejamento",
          title: "Prioridades e planejamento",
          summary: "Urgente ou importante, a Matriz de Eisenhower e o plano do dia.",
          goals: ["Diferenciar urgente de importante", "Usar a Matriz de Eisenhower", "Montar um planejamento diário", "Criar metas claras com o método SMART"],
          sections: [
            {
              title: "Urgente e importante",
              body: [
                "Urgente é o que precisa de atenção rápida, quase sempre por causa de um prazo perto.",
                "Importante é o que ajuda a chegar a um objetivo ou a um resultado que faz diferença.",
                { box: "chave", text: "Uma tarefa pode ser urgente e importante ao mesmo tempo, ou não ser nenhuma das duas." },
              ],
            },
            {
              title: "Matriz de Eisenhower",
              body: [
                { table: { caption: "Matriz de Eisenhower", head: ["Tipo de tarefa", "O que fazer", "Exemplo"], rows: [
                  ["Urgente e importante", "Fazer agora", "Corrigir um erro que impede uma entrega de hoje"],
                  ["Importante, não urgente", "Planejar", "Estudar para a prova da semana que vem"],
                  ["Urgente, menos importante", "Avaliar ou passar para outra pessoa, se for possível e autorizado", "Encaminhar um pedido que outra pessoa resolve"],
                  ["Nem urgente nem importante", "Reduzir, adiar ou cortar", "Olhar as notificações toda hora"],
                ] } },
                "A classificação depende do contexto, dos prazos e das responsabilidades de cada pessoa.",
              ],
            },
            {
              title: "Planejamento diário em 5 passos",
              body: [
                { list: ["Registrar: anote as tarefas e os compromissos do dia.", "Classificar: veja o que é urgente, importante e secundário.", "Estimar: calcule mais ou menos quanto tempo cada tarefa leva.", "Executar: comece pelas prioridades e acompanhe o andamento.", "Revisar: veja o que ficou pronto e reorganize o que ficou pendente."], ordered: true },
              ],
            },
            {
              title: "Metas claras com o método SMART",
              body: [
                "SMART é uma sigla em inglês. Uma boa meta é:",
                { list: ["Específica: diz exatamente o que fazer", "Mensurável: dá para medir", "Atingível: é possível de cumprir", "Relevante: faz sentido para você", "Temporal: tem prazo"] },
                { box: "exemplo", text: "Em vez de \"preciso me organizar\", diga \"vou organizar os documentos pendentes do setor até sexta-feira\"." },
              ],
            },
          ],
          activity: {
            title: "Monte a sua matriz",
            steps: [
              "Classifique estas tarefas na Matriz de Eisenhower: 1) entregar um trabalho que vence hoje; 2) assistir a um vídeo engraçado que mandaram; 3) começar a estudar para a prova da semana que vem; 4) responder a um pedido simples que outra pessoa da equipe pode resolver.",
              "Depois, faça o mesmo com 4 tarefas reais da sua semana.",
            ],
            answer: "1) urgente e importante: fazer agora. 2) nem urgente nem importante: deixar para depois ou cortar. 3) importante, não urgente: planejar um horário. 4) urgente, menos importante: passar para quem pode resolver, se for permitido.",
          },
          recap: ["Urgente tem prazo perto; importante faz diferença no resultado.", "A Matriz de Eisenhower diz o que fazer com cada tarefa.", "Meta boa é específica, medível, possível, relevante e com prazo."],
        },
      ],
    },
    {
      title: "Foco e prática",
      lessons: [
        {
          id: "foco-e-procrastinacao",
          title: "Foco, distrações e procrastinação",
          summary: "Por que adiamos as coisas e técnicas para manter o foco.",
          goals: ["Entender o que é procrastinação", "Reconhecer o que mais desperdiça tempo", "Usar a Técnica Pomodoro"],
          sections: [
            {
              title: "O que é procrastinação",
              body: [
                "Procrastinar é adiar uma tarefa que precisa ser feita, mesmo sabendo que isso pode trazer problemas.",
                "Acontece por falta de planejamento, distrações, insegurança, dificuldade para começar ou porque a tarefa parece complicada demais.",
                { box: "exemplo", text: "Uma pessoa precisa preparar uma apresentação, mas vai adiando o começo e deixa tudo para o último dia." },
              ],
            },
            {
              title: "Como procrastinar menos",
              body: [
                { list: ["Divida tarefas grandes em partes menores", "Defina um horário para começar", "Crie metas claras e possíveis", "Diminua as distrações enquanto trabalha", "Use lembretes e listas de tarefas", "Reconheça o que você já fez"] },
                { box: "chave", text: "O objetivo não é fazer tudo perfeito. É começar, avançar e terminar." },
              ],
            },
            {
              title: "O que mais desperdiça tempo",
              body: [
                { table: { caption: "Hábitos que desperdiçam tempo", head: ["Hábito", "O que causa"], rows: [
                  ["Não planejar", "Confusão sobre o que fazer primeiro"],
                  ["Usar demais o celular", "Perda de concentração"],
                  ["Interrupções o tempo todo", "Dificuldade para terminar as tarefas"],
                  ["Fazer muitas coisas ao mesmo tempo", "Mais erros e menos atenção"],
                  ["Não definir prioridades", "Tempo gasto no que é menos importante"],
                ] } },
                "Observe a sua rotina, veja o que mais atrapalha e mude aos poucos.",
              ],
            },
            {
              title: "Técnica Pomodoro",
              body: [
                "Divide o trabalho em blocos de foco e pausas. O mais comum é trabalhar 25 minutos e descansar 5. Depois de alguns blocos, faça uma pausa maior.",
                { box: "pratica", text: "Coloque um alarme de 25 minutos, deixe o celular longe e faça uma tarefa só até o alarme tocar." },
                { box: "atencao", text: "Você pode ouvir falar da regra 80/20 (Princípio de Pareto): uma parte menor das ações pode trazer a maior parte dos resultados. É uma referência para achar o que mais importa, não uma regra exata." },
              ],
            },
          ],
          activity: {
            title: "Um Pomodoro de verdade",
            steps: ["Escolha uma tarefa que você está adiando.", "Faça um bloco de 25 minutos só nela, sem celular.", "Anote quantas vezes você teve vontade de parar e por quê."],
            answer: "Se você teve vontade de parar várias vezes, isso é normal no começo. As anotações mostram o que mais distrai você, e é por aí que vale começar a mudar.",
          },
          recap: ["Procrastinar é adiar o que precisa ser feito.", "Tarefa dividida em partes pequenas fica mais fácil de começar.", "No Pomodoro, são 25 minutos de foco e 5 de pausa."],
        },
        {
          id: "tempo-no-trabalho",
          title: "Gestão do tempo no trabalho",
          summary: "Ferramentas, boas atitudes e como saber se está funcionando.",
          goals: ["Escolher uma ferramenta de organização", "Aplicar a gestão do tempo no trabalho", "Avaliar se a sua organização está funcionando"],
          sections: [
            {
              title: "Ferramentas de organização",
              body: [
                { list: ["Agenda de papel ou no celular: compromissos, reuniões e prazos", "Google Agenda: eventos, lembretes e visão da semana", "Trello: tarefas em colunas como \"A fazer\", \"Fazendo\" e \"Feito\"", "Checklist: confere se nada importante ficou para trás"] },
                { box: "chave", text: "Não precisa usar todas. Escolha uma forma simples e mantenha atualizada." },
              ],
            },
            {
              title: "Boas atitudes no trabalho",
              body: [
                { list: ["Chegar preparado para começar no horário", "Conhecer os prazos e as prioridades do setor", "Manter documentos e arquivos organizados", "Avisar cedo sobre atrasos e dificuldades", "Pedir explicação quando uma tarefa não estiver clara", "Avisar o responsável quando duas prioridades baterem", "Reservar um tempo para revisar o trabalho antes de entregar"] },
                { box: "exemplo", text: "Um jovem aprendiz precisa organizar documentos, atualizar uma planilha e preparar material para uma reunião. Ele confere o horário da reunião, separa primeiro os documentos que ela vai usar e organiza o resto pelos prazos." },
              ],
            },
            {
              title: "Exemplo de um dia planejado",
              body: [
                { table: { caption: "Exemplo de planejamento no trabalho", head: ["Horário", "Atividade"], rows: [
                  ["08h00", "Conferir a agenda e as prioridades"],
                  ["08h15", "Fazer as tarefas mais importantes"],
                  ["09h30", "Pausa curta"],
                  ["09h45", "Organizar documentos e atualizar planilhas"],
                  ["11h00", "Responder pedidos e acompanhar pendências"],
                  ["13h00", "Continuar as tarefas do setor"],
                  ["15h00", "Terminar o que dá e organizar o dia seguinte"],
                ] } },
                "É só um exemplo: adapte aos seus horários, intervalos e tarefas.",
              ],
            },
            {
              title: "Está funcionando?",
              body: [
                "Alguns sinais simples ajudam a avaliar:",
                { list: ["Quantas tarefas você terminou", "Se os prazos foram cumpridos", "Quantas coisas foram esquecidas", "Quanto trabalho precisou ser refeito", "Se você conseguiu se reorganizar quando apareceu um imprevisto"] },
                { box: "atencao", text: "Esses sinais servem para melhorar, não para medir a velocidade de ninguém. A qualidade do trabalho continua sendo o mais importante." },
              ],
            },
          ],
          activity: {
            title: "Planeje o seu amanhã",
            steps: ["Liste tudo o que você precisa fazer amanhã.", "Marque as prioridades usando a Matriz de Eisenhower.", "Distribua as tarefas em horários, com pelo menos uma pausa.", "Amanhã à noite, confira o que deu certo e ajuste."],
            note: "Use papel, o celular ou uma das ferramentas desta aula: o importante é revisar no fim do dia.",
          },
          recap: ["Uma ferramenta simples e atualizada vale mais que várias abandonadas.", "Avisar cedo sobre atrasos é parte da gestão do tempo.", "Revise o dia para ajustar o plano do próximo."],
        },
      ],
    },
  ],
};
