import {Component, computed, inject} from '@angular/core';
import {AuthService} from './services/AuthService';

@Component({
  standalone: true,
  selector: 'CurrentUserInfo',
  template: `
    <p class="2xl:text-2xl text-lg">{{ user().firstName }} <span class="hidden xl:inline"> {{user().lastName}}</span></p>`
})
export class CurrentUserInfo {
  protected user = inject(AuthService).getCurrentUser();
  protected fullName = computed(() =>{
    const fullName = this.user().firstName + " " + this.user().lastName;
    return fullName;
  });

}
