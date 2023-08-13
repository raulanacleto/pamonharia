import { Creator } from './creator';
import { Product } from './product.interface';
import { Phone } from './phone';

export class PhoneCreator extends Creator {
  public factoryMethod(): Product {
    return new Phone();
  }
}
