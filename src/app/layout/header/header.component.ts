import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/_services/productService.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
 arrayOfProducts:Product[]=[];


  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productService.itemAdded.subscribe(
      (next)=>{
        this.arrayOfProducts.push(next);
        console.log(next);
      },
      (error)=>{

      },

      ()=>{

      }

    )
  }

}
