import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { PrimeNGConfig } from 'primeng/api';
import { PaginatorModule } from 'primeng/paginator';
import { ToastModule } from 'primeng/toast';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipesRoutingModule } from "./recipes-routing.module";

import { RecipesComponent } from './recipes.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { NewRecipeComponent } from "./new-recipe/new-recipe.component";
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { DetailComponent } from './detail/detail.component';
import { ChangeSizeDirective } from "src/app/directives/change-size.directive";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from "../carousel/carousel.component";
import { RecipesService } from "src/app/services/recipes.service";

@NgModule({
  declarations: [
    RecipesComponent,
    RecipesListComponent,
    NewRecipeComponent,
    RecipeCardComponent,
    DetailComponent,
    ChangeSizeDirective,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    PaginatorModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    CKEditorModule,
    RecipesRoutingModule,
  ],
  providers: [RecipesService],
  exports: [RecipeCardComponent, CarouselComponent]
})

export class RecipesModule{}
