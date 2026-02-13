import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
} from 'class-validator';

export class ProcessCartItemDtoRequest {
  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsNumber()
  @IsPositive()
  @IsOptional()
  quantity?: number;
}
