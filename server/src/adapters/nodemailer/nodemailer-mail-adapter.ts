import nodemailer from 'nodemailer';

import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "d48f94e7f86d26",
    pass: "aaccc7a74d0f74"
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