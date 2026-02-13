import { Injectable } from '@nestjs/common';
import { ProcessCartDtoRequest } from '../../controllers/cart/dto/requests/process/process-cart.request.dto';
import { PricingService } from '../pricing/pricing.service';
import { NotFoundException } from '@nestjs/common';
import { ProductService } from '../database/services/product.service';
import { ProcessCartItemDtoRequest } from 'src/controllers/cart/dto/requests/process/process-cart-item.request.dto';
import { Product } from '../database/entities/product.entity';
import { ProcessCartResponse } from 'src/controllers/cart/dto/responses/process/process-cart.response.dto';
import { convertProductsToCartItems } from './cart.mapper';

@Injectable()
export class CartService {
  constructor(
    private readonly pricingService: PricingService,
    private readonly productService: ProductService,
  ) {}

  async getCartProducts(
    cartItems: ProcessCartItemDtoRequest[],
  ): Promise<Product[]> {
    const productsPromises = cartItems.map(async (item) => {
      const product = await this.productService.findById(item.id);
      if (!product) {
        throw new NotFoundException(`Product with id ${item.id} not found`);
      }
      return product;
    });

    const products = await Promise.all(productsPromises);
    return products;
  }

  async process(
    processCartDto: ProcessCartDtoRequest,
  ): Promise<ProcessCartResponse> {
    const dtoCartItems = processCartDto.items;

    // check if products exist in the database
    const products = await this.getCartProducts(dtoCartItems);

    // convert products to cart items
    const items = convertProductsToCartItems(products, dtoCartItems);

    return this.pricingService.calculateCart(items);
  }
}
