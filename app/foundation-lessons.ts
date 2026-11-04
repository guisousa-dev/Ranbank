// Fundação RanBank: o padrão das aulas.
// Todo curso com conteúdo segue o mesmo formato: módulos > aulas > tópicos.
// O conteúdo de cada curso fica em app/foundation-content/<id do curso>.ts.
// Para colocar um curso novo: copie um arquivo de lá, troque o texto e registre aqui em COURSE_CONTENT.

import { AUTODESENVOLVIMENTO } from "./foundation-content/autodesenvolvimento";
import { EDUCACAO_FINANCEIRA } from "./foundation-content/educacao-financeira";
import { GESTAO_TEMPO } from "./foundation-content/gestao-tempo";
import { HARDWARE_SO } from "./foundation-content/hardware-so";

/**
 * Quadros de destaque. São só estes quatro, em todos os cursos:
 * - exemplo: uma situação do dia a dia;
 * - pratica: algo para fazer na hora;
 * - atencao: um cuidado importante;
 * - chave: a ideia principal do tópico.
 */
export type BoxKind = "exemplo" | "pratica" | "atencao" | "chave";

export const BOX_LABEL: Record<BoxKind, string> = { exemplo: "Exemplo", pratica: "Na prática", atencao: "Atenção", chave: "Ponto-chave" };

/** Um pedaço do texto da aula: parágrafo, lista, quadro de destaque ou tabela. */
export type Block =
  | string
  | { list: string[]; ordered?: boolean }
  | { box: BoxKind; text: string }
  | { table: { caption: string; head: string[]; rows: string[][] } };

export type Lesson = {
  /** Nome curto e sem acento, usado no endereço da aula. */
  id: string;
  title: string;
  /** Uma frase que aparece na lista de aulas, embaixo do título. */
  summary: string;
  /** "Nesta aula você vai": de 2 a 4 itens. */
  goals: string[];
  /** Vídeo no YouTube (não listado). Toda aula com vídeo tem o mesmo conteúdo em texto logo abaixo. */
  video?: { youtubeId: string; minutes: number };
  /** De 3 a 5 tópicos curtos. */
  sections: Array<{ title: string; body: Block[] }>;
  /** Atividade para fazer no fim. A resposta fica escondida até a pessoa pedir. */
  activity: { title: string; steps: string[]; answer?: string; note?: string };
  /** Resumo em 3 pontos. */
  recap: [string, string, string];
  /** Material para baixar (PDF, por exemplo), sempre com o tamanho. */
  files?: Array<{ label: string; href: string; size: string }>;
};

/**
 * Um módulo do curso. Alguns cursos juntam o trabalho de duas pessoas (ex.: Hardware + Software):
 * cada uma fica com um módulo. Módulo ainda sem aulas (lessons: []) aparece como "em preparação".
 */
export type Module = { title: string; lessons: Lesson[] };

export type CourseContent = {
  modules: Module[];
  /** Aviso que aparece no pé de todas as aulas do curso. */
  note?: string;
  /** Mensagem da tela de conclusão. */
  closing?: string;
};

/** Cursos que já têm aulas. A chave é o id do curso em foundation-courses.ts. */
export const COURSE_CONTENT: Record<string, CourseContent> = {
  "educacao-financeira": EDUCACAO_FINANCEIRA,
  "gestao-tempo": GESTAO_TEMPO,
  "autodesenvolvimento": AUTODESENVOLVIMENTO,
  "hardware-so": HARDWARE_SO,
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
  if ("box" in block) return block.text;
  return [block.table.caption, ...block.table.head, ...block.table.rows.flat()].join(" ");
};

/** Tempo da aula em minutos: leitura (cerca de 150 palavras por minuto, com calma) mais o vídeo. */
export function lessonMinutes(lesson: Lesson) {
  const text = [
    ...lesson.goals,
    ...lesson.sections.flatMap((section) => [section.title, ...section.body.map(blockText)]),
    ...lesson.activity.steps,
    lesson.activity.answer ?? "",
    ...lesson.recap,
  ].join(" ");
  return Math.max(3, Math.round(words(text) / 150) + 2) + (lesson.video?.minutes ?? 0);
}
