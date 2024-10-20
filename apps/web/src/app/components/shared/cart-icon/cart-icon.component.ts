import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart-icon',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './cart-icon.component.html',
})
export class CartIconComponent {
  @Input() amountItems: number = 0; 
  faShoppingCart = faShoppingCart; 
}
