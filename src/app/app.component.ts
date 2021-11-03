import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Project';
  productArray :Product[]=[];



//   outputItemAdded(product:Product){
// console.log(product);
// this.productArray.push(product);
//   }
}
