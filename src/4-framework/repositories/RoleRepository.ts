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
  roles: IRoleEntity[] = [];

  async create(input: InputCreateRoleEntity): Promise<IRoleEntity> {
    const role: IRoleEntity = {
      ...input,
      id: Math.random(),
      created_at: new Date(),
      updated_at: new Date(),
    };
    this.roles.push(role);
    return role;
  }

  async findBy(
    key: "profile" | "id",
    value: string | number
  ): Promise<void | IRoleEntity> {}

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
