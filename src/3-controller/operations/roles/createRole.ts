import { IOutputCreateRoleDto } from "@business/dto/role/create";
import { CreateRoleUseCase } from "@business/usecases/role/createRoleUseCase";
import { InputCreateRole } from "@controller/serializers/role/inputCreateRole";
import { inject, injectable } from "inversify";
import { AbstractOperator } from "../abstractOperator";

@injectable()
export class CreateRoleOperator extends AbstractOperator<
  InputCreateRole,
  IOutputCreateRoleDto
> {
  constructor(
    @inject(CreateRoleUseCase) private createRoleUseCase: CreateRoleUseCase
  ) {
    super();
  }

  async run(input: InputCreateRole): Promise<IOutputCreateRoleDto> {
    console.log(input);
    this.exec(input);

    const roleResult = await this.createRoleUseCase.exec({
      profile: input.profile,
    });

    return roleResult;
  }
}
