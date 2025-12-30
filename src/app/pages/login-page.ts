import { ChangeDetectionStrategy, Component } from '@angular/core';
import {Login} from "../../features/auth/login";
@Component({
  imports: [Login],
  template: `
    <div class="bg-primary-contrast p-6 flex justify-center items-center">
      <app-login />
    </div>

  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage {

}
