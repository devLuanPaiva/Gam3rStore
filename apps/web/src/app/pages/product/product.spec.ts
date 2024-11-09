import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ProductComponent } from './product.component';
import { ProductService } from '../../services/product.service';
import { ProductTitleComponent } from '../../components/product/product-title/product-title.component';
import { ProductInformationsComponent } from '../../components/product/product-informations/product-informations.component';
import { PurchaseBannerComponent } from '../../components/product/purchase-banner/purchase-banner.component';
import { MeterOfPriceComponent } from '../../components/product/meter-of-price/meter-of-price.component';
import { UserAvaliationsComponent } from '../../components/product/user-avaliations/user-avaliations.component';
import { ExpertAssessmentComponent } from '../../components/product/expert-assessment/expert-assessment.component';
import { ProductNotFoundComponent } from '../../components/product/product-not-found/product-not-found.component';
import { IProduct } from '@gstore/core';
import { mockProducts } from '../../services/product.mock';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let productService: jasmine.SpyObj<ProductService>;

  beforeEach(waitForAsync(() => {
    const productServiceSpy = jasmine.createSpyObj('ProductService', [
      'productById',
    ]);
    productServiceSpy.productById.and.returnValue(of(mockProducts[0])); 
    TestBed.configureTestingModule({
      imports: [
        ProductComponent,
        ProductTitleComponent,
        ProductInformationsComponent,
        PurchaseBannerComponent,
        MeterOfPriceComponent,
        UserAvaliationsComponent,
        ExpertAssessmentComponent,
        ProductNotFoundComponent,
      ],
      declarations: [],
      providers: [
        { provide: ProductService, useValue: productServiceSpy },
        {
          provide: ActivatedRoute,
          useValue: {
            paramMap: of({ get: (key: string) => '1' }),
          },
        },
      ],
    }).compileComponents();
    productService = TestBed.inject(
      ProductService,
    ) as jasmine.SpyObj<ProductService>;
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should call productService.productById on init and set product$', waitForAsync(() => {
    expect(productService.productById).toHaveBeenCalledOnceWith(1); 
  }));

});
