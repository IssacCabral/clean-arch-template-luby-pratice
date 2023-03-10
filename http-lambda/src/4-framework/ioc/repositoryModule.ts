import {
  IRoleRepository,
  IRoleRepositoryToken,
} from "@business/repositories/role/iRoleRepository";
import {
  IUserRepository,
  IUserRepositoryToken,
} from "@business/repositories/user/iUserRepository";
import { RoleRepository } from "@framework/repositories/RoleRepository";
import { UserRepository } from "@framework/repositories/UserRepository";
import { ContainerModule, interfaces } from "inversify";

export const repositoryModule = new ContainerModule((bind: interfaces.Bind) => {
  bind<IRoleRepository>(IRoleRepositoryToken).to(RoleRepository);
  bind<IUserRepository>(IUserRepositoryToken).to(UserRepository);
});
