import { Injectable } from '@nestjs/common';
import { ProductService } from '../database/services/product.service';
import { MoviesListResponseDto } from 'src/controllers/movies/dto/responses/list/list.response.dto';

@Injectable()
export class MoviesService {
  constructor(private readonly productService: ProductService) {}

  async getAll(): Promise<MoviesListResponseDto> {
    const products = await this.productService.getAll();
    return {
      items: products.map((product) => ({
        id: product.id,
        title: product.name,
        price: product.price,
      })),
    };
  }
}
