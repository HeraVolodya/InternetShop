import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddAdvertisingComponent } from "./componets/advertising/add-advertising/add-advertising/add-advertising.component";
import { AdvertisingComponent } from "./componets/advertising/advertising.component";
import { EditAdvertisingComponent } from "./componets/advertising/edit-advertising/edit-advertising/edit-advertising.component";
import { DashboardComponent } from "./componets/dashboard/dashboard.component";
import { LoginComponent } from "./componets/login/login.component";
import { AddProductComponent } from "./componets/product/add-product/add-product.component";
import { EditProductComponent } from "./componets/product/edit-product/edit-product.component";
import { ProductComponent } from "./componets/product/product.component";
import { RegisterComponent } from "./componets/register/register.component";




const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  {path: 'dashboard', component: DashboardComponent},

  {path: 'Product', component: ProductComponent},
  {path: 'product/add', component: AddProductComponent},
  {path: 'product/edit/:id', component: EditProductComponent},

  {path: 'advertisement', component: AdvertisingComponent},
  {path: 'advertisement/add', component: AddAdvertisingComponent},
  {path: 'advertisement/edit/:id', component: EditAdvertisingComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
