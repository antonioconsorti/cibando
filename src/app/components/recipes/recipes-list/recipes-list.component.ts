import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit{
  ricette: Recipe[];

  constructor(private recipesService: RecipesService){
}

  ngOnInit(): void {
    this.onGetRecipes();
  }

  onGetRecipes(){
    this.recipesService.getRecipes().subscribe({
      next: (res) => {
        this.ricette = res;
      },
      error: (e) => {
        console.log(e)
      }
    })
  }
}
