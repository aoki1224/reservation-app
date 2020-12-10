import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductComponent } from './product.component';
import { ProductService } from './shared/product.service';
const routes: Routes = [
  {
    path: 'products', component: ProductComponent,
    children: [
      { path: '', component: ProductListingComponent },
      { path: ':productId', component: ProductDetailComponent }
    ]
  }
];
@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListingComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [RouterModule],
  providers: [ProductService],
  bootstrap: []
})

export class ProductModule { }
