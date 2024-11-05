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
      <div class="flex mb-3">
        <app-tags
          [label]="product.specifications.highlight"
          [icon]="faTag"
          [outlined]="true"
          ]
        />
        <ul *ngFor="let key of productSpecifications">
          <li class="flex gap-1 list-none">
            <span class="p-2 w-1/3 bg-white/5 rounded">{{ key }}</span>
            <span class="p-2 w-1/3 bg-white/5 rounded"
              >{{ product.specifications[key] }}
            </span>
          </li>
        </ul>
      </div>
    </article>
  `,
})
export class ProductSpecificationsComponent {
  @Input() product!: IProduct;
  faTag = faTag;
  get productSpecifications() {
    return Object.keys(this.product.specifications || {}).filter(
      (key) => key !== 'highlight',
    );
  }
}
