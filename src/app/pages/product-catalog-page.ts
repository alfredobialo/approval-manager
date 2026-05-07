import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {ProductCatalogService} from '../../shared/product-atalog/services/ProductCatalogService';
import {ProductInfoModel} from '../../shared/product-atalog/models/ProductInfoModel';
import {CommonModule, NgOptimizedImage} from '@angular/common';

@Component({
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  template: `
    <div class="h-full">
      <h1 class="2xl:text-3xl text-xl duration-100 dark:text-gray-400 text-gray-600">Product Catalog</h1>

      @for(p of products;track p.id){
        <div class="">
          <div class="h-[200px] w-[150px] xl:h-[360px] xl:w-[310px] rounded-2xl border-2 ">
            <img [ngSrc]="p.imageUrl" width="310" height="360" alt="" priority>
          </div>
          <p class="text-3xl">{{ p.name }}</p>
          <p class="font-bold text-3xl">{{ p.currency }} {{ p.price | number }}</p>
          <button class= "text-3xl text-black bg-amber-100 h-[70px] w-[250px] flex justify-center items-center hover:bg-amber-300 ">Add To Cart</button>
        </div>
      }

    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCatalogPage implements OnInit {
  private productCatalogService = inject(ProductCatalogService);
  protected products : ProductInfoModel[] = [];
  ngOnInit(): void {
    this.products = this.productCatalogService.getProducts();

  }

}
