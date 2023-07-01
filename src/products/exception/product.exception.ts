import { NotFoundException } from '@nestjs/common';

export class ProductNotFound extends NotFoundException {
  constructor() {
    super({
      code: 'PRODUCT.NOT_FOUND',
      message: 'Product not found',
    });
  }
}
