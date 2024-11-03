import { Component } from '@angular/core';
import { EPaymentMethod, IOrderDelivery } from '@gstore/core';
import { PaymentService } from '../../services/payment.service';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from '../../components/order/summary/summary.component';
import { FormDeliveryComponent } from '../../components/order/form-delivery/form-delivery.component';
import { MethodPaymentComponent } from '../../components/order/method-payment/method-payment.component';
@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [
    CommonModule,
    SummaryComponent,
    FormDeliveryComponent,
    MethodPaymentComponent,
  ],
  templateUrl: './payment.component.html',
})
export class PaymentComponent {
  methodPayment: EPaymentMethod = EPaymentMethod.PIX;
  delivery: Partial<IOrderDelivery> = {};
  installment: any;
  totalQuantity: number = 0;
  fullPrice: number = 0;
  totalPrice: number = 0;
  constructor(
    private readonly paymentService: PaymentService,
    private readonly cartService: CartService,
  ) {}
  ngOnInit() {
    this.installment = this.cartService.installment;
    this.totalPrice = this.cartService.totalPrice;
    this.fullPrice = this.cartService.fullPrice;
    this.totalQuantity = this.cartService.totalQuantity;
  }

  changeMethodPayment(method: EPaymentMethod) {
    this.methodPayment = method;
    this.paymentService.updateMethodPayment(method);
  }
  changeDelivery(delivery: Partial<IOrderDelivery>) {
    this.delivery = delivery;
    this.paymentService.updateDeliver(delivery);
  }
  finalizePurchase() {
    this.paymentService.finalizePurchase();
  }
}
