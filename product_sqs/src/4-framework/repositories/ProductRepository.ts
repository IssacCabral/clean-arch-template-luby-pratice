import { IProductRepository } from "@business/repositories/product/iProductRepository";
import {
  InputCreateProductEntity,
  IProductEntity,
} from "@domain/entities/productEntity";
import { DynamoDB } from "aws-sdk";
import crypto from "crypto";
import { injectable } from "inversify";

@injectable()
export class ProductRepository implements IProductRepository {
  async create(input: InputCreateProductEntity): Promise<IProductEntity> {
    const dynamoDb = new DynamoDB.DocumentClient();
    const currentDate = new Date();

    const params = {
      TableName: "ProductsTable",
      Item: {
        ...input,
        id: crypto.randomUUID(),
        created_at: currentDate.toISOString(),
        updated_at: currentDate.toISOString(),
      },
    };

    await dynamoDb.put(params).promise();

    const productTuReturn = {
      ...params.Item,
      created_at: currentDate,
      updated_at: currentDate,
    };

    return productTuReturn;
  }

  async findBy(
    key: "name" | "id",
    value: string
  ): Promise<void | IProductEntity> {
    const dynamoDbSvc = new DynamoDB.DocumentClient();
    const product = await dynamoDbSvc
      .get({
        TableName: "ProductsTable",
        Key: {
          [key]: value,
        },
      })
      .promise();

    return product.Item as IProductEntity;
  }
}
