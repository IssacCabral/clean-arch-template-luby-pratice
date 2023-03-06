import { Request, Response } from "express";
import { mailQueue } from "../lib/Queue";

export class UsersController {
  async handle(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const user = {
      name,
      email,
      password,
    };

    await mailQueue.add(user);

    return response.json({ user });
  }
}
