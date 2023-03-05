import nodemailer from "nodemailer";
import { configs } from "../../configs/env";

const mailerTransporter = nodemailer.createTransport({
  host: configs.mailHost,
  port: Number(configs.mailPort),
  secure: false,
  auth: {
    user: configs.mailUserName,
    pass: configs.mailPassword,
  },
});

export default mailerTransporter;
