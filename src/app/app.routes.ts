import { Routes } from '@angular/router';
import {RegisterPage} from './pages/register-page';
import {LoginPage} from './pages/login-page';
import {ProductCatalogPage} from './pages/product-catalog-page';
import {ProductDetailsPage} from './pages/product-details-page';


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
    path: 'catalog?q',
    component: ProductDetailsPage,
  },
  {
    path: '',
    component: ProductCatalogPage,
  }
];
