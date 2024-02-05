import { FastifyReply } from 'fastify';
import database from './../../database.json';

export default async function Question({ reply }: { reply: FastifyReply }) {
  reply.header('Content-Type', 'application/json');

  const questionsPerCategory = database.reduce((acc, data) => {
    acc[data.category] = (acc[data.category] || 0) + 1;
    return acc;
  }, {});

  return JSON.stringify({
    all: database.length,
    ...questionsPerCategory,
  });
}
