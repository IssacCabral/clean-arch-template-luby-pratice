import { InputUserEntity, IUserEntity } from "@domain/entities/userEntity";
import { Either } from "@shared/either";
import { IError } from "@shared/IError";

export interface IInputCreateUserDto extends InputUserEntity {}

export type IOutputCreateUserDto = Either<IError, IUserEntity>;
