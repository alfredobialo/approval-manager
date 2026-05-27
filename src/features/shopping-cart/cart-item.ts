import {Component, computed, effect, input, linkedSignal, signal} from '@angular/core';
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
    @if (_visible()) {
      <div
        (animate.enter)="handleSlideFromRightUIEnterAnimation($event)"
        (animate.leave)="handleSlideFromRightUILeaveAnimation($event)"
        class="cart w-[110px] xl:w-[180px] 3xl:w-[280px] h-full fixed right-0 top-0 bottom-0 dark:bg-black/80 bg-primary-800/80 z-10 backdrop-blur-2xl">
        <div class="p-3 px-6 mt-[68px]">
          <p class="xl:font-bold xl:text-2xl text-lg">
            @let labelSplit = label().split(" ");
            <span class="hidden xl:inline">{{ labelSplit[0] }}  </span><span class="">{{ labelSplit[1] }}</span>
            <span class="text-primary"> ({{ items().length }})</span></p>
          <div class="mt-8">
            <div class="overflow-y-scroll min-h-[300px] h-[500px]">
              @for (i of items(); track $index) {
                <div class="flex gap-y-3 flex-col items-center ">
                  <img [src]="i.productInfo.imageUrl" alt="" class="object-fill h-[90px] w-[80px]">
                  <p>{{ i.productInfo.price | currency:'NGN' }}</p>
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
    const newList = [item, ...this.items()];
    this.items.set(newList);
    this.closeRequested.set(false);
  }

  protected close() {
    this.closeRequested.set(true);
  }
}
