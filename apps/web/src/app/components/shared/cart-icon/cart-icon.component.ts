import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  Input,
  Inject,
  PLATFORM_ID,
  OnInit,
  OnDestroy,
} from '@angular/core';
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
export class CartIconComponent implements OnInit, OnDestroy {
  @Input() amountItems: number = 0;
  faShoppingCart = faShoppingCart;
  isSmallScreen = false;

  constructor(@Inject(PLATFORM_ID) private readonly platformId: Object) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.isSmallScreen = window.innerWidth < 640;
      window.addEventListener('resize', this.checkScreenSize);
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('resize', this.checkScreenSize);
    }
  }

  private readonly checkScreenSize = () => {
    this.isSmallScreen = window.innerWidth < 640;
  };
}
