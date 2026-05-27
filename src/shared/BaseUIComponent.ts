import {AnimationCallbackEvent, inject} from '@angular/core';
import {animate, engine, stagger} from 'animejs';
import {DEFAULT_ANIMATION_DURATION} from './Custom-Injection-Tokens';

export abstract class BaseUIComponent {

  private defDuration  = inject(DEFAULT_ANIMATION_DURATION);
  constructor() {
    engine.defaults.duration = this.defDuration;
  }
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
  protected handleStaggerAnimationEnter(evt: AnimationCallbackEvent) {

    const elem = evt.target.querySelectorAll(".product-catalog");
    const anim  =  animate(elem, {
      opacity : { from : 0.0},
      ease : "inElastic",
      delay : stagger(100),
      duration : stagger(120, { start : 600}),
      scale : {
        from : 1.2
      },
      y : {
        from : -50
      }
    });
  }

  handleSlideFromRightUIEnterAnimation(evt : AnimationCallbackEvent) {
    const anim  =  animate(evt.target, {
      duration: 500,
      opacity: {
        from: 0
      },
      right: {
        from : "-100px"
      },
      ease:"linear"
    });
  }
  handleSlideFromRightUILeaveAnimation(evt :  AnimationCallbackEvent) {
    animate(evt.target, {
      duration: 360,
      opacity: {
        to: 0
      },
      right : {
        to : "-100px"
      },
      ease :"linear",
      onComplete: (jsAnimation) => { evt.animationComplete();}
    })
  }
}
