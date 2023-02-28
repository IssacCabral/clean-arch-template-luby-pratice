import { CreateRoleUseCase } from "@business/usecases/role/createRoleUseCase";
import { FindRoleByUseCase } from "@business/usecases/role/findRoleByUseCase";
import { ContainerModule, interfaces } from "inversify";

export const useCaseModule = new ContainerModule((bind: interfaces.Bind) => {
  bind(CreateRoleUseCase).to(CreateRoleUseCase);
  bind(FindRoleByUseCase).to(FindRoleByUseCase);
});
