import { Directive, ElementRef, HostListener, Output, EventEmitter  } from '@angular/core';
import { NgControl } from '@angular/forms';




@Directive({
  selector: '[numbersonly]'
})
export class NumbersOnly {

  constructor(public el: ElementRef) {
      this.el.nativeElement.onkeypress = (evt) => {
          if (evt.which < 48 || evt.which > 57) {
              evt.preventDefault();
          }
      };
  }
}


@Directive({
  selector: '[text-only]'
})
export class TextOnly {

  constructor(public el: ElementRef) {
      this.el.nativeElement.onkeypress = (evt) => {
          if (!((evt.which >= 97 && evt.which <= 122) || (evt.which >= 65 && evt.which <= 90))) {
              evt.preventDefault();
          }
      };
  }
}
