import { Request, Response } from "express";
import { prisma } from "../../prisma/prismaClient";

export class CounterController {
  async handle(request: Request, response: Response) {
    const counterReturn = await prisma.counter.findFirst();
    const counter = ++counterReturn!.count;

    const newCounter = await prisma.counter.update({
      where: {
        id: counterReturn?.id,
      },
      data: {
        count: counter,
      },
    });

    return response.json(newCounter);
  }
}
