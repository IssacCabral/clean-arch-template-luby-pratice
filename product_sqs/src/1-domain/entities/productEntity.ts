import { AbstractEntity } from "@domain/abstractEntity";
import { ITimestamps } from "@domain/timestamps";
import { right, Right } from "@shared/either";

export interface IProductEntity extends ITimestamps {
  id: string;
  name: string;
  quantity: number;
}

export type InputCreateProductEntity = Pick<
  IProductEntity,
  "name" | "quantity"
>;

export class ProductEntity extends AbstractEntity<IProductEntity> {
  static create(input: InputCreateProductEntity): Right<void, ProductEntity> {
    const product = new ProductEntity({
      ...input,
      id: undefined,
      created_at: new Date(),
      updated_at: new Date(),
    });

    return right(product);
  }
}
