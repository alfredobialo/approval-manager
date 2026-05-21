import {AnimationCallbackEvent} from '@angular/core';
import {animate} from 'animejs';

export abstract class BaseUIComponent {
  handleUIEnterAnimation(evt : AnimationCallbackEvent) {
    console.log("Enter Animation",evt);
    const anim  =  animate(evt.target, {
      duration: 700,
      y : {
        from : 50,
        ease :"outQuad"
      },
      opacity: {
        from: 0
      },
      scale: {
        from : 0,
        ease:'inOutQuint'
      }
    });
  }
  handleUILeaveAnimation(evt :  AnimationCallbackEvent) {
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
}
