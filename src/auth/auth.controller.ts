import { Body, Controller, Post } from '@nestjs/common';
import { AuthLoginDto } from './dto/auth-login.dto';
import { AuthForgetDto } from './dto/auth-forget.dto';
import { AuthResetDto } from './dto/auth-reset.dto';
import { UserService } from '../users/user.service';
import { CreateUserDTO } from '../users/dto/create-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('login')
  async login(@Body() dto: AuthLoginDto) {
    await this.authService.login(dto);
  }

  @Post('register')
  async register(@Body() dto: CreateUserDTO) {
    await this.userService.create(dto);
  }

  @Post('forget')
  async forget(@Body() dto: AuthForgetDto) {
    await this.authService.forget(dto);
  }

  @Post('reset')
  async reset(@Body() dto: AuthResetDto) {
    await this.authService.reset(dto);
  }
}
