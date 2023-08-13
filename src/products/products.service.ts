import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import { Model } from 'mongoose';
import { ProductNotFound } from './exception/product.exception';
import { Creator } from '../desing-patterns/creational/factory-method/creator';
import { PhoneCreator } from '../desing-patterns/creational/factory-method/phone-creator';
import { Prototype } from '../desing-patterns/creational/prototype/prototype';
import { ComponentWithBackReference } from '../desing-patterns/creational/prototype/component-with-back-reference';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async create(dto: CreateProductDto): Promise<Product> {
    this.clientCode(new PhoneCreator());
    const createdProduct = new this.productModel(dto);
    return createdProduct.save();
  }

  async copy(id: string): Promise<Product> {
    const p1: Prototype = new Prototype();
    p1.primitive = id;
    p1.component = new Date();
    p1.circularReference = new ComponentWithBackReference(p1);
    const p2: Prototype = p1.clone();
    console.log(p2);
    return undefined;
  }

  async findAll(): Promise<Product[]> {
    return await this.productModel.find().exec();
  }

  async findById(id: string) {
    const response = await this.productModel.findById(id);
    if (!response) {
      throw new ProductNotFound();
    }
  }

  async update(id: string, dto: UpdateProductDto) {
    const response = await this.productModel.findById(id);
    if (!response) {
      throw new ProductNotFound();
    }
    await this.productModel.findByIdAndUpdate(id, dto);
  }

  async delete(id: string): Promise<void> {
    const response = await this.productModel.findById(id);
    if (!response) {
      throw new ProductNotFound();
    }
    await this.productModel.findByIdAndDelete(id);
  }

  private clientCode(creator: Creator): void {
    console.log(
      "Client: I'm not aware of the creator's class, but it still works.",
    );
    console.log(creator.showDisplayInfo());
  }
}
