import { Product } from './product.interface';

export class Phone implements Product {
  public displayInfo(): string {
    return 'eh um celular';
  }
}
