import {Component} from '@angular/core';
import {SkeletonModule} from 'primeng/skeleton';

@Component({
  standalone: true,
  selector: 'ProductCatalogSkeleton',
  imports: [
    SkeletonModule
  ],
  template: `
    <div class="lg:grid xl:grid-cols-3 lg:grid-cols-2 4xl:grid-cols-4 5xl:grid-cols-6 xl:grid-flow-row xl:gap-6 relative" >
      @for(p of [1,2,3,4,5,6,7,8] ;track $index){
        <div class="mb-[100px] min-h-[400px] rounded-2xl border-2 bg-white dark:bg-transparent border-gray-300 dark:border-surface-700 px-6
          ">
          <p-skeleton  height="300px" class="mb-6 ">

          </p-skeleton>
          <p-skeleton height="30px" width="70%" class="text-2xl mb-4 "></p-skeleton>
          <p-skeleton  class="text-md"><span
            class="font-bold text-[1.3rem] dark:text-primary-200 text-primary-600"></span></p-skeleton>
          <div class="flex xl:justify-end py-4 mt-8">

            <p-skeleton width="120px" height="40px" class="shadow text-lg dark:bg-stone-600 px-6 py-2 rounded-lg   dark:hover:bg-stone-500 bg-primary-400  ">Add To Cart
            </p-skeleton>
          </div>
        </div>
      }

    </div>
  `
})
export class ProductCatalogSkeleton {

}
