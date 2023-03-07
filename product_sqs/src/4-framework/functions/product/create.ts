import { CreateProductOperator } from "@controller/operations/product/createProduct";
import { InputCreateProduct } from "@controller/serializers/product/inputCreateProduct";
import { httpResponse } from "@framework/utility/httpResponse";
import { IError } from "@shared/IError";
import { container } from "@shared/ioc/container";
import { APIGatewayEvent } from "aws-lambda";

const createProduct = async (event: APIGatewayEvent) => {
  try {
    const inputCreateProduct = new InputCreateProduct({
      ...JSON.parse(event.body),
    });

    const operator = container.get(CreateProductOperator);

    const productResult = await operator.run(inputCreateProduct);

    if (productResult.isLeft()) {
      throw productResult.value;
    }
  } catch (error) {
    console.error(error);

    if (error instanceof IError) {
      return httpResponse(error.statusCode, error.body);
    }

    return httpResponse(
      "internalError",
      "Internal server error in product creation"
    );
  }
};

export const handler = createProduct;
