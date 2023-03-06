import { ProductEntityKeys } from "@business/dto/product/findBy";
import {
  InputCreateProductEntity,
  IProductEntity,
} from "@domain/entities/productEntity";

export const IProductRepositoryToken = Symbol.for("IProductRepositoryToken");

export interface IProductRepository {
  create(input: InputCreateProductEntity): Promise<IProductEntity>;
  findBy(
    key: ProductEntityKeys,
    value: IProductEntity[ProductEntityKeys]
  ): Promise<void | IProductEntity>;
}
