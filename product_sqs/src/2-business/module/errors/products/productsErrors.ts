import { IError } from "@shared/IError";

export class ProductsErrors extends IError {
  static productNotFound(): IError {
    const productError = new ProductsErrors({
      statusCode: 404,
      body: {
        code: "RE-001",
        message: "The product acess that you were searching was not found",
        shortMessage: "productNotFound",
      },
    });

    return productError;
  }

  static productFailedToUpdate(): IError {
    const productError = new ProductsErrors({
      statusCode: 500,
      body: {
        code: "RE-003",
        message: "product could not be updated",
        shortMessage: "productNotUpdated",
      },
    });

    return productError;
  }

  static productFailedToCreate(): IError {
    const productError = new ProductsErrors({
      statusCode: 500,
      body: {
        code: "RE-004",
        message: "Product could not be created",
        shortMessage: "productNotCreated",
      },
    });

    return productError;
  }

  static productAlreadyExists(): IError {
    const productError = new ProductsErrors({
      statusCode: 400,
      body: {
        code: "RE-005",
        message: "product already exists",
        shortMessage: "productAlreadyExists",
      },
    });

    return productError;
  }
}
