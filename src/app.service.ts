import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World gratuito!';
  }
  getPaga(): string {
    return 'Hello World pago!';
  }
}
