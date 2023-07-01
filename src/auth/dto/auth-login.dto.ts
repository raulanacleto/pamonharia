import { IsNotEmpty, IsString, IsStrongPassword } from 'class-validator';

export class AuthLoginDto {
  @IsString()
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  @IsStrongPassword({
    minSymbols: 1,
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
  })
  password: string;
}
