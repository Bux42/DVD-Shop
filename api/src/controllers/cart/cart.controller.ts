import { Controller, Post, Body } from '@nestjs/common';
import { CartService } from '../../services/cart/cart.service';
import { ProcessCartDtoRequest } from './dto/requests/process/process-cart.request.dto';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProcessCartResponse } from './dto/responses/process/process-cart.response.dto';

@ApiTags('cart')
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Post('process')
  @ApiOperation({ summary: 'Process cart' })
  @ApiBody({ type: ProcessCartDtoRequest })
  @ApiResponse({ status: 200, type: ProcessCartResponse })
  process(@Body() processCartDto: ProcessCartDtoRequest) {
    return this.cartService.process(processCartDto);
  }
}
