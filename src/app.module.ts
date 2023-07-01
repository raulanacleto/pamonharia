import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeliveryModule } from './delivery/delivery.module';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'dotenv';
import { UserModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';

config();
@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.PAMONHARIA_DB_USER}:${process.env.PAMONHARIA_DB_PASSWORD}@${process.env.DB_HOST}`,
    ),
    DeliveryModule,
    ProductsModule,
    UserModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
