import {SafeValue} from '@angular/platform-browser';

export interface ProductInfoModel{
  id:string;
  name:string;
  description? :string;
  price :number;
  currency :string;
  imageUrl:string | SafeValue;
}
export const DEFAULT_IMAGE_URL:string = "https://dekeyvietnam.com/images/no-product-image.png";
export class ProductInfoModelFactory{
  static create(id:string, name:string, price:number, currency :string="NGN",
         description:string ="Image Description goes here",
         imageUrl:string = DEFAULT_IMAGE_URL)  : ProductInfoModel {
    return {
      id, name, price, currency, description,imageUrl
    }
  }



}


export interface CartItemModel{
  id:string;
  productInfo:ProductInfoModel;
  qty:number;

}
