import "../../ioc/inversify.config";
import { CreateUserOperator } from "@controller/operations/user/createUser";
import { InputCreateUser } from "@controller/serializers/user/inputCreateUser";
import { httpResponse } from "@framework/utility/httpResponse";
import { IError } from "@shared/IError";
import { container } from "@shared/ioc/container";
import { APIGatewayEvent } from "aws-lambda";

const createUser = async (event: APIGatewayEvent) => {
  try {
    const inputCreateUser = new InputCreateUser({
      ...JSON.parse(event.body),
    });

    const operator = container.get(CreateUserOperator);

    const userResult = await operator.run(inputCreateUser);

    if (userResult.isLeft()) {
      throw userResult.value;
    }

    return httpResponse("created", userResult.value);
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

export const handler = createUser;
