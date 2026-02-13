import { Injectable } from '@nestjs/common';
import { Product } from '../entities/product.entity';
import { MOCK_DVD_LIST } from '../mock/dvd.mock';

@Injectable()
export class ProductRepository {
  // TODO: Inject actual database and get products (dvds) collection / table
  private readonly products: Product[] = MOCK_DVD_LIST;

  async getAll() {
    return this.products;
  }

  async findById(id: number) {
    return this.products.find((dvd) => dvd.id === id);
  }

  async findByIds(ids: number[]) {
    return this.products.filter((dvd) => ids.includes(dvd.id));
  }
}
