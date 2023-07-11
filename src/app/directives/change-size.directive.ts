import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appChangeSize]'
})
export class ChangeSizeDirective {
  @HostBinding('style.transform') transform = 'scale(1)';

  @HostListener('mouseover') ingrandisci(){
    this.transform = 'scale(1.05)';
  }
  @HostListener('mouseout') nascondiPlace(){
    this.transform = 'scale(1)';
  }

  constructor() { }

}
