import { Test, TestingModule } from '@nestjs/testing';
import { CartController } from './cart.controller';
import { CartService } from '../../services/cart/cart.service';
import { PricingService } from '../../services/pricing/pricing.service';
import { ProcessCartDtoRequest } from './dto/requests/process/process-cart.request.dto';
import { ProductService } from '../../services/database/services/product.service';
import { ProductRepository } from '../../services/database/repositories/product.repository';
import { NotFoundException } from '@nestjs/common';
import { BackToFuturePromotionPolicy } from '../../policies/discount.policy';
import { ProcessCartResponse } from './dto/responses/process/process-cart.response.dto';

describe('CartController', () => {
  let controller: CartController;

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
      controllers: [CartController],
      providers: [
        CartService,
        PricingService,
        ProductService,
        ProductRepository,
        BackToFuturePromotionPolicy,
      ],
    }).compile();

    controller = module.get<CartController>(CartController);
    pricingService = module.get<PricingService>(PricingService);
    productService = module.get<ProductService>(ProductService);
    productRepository = module.get<ProductRepository>(ProductRepository);
    dicountPolicy = module.get<BackToFuturePromotionPolicy>(
      BackToFuturePromotionPolicy,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return empty cart when no items are provided', async () => {
    const processCartDto: ProcessCartDtoRequest = {
      items: [],
    };
    const result = await controller.process(processCartDto);
    expect(result).toEqual({
      items: [],
      total: 0,
    });
  });

  it('should return a cart with a single saga dvd with no discount', async () => {
    const processCartDto: ProcessCartDtoRequest = {
      items: [
        {
          id: 1,
        },
      ],
    };
    const result = await controller.process(processCartDto);
    const expectedResult: ProcessCartResponse = {
      items: [
        {
          id: 1,
          title: 'Back to the Future 1',
          unitPrice: 15,
          finalPrice: 15,
          quantity: 1,
        },
      ],
      total: 15,
    };
    expect(result).toEqual(expectedResult);
  });

  it('should return a cart with two saga dvds with 10% discount', async () => {
    const processCartDto: ProcessCartDtoRequest = {
      items: [
        {
          id: 1,
        },
        {
          id: 2,
        },
      ],
    };
    const result = await controller.process(processCartDto);
    const expectedResult: ProcessCartResponse = {
      items: [
        {
          id: 1,
          title: 'Back to the Future 1',
          unitPrice: 15,
          finalPrice: 13.5,
          discount: {
            discountRatePercent: 10,
            discountAmount: 1.5,
          },
          quantity: 1,
        },
        {
          id: 2,
          title: 'Back to the Future 2',
          unitPrice: 15,
          finalPrice: 13.5,
          discount: {
            discountRatePercent: 10,
            discountAmount: 1.5,
          },
          quantity: 1,
        },
      ],
      total: 27,
      totalDiscount: 3,
    };

    expect(result).toEqual(expectedResult);
  });

  it('should return a cart with three saga dvds with 20% discount', async () => {
    const processCartDto: ProcessCartDtoRequest = {
      items: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
      ],
    };
    const result = await controller.process(processCartDto);
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

  it('should return a cart with four saga dvds with 20% discount', async () => {
    const processCartDto: ProcessCartDtoRequest = {
      items: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 3,
        },
        {
          id: 4,
        },
      ],
    };
    const result = await controller.process(processCartDto);
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
        {
          id: 4,
          title: 'Back to the Future 4',
          unitPrice: 15,
          finalPrice: 12,
          discount: {
            discountRatePercent: 20,
            discountAmount: 3,
          },
          quantity: 1,
        },
      ],
      total: 48,
      totalDiscount: 12,
    };
    expect(result).toEqual(expectedResult);
  });

  it('should return a cart with one saga dvd and one regular dvd with no discount', async () => {
    const processCartDto: ProcessCartDtoRequest = {
      items: [
        {
          id: 1,
        },
        {
          id: 5,
        },
      ],
    };
    const result = await controller.process(processCartDto);
    const expectedResult: ProcessCartResponse = {
      items: [
        {
          id: 1,
          title: 'Back to the Future 1',
          unitPrice: 15,
          finalPrice: 15,
          quantity: 1,
        },
        {
          id: 5,
          title: 'Nope',
          unitPrice: 20,
          finalPrice: 20,
          quantity: 1,
        },
      ],
      total: 35,
    };
    expect(result).toEqual(expectedResult);
  });

  it('should return a cart with two saga dvds and one regular dvd with 10% discount on saga dvds', async () => {
    const processCartDto: ProcessCartDtoRequest = {
      items: [
        {
          id: 1,
        },
        {
          id: 2,
        },
        {
          id: 5,
        },
      ],
    };
    const result = await controller.process(processCartDto);
    const expectedResult: ProcessCartResponse = {
      items: [
        {
          id: 1,
          title: 'Back to the Future 1',
          unitPrice: 15,
          finalPrice: 13.5,
          discount: {
            discountRatePercent: 10,
            discountAmount: 1.5,
          },
          quantity: 1,
        },
        {
          id: 2,
          title: 'Back to the Future 2',
          unitPrice: 15,
          finalPrice: 13.5,
          discount: {
            discountRatePercent: 10,
            discountAmount: 1.5,
          },
          quantity: 1,
        },
        {
          id: 5,
          title: 'Nope',
          unitPrice: 20,
          finalPrice: 20,
          quantity: 1,
        },
      ],
      total: 47,
      totalDiscount: 3,
    };
    expect(result).toEqual(expectedResult);
  });

  it('should handle discounts with quantity greater than 1', async () => {
    const processCartDto: ProcessCartDtoRequest = {
      items: [
        {
          id: 1,
          quantity: 1,
        },
        {
          id: 2,
          quantity: 1,
        },
        {
          id: 3,
          quantity: 2,
        },
      ],
    };
    const result = await controller.process(processCartDto);
    const expectedResult: ProcessCartResponse = {
      items: [
        {
          id: 1,
          title: 'Back to the Future 1',
          unitPrice: 15,
          finalPrice: 12,
          quantity: 1,
          discount: {
            discountRatePercent: 20,
            discountAmount: 3,
          },
        },
        {
          id: 2,
          title: 'Back to the Future 2',
          unitPrice: 15,
          finalPrice: 12,
          quantity: 1,
          discount: {
            discountRatePercent: 20,
            discountAmount: 3,
          },
        },
        {
          id: 3,
          title: 'Back to the Future 3',
          unitPrice: 15,
          finalPrice: 12,
          quantity: 2,
          discount: {
            discountRatePercent: 20,
            discountAmount: 3,
          },
        },
      ],
      total: 48,
      totalDiscount: 12,
    };
    expect(result).toEqual(expectedResult);
  });

  it('should throw an error if a product is not found', async () => {
    const processCartDto: ProcessCartDtoRequest = {
      items: [
        {
          id: 1,
        },
        {
          id: 999,
        },
      ],
    };
    await expect(controller.process(processCartDto)).rejects.toThrow(
      NotFoundException,
    );
  });
});
