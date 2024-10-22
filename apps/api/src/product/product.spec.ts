import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { IProduct } from '@gstore/core';
import { mockProducts } from '../mocks/product.mock';

describe('ProductController', () => {
  let controller: ProductController;
  //   let service: ProductService;

  const mockProductService = {
    save: jest.fn(),
    getProducts: jest.fn(),
    getById: jest.fn(),
    deleteById: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [ProductService],
    })
      .overrideProvider(ProductService)
      .useValue(mockProductService)
      .compile();
    controller = module.get<ProductController>(ProductController);
    // service = module.get<ProductService>(ProductService);
  });

  it('should save a product', async () => {
    const product: IProduct = mockProducts[0];
    await controller.save(product);
    expect(mockProductService.save).toHaveBeenCalledWith(product);
  });
});
