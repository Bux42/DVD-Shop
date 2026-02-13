import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { PricingService } from 'src/services/pricing/pricing.service';
import { ProductService } from 'src/services/database/services/product.service';
import { ProductRepository } from 'src/services/database/repositories/product.repository';
import { BackToFuturePromotionPolicy } from 'src/policies/discount.policy';
import { MoviesService } from 'src/services/movie/movie.service';

@Module({
  controllers: [MoviesController],
  providers: [
    PricingService,
    ProductService,
    ProductRepository,
    BackToFuturePromotionPolicy,
    MoviesService,
  ],
})
export class MoviesModule {}
