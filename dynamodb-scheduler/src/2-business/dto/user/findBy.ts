import { UserEntityKeys } from "@business/repositories/user/iUserRepository";
import { IUserEntity } from "@domain/entities/userEntity";
import { Either } from "@shared/either";
import { IError } from "@shared/IError";

export interface IInputFindUserByDto {
  key: UserEntityKeys;
  value: number | string;
}

export type IOutputFindUserByDto = Either<IError, IUserEntity>;
