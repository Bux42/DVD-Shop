import { DiscountRule } from './discount.types';

export const DISCOUNTED_PRODUCT_IDS = [
  1, // back to the future 1
  2, // back to the future 2
  3, // back to the future 3
  4, // back to the future 4
];

export const DISCOUNT_RULES: DiscountRule[] = [
  { minDistinct: 2, discountRatePercent: 10 },
  { minDistinct: 3, discountRatePercent: 20 },
];

// 10% discount for 2 saga dvds
export const BASE_SAGA_DISCOUNT_RATE_PERCENT = 10;
// 20% discount for 3 or more saga dvds
export const MAX_SAGA_DISCOUNT_RATE_PERCENT = 20;
