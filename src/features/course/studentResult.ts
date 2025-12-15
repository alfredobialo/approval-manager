import {Component, signal} from '@angular/core';
import {getDefaultStudentResult} from './model/StudentResult';
import {JsonPipe} from '@angular/common';

@Component({
  selector: 'student-result',
  imports: [
    JsonPipe
  ],
  template: `
    <div>
      <h1 class="text-xl text-blue-600">
        {{ result().firstName }} {{ result().lastName }}
        =>> <span class="text-pink-600 font-bold">{{result().id}}</span>
      </h1>

      <div>
        <pre class="p-4 bg-yellow-100">
          {{ result().examResult | json }}
        </pre>
      </div>
    </div>

  `
})
export class StudentResult {
  result = signal(getDefaultStudentResult());

}
