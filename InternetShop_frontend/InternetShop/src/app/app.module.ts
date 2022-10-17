import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./componets/dashboard/dashboard.component";
import { LoginComponent } from "./componets/login/login.component";
import { AddProductComponent } from "./componets/product/add-product/add-product.component";
import { ProductComponent } from "./componets/product/product.component";
import { RegisterComponent } from "./componets/register/register.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { CommonModule } from "@angular/common";
import { EditProductComponent } from "./componets/product/edit-product/edit-product.component";
import { AdvertisingComponent } from './componets/advertising/advertising.component';
import { CartComponent } from './componets/cart/cart.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddAdvertisingComponent } from './componets/advertising/add-advertising/add-advertising/add-advertising.component';
import { EditAdvertisingComponent } from './componets/advertising/edit-advertising/edit-advertising/edit-advertising.component';
import { FilterPipe } from './shared/filter.pipe';
import { OrderComponent } from './componets/order/order.component'





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ProductComponent,
    AddProductComponent,
    ProductComponent,
    EditProductComponent,
    AdvertisingComponent,
    CartComponent,
    AddAdvertisingComponent,
    EditAdvertisingComponent,
    FilterPipe,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    CommonModule,
    MatDialogModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
