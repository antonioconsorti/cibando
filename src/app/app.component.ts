import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cibando';
  nome =  'Antonio';
  label = 'logo di cibando';

  allievi = [
  {
    nome: 'Antonio',
    cognome: 'Consorti',
    eta: 24,
  },
  {
    nome: 'Dario',
    cognome: 'Rispoli',
    eta: 30,
  },
  {
    nome: 'Emiliano',
    cognome: 'Marcellini',
    eta: 26,
  },
  {
    nome: 'Tiziano',
    cognome: 'Costantini',
    eta: 26,
  }
  ];

  percorso = '../assets/img/imageBg-';
  images = [
    {
      id: 1,
      label: 'spaghetti al pomodoro'
    },
    // {
    //   id: 2,
    //   label: 'tagliata di manzo'
    // },
    // {
    //   id: 3,
    //   label: 'tiramisù classico'
    // }
  ];
}
