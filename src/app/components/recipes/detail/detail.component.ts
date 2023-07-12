import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit{

  ricetta: Recipe;
  percorso = '../../../../assets/img/difficolta-';

  pag;

  constructor(
    private recipeService: RecipesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ){}
  ngOnInit(): void {
    this.onGetRecipe2();
  }

  onGetRecipe(): void {
    const id = Number(this.activatedRoute.snapshot.paramMap.get('_id')); //mock
    // const id = String(this.activatedRoute.snapshot.paramMap.get('_id'));

    const pag = this.activatedRoute.snapshot.paramMap.get('page');

    if(pag){
      this.pag = pag;
    }

    this.recipeService.getRecipe(id).pipe(
      take(1)
      ).subscribe({
        next: (res) => {
        this.ricetta = res;
      },
      error: (e) => console.log(e)
    })
  }
  onGetRecipe2(): void {
    this.activatedRoute.parent.params.subscribe((par) => {
      const pagina = par['pag'];
      if(pagina){
        this.pag = pagina;
      }
    })
    this.activatedRoute.params.subscribe((urlParams) => {
      const id = urlParams['_id'];
      const idNumb = Number(id); //mock
      // const idNumb = String(id);
      // const titolo = p['title'];

      this.recipeService.getRecipe(idNumb).subscribe(
        res => this.ricetta = res
      );
    })
  }

  tornaIndietro(){
    this.router.navigateByUrl('/ricette/' + this.pag)
  }
}
