import { IError } from "@shared/IError";

export class PurchaseOrderErrors extends IError {
  static purchaseOrderFailedToCreate(): IError {
    const purchaseOrderError = new PurchaseOrderErrors({
      statusCode: 500,
      body: {
        code: "RE-004",
        message: "Purchase order could not be created",
        shortMessage: "purchaseOrdereNotCreated",
      },
    });

    return purchaseOrderError;
  }
}
