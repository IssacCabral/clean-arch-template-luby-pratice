import { CreateRoleOperator } from "@controller/operations/roles/createRole";
import { CreateUserOperator } from "@controller/operations/user/createUser";
import { ContainerModule, interfaces } from "inversify";

export const operatorModule = new ContainerModule((bind: interfaces.Bind) => {
  bind(CreateRoleOperator).to(CreateRoleOperator);
  bind(CreateUserOperator).to(CreateUserOperator);
});
