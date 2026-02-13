import { Test, TestingModule } from '@nestjs/testing';
import { BackToFuturePromotionPolicy } from './discount.policy';
import { DISCOUNTED_PRODUCT_IDS } from './discount.constants';

describe('DiscountPolicy', () => {
  let discountPolicy: BackToFuturePromotionPolicy;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BackToFuturePromotionPolicy],
    }).compile();

    discountPolicy = module.get<BackToFuturePromotionPolicy>(
      BackToFuturePromotionPolicy,
    );
  });

  it('should be defined', () => {
    expect(discountPolicy).toBeDefined();
  });

  it('should return true when product has discount', () => {
    expect(discountPolicy.productIdHasDiscount(DISCOUNTED_PRODUCT_IDS[0])).toBe(
      true,
    );
  });

  it('should return false when product has no discount', () => {
    expect(discountPolicy.productIdHasDiscount(999)).toBe(false);
  });

  it('should return 0 when discount product count is 0', () => {
    expect(discountPolicy.getDiscountPercent(0)).toBe(0);
  });

  it('should return 0 when discount product count is 1', () => {
    expect(discountPolicy.getDiscountPercent(1)).toBe(0);
  });

  it('should return 10 when discount product count is 2', () => {
    expect(discountPolicy.getDiscountPercent(2)).toBe(10);
  });

  it('should return 20 when discount product count is 3', () => {
    expect(discountPolicy.getDiscountPercent(3)).toBe(20);
  });

  it('should return distinct discount product ids no duplicates', () => {
    const productIds = [
      DISCOUNTED_PRODUCT_IDS[0],
      DISCOUNTED_PRODUCT_IDS[1],
      DISCOUNTED_PRODUCT_IDS[2],
    ];
    expect(discountPolicy.getDistinctDiscountProductIds(productIds)).toEqual([
      DISCOUNTED_PRODUCT_IDS[0],
      DISCOUNTED_PRODUCT_IDS[1],
      DISCOUNTED_PRODUCT_IDS[2],
    ]);
  });

  it('should return distinct discount product ids when there are duplicates', () => {
    const productIds = [
      DISCOUNTED_PRODUCT_IDS[0],
      DISCOUNTED_PRODUCT_IDS[1],
      DISCOUNTED_PRODUCT_IDS[2],
      DISCOUNTED_PRODUCT_IDS[0],
      DISCOUNTED_PRODUCT_IDS[1],
      DISCOUNTED_PRODUCT_IDS[2],
    ];
    expect(discountPolicy.getDistinctDiscountProductIds(productIds)).toEqual([
      DISCOUNTED_PRODUCT_IDS[0],
      DISCOUNTED_PRODUCT_IDS[1],
      DISCOUNTED_PRODUCT_IDS[2],
    ]);
  });
});
