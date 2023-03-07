import { Either } from "@shared/either";
import { IError } from "@shared/IError";

export interface IInputCreatePurchaseOrderDto {
  buyersName: string;
  buyersEmail: string;
}

export type IOutputCreatePurchaseOrderDto = Either<IError, void>;
