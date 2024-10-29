import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-empty-cart',
  standalone: true,
  imports: [FontAwesomeModule],
  template: `
    <figure
      class="flex-1 flex flex-col justify-center items-center text-violet-300 py-10"
    >
      <fa-icon [icon]="faShoppingCart" size="10x" class="text-violet-300" />
      <caption class="text-violet-300 font-light mt-2 text-center">O carrinho está vazio.</caption>
    </figure>
  `,
})
export class EmptyCartComponent {
  faShoppingCart = faShoppingCart;
}
