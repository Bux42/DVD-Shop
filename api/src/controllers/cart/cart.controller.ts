import { Controller, Post, Body } from '@nestjs/common';
import { CartService } from '../../services/cart/cart.service';
import { ProcessCartDtoRequest } from './dto/requests/process/process-cart.request.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('process')
  process(@Body() processCartDto: ProcessCartDtoRequest) {
    return this.cartService.process(processCartDto);
  }
}
