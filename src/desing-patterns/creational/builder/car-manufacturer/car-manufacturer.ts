import { CarBuilder } from '../builders/car-builder';
import { ManualBuilder } from '../builders/manual-builder';

export class CarManufacturer {
  private carBuilder: CarBuilder;
  private manualBuilder: ManualBuilder;

  setCarBuilder(builder: CarBuilder): void {
    this.carBuilder = builder;
  }

  setManualBuilder(manualBuilder: ManualBuilder): void {
    this.manualBuilder = manualBuilder;
  }

  buildCar(): void {
    this.carBuilder.buildBody();
    this.carBuilder.buildWheels();
    this.carBuilder.buildEngine();
  }

  buildManual(): void {
    this.carBuilder.buildBody();
    this.carBuilder.buildWheels();
    this.carBuilder.buildEngine();
  }
}
