import { IsNotEmpty } from '@nestjs/class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  name: string

  @IsNotEmpty()
  priceCost: number

  @IsNotEmpty()
  priceSale: number

  @IsNotEmpty()
  percentualProfit: number

}
