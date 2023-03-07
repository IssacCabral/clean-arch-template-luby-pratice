import { IOutputCreatePurchaseOrderDto } from "@business/dto/purchaseOrder/create";
import { InputCreatePurchaseOrder } from "@controller/serializers/purchaseOrder/inputCreatePurchaseOrder";
import { injectable } from "inversify";
import { AbstractOperator } from "../abstractOperator";

@injectable()
export class CreatePurchaseOrderOperator extends AbstractOperator<
  InputCreatePurchaseOrder,
  IOutputCreatePurchaseOrderDto
> {
  async run(
    input: InputCreatePurchaseOrder
  ): Promise<IOutputCreatePurchaseOrderDto> {
    this.exec(input);

    return;
  }
}
