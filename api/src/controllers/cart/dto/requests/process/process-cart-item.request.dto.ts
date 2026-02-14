import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
} from 'class-validator';

export class ProcessCartItemDtoRequest {
  @ApiProperty({ example: 1 })
  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @ApiProperty({ example: 1 })
  @IsNumber()
  @IsPositive()
  @IsOptional()
  quantity?: number;
}
