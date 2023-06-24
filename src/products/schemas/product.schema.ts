import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  costPrice: number;
  @Prop()
  markup: number;
  @Prop()
  salePrice: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
