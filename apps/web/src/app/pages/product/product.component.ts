import { Observable } from 'rxjs';
import { IProduct } from '@gstore/core';
import { switchMap } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ProductTitleComponent } from '../../components/product/product-title/product-title.component';
import { ProductInformationsComponent } from '../../components/product/product-informations/product-informations.component';
import { MeterOfPriceComponent } from '../../components/product/meter-of-price/meter-of-price.component';
import { UserAvaliationsComponent } from '../../components/product/user-avaliations/user-avaliations.component';
import { ExpertAssessmentComponent } from '../../components/product/expert-assessment/expert-assessment.component';
import { ProductNotFoundComponent } from '../../components/product/product-not-found/product-not-found.component';
import { PurchaseBannerComponent } from "../../components/product/purchase-banner/purchase-banner.component";
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    ProductTitleComponent,
    ProductInformationsComponent,
    MeterOfPriceComponent,
    UserAvaliationsComponent,
    ExpertAssessmentComponent,
    ProductNotFoundComponent,
    PurchaseBannerComponent
],
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  product$!: Observable<IProduct | null>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly productService: ProductService,
  ) {}

  ngOnInit(): void {
    this.product$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const id = Number(params.get('id'));
        return this.productService.productById(id);
      }),
    );
  }
}
