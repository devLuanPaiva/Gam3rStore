import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { IProduct } from '@gstore/core';

@Component({
  selector: 'app-expert-assessment',
  standalone: true,
  imports: [],
  templateUrl: './expert-assessment.component.html',
})
export class ExpertAssessmentComponent implements OnInit {
  @Input() product!: IProduct;
  sanitizedVideoReviewUrl!: SafeResourceUrl;

  constructor(private readonly sanitizer: DomSanitizer) {}

  ngOnInit() {
    if (this.product?.videoReview) {
      this.sanitizedVideoReviewUrl =
        this.sanitizer.bypassSecurityTrustResourceUrl(this.product.videoReview);
    }
  }
}
