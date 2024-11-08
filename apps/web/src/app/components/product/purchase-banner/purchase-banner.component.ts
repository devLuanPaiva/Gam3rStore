import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IInstallment, IProduct } from '@gstore/core';
import { CartService } from '../../../services/cart.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCreditCard,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { InstallmentService } from '../../../services/installment.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-purchase-banner',
  standalone: true,
  imports: [RouterModule, FontAwesomeModule, CommonModule],
  templateUrl: './purchase-banner.component.html',
})
export class PurchaseBannerComponent implements OnChanges {
  @Input() product!: IProduct;
  installmentDetails!: IInstallment;
  icons = {
    creditCard: faCreditCard,
    cartShopping: faShoppingCart,
  };
  constructor(
    private readonly cartService: CartService,
    private readonly installmentService: InstallmentService,
  ) {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes['product'] && this.product.promotionalPrice) {
      this.calculateInstallments();
    }
  }
  calculateInstallments() {
    if (this.product.promotionalPrice) {
      this.installmentDetails = this.installmentService.calculateInstallment(
        this.product.promotionalPrice,
        12,
      );
    }
  }
  addItem(product: IProduct) {
    this.cartService.addItem(product);
  }
}
