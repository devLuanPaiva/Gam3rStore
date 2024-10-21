import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IProduct } from '@gstore/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'
@Component({
  selector: 'app-item-product',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './item-product.component.html',
})
export class ItemProductComponent {
  @Input() product!: IProduct;
  icons = {
    cart: faCartShopping,
  }
}
