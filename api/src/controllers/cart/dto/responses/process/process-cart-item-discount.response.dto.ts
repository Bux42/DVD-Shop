import { IsDefined, IsNumber, IsPositive } from 'class-validator';

export class ProcessCartItemDiscountResponse {
  @IsDefined()
  @IsNumber()
  @IsPositive()
  discountRatePercent: number;

  @IsDefined()
  @IsNumber()
  @IsPositive()
  discountAmount: number;
}
