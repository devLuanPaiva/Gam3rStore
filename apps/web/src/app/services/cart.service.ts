import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import {
  CalculateInstallment,
  Cart,
  ICartItem,
  IInstallment,
  IProduct,
} from '@gstore/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = new Cart();
  private readonly cartItemsSubject = new BehaviorSubject<ICartItem[]>(this.cart.items);
  cartItems$ = this.cartItemsSubject.asObservable();
  constructor(private readonly localStorageService: LocalStorageService) {
    this.loadCart();
  }

  get items(): ICartItem[] {
    return this.cart.items;
  }

  get totalQuantity(): number {
    return this.cart.quantityItems;
  }

  get totalPrice(): number {
    return this.cart.totalPrice;
  }
  get fullPrice(): number {
    return this.cart.fullPrice;
  }
  get installment(): IInstallment {
    return new CalculateInstallment().execute(this.cart.totalPrice);
  }
  addItem(product: IProduct): void {
    this.updateCart(this.cart.addItem(product));
  }
  removeItem(product: IProduct): void {
    this.updateCart(this.cart.removeItem(product));
  }

  removeProduct(product: IProduct): void {
    this.updateCart(this.cart.removeProduct(product));
  }

  clearCart(): void {
    this.updateCart(this.cart.clear());
  }

  private loadCart(): void {
    const savedItems = this.localStorageService.getItem<ICartItem[]>('cart');
    if (savedItems) {
      this.cart = new Cart(savedItems);
      this.cartItemsSubject.next(this.cart.items);
    }
  }
  private updateCart(cart: Cart): void {
    this.cart = cart;
    this.localStorageService.saveItem('cart', this.cart.items);
    this.cartItemsSubject.next(this.cart.items);
  }
}
