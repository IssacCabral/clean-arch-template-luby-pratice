import { CreateUserOperator } from "@controller/operations/user/createUser";
import { InputCreateUser } from "@controller/serializers/user/inputCreateUser";
import { IError } from "@shared/IError";
import { container } from "@shared/ioc/container";
import { Request, Response } from "express";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    try {
      const inputCreateUser = new InputCreateUser({ ...request.body });

      const operator = container.get(CreateUserOperator);

      const createUserResult = await operator.run(inputCreateUser);

      if (createUserResult.isLeft()) {
        throw createUserResult.value;
      }

      return response.json(createUserResult.value);
    } catch (error) {
      console.error(error);
      if (error instanceof IError) {
        return response.status(error.statusCode).json(error.body);
      }

      return response.status(500).json({ messasge: "Internal error" });
    }
  }
}
