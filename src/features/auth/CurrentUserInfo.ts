import {Component, computed, inject} from '@angular/core';
import {AuthService} from './services/AuthService';

@Component({
  standalone: true,
  selector: 'CurrentUserInfo',
  template: `
    <p class="text-2xl">{{ fullName() }}</p>`
})
export class CurrentUserInfo {
  protected user = inject(AuthService).getCurrentUser();
  protected fullName = computed(() =>{
    const fullName = this.user().firstName + " " + this.user().lastName;
    return fullName;
  });

}
