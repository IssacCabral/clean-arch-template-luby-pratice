import { CreateRoleOperator } from "@controller/operations/roles/createRole";
import { InputCreateRole } from "@controller/serializers/role/inputCreateRole";
import { IError } from "@shared/IError";
import { container } from "@shared/ioc/container";
import { Request, Response } from "express";

export class CreateRoleController {
  async handle(request: Request, response: Response) {
    try {
      const inputCreateRole = new InputCreateRole({
        profile: request.body.profile,
      });

      const operator = container.get(CreateRoleOperator);

      const roleResult = await operator.run(inputCreateRole);

      if (roleResult.isLeft()) {
        throw roleResult.value;
      }

      return response.json(roleResult.value);
    } catch (error) {
      console.error(error);
      if (error instanceof IError) {
        return response.status(error.statusCode).json(error.body);
      }

      return response.status(500).json({ messasge: "Internal error" });
    }
  }
}
