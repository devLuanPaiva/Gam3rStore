import { Component, OnInit } from '@angular/core';
import { ICartItem, IProduct } from '@gstore/core';
import { CartService } from '../../services/cart.service';
import { ItemCartComponent } from '../../components/cart/item-cart/item-cart.component';
import { CommonModule } from '@angular/common';
import { EmptyCartComponent } from '../../components/cart/empty-cart/empty-cart.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [ItemCartComponent, CommonModule, EmptyCartComponent],
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  items: ICartItem[] = [];
  totalItems: number = 0;
  totalPrice: number = 0;
  constructor(private readonly cartService: CartService) {}

  ngOnInit(): void {
    this.loadCartData();
  }
  private loadCartData(): void {
    this.cartService.cartItems$.subscribe((items) => {
      this.items = items;
      this.totalItems = this.cartService.totalQuantity;
      this.totalPrice = this.cartService.totalPrice;
    });
  }
  addItemToCart(product: IProduct) {
    this.cartService.addItem(product);
    this.loadCartData();
  }

  removeItemFromCart(product: IProduct) {
    this.cartService.removeItem(product);
    this.loadCartData();
  }

  removeProductFromCart(product: IProduct) {
    this.cartService.removeProduct(product);
    this.loadCartData();
  }

  trackByProductId(index: number, item: ICartItem): number {
    return item.product.id;
  }
}
