import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { EventEmitter } from '@angular/core';
import { ProductService } from 'src/app/_services/productService.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass'],
})
export class ItemComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  @Input() product!: Product;

  // @Output() itemAdded= new EventEmitter<any>();

  itemAddedToCart() {
    // const message=`item ${this.product.name} has been added`;
    // alert(message);

    this.productService.itemAdded.emit(this.product)
  }

  delete(id: number |undefined) {
    this.productService.deleteProduct(id)
    // console.log(id);
  }

}
