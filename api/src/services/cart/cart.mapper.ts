import { ProcessCartItemDtoRequest } from 'src/controllers/cart/dto/requests/process/process-cart-item.request.dto';
import { Product } from '../database/entities/product.entity';
import { CartItem } from './cart.service.types';
import { NotFoundException } from '@nestjs/common';

export const convertProductsToCartItems = (
  products: Product[],
  dtoCartItems: ProcessCartItemDtoRequest[],
): CartItem[] => {
  const cartItems = products.map((product) => {
    const cartItem = dtoCartItems.find((item) => item.id === product.id);
    if (!cartItem) {
      throw new NotFoundException(`Cart item with id ${product.id} not found`);
    }
    const item: CartItem = {
      id: product.id,
      unitPrice: product.price,
      quantity: cartItem.quantity || 1,
    };
    return item;
  });

  return cartItems;
};
