// Curso: Hardware e sistema operacional. 2 módulos, 8 aulas, um quiz por módulo e a prova final.
// Módulo 1, Informática básica (do botão de ligar à internet), e Módulo 2, Hardware (por dentro do computador),
// cada um feito por uma pessoa do grupo. Segue o padrão de app/foundation-lessons.ts.

import type { CourseContent } from "../foundation-lessons";
import { PROVA_HARDWARE_SO } from "./hardware-so-prova";

export const HARDWARE_SO: CourseContent = {
  closing: "Agora você sabe o caminho completo: do botão de ligar à internet, e do que está dentro do gabinete à manutenção. O computador está sempre mudando, e você tem a base para continuar aprendendo. Explore, pratique e não tenha medo de errar.",
  quiz: PROVA_HARDWARE_SO,
  stickers: [
    { id: "toca-ou-usa", name: "Toca ou usa", how: "Acertou 7 ou mais em \"Hardware ou software?\"." },
    { id: "olho-no-golpe", name: "Olho no golpe", how: "Achou todos os sinais, sem marcar nada a mais, em 3 das 4 mensagens da Caça ao golpe." },
    { id: "mestre-do-modulo-1", name: "Computador sem medo", how: "Acertou 8 ou mais no quiz do Módulo 1." },
    { id: "mestre-do-modulo-2", name: "Raio-X do PC", how: "Acertou 8 ou mais no quiz do Módulo 2." },
  ],
  modules: [
    {
      title: "Informática básica: do botão de ligar à internet",
      lessons: [
        {
          id: "conhecendo-o-computador",
          title: "Conhecendo o computador",
          summary: "Para que ele serve, as partes que você vê, peças e programas, o Windows e os primeiros passos.",
          goals: ["Reconhecer as partes do computador", "Diferenciar hardware e software", "Ligar, abrir programas, usar janelas e desligar do jeito certo"],
          sections: [
            {
              title: "O que é um computador?",
              body: [
                "Você não precisa decorar nomes técnicos nem saber como o computador funciona por dentro. Aqui o objetivo é conhecer o computador e dar os primeiros passos, sem medo.",
                "O computador é uma ferramenta que ajuda em muitas coisas do dia a dia:",
                { list: [
                  "Escrever um currículo, uma carta ou uma lista de compras.",
                  "Pesquisar notícias, receitas e serviços públicos.",
                  "Conversar por mensagens ou chamadas de vídeo.",
                  "Guardar fotos, documentos e vídeos.",
                  "Estudar em cursos on-line e trabalhar com planilhas, apresentações e e-mails.",
                ] },
                "Muita coisa você talvez já faça no celular. O computador faz o mesmo, com uma tela maior e um teclado para escrever com mais conforto.",
                "Um computador de mesa tem quatro partes que você vê: o monitor (a tela), o gabinete (a caixa onde fica o botão de ligar), o teclado (para escrever) e o mouse, que move uma setinha na tela. Apertar o botão esquerdo do mouse sobre alguma coisa é clicar.",
                { table: { caption: "Computador de mesa ou notebook?", head: ["Computador de mesa", "Notebook"], rows: [
                  ["Partes separadas, ligadas por cabos", "Tudo junto em um só aparelho"],
                  ["Fica sempre no mesmo lugar", "Pode ser levado para qualquer lugar"],
                  ["Precisa estar na tomada", "Funciona com bateria"],
                  ["Usa mouse", "Tem um touchpad no lugar do mouse"],
                ] } },
              ],
            },
            {
              title: "Peças e programas",
              body: [
                { image: "/images/fundacao/aulas/hardware-so/bios-1-hardware-software.webp", alt: "Slide \"Hardware × Software\": de um lado, hardware é a parte física, aquilo que você pode tocar; do outro, software são os programas que dão instruções ao computador. Ao lado, foto de peças de computador e de telas com programas." },
                "Dentro do gabinete existem peças que fazem o computador funcionar: umas fazem as contas, outras guardam as informações. Mas as peças sozinhas não fazem nada. Elas precisam de programas, que dizem o que fazer, assim como um carro precisa de um motorista.",
                "Em inglês, as peças se chamam hardware e os programas, software.",
                { table: { caption: "Exemplos", head: ["Hardware (as peças)", "Software (os programas)"], rows: [
                  ["Monitor, gabinete, teclado e mouse", "Windows"],
                  ["Processador, placa-mãe e fonte", "Calculadora e navegador de internet"],
                  ["A tela e a câmera do celular", "O WhatsApp do celular"],
                ] } },
                { box: "chave", text: "Hardware você toca. Software você usa." },
                { box: "pratica", title: "Para saber mais", text: "As principais peças de dentro do gabinete são o processador (faz as contas, como um cérebro), a placa-mãe (onde as peças se encaixam) e a fonte (leva energia às peças). No Módulo 2, você conhece cada uma de perto." },
                {
                  sort: {
                    title: "Hardware ou software?",
                    labels: ["Hardware", "Software"],
                    items: [
                      { text: "O teclado.", answer: 0, why: "É uma peça: dá para tocar." },
                      { text: "O Windows.", answer: 1, why: "É o programa principal do computador: você usa, mas não toca." },
                      { text: "A Calculadora.", answer: 1, why: "É um programa que vem com o Windows." },
                      { text: "A placa-mãe.", answer: 0, why: "É a peça de dentro do gabinete onde as outras se encaixam." },
                      { text: "O driver que faz a impressora funcionar.", answer: 1, why: "A impressora é hardware, mas o driver é um programa: ensina o Windows a conversar com ela." },
                      { text: "A câmera do celular.", answer: 0, why: "A câmera é uma peça. O aplicativo que tira a foto é que é software." },
                      { text: "O WhatsApp.", answer: 1, why: "É um aplicativo, ou seja, um programa." },
                      { text: "O pen drive.", answer: 0, why: "É um aparelho que você segura. Os arquivos guardados nele é que são dados." },
                    ],
                    sticker: { id: "toca-ou-usa", min: 7 },
                  },
                },
              ],
            },
            {
              title: "Ligando e conhecendo o Windows",
              body: [
                { list: [
                  "Aperte o botão de ligar do gabinete. Ele costuma ter o símbolo ⏻ (um círculo com um tracinho em cima). No notebook, fica perto do teclado.",
                  "Se a tela continuar apagada, aperte também o botão do monitor. Em muitos computadores de mesa, o monitor tem um botão separado.",
                  "Espere, sem apertar o botão de novo. Depois de alguns instantes, aparece a tela de senha ou a tela principal.",
                ], ordered: true },
                { image: "/images/fundacao/aulas/hardware-so/windows-1-como-funciona.webp", alt: "Slide \"Como o Windows funciona?\": esquema com três caixas ligadas por setas. Usuário (comandos e escolhas), Windows (organiza e coordena) e hardware (processa e armazena)." },
                "O Windows é o programa principal do computador. Ele fica entre você e as peças: você clica, e o Windows faz acontecer. Por isso ele é chamado de sistema operacional. O celular também tem um: o Android ou, no iPhone, o iOS.",
                { box: "exemplo", text: "É como num restaurante: você faz o pedido ao garçom (o Windows), que leva para a cozinha (as peças). Você não precisa saber como a cozinha funciona." },
                "Depois que o Windows carrega, aparece a tela principal, chamada área de trabalho:",
                { list: [
                  "Ícones: abrem pastas e programas com dois cliques rápidos.",
                  "Botão Iniciar: abre a lista de todos os programas.",
                  "Barra de tarefas: a faixa de baixo, com os programas abertos.",
                  "Relógio e notificações: a hora, a data e os avisos do computador, no canto direito.",
                ] },
                { box: "exemplo", title: "Na prática, isso serve para quê?", text: "Na escola, no trabalho ou numa lan house, todo computador com Windows mostra essa mesma tela. Conhecendo-a, você sempre sabe por onde começar: pelo botão Iniciar." },
              ],
            },
            {
              title: "Programas e janelas",
              body: [
                "Cada programa serve para uma tarefa, como os aplicativos do celular. Veja alguns dos mais usados:",
                { table: { caption: "Programas do dia a dia", head: ["Programa", "Para que serve"], rows: [
                  ["Navegador de internet (Microsoft Edge, Google Chrome)", "Entrar em sites, pesquisar e acessar o e-mail"],
                  ["Editor de texto (Bloco de Notas, Word)", "Escrever textos, cartas e currículos"],
                  ["Calculadora", "Fazer contas"],
                  ["Fotos", "Ver imagens e vídeos guardados no computador"],
                  ["Explorador de Arquivos", "Encontrar e organizar seus arquivos e pastas"],
                ] } },
                "Esses programas são chamados de aplicativos e funcionam dentro do Windows. Cada um precisa ser feito para o sistema certo: um aplicativo de celular Android não funciona no Windows, e um programa de Windows não funciona no celular. Alguns já vêm com o Windows; outros precisam ser instalados depois.",
                "Para abrir a Calculadora: clique no botão Iniciar. Se não encontrar o programa, clique na caixa de pesquisa e digite \"calculadora\". O Windows mostra o programa enquanto você digita. Clique nele e a Calculadora abre em uma janela.",
                { table: { caption: "Os três botões do canto de cima, à direita, de toda janela", head: ["Botão", "O que faz"], rows: [
                  ["Minimizar ( – )", "Esconde a janela, mas o programa continua aberto. Para voltar, clique nele na barra de tarefas."],
                  ["Maximizar ( ▢ )", "A janela ocupa a tela inteira. Clique de novo para voltar ao tamanho anterior."],
                  ["Fechar ( ✕ )", "Fecha o programa. Se algo não foi salvo, o Windows pergunta antes."],
                ] } },
                { box: "exemplo", title: "Na prática, isso serve para quê?", text: "Muitas vagas pedem \"conhecimento em editor de texto\" ou \"saber usar o navegador\". Agora você sabe o que esses nomes significam." },
              ],
            },
            {
              title: "Desligando do jeito certo",
              body: [
                "Para desligar, o certo é avisar o Windows antes. Assim, ele fecha tudo com calma. Clique em Iniciar, depois no botão Energia ⏻, no canto de baixo do menu, e escolha uma opção:",
                { list: [
                  "Desligar: desliga tudo. Use no fim do dia.",
                  "Reiniciar: desliga e liga de novo. Ajuda quando o computador trava.",
                  "Suspender: deixa o computador \"cochilando\" para você voltar rápido.",
                ] },
                { box: "atencao", text: "Não desligue tirando da tomada nem segurando o botão de ligar. Você pode perder o que não salvou, e o Windows pode apresentar problemas depois." },
                { image: "/images/fundacao/aulas/hardware-so/bios-4-configuracao.webp", alt: "Slide \"A primeira configuração do sistema operacional\": quatro etapas lado a lado. Idioma (Português do Brasil), região (formato de data e hora), teclado (ABNT2) e conta e segurança (conta, senha ou PIN)." },
                { box: "pratica", title: "Para saber mais", text: "Na primeira vez que um computador novo liga, o Windows pede algumas escolhas: idioma, região, teclado, internet e uma conta com senha ou PIN. No Brasil, o teclado mais comum é o ABNT2, que tem a tecla Ç. Guarde a senha ou o PIN num lugar seguro: esquecer pode dificultar muito o acesso." },
              ],
            },
          ],
          activity: {
            title: "Primeiros passos",
            steps: [
              "Ligue o computador e espere a área de trabalho aparecer, sem apertar o botão de novo.",
              "Abra a Calculadora pelo botão Iniciar ou pela caixa de pesquisa e faça uma conta.",
              "Minimize a janela e traga de volta pela barra de tarefas. Depois, maximize e feche.",
              "Desligue pelo botão Iniciar > Energia > Desligar.",
            ],
            answer: "Quando você minimiza, a Calculadora não fecha: o ícone dela continua na barra de tarefas, e um clique traz a janela de volta. Só o ✕ fecha o programa de verdade.",
            note: "Sem computador por perto? Acompanhe pelos passos e pela tabela de botões: eles mostram tudo o que você precisa ver.",
          },
          recap: ["Hardware você toca; software você usa.", "O Windows é o sistema operacional: fica entre você e as peças.", "Desligue pelo Iniciar > Energia, nunca tirando da tomada."],
        },
        {
          id: "explorando-o-windows",
          title: "Explorando o Windows",
          summary: "Arquivos, pastas e Lixeira, memória e armazenamento, configurações e programas seguros.",
          goals: ["Criar pastas, salvar arquivos e usar a Lixeira", "Diferenciar memória RAM e armazenamento", "Ajustar o computador e instalar programas com segurança"],
          sections: [
            {
              title: "Arquivos e pastas",
              body: [
                { image: "/images/fundacao/aulas/hardware-so/windows-2-arquivos-pastas.webp", alt: "Slide \"Arquivos e pastas\": uma pasta com três tipos de arquivo dentro, documentos, imagens e vídeos. As pastas ajudam a organizar os arquivos e facilitam encontrá-los." },
                "Tudo o que você guarda no computador é um arquivo: uma foto, um documento, uma música. Cada tipo abre no programa certo. Às vezes, o tipo aparece no fim do nome, depois de um ponto, como um sobrenome:",
                { table: { caption: "Os tipos mais comuns", head: ["Final do nome", "Tipo", "Abre no"], rows: [
                  [".pdf e .docx", "Documentos (currículo, carta, boleto)", "Editor de texto ou leitor de PDF"],
                  [".jpg e .png", "Imagens (fotos e desenhos)", "Fotos"],
                  [".mp4", "Vídeos", "Reprodutor de vídeo"],
                  [".mp3", "Músicas e outros áudios", "Reprodutor de música"],
                ] } },
                "Uma pasta guarda vários arquivos juntos, como uma gaveta. E uma pasta pode ter outras pastas dentro. O Windows já vem com algumas prontas: Documentos (textos e arquivos de trabalho), Imagens (fotos), Downloads (onde ficam os arquivos baixados da internet) e Área de trabalho (o que aparece na tela principal).",
                "As pastas aparecem no Explorador de Arquivos, o programa da pastinha amarela da barra de tarefas (atalho: Windows + E). Para criar uma pasta:",
                { list: [
                  "No lado esquerdo, clique em Documentos.",
                  "Clique em Novo e escolha Pasta. Surge uma \"Nova pasta\", com o nome já selecionado.",
                  "Digite o nome que você quer, por exemplo \"Receitas\", e aperte Enter.",
                ], ordered: true },
              ],
            },
            {
              title: "Salvar e a Lixeira",
              body: [
                "Um texto só fica guardado depois que você salva. No Bloco de Notas, por exemplo: clique em Arquivo > Salvar como, escolha a pasta no lado esquerdo, digite em Nome do arquivo um nome fácil de reconhecer e clique em Salvar. Depois, para salvar as mudanças, basta Ctrl + S.",
                { box: "exemplo", title: "Na prática, isso serve para quê?", text: "Daqui a um mês, você vai procurar seu currículo. Se ele estiver salvo como \"Currículo Maria 2026\" na pasta Documentos, você o encontra em segundos. Se estiver como \"Documento 1\", perdido em algum lugar, a busca vira um problema." },
                "Para apagar um arquivo, clique nele com o botão direito e escolha Excluir. Ele não some de vez: vai para a Lixeira, que fica na área de trabalho.",
                "Apagou sem querer? Abra a Lixeira, clique no arquivo com o botão direito e escolha Restaurar: ele volta para o lugar de onde saiu. Só quando você esvazia a Lixeira os arquivos são apagados de vez.",
                { box: "atencao", text: "Arquivos apagados de um pen drive não vão para a Lixeira: são apagados na hora. Antes de excluir, confira se é mesmo o arquivo certo." },
              ],
            },
            {
              title: "Onde o computador guarda as coisas",
              body: [
                { image: "/images/fundacao/aulas/hardware-so/windows-3-ram.webp", alt: "Slide \"Memória RAM e armazenamento\": dois quadros. Memória RAM mantém temporariamente os dados dos programas em execução; SSD/HD guarda arquivos, programas e o sistema mesmo com o computador desligado." },
                "Duas peças de dentro do gabinete guardam informações. A memória RAM é como uma mesa de trabalho: guarda o que você está usando agora. É rápida, mas se esvazia quando o computador desliga. O armazenamento (chamado de SSD ou HD) é como um armário: guarda seus arquivos, os programas e o próprio Windows, mesmo com o computador desligado.",
                { table: { caption: "Mesa ou armário?", head: ["Memória RAM", "Armazenamento (SSD ou HD)"], rows: [
                  ["Guarda o que está sendo usado agora", "Guarda tudo o que foi salvo"],
                  ["Esvazia quando o computador desliga", "Continua guardado com o computador desligado"],
                  ["Como a mesa de trabalho", "Como o armário"],
                ] } },
                "É por isso que salvar é tão importante. Enquanto você escreve, o texto está só na mesa. Quando você salva, ele vai para o armário.",
                { box: "chave", text: "Salvou, está guardado. Não salvou, pode se perder." },
              ],
            },
            {
              title: "Quando o computador fica lento",
              body: [
                "Cada programa aberto ocupa um pedaço da mesa. Com muitos programas abertos ao mesmo tempo, a mesa fica cheia e tudo fica mais devagar. Quando isso acontecer, feche os programas que não está usando (no ✕ de cada janela) ou reinicie o computador pelo Iniciar > Energia > Reiniciar. Reiniciar esvazia a mesa e resolve muitos travamentos.",
                { image: "/images/fundacao/aulas/hardware-so/windows-4-gerenciador.webp", alt: "Slide \"Desempenho e Gerenciador de Tarefas\", com o atalho Ctrl + Shift + Esc em destaque e um desenho da janela do Gerenciador com as abas Processos, Desempenho, Inicializar e Usuários." },
                { box: "pratica", title: "Para saber mais", text: "O Gerenciador de Tarefas (Ctrl + Shift + Esc, ou botão direito na barra de tarefas) mostra os programas abertos e quanto cada um ocupa. Se um programa travar e não fechar, selecione-o e clique em Finalizar tarefa. A aba Inicializar mostra os programas que abrem sozinhos quando o computador liga." },
                { box: "atencao", text: "No Gerenciador, feche só programas que você conhece e abriu. Muitos processos da lista são essenciais para o Windows funcionar." },
                { image: "/images/fundacao/aulas/hardware-so/windows-5-ficha.webp", alt: "Slide \"Conhecendo seu computador\", o passaporte do PC: o Windows mostra o nome do dispositivo, o processador, a memória RAM e a versão do Windows, ao lado de um desenho de ficha técnica." },
                "O Windows também mostra a \"ficha\" do computador: o processador, a quantidade de memória RAM e a versão do Windows. Fica em Iniciar > Configurações > Sistema > Sobre. O espaço livre no armazenamento aparece em Sistema > Armazenamento. Antes de comprar um programa ou jogo, compare com o que a loja pede; e, se precisar de ajuda técnica, essas são as informações que o técnico vai pedir.",
              ],
            },
            {
              title: "Configurações, programas e atualizações",
              body: [
                "Assim como você ajusta o volume e o brilho da TV, também pode ajustar o computador. Tudo fica nas Configurações, o programa da engrenagem (Iniciar > Configurações, ou Windows + I): tela, som, rede (Wi-Fi ou cabo), data e hora, contas e idioma.",
                { list: [
                  "Letras pequenas? Em Sistema > Tela, escolha em Escala um valor maior, como 125% ou 150%. Textos, ícones e janelas crescem na hora.",
                  "Wi-Fi: clique no ícone de internet perto do relógio, na setinha ao lado de Wi-Fi, no nome da sua rede e em Conectar, e digite a senha. Nas próximas vezes, ele entra sozinho.",
                ] },
                "O lugar mais seguro para instalar programas é a Microsoft Store, a loja oficial do Windows, ou o site oficial da empresa que fez o programa. Na loja, pesquise o nome, confira quem fez o programa e clique em Obter (ou no preço). Para remover um programa que você não usa: Configurações > Aplicativos > Aplicativos instalados, três pontinhos ao lado dele, Desinstalar.",
                { box: "atencao", text: "Desconfie de anúncios como \"baixe grátis a versão completa\", de links recebidos por mensagem e de sites cheios de botões \"Download\" piscando. São sinais de programas falsos, que podem trazer vírus e roubar seus dados. Na dúvida, não instale." },
                { image: "/images/fundacao/aulas/hardware-so/bios-5-atualizacoes.webp", alt: "Slide \"A importância das atualizações\": atualizações corrigem falhas, melhoram o funcionamento e aumentam a segurança. Dicas: salve os arquivos antes de atualizar e não desligue durante a instalação." },
                "As atualizações corrigem falhas, melhoram o funcionamento e, principalmente, protegem contra vírus e golpes. Na maioria das vezes, o Windows se atualiza sozinho. Para conferir, abra Configurações > Windows Update e clique em Verificar atualizações.",
                { box: "atencao", text: "Antes de atualizar, salve o que estiver fazendo: o computador pode reiniciar. E nunca desligue enquanto aparecer a mensagem de que ele está atualizando." },
              ],
            },
          ],
          activity: {
            title: "Organize e recupere",
            steps: [
              "Abra o Explorador de Arquivos e crie, dentro de Documentos, uma pasta chamada \"Receitas\".",
              "Abra o Bloco de Notas, escreva uma receita curta e salve dentro de \"Receitas\" com o nome \"Bolo de cenoura\".",
              "Exclua o arquivo, abra a Lixeira e restaure-o.",
              "Em Configurações > Sistema > Sobre, anote quanto de memória RAM o computador tem.",
            ],
            answer: "Depois de restaurado, o arquivo volta para a pasta \"Receitas\", de onde saiu. Se ele estivesse num pen drive, não daria para restaurar: seria apagado na hora. A quantidade de RAM aparece como \"RAM instalada\", em GB.",
          },
          recap: ["Arquivos ficam em pastas; dê nomes fáceis de reconhecer.", "A RAM é a mesa e o SSD ou HD é o armário: salvou, está guardado.", "Programas só da Microsoft Store ou do site oficial, e Windows sempre atualizado."],
        },
        {
          id: "dispositivos-e-cuidados",
          title: "Dispositivos e cuidados",
          summary: "Periféricos e entradas, pen drive, Bluetooth, impressora, drivers e cópia de segurança.",
          goals: ["Classificar periféricos e reconhecer as entradas do computador", "Usar pen drive, aparelhos sem fio e impressora", "Saber o que é driver e fazer uma cópia de segurança"],
          sections: [
            {
              title: "Os aparelhos que se ligam ao computador",
              body: [
                "Além do monitor, do teclado e do mouse, muitos outros aparelhos podem ser ligados ao computador: o microfone (capta a sua voz), a webcam (capta a sua imagem para chamadas de vídeo), a caixa de som e o fone (tocam os sons), a impressora (coloca no papel o que está na tela), o pen drive (leva arquivos de um computador para outro) e o celular (troca fotos e arquivos com o computador).",
                "Todos esses aparelhos se chamam periféricos. Alguns levam informação para o computador, como o microfone e a webcam: são de entrada. Outros trazem informação do computador para você, como a caixa de som e a impressora: são de saída. E alguns fazem as duas coisas, como o pen drive, que recebe arquivos e também os entrega.",
                "O computador tem várias entradas, cada uma com um formato. Por isso, cada cabo só encaixa no lugar certo:",
                { list: [
                  "USB: a mais comum. Liga pen drive, mouse, teclado, impressora e carregador de celular.",
                  "USB-C: menor e encaixa dos dois lados. Aparece em notebooks e celulares mais novos.",
                  "HDMI: leva imagem e som para um monitor ou uma TV.",
                  "Fone: a entrada redonda e pequena do fone e do microfone.",
                  "Rede: a entrada do cabo de internet, um pouco maior que a do telefone fixo.",
                ] },
                { box: "atencao", text: "Nunca force um cabo. A entrada USB comum só encaixa de um lado: se não entrar, vire o plugue. Já o USB-C encaixa dos dois lados." },
              ],
            },
            {
              title: "Conectando na prática",
              body: [
                "O pen drive aparece no Explorador de Arquivos, o programa da pastinha amarela:",
                { list: [
                  "Encaixe o pen drive numa entrada USB. Aparece um aviso no canto da tela.",
                  "Abra o Explorador de Arquivos e clique no pen drive, no lado esquerdo.",
                  "Para copiar um arquivo para o computador, clique nele com o botão direito e escolha Copiar. Abra a pasta Documentos, clique com o botão direito num espaço vazio e escolha Colar.",
                  "Para retirar, clique no pen drive com o botão direito e escolha Ejetar. Quando aparecer o aviso de que ele pode ser removido, tire-o da entrada.",
                ], ordered: true },
                { box: "atencao", text: "Nunca retire o pen drive enquanto um arquivo estiver sendo copiado. Você pode perder o arquivo e até estragar o pen drive." },
                "Fone ou caixa de som com fio: encaixe na entrada de fone (ou na USB, se for esse o plugue). Normalmente o som passa na hora. Se não passar, clique no ícone de som perto do relógio, na setinha ao lado do volume, e escolha o aparelho.",
                "Aparelhos sem fio, como fones, caixas e mouses, costumam usar o Bluetooth. Na primeira vez, é preciso parear, ou seja, apresentar o aparelho ao computador: coloque o aparelho em modo de pareamento (em geral, segurando o botão de ligar até uma luz piscar), abra Configurações > Bluetooth e dispositivos > Adicionar dispositivo > Bluetooth e clique no nome dele. Nas próximas vezes, ele se conecta sozinho.",
                "Impressora: ligue pelo cabo USB ou na mesma rede Wi-Fi do computador. Na maioria das vezes, o Windows a reconhece sozinho. Se não, vá em Configurações > Bluetooth e dispositivos > Impressoras e scanners > Adicionar dispositivo. Para imprimir, abra o arquivo, clique em Arquivo > Imprimir, escolha a impressora e clique em Imprimir.",
              ],
            },
            {
              title: "Como o Windows reconhece os aparelhos",
              body: [
                { image: "/images/fundacao/aulas/hardware-so/drivers-1-o-que-sao.webp", alt: "Slide \"O que são drivers?\": um computador ligado por linhas de luz a um monitor, um teclado, um mouse e uma impressora. Drivers são programas que permitem a comunicação entre o Windows e os dispositivos." },
                "Cada aparelho funciona de um jeito. Para o Windows saber usar cada um, existe um pequeno programa chamado driver: ele \"ensina\" o Windows a conversar com aquele aparelho. O aparelho é o hardware; o driver é o software que faz ele funcionar.",
                { box: "chave", text: "Driver é o tradutor entre o Windows e o aparelho." },
                { image: "/images/fundacao/aulas/hardware-so/drivers-2-automatico.webp", alt: "Slide \"O Windows instala drivers automaticamente?\": um pen drive sendo conectado a um notebook e, na tela, o aviso \"Dispositivo reconhecido, instalando driver de dispositivo\"." },
                "Na maioria das vezes, você não precisa fazer nada: quando um aparelho é conectado, o Windows o reconhece, procura o driver e instala sozinho. Esse recurso se chama \"conectar e usar\" (em inglês, Plug and Play). Foi o que aconteceu com o pen drive.",
                "Quando um aparelho não funciona, antes de pensar que ele quebrou, tente nesta ordem:",
                { list: [
                  "Confira se ele está ligado e se o cabo está bem encaixado.",
                  "Tente outra entrada USB.",
                  "Reinicie o computador.",
                  "Abra Configurações > Windows Update e verifique as atualizações: elas também trazem drivers.",
                  "Se nada resolver, procure o driver no site oficial do fabricante, com o modelo que aparece na etiqueta ou na caixa.",
                ], ordered: true },
              ],
            },
            {
              title: "Gerenciador de Dispositivos",
              body: [
                { image: "/images/fundacao/aulas/hardware-so/drivers-3-problemas.webp", alt: "Slide \"Como identificar problemas nos drivers?\": um notebook com o Gerenciador de Dispositivos aberto, mostrando um dispositivo com o ponto de exclamação amarelo, sinal de problema no driver." },
                "O Gerenciador de Dispositivos mostra todos os aparelhos que o Windows reconheceu. Para abri-lo, clique com o botão direito no botão Iniciar (ou aperte Windows + X) e escolha Gerenciador de Dispositivos.",
                { table: { caption: "Sinais de problema", head: ["O que aparece", "O que quer dizer"], rows: [
                  ["Ponto de exclamação amarelo", "Problema no driver: errado, faltando ou com defeito"],
                  ["\"Dispositivo desconhecido\"", "O Windows viu o aparelho, mas não achou o driver"],
                  ["Seta para baixo no ícone", "O dispositivo está desativado"],
                ] } },
                { image: "/images/fundacao/aulas/hardware-so/drivers-4-instalacao.webp", alt: "Slide \"Instalação e atualização de drivers\": do quadro \"Driver\" saem três setas para as fontes confiáveis. Windows Update, Gerenciador de Dispositivos e site do fabricante." },
                { box: "atencao", text: "Evite sites desconhecidos e programas que prometem \"atualizar todos os drivers de graça\". Muitos instalam drivers errados, propagandas ou até vírus. E não desative nem desinstale dispositivos que você não conhece: sem o driver de vídeo ou do teclado, você pode ficar sem imagem ou sem como digitar." },
                { box: "pratica", text: "Se um driver novo der problema, dá para voltar ao anterior: no Gerenciador de Dispositivos, clique duas vezes no aparelho e use a aba Driver > Reverter driver." },
              ],
            },
            {
              title: "Cuidando do computador e dos seus arquivos",
              body: [
                { list: [
                  "Deixe copos e garrafas longe do teclado e do gabinete, e as saídas de ar livres.",
                  "Se derramar líquido: desligue na hora e tire da tomada. No notebook, tire também o carregador e deixe-o aberto, de cabeça para baixo, em formato de V. Não ligue de novo antes de levar a uma assistência técnica.",
                  "Use filtro de linha. Ele é diferente do \"benjamim\" (o T): o filtro de linha protege contra variações de energia que podem queimar as peças.",
                ] },
                "Um computador pode quebrar, ser roubado ou pegar vírus. Se suas fotos e documentos importantes estiverem só nele, você pode perder tudo. Por isso, faça uma cópia de segurança: guarde uma cópia dos arquivos importantes em outro lugar, como um pen drive ou HD externo guardado em local seguro, ou na internet (a nuvem), em serviços como o OneDrive, que já vem no Windows, ou o Google Drive.",
                { box: "chave", text: "Arquivo importante fica guardado em dois lugares." },
                { box: "exemplo", title: "Na prática, isso serve para quê?", text: "As fotos da família, o currículo, os documentos digitalizados: pense no que você não quer perder de jeito nenhum e faça uma cópia hoje. Repita de tempos em tempos." },
              ],
            },
          ],
          activity: {
            title: "Sua cópia de segurança",
            steps: [
              "Liste três arquivos ou pastas que você não quer perder de jeito nenhum.",
              "Escolha onde vai guardar a cópia: pen drive, HD externo ou nuvem.",
              "Se usar pen drive, copie os arquivos e retire-o com Ejetar, só depois que a cópia terminar.",
            ],
            fields: ["Os arquivos que eu não quero perder:", "Onde vou guardar a cópia:", "De quanto em quanto tempo vou repetir:"],
            answer: "Um bom plano diz o quê, onde e quando. Por exemplo: \"as fotos da família e o currículo, no OneDrive e num pen drive guardado na gaveta, uma vez por mês\".",
          },
          recap: ["Entrada leva informação ao computador, saída traz para você; o pen drive faz os dois.", "Ejete antes de tirar o pen drive; o driver é o tradutor entre o Windows e o aparelho.", "Arquivo importante fica guardado em dois lugares."],
        },
        {
          id: "internet-e-seguranca",
          title: "Internet, pesquisa e segurança digital",
          summary: "Navegador e endereços, pesquisa e sites confiáveis, e-mail com anexo e os sinais de um golpe.",
          goals: ["Usar o navegador e entender o endereço de um site", "Pesquisar e avaliar se um site é confiável", "Enviar e-mail com anexo e reconhecer golpes"],
          sections: [
            {
              title: "Navegando na internet",
              body: [
                { image: "/images/fundacao/aulas/hardware-so/internet-1-como-funciona.webp", alt: "Slide \"Como funciona a internet?\": um notebook manda uma solicitação pela nuvem da internet até um servidor, e o servidor manda a resposta de volta pelo mesmo caminho." },
                "A internet é uma enorme rede que liga computadores e celulares do mundo inteiro. Quando você abre um site, o seu computador faz um pedido. Esse pedido viaja até outro computador, o servidor, que guarda aquele site, e a resposta volta para a sua tela em poucos segundos. Quase tudo aqui também vale para o celular.",
                { box: "pratica", title: "Para saber mais", text: "Cada aparelho na internet tem um endereço em números, o IP. O DNS funciona como uma agenda: traduz nomes como www.exemplo.com.br para esses números." },
                { image: "/images/fundacao/aulas/hardware-so/internet-2-navegadores.webp", alt: "Slide \"O que são navegadores?\": os ícones do Google Chrome, Microsoft Edge, Mozilla Firefox, Safari e Opera, programas usados para acessar sites." },
                "O navegador é o programa usado para entrar nos sites. O Microsoft Edge já vem no Windows; outros muito usados são o Google Chrome e o Mozilla Firefox. Todos funcionam de um jeito parecido:",
                { table: { caption: "As partes do navegador", head: ["Parte", "Para que serve"], rows: [
                  ["Voltar, avançar e atualizar", "Voltar à página anterior, avançar de novo e recarregar a página"],
                  ["Barra de endereço", "Onde você digita o endereço do site ou o que quer pesquisar"],
                  ["Abas e Nova aba ( + )", "Deixam vários sites abertos na mesma janela"],
                  ["Favoritos ( ☆ )", "Guardam o site para você encontrar depois"],
                ] } },
                "Todo site tem um endereço, como uma casa. O final dá uma pista de quem é: .com.br são empresas e lojas brasileiras; .gov.br é o governo, como o portal gov.br de serviços públicos; .org.br são organizações e instituições; .edu.br são escolas e universidades.",
              ],
            },
            {
              title: "Pesquisando e escolhendo bons sites",
              body: [
                "Para encontrar informações, usamos um buscador: um site que procura em milhões de páginas e mostra as que combinam com o que você digitou, como o Google, o Bing e o DuckDuckGo. Nem precisa abri-lo: basta digitar a pergunta na barra de endereço e apertar Enter.",
                { list: [
                  "Seja específico: em vez de \"bolo\", pesquise \"receita de bolo de cenoura\".",
                  "Use aspas: \"segunda via de conta de luz\" busca exatamente essa frase.",
                  "Use o sinal de menos para tirar uma palavra: jaguar -carro.",
                  "Use as abas Notícias, Imagens e Vídeos para filtrar o tipo de resultado.",
                  "Olho no \"Patrocinado\": os primeiros resultados com esse aviso são anúncios pagos.",
                ] },
                { image: "/images/fundacao/aulas/hardware-so/internet-3-sites-confiaveis.webp", alt: "Slide \"Como identificar sites confiáveis?\": um site confiável, com https e cadeado, ao lado de um site suspeito com endereço estranho. No meio, as perguntas: quem é o autor, se a informação está atualizada, se há fontes, se o endereço é legítimo e se o conteúdo é claro." },
                "Qualquer pessoa pode publicar na internet, e nem tudo o que está lá é verdade. Antes de confiar, pergunte: quem escreveu? Está atualizado? Mostra de onde tirou a informação? O endereço está certo (golpistas criam endereços parecidos, com uma letra trocada)? O texto é claro e equilibrado, sem exageros nem títulos alarmantes?",
                { box: "atencao", text: "O cadeado ao lado do endereço mostra que a conexão é protegida, mas não garante que o site é honesto: muitos sites falsos também têm cadeado. Use sempre as outras perguntas." },
                { box: "exemplo", title: "Na prática, isso serve para quê?", text: "Recebeu uma notícia chocante pelo celular? Antes de repassar, procure o assunto no buscador e veja se sites de notícias conhecidos também falam dele. Assim você não espalha notícia falsa." },
              ],
            },
            {
              title: "Usando o e-mail",
              body: [
                "O e-mail é uma carta digital: chega em segundos e pode levar arquivos junto, como um currículo ou uma foto. Ele é pedido em vagas de emprego, cadastros e serviços públicos.",
                "Todo e-mail tem um endereço, como maria.souza@exemplo.com. O símbolo @ se lê \"arroba\". Antes dele vem o nome da pessoa; depois, o nome do serviço. Os mais usados, como o Gmail e o Outlook, são gratuitos: para criar uma conta, basta entrar no site e preencher seus dados.",
                "Para enviar um currículo:",
                { list: [
                  "Clique em Novo e-mail.",
                  "Em Para, digite o endereço de quem vai receber. Em Assunto, escreva sobre o que é a mensagem.",
                  "Escreva a mensagem. Depois, clique no clipe e escolha o arquivo no computador. Ele aparece anexado.",
                  "Confira tudo e clique em Enviar. A mensagem fica guardada na pasta Enviados.",
                ], ordered: true },
                "Para ler um e-mail, clique nele na Caixa de entrada; para responder, use o botão Responder. Mensagens suspeitas costumam ir para o Lixo eletrônico: desconfie delas.",
              ],
            },
            {
              title: "Os sinais de um golpe",
              body: [
                { image: "/images/fundacao/aulas/hardware-so/internet-4-seguranca.webp", alt: "Slide \"Segurança durante a navegação\": um escudo com cadeado sobre um notebook. Evite links suspeitos, não faça downloads desconhecidos, use senhas fortes, proteja suas informações e mantenha sistema e navegador atualizados." },
                "Golpistas tentam enganar por mensagem de celular, WhatsApp, e-mail e até ligação. O objetivo é sempre o mesmo: conseguir seu dinheiro, suas senhas ou seus dados. A boa notícia: quase todo golpe tem os mesmos sinais.",
                { list: [
                  "Pressa: golpe sempre tem urgência (\"sua conta será bloqueada hoje\"). Pare e pense antes de agir.",
                  "Link: não clique. Digite você mesmo o endereço oficial ou use o aplicativo do banco.",
                  "Códigos e senhas: o código que chega por SMS e a sua senha são só seus, para ninguém.",
                  "Prêmio ou oferta boa demais, ou um pedido de dinheiro, documento ou dados do cartão.",
                  "Pessoa conhecida com número novo pedindo algo: confirme por outro caminho, ligando para o número antigo ou para o banco pelo número oficial.",
                ] },
                { box: "chave", text: "Na dúvida, não clique." },
                { tool: "caca-ao-golpe" },
              ],
            },
            {
              title: "Senhas, dados e as camadas da internet",
              body: [
                { list: [
                  "Use senhas longas: uma frase fácil de lembrar e difícil de adivinhar, como \"MeuCachorroComeBanana!\", é melhor que \"123456\" ou a sua data de nascimento.",
                  "Uma senha para cada serviço: se uma vazar, as outras continuam protegidas.",
                  "Ative a verificação em duas etapas: além da senha, o serviço pede um código enviado ao seu celular. Ative no e-mail, no WhatsApp e nas redes sociais.",
                ] },
                "Não publique fotos de documentos, cartões ou boletos, e evite contar nas redes sociais onde você mora e quando vai viajar. Em Wi-Fi público, como de shopping ou praça, evite acessar o banco ou fazer compras.",
                { box: "atencao", text: "Caiu num golpe? Avise o seu banco na hora, pelo número oficial, troque as senhas e registre um boletim de ocorrência, que em muitos estados pode ser feito pela internet, no site da Polícia Civil." },
                { image: "/images/fundacao/aulas/hardware-so/internet-5-deep-web.webp", alt: "Slide \"O que é a Deep Web?\": uma pirâmide em três camadas. No topo, a superfície da web (sites de notícias, lojas, redes sociais); no meio, a Deep Web (contas bancárias, e-mail, documentos privados); embaixo, a Dark Web (conteúdos ocultos e de acesso anônimo)." },
                { table: { caption: "As camadas da internet", head: ["Camada", "O que é", "Exemplo"], rows: [
                  ["Superfície", "Conteúdo público, que aparece nos buscadores", "Sites de notícias e lojas"],
                  ["Deep Web", "Conteúdo que não aparece nos buscadores, protegido por login", "A sua caixa de e-mail e a conta do banco"],
                  ["Dark Web", "Parte escondida, que exige programas especiais", "Cheia de golpes, vírus e crimes"],
                ] } },
                "A Deep Web é normal: você a usa todos os dias. Já a Dark Web não tem motivo para ser acessada: o risco de golpe e vírus é alto e não existe suporte se algo der errado.",
              ],
            },
          ],
          activity: {
            title: "Pesquise, avalie e envie",
            steps: [
              "Escolha um assunto e faça uma pesquisa clara, usando as dicas da aula.",
              "Abra três sites diferentes e avalie cada um com as perguntas de site confiável.",
              "Envie um e-mail para você mesmo com o que aprendeu e de qual site veio cada informação, com um arquivo anexado.",
            ],
            answer: "Se os três sites dizem a mesma coisa e mostram autor, data e fontes, a informação provavelmente é confiável. Se um deles exagera, não tem autor ou tem endereço estranho, desconfie. O e-mail enviado aparece na pasta Enviados e chega à sua Caixa de entrada com o clipe do anexo.",
          },
          recap: ["O navegador é o programa; o buscador é o site de pesquisa.", "Cadeado não garante site honesto: confira autor, data e endereço.", "Pressa, link, pedido de código ou de dinheiro: na dúvida, não clique."],
        },
      ],
      quiz: {
        sticker: { id: "mestre-do-modulo-1", min: 8 },
        questions: [
          { question: "Dona Rosa clicou no ( – ) da Calculadora e achou que tinha fechado o programa. Onde ela encontra a janela de novo?", options: ["No menu Iniciar, abrindo a Calculadora outra vez, porque ela foi encerrada.", "Na barra de tarefas: minimizar só esconde a janela.", "Na Lixeira, de onde dá para restaurar programas fechados.", "Na pasta Downloads, onde ficam os programas abertos."], answer: 1, why: "Minimizar esconde a janela, mas o programa continua aberto. Um clique no ícone da barra de tarefas traz de volta." },
          { question: "Caio baixou no celular um aplicativo Android de que gostou e quer usar o mesmo arquivo no computador com Windows. Pela aula, vai funcionar?", options: ["Sim, se ele passar o aplicativo para o computador pelo pen drive.", "Sim, desde que o computador esteja conectado à internet.", "Não: cada programa precisa ser feito para o sistema certo.", "Só se for um aplicativo gratuito."], answer: 2, why: "Um aplicativo de Android não funciona no Windows, e um programa de Windows não funciona no celular." },
          { question: "Lia apagou sem querer uma foto que estava no pen drive. O que acontece com ela?", options: ["Vai para a Lixeira e pode ser restaurada com o botão direito.", "Fica guardada na pasta Downloads do computador por um tempo.", "Volta sozinha quando o pen drive é conectado de novo.", "Foi apagada na hora: do pen drive, nada vai para a Lixeira."], answer: 3, why: "Só os arquivos apagados do computador vão para a Lixeira. Do pen drive, somem na hora." },
          { question: "Marcos escreveu metade do currículo e a luz acabou. Ele não tinha salvado. Por que o texto se perdeu?", options: ["Estava só na memória RAM, que se esvazia ao desligar.", "O SSD apaga sozinho os arquivos que ainda não têm nome.", "O Windows apaga os documentos abertos quando a energia cai.", "O editor de texto só guarda o arquivo depois da primeira página."], answer: 0, why: "Enquanto você escreve, o texto está na mesa (a RAM). Só ao salvar ele vai para o armário (o SSD ou HD)." },
          { question: "Ana quer instalar um programa de edição de fotos. Qual caminho a aula considera seguro?", options: ["O site com vários botões \"Download\", que oferece mais opções.", "O link que um conhecido mandou por mensagem, já testado por ele.", "O anúncio \"baixe grátis a versão completa\", que economiza a licença.", "A Microsoft Store ou o site oficial de quem fez o programa."], answer: 3, why: "Loja oficial ou site oficial. Botões piscando, links por mensagem e \"versão completa grátis\" são sinais de programa falso." },
          { question: "Jorge está copiando fotos do pen drive para o computador. Qual é o jeito certo de retirar o pen drive?", options: ["Esperar a cópia terminar, escolher Ejetar e esperar o aviso.", "Tirar logo, porque a cópia continua de onde parou depois.", "Desligar o computador pelo botão antes de puxar o pen drive.", "Apagar as fotos do pen drive antes de retirar, para liberar espaço."], answer: 0, why: "Tirar durante a cópia pode estragar o arquivo e o pen drive. Ejetar avisa o Windows antes." },
          { question: "A impressora não funciona. O cabo está bem encaixado, já foi testada outra entrada USB e o computador foi reiniciado. Qual é o próximo passo da aula?", options: ["Instalar um programa que atualiza todos os drivers de graça.", "Ver se o Windows Update tem atualizações: elas trazem drivers.", "Desativar a impressora no Gerenciador de Dispositivos.", "Comprar outra impressora, porque essa deve ter queimado."], answer: 1, why: "A ordem é: cabo, outra entrada, reiniciar, Windows Update e, por último, o site oficial do fabricante." },
          { question: "Um site de compras tem o cadeado ao lado do endereço. O que isso garante?", options: ["Que o site é honesto e pode receber os dados do cartão.", "Que o site foi aprovado pelo buscador antes de aparecer.", "Que a conexão é protegida, mas não que o site é honesto.", "Que o site é de uma empresa brasileira registrada."], answer: 2, why: "Muitos sites falsos também têm cadeado. Confira autor, data, fontes e se o endereço está escrito certo." },
          { question: "Chega uma mensagem do \"banco\" pedindo o código que acabou de chegar por SMS para \"cancelar uma compra suspeita\". O que a aula ensina?", options: ["Passar o código, já que ele serve justamente para cancelar a compra.", "Pedir o nome e a matrícula do atendente antes de passar o código.", "Não passar e falar com o banco pelo número oficial.", "Clicar no link da mensagem para conferir se a compra existe mesmo."], answer: 2, why: "Código de SMS e senha são só seus. Confirme por outro caminho, sem usar o link nem o número da mensagem." },
          { question: "Pela aula, como as fotos da família ficam protegidas de verdade?", options: ["Numa pasta com nome fácil de achar, dentro de Documentos.", "Em dois lugares: no computador e num pen drive ou na nuvem.", "Na área de trabalho, onde ficam sempre à vista e não se perdem.", "Na Lixeira, que guarda os arquivos sem ocupar espaço no disco."], answer: 1, why: "Computador quebra, é roubado ou pega vírus. Arquivo importante fica guardado em dois lugares." },
        ],
      },
    },
    {
      title: "Hardware: por dentro do computador",
      lessons: [
        {
          id: "fundamentos-de-hardware",
          title: "Fundamentos de hardware",
          summary: "Tipos de computador, as peças de dentro e de fora, periféricos e cuidados.",
          goals: ["Reconhecer desktop, notebook, servidor e celular", "Identificar as principais peças de um computador", "Classificar periféricos em entrada, saída ou os dois", "Cuidar do equipamento no dia a dia"],
          sections: [
            {
              title: "Tipos de computador",
              body: [
                "Hardware é a parte física do computador, o que dá para tocar. Software são os programas que dizem a ele o que fazer. Neste módulo, o assunto é o hardware.",
                "Todo computador tem processador, memória e armazenamento. O que muda é o tamanho, a mobilidade, a potência e o uso.",
                { table: { caption: "Os tipos mais comuns", head: ["Tipo", "Como é", "Uso comum"], rows: [
                  ["Desktop", "Fica fixo na mesa. Tem boa potência e é fácil trocar peças.", "Escritório, casa e jogos"],
                  ["Notebook", "Portátil, com tela, teclado e bateria.", "Trabalho e estudo em qualquer lugar"],
                  ["Servidor", "Computador potente que atende outros computadores pela rede.", "Sites, e-mail e arquivos de empresas"],
                  ["Celular", "Cabe no bolso e é usado tocando na tela.", "Mensagens, aplicativos e fotos"],
                ] } },
                { box: "exemplo", text: "Quando você digita uma mensagem, o teclado (hardware) manda as letras para o programa (software), que usa o processador e a memória (hardware) para mostrar o texto na tela (hardware)." },
              ],
            },
            {
              title: "As peças de dentro e as de fora",
              body: [
                "As peças internas ficam dentro do gabinete (no desktop) ou da carcaça (no notebook):",
                { list: [
                  "Placa-mãe: a placa principal, onde todas as outras peças se ligam.",
                  "Processador (CPU): o \"cérebro\", que faz os cálculos e executa as instruções.",
                  "Memória RAM: guarda o que está em uso agora, de forma temporária e rápida.",
                  "SSD ou HD: guardam os arquivos de forma permanente. O SSD é rápido e silencioso; o HD tem discos que giram e é mais barato.",
                  "Fonte de alimentação: transforma a energia da tomada no tipo que as peças usam.",
                  "Placa de vídeo: cuida das imagens. Faz diferença em jogos, vídeos e design.",
                  "Cooler: a ventoinha que tira o calor do processador.",
                ] },
                "As peças externas são as que você vê e liga por fora: o gabinete (a caixa que protege tudo), o monitor, o teclado e o mouse.",
                { box: "chave", text: "A placa-mãe liga tudo, o processador pensa, a RAM guarda o que está em uso e o SSD ou HD guarda os arquivos." },
              ],
            },
            {
              title: "Periféricos: entrada, saída ou os dois",
              body: [
                "Periférico é qualquer aparelho ligado ao computador para ele fazer mais coisas. Para classificar, pergunte: a informação entra no computador, sai dele ou vai nos dois sentidos?",
                { table: { caption: "Exemplos de periféricos", head: ["Tipo", "O que faz", "Exemplos"], rows: [
                  ["Entrada", "Manda dados para o computador", "Teclado, mouse, microfone, webcam e scanner"],
                  ["Saída", "Recebe dados do computador", "Monitor, caixas de som e impressora"],
                  ["Entrada e saída", "Faz os dois", "Tela touch, headset (fone com microfone) e pen drive"],
                ] } },
                { box: "exemplo", text: "O pen drive é de entrada e saída porque o computador lê arquivos dele e também grava arquivos nele." },
              ],
            },
            {
              title: "Cuidados com o equipamento",
              body: [
                { list: [
                  "Energia: use filtro de linha ou estabilizador e tire da tomada antes de abrir o equipamento.",
                  "Líquidos: deixe copos e garrafas longe do teclado e do gabinete.",
                  "Eletricidade estática: antes de pegar uma peça, toque numa parte de metal do gabinete. Segure as peças pelas bordas.",
                  "Ventilação: deixe as saídas de ar livres e limpe a poeira com o aparelho desligado.",
                  "Segurança digital: instale as atualizações, use antivírus e senhas fortes e faça cópia (backup) dos arquivos importantes.",
                ] },
                { box: "atencao", text: "A eletricidade estática do corpo, que você nem sente, pode queimar uma peça. Tocar no metal do gabinete antes descarrega essa energia." },
              ],
            },
          ],
          activity: {
            title: "Descubra o que há no seu computador",
            steps: [
              "Abra o Gerenciador de Tarefas (Ctrl + Shift + Esc) e vá à aba Desempenho.",
              "Anote o modelo do processador, quanto de memória RAM ele tem e o tipo de armazenamento (SSD ou HD).",
              "Escolha três periféricos que você usa e diga se cada um é de entrada, de saída ou dos dois.",
            ],
            answer: "Na aba Desempenho, clique em CPU para ver o processador, em Memória para a RAM e em Disco para o armazenamento. Sobre os periféricos: teclado e mouse são de entrada, monitor e impressora são de saída, e headset e pen drive são de entrada e saída.",
          },
          recap: ["Desktop, notebook, servidor e celular funcionam do mesmo jeito; muda o uso.", "Periférico de entrada manda dados, o de saída recebe e alguns fazem os dois.", "Energia estável, nada de líquidos por perto e backup protegem o equipamento e os dados."],
        },
        {
          id: "dentro-do-computador",
          title: "Dentro do computador",
          summary: "Placa-mãe, processador, memória, fonte, refrigeração e o que a BIOS guarda.",
          goals: ["Entender o papel da placa-mãe e do chipset", "Comparar processadores por núcleos e clock", "Saber por que a memória é organizada em camadas", "Entender o que fazem a fonte e a refrigeração"],
          sections: [
            {
              title: "Placa-mãe e chipset",
              body: [
                "A placa-mãe é a base onde tudo se encaixa. O chipset é o conjunto de circuitos que organiza a conversa entre o processador, a memória, os discos e as portas.",
                { list: [
                  "Soquete: o encaixe do processador. Cada geração de processador pede um soquete compatível.",
                  "Slots de memória: onde entram os pentes de RAM. DDR4 e DDR5 não encaixam um no lugar do outro.",
                  "Slots PCIe: recebem placa de vídeo, placa de rede e outras placas extras.",
                  "Conectores M.2 e SATA: ligam o SSD e o HD. No M.2, o SSD encaixa direto na placa.",
                  "Painel traseiro: as portas USB, de vídeo, de rede e de som, atrás do gabinete.",
                ] },
                { table: { caption: "Tamanhos de placa-mãe", head: ["Formato", "Tamanho", "Quando é usado"], rows: [
                  ["ATX", "Padrão", "Gabinetes comuns, com mais slots e conectores"],
                  ["Micro-ATX", "Menor", "Gabinetes compactos, com menos slots"],
                  ["Mini-ITX", "Muito pequeno", "Computadores mínimos, com poucos slots"],
                ] } },
              ],
            },
            {
              title: "Processador: núcleos e clock",
              body: [
                "Dois números ajudam a comparar processadores: quantas tarefas ele faz ao mesmo tempo (núcleos) e com que rapidez cada uma anda (clock, medido em GHz).",
                "Threads são as filas de instruções que cada núcleo atende. Com a tecnologia SMT ou Hyper-Threading, um núcleo cuida de duas filas.",
                { box: "exemplo", text: "Pense numa cozinha: os núcleos são os cozinheiros e o clock é a rapidez de cada um. Para um prato só, ajuda ter um cozinheiro rápido. Para muitos pedidos ao mesmo tempo, ajuda ter mais cozinheiros." },
                "Mais núcleos ajudam a editar vídeo e a manter muitos programas e abas abertos. Clock mais alto ajuda nas tarefas do dia a dia que pedem resposta rápida.",
                { box: "atencao", text: "O clock não é tudo. Um processador novo com clock menor pode ser mais rápido que um antigo com clock maior. E, se esquentar demais, o processador baixa o clock sozinho para se proteger." },
              ],
            },
            {
              title: "Memória em camadas: cache e RAM",
              body: [
                "O processador é muito mais rápido que a RAM e o SSD. Para ele não ficar esperando, a memória é organizada em camadas: quanto mais perto do processador, mais rápida e menor.",
                { table: { caption: "Da mais rápida para a mais lenta", head: ["Camada", "Onde fica", "Tamanho"], rows: [
                  ["Cache L1", "Dentro de cada núcleo", "Dezenas de KB"],
                  ["Cache L2", "Junto de cada núcleo", "Centenas de KB a alguns MB"],
                  ["Cache L3", "Dividida entre os núcleos", "Alguns MB"],
                  ["Memória RAM", "Nos pentes da placa-mãe", "Alguns GB; apaga ao desligar"],
                  ["SSD ou HD", "No disco", "Centenas de GB ou mais; guarda tudo"],
                ] } },
                { box: "pratica", text: "Dois pentes de RAM iguais costumam render mais que um pente só com a mesma memória total, porque trabalham juntos (canal duplo). O manual da placa diz em quais slots encaixar." },
              ],
            },
            {
              title: "Fonte e refrigeração",
              body: [
                "A fonte entrega energia estável para todas as peças. Na hora de escolher, veja:",
                { list: [
                  "Potência (W): precisa ser maior que o consumo somado das peças, com folga.",
                  "Selo 80 Plus (de Bronze a Titânio): quanto mais alto, menos energia vira calor.",
                  "Conectores: o de 24 pinos vai na placa-mãe, o de 8 pinos no processador e os PCIe na placa de vídeo.",
                  "Proteções: boas fontes cortam a energia em caso de sobrecarga, curto-circuito ou pico de tensão.",
                ] },
                "A refrigeração tira o calor das peças. O air cooler (metal com ventoinha) é o mais comum e fácil de manter. O water cooler leva líquido por tubos até um radiador: esfria bem, mas custa mais e pede cuidado.",
                "A pasta térmica é uma camada fina entre o processador e o cooler que melhora a passagem do calor. No gabinete, o ar frio entra pela frente ou por baixo e o quente sai por trás ou por cima.",
                { box: "atencao", text: "Nunca abra a fonte. Mesmo desligada da tomada, ela pode guardar uma carga elétrica perigosa. Se der defeito, leve a um técnico ou troque a fonte inteira." },
              ],
            },
            {
              title: "BIOS/UEFI: o que acontece ao ligar",
              body: [
                "A BIOS, ou UEFI, a versão moderna, é o programa gravado num chip da placa-mãe. É o primeiro software a entrar em ação: acorda as peças e entrega o controle ao sistema operacional.",
                { image: "/images/fundacao/aulas/hardware-so/bios-2-sequencia.webp", alt: "Slide \"O computador começa a acordar\": sete etapas em sequência, ligadas por setas. Energia, hardware, BIOS/UEFI, verificação, boot, sistema e área de trabalho. Cada etapa prepara a próxima." },
                { list: ["Energia: a fonte manda energia para as peças.", "Hardware: placa-mãe, processador e memória são ativados.", "BIOS/UEFI: o primeiro software entra em ação.", "Verificação: ela confere se as peças principais funcionam (o POST).", "Boot: o computador procura onde está o sistema operacional, como o SSD.", "Sistema: o sistema operacional é carregado.", "Área de trabalho: aparece a tela de entrada ou a área de trabalho."], ordered: true },
                "Se o computador não encontra um sistema, mostra um erro de \"dispositivo de inicialização\". Pode ser configuração, problema no SSD ou HD, ou falta de sistema instalado.",
                { image: "/images/fundacao/aulas/hardware-so/bios-3-bios-uefi.webp", alt: "Slide \"BIOS e UEFI são a mesma coisa?\": à esquerda, a tela antiga da BIOS, só com texto (antiga, simples, limitada); à direita, a tela da UEFI, mais visual (moderna e atual)." },
                "Para entrar na tela de configuração, aperte uma tecla logo ao ligar. Ela varia conforme o fabricante: Del, F2, F10 ou F12 são as mais comuns. Outros detalhes do lado do hardware:",
                { list: [
                  "POST: o teste automático do processador, da memória e do vídeo ao ligar. Se algo falha, o computador apita ou mostra uma mensagem.",
                  "Ordem de boot: diz de qual disco o computador começa (SSD, HD ou pen drive de instalação).",
                  "Secure Boot: só deixa iniciar sistemas confiáveis, o que protege a inicialização.",
                  "Bateria CMOS: uma pilha pequena na placa que guarda a data, a hora e as configurações com o computador desligado.",
                ] },
                { box: "atencao", text: "Antes de mudar uma opção da BIOS/UEFI, anote o valor original. Se algo der errado, a própria tela tem a opção de voltar às configurações de fábrica." },
              ],
            },
          ],
          activity: {
            title: "A ficha técnica do seu computador",
            steps: [
              "No Gerenciador de Tarefas (Ctrl + Shift + Esc), aba Desempenho, clique em CPU e anote os núcleos, os processadores lógicos, a velocidade e as caches.",
              "Clique em Memória e anote quanto de RAM há, o tipo (DDR4 ou DDR5) e quantos slots estão em uso.",
              "Aperte Windows + R, digite msinfo32 e aperte Enter. Anote o modelo da placa-mãe e a versão da BIOS.",
            ],
            answer: "\"Processadores lógicos\" são as threads: se aparecem o dobro dos núcleos, o processador usa SMT ou Hyper-Threading. Se só um slot de memória está em uso, há espaço para colocar outro pente igual e ganhar o canal duplo.",
          },
          recap: ["A placa-mãe liga as peças e o chipset define quantos recursos ela tem.", "Núcleos dizem quantas tarefas o processador faz juntas; o clock, a rapidez de cada uma.", "Cache, RAM e disco formam camadas: mais perto do processador, mais rápido e menor."],
        },
        {
          id: "dados-e-conexoes",
          title: "Dados e conexões",
          summary: "HD, SSD e NVMe, unidades de medida, placa de vídeo e portas.",
          goals: ["Diferenciar HD, SSD e SSD NVMe", "Entender bit, byte, KB, MB, GB e TB", "Distinguir placa de vídeo integrada e dedicada", "Reconhecer as portas e os cabos mais comuns"],
          sections: [
            {
              title: "HD, SSD e NVMe",
              body: [
                "Todo computador precisa de um lugar para guardar os arquivos de forma permanente. Os mais usados são o HD, o SSD e o SSD NVMe.",
                { table: { caption: "Comparando os três", head: ["", "HD", "SSD (SATA)", "SSD NVMe"], rows: [
                  ["Como funciona", "Discos que giram", "Memória flash, sem partes móveis", "Memória flash ligada pelo PCIe"],
                  ["Velocidade aproximada", "80 a 160 MB/s", "Até 550 MB/s", "De 2.000 a mais de 7.000 MB/s"],
                  ["Resiste a quedas?", "Pouco", "Bem", "Bem"],
                  ["Preço por GB", "O menor", "Médio", "O maior"],
                  ["Bom para", "Guardar arquivos grandes e backups", "Deixar um computador antigo mais rápido", "Sistema, programas e jogos"],
                ] } },
                { box: "chave", text: "Colocar o sistema num SSD é uma das melhorias que mais aceleram um computador antigo." },
                { box: "atencao", text: "Nenhum disco dura para sempre. Tenha sempre uma cópia dos arquivos importantes em outro lugar." },
              ],
            },
            {
              title: "Unidades de medida",
              body: [
                "O bit é a menor unidade de informação: vale 0 ou 1. Um byte são 8 bits, o espaço de uma letra. A partir daí, cada unidade vale cerca de mil da anterior.",
                { table: { caption: "Do menor para o maior", head: ["Unidade", "Vale", "Exemplo aproximado"], rows: [
                  ["Byte (B)", "8 bits", "Uma letra ou um número"],
                  ["Kilobyte (KB)", "Cerca de 1.000 bytes", "Um texto curto"],
                  ["Megabyte (MB)", "Cerca de 1.000 KB", "Uma foto ou uma música"],
                  ["Gigabyte (GB)", "Cerca de 1.000 MB", "Um filme em qualidade comum"],
                  ["Terabyte (TB)", "Cerca de 1.000 GB", "Centenas de filmes"],
                ] } },
                { box: "exemplo", text: "A internet é vendida em megabits por segundo (Mbps), e os arquivos são medidos em megabytes (MB). Como 1 byte tem 8 bits, uma internet de 200 Mbps baixa cerca de 25 MB por segundo (200 ÷ 8)." },
                { box: "atencao", text: "Um disco de 500 GB aparece no Windows com cerca de 465 GB. Não é defeito: o fabricante conta de 1.000 em 1.000 e o Windows conta de 1.024 em 1.024." },
              ],
            },
            {
              title: "Placa de vídeo integrada ou dedicada",
              body: [
                "A placa de vídeo transforma os dados em imagem na tela. O processador dela se chama GPU, e faz milhares de cálculos ao mesmo tempo para desenhar as imagens.",
                { table: { caption: "Integrada ou dedicada?", head: ["", "Integrada", "Dedicada"], rows: [
                  ["Onde fica", "Dentro do processador", "Numa placa separada, no slot PCIe"],
                  ["Memória", "Usa parte da RAM do computador", "Tem memória própria (VRAM)"],
                  ["Consumo e calor", "Baixos", "Altos; pede fonte e ventilação melhores"],
                  ["Bom para", "Estudo, escritório, internet e vídeos", "Jogos pesados, edição de vídeo e 3D"],
                ] } },
                { box: "atencao", text: "Se o computador tem placa de vídeo dedicada, ligue o cabo do monitor na saída da própria placa de vídeo, e não na da placa-mãe. Senão, a placa dedicada fica parada." },
              ],
            },
            {
              title: "Portas e conectores",
              body: [
                "Conhecer as portas evita comprar o cabo errado.",
                { list: [
                  "USB-A: retangular e o mais comum. Liga pen drive, teclado, mouse e HD externo. Só encaixa de um lado.",
                  "USB-C: pequeno e encaixa dos dois lados. Pode levar dados, vídeo e energia, e carrega notebooks e celulares.",
                  "HDMI: leva imagem e som num cabo só. É o padrão de TVs, monitores e videogames.",
                  "DisplayPort: imagem e som, comum em monitores e placas de vídeo. Aguenta taxas de atualização altas.",
                  "P2 (3,5 mm): o plugue de fone, microfone e caixas de som. Em geral, verde é a saída de som e rosa é o microfone.",
                  "RJ-45: o conector do cabo de rede, que liga o computador ao roteador.",
                ] },
                { table: { caption: "Velocidades do USB", head: ["Padrão", "Velocidade máxima", "Observação"], rows: [
                  ["USB 2.0", "480 Mbps", "Basta para teclado, mouse e impressora"],
                  ["USB 3.0 (3.2 Gen 1)", "5 Gbps", "Costuma ter a parte de dentro azul"],
                  ["USB 3.2 Gen 2", "10 Gbps", "Bom para SSD externo"],
                  ["USB4", "40 Gbps ou mais", "Usa o conector USB-C"],
                ] } },
                { box: "atencao", text: "USB-C é o formato do conector, não a velocidade. Nem toda porta USB-C leva vídeo ou carrega aparelhos: confira o que o fabricante informa." },
              ],
            },
          ],
          activity: {
            title: "Como é o seu computador?",
            steps: [
              "No Gerenciador de Tarefas (Ctrl + Shift + Esc), aba Desempenho, clique em Disco e anote o tipo (SSD ou HDD) e o tamanho.",
              "Abra o Explorador de Arquivos (Windows + E), clique em Este Computador e compare o tamanho do disco com o que o fabricante anuncia.",
              "Ainda na aba Desempenho, veja se aparece uma GPU ou duas.",
              "Olhe o computador por fora e liste as portas que encontrar, com o nome de cada uma.",
            ],
            answer: "Se o disco mostra um pouco menos que o anunciado (por exemplo, 465 GB num disco de 500 GB), está tudo certo: é a diferença entre contar de 1.000 em 1.000 e de 1.024 em 1.024. Se aparecem duas GPUs, em geral uma é a integrada e a outra é a dedicada.",
          },
          recap: ["O SSD é muito mais rápido que o HD, e o NVMe é o mais rápido dos três.", "1 byte tem 8 bits: internet é medida em bits e arquivos em bytes.", "USB liga periféricos, HDMI e DisplayPort levam imagem, P2 leva som e RJ-45 liga à rede."],
        },
        {
          id: "montagem-e-manutencao",
          title: "Montagem e manutenção",
          summary: "Montar na ordem certa, conferir se as peças combinam, limpar e resolver problemas.",
          goals: ["Conhecer as etapas de montagem na ordem certa", "Conferir se as peças são compatíveis", "Fazer limpeza e manutenção com segurança", "Investigar problemas com método"],
          sections: [
            {
              title: "Etapas de montagem",
              body: [
                "Montar um computador é encaixar peças compatíveis, na ordem certa e sem força.",
                { list: [
                  "Preparar a bancada: mesa limpa e iluminada, chave Phillips, os manuais e pulseira antiestática (ou tocar sempre no metal do gabinete).",
                  "Instalar o processador: alinhar a marca do chip com a da placa, encaixar sem força e baixar a trava.",
                  "Encaixar a RAM e o SSD M.2: a RAM só entra de um lado, guiada por um entalhe. O SSD M.2 é preso com um parafuso.",
                  "Colocar a pasta térmica e o cooler: um pouco de pasta, o cooler por cima e o cabo da ventoinha ligado.",
                  "Fixar a placa-mãe e a fonte no gabinete, com os espaçadores e o espelho das portas.",
                  "Instalar os discos e a placa de vídeo, no slot PCIe principal.",
                  "Ligar os cabos: o de 24 pinos, o do processador, os da placa de vídeo e os do painel frontal, seguindo o manual.",
                  "Revisar e ligar: entrar na BIOS/UEFI para ver se as peças foram reconhecidas e depois instalar o sistema.",
                ], ordered: true },
                { box: "atencao", text: "Nunca force um encaixe. Se não entra, a posição está errada. Monte sempre com o cabo de energia fora da tomada." },
                { box: "chave", text: "Processador, memória e cooler vão na placa-mãe antes de ela entrar no gabinete: fora da caixa há mais espaço e dá para ver melhor os encaixes." },
              ],
            },
            {
              title: "As peças combinam?",
              body: [
                "Antes de comprar ou trocar uma peça, confira se ela funciona com as outras. Uma peça incompatível pode nem encaixar.",
                { table: { caption: "Lista de conferência", head: ["Peça", "Pergunta"], rows: [
                  ["Processador", "O soquete do processador é o mesmo da placa-mãe?"],
                  ["Memória RAM", "O tipo (DDR4 ou DDR5) e a quantidade são aceitos pela placa?"],
                  ["Placa-mãe", "O formato (ATX, Micro-ATX ou Mini-ITX) cabe no gabinete?"],
                  ["Placa de vídeo", "Cabe no gabinete, e a fonte tem os conectores que ela pede?"],
                  ["Fonte", "A potência cobre todas as peças, com folga?"],
                  ["Cooler", "Serve para o soquete e cabe no gabinete?"],
                  ["SSD M.2", "O slot aceita o tamanho e o tipo (NVMe ou SATA)?"],
                ] } },
                { box: "pratica", text: "O manual e o site do fabricante da placa-mãe mostram quais processadores e memórias ela aceita, e se algum processador novo precisa de atualização da BIOS." },
              ],
            },
            {
              title: "Limpeza e manutenção preventiva",
              body: [
                "Poucos cuidados regulares evitam a maior parte dos defeitos.",
                { table: { caption: "Rotina sugerida", head: ["Quando", "O que fazer"], rows: [
                  ["Toda semana", "Reiniciar o computador e instalar as atualizações pendentes"],
                  ["Todo mês", "Ver se há espaço livre no disco e fazer backup dos arquivos importantes"],
                  ["A cada 6 meses", "Limpar a poeira de dentro (com mais frequência se houver animais ou muita poeira)"],
                  ["A cada 2 ou 3 anos", "Avaliar a troca da pasta térmica e o estado das ventoinhas"],
                ] } },
                "Limpe com pincel macio e ar comprimido, nunca com aspirador comum, que pode gerar estática. Mantenha espaço livre no disco e tire programas que você não usa.",
                { box: "exemplo", text: "Regra 3-2-1 do backup: três cópias dos arquivos, em dois tipos de mídia diferentes (por exemplo, SSD e nuvem), com uma delas fora de casa." },
                { box: "atencao", text: "Antes de abrir o gabinete: desligue, tire da tomada e toque no metal. Ao usar ar comprimido, segure a ventoinha para ela não girar demais e quebrar." },
              ],
            },
            {
              title: "Resolvendo problemas com método",
              body: [
                "Diagnosticar é investigar: observe o que acontece, isole a possível causa, teste e anote o resultado. Comece sempre pelo mais simples.",
                { box: "chave", text: "Mude uma coisa por vez. Assim você sabe qual mudança resolveu ou causou o problema." },
                { table: { caption: "Problemas comuns", head: ["Problema", "O que conferir"], rows: [
                  ["Não liga ou liga sem imagem", "Outra tomada e outro cabo; os cabos da fonte bem encaixados; a memória (testar um pente por vez); o cabo do monitor na saída certa; o que os bipes ou luzes de erro significam no manual"],
                  ["Está lento", "Espaço livre no disco; uso da RAM no Gerenciador de Tarefas; programas que abrem sozinhos (aba Inicializar); vírus; atualizações; temperatura. Se ainda usa HD, trocar por SSD costuma dar o maior ganho"],
                  ["Esquenta demais", "Poeira no cooler e nos filtros; pasta térmica seca; ventoinha parada; cabos atrapalhando o ar; no notebook, não usar em cima da cama ou do sofá"],
                ] } },
                "Um programa de monitoramento mostra a temperatura do processador. Em uso pesado, acima de uns 90 °C merece atenção.",
              ],
            },
          ],
          activity: {
            title: "Projeto: planeje um computador",
            steps: [
              "Escolha um perfil: escritório e estudo, edição de vídeo, jogos ou servidor doméstico. Diga quem vai usar, para quê e quanto pode gastar.",
              "Monte a lista de peças (processador, placa-mãe, RAM, armazenamento, placa de vídeo, fonte, refrigeração e gabinete) e explique por que escolheu cada uma.",
              "Passe a lista de conferência da aula e confirme que todas as peças combinam.",
              "Escreva um plano de manutenção (limpeza, atualizações e backup) e como você investigaria três problemas.",
            ],
            answer: "Algumas pistas por perfil. Escritório e estudo: SSD, RAM suficiente e preço baixo; a placa de vídeo integrada costuma bastar. Edição de vídeo: muitos núcleos, bastante RAM, SSD rápido e boa refrigeração. Jogos: placa de vídeo dedicada, fonte adequada e gabinete bem ventilado. Servidor doméstico: estabilidade, vários discos, fonte confiável e baixo consumo.",
            note: "Os modelos podem ser pesquisados em lojas ou inventados. Se usar preços reais, anote a loja e a data.",
          },
          recap: ["Monte na ordem: processador, RAM, SSD e cooler na placa, depois o gabinete, os cabos e o teste.", "Antes de comprar, confira soquete, tipo de RAM, formato da placa e potência da fonte.", "No diagnóstico, comece pelo simples e mude uma coisa por vez."],
        },
      ],
      quiz: {
        sticker: { id: "mestre-do-modulo-2", min: 8 },
        questions: [
          { question: "Pedro quer trocar só o processador e manter a placa-mãe. O que precisa combinar entre os dois?", options: ["A potência da fonte e o selo 80 Plus.", "O tipo de memória, DDR4 ou DDR5.", "O soquete e o chipset da placa.", "O formato da placa, ATX ou Micro-ATX."], answer: 2, why: "Cada geração de processador pede um soquete compatível, e o chipset precisa aceitar o processador. DDR4 ou DDR5 é o que combina entre a RAM e a placa." },
          { question: "Na analogia da cozinha, Júlia edita vídeos e deixa muitos programas abertos ao mesmo tempo. O que mais ajuda no caso dela?", options: ["Clock mais alto, porque cada cozinheiro fica mais rápido.", "Mais núcleos, como ter mais cozinheiros para muitos pedidos.", "Mais cache L1, porque é a memória mais rápida do computador.", "Uma fonte mais potente, que faz o processador render mais."], answer: 1, why: "Núcleos são os cozinheiros: mais núcleos atendem mais pedidos ao mesmo tempo. Clock alto ajuda quem prepara um prato só." },
          { question: "Por que o computador tem memória cache, se já tem a RAM?", options: ["Para o processador não esperar pela RAM, que é mais lenta.", "Para guardar os arquivos quando o computador está desligado.", "Para substituir a RAM quando ela fica cheia de programas.", "Para guardar a data e a hora quando falta energia na tomada."], answer: 0, why: "Quanto mais perto do processador, mais rápida e menor a memória. A cache guarda o que ele mais usa, bem ao lado." },
          { question: "A fonte do computador de Rui parou. Ele está desligado da tomada há uma hora. Pode abrir a fonte para olhar?", options: ["Pode, desde que toque no metal do gabinete antes.", "Pode, porque fora da tomada ela não tem mais energia.", "Pode, se usar a pulseira antiestática durante o conserto.", "Não: os capacitores podem guardar carga perigosa."], answer: 3, why: "Mesmo desligada, a fonte pode guardar carga perigosa. Em caso de defeito, técnico ou troca da fonte inteira." },
          { question: "A internet de Bia é de 400 Mbps. Cerca de quantos megabytes por segundo ela consegue baixar?", options: ["50 MB por segundo.", "400 MB por segundo.", "100 MB por segundo.", "3.200 MB por segundo."], answer: 0, why: "Internet é medida em bits e arquivos em bytes. Como 1 byte tem 8 bits, 400 ÷ 8 = 50." },
          { question: "Um disco de 1 TB, que o fabricante conta como 1.000 GB, aparece no Windows com cerca de 931 GB. O que aconteceu?", options: ["O Windows e os programas já ocupam esses 69 GB que sumiram.", "Nada de errado: o Windows conta de 1.024 em 1.024.", "O disco veio com setores com defeito e deve ser trocado.", "Uma parte do disco fica reservada para a memória RAM."], answer: 1, why: "É a mesma diferença do disco de 500 GB que aparece com cerca de 465 GB. Não é defeito." },
          { question: "Caio tem placa de vídeo dedicada, mas os jogos rodam mal. O cabo do monitor está na saída de vídeo da placa-mãe. O que está acontecendo?", options: ["A placa dedicada está superaquecendo e baixou o clock sozinha.", "Falta memória RAM, porque a placa dedicada usa a RAM do sistema.", "O monitor usa a placa integrada e a dedicada fica parada.", "A fonte não tem potência para ligar as duas placas juntas."], answer: 2, why: "Com placa dedicada, o cabo do monitor vai na saída da própria placa de vídeo." },
          { question: "Lia comprou um cabo USB-C e espera que ele leve vídeo e carregue o notebook em qualquer porta USB-C. Pela aula, isso é garantido?", options: ["Sim: todo USB-C leva dados, vídeo e energia, em qualquer porta.", "Sim, desde que a porta tenha o interior azul.", "Não: USB-C serve só para carregar celulares.", "Não: USB-C é só o formato do conector."], answer: 3, why: "O formato do conector não diz a velocidade nem se a porta leva vídeo ou carrega. Confira o que o fabricante informa." },
          { question: "Por que a aula manda encaixar o processador, a RAM e o cooler na placa-mãe antes de pôr a placa no gabinete?", options: ["Porque a BIOS só reconhece as peças instaladas fora do gabinete.", "Porque fora do gabinete há mais espaço e visão dos encaixes.", "Porque o gabinete descarrega a eletricidade estática das peças.", "Porque a fonte precisa ser ligada antes, para testar cada peça."], answer: 1, why: "Com mais espaço e visão, o risco de errar o encaixe ou danificar uma peça é menor." },
          { question: "Lucas trocou a memória, limpou o cooler e atualizou um driver de uma vez, e o defeito sumiu. Qual é o problema desse jeito de investigar?", options: ["Ele não sabe qual das mudanças resolveu o defeito.", "Ele deveria ter começado trocando a fonte.", "Atualizar driver nunca resolve defeito de hardware.", "Ele precisava ter testado com o gabinete aberto."], answer: 0, why: "A regra de ouro do diagnóstico é mudar uma coisa por vez, para saber o que resolveu, ou causou, o problema." },
        ],
      },
    },
  ],
};
