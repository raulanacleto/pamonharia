import { Injectable } from '@nestjs/common';
import { CreateDeliveryDto } from './dto/create-delivery.dto';
import { UpdateDeliveryDto } from './dto/update-delivery.dto';
import { DeliveryManService } from './service/deliveryman.service';

@Injectable()
export class DeliveryService {

  constructor(private readonly deliveryManService: DeliveryManService){

  }

  create(createDeliveryDto: CreateDeliveryDto) {
    return 'This action adds a new delivery';
  }

  async findAll(): Promise<any> {
    const vehicles = await this.deliveryManService.vehicles()
    return `This action returns all delivery:  ${vehicles}` ;
  }

  findOne(id: number) {
    return `This action returns a #${id} delivery`;
  }

  update(id: number, updateDeliveryDto: UpdateDeliveryDto) {
    return `This action updates a #${id} delivery`;
  }

  remove(id: number) {
    return `This action removes a #${id} delivery`;
  }
}
