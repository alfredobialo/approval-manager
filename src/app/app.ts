import {Component, signal} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CurrentUserInfo} from '../features/auth/CurrentUserInfo';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CurrentUserInfo],
  template: `
    <div class="h-full mx-auto xl:w-[80%] w-full  ">
      <div class="dark:bg-surface-900/70 z-50  bg-white sticky top-0 h-[65px] px-6 flex justify-between items-center rounded-b-lg shadow-lg backdrop-blur-sm">
        <h1 class="font-bolder text-4xl text-primary-600">{{ title() }}</h1>
        <div class="space-x-2.5 *:[a]:px-3 *:[a]:text-primary-400 flex itens-center">
          <CurrentUserInfo />
          <button
            (click)="changeDarkMode()"
            class="rounded-2xl px-4 py-2 dark:bg-green-600 bg-green-700">L/D</button>
        </div>
      </div>
      <div class="mt-6 dark:bg-surface-800 bg-surface-100 h-full rounded-t-md flex flex-col justify-center items-center">
        <div class="p-4 w-full xl:min-h-[85vh] min-h-[400px] ">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>`
})
export class App {
  protected readonly title = signal('approval-manager');

  protected changeDarkMode() {
    document.documentElement.classList.toggle('app-theme');
  }
}
