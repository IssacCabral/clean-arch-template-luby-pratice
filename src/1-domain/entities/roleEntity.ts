import { AbstractEntity } from "../abstractEntity";
import { ITimestamps } from "../timestamps";
import { Right, right } from "../../shared/either";

export interface IRoleEntity extends ITimestamps {
  id: number;
  profile: string;
}

export type InputCreateRoleEntity = Pick<IRoleEntity, "profile">;

export class RoleEntity extends AbstractEntity<IRoleEntity> {
  static create(input: InputCreateRoleEntity): Right<void, RoleEntity> {
    const currentDate = new Date();

    const role = new RoleEntity({
      ...input,
      id: undefined,
      created_at: currentDate,
      updated_at: currentDate,
    });

    return right(role);
  }

  static update(input: Partial<IRoleEntity>): Right<void, RoleEntity> {
    const role = new RoleEntity({
      ...input,
      updated_at: new Date(),
    } as IRoleEntity);
    return right(role);
  }
}
