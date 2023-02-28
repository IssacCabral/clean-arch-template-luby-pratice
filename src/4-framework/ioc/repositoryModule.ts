import {
  IRoleRepository,
  IRoleRepositoryToken,
} from "@business/repositories/role/iRoleRepository";
import { RoleRepository } from "@framework/repositories/RoleRepository";
import { ContainerModule, interfaces } from "inversify";

export const repositoryModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<IRoleRepository>(IRoleRepositoryToken).to(RoleRepository);
});
