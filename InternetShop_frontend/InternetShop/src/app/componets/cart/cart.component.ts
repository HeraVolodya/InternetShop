import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddCartModel } from 'src/app/models/cart-models/add-cart-model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;

  addOrderRequest: AddCartModel = {
    imageURL: '',
    producer: '',
    model: '',
    totalPrice: '',
    discount: '',
    phone: '',
    address: ''
  };
  constructor(private cartService : CartService, private router: Router) { }

  ngOnInit(): void {
    this.cartService.getProduct()
    .subscribe(res => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrise();
      console.log(this.cartService.getTotalPrise() + "price");
    })
  }
  removeCartItem(item: any){
    this.cartService.removeCartItem(item)
  }
  emptyCartItem(){
    this.cartService.removeAllCartItem();
  }
  addOrder(){
    this.cartService.addOrder(this.addOrderRequest)
    .subscribe({
      next: (product) => {
        this.router.navigate(['/dashboard']);
        console.log(product)
      }
    });
  }
}
