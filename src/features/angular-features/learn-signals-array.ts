import {ChangeDetectionStrategy, Component, computed, effect, Injector, signal} from '@angular/core';
import {DecimalPipe, CurrencyPipe} from '@angular/common';

@Component({
  selector: 'app-learn-signals-array, SalesInvoice',
  imports: [DecimalPipe, CurrencyPipe],
  template: `
    <p>
      learn-signals-array works!
    </p>
    <table class="table w-full text-xl">
      <thead class="table-row text-left  border-b-3 border-amber-500">
      <th>S/N</th>
        <th>Item Description</th>
        <th>Qty</th>
        <th>Price</th>
        <th>Line Total</th>
        <th></th>
      </thead>
      <tbody>
        @for(item of salesItems(); track $index){
          <tr class="table-row text-left h-[40px] border-b-2 border-amber-300">
            <td>{{$index + 1}}</td>
            <td>{{item.productInfo.name}} <sub class="dark:text-orange-300 ">{{item.productInfo.qtyInStock | number}} in stock</sub></td>
            <td><button class="primary-main" (click)="removeQty($index)">-</button> {{item.qty | number}} <button class="primary-main" (click)="addQty(1,$index)">+</button></td>
            <td>{{item.amount.amount | currency:item.amount.currency}}</td>
            <td>{{item.amount.amount * item.qty | currency:item.amount.currency }}</td>
            <td><button class="danger-main circular-button" (click)="removeItem($index)">X</button></td>
          </tr>
        } @empty {
          <tr class="table-row text-left h-[40px] border-b-2 border-amber-300">
            <td colspan="6" class=" text-center">
              <p class="text-2xl dark:text-yellow-500"> No Item in your cart!</p>
            </td>

          </tr>
        }

      </tbody>
    </table>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LearnSignalsArray {
  salesItems = signal<SalesInvoiceItem[]>(getSalesInvoiceItems());
  constructor() {
    effect(() => {
      const salesInvoiceItems = this.salesItems();
      console.log(salesInvoiceItems);
    });
  }

  addQty(qty: number, index: number) {
    const item = this.salesItems()[index];
    if(item.qty < item.productInfo.qtyInStock){
      item.qty += qty;
    }

  }
  removeQty( index: number) {
    const item = this.salesItems()[index];
    if(item.qty > 1)
      item.qty -= 1;
  }

  protected removeItem(index: number) {
    const item = this.salesItems().splice(index,1);
    console.log(item, this.salesItems());
  }
}

export interface SalesInvoiceItem {
  productInfo: ProductItem,
  qty: number,
  amount: Money,

}

export interface ProductItem {
  id: string,
  name: string,
  price: Money,
  qtyInStock: number
}
export interface Money {
  currency: string,
  amount: number,
}

function getSalesInvoiceItems() {
  const data: SalesInvoiceItem[] = [
    {
      productInfo: {
        id: "0001",
        name: "iPhone 17 Pro Max",
        qtyInStock: 5,
        price: {amount: 1_500_000, currency: "NGN"}

      },
      qty: 1,
      amount: {amount: 1_500_000, currency: "NGN"}
    },
    {
      productInfo: {
        id: "0002",
        name: "Samsung Galaxy S25 Ultra",
        qtyInStock: 4,
        price: {amount: 1_800_000, currency: "NGN"}

      },
      qty: 2,
      amount: {amount: 1_800_000, currency: "NGN"}
    },
  ];
  return data;
}
