import { IFindAllPaginated } from "@business/dto/role/findAll";
import { RoleEntityKeys } from "@business/dto/role/findBy";
import {
  InputCreateRoleEntity,
  IRoleEntity,
} from "@domain/entities/roleEntity";
import { IWhere } from "../where";

export const IRoleRepositoryToken = Symbol.for("IRoleRepositoryToken");

export interface IInputUpdateRole {
  updateWhere: IWhere<RoleEntityKeys, string | number>;
  newData: IRoleEntity;
}

export interface IInputDeleteRole {
  key: RoleEntityKeys;
  value: string | number;
}

export interface IInputFindAllRole {
  page: number;
  limit: number;
}

export interface IRoleRepository {
  create(input: InputCreateRoleEntity): Promise<IRoleEntity>;
  findBy(
    key: RoleEntityKeys,
    value: IRoleEntity[RoleEntityKeys]
  ): Promise<void | IRoleEntity>;
  findAll(input: IInputFindAllRole): Promise<IFindAllPaginated | void>;
  update(input: IInputUpdateRole): Promise<IRoleEntity | void>;
  delete(input: IInputDeleteRole): Promise<IRoleEntity | void>;
}
