// Curso: Hardware e sistema operacional. Junta duas partes, cada uma feita por uma pessoa:
// Hardware, "por dentro do computador" (4 aulas), e Software, "do botão Power à internet" (4 aulas).
// Segue o padrão de app/foundation-lessons.ts.

import type { CourseContent } from "../foundation-lessons";

export const HARDWARE_SO: CourseContent = {
  closing: "Agora você sabe o caminho completo: do botão Power ao sistema, dos drivers à internet. A tecnologia muda o tempo todo, então continue explorando, sempre com cuidado.",
  modules: [
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
              title: "O que a BIOS/UEFI guarda",
              body: [
                "Na aula \"Da BIOS ao sistema operacional\", você vê o caminho do botão Power até a área de trabalho. Aqui ficam alguns detalhes do lado do hardware:",
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
    },
    {
      title: "Software: do botão Power à internet",
      lessons: [
        {
          id: "da-bios-ao-sistema",
          title: "Da BIOS ao sistema operacional",
          summary: "O que acontece entre apertar o botão Power e ver a área de trabalho.",
          goals: ["Diferenciar hardware e software", "Entender o caminho do botão Power até a área de trabalho", "Saber o que são a BIOS/UEFI e o sistema operacional", "Configurar e atualizar o sistema com segurança"],
          sections: [
            {
              title: "Hardware e software",
              body: [
                { image: "/images/fundacao/aulas/hardware-so/bios-1-hardware-software.webp", alt: "Slide \"Hardware × Software\": de um lado, hardware é a parte física, aquilo que você pode tocar; do outro, software são os programas que dão instruções ao computador. Ao lado, foto de peças de computador e de telas com programas." },
                "Hardware é a parte física, o que você pode tocar: processador, memória, SSD, placa-mãe, teclado e monitor.",
                "Software é a parte lógica: os programas e instruções que dizem ao computador o que fazer. Exemplos: sistema operacional, navegador, jogos e drivers.",
                { box: "exemplo", text: "Pense numa receita de bolo. Os ingredientes e o forno são o hardware; a receita é o software. Com os mesmos ingredientes, receitas diferentes dão bolos diferentes, assim como o mesmo computador edita textos, toca músicas ou roda jogos, dependendo do programa." },
                { box: "chave", text: "Hardware é o que você toca; software é o que diz ao hardware o que fazer. Um não funciona sem o outro." },
              ],
            },
            {
              title: "Do botão Power à área de trabalho",
              body: [
                { image: "/images/fundacao/aulas/hardware-so/bios-2-sequencia.webp", alt: "Slide \"O computador começa a acordar\": sete etapas em sequência, ligadas por setas. Energia, hardware, BIOS/UEFI, verificação, boot, sistema e área de trabalho. Cada etapa prepara a próxima." },
                { list: ["Energia: a fonte manda energia para as peças.", "Hardware: placa-mãe, processador e memória são ativados.", "BIOS/UEFI: o primeiro software entra em ação.", "Verificação: ela confere se as peças principais funcionam (o chamado POST).", "Boot: o computador procura onde está o sistema operacional, como o SSD.", "Sistema: o sistema operacional é carregado.", "Área de trabalho: aparece a tela de entrada ou a área de trabalho."], ordered: true },
                "Se o computador não encontra um sistema, mostra um erro de \"dispositivo de inicialização\". Pode ser configuração, problema no SSD ou HD, ou falta de sistema instalado.",
              ],
            },
            {
              title: "BIOS/UEFI, o primeiro software",
              body: [
                { image: "/images/fundacao/aulas/hardware-so/bios-3-bios-uefi.webp", alt: "Slide \"BIOS e UEFI são a mesma coisa?\": à esquerda, a tela antiga da BIOS, só com texto (antiga, simples, limitada); à direita, a tela da UEFI, mais visual (moderna e atual)." },
                "A BIOS (ou UEFI, a versão moderna) fica gravada num chip da placa-mãe. Ela prepara as peças, reconhece os componentes, encontra o sistema e passa o controle para ele.",
                "Para entrar nela, aperte uma tecla logo ao ligar o computador. As mais comuns são Delete, F2, F10 e Esc, mas isso muda conforme o fabricante.",
                { box: "atencao", text: "Não altere configurações da BIOS/UEFI que você não conhece: algumas mudanças podem impedir o computador de ligar." },
              ],
            },
            {
              title: "O sistema operacional",
              body: [
                { image: "/images/fundacao/aulas/hardware-so/bios-4-configuracao.webp", alt: "Slide \"A primeira configuração do sistema operacional\": quatro etapas lado a lado. Idioma (Português do Brasil), região (formato de data e hora), teclado (ABNT2) e conta e segurança (conta, senha ou PIN)." },
                "O sistema operacional é o programa principal. Ele faz a ponte entre você, os programas e as peças: mostra as janelas, guarda os arquivos, divide a memória, conversa com teclado e impressora, cuida da rede e da segurança.",
                "Os mais conhecidos são Windows, Linux e macOS no computador, e Android e iOS no celular.",
                "Na primeira configuração, você escolhe idioma, região, teclado (no Brasil, o mais comum é o ABNT2, que tem a tecla Ç), internet e uma conta com senha ou PIN.",
                { box: "atencao", text: "Anote a senha ou o PIN num lugar seguro. Esquecer pode dificultar muito o acesso ao computador." },
              ],
            },
            {
              title: "Atualizações e programas seguros",
              body: [
                { image: "/images/fundacao/aulas/hardware-so/bios-5-atualizacoes.webp", alt: "Slide \"A importância das atualizações\": atualizações corrigem falhas, melhoram o funcionamento e aumentam a segurança. Dicas: salve os arquivos antes de atualizar e não desligue durante a instalação." },
                "As atualizações corrigem falhas, melhoram o funcionamento e fecham brechas de segurança. No Windows, ficam em Configurações > Windows Update (atalho Windows + I para abrir as Configurações).",
                { list: ["Salve os arquivos antes de atualizar.", "Não desligue o computador durante a atualização.", "Instale programas só da Microsoft Store ou do site oficial de quem fez o programa.", "Leia cada tela do instalador: alguns tentam incluir programas que você não pediu."] },
              ],
            },
          ],
          activity: {
            title: "O computador está pronto para usar?",
            steps: [
              "Confira se o sistema liga sem erros e a área de trabalho aparece.",
              "Abra o Bloco de Notas e digite: \"Ação, informação e configuração\".",
              "Abra um site no navegador e veja se a internet funciona.",
              "Abra as Configurações (Windows + I) e veja se há atualizações no Windows Update.",
            ],
            answer: "Se os acentos e o Ç saíram certos, o teclado está configurado no padrão correto. Se aparecerem símbolos trocados, ajuste o teclado para Português (Brasil) ABNT2 nas configurações de idioma.",
          },
          recap: ["Hardware é a parte física; software são as instruções.", "Ao ligar: energia, BIOS/UEFI, verificação, boot, sistema e área de trabalho.", "Sistema atualizado e programas de fonte oficial são mais seguros."],
        },
        {
          id: "conhecendo-o-windows",
          title: "Conhecendo o Windows",
          summary: "Programas, arquivos, pastas, memória e o Gerenciador de Tarefas.",
          goals: ["Diferenciar sistema, programas, arquivos e pastas", "Entender a diferença entre memória RAM e armazenamento", "Usar o Gerenciador de Tarefas e as Configurações"],
          sections: [
            {
              title: "O Windows como intermediário",
              body: [
                { image: "/images/fundacao/aulas/hardware-so/windows-1-como-funciona.webp", alt: "Slide \"Como o Windows funciona?\": esquema com três caixas ligadas por setas. Usuário (comandos e escolhas), Windows (organiza e coordena) e hardware (processa e armazena)." },
                "O Windows recebe o que você pede (abrir um programa, tocar um vídeo) e organiza as peças do computador para fazer isso acontecer.",
                { box: "exemplo", text: "É como num restaurante: o cliente (você) faz o pedido ao garçom (Windows), que leva para a cozinha (hardware). O cliente não precisa saber como a cozinha funciona." },
              ],
            },
            {
              title: "Programas, arquivos e pastas",
              body: [
                { image: "/images/fundacao/aulas/hardware-so/windows-2-arquivos-pastas.webp", alt: "Slide \"Arquivos e pastas\": uma pasta com três tipos de arquivo dentro, documentos, imagens e vídeos. As pastas ajudam a organizar os arquivos e facilitam encontrá-los." },
                "Programas são ferramentas para tarefas específicas: navegar, escrever, ver vídeos, jogar. Eles dependem do sistema para funcionar.",
                "Arquivos são os conteúdos (documentos, fotos, músicas). Pastas guardam os arquivos por assunto e podem ter outras pastas dentro.",
                { table: { caption: "Extensões de arquivo mais comuns", head: ["Extensão", "Tipo de arquivo"], rows: [[".pdf e .docx", "Documentos de texto"], [".jpg e .png", "Imagens"], [".mp4", "Vídeos"], [".mp3", "Músicas e áudios"]] } },
                { box: "pratica", text: "Abra o Explorador de Arquivos (Windows + E), entre em Documentos e crie uma pasta com o seu nome (botão direito > Novo > Pasta). Dentro dela, crie uma subpasta chamada \"Aula 2\"." },
              ],
            },
            {
              title: "Memória RAM e armazenamento",
              body: [
                { image: "/images/fundacao/aulas/hardware-so/windows-3-ram.webp", alt: "Slide \"Memória RAM e armazenamento\": dois quadros. Memória RAM mantém temporariamente os dados dos programas em execução; SSD/HD guarda arquivos, programas e o sistema mesmo com o computador desligado." },
                "A memória RAM é um espaço rápido e temporário, onde ficam os programas que você está usando agora. Quando o computador desliga, ela é apagada.",
                "O SSD ou HD é o armazenamento permanente: guarda arquivos, programas e o próprio Windows, mesmo desligado. O SSD é bem mais rápido que o HD.",
                { box: "exemplo", text: "A RAM é a mesa de estudos: é onde fica aberto o caderno que você está usando. O SSD é o armário: guarda tudo. No fim do dia a mesa é limpa, e o que não foi guardado no armário se perde." },
                { box: "atencao", text: "Por isso é preciso salvar o trabalho (Ctrl + S). Um texto que não foi salvo está só na RAM e se perde se o computador desligar ou travar." },
              ],
            },
            {
              title: "Gerenciador de Tarefas",
              body: [
                { image: "/images/fundacao/aulas/hardware-so/windows-4-gerenciador.webp", alt: "Slide \"Desempenho e Gerenciador de Tarefas\", com o atalho Ctrl + Shift + Esc em destaque e um desenho da janela do Gerenciador com as abas Processos, Desempenho, Inicializar e Usuários." },
                "Mostra quais programas estão abertos e quanto cada um usa do computador. Abra com Ctrl + Shift + Esc.",
                { list: ["Processos: os programas abertos e o uso de processador, memória e disco", "Desempenho: gráficos de uso em tempo real", "Inicializar: programas que abrem sozinhos quando o computador liga"] },
                "Se o computador estiver lento e algo estiver perto de 100%, dá para fechar o programa em Finalizar tarefa.",
                { box: "atencao", text: "Feche só programas que você conhece e abriu. Muitos processos são essenciais para o Windows funcionar." },
              ],
            },
            {
              title: "Configurações e a ficha do computador",
              body: [
                { image: "/images/fundacao/aulas/hardware-so/windows-5-ficha.webp", alt: "Slide \"Conhecendo seu computador\", o passaporte do PC: o Windows mostra o nome do dispositivo, o processador, a memória RAM e a versão do Windows, ao lado de um desenho de ficha técnica." },
                "As Configurações (Windows + I) ajustam tela, som, internet e contas. Em Configurações > Sistema > Sobre fica a \"ficha técnica\" do computador: nome, processador, quantidade de RAM e versão do Windows.",
              ],
            },
          ],
          activity: {
            title: "Revisão rápida",
            steps: ["O que é um sistema operacional?", "Qual a diferença entre RAM e armazenamento?", "Como ver o que está deixando o computador lento?", "Onde ficam as configurações do Windows?"],
            answer: "1) É o programa principal, que faz a ponte entre você e o hardware. 2) A RAM guarda o que está em uso e se apaga ao desligar; o SSD/HD guarda tudo de forma permanente. 3) No Gerenciador de Tarefas (Ctrl + Shift + Esc), nas abas Processos e Desempenho. 4) No Menu Iniciar > Configurações ou com Windows + I.",
          },
          recap: ["Programas fazem tarefas; arquivos ficam organizados em pastas.", "RAM é a mesa (temporária); SSD/HD é o armário (permanente).", "Ctrl + S salva, Ctrl + Shift + Esc abre o Gerenciador, Windows + I abre as Configurações."],
        },
        {
          id: "drivers-e-dispositivos",
          title: "Drivers e dispositivos",
          summary: "Como o Windows conversa com impressora, som, vídeo e rede.",
          goals: ["Entender o que é um driver", "Saber como o Windows instala drivers sozinho", "Usar o Gerenciador de Dispositivos para achar problemas", "Instalar drivers de fontes confiáveis"],
          sections: [
            {
              title: "O que são drivers?",
              body: [
                { image: "/images/fundacao/aulas/hardware-so/drivers-1-o-que-sao.webp", alt: "Slide \"O que são drivers?\": um computador ligado por linhas de luz a um monitor, um teclado, um mouse e uma impressora. Drivers são programas que permitem a comunicação entre o Windows e os dispositivos." },
                "Drivers são pequenos programas que deixam o Windows conversar com cada dispositivo: impressora, placa de vídeo, som, rede, teclado e mouse.",
                "Sem o driver, o dispositivo não funciona ou funciona mal: aparece como \"Dispositivo desconhecido\", a tela fica com resolução baixa, o fone fica sem som.",
                { box: "exemplo", text: "O driver é como um intérprete: traduz o que o Windows pede para a língua de cada aparelho e traz a resposta de volta." },
                { box: "atencao", text: "O driver de rede é especial: sem ele, o computador fica sem internet e não consegue baixar os outros. Antes de formatar, guarde esse driver num pen drive." },
              ],
            },
            {
              title: "Conectar e usar (Plug and Play)",
              body: [
                { image: "/images/fundacao/aulas/hardware-so/drivers-2-automatico.webp", alt: "Slide \"O Windows instala drivers automaticamente?\": um pen drive sendo conectado a um notebook e, na tela, o aviso \"Dispositivo reconhecido, instalando driver de dispositivo\"." },
                "Na maioria das vezes, o Windows instala o driver sozinho:",
                { list: ["Você conecta o dispositivo.", "O Windows percebe e identifica o que é.", "Procura o driver na própria biblioteca ou no Windows Update.", "Instala e avisa que está pronto."], ordered: true },
                "Às vezes é preciso instalar na mão: aparelhos muito novos ou muito antigos, ou específicos, como algumas impressoras.",
              ],
            },
            {
              title: "Gerenciador de Dispositivos",
              body: [
                { image: "/images/fundacao/aulas/hardware-so/drivers-3-problemas.webp", alt: "Slide \"Como identificar problemas nos drivers?\": um notebook com o Gerenciador de Dispositivos aberto, mostrando um dispositivo com o ponto de exclamação amarelo, sinal de problema no driver." },
                "Mostra todo o hardware do computador. Abra com Windows + X > Gerenciador de Dispositivos.",
                { table: { caption: "Sinais de problema", head: ["O que aparece", "O que quer dizer"], rows: [
                  ["Ponto de exclamação amarelo", "Problema no driver: errado, faltando ou com defeito"],
                  ["\"Dispositivo desconhecido\"", "O Windows viu o aparelho, mas não achou driver"],
                  ["Seta para baixo no ícone", "O dispositivo está desativado"],
                ] } },
                "Para resolver, tente nesta ordem: reiniciar; desconectar e conectar de novo; botão direito > Atualizar driver; procurar no site oficial do fabricante.",
                { box: "atencao", text: "Não desative nem desinstale dispositivos que você não conhece. Desativar o vídeo ou o teclado pode deixar você sem imagem ou sem como digitar." },
              ],
            },
            {
              title: "Instalar e atualizar com segurança",
              body: [
                { image: "/images/fundacao/aulas/hardware-so/drivers-4-instalacao.webp", alt: "Slide \"Instalação e atualização de drivers\": do quadro \"Driver\" saem três setas para as fontes confiáveis. Windows Update, Gerenciador de Dispositivos e site do fabricante." },
                { list: ["Windows Update: automático e seguro", "Gerenciador de Dispositivos: botão direito > Atualizar driver", "Site oficial do fabricante, na área de Suporte ou Downloads, com o modelo exato"] },
                { box: "atencao", text: "Fuja de sites desconhecidos e de programas que prometem \"atualizar todos os drivers de uma vez\". Muitos instalam drivers errados, propaganda ou vírus." },
                { box: "pratica", text: "Se um driver novo der problema, dá para voltar ao anterior: no Gerenciador de Dispositivos, clique duas vezes no dispositivo, aba Driver > Reverter driver." },
              ],
            },
          ],
          activity: {
            title: "Explore os seus dispositivos",
            steps: ["Abra o Gerenciador de Dispositivos (Windows + X).", "Abra as categorias e descubra qual é a sua placa de vídeo em \"Adaptadores de vídeo\".", "Confira se teclado, mouse, som e rede aparecem na lista.", "Procure algum ponto de exclamação amarelo."],
            note: "Nesta atividade, só observe. Não desative, desinstale nem atualize nada sem necessidade.",
          },
          recap: ["Driver é o tradutor entre o Windows e cada aparelho.", "Exclamação amarela no Gerenciador de Dispositivos indica problema no driver.", "Drivers só do Windows Update ou do site oficial do fabricante."],
        },
        {
          id: "internet-e-seguranca",
          title: "Internet e segurança",
          summary: "Como a internet funciona, pesquisar bem e navegar com segurança.",
          goals: ["Entender como a internet funciona", "Pesquisar melhor e avaliar se um site é confiável", "Navegar com segurança", "Diferenciar superfície, Deep Web e Dark Web"],
          sections: [
            {
              title: "Como a internet funciona",
              body: [
                { image: "/images/fundacao/aulas/hardware-so/internet-1-como-funciona.webp", alt: "Slide \"Como funciona a internet?\": um notebook manda uma solicitação pela nuvem da internet até um servidor, e o servidor manda a resposta de volta pelo mesmo caminho." },
                { list: ["Pedido: você digita um endereço ou clica num link.", "Caminho: a internet leva o pedido até o servidor certo.", "Servidor: um computador sempre ligado, que guarda o site, processa o pedido.", "Resposta: os dados voltam e o navegador monta a página."], ordered: true },
                "Cada aparelho tem um endereço em números (o IP). O DNS funciona como uma agenda: traduz nomes como www.exemplo.com.br para esses números.",
                { box: "exemplo", text: "É como mandar uma carta pelos Correios, com a diferença de que a resposta chega em frações de segundo." },
              ],
            },
            {
              title: "Navegadores e pesquisa",
              body: [
                { image: "/images/fundacao/aulas/hardware-so/internet-2-navegadores.webp", alt: "Slide \"O que são navegadores?\": os ícones do Google Chrome, Microsoft Edge, Mozilla Firefox, Safari e Opera, programas usados para acessar sites." },
                "O navegador é o programa (Chrome, Edge, Firefox, Safari). O buscador é um site que você abre nele (Google, Bing, DuckDuckGo).",
                { list: ["Seja específico: \"receita de bolo de cenoura com cobertura\" em vez de \"bolo\".", "Use aspas para a frase exata: \"como funciona a internet\".", "Use o sinal de menos para tirar palavras: jaguar -carro.", "Lembre que os resultados \"Patrocinado\" são anúncios."] },
                { box: "atencao", text: "A janela anônima não salva o histórico no computador, mas não deixa você invisível na internet." },
              ],
            },
            {
              title: "Como saber se um site é confiável",
              body: [
                { image: "/images/fundacao/aulas/hardware-so/internet-3-sites-confiaveis.webp", alt: "Slide \"Como identificar sites confiáveis?\": um site confiável, com https e cadeado, ao lado de um site suspeito com endereço estranho. No meio, as perguntas: quem é o autor, se a informação está atualizada, se há fontes, se o endereço é legítimo e se o conteúdo é claro." },
                { list: ["Quem escreveu? Site confiável mostra o autor ou a instituição.", "A informação é recente? Veja a data.", "Cita de onde tirou as informações?", "O endereço está escrito certo? Golpistas trocam ou acrescentam letras.", "O texto é claro, sem exagero e sem títulos alarmantes?"] },
                { box: "atencao", text: "O cadeado e o https mostram que a conexão é protegida, mas não garantem que o site é honesto. Muitos sites falsos também têm cadeado." },
              ],
            },
            {
              title: "Navegar com segurança",
              body: [
                { image: "/images/fundacao/aulas/hardware-so/internet-4-seguranca.webp", alt: "Slide \"Segurança durante a navegação\": um escudo com cadeado sobre um notebook. Evite links suspeitos, não faça downloads desconhecidos, use senhas fortes, proteja suas informações e mantenha sistema e navegador atualizados." },
                { list: ["Desconfie de prêmios, promoções boas demais e mensagens urgentes como \"sua conta será bloqueada\". Isso se chama phishing.", "Baixe programas só de sites oficiais ou da Microsoft Store.", "Use senhas longas, diferentes para cada serviço, e ative a verificação em duas etapas.", "Não passe senhas, códigos de SMS, documentos ou dados do cartão por mensagem.", "Mantenha o sistema e o navegador atualizados."] },
                { box: "atencao", text: "Bancos e empresas sérias nunca pedem senha ou código de verificação por mensagem, e-mail ou telefone. Se pedirem, é golpe." },
              ],
            },
            {
              title: "Deep Web e Dark Web",
              body: [
                { image: "/images/fundacao/aulas/hardware-so/internet-5-deep-web.webp", alt: "Slide \"O que é a Deep Web?\": uma pirâmide em três camadas. No topo, a superfície da web (sites de notícias, lojas, redes sociais); no meio, a Deep Web (contas bancárias, e-mail, documentos privados); embaixo, a Dark Web (conteúdos ocultos e de acesso anônimo)." },
                { table: { caption: "As camadas da internet", head: ["Camada", "O que é", "Exemplo"], rows: [
                  ["Superfície", "Conteúdo público, que aparece nos buscadores", "Sites de notícias e lojas"],
                  ["Deep Web", "Conteúdo protegido por login e senha", "O seu e-mail e o aplicativo do banco"],
                  ["Dark Web", "Parte oculta e anônima, acessada com programas especiais", "Usada por jornalistas, mas também por criminosos"],
                ] } },
                "A Deep Web não é ilegal: você a usa todo dia. Já a Dark Web tem usos legítimos, mas também golpes, vírus e venda de dados roubados.",
                { box: "atencao", text: "Não acesse a Dark Web por curiosidade. O risco de golpe e vírus é alto e não existe nenhum suporte se algo der errado." },
              ],
            },
          ],
          activity: {
            title: "Pesquise e compare",
            steps: ["Escolha um assunto e faça uma pergunta clara no buscador, usando as dicas de pesquisa.", "Abra pelo menos três sites diferentes.", "Avalie cada um com a lista de site confiável.", "Anote o que aprendeu e de qual site veio cada informação."],
            answer: "Se os três sites dizem a mesma coisa e mostram autor, data e fontes, a informação provavelmente é confiável. Se um deles exagera, não tem autor ou tem endereço estranho, desconfie e procure outra fonte.",
          },
          recap: ["O navegador é o programa; o buscador é o site de pesquisa.", "Cadeado não garante que o site é honesto: confira autor, data e endereço.", "Ninguém sério pede a sua senha por mensagem."],
        },
      ],
    },
  ],
};
