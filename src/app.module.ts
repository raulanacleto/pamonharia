import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeliveryModule } from './delivery/delivery.module';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './users/user.module';
import { config } from 'dotenv';
config();
@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.pamonharia_db_user}:${process.env.pamonharia_db_password}@${process.env.DB_HOST}`,
    ),
    DeliveryModule,
    ProductsModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService], 
})
export class AppModule {}
