import { CreateProductOperator } from "@controller/operations/product/createProduct";
import { ContainerModule, interfaces } from "inversify";

export const operatorModule = new ContainerModule((bind: interfaces.Bind) => {
  bind(CreateProductOperator).to(CreateProductOperator);
});
