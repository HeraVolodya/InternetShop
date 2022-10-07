import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/models/product-models/product-module';
import { ProductsService } from 'src/app/services/product_services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

    productDetails: ProductModel = {
      id: '',
      dataTime: '',
      imageURL: '',
      nameAuto: '',
      model: '',
      engineCapacity: '',
      carMileage: '',
      // year: '',
      // code: '',
      // typeCar: '',
      price: '',
      discount: '',
    };

  constructor(private route: ActivatedRoute, 
    private productsService: ProductsService,
    private router: Router) 
    { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if(id){
          //call API
          this.productsService.getProduct(id)
            .subscribe({
              next: (response) => {
                this.productDetails = response;
              }
            })
        }
      }
    })
  }

  updateProduct(){
    this.productsService.updateProduct(this.productDetails.id, this.productDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['Product']);
      }
    })
  }

  deleteProduct(id: string){
    this.productsService.deleteProduct(id)
    .subscribe({
      next: (response) => {
        this.router.navigate(['Product']);
      }
    })
  }

}
