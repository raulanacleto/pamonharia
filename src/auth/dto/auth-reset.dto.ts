import { IsNotEmpty, IsStrongPassword } from 'class-validator';
import { IsJWT } from '@nestjs/class-validator';

export class AuthResetDto {
  @IsNotEmpty()
  @IsStrongPassword({
    minSymbols: 1,
    minLength: 8,
    minUppercase: 1,
  })
  password: string;
  @IsJWT()
  token: string;
}
