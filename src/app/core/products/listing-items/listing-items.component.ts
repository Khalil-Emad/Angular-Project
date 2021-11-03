import { Component, ElementRef, Input, OnInit, Output, ViewChild } from '@angular/core';
import { filter } from 'src/app/models/filter.model';
import { Product } from 'src/app/models/product.model';
import { EventEmitter } from '@angular/core';
import { ProductService } from 'src/app/_services/productService.service';

@Component({
  selector: 'app-listing-items',
  templateUrl: './listing-items.component.html',
  styleUrls: ['./listing-items.component.sass']
})
export class ListingItemsComponent implements OnInit {
  @Input() pageSize: number = 9;
  @Input() productArray !: Product[];
  productsArrayToBeViewed: Product[] = [];
  currentPage: number = 0;
  numOfPagesArray: number[] = [];
  searchText: any;

  constructor(private productService: ProductService) {

    this.filterArray = [
      { name: "Arts & Crafts" },
      { name: "Automotive" },
      { name: "Baby" },
      { name: "Books" },
      { name: "Eletronics" },
      { name: "Women's Fashion" },
      { name: "Men's Fashion" },
      { name: "Health & Household" },
      { name: "Home & Kitchen" },
      { name: "Military Accessories" },
      { name: "Movies & Television" },
      { name: "Sports & Outdoors" },
      { name: "Tools & Home Improvement" },
      { name: "Toys & Games" },
    ]
  }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (res) => {
        console.log(res);
        this.productArray=res.product;
        this.sliceArray();
        this.calcnumofPages();
      }
    );

    this.productService.productsChanged.subscribe(
      (res) => {
        this.productArray = res;
        this.sliceArray();
        this.calcnumofPages();
      }
    );

    this.productService.itemDeleted.subscribe(
      (next) => {
        this.productArray = next;
        this.sliceArray();
        this.calcnumofPages();

      }
    );

  }

  calcnumofPages() {
    this.numOfPagesArray = [];
    const numOfPagesArray = Math.ceil(this.productArray.length / this.pageSize);
    for (let index = 0; index < numOfPagesArray; index++) {
      this.numOfPagesArray.push(index + 1);
    }
  }

  newItemAdded(product: Product) {
  }

  filterArray: filter[]

  sliceArray() {
    this.productsArrayToBeViewed = this.productArray.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize)

  }

  onPagination(i: number) {
    if (i > -1 && this.numOfPagesArray.length) {
      this.currentPage = i;
      this.sliceArray();
    }
  }
  arr: Product[] = [];

  @ViewChild('inputs') inputs!: ElementRef;
  search() {
    for (let i = 0; i < this.productArray.length; i++) {
      if (this.productArray[i].data[0].name === (this.inputs.nativeElement as HTMLInputElement).value) {
        this.arr.push(this.productArray[i]);
      }
    }
    this.productArray = this.arr;
    this.sliceArray();
    this.calcnumofPages();
    // this.productArray = this.productService.getAllProducts();
  }
}
