import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-filter-product',
  standalone: true,
  imports: [FontAwesomeModule, FormsModule],
  templateUrl: './filter-product.component.html',
})
export class FilterProductComponent {
  @Input() className?: string;
  icons = {
    search: faSearch,
  };
  search: string = '';
  constructor(private readonly productService: ProductService) {
    this.productService.products$.subscribe(() => {
      this.search = '';
    });
  }
  setSearch(value: string): void {
    this.productService.setSearch(value);
  }
}
