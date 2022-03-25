import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layouts/layout/layout.component';
import { AboutComponent } from './screens/about/about.component';
import { ContactComponent } from './screens/contact/contact.component';
import { HomeComponent } from './screens/home/home.component';
import { ShopComponent } from './screens/shop/shop.component';
const routes: Routes = [
  {
    path:"",
    component:LayoutComponent,
    children:[
      {
        path:"",
        component:HomeComponent
      },
      {
        path:"shop",
        component:ShopComponent
      },
      {
        path:"contact",
        component:ContactComponent
      },
      {
        path:"about",
        component:AboutComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
