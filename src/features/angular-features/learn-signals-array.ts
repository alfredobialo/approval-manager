import {ChangeDetectionStrategy, Component, computed, effect, Injector, signal, WritableSignal,Signal} from '@angular/core';
import {DecimalPipe, CurrencyPipe, JsonPipe} from '@angular/common';

@Component({
  selector: 'app-learn-signals-array, SalesInvoice',
  imports: [DecimalPipe, CurrencyPipe, JsonPipe],
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
            <td><button class="primary-main" (click)="removeQty($index)">-</button> {{item.qty() | number}} <button class="primary-main" (click)="addQty(1,$index)">+</button></td>
            <td>{{item.amount().amount | currency:item.amount().currency}}</td>
            <td>{{item.amount().amount * item.qty() | currency:item.amount().currency }}</td>
            <td><button class="danger-main circular-button" (click)="removeItem($index)">X</button></td>
          </tr>

        } @empty {
          <tr class="table-row text-left h-[40px] border-b-2 border-amber-300">
            <td colspan="6" class=" text-center">
              <p class="text-2xl dark:text-yellow-500"> No Item in your cart!</p>
            </td>

          </tr>
        }
      @if(salesItems().length > 0){
        <tr>
          <td colspan="4" class="py-4">
            <p class="text-lg font-bold">Total</p>
          </td>
          <td>{{ salesTotal().amount | currency:salesTotal().currency }}</td>
          <td></td>
        </tr>
      }


      </tbody>
    </table>

    <div class="bg-neutral-600 p-6">
      <p class="p-4">First Item Line total : {{lineTotal()|number}}</p>
      <pre>
        {{firstItem() | json}}
      </pre>
    </div>

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
        @for(item of salesItems2(); track $index){
          <tr class="table-row text-left h-[40px] border-b-2 border-amber-300">
            <td>{{$index + 1}}</td>
            <td>{{item.productInfo.name}} <sub class="dark:text-orange-300 ">{{item.productInfo.qtyInStock | number}} in stock</sub></td>
            <td><button class="primary-main" (click)="removeQty2($index)">-</button> {{item.qty() | number}} <button class="primary-main" (click)="addQty2(1,$index)">+</button></td>
            <td>{{item.amount().amount | currency:item.amount().currency}}</td>
            <td>{{item?.lineTotal() | currency:item.amount().currency}}</td>
            <td><button class="danger-main circular-button" (click)="removeItem2($index)">X</button></td>
          </tr>

        } @empty {
          <tr class="table-row text-left h-[40px] border-b-2 border-amber-300">
            <td colspan="6" class=" text-center">
              <p class="text-2xl dark:text-yellow-500"> No Item in your cart!</p>
            </td>

          </tr>
        }
        @if(salesItems2().length > 0){
          <tr>
            <td colspan="4" class="py-4">
              <p class="text-lg font-bold">Total</p>
            </td>
            <td>{{ salesTotal2().amount | currency:salesTotal2().currency}}</td>
            <td></td>
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
  salesItems2 = signal<SalesInvoiceItem2[]>(getSalesInvoiceItems2());
  salesTotal = computed<Money>(() => {
    let sum = 0;
    this.salesItems().forEach((item) => {
      sum += item.amount().amount * item.qty();
    })
    return {currency : 'NGN', amount : sum};
  });
  salesTotal2 = computed<Money>(() => {
    let sum = 0;
    this.salesItems2().forEach((item) => {
      sum += item.amount().amount * item.qty() ;
    })
    return {currency : 'NGN', amount : sum};
  });
  firstItem = computed(() => {
    return this.salesItems()[0];
  });
  lineTotal = computed(() => {
    return this.firstItem().qty() * this.firstItem().amount().amount;
  })
  constructor() {
    effect(() => {
      const salesInvoiceItems = this.salesItems();
      console.log(salesInvoiceItems);
    });
  }

  addQty(qty: number, index: number) {
    const item = this.salesItems()[index];
    if(item.qty() < item.productInfo.qtyInStock){
      item.qty.update(x => x + qty);
    }

  }
  addQty2(qty: number, index: number) {
    const item = this.salesItems2()[index];
    if(item.qty() < item.productInfo.qtyInStock){
      item.qty.update(x => x + qty);
    }

  }
  removeQty( index: number) {
    const item = this.salesItems()[index];
    if(item.qty() > 1)
      item.qty.update(x => x -= 1);
  }
  removeQty2( index: number) {
    const item = this.salesItems2()[index];
    if(item.qty() > 1)
      item.qty.update(x => x -= 1);
  }

  protected removeItem(index: number) {
    const item = this.salesItems().splice(index,1);
    console.log(item, this.salesItems());
  }
  protected removeItem2(index: number) {
    const item = this.salesItems2().splice(index,1);
    console.log(item, this.salesItems2());
  }
}

export interface SalesInvoiceItem {
  productInfo: ProductItem,
  qty: WritableSignal<number>,
  amount: WritableSignal<Money>,

}
export interface SalesInvoiceItem2 {
  productInfo: ProductItem ,
  qty: WritableSignal<number>,
  amount: WritableSignal<Money>,
  lineTotal?: Signal<number>,

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
      qty: signal(1),
      amount: signal<Money>({amount: 1_500_000, currency: "NGN"})
    },
    {
      productInfo: {
        id: "0002",
        name: "Samsung Galaxy S25 Ultra",
        qtyInStock: 4,
        price: {amount: 1_800_000, currency: "NGN"}

      },
      qty: signal(2),
      amount: signal<Money>({amount: 1_800_000, currency: "NGN"})
    },
  ];
  return data;
}
function getSalesInvoiceItems2() {
  const data: SalesInvoiceItem2[] = [
    addNewSalesItem({
      productInfo: {
        id: "0001",
        name: "iPhone 17 Pro Max",
        qtyInStock: 5,
        price: {amount: 1_500_000, currency: "NGN"}

      },
      qty: signal(1),
      amount: signal<Money>({amount: 1_500_000, currency: "NGN"})
    }),
    addNewSalesItem(
    {
      productInfo: {
        id: "0002",
        name: "Samsung Galaxy S25 Ultra",
        qtyInStock: 4,
        price: {amount: 1_800_000, currency: "NGN"}

      },
      qty: signal(2),
      amount: signal<Money>({amount: 1_800_000, currency: "NGN"})
    }),
    addNewSalesItem(
    {
      productInfo: {
        id: "0002",
        name: "Infinix Hot 8 Pro",
        qtyInStock: 13,
        price: {amount: 140_000, currency: "NGN"}

      },
      qty: signal(3),
      amount: signal<Money>({amount: 140_000, currency: "NGN"})
    }),
  ];
  return data;
}
function addNewSalesItem( item : SalesInvoiceItem2) : SalesInvoiceItem2{
  item.lineTotal = computed(() => item.qty() * item.amount().amount);
  return item;
}
