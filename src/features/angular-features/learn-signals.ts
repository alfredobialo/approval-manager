import { ChangeDetectionStrategy, Component, signal, output } from '@angular/core';

@Component({
  host: {
    class: 'flex flex-col items-center justify-center'
  },
  selector: 'app-learn-signals',
  imports: [],
  template: `
    <p>
      learn-signals works! <span class="text-4xl">Age is : {{age()}}</span>
    </p>

    <div class="space-x-6 p-3">
      <button class="primary-main" (click)="changeMyAge()">Change Age</button>
      <button class="primary-main" (click)="resetAge()">Reset Age</button>
    </div>
  `,
  styles: `
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LearnSignals {
  onAgeChanged  = output<number>();
  defaultAge = 20;
 protected age   = signal<number>(this.defaultAge);
 changeMyAge () {
    this.age.update(prevAge => prevAge + 10);
    this.onAgeChanged.emit(this.age());
 }
 resetAge(){
   this.age.set(this.defaultAge);
   this.onAgeChanged.emit(this.age());
 }
}
