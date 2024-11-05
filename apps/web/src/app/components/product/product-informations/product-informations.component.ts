import { Component, Input } from '@angular/core';
import { IProduct } from '@gstore/core';
import { ProductSpecificationsComponent } from '../product-specifications/product-specifications.component';
@Component({
  selector: 'app-product-informations',
  standalone: true,
  imports: [ProductSpecificationsComponent],
  template: `
    <section
      class="flex flex-col sm:flex-row items-center bg-[#0e001d] rounded-xl p-5 "
    >
      <figure class="flex-1 relative flex justify-center h-60 sm:h-96">
        <img
          [src]="product.image"
          [alt]="product.name"
          class="object-cover p-7"
          fill
        />
      </figure>
      <app-product-specifications [product]="product" />
    </section>
  `,
})
export class ProductInformationsComponent {
  @Input() product!: IProduct;
}
