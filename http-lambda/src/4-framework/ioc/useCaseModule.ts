import { CreateRoleUseCase } from "@business/usecases/role/createRoleUseCase";
import { FindRoleByUseCase } from "@business/usecases/role/findRoleByUseCase";
import { CreateUserUseCase } from "@business/usecases/user/createUserUseCase";
import { ContainerModule, interfaces } from "inversify";

export const useCaseModule = new ContainerModule((bind: interfaces.Bind) => {
  bind(CreateRoleUseCase).to(CreateRoleUseCase);
  bind(FindRoleByUseCase).to(FindRoleByUseCase);
  bind(CreateUserUseCase).to(CreateUserUseCase);
});
