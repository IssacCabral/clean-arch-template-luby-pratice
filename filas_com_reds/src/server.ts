import env from "dotenv";
env.config();
import express, { json } from "express";
import { router } from "./router/router";

const app = express();

app.use(json());
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`server running on port ${process.env.PORT}`);
});
