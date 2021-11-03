import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { TagsComponent } from "src/app/shared/tags/tags.component";
import { AuthGuardService } from "src/app/_services/auth-guard.service";
import { AddProductComponent } from "./add-product/add-product.component";
import { FilterListComponent } from "./filter-list/filter-list.component";
import { ItemComponent } from "./item/item.component";
import { ListingItemsComponent } from "./listing-items/listing-items.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";

@NgModule({
  declarations: [
    AddProductComponent,
    ItemComponent,
    ListingItemsComponent,
    FilterListComponent,
    TagsComponent,
    ProductDetailsComponent
  ],
  imports: [RouterModule.forChild([
    {path:'',children:[

      { path: 'listing', component: ListingItemsComponent },
      { path: 'add', component: AddProductComponent,canActivate:[AuthGuardService] },
      { path: 'edit/:productId', component: AddProductComponent },
      { path: 'details/:id', component: ProductDetailsComponent },
    ]}
  ]),
  FormsModule,
  CommonModule
],
  exports: []
})
export class ProductModule { }
