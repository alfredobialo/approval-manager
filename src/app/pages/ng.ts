import { ChangeDetectionStrategy, Component } from '@angular/core';
import {NgModelBinding} from '../../features/angular-features/ng-model-binding';

@Component({
  imports: [
    NgModelBinding
  ],
  template: `
    <app-ng-model-binding />
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Ng {

}
