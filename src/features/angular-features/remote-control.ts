import {ChangeDetectionStrategy, Component, output} from '@angular/core';

@Component({
  selector: 'app-remote-control',
  imports: [],
  template: `
    <div class="h-[500px] w-[100px] bg-black rounded-3xl p-4">
      <div class="mb-16">
        <button class="size-[35px] flex
        justify-center items-center hover:bg-stone-700 duration-200
        shadow-amber-300 shadow rounded-full p-2
        bg-stone-800 " (click)="handleRemoteButtonPressed('ON/OFF')">&empty;</button>
      </div>
      <div class="">
        <button (click)="handleRemoteButtonPressed('NAV')"
                class="size-[70px] flex hover:bg-stone-700 duration-200 justify-center items-center shadow-amber-300 shadow rounded-full p-2 bg-stone-800">

        </button>
      </div>
    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RemoteControl {
 onButtonPressed  = output<string>();

  protected handleRemoteButtonPressed(whichBtn: string) {
    this.onButtonPressed.emit(whichBtn);
  }
}

