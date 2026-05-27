import {AnimationCallbackEvent, ChangeDetectionStrategy, Component, inject, OnInit, signal, viewChild} from '@angular/core';
import {ProductCatalogService} from '../../shared/product-atalog/services/ProductCatalogService';
import {CartItemModel, ProductInfoModel} from '../../shared/product-atalog/models/ProductInfoModel';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterLink} from '@angular/router';
import {animate, stagger} from 'animejs';
import {BaseUIComponent} from '../../shared/BaseUIComponent';
import {toSignal} from '@angular/core/rxjs-interop';
import {ProductCatalogSkeleton} from '../../features/shopping-cart/product-catalog-skeleton';
import {CartItems} from '../../features/shopping-cart/cart-item';
@Component({
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterLink,
    ProductCatalogSkeleton,
    CartItems
  ],
  template: `
    <div class="h-full">
      <h1 class="2xl:text-3xl text-xl duration-100 dark:text-gray-400 mb-10 text-gray-600">Product Catalog</h1>
      @if(isLoading()){
        <ProductCatalogSkeleton />
      }
      @else{
        <div class="lg:grid xl:grid-cols-3 lg:grid-cols-2 4xl:grid-cols-4 5xl:grid-cols-6 xl:grid-flow-row xl:gap-6 relative" (animate.enter)="handleStaggerAnimationEnter($event)">
          @for(p of products() ;track p.id){
            <div class="mb-[100px] rounded-2xl border-2 bg-white dark:bg-transparent  product-catalog border-gray-300 dark:border-surface-700 px-6
          hover:shadow-xl hover:dark:shadow-gray-600 duration-300 hover:scale-105">
              <div class="h-[220px] w-[190px] xl:h-[360px] xl:w-[310px] py-4 ">
                <img [src]="p.imageUrl" class="aspect-auto " alt=""priority>
              </div>
              <a  [routerLink]="['product']" [queryParams]="{id:p.id}"  class="text-2xl dark:text-blue-400 text-blue-600 underline">{{ p.name }}</a>
              <p class="text-md">{{ p.currency }} <span class="font-bold text-[1.3rem] dark:text-primary-200 text-primary-600">{{ p.price | number }}</span></p>
              <div class="flex xl:justify-between px-4 py-2 mt-8">
                <div class="">Qty Component</div>
                <button class= "shadow text-lg dark:bg-stone-600 px-6 py-2 rounded-lg   dark:hover:bg-stone-500 bg-primary-400  "
                (click)="addToCart(p)">Add To Cart</button>
              </div>
            </div>
          } @empty {
            <p class="text-3xl">No Product here!</p>
          }

        </div>
      }


    </div>
    <CartItems #cartComponent label="Shopping Cart" />
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCatalogPage extends BaseUIComponent {
  private productCatalogService = inject(ProductCatalogService);
  protected products = signal<ProductInfoModel[]>([]);
  protected isLoading = signal<boolean>(false);
  cartComponent = viewChild<CartItems>("cartComponent");
  constructor() {
    super();
    //const signalProduct = toSignal<ProductInfoModel[]>(this.productCatalogService.$getProducts());
    //console.log(signalProduct());
  }

  ngOnInit(){
    this.loadProductsFromServer();

  }

  protected loadProductsFromServer(){
    this.isLoading.set(true) ;
    this.productCatalogService.$getProducts()
      .subscribe({
        next: data => this.products.set(data),
        complete : () => this.isLoading.set(false),
        error: error => console.log(error)
      });
  }

  addToCart(product: ProductInfoModel){
    const cartItem: CartItemModel = {
      productInfo : product,
      qty  :1,
      id : `${product.id}-cart`
    };

    this.cartComponent()?.addToCart(cartItem);
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
