import { data } from "./data.model";
import { Category } from "./category.model";
import { PaymentTypes } from "./payment-type.model";
import { Tags } from "./tags.model";

export interface Product {
  id: number,
  data: data[];
  price: number,
  discount?: number,
  paymentTypeMethods: PaymentTypes[];
  categoryId?: number;
  tags?: Tags[];
  imagesUrls: string[];
  relatedProductsIds?:number[];
}


