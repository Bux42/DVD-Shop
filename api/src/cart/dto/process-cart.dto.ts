import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsDefined,
  ValidateNested,
  IsNumber,
  IsString,
  IsArray,
} from 'class-validator';

class CartItemDto {
  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  id: number;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  name: string;
}

export class ProcessCartDto {
  @IsDefined()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CartItemDto)
  items: CartItemDto[];
}
