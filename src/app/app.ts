import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Register} from '../features/auth/register';
import {StudentResult} from '../features/course/studentResult';
import {Login} from '../features/auth/login';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Register, StudentResult, Login],
  template: `
    <div class="h-full mx-auto xl:w-[80%] w-full  ">
      <div class="bg-white sticky top-0 h-[65px] px-6 flex justify-start items-center rounded-b-lg shadow-lg">
        <h1 class="font-bolder text-4xl text-orange-600/80">{{ title() }}</h1>
      </div>
      <div class="mt-6 bg-white h-full rounded-t-md flex flex-col justify-center items-center">
        <div class="p-4 ">
          <div class="mt-4  text-neutral-800 px-4 py-6 rounded-lg ring-1 ring-neutral-400 lg:w-[600px] min-h-60">
            <div class="">
              <app-login />
              <student-result />
              <app-register />
            </div>

            <div class="bg-purple-100 p-4">
              <h2>Student Grading</h2>
              Enter your Score:
              <input type="number" #myScore value="40" (keyup.enter)="calcGrade(myScore)">
              <br>
              Grade is {{myGrade()}}
            </div>
          </div>
        </div>
        <router-outlet></router-outlet>
      </div>
    </div>`,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('approval-manager');
  protected data : any = signal({
    firstName : 'Alfred',
    lastName : 'Obialo',
    role: "admin",
    assignedDocs: []
  });
  myGrade = signal("");

  calcGrade(scoreDomElm: HTMLInputElement){
    const grade  = studentGradeCalculator(scoreDomElm.valueAsNumber);
    this.myGrade.set(grade);
    console.log(scoreDomElm)
  }
}

export const studentGradeCalculator = (examScore : number)=>
{
  let grade = "F";
  if(examScore >= 70){
    grade = "A";
  }
  else if(examScore >= 60){
    grade = "B";
  }
  else if (examScore >= 50){
    grade = "C";
  }
  else if(examScore >= 45){
    grade = "D"
  }
  else if (examScore >= 40){
    grade = "E"
  }
   return grade;
}


const addNumber = (a : number, b : number) => a + b;

function addNum(a : number , b:number ){
  return a + b;
}
