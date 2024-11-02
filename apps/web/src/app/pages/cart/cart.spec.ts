import { of } from 'rxjs';
import { CartComponent } from './cart.component';
import { ICartItem, IProduct } from '@gstore/core';
import { CartService } from '../../services/cart.service';
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
  it('should load cart data on init', () => {
    expect(component).toBeTruthy();
  });
});
