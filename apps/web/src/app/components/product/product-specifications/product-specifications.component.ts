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
    <article class="flex-1 flex flex-col gap-1">
      <div class="flex mb-3 items-center justify-center">
        <app-tags
          [label]="product.specifications.highlight"
          [icon]="faTag"
          [outlined]="true"
        />
      </div>
      <ul *ngFor="let key of productSpecifications" class="flex gap-1">
        <span class="p-2 w-2/5 flex items-center text-center justify-center bg-white/5 rounded">{{ key }}</span>
        <span class="p-2 w-2/5 flex items-center text-center justify-center bg-white/5 rounded"
          >{{ product.specifications[key] }}
        </span>
      </ul>
    </article>
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
