// Curso: Gestão de tempo. 3 módulos, 7 aulas, um quiz por módulo e a prova final.
// Junta o material de introdução e o curso completo enviados pelo grupo. Segue o padrão de app/foundation-lessons.ts.

import type { CourseContent } from "../foundation-lessons";
import { PROVA_GESTAO_TEMPO } from "./gestao-tempo-prova";

export const GESTAO_TEMPO: CourseContent = {
  closing: "Organizar o tempo é organizar prioridades. Quando você sabe o que precisa ser feito e por que isso importa, trabalha com mais clareza e ainda sobra tempo para descansar. Comece pelo seu plano de 7 dias.",
  quiz: PROVA_GESTAO_TEMPO,
  stickers: [
    { id: "matriz-em-dia", name: "Matriz em dia", how: "Acertou 6 ou mais na Matriz de Eisenhower." },
    { id: "mestre-do-modulo-1", name: "Raio-X feito", how: "Acertou 8 ou mais no quiz do Módulo 1." },
    { id: "mestre-do-modulo-2", name: "Semana planejada", how: "Acertou 8 ou mais no quiz do Módulo 2." },
    { id: "mestre-do-modulo-3", name: "Foco total", how: "Acertou 8 ou mais no quiz do Módulo 3." },
  ],
  modules: [
    {
      title: "Fundamentos e diagnóstico",
      lessons: [
        {
          id: "o-que-e-gestao-do-tempo",
          title: "O que é gestão do tempo",
          summary: "O que é, para que serve, as quatro ideias principais e os cinco fundamentos.",
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
                "Todo mundo tem as mesmas horas no dia, mas cada um usa de um jeito. Sem planejamento, as tarefas se acumulam, os prazos apertam e o importante fica para depois.",
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
              title: "Os cinco fundamentos",
              body: [
                { list: [
                  "Clareza: saber o que precisa ser feito e qual resultado se espera.",
                  "Objetivos: ter metas que orientem as escolhas.",
                  "Prioridades: fazer primeiro o que tem mais importância ou prazo.",
                  "Foco: diminuir interrupções e fazer uma tarefa por vez.",
                  "Revisão: acompanhar o que funcionou e ajustar o plano.",
                ], ordered: true },
                { box: "chave", text: "Produtividade não é estar ocupado o dia inteiro. É avançar no que realmente importa." },
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
          recap: ["Gestão do tempo é usar o tempo com consciência, não correr mais.", "Clareza, objetivos, prioridades, foco e revisão andam juntos.", "Descanso também faz parte de um bom planejamento."],
        },
        {
          id: "diagnostico-e-objetivos",
          title: "Diagnóstico da rotina e objetivos",
          summary: "O raio-X do seu tempo, o que é essencial e como transformar intenção em objetivo claro.",
          goals: ["Fazer um raio-X de como você usa o tempo", "Separar o essencial do dispensável", "Transformar uma intenção vaga num objetivo claro"],
          sections: [
            {
              title: "Antes de mudar, observe",
              body: [
                "O diagnóstico é uma análise simples de como o seu dia acontece. Durante dois ou três dias, anote as principais atividades e quanto tempo, mais ou menos, cada uma levou.",
                { table: { caption: "Exemplo de registro de um dia", head: ["Período", "Atividade", "Tempo", "Observação"], rows: [
                  ["Manhã", "Aula", "4h30", "Chegou atrasado por causa do ônibus"],
                  ["Tarde", "Almoço e celular", "2h", "Era para ser meia hora de celular"],
                  ["Tarde", "Lição de casa", "40 min", "Parou várias vezes para ver mensagens"],
                  ["Noite", "Jantar, família e série", "3h", "Dormiu depois da meia-noite"],
                ] } },
                { list: ["Quais atividades ocupam mais tempo?", "Quais são essenciais?", "Em que momentos aparecem as interrupções?", "Existe tempo reservado para descanso?"] },
              ],
            },
            {
              title: "Essencial, importante, necessária ou dispensável?",
              body: [
                "Com o registro em mãos, classifique cada atividade:",
                { table: { caption: "Como classificar as atividades do dia", head: ["Tipo", "O que é", "Exemplo"], rows: [
                  ["Essencial", "Não dá para deixar de fazer", "Ir à aula ou ao trabalho, dormir, comer"],
                  ["Importante", "Ajuda a chegar aos seus objetivos", "Estudar para a prova, treinar para uma vaga"],
                  ["Necessária", "Precisa ser feita, mas não faz você avançar", "Lavar a louça, o trajeto de ônibus"],
                  ["Dispensável", "Pode ser reduzida ou cortada", "Rolar o feed sem objetivo"],
                ] } },
                { box: "pratica", text: "Depois de classificar, pergunte: qual mudança pequena teria o maior impacto na minha semana?" },
              ],
            },
            {
              title: "Palavras do dia a dia",
              body: [
                { table: { caption: "Vocabulário básico", head: ["Palavra", "O que é", "Exemplo"], rows: [
                  ["Tempo", "Recurso limitado, que precisa ser distribuído", "Reservar 40 minutos para estudar"],
                  ["Tarefa", "Uma ação específica a fazer", "Responder três e-mails"],
                  ["Prazo", "Data ou horário limite para terminar", "Entregar o relatório até sexta"],
                  ["Prioridade", "O grau de importância de uma atividade", "Terminar o trabalho que vale nota antes de enfeitar a capa"],
                  ["Produtividade", "Avançar no que importa, usando bem o tempo", "Terminar uma entrega com qualidade"],
                ] } },
              ],
            },
            {
              title: "Objetivos claros",
              body: [
                "Objetivo vago não ajuda a escolher tarefas nem a ver se você avançou. Troque a intenção por uma ação que dê para observar, com prazo e com um jeito de saber se terminou.",
                { table: { caption: "Do vago ao claro", head: ["Vago", "Mais claro"], rows: [
                  ["\"Quero estudar mais.\"", "\"Vou estudar matemática por 30 minutos, de segunda a quinta, nas próximas duas semanas.\""],
                  ["\"Preciso me organizar.\"", "\"Vou organizar os documentos pendentes do setor até sexta-feira.\""],
                ] } },
                "SMART é uma sigla em inglês. Uma boa meta é:",
                { list: ["Específica: diz exatamente o que fazer", "Mensurável: dá para medir", "Atingível: é possível de cumprir", "Relevante: faz sentido para você", "Temporal: tem prazo"] },
              ],
            },
          ],
          activity: {
            title: "Raio-X do tempo",
            steps: ["Escolha um dia recente e anote as atividades e o tempo de cada uma.", "Classifique cada atividade em essencial, importante, necessária ou dispensável.", "Escreva um objetivo vago que você tem e reescreva do jeito SMART."],
            fields: ["O que mais ocupou o meu tempo:", "O que era dispensável:", "Meu objetivo, do jeito SMART:"],
            answer: "Um bom objetivo SMART diz o que, quanto e até quando. Por exemplo: \"vou deixar o celular em outro cômodo durante 1 hora de estudo, de segunda a sexta, nas próximas três semanas\".",
          },
          recap: ["Observe dois ou três dias antes de mudar a rotina.", "Classifique: essencial, importante, necessária ou dispensável.", "Objetivo claro tem ação, medida e prazo."],
        },
      ],
      quiz: {
        sticker: { id: "mestre-do-modulo-1", min: 8 },
        questions: [
          { question: "Rafa passa o dia inteiro respondendo mensagens e resolvendo pedidos pequenos, mas o projeto principal não andou. Pela aula, ele foi produtivo?", options: ["Sim: quem fica ocupado do começo ao fim do dia está sempre sendo produtivo.", "Sim, desde que tenha respondido todas as mensagens.", "Não: produtividade é avançar no que importa, não estar ocupado.", "Não, porque ele deveria ter trabalhado mais horas."], answer: 2, why: "A aula diz que produtividade não é estar ocupado o dia inteiro, e sim avançar no que realmente importa." },
          { question: "Qual dos cinco fundamentos está em falta quando alguém começa uma tarefa sem saber qual resultado se espera dela?", options: ["Foco.", "Clareza.", "Revisão.", "Objetivos."], answer: 1, why: "Clareza é saber o que precisa ser feito e qual resultado se espera. Sem isso, até quem tem foco trabalha no escuro." },
          { question: "Para fazer o diagnóstico da rotina, por quanto tempo a aula sugere anotar as atividades?", options: ["Um mês inteiro, para ter certeza.", "Só uma manhã, que já basta.", "Uma semana, sem pular o fim de semana.", "Dois ou três dias."], answer: 3, why: "Dois ou três dias já mostram o padrão do dia, sem virar um trabalho cansativo." },
          { question: "No registro de Lia aparecem: ir à aula, estudar para o vestibular, pegar o ônibus e rolar o feed sem objetivo. Qual é a classificação certa, nessa ordem?", options: ["Essencial, importante, necessária e dispensável.", "Importante, essencial, dispensável e necessária.", "Essencial, necessária, importante e dispensável.", "Todas essenciais, porque fazem parte do dia dela."], answer: 0, why: "A aula é essencial; o estudo leva ao objetivo; o ônibus precisa acontecer mas não faz avançar; o feed sem objetivo pode ser cortado." },
          { question: "Qual destes é um objetivo claro, do jeito que a aula ensina?", options: ["\"Vou ser mais organizado a partir de agora.\"", "\"Vou estudar inglês por 20 minutos, de segunda a sexta, durante um mês.\"", "\"Quero melhorar muito nos estudos este ano.\"", "\"Vou tentar estudar sempre que der.\""], answer: 1, why: "Tem ação, medida (20 minutos, cinco dias) e prazo (um mês). Os outros são intenções vagas." },
          { question: "No método SMART, o que significa a letra T?", options: ["Tarefa: o objetivo precisa virar uma lista de tarefas.", "Total: o objetivo precisa cobrir tudo o que falta.", "Temporal: o objetivo precisa ter um prazo.", "Tranquilo: o objetivo não pode causar estresse."], answer: 2, why: "T é de temporal: o objetivo tem prazo definido. Os outros são específico, mensurável, atingível e relevante." },
          { question: "\"Vou correr uma maratona no mês que vem\", diz quem nunca correu. Qual letra do SMART esse objetivo deixa de cumprir?", options: ["Específico.", "Temporal.", "Mensurável.", "Atingível."], answer: 3, why: "Ele é específico, mensurável e tem prazo, mas não é possível de cumprir para quem nunca correu." },
          { question: "No vocabulário da aula, o que é um prazo?", options: ["A data ou o horário limite para terminar algo.", "O tempo que uma tarefa leva para ser feita.", "O grau de importância de uma atividade.", "A ordem em que as tarefas vão ser feitas."], answer: 0, why: "Prazo é o limite. O tempo que a tarefa leva é a estimativa; a importância é a prioridade." },
          { question: "Depois do raio-X, Bia descobriu que perde duas horas por dia no celular. Qual pergunta a aula sugere fazer em seguida?", options: ["Como posso cortar todo o lazer da semana?", "Qual mudança pequena teria o maior impacto na minha semana?", "Quantas tarefas a mais consigo encaixar nessas duas horas que estavam sobrando?", "Como fazer o dia render 100% do tempo?"], answer: 1, why: "A ideia é ajustar aos poucos, começando pela mudança pequena que mais ajuda, e não lotar o dia." },
          { question: "Por que a aula diz que descanso faz parte de um bom planejamento?", options: ["Porque quem descansa não precisa planejar.", "Porque o descanso só entra na agenda quando sobra algum tempo depois de todas as tarefas.", "Porque descansar é a única coisa importante.", "Porque gestão do tempo é equilibrar responsabilidades, produtividade e descanso."], answer: 3, why: "Gerenciar o tempo não é trabalhar sem parar: pausas, sono e lazer fazem parte do plano." },
        ],
      },
    },
    {
      title: "Planejar e priorizar",
      lessons: [
        {
          id: "prioridades-e-planejamento",
          title: "Prioridades e planejamento do dia",
          summary: "Urgente ou importante, a Matriz de Eisenhower e o plano do dia.",
          goals: ["Diferenciar urgente de importante", "Usar a Matriz de Eisenhower", "Montar um planejamento diário"],
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
                  ["Importante, não urgente", "Planejar e proteger um horário", "Estudar para a prova da semana que vem"],
                  ["Urgente, menos importante", "Avaliar, simplificar ou passar para outra pessoa, se for possível e autorizado", "Encaminhar um pedido que outra pessoa resolve"],
                  ["Nem urgente nem importante", "Reduzir, adiar ou cortar", "Olhar as notificações toda hora"],
                ] } },
                "A classificação depende do contexto, dos prazos e das responsabilidades de cada pessoa. Se o prazo ou o impacto mudar, reavalie.",
                "Treine com as tarefas abaixo. Cada resposta aparece na matriz.",
                { tool: "matriz-eisenhower" },
              ],
            },
            {
              title: "Planejamento diário em 5 passos",
              body: [
                { list: ["Registrar: anote as tarefas e os compromissos do dia.", "Classificar: veja o que é urgente, importante e secundário.", "Estimar: calcule mais ou menos quanto tempo cada tarefa leva.", "Executar: comece pelas prioridades e acompanhe o andamento.", "Revisar: veja o que ficou pronto e reorganize o que ficou pendente."], ordered: true },
                { box: "pratica", text: "Escolha de três a cinco prioridades realistas para o dia e já defina qual é a primeira ação de cada uma." },
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
          recap: ["Urgente tem prazo perto; importante faz diferença no resultado.", "A Matriz de Eisenhower diz o que fazer com cada tarefa.", "No dia: registrar, classificar, estimar, executar e revisar."],
        },
        {
          id: "planejamento-semanal",
          title: "Planejar a semana",
          summary: "Do objetivo à agenda, os blocos de tempo e a folga para os imprevistos.",
          goals: ["Transformar um objetivo em tarefas com horário", "Organizar a semana em blocos de tempo", "Deixar folga para pausas e imprevistos"],
          sections: [
            {
              title: "Do objetivo à agenda",
              body: [
                { table: { caption: "Cinco passos para tirar o plano do papel", head: ["Passo", "Como fazer", "Exemplo"], rows: [
                  ["1. Liste", "Anote todas as tarefas pendentes", "Preparar a apresentação; responder mensagens"],
                  ["2. Esclareça", "Diga qual é o resultado esperado de cada uma", "Slides revisados e prontos para apresentar"],
                  ["3. Estime", "Calcule quanto tempo cada uma pode levar", "Preparar a apresentação: cerca de 1h30"],
                  ["4. Agende", "Escolha um horário realista", "Terça, das 15h às 16h30"],
                  ["5. Revise", "Confira o andamento e ajuste", "Mudar a tarefa de dia se surgir um imprevisto"],
                ] } },
              ],
            },
            {
              title: "Primeiro a semana, depois o dia",
              body: [
                "No começo da semana, olhe os compromissos fixos (aula, trabalho, consultas), os prazos e os objetivos. Divida as tarefas grandes em etapas menores e espalhe essas etapas pelos dias.",
                "Na véspera ou de manhã, escolha as prioridades do dia, estime quanto tempo cada uma leva e defina a primeira ação.",
                { box: "exemplo", text: "Um trabalho em grupo para sexta vira: segunda, dividir as partes; terça, pesquisar; quarta, escrever a sua parte; quinta, juntar e revisar." },
              ],
            },
            {
              title: "Blocos de tempo",
              body: [
                "Reserve blocos na agenda para cada tipo de atividade: estudo, atendimento, tarefas administrativas e descanso. Assim você não fica decidindo a toda hora o que fazer.",
                { table: { caption: "Exemplo de uma tarde em blocos", head: ["Horário", "Bloco"], rows: [
                  ["14h00–15h30", "Estudo (celular longe)"],
                  ["15h30–15h45", "Pausa"],
                  ["15h45–16h15", "Mensagens e recados, todos de uma vez"],
                  ["16h15–17h00", "Tarefas de casa"],
                ] } },
              ],
            },
            {
              title: "Deixe folga",
              body: [
                "Não ocupe 100% do dia com tarefas. Reserve espaço para deslocamentos, pausas e imprevistos: eles sempre aparecem.",
                { box: "atencao", text: "A agenda serve de apoio, não de cobrança impossível. Se o dia mudar, reorganize em vez de desistir do plano." },
              ],
            },
          ],
          activity: {
            title: "Monte a sua semana",
            steps: [
              "Anote os compromissos fixos de cada dia.",
              "Escolha até três prioridades por dia e estime quanto tempo cada uma leva.",
              "Distribua as tarefas, reservando pausas e uma margem para imprevistos.",
              "No fim da semana, confira o que funcionou.",
            ],
            fields: ["Segunda:", "Terça:", "Quarta:", "Quinta:", "Sexta:", "Sábado e domingo:"],
            note: "Se um dia ficou cheio demais, passe uma tarefa para outro dia antes de começar a semana.",
          },
          recap: ["Liste, esclareça, estime, agende e revise.", "Planeje a semana e escolha as prioridades de cada dia.", "Deixe folga: agenda lotada não resiste ao primeiro imprevisto."],
        },
      ],
      quiz: {
        sticker: { id: "mestre-do-modulo-2", min: 8 },
        questions: [
          { question: "O trabalho de química vale nota e vence amanhã cedo. Em que quadrante da Matriz de Eisenhower ele fica?", options: ["Importante, não urgente: agendar para outro dia.", "Urgente e importante: fazer agora.", "Urgente, menos importante: pedir para outra pessoa.", "Nem urgente nem importante: cortar."], answer: 1, why: "Prazo perto (urgente) e impacto na nota (importante): é o quadrante de fazer agora." },
          { question: "Caio quer começar um curso de inglês para conseguir uma vaga daqui a seis meses. O que a matriz manda fazer com essa tarefa?", options: ["Agendar e proteger um horário para ela.", "Fazer agora, deixando tudo o mais de lado.", "Passar para outra pessoa da família.", "Cortar, porque não tem prazo perto."], answer: 0, why: "É importante, mas não urgente. Sem horário reservado, ela vai sendo adiada para sempre." },
          { question: "No meio do estudo, chega um pedido rápido de um colega que outra pessoa do grupo pode resolver. Pela matriz, o que fazer?", options: ["Parar tudo e resolver na hora, porque chegou agora.", "Ignorar para sempre, porque não é importante.", "Avaliar, simplificar ou passar para quem pode resolver.", "Colocar como prioridade número um do dia."], answer: 2, why: "Urgente e pouco importante para você: avalie, simplifique ou encaminhe, se for possível e combinado." },
          { question: "Por que a aula diz que a classificação na matriz depende de cada pessoa?", options: ["Porque a matriz só serve para quem trabalha em escritório, com chefe e prazos de entrega.", "Porque ninguém concorda sobre o que é urgente.", "Porque toda tarefa é importante para alguém.", "Porque depende do contexto, dos prazos e das responsabilidades de cada um."], answer: 3, why: "A mesma tarefa pode ser essencial para quem é responsável por ela e pouco importante para outra pessoa." },
          { question: "No planejamento diário em 5 passos, o que vem logo depois de registrar as tarefas?", options: ["Classificar o que é urgente, importante e secundário.", "Executar a tarefa mais fácil primeiro.", "Revisar o que ficou pendente.", "Estimar quanto tempo cada tarefa leva."], answer: 0, why: "A ordem é registrar, classificar, estimar, executar e revisar." },
          { question: "Quantas prioridades por dia a aula sugere escolher?", options: ["Uma só, sempre.", "Quantas couberem no dia, sem folga.", "De três a cinco, realistas.", "Dez, para garantir que o dia renda."], answer: 2, why: "De três a cinco prioridades realistas cabem no dia e deixam espaço para o resto." },
          { question: "Nos cinco passos \"do objetivo à agenda\", o que significa esclarecer uma tarefa?", options: ["Explicar a tarefa para outra pessoa da equipe.", "Dizer qual é o resultado esperado dela.", "Calcular quanto tempo ela vai levar.", "Escolher o horário em que ela vai ser feita."], answer: 1, why: "Esclarecer é definir o resultado esperado, como \"slides revisados e prontos\". Calcular o tempo é estimar; escolher o horário é agendar." },
          { question: "Ana encheu a agenda de terça das 8h às 22h, sem nenhum intervalo. O que a aula diz?", options: ["Está ótimo: dia cheio é dia produtivo.", "Só funciona se ela acordar mais cedo.", "Ela deveria ter colocado as tarefas fáceis primeiro, para ganhar ritmo no começo do dia.", "Não se ocupa 100% do dia: falta folga para pausas e imprevistos."], answer: 3, why: "Sem margem, o primeiro imprevisto derruba o plano inteiro. Deslocamentos, pausas e imprevistos precisam de espaço." },
          { question: "O que são blocos de tempo?", options: ["Horários reservados para um tipo de atividade, como estudo ou mensagens.", "Pausas de 5 minutos a cada 25 de trabalho.", "Tarefas grandes divididas em partes pequenas, feitas uma em cada dia da semana.", "Os dias da semana em que não se faz nada."], answer: 0, why: "Nos blocos, você reserva horários para atividades parecidas. Os 25 e 5 minutos são do Pomodoro." },
          { question: "Na quarta-feira apareceu um imprevisto e o plano da semana não vai dar certo. O que a aula recomenda?", options: ["Abandonar o plano e ir improvisando, um dia de cada vez, até o fim da semana.", "Compensar trabalhando de madrugada.", "Reorganizar: mudar tarefas de dia e seguir com o plano.", "Começar um plano novo só na semana seguinte."], answer: 2, why: "A agenda é apoio, não cobrança impossível. Se o dia mudar, reorganize." },
        ],
      },
    },
    {
      title: "Foco e prática",
      lessons: [
        {
          id: "foco-e-procrastinacao",
          title: "Foco, distrações e procrastinação",
          summary: "Por que adiamos as coisas e técnicas para manter o foco.",
          goals: ["Entender o que é procrastinação", "Reconhecer o que mais desperdiça tempo", "Usar o Pomodoro, a regra dos 2 minutos e o agrupamento"],
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
                { table: { caption: "Dificuldades e o que fazer", head: ["Dificuldade", "O que fazer"], rows: [
                  ["Distrações no celular", "Silencie as notificações que não são essenciais e deixe o celular longe durante o bloco de foco"],
                  ["Tarefa grande demais", "Divida em passos pequenos e comece por uma primeira ação de 5 a 10 minutos"],
                  ["Falta de clareza", "Escreva exatamente qual é a próxima ação e qual será o resultado"],
                  ["Interrupções frequentes", "Combine horários em que você está disponível e anote os assuntos para tratar depois"],
                  ["Cansaço", "Faça pausas, alterne tarefas pesadas e leves e respeite o descanso"],
                ] } },
                { list: ["Defina um horário para começar", "Use lembretes e listas de tarefas", "Reconheça o que você já fez"] },
                { box: "chave", text: "Procrastinação não se resolve só com força de vontade. Deixar a tarefa clara e começar pequeno ajuda. O objetivo não é fazer tudo perfeito: é começar, avançar e terminar." },
              ],
            },
            {
              title: "O que mais desperdiça tempo",
              body: [
                { table: { caption: "Hábitos que desperdiçam tempo", head: ["Hábito", "O que causa"], rows: [
                  ["Não planejar", "Confusão sobre o que fazer primeiro"],
                  ["Usar demais o celular", "Perda de concentração"],
                  ["Interrupções o tempo todo", "Dificuldade para terminar as tarefas"],
                  ["Procrastinar", "Tarefas acumuladas e prazos apertados"],
                  ["Documentos desorganizados", "Tempo perdido procurando informação"],
                  ["Reuniões sem objetivo claro", "Menos tempo para fazer as tarefas"],
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
            {
              title: "Regra dos 2 minutos e agrupamento",
              body: [
                { list: [
                  "Regra dos 2 minutos: se uma ação simples leva mesmo até dois minutos, pode valer a pena fazer na hora, desde que ela não interrompa uma tarefa prioritária.",
                  "Agrupamento: junte tarefas parecidas e faça de uma vez, como responder todas as mensagens num horário só ou organizar todos os documentos juntos.",
                ] },
                { box: "chave", text: "Nenhuma técnica funciona igual para todo mundo. Teste uma de cada vez, observe e adapte." },
              ],
            },
          ],
          activity: {
            title: "Um Pomodoro de verdade",
            steps: ["Escolha uma tarefa que você está adiando.", "Escreva qual é a primeira ação dela, de 5 a 10 minutos.", "Faça um bloco de 25 minutos só nela, sem celular.", "Anote quantas vezes você teve vontade de parar e por quê."],
            answer: "Se você teve vontade de parar várias vezes, isso é normal no começo. As anotações mostram o que mais distrai você, e é por aí que vale começar a mudar.",
          },
          recap: ["Procrastinar é adiar o que precisa ser feito; começar pequeno ajuda.", "No Pomodoro, são 25 minutos de foco e 5 de pausa.", "Regra dos 2 minutos e agrupamento: sem atrapalhar a prioridade."],
        },
        {
          id: "tempo-no-trabalho",
          title: "Gestão do tempo nos estudos e no trabalho",
          summary: "Ferramentas, boas atitudes e como saber se está funcionando.",
          goals: ["Escolher uma ferramenta de organização", "Aplicar a gestão do tempo nos estudos e no trabalho", "Avaliar se a sua organização está funcionando"],
          sections: [
            {
              title: "Ferramentas de organização",
              body: [
                { list: ["Lista de tarefas: anote o que precisa fazer, marque as prioridades e risque o que terminou", "Agenda de papel ou no celular: compromissos, reuniões e prazos", "Google Agenda: eventos, lembretes e visão da semana", "Trello: tarefas em colunas como \"A fazer\", \"Fazendo\" e \"Feito\"", "Checklist: confere se nada importante ficou para trás"] },
                { box: "chave", text: "Não precisa usar todas. Escolha uma forma simples e mantenha atualizada." },
              ],
            },
            {
              title: "Na escola e no trabalho",
              body: [
                { table: { caption: "Onde aplicar o que você aprendeu", head: ["Situação", "Como aplicar", "O que melhora"], rows: [
                  ["Estudos", "Dividir a matéria por temas e agendar revisões curtas", "Mais constância e clareza"],
                  ["Trabalho administrativo", "Agrupar e-mails, organizar documentos e acompanhar prazos", "Menos retrabalho"],
                  ["Projeto em equipe", "Definir responsáveis, etapas e datas de entrega", "Melhor coordenação"],
                  ["Compromissos pessoais", "Anotar horários e contar o tempo de deslocamento", "Menos conflitos de agenda"],
                  ["Tarefa longa", "Criar etapas menores e acompanhar cada avanço", "Mais facilidade para começar"],
                ] } },
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
                { list: ["Quantas tarefas você terminou", "Se os prazos foram cumpridos", "Quantas coisas foram esquecidas", "Quanto trabalho precisou ser refeito", "Quanto tempo foi para as tarefas prioritárias", "Se você conseguiu se reorganizar quando apareceu um imprevisto"] },
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
        {
          id: "rotina-e-plano-de-7-dias",
          title: "Uma rotina possível e o plano de 7 dias",
          summary: "Começo, meio e fim do dia, o ciclo de revisão e o seu plano para a próxima semana.",
          goals: ["Montar uma rotina realista", "Revisar a semana com o ciclo planejar, executar, verificar e ajustar", "Criar o seu plano de 7 dias"],
          sections: [
            {
              title: "Uma rotina possível",
              body: [
                "Rotina é uma sequência de atividades que se repetem. Ela dá estrutura ao dia, mas precisa aceitar mudanças e imprevistos.",
                { cards: [
                  { title: "De manhã", text: "Confira os compromissos e escolha a prioridade do dia." },
                  { title: "Durante o dia", text: "Trabalhe em blocos, faça pausas e anote as novas demandas para não esquecer." },
                  { title: "No fim do dia", text: "Veja o que foi concluído, reorganize as pendências e prepare o dia seguinte." },
                ] },
                { box: "atencao", text: "Inclua alimentação, deslocamento, sono, lazer e descanso. Rotina bem organizada não é rígida: é clara, realista e flexível." },
              ],
            },
            {
              title: "Planejar, executar, verificar e ajustar",
              body: [
                { list: [
                  "Planejar: defina o objetivo, as tarefas, as prioridades e os prazos.",
                  "Executar: faça as atividades e anote o que atrapalhou.",
                  "Verificar: compare o que foi planejado com o que foi feito.",
                  "Ajustar: mude as estimativas, os horários ou as estratégias para a semana seguinte.",
                ], ordered: true },
                "Na revisão da semana, pergunte: o que funcionou? O que levou mais tempo do que eu esperava? O que dá para simplificar? Qual é a prioridade da próxima semana?",
              ],
            },
            {
              title: "O plano de 7 dias",
              body: [
                "Escolha uma mudança pequena e acompanhe durante uma semana. O objetivo é experimentar, não ser perfeito.",
                { table: { caption: "Uma ação por dia", head: ["Dia", "Ação"], rows: [
                  ["1", "Anotar como uso o meu tempo"],
                  ["2", "Escolher três prioridades realistas"],
                  ["3", "Organizar as tarefas em blocos de tempo"],
                  ["4", "Testar uma técnica de foco"],
                  ["5", "Revisar prazos e pendências"],
                  ["6", "Ajustar a rotina e reservar pausas"],
                  ["7", "Avaliar os resultados e planejar a próxima semana"],
                ] } },
              ],
            },
            {
              title: "Para ir além",
              body: [
                "Se quiser se aprofundar, estes livros são clássicos sobre o assunto:",
                { list: [
                  "Os 7 Hábitos das Pessoas Altamente Eficazes, de Stephen R. Covey: organização pessoal e prioridades.",
                  "A Arte de Fazer Acontecer, de David Allen: anotar, organizar e revisar as tarefas.",
                  "O Gestor Eficaz, de Peter F. Drucker: prioridades e eficácia no trabalho.",
                ] },
                { box: "chave", text: "Organização se constrói aos poucos. Comece com uma mudança simples: anote as tarefas, escolha uma prioridade e reserve um horário para ela." },
              ],
            },
          ],
          activity: {
            title: "Meu compromisso",
            steps: ["Copie o plano de 7 dias para o seu caderno ou celular.", "Escreva o seu compromisso com uma frase só.", "No sétimo dia, responda às perguntas da revisão da semana."],
            fields: ["A partir de hoje, eu vou:", "O que funcionou na semana:", "O que vou ajustar na próxima:"],
            note: "Se pulou um dia, tudo bem: retome no dia seguinte. O plano serve para experimentar, não para cobrar perfeição.",
          },
          recap: ["Rotina boa é clara, realista e flexível.", "Planejar, executar, verificar e ajustar, toda semana.", "Uma mudança pequena por vez, acompanhada por 7 dias."],
        },
      ],
      quiz: {
        sticker: { id: "mestre-do-modulo-3", min: 8 },
        questions: [
          { question: "Júlia adia há duas semanas um trabalho de 20 páginas porque não sabe por onde começar. Pela tabela da aula, o que fazer?", options: ["Esperar a motivação chegar para fazer tudo de uma vez.", "Dividir em passos pequenos e começar por uma ação de 5 a 10 minutos.", "Fazer tudo na véspera, quando a pressão ajuda.", "Pedir mais prazo ao professor antes de tentar começar qualquer parte do trabalho."], answer: 1, why: "Tarefa grande demais trava o começo. Uma primeira ação curta tira a tarefa do lugar." },
          { question: "Teo estuda e é interrompido o tempo todo pelos irmãos. Qual estratégia a aula sugere para interrupções frequentes?", options: ["Estudar de madrugada, quando ninguém está acordado.", "Desistir de estudar em casa.", "Combinar horários em que está disponível e anotar os assuntos para depois.", "Responder cada interrupção na hora, para elas acabarem logo e sobrar tempo depois."], answer: 2, why: "Combinar a disponibilidade e anotar o assunto protege o bloco de foco sem ignorar as pessoas." },
          { question: "Na Técnica Pomodoro, como costuma ser o ciclo mais comum?", options: ["25 minutos de foco e 5 de pausa, com uma pausa maior depois de alguns ciclos.", "50 minutos de foco e 25 de pausa, repetindo o ciclo até terminar a tarefa.", "Uma hora de foco e uma hora de pausa.", "5 minutos de foco e 25 de pausa."], answer: 0, why: "O comum é 25 de foco e 5 de pausa. Depois de alguns ciclos, uma pausa mais longa." },
          { question: "Durante um bloco de estudo para a prova de amanhã, Duda lembra que precisa responder uma mensagem que leva um minuto. Pela regra dos 2 minutos, o que fazer?", options: ["Responder na hora, porque leva menos de 2 minutos.", "Nunca responder mensagens no mesmo dia.", "Responder e já aproveitar para ver as outras conversas, que também são rápidas.", "Anotar e responder depois: a regra não vale se interromper a prioridade."], answer: 3, why: "A regra dos 2 minutos só vale quando a ação não interrompe uma tarefa prioritária." },
          { question: "Leo responde e-mails a cada 10 minutos, entre uma tarefa e outra. Qual técnica da aula ajudaria?", options: ["Agrupamento: responder todos os e-mails num horário só.", "Regra dos 2 minutos: responder cada um na hora.", "Pomodoro: responder e-mails durante as pausas de 5 minutos.", "Pareto: responder só 20% dos e-mails."], answer: 0, why: "Agrupar tarefas parecidas evita trocar de assunto o tempo todo." },
          { question: "Fazer várias coisas ao mesmo tempo aparece na tabela dos desperdiçadores. O que ela diz que isso causa?", options: ["Mais rapidez em todas as tarefas.", "Mais erros e menos atenção.", "Menos reuniões sem objetivo.", "Mais tempo livre no fim do dia."], answer: 1, why: "Dividir a atenção aumenta os erros e diminui a concentração." },
          { question: "Num projeto em equipe, o que a aula sugere para melhorar a coordenação?", options: ["Deixar cada um fazer a sua parte quando puder.", "Uma pessoa faz tudo para não haver atraso.", "Definir responsáveis, etapas e datas de entrega.", "Fazer reuniões todos os dias, sem pauta."], answer: 2, why: "Com responsável, etapa e data definidos, todo mundo sabe o que fazer e quando." },
          { question: "Qual destes NÃO é um sinal da aula para avaliar se a organização está funcionando?", options: ["Os prazos foram cumpridos.", "Quantas coisas foram esquecidas.", "Quanto trabalho precisou ser refeito antes de ser entregue de novo.", "A velocidade com que a pessoa trabalha comparada aos colegas."], answer: 3, why: "Os sinais servem para melhorar, não para medir a velocidade de ninguém. A qualidade continua sendo o mais importante." },
          { question: "No ciclo planejar, executar, verificar e ajustar, o que se faz na etapa de verificar?", options: ["Comparar o que foi planejado com o que foi feito.", "Anotar o que atrapalhou durante as tarefas.", "Definir os prazos da semana seguinte.", "Mudar os horários que não funcionaram."], answer: 0, why: "Verificar é comparar plano e realidade. Anotar obstáculos é na execução; mudar horários é no ajuste." },
          { question: "No dia 4 do plano de 7 dias, Gabi esqueceu de testar a técnica de foco. O que a aula diz?", options: ["Ela precisa recomeçar o plano do dia 1.", "Ela deve fazer duas ações no mesmo dia, a do dia 4 e a do dia 5, para compensar.", "Tudo bem: o plano é para experimentar, então ela retoma no dia seguinte.", "O plano falhou e não vale a pena continuar."], answer: 2, why: "O objetivo do plano de 7 dias é experimentar, não buscar perfeição." },
        ],
      },
    },
  ],
};
