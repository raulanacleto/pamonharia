import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdatePutUserDto } from './dto/update-put-user.dto';
import { UpdatePatchUserDto } from './dto/update-patch-user.dto';
import { UserSchema } from './schemas/user.schema';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers(): Promise<UserSchema[]> {
    return await this.userService.findAll();
  }
  @Get(':id')
  async getUser(@Param('id') id: string) {
    return await this.userService.findById(id);
  }
  @Post()
  async createUser(@Body() dto: CreateUserDTO): Promise<UserSchema> {
    return this.userService.create(dto);
  }
  @Put(':id')
  async updatePutById(@Param('id') id: string, @Body() dto: UpdatePutUserDto) {
    return await this.userService.updatePutUser(id, dto);
  }
  @Patch(':id')
  async updatePatchById(
    @Param('id') id: string,
    @Body() dto: UpdatePatchUserDto,
  ) {
    return await this.userService.updatePatchUser(id, dto);
  }
  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return await this.userService.delete(id);
  }
}
