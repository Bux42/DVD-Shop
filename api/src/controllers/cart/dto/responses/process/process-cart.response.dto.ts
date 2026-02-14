import { ProcessCartItemResponse } from './process-cart-item.response.dto';
import {
  IsArray,
  IsDefined,
  IsNumber,
  IsOptional,
  IsPositive,
  ValidateNested,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class ProcessCartResponse {
  @ApiProperty({ type: [ProcessCartItemResponse] })
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ProcessCartItemResponse)
  items: ProcessCartItemResponse[];

  @ApiProperty()
  @IsDefined()
  @IsNumber()
  @IsPositive()
  total: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  @IsPositive()
  totalDiscount?: number;
}
