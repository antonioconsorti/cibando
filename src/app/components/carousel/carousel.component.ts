import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit{

  ricette: Recipe[];
  //paginaCorrente: string = 'home';
  @Input() valoreInput: string;

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

  percorso = '../assets/img/imageBg-';
  images = [
    {
      id: 1,
      label: 'spaghetti al pomodoro'
    },
    {
      id: 2,
      label: 'tagliata di manzo'
    },
    {
      id: 3,
      label: 'tiramisù classico'
    }
  ];

  // isHomeCaroselloVisible(): boolean {
  //   return this.router.url === '/home';
  // }

  // isRicetteCaroselloVisible(): boolean {
  //   return this.router.url === '/ricette';
  // }
}
