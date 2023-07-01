import { NotFoundException } from '@nestjs/common';

export class UserNotfound extends NotFoundException {
  constructor() {
    super({
      code: 'USER.NOT_FOUND',
      message: 'User not found',
    });
  }
}
