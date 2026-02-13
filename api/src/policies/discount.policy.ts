import {
  BASE_SAGA_DISCOUNT_RATE_PERCENT,
  MAX_SAGA_DISCOUNT_RATE_PERCENT,
  DISCOUNTED_PRODUCT_IDS,
} from './discount.constants';
import { DiscountRule } from './discount.types';

export class BackToFuturePromotionPolicy {
  private readonly rules: DiscountRule[] = [
    { minDistinct: 3, discountRatePercent: MAX_SAGA_DISCOUNT_RATE_PERCENT },
    { minDistinct: 2, discountRatePercent: BASE_SAGA_DISCOUNT_RATE_PERCENT },
  ];

  getDiscountPercent(distinctDiscountProductCount: number): number {
    const rule = this.rules.find(
      (r) => distinctDiscountProductCount >= r.minDistinct,
    );

    if (rule) {
      return rule.discountRatePercent;
    }

    return 0;
  }

  getDistinctDiscountProductIds(productIds: number[]): number[] {
    return [
      ...new Set(productIds.filter((id) => this.productIdHasDiscount(id))),
    ];
  }

  productIdHasDiscount(productId: number): boolean {
    return DISCOUNTED_PRODUCT_IDS.includes(productId);
  }
}
