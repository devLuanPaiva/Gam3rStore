import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListProductComponent } from './list-product.component';
import { ProductService } from '../../../services/product.service';
import { By } from '@angular/platform-browser';
import { MockProductsService } from '../../../services/product.mock';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('ListProductComponent', () => {
  let component: ListProductComponent;
  let fixture: ComponentFixture<ListProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListProductComponent],
      providers: [
        { provide: ProductService, useClass: MockProductsService },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '123' }),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ListProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a component', () => {
    expect(component).toBeTruthy();
  });

  it('should show the product list correctly', () => {
    fixture.detectChanges();
    const productElements = fixture.debugElement.queryAll(
      By.css('app-item-product'),
    );
    expect(productElements.length).toBe(2);
  });

  it('should show the message "Nenhum produto encontrado" when there arent products', () => {
    component.products = [];
    fixture.detectChanges();

    const noProductsComponent = fixture.debugElement.query(
      By.css('app-product-not-found'),
    );
    expect(noProductsComponent).toBeTruthy();
    expect(noProductsComponent.nativeElement.textContent).toContain(
      'Nenhum produto encontrado.',
    );
  });
});
