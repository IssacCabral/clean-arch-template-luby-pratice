import { Right, right } from "../../shared/either";
import { AbstractEntity } from "../abstractEntity";
import { ITimestamps } from "../timestamps";
import { IRoleEntity } from "./roleEntity";

export interface IUserEntityRelations {
  role: IRoleEntity;
}

export interface IUserEntity
  extends ITimestamps,
    Partial<IUserEntityRelations> {
  id: number;
  uuid: string;
  role_id: number;
  full_name: string;
  email: string;
  password: string;
}

export type InputUserEntity = Pick<
  IUserEntity,
  "email" | "full_name" | "password"
>;

export class UserEntity extends AbstractEntity<IUserEntity> {
  static create(props: InputUserEntity): Right<void, UserEntity> {
    const currentDate = new Date();

    const user = new UserEntity({
      ...props,
      id: undefined,
      role_id: undefined,
      uuid: undefined,
      created_at: currentDate,
      updated_at: currentDate,
    });

    return right(user);
  }
}
