import { ProductService } from '../../services/database/services/product.service';
import { ProductRepository } from '../../services/database/repositories/product.repository';
import { MoviesService } from '../../services/movie/movie.service';
import { MoviesController } from './movies.controller';
import { Test, TestingModule } from '@nestjs/testing';

describe('MoviesController', () => {
  let controller: MoviesController;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let service: MoviesService;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let productService: ProductService;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let productRepository: ProductRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MoviesController],
      providers: [MoviesService, ProductService, ProductRepository],
    }).compile();

    controller = module.get<MoviesController>(MoviesController);
    service = module.get<MoviesService>(MoviesService);
    productService = module.get<ProductService>(ProductService);
    productRepository = module.get<ProductRepository>(ProductRepository);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
