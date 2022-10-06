import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/product-models/product-module';
import { ProductsService } from 'src/app/services/product_services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: ProductModel[] = [];
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getAllProduct()
    .subscribe({
      next: (products) => {
        this.products = products;
        console.log(products);
      },
      error: (ressponse) => {
        console.log(ressponse)
      }
    });
  }
}
