import { Component, OnInit, } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  title = 'cibando';
  nome =  'Antonio';
  ricette: Recipe[];
  ultime4: Recipe[];

  constructor(private recipesService: RecipesService){
  }

    ngOnInit(): void {
      this.onGetRecipes();
    }

    onGetRecipes(){
      this.recipesService.getRecipes().subscribe({
        next: (res) => {
          this.ricette = res;
          this.ultime4 = this.ricette.slice(-4);
        },
        error: (e) => {
          console.log(e)
        }
      })
    }

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

  colore = 'red';
  coloreScelto: string;

  evidenziato = false;

  cambiaSwitch(){
    this.colore = this.coloreScelto;
  }

  onEvidenziazione(){
    this.evidenziato = !this.evidenziato;
  }
}
