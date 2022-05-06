import nodemailer from 'nodemailer';

import { MailAdapter, sendMailData } from '../mail-adapter';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'e0216606fb39c0',
    pass: 'f8bc303764b9f1',
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: sendMailData) {
    await transport.sendMail({
      from: 'Equipe feedget <oi@feedget.com>',
      to: 'Yuri Alves <yuripiresalves@gmail.com>',
      subject,
      html: body,
    });
  }
}
