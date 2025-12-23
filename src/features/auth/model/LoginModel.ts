import {model, signal} from '@angular/core';
import {FormCheckboxControl} from '@angular/forms/signals';

export interface LoginModel {
  email: string;
  password: string;
  rememberMe: boolean;
}

export const loginModel = signal<LoginModel>({
  email : '',
  password: '',
  rememberMe: true
});
