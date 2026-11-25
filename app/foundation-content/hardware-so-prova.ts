// Perguntas da prova final de Hardware e sistema operacional: 7 por módulo. A roleta sorteia 10, equilibrando os módulos.
// A primeira opção é sempre a certa; a ordem é embaralhada na hora de mostrar.

import type { QuizQuestion } from "../foundation-lessons";

export const PROVA_HARDWARE_SO: QuizQuestion[] = [
  // Módulo 1 · Informática básica
  {
    module: 0,
    question: "Pela aula, por que o Windows é chamado de sistema operacional?",
    options: ["Porque fica entre você e as peças e faz acontecer o que você pede.", "Porque é a peça que faz todas as contas do computador, como um cérebro.", "Porque é o programa usado para entrar em sites e pesquisar.", "Porque guarda os arquivos mesmo com o computador desligado."],
    why: "O Windows é o programa principal: recebe o que você pede e organiza as peças para fazer acontecer.",
    ref: "Aula 1 · Conhecendo o computador",
  },
  {
    module: 0,
    question: "Você vai sair por meia hora e quer voltar rápido ao que estava fazendo. Qual opção do botão Energia a aula indica?",
    options: ["Suspender.", "Reiniciar.", "Desligar.", "Fechar ( ✕ )."],
    why: "Suspender deixa o computador \"cochilando\". Reiniciar ajuda quando trava, e Desligar é para o fim do dia.",
    ref: "Aula 1 · Conhecendo o computador",
  },
  {
    module: 0,
    question: "O Windows avisa que vai instalar atualizações. O que a aula pede antes?",
    options: ["Salvar o que estiver fazendo: o computador pode reiniciar.", "Desligar o Wi-Fi para a atualização não travar no meio.", "Esvaziar a Lixeira para sobrar espaço para a atualização.", "Fechar o Gerenciador de Tarefas e desinstalar o antivírus por um tempo."],
    why: "Salve antes, porque o computador pode reiniciar, e nunca desligue enquanto ele estiver atualizando.",
    ref: "Aula 2 · Explorando o Windows",
  },
  {
    module: 0,
    question: "Na aula, qual é a função de um driver?",
    options: ["Ensinar o Windows a conversar com um aparelho.", "Ligar o aparelho ao computador por um cabo.", "Guardar os arquivos copiados do pen drive.", "Proteger as peças contra variações de energia."],
    why: "O aparelho é o hardware; o driver é o programa que faz o Windows entender aquele aparelho.",
    ref: "Aula 3 · Dispositivos e cuidados",
  },
  {
    module: 0,
    question: "Filtro de linha e \"benjamim\" (o T) fazem a mesma coisa?",
    options: ["Não: só o filtro de linha protege contra variações.", "Sim: os dois protegem as peças contra picos de energia.", "Não: o benjamim protege melhor, porque divide a corrente.", "Sim: a diferença entre os dois é só o formato."],
    why: "A aula diferencia os dois: o filtro de linha é o que protege contra as variações que podem queimar as peças.",
    ref: "Aula 3 · Dispositivos e cuidados",
  },
  {
    module: 0,
    question: "No endereço de e-mail maria.souza@exemplo.com, o que vem depois do @?",
    options: ["O nome do serviço de e-mail.", "O nome da pessoa que usa a conta.", "A senha da conta, de forma escondida.", "O assunto padrão das mensagens."],
    why: "Antes do @ vem o nome da pessoa; depois, o nome do serviço.",
    ref: "Aula 4 · Internet, pesquisa e segurança digital",
  },
  {
    module: 0,
    question: "Numa pesquisa, os primeiros resultados aparecem com o aviso \"Patrocinado\". O que isso quer dizer?",
    options: ["São anúncios pagos.", "São os sites mais confiáveis.", "São sites do governo.", "São os resultados mais recentes."],
    why: "Patrocinado é propaganda. Estar no topo não quer dizer que o site seja o melhor nem o mais confiável.",
    ref: "Aula 4 · Internet, pesquisa e segurança digital",
  },

  // Módulo 2 · Hardware
  {
    module: 1,
    question: "Qual destes periféricos é de entrada e saída?",
    options: ["Headset.", "Microfone.", "Impressora.", "Scanner."],
    why: "O headset toca o som e capta a voz. Microfone e scanner são de entrada; a impressora é de saída.",
    ref: "Aula 5 · Fundamentos de hardware",
  },
  {
    module: 1,
    question: "Para que serve a pasta térmica?",
    options: ["Ajuda o calor a passar do processador para o dissipador.", "Cola o processador no soquete para ele não se soltar com o calor.", "Isola a placa-mãe da eletricidade estática do corpo.", "Esfria a fonte quando ela trabalha perto do limite de potência."],
    why: "É uma camada fina que preenche falhas microscópicas e ajuda o calor a passar para o dissipador.",
    ref: "Aula 6 · Dentro do computador",
  },
  {
    module: 1,
    question: "O computador de Ana sempre liga com a data e a hora erradas. Qual peça a aula aponta como responsável por guardá-las?",
    options: ["A bateria CMOS da placa-mãe.", "A memória RAM, junto com o resto do sistema.", "A fonte de alimentação, mesmo desligada.", "A memória cache L3 do processador."],
    why: "A bateria CMOS mantém data, hora e configurações com o computador desligado. A RAM se apaga ao desligar.",
    ref: "Aula 6 · Dentro do computador",
  },
  {
    module: 1,
    question: "Qual é o menor dos três formatos de placa-mãe da aula?",
    options: ["Mini-ITX.", "Micro-ATX.", "ATX.", "PCIe."],
    why: "ATX é o padrão, Micro-ATX é menor e Mini-ITX é o menor. PCIe é um tipo de slot, não um formato de placa.",
    ref: "Aula 6 · Dentro do computador",
  },
  {
    module: 1,
    question: "Por que o SSD é mais rápido que o HD?",
    options: ["Porque usa memória flash e não tem partes móveis.", "Porque sempre tem mais capacidade que um HD do mesmo preço.", "Porque usa a memória RAM do sistema para guardar os arquivos.", "Porque fica ligado direto na fonte, sem passar pela placa-mãe."],
    why: "O HD depende de peças que giram e se movem. O SSD não tem partes móveis.",
    ref: "Aula 7 · Dados e conexões",
  },
  {
    module: 1,
    question: "Na regra 3-2-1 do backup, o que significa o 1?",
    options: ["Uma das cópias fica fora de casa.", "Uma cópia nova por mês.", "Um disco usado só para o backup.", "Uma senha diferente para cada cópia."],
    why: "Três cópias, em dois tipos de mídia diferentes, com uma delas fora do local.",
    ref: "Aula 8 · Montagem e manutenção",
  },
  {
    module: 1,
    question: "O computador esquenta, as ventoinhas fazem barulho e ele desliga sozinho. O que a aula manda conferir?",
    options: ["Poeira, pasta térmica, ventoinhas e fluxo de ar.", "Espaço livre no disco e programas que abrem ao ligar.", "O cabo do monitor e a saída de vídeo que está em uso no momento.", "A versão do navegador e as atualizações dos aplicativos."],
    why: "Esses são os sinais de superaquecimento. Espaço em disco e inicialização são verificações de lentidão.",
    ref: "Aula 8 · Montagem e manutenção",
  },
];
