import {ChangeDetectionStrategy, Component, effect, input, signal, SimpleChanges, untracked} from '@angular/core';

@Component({
  selector: 'app-smart-tv',
  imports: [],
  template: `
   <div class="h-[350px] bg-black w-[550px] xl:w-[650px] border-4 border-gray-800 flex justify-center items-center"
   [class.bg-blue-600]="isTvOn()" >
     <div class="text-md" [class.hidden]="isTvOn()">Samsung Smart Tv</div>
   </div>

   <div class="space-x-4">
     <button class="primary-main" (click)="turnOn()">Turn On</button>
     <button class="primary-main" (click)="turnOff()">Turn Off</button>
   </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmartTv {
  protected isTvOn = signal(false);
  tvCmd = input<string>("");

  constructor() {
    effect(() => {
      /*const cmd  = this.tvCmd();

        if(cmd === "ON/OFF"){
          /!*if(this.isTvOn()){
            untracked(() =>  this.turnOff());
          }
          else{
            untracked(() =>  this.turnOn());
          }*!/
        }
        console.log("TV got CMD => ",cmd);*/


    })
  }
  ngOnChanges(changes: SimpleChanges<SmartTv>) {
    const cmd  = changes.tvCmd?.currentValue;
    if(cmd === "ON/OFF"){
      if(this.isTvOn()){
        this.turnOff();

      }
      else{
        this.turnOn();
      }
    }
    console.log("TV got CMD => ",cmd, changes.tvCmd);
  }
   protected turnOn(){
    this.isTvOn.set(true);


  }

   protected turnOff() {
    this.isTvOn.set(false);
  }
}
