import { SQS } from "aws-sdk";

export async function sendSqsMessage(
  queueName: string,
  body: string,
  aws_account_id?: string
) {
  console.log(aws_account_id);

  const QueueUrl = `${`https://sqs.${process.env.AWS_REGION}.amazonaws.com`}/${aws_account_id}/${queueName}`;

  const sqs = new SQS();

  await sqs
    .sendMessage({
      QueueUrl,
      MessageBody: body,
    })
    .promise();
}
