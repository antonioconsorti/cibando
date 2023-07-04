import { Component, Input, Output, EventEmitter } from '@angular/core';
import { elementAt } from 'rxjs';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent {

@Input() recipes: Recipe[];
@Output() messaggio = new EventEmitter();
page = 1;
ricettePerPagina = 4;

accorciaTesto(descrizione): number{
  let lunghezzaMassima = 180;
  if(descrizione.length <= lunghezzaMassima){
    return lunghezzaMassima;
  } else {
    let ultimoSpazio = descrizione.lastIndexOf(' ', lunghezzaMassima);
    return ultimoSpazio;
  }
}

inviaTitolo(titolo: string){
  this.messaggio.emit(titolo)
}

paginate(e) {
e.page = e.page +1;
this.page = e.page;
}

}
