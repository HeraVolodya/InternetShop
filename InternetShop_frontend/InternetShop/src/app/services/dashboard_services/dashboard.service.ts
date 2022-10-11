import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductModel } from 'src/app/models/product-models/product-model';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  baseApiUrl: string = environment.baseApiUrl;
  constructor(private http : HttpClient) {}

  getListProduct(): Observable<ProductModel[]>{
    return this.http.get<ProductModel[]>(this.baseApiUrl + 'Product/getProducts')
    .pipe(map((res:ProductModel[]) => {
        return res;
    }));
  }
}
