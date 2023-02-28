import { CreateRoleOperator } from "@controller/operations/roles/createRole";
import { ContainerModule, interfaces } from "inversify";

export const operatorModule = new ContainerModule((bind: interfaces.Bind) => {
  bind(CreateRoleOperator).to(CreateRoleOperator);
});
