import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthLoginDto } from './dto/auth-login.dto';
import { AuthForgetDto } from './dto/auth-forget.dto';
import { AuthResetDto } from './dto/auth-reset.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../users/entities/user.entity';
import { Model } from 'mongoose';
import { InvalidEmail, InvalidLogin } from './exception/auth.exception';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async createToken() {
    // return this.jwtService.sign();
  }

  async checkToken(token: string) {
    // return this.jwtService.verify();
  }

  async login(dto: AuthLoginDto) {
    const result = await this.userModel.findOne(dto);
    if (!result) {
      throw new InvalidLogin();
    }
    return result;
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
    await this.userModel.findByIdAndUpdate(id, dto);
  }
}
