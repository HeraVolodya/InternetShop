import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  title = 'product';
  products: Product[] = [];
  productToEdit?: Product;
  @Output() productsUpdated = new EventEmitter<Product[]>();
  @Input() product?: Product;

  constructor(private productService: ProductService) {
    // this.productService
    // .getProduct()
    // .subscribe((result: Product[]) => (this.products = result))
   }

  ngOnInit(): void {
    this.productService
      .getProduct()
      .subscribe((result: Product[]) => (this.products = result));
  }

  updateProductList(products: Product[]){
    this.products = products;
  }

  initNewProduct(){
    this.productToEdit = new Product();
  }

  editProduct(product: Product){
    this.productToEdit = product;
  }
}
