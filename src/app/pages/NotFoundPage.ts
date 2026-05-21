import {Component} from '@angular/core';

@Component({
  standalone: true,
  selector: 'NotFoundPage',
  template: `
    <div class="">
      <h1 class="text-4xl dark:text-gray-400/90 text-primary-600" >
        Page Not Found!
      </h1>
    </div>
  `
})
export class NotFoundPage {
}
