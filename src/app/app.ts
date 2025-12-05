import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <div class="bg-stone-700 min-h-screen mx-auto xl:w-[80%] w-full ">
      <div class="bg-white/20 h-[55px] px-6 flex justify-start items-center">
        <h1 class="font-bolder text-4xl text-white/80">{{ title() }}</h1>
      </div>
      <div class="mt-6 text-neutral-300 h-full">
        <div class="p-4 ">
          <p class="text-2xl">Hello World</p>
        </div>
        <router-outlet></router-outlet>
      </div>
    </div>`,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('approval-manager');
}
