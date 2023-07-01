import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserNotfound } from './exceptions/user.exception';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdatePatchUserDto } from './dto/update-patch-user.dto';
import { UpdatePutUserDto } from './dto/update-put-user.dto';
import { UserSchema } from './schemas/User.schema';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(UserSchema.name) private userModel: Model<UserSchema>,
  ) {}

  async create(dto: CreateUserDTO): Promise<UserSchema> {
    const createUser = new this.userModel(dto);
    return createUser.save();
  }

  async findAll(): Promise<UserSchema[]> {
    return await this.userModel.find().exec();
  }

  async findById(userId: string) {
    const response = await this.userModel.findById(userId);
    if (!response) {
      throw new UserNotfound();
    }
    return response;
  }

  async updatePutUser(userId, updatePutUserDto: UpdatePutUserDto) {
    const response = await this.findById(userId);
    if (!response) {
      throw new UserNotfound();
    }
    return this.userModel.findByIdAndUpdate(userId, updatePutUserDto);
  }

  async updatePatchUser(userId, updatePatchUserDto: UpdatePatchUserDto) {
    const response = await this.findById(userId);
    if (!response) {
      throw new UserNotfound();
    }
    return this.userModel.findByIdAndUpdate(userId, updatePatchUserDto);
  }

  async delete(userId) {
    const response = await this.findById(userId);
    if (!response) {
      throw new UserNotfound();
    }
    await this.userModel.findByIdAndDelete(userId);
  }
}
