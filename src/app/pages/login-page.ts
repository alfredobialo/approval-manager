import { ChangeDetectionStrategy, Component } from '@angular/core';
import {Login} from "../../features/auth/login";
@Component({
  imports: [Login],
  template: `
    <div class="bg-purple-200 p-6">
      <app-login />
    </div>

  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage {

}
