import {IProduct} from '@gstore/core'
import { Component, Input } from '@angular/core';
import { ItemReviewComponent } from '../item-review/item-review.component';

@Component({
  selector: 'app-user-avaliations',
  standalone: true,
  imports: [ItemReviewComponent],
  templateUrl: './user-avaliations.component.html',
})
export class UserAvaliationsComponent {
  @Input() product!: IProduct
}
