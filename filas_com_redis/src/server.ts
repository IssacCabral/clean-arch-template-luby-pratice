import express, { json } from "express";
import router from "./app/routes";

const app = express();

app.use(json());
app.use(router);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running on port 3000");
});
