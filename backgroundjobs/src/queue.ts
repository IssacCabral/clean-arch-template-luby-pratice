import { mailQueue } from "./app/lib/Queue";
import registrationMail from "./app/jobs/registrationMail";

(async () => {
  await mailQueue.process(registrationMail.handle);
})();
