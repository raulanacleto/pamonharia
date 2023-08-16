import { CarBuilder } from '../builders/car-builder';
import { Car } from './car';

export class SUVCarBuilder implements CarBuilder {
  private car: Car = new Car();
  buildBody(): void {
    this.car.parts.push('suv body');
  }

  buildEngine(): void {
    this.car.parts.push('suv engine');
  }

  buildWheels(): void {
    this.car.parts.push('suv wheels');
  }

  getResult(): Car {
    return this.car;
  }
}
