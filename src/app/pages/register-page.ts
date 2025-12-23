import { ChangeDetectionStrategy, Component } from '@angular/core';
import {Register} from '../../features/auth/register';

@Component({
  selector: 'app-register-page',
  imports: [
    Register
  ],
  template: `
   <app-register />
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterPage {

}
