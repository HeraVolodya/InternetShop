import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductModel } from 'src/app/models/product-models/product-model';
import { ProductsService } from 'src/app/services/product_services/products.service';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products: ProductModel[] = [];
  constructor(private productsService: ProductsService,
    private dialogRef: MatDialog) { }

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

  openDialogAddProduct(){
    this.dialogRef.open(AddProductComponent);
  }
}
