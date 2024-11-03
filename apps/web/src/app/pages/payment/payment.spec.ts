import { of } from 'rxjs';
import { EPaymentMethod, IOrderDelivery } from '@gstore/core';
import { PaymentComponent } from './payment.component';
import { CartService } from '../../services/cart.service';
import { PaymentService } from '../../services/payment.service';
import { TestBed, ComponentFixture } from '@angular/core/testing';

describe('PaymentComponent', () => {
  let component: PaymentComponent;
  let fixture: ComponentFixture<PaymentComponent>;
  let cartService: jasmine.SpyObj<CartService>;
  let paymentService: jasmine.SpyObj<PaymentService>;

  beforeEach(() => {
    const paymentServiceMock = jasmine.createSpyObj('PaymentService', [
      'updateMethodPayment',
      'updateDeliver',
      'finalizePurchase',
    ]);
    const cartServiceMock = jasmine.createSpyObj('CartService', [], {
      installment: of({}),
      totalPrice: 100,
      fullPrice: 150,
      totalQuantity: 3,
    });

    TestBed.configureTestingModule({
      imports: [PaymentComponent],
      providers: [
        { provide: PaymentService, useValue: paymentServiceMock },
        { provide: CartService, useValue: cartServiceMock },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(PaymentComponent);
    component = fixture.componentInstance;
    cartService = TestBed.inject(CartService) as jasmine.SpyObj<CartService>;
    paymentService = TestBed.inject(
      PaymentService,
    ) as jasmine.SpyObj<PaymentService>;
  });
  it('should initialize values correctly', () => {
    component.ngOnInit();
    expect(component.installment).toEqual(cartService.installment);
    expect(component.totalPrice).toBe(cartService.totalPrice);
    expect(component.fullPrice).toBe(cartService.fullPrice);
    expect(component.totalQuantity).toBe(cartService.totalQuantity);
  });
  it('should update methodPayment on changeMethodPayment', () => {
    component.ngOnInit();
    component.changeMethodPayment(EPaymentMethod.BOLETO);
    expect(component.methodPayment).toBe(EPaymentMethod.BOLETO);
    expect(paymentService.updateMethodPayment).toHaveBeenCalledWith(
      EPaymentMethod.BOLETO,
    );
  });
  it('should update delivery on changeDelivery', () => {
    component.ngOnInit();
    const deliveryInfo: IOrderDelivery = {
      id: 1,
      name: 'João Silva',
      email: 'joao.silva@example.com',
      cpf: '123.456.789-00',
      street: 'Rua das Flores, 123',
      complement: 'Apt 202',
      city: 'São Paulo',
      state: 'SP',
    };
    component.changeDelivery(deliveryInfo);
    expect(component.delivery).toEqual(deliveryInfo);
    expect(paymentService.updateDeliver).toHaveBeenCalledWith(deliveryInfo);
  });
});
