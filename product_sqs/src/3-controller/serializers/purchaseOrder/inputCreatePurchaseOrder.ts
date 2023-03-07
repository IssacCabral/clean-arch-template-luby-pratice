import { IInputCreatePurchaseOrderDto } from "@business/dto/purchaseOrder/create";
import { IsEmail, IsString } from "class-validator";
import { AbstractSerializer } from "../abstractSerializer";

export class InputCreatePurchaseOrder extends AbstractSerializer<IInputCreatePurchaseOrderDto> {
  @IsString()
  buyersName: string;

  @IsEmail()
  buyersEmail: string;
}
