import { FastifyReply } from 'fastify';
import data from './questions.json';

const count = new URL(
  '/items/kaiwakaleido',
  String(process.env.DIRECTUS_BASE_URL)
);
count.searchParams.append('aggregate[count]', '*');

type Categorys =
  | 'career_and_motivation'
  | 'work_experiences'
  | 'personal_development'
  | 'future_plans'
  | 'personal_values_and_beliefs'
  | 'interests_and_passions'
  | 'memories_and_stories';

const CATEGORY_NAMES: Record<Categorys, string> = {
  career_and_motivation: 'Karriere und Motivation',
  work_experiences: 'Arbeitserfahrungen',
  personal_development: 'Persönliche Entwicklung',
  future_plans: 'Zukunftspläne',
  personal_values_and_beliefs: 'Persönliche Werte und Übungen',
  interests_and_hobbies: 'Interessen und Leidenschaften',
  memories_and_stories: 'Erinnerungen und Geschichten',
};

export default async function Question({ reply }: { reply: FastifyReply }) {
  reply.header('Content-Type', 'application/json');

  const question = new URL(
    '/items/kaiwakaleido',
    String(process.env.DIRECTUS_BASE_URL)
  );

  const countResponse = await fetch(count);

  const allItems = (await countResponse.json()).data[0].count;

  console.log(question.searchParams);

  question.searchParams.append('limit', '1');
  question.searchParams.append(
    'page',
    `${Math.floor(Math.random() * Number(allItems))}`
  );
  question.searchParams.append('fields', 'category,question');

  const questionResponse = await fetch(question);

  const {
    data: [data],
  } = (await questionResponse.json()) as {
    data: { category: Categorys; question: string }[];
  };

  return JSON.stringify({
    question: data.question,
    category: CATEGORY_NAMES[data.category],
  });
}
