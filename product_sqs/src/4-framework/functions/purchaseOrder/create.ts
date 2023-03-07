import "../../ioc/inversify.config";
import { CreatePurchaseOrderOperator } from "@controller/operations/purchaseOrder/createPurchaseOrder";
import { InputCreatePurchaseOrder } from "@controller/serializers/purchaseOrder/inputCreatePurchaseOrder";
import { httpResponse } from "@framework/utility/httpResponse";
import { sendSqsMessage } from "@framework/utility/sendSqsMessage";
import { IError } from "@shared/IError";
import { container } from "@shared/ioc/container";
import { APIGatewayProxyEvent, Context } from "aws-lambda";

const createPurchaseOrder = async (
  event: APIGatewayProxyEvent,
  context: Context
) => {
  try {
    const inputCreatePurchaseOrder = new InputCreatePurchaseOrder({
      ...JSON.parse(event.body),
    });

    const operator = container.get(CreatePurchaseOrderOperator);

    await operator.run(inputCreatePurchaseOrder);

    await sendSqsMessage(
      "purchase-event",
      JSON.stringify(inputCreatePurchaseOrder),
      context?.invokedFunctionArn?.split(":")[4]
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "pedido de compra enviado..." }),
    };
  } catch (error) {
    console.error(error);

    if (error instanceof IError) {
      return httpResponse(error.statusCode, error.body);
    }

    return httpResponse(
      "internalError",
      "Internal server error in create purchase order"
    );
  }
};

export const handler = createPurchaseOrder;
