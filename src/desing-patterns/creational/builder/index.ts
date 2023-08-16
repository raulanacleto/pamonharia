import { SportsCarBuilder } from './cars/sports-car-builder';
import { SUVCarBuilder } from './cars/suv-car-builder';
import { CarManualBuilder } from './manuals/car-manual-builder';
import { CarManufacturer } from './car-manufacturer/car-manufacturer';

function clientCode(carManufacturer: CarManufacturer) {
  const sportsCarBuilder = new SportsCarBuilder();
  const suvCarBuilder = new SUVCarBuilder();
  const carManualBuilder = new CarManualBuilder();

  carManufacturer.setCarBuilder(sportsCarBuilder);
  carManufacturer.buildCar();
  const sportsCar = sportsCarBuilder.getResult();
  console.log('Sports Car parts:');
  sportsCar.listParts();

  carManufacturer.setCarBuilder(suvCarBuilder);
  carManufacturer.buildCar();
  const suvCar = suvCarBuilder.getResult();
  console.log('SUV Car parts:');
  suvCar.listParts();

  carManufacturer.setManualBuilder(carManualBuilder);
  carManufacturer.buildManual();
  const carManual = carManualBuilder.getResult();
  console.log('Car Manual parts:');
  carManual.listParts();
}

const director = new CarManufacturer();
clientCode(director);
