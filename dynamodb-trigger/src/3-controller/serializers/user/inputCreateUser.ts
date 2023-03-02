import { IInputCreateUserDto } from "@business/dto/user/create";
import {
  IsEmail,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from "class-validator";
import { AbstractSerializer } from "../abstractSerializer";

export class InputCreateUser extends AbstractSerializer<IInputCreateUserDto> {
  @IsEmail()
  email: string;

  @MinLength(8)
  @MaxLength(50)
  full_name: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: "password is too weak",
  })
  password: string;
}
