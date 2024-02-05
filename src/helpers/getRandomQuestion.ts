import database from './../database.json';

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
  interests_and_passions: 'Interessen und Leidenschaften',
  memories_and_stories: 'Erinnerungen und Geschichten',
};

const getRandomQuestion = () => {
  const data = database[Math.floor(Math.random() * database.length)];

  return {
    question: data.question,
    category: CATEGORY_NAMES[data.category],
  };
};

export default getRandomQuestion;
