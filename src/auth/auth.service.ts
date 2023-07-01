import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthLoginDto } from './dto/auth-login.dto';
import { AuthForgetDto } from './dto/auth-forget.dto';
import { AuthResetDto } from './dto/auth-reset.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { InvalidEmail, InvalidLogin } from './exception/auth.exception';
import { UserService } from '../users/user.service';
import { AuthRegisterDto } from './dto/auth-register.dto';
import { UserSchema } from '../users/schemas/user.schema';

@Injectable()
export class AuthService {
  private issuer = 'login';
  private audience = 'users';
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
    @InjectModel(UserSchema.name) private userModel: Model<UserSchema>,
  ) {}

  async createToken(user: UserSchema) {
    return {
      accessToken: this.jwtService.sign(
        {
          name: user.name,
          email: user.email,
        },
        {
          expiresIn: '2 days',
          issuer: this.issuer,
          audience: this.audience,
        },
      ),
    };
  }

  checkToken(token: string) {
    try {
      return this.jwtService.verify(token, {
        issuer: this.issuer,
        audience: this.audience,
      });
    } catch (e) {
      throw new UnauthorizedException(e);
    }
  }

  async login(dto: AuthLoginDto) {
    const result: UserSchema = await this.userModel.findOne(dto);
    if (!result) {
      throw new InvalidLogin();
    }
    return await this.createToken(result);
  }

  async forget(dto: AuthForgetDto) {
    const result = await this.userModel.findOne(dto);
    if (!result) {
      throw new InvalidEmail();
    }
    return true;
  }

  async reset(dto: AuthResetDto) {
    // TODO: validar o token
    const id = 0; // TODO: extrair o id do token
    const user: UserSchema = await this.userModel.findByIdAndUpdate(id, dto);
    return this.createToken(user);
  }

  async register(dto: AuthRegisterDto) {
    const createdUser = await this.userService.create(dto);
    return await this.createToken(createdUser);
  }
  isValidToken(token: string) {
    try {
      this.checkToken(token);
      return true;
    } catch (e) {
      return false;
    }
  }
}
