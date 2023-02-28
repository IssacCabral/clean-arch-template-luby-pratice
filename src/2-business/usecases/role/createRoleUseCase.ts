import {
  IInputCreateRoleDto,
  IOutputCreateRoleDto,
} from "@business/dto/role/create";
import { IAbstractUseCase } from "../abstractUseCase";
import { injectable, inject } from "inversify";
import {
  IRoleRepository,
  IRoleRepositoryToken,
} from "@business/repositories/role/iRoleRepository";
import { RoleEntity } from "@domain/entities/roleEntity";
import { left, right } from "@shared/either";
import { RolesErrors } from "@business/module/errors/roles/rolesErrors";

@injectable()
export class CreateRoleUseCase
  implements IAbstractUseCase<IInputCreateRoleDto, IOutputCreateRoleDto>
{
  constructor(
    @inject(IRoleRepositoryToken) private roleRepository: IRoleRepository
  ) {}

  async exec(input: IInputCreateRoleDto): Promise<IOutputCreateRoleDto> {
    const roleEntity = RoleEntity.create(input);
    try {
      const roleResult = await this.roleRepository.create(
        roleEntity.value.export()
      );

      return right(roleResult);
    } catch (error) {
      return left(RolesErrors.roleFailedToCreate());
    }
  }
}
