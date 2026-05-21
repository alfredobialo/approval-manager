import {AnimationCallbackEvent, ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {ProductCatalogService} from '../../shared/product-atalog/services/ProductCatalogService';
import {ProductInfoModel} from '../../shared/product-atalog/models/ProductInfoModel';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';
import {animate, stagger} from 'animejs';
import {BaseUIComponent} from '../../shared/BaseUIComponent';
@Component({
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterLink
  ],
  template: `
    <div class="h-full">
      <h1 class="2xl:text-3xl text-xl duration-100 dark:text-gray-400 text-gray-600">Product Catalog</h1>

      <div class="xl:grid xl:grid-cols-3 xl:grid-flow-row xl:gap-6 relative" (animate.enter)="handleStaggerAnimationEnter($event)">
        @for(p of products() ;track p.id){
          <div  class="mb-[100px] rounded-2xl border-2 bg-white dark:bg-transparent  product-catalog border-gray-300 dark:border-surface-700 px-6
          hover:shadow-xl hover:dark:shadow-gray-600 duration-300 hover:scale-105">
            <div class="h-[200px] w-[150px] xl:h-[360px] xl:w-[310px]  ">
              <img [ngSrc]="p.imageUrl" width="310" height="360" alt=""priority>
            </div>
            <a  [routerLink]="['product']" [queryParams]="{id:p.id}"  class="text-2xl dark:text-blue-400 text-blue-600 underline">{{ p.name }}</a>
            <p class="text-md">{{ p.currency }} <span class="font-bold text-[1.3rem] dark:text-primary-200 text-primary-600">{{ p.price | number }}</span></p>
            <div class="flex xl:justify-between px-4 py-2 mt-8">
              <div class="">Qty Component</div>
              <button class= "shadow text-lg dark:bg-stone-600 px-6 py-2 rounded-lg   dark:hover:bg-stone-500 bg-primary-400  ">Add To Cart</button>
            </div>
          </div>
        }

      </div>

    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCatalogPage extends BaseUIComponent {
  private productCatalogService = inject(ProductCatalogService);
  protected products = this.productCatalogService.getProducts();

  protected handleStaggerAnimationEnter(evt: AnimationCallbackEvent) {

    const elem = evt.target.querySelectorAll(".product-catalog");
    const anim  =  animate(elem, {
      opacity : { from : 0.0},
      ease : "inElastic",
      delay : stagger(100),
      duration : stagger(120, { start : 600}),
      scale : {
        from : 1.2
      },
      y : {
        from : -50
      }
    });
    console.log("Product Catalog Page ANIMATION ", elem);
  }


}
function iosHomeScreenAnimation(elem : any){
  const anim  =  animate(elem, {
    opacity : { from : 0.1},
    ease : "inBounce",
    delay : stagger(100),
    duration : stagger(100, { start : 300}),
    y :{ from : "-800px"}
  });
}
