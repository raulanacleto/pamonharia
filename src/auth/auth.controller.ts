import { Body, Controller, Headers, Post, UseGuards } from '@nestjs/common';
import { AuthLoginDto } from './dto/auth-login.dto';
import { AuthForgetDto } from './dto/auth-forget.dto';
import { AuthResetDto } from './dto/auth-reset.dto';
import { UserService } from '../users/user.service';
import { AuthService } from './auth.service';
import { AuthRegisterDto } from './dto/auth-register.dto';
import { AuthGuard } from '../guards/auth.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UserService,
    private readonly authService: AuthService,
  ) {}

  @Post('login')
  async login(@Body() dto: AuthLoginDto) {
    return await this.authService.login(dto);
  }

  @Post('register')
  async register(@Body() dto: AuthRegisterDto) {
    return await this.authService.register(dto);
  }

  @Post('forget')
  async forget(@Body() dto: AuthForgetDto) {
    await this.authService.forget(dto);
  }

  @Post('reset')
  async reset(@Body() dto: AuthResetDto) {
    await this.authService.reset(dto);
  }
  @UseGuards(AuthGuard)
  @Post('checkToken')
  async checkToken(@Headers('authorization') token) {
    return await this.authService.checkToken((token ?? '').split(' ')[1]);
  }
}
