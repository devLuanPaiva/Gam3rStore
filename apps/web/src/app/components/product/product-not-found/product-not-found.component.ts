import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { faSearchMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-not-found',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule, RouterModule],
  templateUrl: './product-not-found.component.html',
})
export class ProductNotFoundComponent {
  @Input() back?: boolean;
  faSearchMinus = faSearchMinus;
}
