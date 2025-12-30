import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {loginModel} from './model/LoginModel';
import {email, Field, form, required} from '@angular/forms/signals';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [
    Field,
    JsonPipe
  ],
  template: `
    <div class="min-h-[400px] max-w-[400px]
     bg-primary-contrast rounded-lg px-6 py-4 shadow-md">
      <h1 class="text-2xl">Please Login Continue!</h1>
      <div class="h-0.5 my-4 bg-gray-200"></div>
      <form role="form" novalidate>
        <div class="">
          <div class="mb-4">
            <p>Email Address:</p>
            <input type="email" [field]="frm.email">
          </div>
          <div class="mb-4">
            <p>Password:</p>
            <input type="password" [field]="frm.password">
          </div>
          <div class="mb-4">
            <label for="chkRemember">Remember Password : <input type="checkbox" [field]="frm.rememberMe"></label>

          </div>
          <div class="mb-4">
            <button class="primary-main {{dynamicStyle()}}" (click)="loginUser()">Login</button>
          </div>
        </div>

      </form>

      <div class="dark:bg-surface-700 bg-amber-200 rounded-md p-4">
        {{ frm().value() | json }}
      </div>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Login {

  frm = form(loginModel, (formField) => {
    required(formField.email);
    email(formField.email);
    required(formField.password);
  });
  myStyleObj :any  =
    {
       "500": "!bg-orange-500",
       "600": "!bg-orange-600",
       "700": "!bg-orange-700",
       "800": "!bg-orange-900",
    }
  ;
  dynamicStyle = signal<string>("");

  loginUser() {
    console.log(this.frm().value());
    if(this.frm().touched() && this.frm().valid()) {
      alert("We are submitting your data for Authentication")
    }
    else{
      alert("Your input has issues, please try again!")
    }
    return false;
  }
  constructor() {
  }
  setDynamicStyle = (value : number) =>
    this.dynamicStyle.set(this.myStyleObj[value.toString()]);

}
