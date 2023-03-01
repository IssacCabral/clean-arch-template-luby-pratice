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

@injectable()
export class RoleRepository implements IRoleRepository {
  create(input: InputCreateRoleEntity): Promise<IRoleEntity> {
    throw new Error("Method not implemented.");
  }
  findBy(
    key: "id" | "profile",
    value: string | number
  ): Promise<void | IRoleEntity> {
    throw new Error("Method not implemented.");
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
