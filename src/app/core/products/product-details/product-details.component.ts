import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/_services/productService.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.sass']
})
export class ProductDetailsComponent implements OnInit {

  product!: Product ;
  relatedProductsArray:Product[]=[];
  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    const id = this.activatedRoute.params.subscribe(
      (res)=>{
      const product = this.productService.getProductById(+res.id);

      if (!product) {
        alert('Error Happened');

      } else {
        this.product = product;
        this.relatedProductsArray=[]; 
        this.product.relatedProductsIds?.map((productId)=>{
          const rProduct= this.productService.getProductById(productId)
          rProduct && this.relatedProductsArray.push(rProduct);
        })
      }
    });

  }

}
