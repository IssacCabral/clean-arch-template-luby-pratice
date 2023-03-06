import { mailerTransporter } from "../lib/mail";

export default {
  key: "RegistrationMail",
  async handle(redis: any) {
    const { data } = redis;

    await mailerTransporter.sendMail({
      from: `Qeue test <${process.env.SMTP_FROM}>`,
      to: `${data.name} <${data.email}>`,
      subject: "Cadastro de usuário",
      html: `Olá ${data.name}, bem-vindo ao servidor :D`,
    });

    console.log(`Email enviado para ${data.name}`);
  },
};
