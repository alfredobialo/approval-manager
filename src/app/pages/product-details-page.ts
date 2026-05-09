import {ChangeDetectionStrategy, Component, inject, OnInit, signal} from '@angular/core';
import {ProductCatalogService} from '../../shared/product-atalog/services/ProductCatalogService';
import {ProductInfoModel} from '../../shared/product-atalog/models/ProductInfoModel';
import {CommonModule, NgOptimizedImage} from '@angular/common';

@Component({
  imports: [
    CommonModule
  ],
  template: `
    <div class="h-full">
      <h1 class="2xl:text-3xl text-xl duration-100 dark:text-gray-400 text-gray-600">Product Details</h1>

        <div class="">
          <div class="h-[200px] w-[150px] xl:h-[360px] xl:w-[310px] rounded-2xl border-2 ">
            <img [src]="p()?.imageUrl" width="310" height="360" alt="" priority>
          </div>
          <p class="text-3xl">{{ p()?.name }}</p>
          <p class="font-bold text-3xl">{{ p()?.currency }} {{ p()?.price | number }}</p>
          <button class= "text-3xl text-black bg-amber-100 h-[70px] w-[250px] flex justify-center items-center hover:bg-amber-300 ">Add To Cart</button>
        </div>


    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsPage implements OnInit {
  private productCatalogService = inject(ProductCatalogService);
  protected p = signal<ProductInfoModel | null>( null);
  ngOnInit(): void {


  }

}
