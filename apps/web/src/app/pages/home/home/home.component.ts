import { Component } from '@angular/core';
import { ListProductComponent } from '../../../components/product/list-product/list-product.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ListProductComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {

}
