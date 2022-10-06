import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ProductModel } from 'src/app/models/product-model';
import { AddProductModel } from 'src/app/models/product-models/add-product-model';


import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http: HttpClient) { }

  getAllProduct(): Observable<ProductModel[]>{
    return this.http.get<ProductModel[]>(this.baseApiUrl + 'Product/getProducts')
  }

  addProduct(addProductRequest: AddProductModel): Observable<AddProductModel>{
    return this.http.post<AddProductModel>(this.baseApiUrl + 'Product/addProducts', addProductRequest)
  }
}
