import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componets/dashboard/dashboard.component';
import { LoginComponent } from './componets/login/login.component';
import { RegisterComponent } from './componets/register/register.component';
import { ProductComponent } from './componets/product/product.component'
import { AddProductComponent } from './componets/product/add-product/add-product.component';
import { EditProductComponent } from './componets/product/edit-product/edit-product.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'Product', component: ProductComponent},
  {path: 'product/add', component: AddProductComponent},
  {path: 'product/edit/:id', component: EditProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
