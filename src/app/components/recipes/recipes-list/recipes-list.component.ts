import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';
import { take, first, Observable, map } from 'rxjs';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit{

  // ricette: Recipe[];
  // ricette$: Observable<Recipe[]> = this.recipesService.getRecipesAsync().pipe(
  //   map(ricette => ricette.filter(ricetteFiltrate => ricetteFiltrate.difficulty < 5)), //posso fermarmi anche a primadi .pipe per farlo funzionare senza condizioni
  // ); //$ convenzione che si usa per indicare che si usa nella pipe async

  messaggio: string;

  constructor(private recipesService: RecipesService){
}

  ngOnInit(): void {
    // this.onGetRecipes();
  }

  // onGetRecipes(){
  //   this.recipesService.getRecipes().pipe(
  //     take(1)
  //     // first()   stessa cosa di take(1)
  //   ).subscribe({
  //     next: (res) => {
  //       this.ricette = res;
  //     },
  //     error: (e) => {
  //       console.log(e)
  //     }
  //   })
  // }

  riceviTitolo(e: any){
    if(e == this.messaggio){
      this.messaggio = undefined;
    } else {
      this.messaggio = e;
    }
  }

}
