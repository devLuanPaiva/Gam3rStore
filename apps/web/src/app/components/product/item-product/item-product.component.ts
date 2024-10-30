import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IProduct, IInstallment } from '@gstore/core';
import { CartService } from '../../../services/cart.service';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ItemReviewComponent } from '../item-review/item-review.component';
import { InstallmentService } from '../../../services/installment.service';

@Component({
  selector: 'app-item-product',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule, ItemReviewComponent],
  templateUrl: './item-product.component.html',
})
export class ItemProductComponent implements OnChanges {
  @Input() product!: IProduct;
  installmentDetails!: IInstallment;
  icons = {
    cart: faCartShopping,
  };

  constructor(
    private readonly cartService: CartService,
    private readonly installmentService: InstallmentService,
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['product'] && this.product?.promotionalPrice) {
      this.calculateInstallments();
    }
  }

  addToCart(product: IProduct) {
    this.cartService.addItem(product);
  }

  calculateInstallments() {
    if (this.product.promotionalPrice) {
      this.installmentDetails = this.installmentService.calculateInstallment(
        this.product.promotionalPrice,
        12,
      );
    }
  }
}
