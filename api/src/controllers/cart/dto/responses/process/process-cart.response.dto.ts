import { ProcessCartItemResponse } from './process-cart-item.response.dto';
import { IsDefined, IsNumber, IsOptional, IsPositive } from 'class-validator';

export class ProcessCartResponse {
  @IsDefined()
  items: ProcessCartItemResponse[];

  @IsDefined()
  @IsNumber()
  @IsPositive()
  total: number;

  @IsOptional()
  @IsNumber()
  @IsPositive()
  totalDiscount?: number;
}
