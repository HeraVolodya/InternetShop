import { Component } from '@angular/core';
import { AdvertisementModel } from './models/advertisements/advertisement-model';
import { CartModel } from './models/cart-models/cart-model';
import { ProductModel } from './models/product-models/product-model';
import { AdvertisementService } from './services/advertisement_services/advertisement.service';

import { CartService } from './services/cart/cart.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'InternetShop';

  public filterProducer : any;
  public productList: ProductModel[] = [];
  public totalItem : number = 0;
  public advertisements: AdvertisementModel[] = [];

  constructor(
    private cartService: CartService,
    private advertisementService: AdvertisementService) {}
  
    ngOnInit(): void {
      this.cartService.getProduct()
      .subscribe(res=>{
        this.totalItem = res.length;
      });

      this.advertisementService.getAllAdvertisement()
      .subscribe({
      next: (advertisements) => {
        this.advertisements = advertisements;
        console.log(advertisements);
      },
      error: (ressponse) => {
        console.log(ressponse)
      }
    });
}
}


