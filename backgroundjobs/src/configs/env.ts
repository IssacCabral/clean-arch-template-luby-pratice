import env from "dotenv";

env.config();

export const configs = {
  mailHost: process.env.SMTP_HOST,
  mailPort: process.env.SMTP_PORT,
  mailUserName: process.env.SMTP_USERNAME,
  mailPassword: process.env.SMTP_PASSWORD,
  mailFrom: process.env.SMTP_FROM,
};
