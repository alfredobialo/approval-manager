import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-ng-model-binding',
  imports: [FormsModule],
  template: `
    <p class="text-2xl">
      ng-model-binding works!
    </p>
    <div class="space-y-8 #myDiv">
      <div class="dark:bg-yellow-700  bg-stone-200 rounded-md p-6 min-h-[200px] flex flex-col justify-center items-center">
        <input #myTxt type="text" class="text-2xl" [value]="userName()" (keyup) ="updateUserName(myTxt.value)" />
        <div class="mt-4">
          <input type="text" class="text-4xl" [(ngModel)] = "funnyName" />
        </div>
      </div>
      <div class="dark:bg-yellow-500 bg-stone-200 rounded-md p-6 min-h-[200px] flex justify-center items-center">
        <p class="text-3xl">{{userName()}}</p>
      </div>
      <div class="dark:bg-yellow-500 bg-stone-200 rounded-md p-6 min-h-[200px] flex-col flex justify-center items-center">
        Welcome {{userName()}}
        <p class="text-3xl">[(ngModel)] => {{funnyName}}</p>
      </div>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgModelBinding {

  userName = signal("Alfred");
  funnyName = "Hello Alfred";
  protected updateUserName(input : string) {
    this.userName.set(input);
  }
}
