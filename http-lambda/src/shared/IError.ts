interface IErrorBody {
  code: string;
  message: string;
  shortMessage: string;
  // indica que pode ter além de code, message e shortMessage,
  // qualquer outra propriedade assim o ts n reclama
  [index: string]: unknown;
}

export class IError {
  statusCode: number;
  body: IErrorBody;

  constructor({ statusCode, body }: { statusCode: number; body: IErrorBody }) {
    this.statusCode = statusCode;
    this.body = body;
  }
}
