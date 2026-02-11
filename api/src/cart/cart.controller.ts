import { Controller, Post, Body } from '@nestjs/common';
import { CartService } from './cart.service';
import { ProcessCartDto } from './dto/process-cart.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('process')
  process(@Body() processCartDto: ProcessCartDto) {
    return this.cartService.process(processCartDto);
  }
}
