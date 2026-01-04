import {ChangeDetectionStrategy, Component, signal, viewChild} from '@angular/core';
import {SmartTv} from '../../features/angular-features/smart-tv';
import {RemoteControl} from '../../features/angular-features/remote-control';

@Component({
  selector: 'app-tv-remote-page',
  imports: [
    SmartTv,
    RemoteControl
  ],
  template: `
   <div class="flex flex-col justify-center items-center min-h-[100px]">
     <h1 class="text-2xl">Communication Between Components using Events in Angular</h1>
     <div class="mt-10 min-h-80 flex justify-between items-center gap-10 w-full dark:bg-surface-700/70 rounded-xl p-4">
       <app-smart-tv #tv [tvCmd]="remoteBtnCmd()" />
       <app-remote-control (onButtonPressed)="handlerRemotePressed($event)" />
     </div>

     <button class="danger-main circular-button" (click)="onTv()">ON</button>
   </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TvRemotePage {
  smartTvComponent = viewChild<SmartTv>("tv");
  remoteBtnCmd = signal("");
  protected onTv() {
    console.log(this.smartTvComponent());
  }

  protected handlerRemotePressed(data: string) {
    this.remoteBtnCmd.set(data);
    console.log(data);
  }
}
