import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {form, FormField, required, email, maxLength, apply} from "@angular/forms/signals";
import {IRegistrationModel, registrationModel} from './model/IRegistrationModel';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [
    JsonPipe,
    FormField
  ],
  host : {
    class: ''
  },

  template: `
    <h1 class="text-lg mb-7">Fill the Form to Register</h1>

    <div class="mb-4">
        <p>First Name</p>
        <input type="text" class=""
               [formField]="regForm.firstName">
      </div>
    <div class="mb-4">
        <p>Last Name</p>
        <input type="text" class=""
               [formField]="regForm.lastName">
      </div>
    <div class="mb-4">
        <p>Email Address</p>
        <input type="text" class=" "
               [formField]="regForm.email">
      <div class="mt-2">
      @if(regForm.email().value() !== "" && !regForm.email().valid()) {
        @for(err of regForm.email().errors(); track err.kind) {
        <span class="bg-red-100 rounded ring-1 ring-red-500 text-red-600 px-2 py-1 mb-4">
          {{err.message}}
        </span>

        }
      }

      </div>

      </div>

    <div class="bg-red-100 p-4">

      <code>
        {{regForm().errorSummary()  | json}}
      </code>
    </div>

  `,  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Register {

  protected reg = signal<IRegistrationModel>(registrationModel);
  protected regForm = form<IRegistrationModel>(this.reg, (path) => {
    required(path.firstName, {message : "First Name is Required"});
    required(path.lastName, {message : "Last Name is Required"});
    required(path.password, {message : "Password is Required"});
    required(path.retypePassword, {message : "Please Re-type Password"});
    required(path.email, {message : "Email is Required"});
    maxLength(path.email,110, {message : "Maximum Email character length exceeded. (Just Testing max() validator)"});
    email(path.email,  {message : "Email is not valid"});

  });
  constructor() {
    this.regForm.firstName().setControlValue("Alfred");
  }

}
