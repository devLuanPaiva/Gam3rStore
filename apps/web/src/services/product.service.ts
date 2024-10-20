import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
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
      .httpGet('/products/getAll')
      .subscribe((products: IProduct[]) => {
        this.productsSubject.next(products ?? []);
      });
  }
  get products$(): Observable<IProduct[]> {
    return this.productsSubject.asObservable().pipe(
      map((products) => {
        const search = this.searchSubject.getValue();
        if (!search) return products;
        return new FilterProducts().execute(search, products);
      }),
    );
  }
  setSearch(search: string): void {
    this.searchSubject.asObservable();
  }
  productById(id: number): IProduct | null {
    const products = this.productsSubject.getValue();
    return products.find((product) => product.id === id) ?? null;
  }
}
