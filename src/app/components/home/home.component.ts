import { Component, OnInit, } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  name: string;
  email: string;
  title = 'cibando';
  nome =  'Antonio';
  ricette: Recipe[];
  ultime4: Recipe[];

  constructor(private recipesService: RecipesService, private userService: UserService){
  }

    ngOnInit(): void {
      this.onGetRecipes();
      this.userService.datiUtente.subscribe( (res: any) => {
        this.name = res.name;
        this.email = res.email;
        //// localStorage.setItem('name', res.name);
        //// localStorage.setItem('email', res.email);

      })

      //// if(localStorage.getItem('name')){
      ////   this.name = localStorage.getItem('name');
      ////   this.email = localStorage.getItem('email');
      //// }
    }

    onGetRecipes(){
      this.recipesService.getRecipes().subscribe({
        next: (res) => {
          this.ricette = res;
          this.ultime4 = this.ricette.slice(-4).reverse();
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

  chiudiModale(){
    //// localStorage.removeItem('name');
    //// localStorage.removeItem('email');
    this.name = '';
    this.email = '';

    const user = {name: '', email: ''}
    this.userService.datiUtente.next(user);

  }

}
