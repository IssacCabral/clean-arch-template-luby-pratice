import { IFindAllPaginated } from "@business/dto/role/findAll";
import {
  IInputDeleteRole,
  IInputFindAllRole,
  IInputUpdateRole,
  IRoleRepository,
} from "@business/repositories/role/iRoleRepository";
import {
  InputCreateRoleEntity,
  IRoleEntity,
} from "@domain/entities/roleEntity";
import { injectable } from "inversify";
import { DynamoDB } from "aws-sdk";
import fs from "fs";
import ids from "../../../ids.json";

@injectable()
export class RoleRepository implements IRoleRepository {
  async create(input: InputCreateRoleEntity): Promise<IRoleEntity> {
    const dynamoDbSvc = new DynamoDB.DocumentClient();
    const currentDate = new Date();
    const roleId = ++ids.roleId;

    const params = {
      TableName: "RolesTable",
      Item: {
        ...input,
        id: roleId,
        created_at: currentDate.toISOString(),
        updated_at: currentDate.toISOString(),
      },
    };

    const roleToReturn = {
      ...params.Item,
      created_at: currentDate,
      updated_at: currentDate,
    };

    await dynamoDbSvc.put(params).promise();

    const idData = JSON.stringify({ ...ids, roleId });
    fs.writeFile("../../../ids.json", idData, () => {});

    return roleToReturn;
  }

  async findBy(
    key: "id" | "profile",
    value: string | number
  ): Promise<void | IRoleEntity> {
    const dynamoDbSvc = new DynamoDB.DocumentClient();
    const role = await dynamoDbSvc
      .get({
        TableName: "RolesTable",
        Key: {
          [key]: value,
        },
      })
      .promise();

    return role.Item as IRoleEntity;
  }
  findAll(input: IInputFindAllRole): Promise<void | IFindAllPaginated> {
    throw new Error("Method not implemented.");
  }
  update(input: IInputUpdateRole): Promise<void | IRoleEntity> {
    throw new Error("Method not implemented.");
  }
  delete(input: IInputDeleteRole): Promise<void | IRoleEntity> {
    throw new Error("Method not implemented.");
  }
}
