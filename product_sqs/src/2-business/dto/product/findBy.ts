import { IProductEntity } from "@domain/entities/productEntity";
import { Either } from "@shared/either";

export type ProductEntityKeys = keyof Pick<IProductEntity, "id" | "name">;

export interface IInputFindProductBy {
  column: ProductEntityKeys;
  value: IProductEntity[ProductEntityKeys];
}

export type IOutputFindProductBy = Either<void, IProductEntity>;
