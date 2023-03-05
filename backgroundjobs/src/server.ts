import express from "express";
import { UsersController } from "./app/controllers/usersController";

const app = express();

app.use(express.json());

app.post("/users", new UsersController().handle);

app.listen(3000, () => {
  console.log("Server running on port 3000...");
});
