import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit
{
  products: any;
  constructor(private productService: ProductService) { }
  ngOnInit(): void
  {
    const productObservable = this.productService.getProducts();
    productObservable.subscribe(
      (data: any) =>
      {
        this.products = data;
      },
      (err) => { 'error'; }
    )
  }

}
