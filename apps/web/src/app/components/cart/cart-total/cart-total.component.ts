import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-cart-total',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, RouterModule],
  templateUrl: './cart-total.component.html',
})
export class CartTotalComponent {
  @Input() itemCount!: number;
  @Input() totalPrice!: number;
  faShoppingCart = faShoppingCart
}
