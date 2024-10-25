import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductService } from '../../../services/product.service';
import { FilterProductComponent } from './filter-product.component';
import { MockProductsService } from '../../../services/product.mock';

describe('FilterProductComponent', () => {
  let component: FilterProductComponent;
  let fixture: ComponentFixture<FilterProductComponent>;
  let productService: ProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterProductComponent, FormsModule],
      providers: [{ provide: ProductService, useClass: MockProductsService }],
    }).compileComponents();
    fixture = TestBed.createComponent(FilterProductComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });
});
