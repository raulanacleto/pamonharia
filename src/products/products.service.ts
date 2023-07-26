import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './schemas/product.schema';
import { Model } from 'mongoose';
import { ProductNotFound } from './exception/product.exception';
import { Logger } from '../utils/logger';

@Injectable()
export class ProductsService {
  private logger: Logger = Logger.getInstance();
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async create(dto: CreateProductDto): Promise<Product> {
    this.logger.log('Log message from logger');
    const createdProduct = new this.productModel(dto);
    return createdProduct.save();
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
}
