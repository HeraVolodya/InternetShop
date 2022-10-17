import { Component, OnInit } from '@angular/core';
import { AdvertisementModel } from 'src/app/models/advertisements/advertisement-model';
import { ProductModel } from 'src/app/models/product-models/product-model';
import { AdvertisementService } from 'src/app/services/advertisement_services/advertisement.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { DashboardService } from 'src/app/services/dashboard_services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public filterProducer : any;
  public productList: ProductModel[] = [];
  public advertisements: AdvertisementModel[] = [];
  constructor(private dashboardservice : DashboardService,
              private advertisementService: AdvertisementService,
              private cartService : CartService) { }

  ngOnInit(): void {
    this.dashboardservice.getListProduct()
        .subscribe(res => {
          this.productList = res;
          this.filterProducer = res;
          this.productList.forEach((a:ProductModel) => {
          if(a.producer ==='')
          Object.assign(a,{quantity:1,total:a.price});
      });
    })
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
  addToCart(item: ProductModel){
    this.cartService.addToCart(item);
  }
  filter(producer: string){
     this.filterProducer = this.productList
     .filter((a: any)=>{
      if(a.producer == producer || producer == ''){
        return a;
      }
     })
  }  
}

