import { IUserRepository } from "@business/repositories/user/iUserRepository";
import { IUserEntity } from "@domain/entities/userEntity";
import { injectable } from "inversify";

@injectable()
export class UserRepository implements IUserRepository {
  create(
    inputUserEntity: Omit<IUserEntity, "id" | "role_id">,
    role_id: number
  ): Promise<IUserEntity> {
    throw new Error("Method not implemented.");
  }
  findBy(
    type: "id" | "uuid" | "role_id" | "full_name" | "email",
    key: string | number
  ): Promise<void | IUserEntity> {
    throw new Error("Method not implemented.");
  }
}
