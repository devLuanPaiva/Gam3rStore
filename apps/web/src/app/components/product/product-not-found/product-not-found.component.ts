import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearchMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-not-found',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, RouterModule],
  template: `
    <section
      class="flex-1 flex flex-col h-80 justify-center items-center text-violet-300"
    >
      <fa-icon [icon]="faSearchMinus" size="8x" />
      <h2 class="text-violet-300 font-light mt-2">Nenhum produto encontrado.</h2>

      <a
        *ngIf="!{ back }"
        [routerLink]="['/']"
        class="button bg-violet-700 text-white mt-5"
      >
        Voltar
      </a>
    </section>
  `,
})
export class ProductNotFoundComponent {
  @Input() back?: boolean;
  faSearchMinus = faSearchMinus;
}
