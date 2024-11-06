import { Component, Input } from '@angular/core';
import { IProduct } from '@gstore/core';
@Component({
  selector: 'app-expert-assessment',
  standalone: true,
  imports: [],
  templateUrl: './expert-assessment.component.html',
})
export class ExpertAssessmentComponent {
  @Input() product!: IProduct;
}
