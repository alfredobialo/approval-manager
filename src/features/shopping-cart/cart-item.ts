import {Component, input, signal} from '@angular/core';
import {CartItemModel} from '../../shared/product-atalog/models/ProductInfoModel';
import {CurrencyPipe} from '@angular/common';
import {BaseUIComponent} from '../../shared/BaseUIComponent';

@Component({
  standalone: true,
  selector: 'CartItems',
  imports: [
    CurrencyPipe
  ],
  template: `
    @if (visible()) {
      <div (animate.enter)="handleSlideFromRightUIEnterAnimation($event)"
        class="cart 2xl:w-[280px] h-full fixed right-0 top-0 bottom-0 dark:bg-black/80 bg-primary-800/80 z-10 backdrop-blur-2xl">
        <div class="p-3 px-6 mt-[68px]">
          <p class="font-bold text-2xl ">{{ label() }}</p>
          <div class="mt-8">
            @for (i of items(); track $index) {
              <div class="flex gap-x-3">
                <p>{{ i.productInfo.name }}</p>
                <p>{{ i.productInfo.price | currency:'NGN' }}</p>
              </div>
            }
          </div>
        </div>

        <button class="danger-main" (click)="close()">Close</button>
      </div>
    }

  `
})
export class CartItems extends BaseUIComponent{
  label = input<string>("Cart Items");
  visible = input<boolean>(false);
  protected items = signal<CartItemModel[]>([]);
  addToCart(item : CartItemModel): void {
    const newList = [item,...this.items() ];
    this.items.set(newList);
  }

  protected  close(){

  }
}
