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
      class="flex justify-center items-center rounded-full bg-[#0e001d] relative w-10 h-10 sm:w-14 sm:h-14"
    >
      <fa-icon
        [icon]="faShoppingCart"
        [ngClass]="{ 'text-lg': isSmallScreen, 'text-2xl': !isSmallScreen }"
        class="text-white"
      />
      <div
        class="absolute top-1 right-1 bg-pink-500 text-white text-xs font-semibold rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center"
      >
        {{ amountItems }}
      </div>
    </figure>
  `,
})
export class CartIconComponent {
  @Input() amountItems: number = 0;
  faShoppingCart = faShoppingCart;
  isSmallScreen = window.innerWidth < 640;

  constructor() {
    window.addEventListener('resize', () => {
      this.isSmallScreen = window.innerWidth < 640;
    });
  }
}
