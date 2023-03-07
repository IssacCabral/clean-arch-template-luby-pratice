import { SQSEvent } from "aws-lambda";

const processEvent = (event: SQSEvent) => {
  for (const record of event.Records) {
    const body = JSON.parse(record.body ?? "{}");
    console.log(body);
  }
};

export const handler = processEvent;
