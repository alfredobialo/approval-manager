import { ChangeDetectionStrategy, Component } from '@angular/core';
import {Login} from "../../features/auth/login";
@Component({
  imports: [Login],
  template: `
    <div class="">
      <app-login />
    </div>

  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginPage {

}
