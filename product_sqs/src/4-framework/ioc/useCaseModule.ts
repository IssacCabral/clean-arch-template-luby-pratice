import { CreateProductUseCase } from "@business/useCases/product/createProductUseCase";
import { ContainerModule, interfaces } from "inversify";

export const useCaseModule = new ContainerModule((bind: interfaces.Bind) => {
  bind(CreateProductUseCase).to(CreateProductUseCase);
});
