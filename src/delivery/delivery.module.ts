import { Module } from '@nestjs/common';
import { DeliveryService } from './delivery.service';
import { DeliveryController } from './delivery.controller';
import { DeliveryManService } from './service/deliveryman.service';

@Module({
  controllers: [DeliveryController],
  providers: [DeliveryService, DeliveryManService],
})
export class DeliveryModule {}
