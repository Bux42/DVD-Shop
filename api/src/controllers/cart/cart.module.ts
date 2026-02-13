import { Module } from '@nestjs/common';
import { CartService } from '../../services/cart/cart.service';
import { CartController } from './cart.controller';
import { PricingService } from '../../services/pricing/pricing.service';
import { ProductService } from '../../services/database/services/product.service';
import { ProductRepository } from '../../services/database/repositories/product.repository';
import { BackToFuturePromotionPolicy } from 'src/policies/discount.policy';

@Module({
  controllers: [CartController],
  providers: [
    CartService,
    PricingService,
    ProductService,
    ProductRepository,
    BackToFuturePromotionPolicy,
  ],
})
export class CartModule {}
