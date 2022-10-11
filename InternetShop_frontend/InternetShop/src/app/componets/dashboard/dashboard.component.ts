import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product-models/product-model';
import { DashboardService } from 'src/app/services/dashboard_services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public productList: ProductModel[] = [];
  constructor(private dashboardservice : DashboardService) { }

  ngOnInit(): void {
    this.dashboardservice.getListProduct().subscribe(res => 
      this.productList = res);
  }

}
