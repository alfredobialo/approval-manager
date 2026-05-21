import {AnimationCallbackEvent, ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {loginModel} from './model/LoginModel';
import {email, FormField, form, required} from '@angular/forms/signals';
import {JsonPipe} from '@angular/common';
import {animate} from 'animejs';
@Component({
  selector: 'app-login',
  imports: [
    FormField,
    JsonPipe
  ],
  host :{
    '(animate.enter)' : 'handleComponentEnterAnimation($event)',
    '(animate.leave)' : 'handleComponentLeaveAnimation($event)'
  },
  template: `
    <div class="min-h-[400px] max-w-[400px]
     bg-primary-contrast px-6 py-4 shadow-md duration-300">
      <h1 class="text-2xl">Please Login Continue!</h1>
      <div class="h-0.5 my-4 bg-gray-200"></div>
      <form role="form" novalidate>
        <div class="">
          <div class="mb-4">
            <p>Email Address:</p>
            <input type="email" [formField]="frm.email">
          </div>
          <div class="mb-4">
            <p>Password:</p>
            <input type="password" [formField]="frm.password">
          </div>
          <div class="mb-4">
            <label for="chkRemember">Remember Password : <input type="checkbox" [formField]="frm.rememberMe"></label>

          </div>
          <div class="mb-4">
            <button class="primary-main {{dynamicStyle()}}" (click)="loginUser()">Login</button>
          </div>
        </div>

      </form>

      <button class="primary-main mb-4" (click)="toggleLogs()" >{{ showLogs() ? "Hide Logs" : "Show Logs" }}</button>
      @if(showLogs()){
        <div class="dark:bg-surface-700 bg-amber-200 rounded-md p-4"
        (animate.enter)="handleEnterAnimation($event)"
        (animate.leave)="handleLeaveAnimation($event)"
        >
          {{ frm().value() | json }}
        </div>
      }

    </div>
  `,
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Login {

  frm = form(loginModel, (formField) => {
    required(formField.email);
    email(formField.email);
    required(formField.password)
  });
  myStyleObj :any  =
    {
       "500": "!bg-orange-500",
       "600": "!bg-orange-600",
       "700": "!bg-orange-700",
       "800": "!bg-orange-900",
    }
  ;
  dynamicStyle = signal<string>("");
  protected showLogs =signal<boolean>(false);
  loginUser() {
    console.log(this.frm().value());
    if(this.frm().touched() && this.frm().valid()) {
      alert("We are submitting your data for Authentication")
    }
    else{
      alert("Your input has issues, please try again!")
    }
    return false;
  }
  constructor() {
  }
  setDynamicStyle = (value : number) =>
    this.dynamicStyle.set(this.myStyleObj[value.toString()]);

  handleEnterAnimation(evt : AnimationCallbackEvent) {
    console.log("Enter Animation",evt);
    const anim  =  animate(evt.target, {
      duration: 1300,
      y : {
        from : 50,
        ease :"outQuad"
      },
      opacity: {
        from: 0,
        to: 1,
        duration:900
      },
      scale: {
        from : 0.4,
        ease:'inOutQuint',
        duration:400
      }
    });
  }
  handleLeaveAnimation(evt :  AnimationCallbackEvent) {
    console.log("Leave Animation",evt);
    animate(evt.target, {
      duration: 1300,
      opacity: {
        to: 0
      },
      scale: 0.6,
      y : {
        to : "+=100"
      },
      ease :"inOutBack",
      onComplete: (jsAnimation) => { evt.animationComplete();}
    })
  }
  handleComponentEnterAnimation(evt : AnimationCallbackEvent) {
    console.log("Enter Animation",evt);
    const anim  =  animate(evt.target, {
      duration: 1100,
      position:'absolute',
      x : {
        to : 550,
        ease :"outQuad"
      },
      opacity: {
        from: 0,
        to: 1,

      },
      scale: {
        from : 0.2
      },
      rotate : {
        from : '45deg',
        ease :'outQuad',
        duration:1000
      },
      ease: "inCirc"
    });
  }
  handleComponentLeaveAnimation(evt :  AnimationCallbackEvent) {
    console.log("Leave Animation",evt);
    animate(evt.target, {
      duration: 1300,
      opacity: {
        to: 0
      },
      scale: 0.6,
      y : {
        to : "+=100"
      },
      ease :"inOutBack",
      onComplete: (jsAnimation) => { evt.animationComplete();}
    })
  }

  protected toggleLogs(){
    this.showLogs.update(x => !x)
  }
}
