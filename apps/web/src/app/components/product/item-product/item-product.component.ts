import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IProduct } from '@gstore/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { ItemReviewComponent } from '../item-review/item-review.component';
import { CartService } from '../../../services/cart.service';
@Component({
  selector: 'app-item-product',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule, ItemReviewComponent],
  templateUrl: './item-product.component.html',
})
export class ItemProductComponent {
  @Input() product!: IProduct;
  icons = {
    cart: faCartShopping,
  };
  constructor(private readonly cartService: CartService) {}
  addToCart(product: IProduct) {
    console.log('Adding product to cart: ', product);
    this.cartService.addItem(product);
  }
}
