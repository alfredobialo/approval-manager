import {Component, signal} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  RouterLink],
  template: `
    <div class="h-full mx-auto xl:w-[80%] w-full  ">
      <div class="dark:bg-surface-900/70  bg-white sticky top-0 h-[65px] px-6 flex justify-between items-center rounded-b-lg shadow-lg backdrop-blur-sm">
        <h1 class="font-bolder text-4xl text-primary-600">{{ title() }}</h1>
        <div class="space-x-2.5 *:[a]:px-3 *:[a]:text-primary-400">
          <button
            (click)="changeDarkMode()"
            class="size-[45px] p-2 dark:bg-green-600 bg-green-700  rounded-full">L/D</button>
          <a routerLink="/result">Result</a>
          <a routerLink="/login">Login</a>
          <a routerLink="/register">Register</a>
          <a routerLink="/ng">Angular Features</a>
        </div>
      </div>
      <div class="mt-6 dark:bg-surface-800 bg-surface-100 h-full rounded-t-md flex flex-col justify-center items-center">
        <div class="p-4 w-full">
          <router-outlet></router-outlet>
          <div class="bg-primary-contrast p-4 mt-10">
            <h2>Student Grading</h2>
            Enter your Score:
            <input type="number" #myScore value="40" (keyup.enter)="calcGrade(myScore)">
            <br>
            Grade is {{ myGrade() }}
          </div>

        </div>
      </div>
    </div>`
})
export class App {
  protected readonly title = signal('approval-manager');
  protected data: any = signal({
    firstName: 'Alfred',
    lastName: 'Obialo',
    role: "admin",
    assignedDocs: []
  });
  myGrade = signal("");

  calcGrade(scoreDomElm: HTMLInputElement) {
    const grade = studentGradeCalculator(scoreDomElm.valueAsNumber);
    this.myGrade.set(grade);
    console.log(scoreDomElm)
  }

  protected changeDarkMode() {
    document.documentElement.classList.toggle('app-theme');
  }
}

export const studentGradeCalculator = (examScore: number) => {
  let grade = "F";
  if (examScore >= 70) {
    grade = "A";
  } else if (examScore >= 60) {
    grade = "B";
  } else if (examScore >= 50) {
    grade = "C";
  } else if (examScore >= 45) {
    grade = "D"
  } else if (examScore >= 40) {
    grade = "E"
  }
  return grade;
}


const addNumber = (a: number, b: number) => a + b;

function addNum(a: number, b: number) {
  return a + b;
}
