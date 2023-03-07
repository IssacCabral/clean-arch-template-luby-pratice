import { sendSqsMessage } from "@framework/utility/sendSqsMessage";
import { APIGatewayProxyEvent, Context } from "aws-lambda";

const createPurchaseOrder = async (
  event: APIGatewayProxyEvent,
  context: Context
) => {
  const body = JSON.parse(event.body ?? "{}");
  const { buyersName, buyersEmail } = body;

  await sendSqsMessage(
    "purchase-event",
    JSON.stringify({ buyersEmail, buyersName }),
    context?.invokedFunctionArn?.split(":")[4]
  );

  console.log("Cheguei aqui");
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "pedido de compra enviado..." }),
  };
};

export const handler = createPurchaseOrder;
