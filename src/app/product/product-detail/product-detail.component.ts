import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit
{
  product: any;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }
  ngOnInit(): void
  {
    this.route.paramMap.subscribe(params =>
    {
      const productObservable = this.product = this.productService.getProductById(params.get('productId'));
      productObservable.subscribe(
        (data: any) =>
        {
          this.product = data;
        },
        (err) => { 'error'; }
      );
      // this.product = this.productService.getProductById(params.get('productId'));
    });
  }

}
