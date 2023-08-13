import { Creator } from './creator';
import { Product } from './product.interface';
import { Laptop } from './laptop';

export class LaptopCreator extends Creator {
  public factoryMethod(): Product {
    return new Laptop();
  }
}
