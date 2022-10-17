import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  constructor(private cartService : CartService) { }

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

}
