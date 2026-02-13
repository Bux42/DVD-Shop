import { Type } from 'class-transformer';
import { IsDefined, ValidateNested, IsArray } from 'class-validator';
import { ProcessCartItemDtoRequest } from './process-cart-item.request.dto';
import { ApiProperty } from '@nestjs/swagger';

export class ProcessCartDtoRequest {
  @IsDefined()
  @IsArray()
  @ValidateNested()
  @Type(() => ProcessCartItemDtoRequest)
  @ApiProperty({
    type: [ProcessCartItemDtoRequest],
    example: [
      {
        id: 1,
        quantity: 1,
      },
    ],
  })
  items: ProcessCartItemDtoRequest[];
}
