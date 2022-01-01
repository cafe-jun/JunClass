import { IsEmail, IsString, IsNumber } from 'class-validator';

export class SignInRequestDto {
  @IsEmail()
  public email: string;

  @IsNumber()
  public age: number;
  @IsString()
  public password: string;
}
