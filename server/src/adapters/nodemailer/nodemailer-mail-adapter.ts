import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

import { MailAdapter, SendMailData } from "../mail-adapter";

dotenv.config()

const transport = nodemailer.createTransport({
  host: process.env.MAIL_SMTP_SERVER,
  port: process.env.MAIL_PORT ? Number(process.env.MAIL_PORT) : undefined,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

export class NodmailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe <ola@feedbacks.io>',
      to: 'Fabiano Vilela <fabiano.vilela@gmail.com>',
      subject,
      html: body
    });
  };
}