import { Component, Input } from '@angular/core';
import { IProduct } from '@gstore/core';
@Component({
  selector: 'app-product-title',
  standalone: true,
  imports: [],
  template: `
    <section class="flex flex-col">
      <h1 class="text-lg sm:text-xl md:text-2xl lg:text-3xl">
        {{ product.name }}
      </h1>
      <p class="text-xs sm:text-sm md:text-lg font-light text-zinc-400 text-justify">
        {{ product.description }}
      </p>
    </section>
  `,
})
export class ProductTitleComponent {
  @Input() product!: IProduct;
}
