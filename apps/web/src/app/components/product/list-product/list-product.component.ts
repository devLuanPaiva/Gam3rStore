import { IProduct } from '@gstore/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../services/product.service';
import { ItemProductComponent } from '../item-product/item-product.component';
@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [CommonModule, ItemProductComponent],
  providers: [ProductService],
  templateUrl: './list-product.component.html',
})
export class ListProductComponent {
  products: IProduct[] = [];

  constructor(private readonly productService: ProductService) {
    this.productService.products$.subscribe((products) => {
      this.products = products;
    });
  }
}
