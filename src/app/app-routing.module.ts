import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
const routes: Routes = [
   {
     path:"",
     component: AppComponent
   },
  {
    path:"products",
    component: ProductsComponent
  },
  {
    path:"users",
    component:UsersComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
