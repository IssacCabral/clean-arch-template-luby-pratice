import { IProductRepository } from "@business/repositories/product/iProductRepository";
import {
  InputCreateProductEntity,
  IProductEntity,
} from "@domain/entities/productEntity";

export class ProductRepository implements IProductRepository {
  create(input: InputCreateProductEntity): Promise<IProductEntity> {
    throw new Error("Method not implemented.");
  }
  findBy(key: "name" | "id", value: string): Promise<void | IProductEntity> {
    throw new Error("Method not implemented.");
  }
}
