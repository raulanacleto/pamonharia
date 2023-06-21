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
import { CreateUserDTO } from './dto/create-user.dto';
import { PartialUpdateUserDto } from './dto/partialUpdate-user.dto';

@Controller('users')
export class UserController {
  @Post()
  async create(@Body() body: CreateUserDTO) {
    return { body };
  }

  @Get()
  async read() {
    return { users: [] };
  }

  @Get(':id')
  async readById(@Param() param) {
    return { user: {}, param };
  }

  @Put(':id')
  async update(
    @Param('id') id,
    @Body() { name, email, password }: CreateUserDTO,
  ) {
    return { id, name, email, password };
  }

  @Patch(':id')
  async updatePartial(
    @Param('id') id,
    @Body() { name, email, password }: PartialUpdateUserDto,
  ) {
    return { id, name, email, password };
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return { id };
  }
}
