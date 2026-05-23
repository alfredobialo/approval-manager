import {Injectable, signal, WritableSignal} from "@angular/core";
import {DEFAULT_IMAGE_URL, ProductInfoModel, ProductInfoModelFactory} from '../models/ProductInfoModel';
import {HttpClient} from '@angular/common/http';
import {of, Observable} from 'rxjs';
import {delay} from 'rxjs/operators';
@Injectable({
  providedIn: "root",
})
export class ProductCatalogService {
  constructor(private httpClient:HttpClient) {
  }
  private products =
    [
      {
        id : "001",
        name :"iPhone 17 Pro Max",
        price : 2000000,
        currency :"NGN",
        description : "Lorem ipsum dolor",
        imageUrl: "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/08/6187814/1.jpg?3232"
      },
      ProductInfoModelFactory.create("002","Samsung Galaxy S26 Ultra", 2560000,"NGN","Best phone of 2026","https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/10/5073914/1.jpg?8679"),
      ProductInfoModelFactory.create("003","infinix hot2", 1650000),
      ProductInfoModelFactory.create("004","villaon v40", 500000),
      ProductInfoModelFactory.create("005","Iphone 16 Pro Max", 3000000),
      ProductInfoModelFactory.create("006","Infinix Smart", 300000),
      ProductInfoModelFactory.create("007","villaon v30", 200000)
  ];
  getProducts() {
    return signal<ProductInfoModel[]>(this.products);
  }

  $getProducts()  : Observable<ProductInfoModel[]>{
    return of(this.products)
      .pipe(delay(3000))

  }

}
