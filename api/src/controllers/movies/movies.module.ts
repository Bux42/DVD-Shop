import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { MoviesService } from '../../services/movie/movie.service';
import { ProductRepository } from 'src/services/database/repositories/product.repository';
import { ProductService } from 'src/services/database/services/product.service';

@Module({
  controllers: [MoviesController],
  providers: [MoviesService, ProductService, ProductRepository],
})
export class MoviesModule {}
