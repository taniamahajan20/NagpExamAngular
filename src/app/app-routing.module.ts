import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductsDetailComponent } from './products-detail/products-detail.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path:'products/:id',
    component: ProductsDetailComponent
  },
  {
    path:'cart',
    component: CartComponent
  },
  {
    path: '',
    component: ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
