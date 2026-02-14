import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNumber, IsPositive } from 'class-validator';

export class ProcessCartItemDiscountResponse {
  @ApiProperty()
  @IsDefined()
  @IsNumber()
  @IsPositive()
  discountRatePercent: number;

  @ApiProperty()
  @IsDefined()
  @IsNumber()
  @IsPositive()
  discountAmount: number;
}
