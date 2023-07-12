import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from "./recipes.component";
import { DetailComponent } from "./detail/detail.component";
import { NewRecipeComponent } from "./new-recipe/new-recipe.component";
import { RecipesListComponent } from "./recipes-list/recipes-list.component";

const routes: Routes = [
  { path: '', component: RecipesComponent, children: [
    { path: 'dettaglio/:title/:_id', component: DetailComponent },
    { path: 'nuovaRicetta', component: NewRecipeComponent },
    { path: '', component: RecipesListComponent, pathMatch: 'full' }
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RecipesRoutingModule { }
