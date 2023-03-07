import { IInputCreateProductDto } from "@business/dto/product/create";
import { IsNumber, IsString } from "class-validator";
import { AbstractSerializer } from "../abstractSerializer";

export class InputCreateProduct extends AbstractSerializer<IInputCreateProductDto> {
  @IsString()
  name: string;

  @IsNumber()
  quantity: number;
}
