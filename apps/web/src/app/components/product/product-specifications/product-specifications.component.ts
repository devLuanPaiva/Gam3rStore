import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IProduct } from '@gstore/core';
import { TagsComponent } from '../../shared/tags/tags.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-product-specifications',
  standalone: true,
  imports: [CommonModule, TagsComponent, FontAwesomeModule],
  template: `
    <section class="flex flex-col">
      <div class="flex w-full items-center justify-center mb-2 sm:mb-3">
        <app-tags
          [label]="product.specifications.highlight"
          [icon]="faTag"
          [outlined]="true"
        />
      </div>
      <ul
        *ngFor="let key of productSpecifications"
        class="flex w-full gap-1 sm:gap-2 mb-1 sm:mb-2"
      >
        <span
          class="p-2 w-1/2  items-center text-center justify-center bg-white/5 rounded"
          >{{ key }}</span
        >
        <span
          class="p-2 w-1/2  items-center text-center justify-center bg-white/5 rounded"
          >{{ product.specifications[key] }}
        </span>
      </ul>
    </section>
  `,
})
export class ProductSpecificationsComponent {
  @Input() product!: IProduct;
  faTag = faTag;
  get productSpecifications() {
    return this.product.specifications
      ? Object.keys(this.product.specifications).filter(
          (k) => k !== 'highlight',
        )
      : [];
  }
}
