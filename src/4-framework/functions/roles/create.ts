import "../../ioc/inversify.config";
import { CreateRoleOperator } from "@controller/operations/roles/createRole";
import { InputCreateRole } from "@controller/serializers/role/inputCreateRole";
import { httpResponse } from "@framework/utility/httpResponse";
import { IError } from "@shared/IError";
import { container } from "@shared/ioc/container";
import { APIGatewayEvent, Context } from "aws-lambda";

const createRole = async (event: APIGatewayEvent, _context: Context) => {
  try {
    const inputCreateRole = new InputCreateRole({
      profile: JSON.parse(event.body).profile,
    });

    const operator = container.get(CreateRoleOperator);

    const roleResult = await operator.run(inputCreateRole);

    if (roleResult.isLeft()) {
      throw roleResult.value;
    }

    return httpResponse("created", roleResult.value);
  } catch (error) {
    console.error(error);
    if (error instanceof IError) {
      return httpResponse(error.statusCode, error.body);
    }

    return httpResponse(
      "internalError",
      "Internal server error in role create"
    );
  }
};

export const handler = createRole;
