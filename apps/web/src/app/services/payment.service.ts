import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { CartService } from './cart.service';
import { LocalStorageService } from './local-storage.service';
import {
  IOrderItem,
  IOder,
  IOrderDelivery,
  EPaymentMethod,
  EOrderStatus,
  ICartItem,
} from '@gstore/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  private readonly paymentMethodSubject = new BehaviorSubject<EPaymentMethod>(
    EPaymentMethod.PIX,
  );
  paymentMethod$ = this.paymentMethodSubject.asObservable();

  private readonly deliverySubject = new BehaviorSubject<
    Partial<IOrderDelivery>
  >({});
  delivery$ = this.deliverySubject.asObservable();

  constructor(
    private readonly localStorageService: LocalStorageService,
    private readonly cartService: CartService,
    private readonly apiService: ApiService,
    private readonly router: Router,
  ) {
    this.loadInitialData();
  }

  updateMethodPayment(methodoPayment: EPaymentMethod) {
    this.paymentMethodSubject.next(methodoPayment);
    this.localStorageService.saveItem('methodPayment', methodoPayment);
  }
  updateDeliver(delivey: Partial<IOrderDelivery>) {
    this.deliverySubject.next(delivey);
    this.localStorageService.saveItem('delivery', delivey);
  }
  finalizePurchase() {
    const order: Partial<IOder> = {
      date: new Date(),
      paymentMethod: this.paymentMethodSubject.value,
      totalAmount: this.cartService.totalPrice,
      delivery: this.deliverySubject.value as IOrderDelivery,
      status: EOrderStatus.RECEIVED,
      items: this.cartService.items.map(
        (item: ICartItem) =>
          ({
            product: item.product,
            quantity: item.quantity,
            unitPrice: item.product.promotionalPrice,
          }) as IOrderItem,
      ),
    };
    this.apiService.httpPost('orders', order).subscribe({
      next: () => {
        this.cartService.clearCart();
        this.router.navigate(['/cart/success']);
      },
      error: (error) => {
        console.error('Error finalizing purchase:', error);
      },
    });
  }
  private loadInitialData() {
    const delivery = this.localStorageService.getItem('delivery');
    const methodoPayment: EPaymentMethod | null =
      this.localStorageService.getItem('methodPayment');
    if (delivery) this.deliverySubject.next(delivery);
    if (methodoPayment) this.paymentMethodSubject.next(methodoPayment);
  }
}
