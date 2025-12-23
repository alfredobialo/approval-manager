import { Routes } from '@angular/router';
import {Login} from '../features/auth/login';
import {RegisterPage} from './pages/register-page';
import {StudentResult} from '../features/course/studentResult';

export const routes: Routes = [
  {
    path: 'login',
    component: Login,

  },
  {
    path: 'register',
    component: RegisterPage,
  },
  {
    path: 'result',
    component: StudentResult,
  },
  {
    path: '',
    component: StudentResult,
  }
];
