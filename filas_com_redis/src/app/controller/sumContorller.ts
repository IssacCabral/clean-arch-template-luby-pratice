import { Request, Response } from "express";

export class SumController {
  async handle(request: Request, response: Response) {
    return response.status(200).json(request.body);
  }
}
