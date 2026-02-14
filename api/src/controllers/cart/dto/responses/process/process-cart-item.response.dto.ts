import { ProcessCartItemDiscountResponse } from './process-cart-item-discount.response.dto';
import {
  IsDefined,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProcessCartItemResponse {
  @ApiProperty()
  @IsDefined()
  @IsNumber()
  @IsPositive()
  id: number;

  @ApiProperty()
  @IsDefined()
  @IsString()
  title: string;

  @ApiProperty()
  @IsDefined()
  @IsNumber()
  @IsPositive()
  unitPrice: number;

  @ApiProperty()
  @IsDefined()
  @IsNumber()
  @IsPositive()
  finalPrice: number;

  @ApiProperty()
  @IsOptional()
  discount?: ProcessCartItemDiscountResponse;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  quantity: number;
}
