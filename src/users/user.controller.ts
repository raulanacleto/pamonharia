import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdatePutUserDto } from './dto/update-put-user.dto';
import { UpdatePatchUserDto } from './dto/update-patch-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAllUsers() {
    return await this.userService.findAll();
  }
  @Get(':id')
  async getUser(@Param('id', ParseIntPipe) id) {
    return await this.userService.findById(id);
  }
  @Post('create')
  async createUser(@Body() dto: CreateUserDTO) {
    return await this.userService.create(dto);
  }
  @Put(':id')
  updatePutById(@Param('id', ParseIntPipe) id, @Body() dto: UpdatePutUserDto) {
    return this.userService.updatePutUser(id, dto);
  }
  @Patch(':id')
  updatePatchById(
    @Param('id', ParseIntPipe) id,
    @Body() dto: UpdatePatchUserDto,
  ) {
    return this.userService.updatePatchUser(id, dto);
  }
  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id) {
    return this.userService.delete(id);
  }
}
