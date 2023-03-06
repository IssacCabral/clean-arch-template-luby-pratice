import env from "dotenv";
env.config();

import RegistrationMailer from "../jobs/registrationMail";
import Bull from "bull";

const mailQueue = new Bull(RegistrationMailer.key, {
  redis: { host: process.env.REDIS_HOST, port: Number(process.env.REDIS_PORT) },
});

export { mailQueue };
