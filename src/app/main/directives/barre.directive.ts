import { style } from '@angular/animations';
import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appBarre]'
})
export class BarreDirective {

  // @HostBinding() [style.textDecoration] 'underline';
  constructor() { }

}
