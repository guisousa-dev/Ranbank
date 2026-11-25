// Fundação RanBank: o padrão das aulas.
// Todo curso com conteúdo segue o mesmo formato: módulos > aulas > tópicos.
// O conteúdo de cada curso fica em app/foundation-content/<id do curso>.ts.
// Para colocar um curso novo: copie um arquivo de lá, troque o texto e registre aqui em COURSE_CONTENT.

import { AUTODESENVOLVIMENTO } from "./foundation-content/autodesenvolvimento";
import { DOMINO } from "./foundation-content/domino";
import { EDUCACAO_FINANCEIRA } from "./foundation-content/educacao-financeira";
import { FUTEBOL } from "./foundation-content/futebol";
import { GESTAO_TEMPO } from "./foundation-content/gestao-tempo";
import { HARDWARE_SO } from "./foundation-content/hardware-so";
import { IMPRESSORA_3D } from "./foundation-content/impressora-3d";
import { JOGOS } from "./foundation-content/jogos";
import { LITERATURA } from "./foundation-content/literatura";
import { MAQUIAGEM } from "./foundation-content/maquiagem";
import { PRIMEIROS_SOCORROS } from "./foundation-content/primeiros-socorros";
import { XADREZ } from "./foundation-content/xadrez";

/**
 * Quadros de destaque. São só estes quatro, em todos os cursos:
 * - exemplo: uma situação do dia a dia;
 * - pratica: algo para fazer na hora;
 * - atencao: um cuidado importante;
 * - chave: a ideia principal do tópico.
 */
export type BoxKind = "exemplo" | "pratica" | "atencao" | "chave";

export const BOX_LABEL: Record<BoxKind, string> = { exemplo: "Exemplo", pratica: "Na prática", atencao: "Atenção", chave: "Ponto-chave" };

/**
 * Um pedaço do texto da aula: parágrafo, lista, quadro de destaque, tabela ou imagem.
 * Imagem: fica em public/images/fundacao/aulas/<id do curso>/. O `alt` descreve o que a imagem mostra
 * (e repete o texto escrito nela), para quem usa leitor de tela. Nunca mostrar nome de quem fez o curso.
 * Vídeo: um vídeo do YouTube no meio do tópico, sobre o assunto daquele tópico (o texto continua completo sem ele).
 * Ferramenta: um exercício interativo dentro da aula. Cada uma tem o seu componente em FoundationCatalog.tsx.
 */
export type Block =
  | string
  | { list: string[]; ordered?: boolean }
  | { box: BoxKind; text: string; title?: string }
  | { table: { caption: string; head: string[]; rows: string[][] } }
  | { image: string; alt: string }
  | { video: LessonVideo & { title: string } }
  | { tool: LessonTool }
  | { check: Check }
  | { sort: Sort }
  | { write: string }
  | { cards: Array<{ title: string; text: string; tag?: string }> };

/** Vídeo do YouTube. `minutes` entra no tempo da aula. */
export type LessonVideo = { youtubeId: string; minutes: number };

/** Ferramentas interativas das aulas. Calculam tudo no navegador e não enviam nada. */
export type LessonTool = "custo-impressao-3d" | "diagnostico-financeiro" | "gasto-formiga" | "prioridades" | "simulacao-lia" | "orcamento" | "parcelas" | "comparador" | "juros-compostos" | "ritmo-rcp" | "regra-do-quadrado" | "matriz-eisenhower" | "caca-ao-golpe" | "respiracao" | "estante";

/**
 * "Pare e pense": uma pergunta com a resposta na hora. `answer` é o índice da opção certa (0, 1, 2...).
 * As opções aparecem na ordem escrita, com A), B), C).
 */
export type Check = { question: string; options: string[]; answer: number; why: string };

/**
 * Separar em dois grupos (mito ou verdade, necessidade ou desejo). Cada item mostra a explicação depois da escolha.
 * `sticker`: figurinha que a pessoa ganha ao terminar com pelo menos `min` acertos.
 */
export type Sort = {
  title: string;
  labels: [string, string];
  items: Array<{ text: string; answer: 0 | 1; why: string }>;
  sticker?: { id: string; min: number };
};

/** Quiz do módulo: aparece no fim da última aula do módulo, com a explicação de cada resposta na hora. */
export type ModuleQuiz = { questions: Check[]; sticker?: { id: string; min: number } };

/** Figurinha que a pessoa cola no caderno ao cumprir uma etapa. Fica só no aparelho. */
export type Sticker = { id: string; name: string; how: string };

export type Lesson = {
  /** Nome curto e sem acento, usado no endereço da aula. */
  id: string;
  title: string;
  /** Uma frase que aparece na lista de aulas, embaixo do título. */
  summary: string;
  /** "Nesta aula você vai": de 2 a 4 itens. */
  goals: string[];
  /** Vídeo no YouTube (não listado). Toda aula com vídeo tem o mesmo conteúdo em texto logo abaixo. */
  video?: LessonVideo;
  /** De 3 a 5 tópicos curtos. */
  sections: Array<{ title: string; body: Block[] }>;
  /** Atividade para fazer no fim. A resposta fica escondida até a pessoa pedir. */
  activity: { title: string; steps: string[]; answer?: string; note?: string; fields?: string[] };
  /** Resumo em 3 pontos. */
  recap: [string, string, string];
  /** Material para baixar (PDF, por exemplo), sempre com o tamanho. */
  files?: Array<{ label: string; href: string; size: string }>;
};

/**
 * Um módulo do curso. Alguns cursos juntam o trabalho de duas pessoas (ex.: Hardware + Software):
 * cada uma fica com um módulo. Módulo ainda sem aulas (lessons: []) aparece como "em preparação".
 */
export type Module = { title: string; lessons: Lesson[]; quiz?: ModuleQuiz };

/**
 * Capa do caderno do curso. Sem capa definida, o caderno usa as cores da categoria.
 * `color`: cor da capa. `ink`: cor dos títulos e destaques na folha clara (precisa de bom contraste com o creme).
 * `glow`: a mesma ideia na folha escura. `desk`: desenho da mesa em volta do caderno.
 */
export type NotebookCover = { color: string; ink: string; glow: string; desk?: "mesa-rosa" };

export type CourseContent = {
  modules: Module[];
  cover?: NotebookCover;
  /** Figurinhas do curso, na ordem em que aparecem na capa. */
  stickers?: Sticker[];
  /** Aviso que aparece no pé de todas as aulas do curso. */
  note?: string;
  /** Aviso no topo de todas as aulas, enquanto o conteúdo espera a revisão de um especialista. Tirar depois da revisão. */
  review?: string;
  /** Mensagem da tela de conclusão. */
  closing?: string;
  /** Perguntas do desafio final. O curso que tem desafio dá certificado a quem passa. */
  quiz?: QuizQuestion[];
};

/**
 * Pergunta do desafio final. `module` é o índice do módulo (0, 1, 2...), que vira a fatia
 * do carretel. A primeira opção é sempre a certa: a ordem é embaralhada na hora de mostrar.
 */
export type QuizQuestion = {
  module: number;
  question: string;
  options: [string, string, string, string];
  /** Explicação que aparece depois da resposta, certa ou errada. */
  why: string;
  /** Onde o assunto está, ex.: "Aula 4 · Suportes e a regra dos 45°". */
  ref: string;
};

/** Resultado do desafio final, guardado junto com o progresso do curso. */
export type QuizResult = {
  /** Maior número de acertos numa partida. */
  best: number;
  tries: number;
  /**
   * Preenchido na primeira aprovação; o código do certificado não muda depois.
   * `verifiedName`: o nome registrado no servidor (só para quem tem conta). O certificado mostra
   * onde conferir o código quando esse nome é o mesmo que está nele.
   */
  passed?: { at: string; hits: number; code: string; name?: string; verifiedName?: string };
};

/** Regras do desafio final: quantas perguntas, quantos acertos para passar e segundos por pergunta. */
export const QUIZ_RULES = { total: 10, pass: 7, seconds: 20 } as const;

/** Cursos que já têm aulas. A chave é o id do curso em foundation-courses.ts. */
export const COURSE_CONTENT: Record<string, CourseContent> = {
  "educacao-financeira": EDUCACAO_FINANCEIRA,
  "gestao-tempo": GESTAO_TEMPO,
  "autodesenvolvimento": AUTODESENVOLVIMENTO,
  "hardware-so": HARDWARE_SO,
  "impressora-3d": IMPRESSORA_3D,
  "domino": DOMINO,
  "jogos": JOGOS,
  "futebol": FUTEBOL,
  "literatura": LITERATURA,
  "xadrez": XADREZ,
  "primeiros-socorros": PRIMEIROS_SOCORROS,
  "maquiagem": MAQUIAGEM,
};

/** Todas as aulas do curso, em ordem, com o módulo de cada uma. */
export function lessonsOf(courseId: string) {
  const content = COURSE_CONTENT[courseId];
  if (!content) return [];
  return content.modules.flatMap((module, moduleIndex) => module.lessons.map((lesson) => ({ lesson, module, moduleIndex })));
}

const words = (text: string) => text.split(/\s+/).filter(Boolean).length;
const blockText = (block: Block): string => {
  if (typeof block === "string") return block;
  if ("list" in block) return block.list.join(" ");
  if ("box" in block) return [block.title ?? "", block.text].join(" ");
  if ("image" in block || "tool" in block || "video" in block) return "";
  if ("check" in block) return [block.check.question, ...block.check.options].join(" ");
  if ("sort" in block) return [block.sort.title, ...block.sort.items.map((item) => item.text)].join(" ");
  if ("write" in block) return block.write;
  if ("cards" in block) return block.cards.map((card) => `${card.title}: ${card.text}`).join(" ");
  return [block.table.caption, ...block.table.head, ...block.table.rows.flat()].join(" ");
};

/** A aula em trechos de texto corrido, na ordem da página. Usado pelo botão "Ouvir esta aula". */
export function lessonSpeech(lesson: Lesson) {
  return [
    lesson.title,
    `Nesta aula você vai: ${lesson.goals.join("; ")}.`,
    ...lesson.sections.flatMap((section, index) => [`${index + 1}. ${section.title}.`, ...section.body.map(blockText)]),
    `Atividade: ${lesson.activity.title}.`,
    ...lesson.activity.steps,
    `Resumo da aula: ${lesson.recap.join(" ")}`,
  ].filter((text) => text.trim());
}

/** Todos os vídeos da aula: o do começo e os que estão dentro dos tópicos. */
export function lessonVideos(lesson: Lesson): LessonVideo[] {
  const inside = lesson.sections.flatMap((section) => section.body.flatMap((block) => (typeof block === "object" && "video" in block ? [block.video] : [])));
  return lesson.video ? [lesson.video, ...inside] : inside;
}

/** Tempo da aula em minutos: leitura (cerca de 150 palavras por minuto, com calma) mais os vídeos. */
export function lessonMinutes(lesson: Lesson) {
  const text = [
    ...lesson.goals,
    ...lesson.sections.flatMap((section) => [section.title, ...section.body.map(blockText)]),
    ...lesson.activity.steps,
    lesson.activity.answer ?? "",
    ...lesson.recap,
  ].join(" ");
  return Math.max(3, Math.round(words(text) / 150) + 2) + lessonVideos(lesson).reduce((total, video) => total + video.minutes, 0);
}
