import { Component } from '@angular/core';
import { ListProductComponent } from '../../../components/product/list-product/list-product.component';
import { FilterProductComponent } from '../../../components/product/filter-product/filter-product.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ListProductComponent, FilterProductComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {

}
