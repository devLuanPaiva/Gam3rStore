import { Component, Input } from '@angular/core';
import { IProduct } from '@gstore/core';
import { ProductSpecificationsComponent } from '../product-specifications/product-specifications.component';
@Component({
  selector: 'app-product-informations',
  standalone: true,
  imports: [ProductSpecificationsComponent],
  template: `
    <section
      class="flex items-center bg-[#0e001d] rounded-xl"
    >
    <figure class="w-2/3  relative flex items-center justify-center">
        <img [src]="product.image" [alt]="product.name"
            class="object-contain max-w-full max-h-full" />
    </figure>
      <app-product-specifications [product]="product" />
    </section>
  `,
})
export class ProductInformationsComponent {
  @Input() product!: IProduct;
}
