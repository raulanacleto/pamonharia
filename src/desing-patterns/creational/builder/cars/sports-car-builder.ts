import { CarBuilder } from '../builders/car-builder';
import { Car } from './car';

export class SportsCarBuilder implements CarBuilder {
  private car: Car = new Car();
  buildBody(): void {
    this.car.parts.push('sports body');
  }

  buildEngine(): void {
    this.car.parts.push('sports engine');
  }

  buildWheels(): void {
    this.car.parts.push('sports wheels');
  }

  getResult(): Car {
    return this.car;
  }
}
