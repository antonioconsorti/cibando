import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  @HostBinding('style.background-color') backgroud: string;
  @HostBinding('style.color') color: string;

  @HostListener('keydown') nuovoColore() {
    const coloreBack = Math.floor(Math.random() * this.coloriSfondo.length);
    const coloreTesto = Math.floor(Math.random() * this.coloriTesto.length);

    this.backgroud = this.coloriSfondo[coloreBack];
    this.color = this.coloriTesto[coloreTesto];
  }

  coloriSfondo = ['red', 'darkerd', 'orange'];
  coloriTesto = ['white', 'black', 'gray'];

  constructor() { }

}
