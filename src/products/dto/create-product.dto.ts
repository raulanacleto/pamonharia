import { IsNotEmpty } from '@nestjs/class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  costPrice: number;

  @IsNotEmpty()
  salePrice: number;

  @IsNotEmpty()
  markup: number;
}
