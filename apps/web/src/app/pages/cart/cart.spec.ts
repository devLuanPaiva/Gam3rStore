import { of } from 'rxjs';
import { ICartItem } from '@gstore/core';
import { CartComponent } from './cart.component';
import { CartService } from '../../services/cart.service';
import { mockProducts } from '../../services/product.mock';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemCartComponent } from '../../components/cart/item-cart/item-cart.component';
import { CartTotalComponent } from '../../components/cart/cart-total/cart-total.component';
import { EmptyCartComponent } from '../../components/cart/empty-cart/empty-cart.component';
describe('CartTotalComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let cartService: jasmine.SpyObj<CartService>;

  beforeEach(async () => {
    const cartServiceSpy = jasmine.createSpyObj('CartService', [
      'addItem',
      'removeItem',
      'removeProduct',
      'cartItems$',
    ]);
    const mockCartItems: ICartItem[] = mockProducts.map((product) => ({
      product: product,
      quantity: Math.floor(Math.random() * 3) + 1,
    }));

    cartServiceSpy.cartItems$ = of(mockCartItems);
    await TestBed.configureTestingModule({
      imports: [
        CartComponent,
        ItemCartComponent,
        EmptyCartComponent,
        CartTotalComponent,
      ],

      providers: [{ provide: CartService, useValue: cartServiceSpy }],
    }).compileComponents();
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    cartService = TestBed.inject(CartService) as jasmine.SpyObj<CartService>;
  });

  it('should load cart data in init', () => {
    component.ngOnInit();
    cartService.cartItems$.subscribe((cartItems) => {
      expect(component.items.length).toBeGreaterThan(0);
      expect(component.items).toEqual(cartItems);
    });
  });
  it('should add an item to the cart', () => {
    const productToAdd = mockProducts[0];
    component.addItemToCart(productToAdd);
    expect(cartService.addItem).toHaveBeenCalledWith(productToAdd);
  });
  it('should remove an item from the cart', () => {
    const productToRemove = mockProducts[0];
    component.removeItemFromCart(productToRemove);
    expect(cartService.removeItem).toHaveBeenCalledWith(productToRemove);
  });
  it('should handle empty cart correctly', () => {
    cartService.cartItems$ = of([]);
    component.ngOnInit();
    expect(component.items.length).toBe(0);
  });
});
