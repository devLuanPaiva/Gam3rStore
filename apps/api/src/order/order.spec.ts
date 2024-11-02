import { Test, TestingModule } from '@nestjs/testing';
import { OrderController } from './order.controller';
import { OrderView } from './order.view';
import { mockProducts } from '../mocks/product.mock';
import { EOrderStatus, EPaymentMethod, IOder, IProduct } from '@gstore/core';

describe('OrderController', () => {
  let orderController: OrderController;
  let orderView: OrderView;

  const mockOrder: IOder = {
    id: 1,
    date: new Date(),
    status: EOrderStatus.RECEIVED,
    paymentMethod: EPaymentMethod.CARD,
    totalAmount: 100,
    delivery: {
      id: 1,
      name: 'john',
      email: 'john@example.com',
      street: '123 Main St',
      city: 'San Francisco',
      complement: 'CA',
      state: '3',
      cpf: '3123',
    },
    items: mockProducts.map((product: IProduct) => ({
      id: product.id,
      product,
      unitPrice: product.basePrice,
      quantity: 2,
    })),
  };

  const mockOrderView = {
    saveOrder: jest.fn(),
    getAllOrders: jest.fn().mockResolvedValue([mockOrder]),
    getOrderById: jest.fn().mockResolvedValue(mockOrder),
    deleteOrder: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrderController],
      providers: [
        {
          provide: OrderView,
          useValue: mockOrderView,
        },
      ],
    }).compile();

    orderController = module.get<OrderController>(OrderController);
    orderView = module.get<OrderView>(OrderView);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  it('shoud be defined', () => {
    expect(orderController).toBeDefined();
    expect(orderView).toBeDefined();
  });
  it('should call saveOrder with correct data', async () => {
    await orderController.createOrder(mockOrder);
    expect(orderView.saveOrder).toHaveBeenCalledWith(mockOrder);
    expect(orderView.saveOrder).toHaveBeenCalledTimes(1);
  });
});
