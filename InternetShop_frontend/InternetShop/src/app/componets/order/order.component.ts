import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartModel } from 'src/app/models/cart-models/cart-model';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public carts: CartModel[] = [];

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cartService.getAllCarts()
    .subscribe({
      next: (carts) => {
        this.carts = carts;
        console.log(carts);
      },
      error: (ressponse) => {
        console.log(ressponse)
      }
    });
    }

  }

