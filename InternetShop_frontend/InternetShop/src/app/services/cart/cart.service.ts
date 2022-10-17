import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RegisterClient } from 'src/app/models/user-models/register-client-model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any = []; //!!!!!!!!!!!!!!!!!!
  public productList = new BehaviorSubject<any>([]);
  
  constructor() { }

  getProduct(){
    return this.productList.asObservable();
  }

  setProduct(product : any){
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  

  addToCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrise();
    console.log(this.cartItemList);
  }
  getTotalPrise() : number{
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += Number(a.total);
    })
    return grandTotal;
  }
  removeCartItem(product: any){
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
}
