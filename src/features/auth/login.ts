import {ChangeDetectionStrategy, Component, signal} from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  template: `
    <div class="min-h-[400px] max-w-[400px]
     bg-gray-100 rounded-lg px-6 py-4 shadow-md">
      <h1 class="text-2xl">Please Login Continue!</h1>
      <div class="h-0.5 my-4 bg-gray-200"></div>
      <form role="form" >
      <div class="">
        <div class="mb-4">
          <p>Email Address:</p>
          <input type="email">
        </div>
        <div class="mb-4">
          <p>Password:</p>
          <input type="password" required maxlength="15">
        </div>
        <div class="mb-4">
            <button class="primary-main">Login</button>
        </div>
      </div>

      </form>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Login {


}
