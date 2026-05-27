import {Component, computed, effect, input, linkedSignal, signal} from '@angular/core';
import {CartItemModel} from '../../shared/product-atalog/models/ProductInfoModel';
import {CurrencyPipe, DecimalPipe} from '@angular/common';
import {BaseUIComponent} from '../../shared/BaseUIComponent';

@Component({
  standalone: true,
  selector: 'CartItems',
  imports: [
    CurrencyPipe,
    DecimalPipe
  ],
  template: `
    @if (_visible()) {
      <div
        (animate.enter)="handleSlideFromRightUIEnterAnimation($event)"
        (animate.leave)="handleSlideFromRightUILeaveAnimation($event)"
        class="cart w-[110px] xl:w-[180px] 3xl:w-[280px] h-full fixed
        right-0 top-0 bottom-0 dark:bg-black/80 bg-primary-100/80 border-2 dark:border-none
        border-primary z-10 backdrop-blur-2xl shadow">
        <div class="p-3 px-6 mt-[68px]">
          <p class="xl:font-bold 2xl:text-lg text-md">
            @let labelSplit = label().split(" ");
            <span class="hidden xl:inline">{{ labelSplit[0] }}  </span><span class="">{{ labelSplit[1] }}</span>
            <span class="dark:text-primary "> ({{ items().length }})</span></p>
          <div class="mt-8">
            <div class="">
              @for (i of items(); track $index) {
                <div class="flex gap-y-3 flex-col items-center mb-5">
                  <img [src]="i.productInfo.imageUrl" alt="" class="object-fill w-[80px] xl:w-[100px]">
                  <p class="text-sm xl:text-md">{{i.qty | number}} x {{ i.productInfo.price | number }}</p>
                </div>
              }
            </div>

            <div class="mt-10">
              <button class="danger-main" (click)="close()">Close</button>
            </div>
          </div>


        </div>


      </div>
    }

  `
})
export class CartItems extends BaseUIComponent {
  label = input<string>("Cart Items");
  protected items = signal<CartItemModel[]>([]);
  protected closeRequested = signal(false);
  protected _visible = computed<boolean>(() => this.items().length > 0 && this.closeRequested() ===false);

  addToCart(item: CartItemModel): void {
    /* If the item is already in the list, update the qty*/
    const itemExist  = this.items().findIndex((i) => i.productInfo.id === item.productInfo.id);
    if(itemExist > -1){
      const newItem = this.items()[itemExist];
      newItem.qty += 1;
      this.items.update(s => {
          s[itemExist] = newItem;
          return s;
      });
      console.log(newItem,"item qty increased", this.items());
    }
    else{
      const newList = [item, ...this.items()];
      this.items.set(newList);
      console.log("item newly added");
    }

    this.closeRequested.set(false);
  }

  protected close() {
    this.closeRequested.set(true);
  }
}
