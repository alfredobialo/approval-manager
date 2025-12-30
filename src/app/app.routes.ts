import { Routes } from '@angular/router';
import {Login} from '../features/auth/login';
import {RegisterPage} from './pages/register-page';
import {StudentResult} from '../features/course/studentResult';
import {LoginPage} from './pages/login-page';
import {Ng} from './pages/ng';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginPage,

  },
  {
    path: 'login/?p',
    component: RegisterPage,

  },
  {
    path: ':orgId/:repoId/src/:filesId',
    component: LoginPage,

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
    path: 'ng',
    component: Ng,
  },
  {
    path: '',
    component: StudentResult,
  }
];
