import { UnauthorizedException } from '@nestjs/common';

export class InvalidLogin extends UnauthorizedException {
  constructor() {
    super({
      code: 'AUTH.INVALID_LOGIN',
      message: 'Wrong email or password',
    });
  }
}

export class InvalidEmail extends UnauthorizedException {
  constructor() {
    super({
      code: 'AUTH.INVALID_EMAIL',
      message:
        'That address is either invalid, not a verified primary email or is not' +
        ' associated with a personal user account',
    });
  }
}
