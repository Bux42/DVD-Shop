import { Type } from 'class-transformer';
import { IsDefined, ValidateNested, IsArray } from 'class-validator';
import { ProcessCartItemDtoRequest } from './process-cart-item.request.dto';

export class ProcessCartDtoRequest {
  @IsDefined()
  @IsArray()
  @ValidateNested()
  @Type(() => ProcessCartItemDtoRequest)
  items: ProcessCartItemDtoRequest[];
}
