import { Test, TestingModule } from '@nestjs/testing';
import { CartService } from './cart.service';
import { PricingService } from '../pricing/pricing.service';
import { ProcessCartItemDtoRequest } from '../../controllers/cart/dto/requests/process/process-cart-item.request.dto';
import { ProductService } from '../database/services/product.service';
import { ProductRepository } from '../database/repositories/product.repository';
import { BackToFuturePromotionPolicy } from '../../policies/discount.policy';
import { ProcessCartResponse } from '../../controllers/cart/dto/responses/process/process-cart.response.dto';

describe('CartService', () => {
  let service: CartService;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let pricingService: PricingService;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let productService: ProductService;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let productRepository: ProductRepository;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let dicountPolicy: BackToFuturePromotionPolicy;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CartService,
        PricingService,
        ProductService,
        ProductRepository,
        BackToFuturePromotionPolicy,
      ],
    }).compile();

    service = module.get<CartService>(CartService);
    pricingService = module.get<PricingService>(PricingService);
    productService = module.get<ProductService>(ProductService);
    productRepository = module.get<ProductRepository>(ProductRepository);
    dicountPolicy = module.get<BackToFuturePromotionPolicy>(
      BackToFuturePromotionPolicy,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should process cart', async () => {
    const cartItemDto: ProcessCartItemDtoRequest[] = [
      {
        id: 1,
      },
      {
        id: 2,
      },
      {
        id: 3,
      },
    ];
    const result = await service.process({ items: cartItemDto });
    const expectedResult: ProcessCartResponse = {
      items: [
        {
          id: 1,
          title: 'Back to the Future 1',
          unitPrice: 15,
          finalPrice: 12,
          discount: {
            discountRatePercent: 20,
            discountAmount: 3,
          },
          quantity: 1,
        },
        {
          id: 2,
          title: 'Back to the Future 2',
          unitPrice: 15,
          finalPrice: 12,
          discount: {
            discountRatePercent: 20,
            discountAmount: 3,
          },
          quantity: 1,
        },
        {
          id: 3,
          title: 'Back to the Future 3',
          unitPrice: 15,
          finalPrice: 12,
          discount: {
            discountRatePercent: 20,
            discountAmount: 3,
          },
          quantity: 1,
        },
      ],
      total: 36,
      totalDiscount: 9,
    };
    expect(result).toEqual(expectedResult);
  });
});
