import { IProduct } from '@gstore/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../services/product.service';
import { ItemProductComponent } from '../item-product/item-product.component';
import { ProductNotFoundComponent } from '../product-not-found/product-not-found.component';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [CommonModule, ItemProductComponent, ProductNotFoundComponent],
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
