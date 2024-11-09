import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest, map } from 'rxjs';
import { ApiService } from './api.service';
import { FilterProducts, IProduct } from '@gstore/core';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly productsSubject = new BehaviorSubject<IProduct[]>([]);
  private readonly searchSubject = new BehaviorSubject<string>('');

  constructor(private readonly apiService: ApiService) {
    this.loadProducts();
  }

  loadProducts(): void {
    this.apiService
      .httpGet('products/getAll')
      .subscribe((products: IProduct[]) => {
        this.productsSubject.next(products ?? []);
      });
  }
  get products$(): Observable<IProduct[]> {
    return combineLatest([this.productsSubject, this.searchSubject]).pipe(
      map(([products, search]) => {
        if (!search) return products;
        return new FilterProducts().execute(search, products);
      }),
    );
  }
  setSearch(search: string): void {
    this.searchSubject.next(search);
  }
  productById(id: number): Observable<IProduct | null> {
    return this.apiService
      .httpGet(`products/getById/${id}`)
      .pipe(map((product) => product ?? null));
  }
}
