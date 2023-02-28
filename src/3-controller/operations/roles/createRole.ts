import { IOutputCreateRoleDto } from "@business/dto/role/create";
import { RolesErrors } from "@business/module/errors/roles/rolesErrors";
import { CreateRoleUseCase } from "@business/usecases/role/createRoleUseCase";
import { FindRoleByUseCase } from "@business/usecases/role/findRoleByUseCase";
import { InputCreateRole } from "@controller/serializers/role/inputCreateRole";
import { left } from "@shared/either";
import { inject, injectable } from "inversify";
import { AbstractOperator } from "../abstractOperator";

@injectable()
export class CreateRoleOperator extends AbstractOperator<
  InputCreateRole,
  IOutputCreateRoleDto
> {
  constructor(
    @inject(CreateRoleUseCase) private createRoleUseCase: CreateRoleUseCase,
    @inject(FindRoleByUseCase) private findRoleByUseCase: FindRoleByUseCase
  ) {
    super();
  }

  async run(input: InputCreateRole): Promise<IOutputCreateRoleDto> {
    this.exec(input);

    const isAlreadyExistRole = await this.findRoleByUseCase.exec({
      column: "profile",
      value: input.profile,
    });

    if (isAlreadyExistRole.isRight()) {
      return left(RolesErrors.roleAlreadyExists());
    }

    const roleResult = await this.createRoleUseCase.exec({
      profile: input.profile,
    });

    return roleResult;
  }
}
