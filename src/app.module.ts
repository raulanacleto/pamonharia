import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeliveryModule } from './delivery/delivery.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [DeliveryModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
