import {
  IInputCreateUserDto,
  IOutputCreateUserDto,
} from "@business/dto/user/create";
import { CreateUserUseCase } from "@business/usecases/user/createUserUseCase";
import { InputCreateUser } from "@controller/serializers/user/inputCreateUser";
import { inject, injectable } from "inversify";
import { AbstractOperator } from "../abstractOperator";

@injectable()
export class CreateUserOperator extends AbstractOperator<
  IInputCreateUserDto,
  IOutputCreateUserDto
> {
  constructor(
    @inject(CreateUserUseCase) private createUserUseCase: CreateUserUseCase
  ) {
    super();
  }

  async run(input: InputCreateUser): Promise<IOutputCreateUserDto> {
    this.exec(input);

    const userResult = await this.createUserUseCase.exec({
      ...input,
    });

    return userResult;
  }
}
