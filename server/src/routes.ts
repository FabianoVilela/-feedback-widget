import express from 'express';
import { NodmailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-usecase';

export const routes = express.Router();

routes.post('/feedback', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
  const nodmailerMailAdapter = new NodmailerMailAdapter();

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbacksRepository, nodmailerMailAdapter)

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot
  });

  return res.status(201).send();
})