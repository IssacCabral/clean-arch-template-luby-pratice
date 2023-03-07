import { IOutputCreateProductDto } from "@business/dto/product/create";
import { CreateProductUseCase } from "@business/useCases/product/createProductUseCase";
import { InputCreateProduct } from "@controller/serializers/product/inputCreateProduct";
import { inject, injectable } from "inversify";
import { AbstractOperator } from "../abstractOperator";

@injectable()
export class CreateProductOperator extends AbstractOperator<
  InputCreateProduct,
  IOutputCreateProductDto
> {
  constructor(
    @inject(CreateProductUseCase)
    private readonly createProductUseCase: CreateProductUseCase
  ) {
    super();
  }

  async run(input: InputCreateProduct): Promise<IOutputCreateProductDto> {
    this.exec(input);

    const productResult = await this.createProductUseCase.exec({
      name: input.name,
      quantity: input.quantity,
    });

    return productResult;
  }
}
