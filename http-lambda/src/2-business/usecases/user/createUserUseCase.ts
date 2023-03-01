import { IAbstractUseCase } from "../abstractUseCase";
import {
  IInputCreateUserDto,
  IOutputCreateUserDto,
} from "@business/dto/user/create";
import { inject, injectable } from "inversify";
import {
  IUserRepository,
  IUserRepositoryToken,
} from "@business/repositories/user/iUserRepository";
import {
  IHasherService,
  IHasherServiceToken,
} from "@business/services/hasher/iHasher";
import {
  IUniqueIdentifierService,
  IUniqueIdentifierServiceToken,
} from "@business/services/uniqueIdentifier/iUniqueIdentifier";
import { UserEntity } from "@domain/entities/userEntity";
import { left, right } from "@shared/either";
import { UsersErrors } from "@business/module/errors/users/usersErrors";
import {
  IRoleRepository,
  IRoleRepositoryToken,
} from "@business/repositories/role/iRoleRepository";
import { RolesErrors } from "@business/module/errors/roles/rolesErrors";

@injectable()
export class CreateUserUseCase
  implements IAbstractUseCase<IInputCreateUserDto, IOutputCreateUserDto>
{
  constructor(
    @inject(IUserRepositoryToken) private userRepository: IUserRepository,
    @inject(IRoleRepositoryToken) private roleRepository: IRoleRepository,
    @inject(IHasherServiceToken) private hasherService: IHasherService,
    @inject(IUniqueIdentifierServiceToken)
    private uniqueIdentifierService: IUniqueIdentifierService
  ) {}

  async exec(input: IInputCreateUserDto): Promise<IOutputCreateUserDto> {
    try {
      const userEmailAlreadyInUse = await this.userRepository.findBy(
        "email",
        input.email
      );

      if (userEmailAlreadyInUse) {
        return left(UsersErrors.userEmailAlreadyInUse());
      }

      const role = await this.roleRepository.findBy("profile", "ADMIN");

      if (!role) {
        return left(RolesErrors.roleNotFound());
      }

      const hashPassword = await this.hasherService.create(input.password);

      const createUser = UserEntity.create({
        ...input,
        password: hashPassword,
      });

      const user = {
        ...createUser.value.export(),
        uuid: this.uniqueIdentifierService.create(),
      };

      const userEntity = await this.userRepository.create(user, role.id);
      return right(userEntity);
    } catch (error) {
      return left(UsersErrors.entityCreationError());
    }
  }
}
