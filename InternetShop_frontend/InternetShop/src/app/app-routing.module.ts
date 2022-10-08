import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdvertisingComponent } from "./componets/advertising/advertising.component";
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

  {path: 'advertising', component: AdvertisingComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
