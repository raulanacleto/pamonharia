import { AuthLoginDto } from './auth-login.dto';
import { IsString } from 'class-validator';

export class AuthRegisterDto extends AuthLoginDto {
  @IsString()
  name: string;
}
