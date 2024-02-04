import { FastifyReply } from 'fastify';
import database from './database.json';

export default async function Question({ reply }: { reply: FastifyReply }) {
  reply.header('Content-Type', 'application/json');

  return JSON.stringify({
    questions: database.length,
  });
}
