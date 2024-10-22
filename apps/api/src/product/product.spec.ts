import { Test, TestingModule } from '@nestjs/testing';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { IProduct } from '@gstore/core';
import { mockProducts } from '../mocks/product.mock';

describe('ProductController', () => {
  let controller: ProductController;
  const mockProductService = {
    save: jest.fn() as jest.Mock<Promise<void>>,
    getProducts: jest.fn() as jest.Mock<Promise<IProduct[]>>,
    getById: jest.fn() as jest.Mock<Promise<IProduct | null>>,
    deleteById: jest.fn() as jest.Mock<Promise<void>>,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [
        {
          provide: ProductService,
          useValue: mockProductService,
        },
      ],
    }).compile();

    controller = module.get<ProductController>(ProductController);
  });

  it('should save a product', async () => {
    const product: IProduct = mockProducts[0];
    await controller.save(product);
    expect(mockProductService.save).toHaveBeenCalledWith(product);
  });

  it('should return all products', async () => {
    const products: IProduct[] = mockProducts;
    mockProductService.getProducts.mockResolvedValue(products);
    expect(await controller.getAll()).toBe(products);
  });

  it('should return a product by id', async () => {
    const product: IProduct | null = mockProducts[0];
    mockProductService.getById.mockResolvedValue(product);
    expect(await controller.getById(1)).toBe(product);
  });
});
