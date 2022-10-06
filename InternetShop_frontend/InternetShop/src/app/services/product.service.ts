import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl: string = "https://localhost:7122/api";

  constructor(private http: HttpClient) { }

  public getProduct() : Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/Product/getProducts`);
  }

  public updateProduct(product: Product): Observable<Product[]> {
    return this.http.put<Product[]>(
      `${this.baseUrl}/Product/updateProducts`,
      product
    );
  }

  public createProduct(product: Product): Observable<Product[]> {
    return this.http.post<Product[]>(
      `${this.baseUrl}/Product/addProducts`,
      product
    );
  }

  public deleteProduct(product: Product): Observable<Product[]> {
    return this.http.delete<Product[]>(
      `${this.baseUrl}/Product${product.id}`,
    );
  }
}
