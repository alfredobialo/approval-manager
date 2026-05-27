import {ChangeDetectionStrategy, Component, inject, OnInit, signal} from '@angular/core';
import {ProductCatalogService} from '../../shared/product-atalog/services/ProductCatalogService';
import {ProductInfoModel} from '../../shared/product-atalog/models/ProductInfoModel';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {BaseUIComponent} from '../../shared/BaseUIComponent';

@Component({
  imports: [
    CommonModule,
    RouterLink

  ],
  template: `
    <div class="h-full">
      <div class="">
        @let p = productInfo();
        <h1 class="2xl:text-2xl text-xl duration-100 dark:text-gray-400 text-gray-600 mb-6">Product Details</h1>
        @if(p){
          <div class="">

            <div class="h-[350px] w-[280px] xl:h-[560px] xl:w-[390px] relative rounded-2xl shadow mb-10 overflow-hidden">
              <img [src]="p?.imageUrl" class="object-fill" alt="" priority
                   (animate.enter)="handleUIEnterAnimation($event)"
                   (animate.leave)="handleUILeaveAnimation($event)">
              <div class="mt-10 bg-blue-500 text-white dark:bg-black/60 px-4 py-6 absolute left-0 right-0 bottom-0 "
                   (animate.enter)="handleUIEnterAnimation($event)"
                   (animate.leave)="handleUILeaveAnimation($event)"
              >
                <p class="text-xl">{{ p?.name }}</p>
                <p class="font-bold text-2xl">{{ p?.currency }} {{ p?.price | number }}</p>
              </div>
            </div>

            <div class=" flex gap-4">
              <button class="2xl:text-xl text-2xl  mt-6 bg-blue-600 text-white   dark:bg-black duration-300 px-6 py-3 rounded-lg
          shadow flex justify-center items-center
          hover:bg-blue-700 ">Add To
                Cart
              </button>
              <a routerLink="../" class="2xl:text-xl text-2xl  mt-6 bg-stone-100 text-shadow-stone-600  dark:bg-surface-700 duration-300 px-6 py-3 rounded-lg
          shadow flex justify-center items-center
          dark:hover:bg-orange-300 ">Back To
                Catalog
              </a>
            </div>

          </div>
        }
       @else{
         <div class="text-2xl">Product info loading</div>
       }
      </div>

    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsPage extends BaseUIComponent implements OnInit {
  private productCatalogService = inject(ProductCatalogService);
  private activeRoute: ActivatedRoute = inject(ActivatedRoute);
  protected productInfo = signal< ProductInfoModel | undefined>(undefined);

  ngOnInit(): void {
    console.log(this.activeRoute.snapshot.queryParams["id"])
    //this.productInfo = this.productCatalogService.getProducts()().find(x => x.id === this.activeRoute.snapshot.queryParams["id"]);
    this.productCatalogService.$getProducts().subscribe(products => {
      this.productInfo.set( products.find(x => x.id === this.activeRoute.snapshot.queryParams["id"]));
      console.log(this.productInfo());
    })
  }

}
