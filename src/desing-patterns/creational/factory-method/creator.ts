import { Product } from './product.interface';

export abstract class Creator {
  public abstract factoryMethod(): Product;

  public showDisplayInfo(): string {
    const product: Product = this.factoryMethod();
    return `Creator: The same creator's code has just worked with ${product.displayInfo()}`;
  }
}
