import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { PrimeNGConfig } from 'primeng/api';
import { PaginatorModule } from 'primeng/paginator';
import { ToastModule } from 'primeng/toast';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { RecipeCardComponent } from './components/recipes/recipe-card/recipe-card.component';
import { DetailComponent } from './components/recipes/detail/detail.component';
import { RecipesListComponent } from './components/recipes/recipes-list/recipes-list.component';
import { UserComponent } from './components/user/user.component';
import { RegistrationComponent } from './components/user/registration/registration.component';
import { ModaleComponent } from './components/modale/modale.component';
import { NewRecipeComponent } from './components/new-recipe/new-recipe.component';
import { ChangeColorDirective } from './directives/change-color.directive';
import { OnPlaceholderDirective } from './directives/on-placeholder.directive';
import { CombineComponent } from './components/combine/combine.component';
import { ChangeSizeDirective } from './directives/change-size.directive';
import { LoginComponent } from './components/user/login/login.component';
import { ProfileComponent } from './components/user/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    HeaderComponent,
    FooterComponent,
    RecipesComponent,
    HomeComponent,
    ErrorComponent,
    RecipeCardComponent,
    DetailComponent,
    RecipesListComponent,
    UserComponent,
    RegistrationComponent,
    ModaleComponent,
    NewRecipeComponent,
    ChangeColorDirective,
    OnPlaceholderDirective,
    CombineComponent,
    ChangeSizeDirective,
    LoginComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    PasswordModule,
    DividerModule,
    BrowserAnimationsModule,
    PaginatorModule,
    HttpClientModule,
    ToastModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
