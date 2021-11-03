import { HttpClient, HttpHeaders } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Product } from "../models/product.model";
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})

export class ProductService {

  private products!: Product[];
  url = environment.baseUrl;

  // private products: Product[] = [
  //   { id: 1, data: [{ id: 1, name: 'Camera1', description: 'This Is Camera', lang: { id: 1, name: 'English' } }], category: { id: 1, name: 'Arts' }, paymentTypeMethods: [{ id: 1, name: 'Visa' }], price: 100, discount: 20, imageUrls: ["assets/img/layout-styles.png"], relatedProductsIds: [1, 3, 4, 5] },
  //   { id: 2, data: [{ id: 1, name: 'Camera2', description: 'This Is Camera', lang: { id: 1, name: 'English' } }], category: { id: 1, name: 'Arts' }, paymentTypeMethods: [{ id: 1, name: 'Visa' }], price: 100, discount: 20, imageUrls: ["assets/img/layout-styles.png"], relatedProductsIds: [2, 3, 4, 5] },
  //   { id: 3, data: [{ id: 1, name: 'Camera3', description: 'This Is Camera', lang: { id: 1, name: 'English' } }], category: { id: 1, name: 'Arts' }, paymentTypeMethods: [{ id: 1, name: 'Visa' }], price: 100, discount: 20, imageUrls: ["assets/img/layout-styles.png"], relatedProductsIds: [1, 6, 4, 5] },
  //   { id: 4, data: [{ id: 1, name: 'Camera4', description: 'This Is Camera', lang: { id: 1, name: 'English' } }], category: { id: 1, name: 'Arts' }, paymentTypeMethods: [{ id: 1, name: 'Visa' }], price: 100, discount: 20, imageUrls: ["assets/img/layout-styles.png"], relatedProductsIds: [1, 3, 7, 5] },
  //   { id: 5, data: [{ id: 1, name: 'Camera5', description: 'This Is Camera', lang: { id: 1, name: 'English' } }], category: { id: 1, name: 'Arts' }, paymentTypeMethods: [{ id: 1, name: 'Visa' }], price: 100, discount: 20, imageUrls: ["assets/img/layout-styles.png"], relatedProductsIds: [1, 3, 4, 8] },
  //   { id: 6, data: [{ id: 1, name: 'Camera6', description: 'This Is Camera', lang: { id: 1, name: 'English' } }], category: { id: 1, name: 'Arts' }, paymentTypeMethods: [{ id: 1, name: 'Visa' }], price: 100, discount: 20, imageUrls: ["assets/img/layout-styles.png"], relatedProductsIds: [9, 3, 4, 5] },
  //   { id: 7, data: [{ id: 1, name: 'Camera7', description: 'This Is Camera', lang: { id: 1, name: 'English' } }], category: { id: 1, name: 'Arts' }, paymentTypeMethods: [{ id: 1, name: 'Visa' }], price: 100, discount: 20, imageUrls: ["assets/img/layout-styles.png"], relatedProductsIds: [1, 10, 4, 5] },
  //   { id: 8, data: [{ id: 1, name: 'Camera8', description: 'This Is Camera', lang: { id: 1, name: 'English' } }], category: { id: 1, name: 'Arts' }, paymentTypeMethods: [{ id: 1, name: 'Visa' }], price: 100, discount: 20, imageUrls: ["assets/img/layout-styles.png"], relatedProductsIds: [1, 3, 11, 5] },
  //   { id: 9, data: [{ id: 1, name: 'Camera9', description: 'This Is Camera', lang: { id: 1, name: 'English' } }], category: { id: 1, name: 'Arts' }, paymentTypeMethods: [{ id: 1, name: 'Visa' }], price: 100, discount: 20, imageUrls: ["assets/img/layout-styles.png"], relatedProductsIds: [1, 3, 4, 12] },
  //   { id: 10, data: [{ id: 1, name: 'Camera1', description: 'This Is Camera', lang: { id: 1, name: 'English' } }], category: { id: 1, name: 'Arts' }, paymentTypeMethods: [{ id: 1, name: 'Visa' }], price: 100, discount: 20, imageUrls: ["assets/img/layout-styles.png"], relatedProductsIds: [1, 3, 4, 5] },
  //   { id: 11, data: [{ id: 1, name: 'Camera2', description: 'This Is Camera', lang: { id: 1, name: 'English' } }], category: { id: 1, name: 'Arts' }, paymentTypeMethods: [{ id: 1, name: 'Visa' }], price: 100, discount: 20, imageUrls: ["assets/img/layout-styles.png"], relatedProductsIds: [1, 6, 4, 5] },
  //   { id: 12, data: [{ id: 1, name: 'Camera3', description: 'This Is Camera', lang: { id: 1, name: 'English' } }], category: { id: 1, name: 'Arts' }, paymentTypeMethods: [{ id: 1, name: 'Visa' }], price: 100, discount: 20, imageUrls: ["assets/img/layout-styles.png"], relatedProductsIds: [1, 3, 7, 5] },
  //   { id: 13, data: [{ id: 1, name: 'Camera4', description: 'This Is Camera', lang: { id: 1, name: 'English' } }], category: { id: 1, name: 'Arts' }, paymentTypeMethods: [{ id: 1, name: 'Visa' }], price: 100, discount: 20, imageUrls: ["assets/img/layout-styles.png"], relatedProductsIds: [1, 3, 4, 8] },
  //   { id: 14, data: [{ id: 1, name: 'Camera5', description: 'This Is Camera', lang: { id: 1, name: 'English' } }], category: { id: 1, name: 'Arts' }, paymentTypeMethods: [{ id: 1, name: 'Visa' }], price: 100, discount: 20, imageUrls: ["assets/img/layout-styles.png"], relatedProductsIds: [1, 3, 9, 5] },

  // ]

  public itemAdded = new EventEmitter<Product>();
  public itemDeleted = new EventEmitter();
  public productsChanged = new EventEmitter<Product[]>();

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<{ product: Product[] }> {
    return this.http.get<{ product: Product[] }>(`${this.url}product`);

    // this.productsChanged.emit(this.products)
    // return [...this.products]
  }

  getProductById(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  addProduct(product: Product): Observable<any> {
    const token =sessionStorage.getItem('token');
    const headers=new HttpHeaders({
      authorization:`${token}`
    })
    return this.http.post(`${this.url}product/add`,product,{headers})
    // this.products.push(product);
    // this.productsChanged.emit([...this.products])
    // return [...this.products]

  }

  updateProduct(product: Product): Product[] {
    const index = this.products.findIndex((p) => p.id === product.id);
    this.products[index] = product;
    this.productsChanged.emit([...this.products])
    return [...this.products];

  }

  deleteProduct(id: number | undefined) {
    const index = this.products.findIndex((p) => p.id === id);
    this.products.splice(index, 1);
    this.productsChanged.emit([...this.products])
    this.itemDeleted.emit([...this.products]);
  }
}
