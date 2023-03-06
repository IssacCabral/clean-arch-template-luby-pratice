import { IProductEntity } from "@domain/entities/productEntity";
import { Either } from "@shared/either";
import { IError } from "@shared/IError";

export interface IInputCreateProductDto {
  name: string;
  quantity: number;
}

export type IOutputCreateProductDto = Either<IError, IProductEntity>;
