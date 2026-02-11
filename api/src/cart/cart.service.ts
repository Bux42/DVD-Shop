import { Injectable } from '@nestjs/common';
import { ProcessCartDto } from './dto/process-cart.dto';

@Injectable()
export class CartService {
  process(processCartDto: ProcessCartDto) {
    return 'This action processes a cart';
  }
}
