import { FastifyReply } from 'fastify';
import data from './questions.json';

export default function Question({ reply }: { reply: FastifyReply }) {
  reply.header('Content-Type', 'application/json');

  const question = data[Math.floor(Math.random() * data.length)];

  return JSON.stringify(question);
}
