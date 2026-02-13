import { Injectable } from '@nestjs/common';
import { ProductRepository as ProductRepositories } from '../repositories/product.repository';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepositories) {}

  getAll() {
    return this.productRepository.getAll();
  }

  findById(id: number) {
    return this.productRepository.findById(id);
  }

  findByIds(ids: number[]) {
    return this.productRepository.findByIds(ids);
  }
}
