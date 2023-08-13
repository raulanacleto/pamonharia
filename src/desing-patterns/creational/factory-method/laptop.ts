import { Product } from './product.interface';

export class Laptop implements Product {
  displayInfo(): string {
    return 'eh um laptop';
  }
}
