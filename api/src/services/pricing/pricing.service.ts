import { Injectable } from '@nestjs/common';
import { ProcessCartResponse } from 'src/controllers/cart/dto/responses/process/process-cart.response.dto';
import { BackToFuturePromotionPolicy } from '../../policies/discount.policy';
import { ProcessCartItemResponse } from 'src/controllers/cart/dto/responses/process/process-cart-item.response.dto';
import { CartItem } from '../cart/cart.service.types';

@Injectable()
export class PricingService {
  constructor(
    private readonly backToFuturePromotionPolicy: BackToFuturePromotionPolicy,
  ) {}

  calculateCart(items: CartItem[]): ProcessCartResponse {
    const discountProductIds =
      this.backToFuturePromotionPolicy.getDistinctDiscountProductIds(
        items.map((p) => p.id),
      );

    const discountPercent = this.backToFuturePromotionPolicy.getDiscountPercent(
      discountProductIds.length,
    );

    const processedItems = this.applyDiscounts(
      items,
      discountProductIds,
      discountPercent,
    );

    const totalPriceWithDiscount = processedItems.reduce(
      (total, item) => total + item.finalPrice * item.quantity,
      0,
    );

    const totalPriceWithoutDiscount = processedItems.reduce(
      (total, item) => total + item.unitPrice * item.quantity,
      0,
    );

    const discount = this.getTotalDiscount(
      totalPriceWithoutDiscount,
      totalPriceWithDiscount,
    );

    const result: ProcessCartResponse = {
      items: processedItems,
      total: totalPriceWithDiscount,
    };

    if (discount > 0) {
      result.totalDiscount = discount;
    }

    return result;
  }

  getTotalDiscount(originalPrice: number, discountedPrice: number): number {
    return originalPrice - discountedPrice;
  }

  applyDiscounts(
    items: CartItem[],
    discountProductIds: number[],
    discountPercent: number,
  ): ProcessCartItemResponse[] {
    return items.map((item) => {
      const unitPrice = item.unitPrice;
      const hasDiscount = discountProductIds.includes(item.id);

      const discountAmount = unitPrice * (discountPercent / 100);
      const finalPrice = hasDiscount ? unitPrice - discountAmount : unitPrice;

      const processedCartItem: ProcessCartItemResponse = {
        id: item.id,
        title: item.title,
        unitPrice: unitPrice,
        finalPrice: finalPrice,
        quantity: item.quantity,
      };

      if (hasDiscount && discountPercent > 0) {
        processedCartItem.discount = {
          discountRatePercent: discountPercent,
          discountAmount: discountAmount,
        };
      }

      return processedCartItem;
    });
  }
}
