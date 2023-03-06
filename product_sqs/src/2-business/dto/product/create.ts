export interface IInputCreateProductDto {
  profile: string;
}

export type IOutputCreateProductDto = Either<IError, IRoleEntity>;
