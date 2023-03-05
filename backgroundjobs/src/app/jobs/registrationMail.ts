import Mailer from "../lib/mail";
import { configs } from "../../configs/env";

export default {
  key: "RegistrationMail",
  async handle({ data }) {
    const { user } = data;

    await Mailer.sendMail({
      from: `Qeue test <${configs.mailFrom}>`,
      to: `${user.name} <${user.email}>`,
      subject: "Cadastro de usuário",
      html: `Olá ${name}, bem-vindo ao servidor :D`,
    });
  },
};
