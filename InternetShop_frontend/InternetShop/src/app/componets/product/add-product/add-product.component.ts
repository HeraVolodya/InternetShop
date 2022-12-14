import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddProductModel } from 'src/app/models/product-models/add-product-model';
import { ProductsService } from 'src/app/services/product_services/products.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  addProductRequest: AddProductModel = {
    imageURL: '',
    producer: '',
    model: '',
    diagonal: '',
    camera: '',
    price: '',
    discount: '',
  };
  
  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit(): void {
  }
  addProduct(){
    this.productsService.addProduct(this.addProductRequest)
    .subscribe({
      next: (product) => {
        this.router.navigate(['/Product']);
        console.log(product)
      }
    });
  }

}
