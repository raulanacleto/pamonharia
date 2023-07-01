import { IsJWT } from '@nestjs/class-validator';

export class AuthCheckTokenDto {
  @IsJWT()
  token: string;
}
