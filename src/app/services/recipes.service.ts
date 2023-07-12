import { Recipe } from 'src/app/models/recipe.model';
import { Injectable } from '@angular/core';
import { RECIPES } from '../mocks/recipe.mocks';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
@Injectable()
export class RecipesService {

  apiBaseUrl = 'api/recipes';

  constructor(private http: HttpClient) { }

  getRecipes(): Observable<Recipe[]> {
    // return of (RECIPES); //mock
    //return this.http.get<Recipe[]>('pippo/' + this.apiBaseUrl  + '/...') //con gli apici singoli
    //return this.http.get<Recipe[]>(`pippo/${this.apiBaseUrl}/...`) //alt96 per i backtic
    return this.http.get<Recipe[]>(`${this.apiBaseUrl}/`)
  }

  getRecipesAsync() {
    return this.http.get<Recipe[]>(`${this.apiBaseUrl}/`)
  }

  getRecipe(id: string): Observable<Recipe> {
    // const recipe = RECIPES.find(ricetta => ricetta._id === id); //mock
    // return of (recipe); //mock
    return this.http.get<Recipe>(`${this.apiBaseUrl}/${id}`);
  }

  createRecipe(recipeData: any): Observable<any> {
    return this.http.post<any>(`${this.apiBaseUrl}/`, recipeData);
  }


}
