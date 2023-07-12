import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-acaso',
  templateUrl: './acaso.component.html',
  styleUrls: ['./acaso.component.scss']
})
export class AcasoComponent {


  fraseInput: string | undefined;
  @Output() fraseOutput = new EventEmitter<string>();
  @Input() dalPadre: string[] = [];

  pulisciArray() {
    this.dalPadre = [];
  }

  inviaFrase() {
    this.fraseOutput.emit(this.fraseInput);
  }
}
