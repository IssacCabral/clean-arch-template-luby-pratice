import { IUserRepository } from "@business/repositories/user/iUserRepository";
import { IUserEntity } from "@domain/entities/userEntity";
import { prisma } from "@framework/prisma/prismaClient";
import { injectable } from "inversify";

@injectable()
export class UserRepository implements IUserRepository {
  async create(
    inputUserEntity: Omit<IUserEntity, "id" | "role_id">,
    role_id: number
  ): Promise<IUserEntity> {
    const user = await prisma.user.create({
      data: {
        ...inputUserEntity,
        Role: {
          connect: {
            id: role_id,
          },
        },
      },
      include: {
        Role: true,
      },
    });

    return user;
  }

  async findBy(
    type: "email" | "full_name" | "id" | "role_id" | "uuid",
    key: string | number
  ): Promise<void | IUserEntity> {
    return await prisma.user.findUnique({ where: { [type]: key } });
  }
}
