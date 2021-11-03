import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { PaymentTypes } from 'src/app/models/payment-type.model';
import { Product } from 'src/app/models/product.model';
import { CategoryService } from 'src/app/_services/category.service';
import { PaymentTypeService } from 'src/app/_services/payment-type.service';
import { ProductService } from 'src/app/_services/productService.service';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.sass']
})
export class AddProductComponent implements OnInit {

  categoryies !: Category[];
  paymentTypeMethods!: PaymentTypes[];
  product = <Product>{};
  isEditMode = false;
  @ViewChild('myform') form!: ElementRef;

  constructor(private categoryService: CategoryService, private paymentTypeService: PaymentTypeService, private productService: ProductService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.product =
      { id: 1, data: [{}], paymentTypeMethods: [], tags: [], imagesUrls: [], price: this.product.price };
  }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(
      (res) => {
        console.log(res);
        this.categoryies = res as Category[];
      }
    )
    this.paymentTypeMethods = this.paymentTypeService.getAllPaymentTypes();
    const productId = this.activatedRoute.snapshot.params.productId;
    if (productId) {
      const product = this.productService.getProductById(+productId);
      // this.product={...product}
      // this.isEditMode=true;
    }
  }

  onSubmit(form: NgForm) {
    // const cat = this.categoryService.getCategoryById(+form.value.category);

    // if (cat) {
    //   this.product.category = cat;
    // }

    this.product.paymentTypeMethods = [];

    for (let index = 0; index < this.paymentTypeMethods.length; index++) {
      if (form.value['check_' + index]) {
        this.product.paymentTypeMethods.push(this.paymentTypeMethods[index]);
      }
    }
    if (this.isEditMode) {
      this.productService.updateProduct(this.product);
    } else {
      this.productService.addProduct(this.product).subscribe(
        (res) => {
          console.log(res);

        }
      );
    }

    this.productService.addProduct(this.product);
    this.router.navigateByUrl('home');
    console.log(this.product);
    console.log(form);


  }

  onTagAdded(tagInput: HTMLInputElement) {
    this.product.tags?.push({ name: tagInput.value });
    tagInput.value = '';
  }

}
