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
import { prisma } from "@framework/prisma/prismaClient";

@injectable()
export class RoleRepository implements IRoleRepository {
  async create(input: InputCreateRoleEntity): Promise<IRoleEntity> {
    const role = await prisma.role.create({
      data: input,
    });
    return role;
  }

  async findBy(
    key: "profile" | "id",
    value: string | number
  ): Promise<void | IRoleEntity> {
    return await prisma.role.findUnique({ where: { [key]: value } });
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
