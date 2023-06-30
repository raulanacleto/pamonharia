import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/pamonha')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/gratuita')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/paga')
  getPaga(): string {
    return this.appService.getHello();
  }
}
