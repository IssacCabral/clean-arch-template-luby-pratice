import { Request, Response } from "express";

export class UsersController {
  async handle(request: Request, response: Response) {
    const { name, email, password } = request.body;

    const user = {
      name,
      email,
      password,
    };

    return response.json({ user });
  }
}
