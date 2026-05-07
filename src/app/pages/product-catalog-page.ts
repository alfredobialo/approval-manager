import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  imports: [
  ],
  template: `
    <div class="h-full">
      <h1 class="2xl:text-3xl text-xl duration-100 dark:text-gray-400 text-gray-600">Product Catalog</h1>

      <div>
        <div class="  bg-gray-500 h-[200px] w-[150px] rounded-2xl "></div>
        <p class="text-3xl">Apple Iphone</p>
        <p class="font-bold text-3xl">#689,000</p>
        <p class= "text-3xl text-black bg-amber-100 h-[70px] w-[250px] flex justify-center items-center hover:bg-amber-300 ">Add To Cart</p>
      </div>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCatalogPage {

}
