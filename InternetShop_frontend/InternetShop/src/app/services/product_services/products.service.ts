import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ProductModel } from 'src/app/models/product-models/product-model';
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

  getProduct(id: string):Observable<ProductModel>{
    return this.http.get<ProductModel>(this.baseApiUrl + 'Product/' + id);  
  }

  updateProduct(id: string, updateProduct: ProductModel):Observable<ProductModel>{
    return this.http.put<ProductModel>(this.baseApiUrl + 'Product/' + id, updateProduct); 
  }

  deleteProduct(id: string):Observable<ProductModel>{
    return this.http.delete<ProductModel>(this.baseApiUrl + 'Product/' + id); 
  }
}
