import { ProcessCartItemDiscountResponse } from './process-cart-item-discount.response.dto';
import { IsDefined, IsNumber, IsOptional, IsPositive } from 'class-validator';

export class ProcessCartItemResponse {
  @IsDefined()
  @IsNumber()
  @IsPositive()
  id: number;

  @IsDefined()
  @IsNumber()
  @IsPositive()
  unitPrice: number;

  @IsDefined()
  @IsNumber()
  @IsPositive()
  finalPrice: number;

  @IsOptional()
  discount?: ProcessCartItemDiscountResponse;

  @IsNumber()
  @IsPositive()
  quantity: number;
}
