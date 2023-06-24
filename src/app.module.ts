import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeliveryModule } from './delivery/delivery.module';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/user.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://raul:naoMeLembro1@cluster0.k4w1w.mongodb.net/pamonharia`,
    ),
    DeliveryModule,
    ProductsModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
