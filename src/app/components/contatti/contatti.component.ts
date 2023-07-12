import { Component, OnInit } from '@angular/core';
import * as DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";

@Component({
  selector: 'app-contatti',
  templateUrl: './contatti.component.html',
  styleUrls: ['./contatti.component.scss']
})
export class ContattiComponent implements OnInit {

  description: string;

  value!: number;

  food: any[] | undefined;

  selectedFood: String;

  Editor: any = DecoupledEditor;

  onReady(editor) {
    editor.ui.view.editable.element.parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.view.editable.element
    );
  }

  ngOnInit() {
      this.food = [
          {
              name: 'Primo',
              code: 'AU',
              states: [
                  {
                      name: 'Pasta',
                      cities: [
                          { cname: 'Pomodoro', code: 'A-SY' },
                          { cname: 'Pesto', code: 'A-NE' },
                          { cname: 'Carbonara', code: 'A-WO' }
                      ]
                  },
              ]
          },
          {
              name: 'Secondo',
              code: 'CA',
              states: [
                  {
                      name: 'Carne',
                      cities: [
                          { cname: 'Bianca', code: 'C-MO' },
                          { cname: 'Rossa', code: 'C-QU' }
                      ]
                  },
                  {
                      name: 'Pesce',
                      cities: [
                          { cname: 'Spada', code: 'C-OT' },
                          { cname: 'Gatto', code: 'C-TO' }
                      ]
                  }
              ]
          },
          {
              name: 'Dolce',
              code: 'US',
              states: [
                  {
                      name: 'Dolcissimo',
                      cities: [
                          { cname: 'Crepes', code: 'US-LA' },
                          { cname: 'Tiramisù', code: 'US-SD' },
                      ]
                  },
              ]
          }
      ];
  }

  salvaDati() {
    const datiSalvati = {
      selectedFood: this.selectedFood,
      value: this.value,
      description: this.description
    };
    console.log(datiSalvati);

  }
}
