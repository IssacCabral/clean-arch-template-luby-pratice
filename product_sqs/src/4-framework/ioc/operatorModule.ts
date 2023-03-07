import { CreateProductOperator } from "@controller/operations/product/createProduct";
import { CreatePurchaseOrderOperator } from "@controller/operations/purchaseOrder/createPurchaseOrder";
import { ContainerModule, interfaces } from "inversify";

export const operatorModule = new ContainerModule((bind: interfaces.Bind) => {
  bind(CreateProductOperator).to(CreateProductOperator);
  bind(CreatePurchaseOrderOperator).to(CreatePurchaseOrderOperator);
});
