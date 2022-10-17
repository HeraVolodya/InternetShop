import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AddCartModel } from 'src/app/models/cart-models/add-cart-model';
import { CartModel } from 'src/app/models/cart-models/cart-model';
import { ProductModel } from 'src/app/models/product-models/product-model';
import { RegisterClient } from 'src/app/models/user-models/register-client-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any = [];
  public productList = new BehaviorSubject<any>([]);
  public CartApiUrl: string = "https://localhost:7122/api/Cart/";
  
  constructor(private http: HttpClient) { }

  getProduct(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addToCart(product : ProductModel){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrise();
    console.log(this.cartItemList);
  }
  getTotalPrise() : number{
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += Number(a.price);
    })
    return grandTotal;
  }
  removeCartItem(product: ProductModel){
    this.cartItemList.map((a:any, index:any) => {
      if(product.id === a.id){
        this.cartItemList.splice(index,1)
      }
    })
  }
  removeAllCartItem(){
    this.cartItemList = [];
    this.productList.next(this.cartItemList);
  }
  getAllCarts(): Observable<CartModel[]>{
    return this.http.get<CartModel[]>(this.CartApiUrl + 'getCarts');
  }
  addOrder(addCartRequest: AddCartModel): Observable<AddCartModel>{
    return this.http.post<AddCartModel>(this.CartApiUrl + 'addCart', addCartRequest)
  }
}
