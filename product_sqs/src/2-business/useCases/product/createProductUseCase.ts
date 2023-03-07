import {
  IInputCreateProductDto,
  IOutputCreateProductDto,
} from "@business/dto/product/create";
import { ProductsErrors } from "@business/module/errors/products/productsErrors";
import {
  IProductRepository,
  IProductRepositoryToken,
} from "@business/repositories/product/iProductRepository";
import { ProductEntity } from "@domain/entities/productEntity";
import { left, right } from "@shared/either";
import { inject, injectable } from "inversify";
import { IAbstractUseCase } from "../abstractUseCase";

@injectable()
export class CreateProductUseCase
  implements IAbstractUseCase<IInputCreateProductDto, IOutputCreateProductDto>
{
  constructor(
    @inject(IProductRepositoryToken)
    private readonly productRepository: IProductRepository
  ) {}

  async exec(props: IInputCreateProductDto): Promise<IOutputCreateProductDto> {
    try {
      // const productAlreadyExists = await this.productRepository.findBy(
      //   "name",
      //   props.name
      // );

      // if (productAlreadyExists) {
      //   return left(ProductsErrors.productAlreadyExists());
      // }

      const productEntity = ProductEntity.create(props);

      const productResult = await this.productRepository.create(
        productEntity.value.export()
      );

      return right(productResult);
    } catch (error) {
      console.error(error);
      return left(ProductsErrors.productFailedToCreate());
    }
  }
}
