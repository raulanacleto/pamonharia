import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import { UserNotfound } from './exceptions/user.exception';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdatePatchUserDto } from './dto/update-patch-user.dto';
import { UpdatePutUserDto } from './dto/update-put-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDTO) {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
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
