import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-acaso',
  templateUrl: './acaso.component.html',
  styleUrls: ['./acaso.component.scss']
})
export class AcasoComponent {
  @Input() oggettoFiglio: string;
  @Output() oggettoEmesso = new EventEmitter<string>();
  @ViewChild('nuovoOggetto') nuovoOggetto: ElementRef;

    addNuovoOggetto(oggetto){
      console.log(oggetto)

      this.oggettoEmesso.emit(oggetto);
      this.nuovoOggetto.nativeElement.value = '';
    }

    removeOggetti(){
      this.oggettoEmesso.emit('elimina');
    }

  }
