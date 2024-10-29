import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart-icon',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  template: `
    <figure
      class="flex justify-center items-center rounded-full w-14 h-14 bg-[#0e001d] relative"
    >
      <fa-icon [icon]="faShoppingCart" size="2x" class="text-white" />
      <div
        class="absolute top-2 right-2 bg-pink-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center"
      >
        {{ amountItems }}
      </div>
    </figure>
  `,
})
export class CartIconComponent {
  @Input() amountItems: number = 0;
  faShoppingCart = faShoppingCart;
}
