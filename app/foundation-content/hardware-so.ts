// Curso: Hardware e sistema operacional. Junta duas partes, cada uma feita por uma pessoa:
// Hardware (ainda sem material) e Software, "do botão Power à internet" (4 aulas).
// Segue o padrão de app/foundation-lessons.ts.

import type { CourseContent } from "../foundation-lessons";

export const HARDWARE_SO: CourseContent = {
  closing: "Agora você sabe o caminho completo: do botão Power ao sistema, dos drivers à internet. A tecnologia muda o tempo todo, então continue explorando, sempre com cuidado.",
  modules: [
    { title: "Hardware básico", lessons: [] },
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
                "Hardware é a parte física, o que você pode tocar: processador, memória, SSD, placa-mãe, teclado e monitor.",
                "Software é a parte lógica: os programas e instruções que dizem ao computador o que fazer. Exemplos: sistema operacional, navegador, jogos e drivers.",
                { box: "exemplo", text: "Pense numa receita de bolo. Os ingredientes e o forno são o hardware; a receita é o software. Com os mesmos ingredientes, receitas diferentes dão bolos diferentes, assim como o mesmo computador edita textos, toca músicas ou roda jogos, dependendo do programa." },
                { box: "chave", text: "Hardware é o que você toca; software é o que diz ao hardware o que fazer. Um não funciona sem o outro." },
              ],
            },
            {
              title: "Do botão Power à área de trabalho",
              body: [
                { list: ["Energia: a fonte manda energia para as peças.", "Hardware: placa-mãe, processador e memória são ativados.", "BIOS/UEFI: o primeiro software entra em ação.", "Verificação: ela confere se as peças principais funcionam (o chamado POST).", "Boot: o computador procura onde está o sistema operacional, como o SSD.", "Sistema: o sistema operacional é carregado.", "Área de trabalho: aparece a tela de entrada ou a área de trabalho."], ordered: true },
                "Se o computador não encontra um sistema, mostra um erro de \"dispositivo de inicialização\". Pode ser configuração, problema no SSD ou HD, ou falta de sistema instalado.",
              ],
            },
            {
              title: "BIOS/UEFI, o primeiro software",
              body: [
                "A BIOS (ou UEFI, a versão moderna) fica gravada num chip da placa-mãe. Ela prepara as peças, reconhece os componentes, encontra o sistema e passa o controle para ele.",
                "Para entrar nela, aperte uma tecla logo ao ligar o computador. As mais comuns são Delete, F2, F10 e Esc, mas isso muda conforme o fabricante.",
                { box: "atencao", text: "Não altere configurações da BIOS/UEFI que você não conhece: algumas mudanças podem impedir o computador de ligar." },
              ],
            },
            {
              title: "O sistema operacional",
              body: [
                "O sistema operacional é o programa principal. Ele faz a ponte entre você, os programas e as peças: mostra as janelas, guarda os arquivos, divide a memória, conversa com teclado e impressora, cuida da rede e da segurança.",
                "Os mais conhecidos são Windows, Linux e macOS no computador, e Android e iOS no celular.",
                "Na primeira configuração, você escolhe idioma, região, teclado (no Brasil, o mais comum é o ABNT2, que tem a tecla Ç), internet e uma conta com senha ou PIN.",
                { box: "atencao", text: "Anote a senha ou o PIN num lugar seguro. Esquecer pode dificultar muito o acesso ao computador." },
              ],
            },
            {
              title: "Atualizações e programas seguros",
              body: [
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
                "O Windows recebe o que você pede (abrir um programa, tocar um vídeo) e organiza as peças do computador para fazer isso acontecer.",
                { box: "exemplo", text: "É como num restaurante: o cliente (você) faz o pedido ao garçom (Windows), que leva para a cozinha (hardware). O cliente não precisa saber como a cozinha funciona." },
              ],
            },
            {
              title: "Programas, arquivos e pastas",
              body: [
                "Programas são ferramentas para tarefas específicas: navegar, escrever, ver vídeos, jogar. Eles dependem do sistema para funcionar.",
                "Arquivos são os conteúdos (documentos, fotos, músicas). Pastas guardam os arquivos por assunto e podem ter outras pastas dentro.",
                { table: { caption: "Extensões de arquivo mais comuns", head: ["Extensão", "Tipo de arquivo"], rows: [[".pdf e .docx", "Documentos de texto"], [".jpg e .png", "Imagens"], [".mp4", "Vídeos"], [".mp3", "Músicas e áudios"]] } },
                { box: "pratica", text: "Abra o Explorador de Arquivos (Windows + E), entre em Documentos e crie uma pasta com o seu nome (botão direito > Novo > Pasta). Dentro dela, crie uma subpasta chamada \"Aula 2\"." },
              ],
            },
            {
              title: "Memória RAM e armazenamento",
              body: [
                "A memória RAM é um espaço rápido e temporário, onde ficam os programas que você está usando agora. Quando o computador desliga, ela é apagada.",
                "O SSD ou HD é o armazenamento permanente: guarda arquivos, programas e o próprio Windows, mesmo desligado. O SSD é bem mais rápido que o HD.",
                { box: "exemplo", text: "A RAM é a mesa de estudos: é onde fica aberto o caderno que você está usando. O SSD é o armário: guarda tudo. No fim do dia a mesa é limpa, e o que não foi guardado no armário se perde." },
                { box: "atencao", text: "Por isso é preciso salvar o trabalho (Ctrl + S). Um texto que não foi salvo está só na RAM e se perde se o computador desligar ou travar." },
              ],
            },
            {
              title: "Gerenciador de Tarefas",
              body: [
                "Mostra quais programas estão abertos e quanto cada um usa do computador. Abra com Ctrl + Shift + Esc.",
                { list: ["Processos: os programas abertos e o uso de processador, memória e disco", "Desempenho: gráficos de uso em tempo real", "Inicializar: programas que abrem sozinhos quando o computador liga"] },
                "Se o computador estiver lento e algo estiver perto de 100%, dá para fechar o programa em Finalizar tarefa.",
                { box: "atencao", text: "Feche só programas que você conhece e abriu. Muitos processos são essenciais para o Windows funcionar." },
              ],
            },
            {
              title: "Configurações e a ficha do computador",
              body: [
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
                "Drivers são pequenos programas que deixam o Windows conversar com cada dispositivo: impressora, placa de vídeo, som, rede, teclado e mouse.",
                "Sem o driver, o dispositivo não funciona ou funciona mal: aparece como \"Dispositivo desconhecido\", a tela fica com resolução baixa, o fone fica sem som.",
                { box: "exemplo", text: "O driver é como um intérprete: traduz o que o Windows pede para a língua de cada aparelho e traz a resposta de volta." },
                { box: "atencao", text: "O driver de rede é especial: sem ele, o computador fica sem internet e não consegue baixar os outros. Antes de formatar, guarde esse driver num pen drive." },
              ],
            },
            {
              title: "Conectar e usar (Plug and Play)",
              body: [
                "Na maioria das vezes, o Windows instala o driver sozinho:",
                { list: ["Você conecta o dispositivo.", "O Windows percebe e identifica o que é.", "Procura o driver na própria biblioteca ou no Windows Update.", "Instala e avisa que está pronto."], ordered: true },
                "Às vezes é preciso instalar na mão: aparelhos muito novos ou muito antigos, ou específicos, como algumas impressoras.",
              ],
            },
            {
              title: "Gerenciador de Dispositivos",
              body: [
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
                { list: ["Pedido: você digita um endereço ou clica num link.", "Caminho: a internet leva o pedido até o servidor certo.", "Servidor: um computador sempre ligado, que guarda o site, processa o pedido.", "Resposta: os dados voltam e o navegador monta a página."], ordered: true },
                "Cada aparelho tem um endereço em números (o IP). O DNS funciona como uma agenda: traduz nomes como www.exemplo.com.br para esses números.",
                { box: "exemplo", text: "É como mandar uma carta pelos Correios, com a diferença de que a resposta chega em frações de segundo." },
              ],
            },
            {
              title: "Navegadores e pesquisa",
              body: [
                "O navegador é o programa (Chrome, Edge, Firefox, Safari). O buscador é um site que você abre nele (Google, Bing, DuckDuckGo).",
                { list: ["Seja específico: \"receita de bolo de cenoura com cobertura\" em vez de \"bolo\".", "Use aspas para a frase exata: \"como funciona a internet\".", "Use o sinal de menos para tirar palavras: jaguar -carro.", "Lembre que os resultados \"Patrocinado\" são anúncios."] },
                { box: "atencao", text: "A janela anônima não salva o histórico no computador, mas não deixa você invisível na internet." },
              ],
            },
            {
              title: "Como saber se um site é confiável",
              body: [
                { list: ["Quem escreveu? Site confiável mostra o autor ou a instituição.", "A informação é recente? Veja a data.", "Cita de onde tirou as informações?", "O endereço está escrito certo? Golpistas trocam ou acrescentam letras.", "O texto é claro, sem exagero e sem títulos alarmantes?"] },
                { box: "atencao", text: "O cadeado e o https mostram que a conexão é protegida, mas não garantem que o site é honesto. Muitos sites falsos também têm cadeado." },
              ],
            },
            {
              title: "Navegar com segurança",
              body: [
                { list: ["Desconfie de prêmios, promoções boas demais e mensagens urgentes como \"sua conta será bloqueada\". Isso se chama phishing.", "Baixe programas só de sites oficiais ou da Microsoft Store.", "Use senhas longas, diferentes para cada serviço, e ative a verificação em duas etapas.", "Não passe senhas, códigos de SMS, documentos ou dados do cartão por mensagem.", "Mantenha o sistema e o navegador atualizados."] },
                { box: "atencao", text: "Bancos e empresas sérias nunca pedem senha ou código de verificação por mensagem, e-mail ou telefone. Se pedirem, é golpe." },
              ],
            },
            {
              title: "Deep Web e Dark Web",
              body: [
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
