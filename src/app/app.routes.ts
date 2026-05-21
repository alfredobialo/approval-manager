import { Routes } from '@angular/router';
import {RegisterPage} from './pages/register-page';
import {LoginPage} from './pages/login-page';
import {ProductCatalogPage} from './pages/product-catalog-page';
import {ProductDetailsPage} from './pages/product-details-page';
import {NotFoundPage} from './pages/NotFoundPage';


export const routes: Routes = [
  {
    path: 'login',
    component: LoginPage,

  },
  {
    path: 'register',
    component: RegisterPage,
  },
  {
    path: 'product-catalog/product',
    component: ProductDetailsPage,
  },

  {
    path: 'product-catalog',
    component: ProductCatalogPage,
  },
  {
    path: '',
    redirectTo: "product-catalog",
    pathMatch: 'full',
  },
  {
    path: '**',
    component: NotFoundPage,
  },
];
