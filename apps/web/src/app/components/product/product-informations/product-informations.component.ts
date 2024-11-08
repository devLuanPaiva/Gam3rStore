import { Component, Input } from '@angular/core';
import { IProduct } from '@gstore/core';
import { ProductSpecificationsComponent } from '../product-specifications/product-specifications.component';
@Component({
  selector: 'app-product-informations',
  standalone: true,
  imports: [ProductSpecificationsComponent],
  template: `
    <article
      class="w-full flex flex-col py-3 sm:flex-row items-center justify-around bg-[#0e001d] rounded-xl space-y-5 sm:space-x-0"
    >
      <figure class="w-44 h-36 sm:h-36 md:h-auto sm:w-1/2 relative flex items-center justify-center">
        <img [src]="product.image" [alt]="product.name"
            class="object-contain" />
      </figure>
      <app-product-specifications [product]="product" />
    </article>
  `,
})
export class ProductInformationsComponent {
  @Input() product!: IProduct;
}
