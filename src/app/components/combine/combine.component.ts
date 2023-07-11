import { Component } from '@angular/core';
import { Observable, combineLatest, forkJoin, of } from 'rxjs';
import { map, tap, delay } from 'rxjs/operators';
import { Recipe } from 'src/app/models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-combine',
  templateUrl: './combine.component.html',
  styleUrls: ['./combine.component.scss']
})
export class CombineComponent {

  ricette1$: Observable<Recipe[]> = this.recipesService.getRecipesAsync().pipe(
    map(ricette => ricette.filter(ricetteFiltrate => ricetteFiltrate.difficulty < 2)),
  );
  ricette23$: Observable<Recipe[]> = this.recipesService.getRecipesAsync().pipe(
    map(ricette => ricette.filter(ricetteFiltrate => (ricetteFiltrate.difficulty > 1 && ricetteFiltrate.difficulty < 4))),
  );
  ricette45$: Observable<Recipe[]> = this.recipesService.getRecipesAsync().pipe(
    map(ricette => ricette.filter(ricetteFiltrate => (ricetteFiltrate.difficulty > 3))),
  );

  // nomi1 = [{name: 'Danilo'}, {name: 'Matteo'}, {name: 'Claudio'}];
  // nomi2 = [{name: 'Sid'}, {name: 'Antonio'}];

  primoGruppo$: Observable<any[]>; //abiamo fatto private perchè si
  private secondoGruppo$: Observable<any[]>;
  private terzoGruppo$: Observable<any[]>;

  gruppiCombinati$: Observable<any[]>;

  gruppi: any[];

  constructor(private recipesService: RecipesService){

    // this.primoGruppo$ = of(this.nomi1).pipe(
    //   delay(0),
    //   tap((val) => console.log('emesso il primo gruppo: ' + val))
    // )
    // this.secondoGruppo$ = of(this.nomi2).pipe(
    //   delay(4000),
    //   tap((val) => console.log('emesso il secondo gruppo: ' + val))
    // )
    // this.terzoGruppo$ = of(['Carlo', 'Alessia']).pipe(
    //   delay(1500),
    //   tap((val) => console.log('emesso il terzo gruppo: ' + val))
    // )

    // this.gruppiCombinati$ = combineLatest(this.primoGruppo$, this.secondoGruppo$, this.terzoGruppo$).pipe(
    //   map(([primaChiamata, secondaChiamata, terzaChiamata]) => {
    //     console.log('primaChiamata: ' + JSON.stringify(primaChiamata));
    //     console.log('secondaChiamata: ' + JSON.stringify(secondaChiamata));
    //     console.log('terzaChiamata: ' + JSON.stringify(terzaChiamata));

    //     return [].concat(primaChiamata).concat(secondaChiamata).concat(terzaChiamata);
    //   }),
    //   tap((val) => console.log('tutte le chiamate unite: ', val))
    // )
    // this.gruppi = [];

    // this.gruppiCombinati$ = forkJoin(this.primoGruppo$, this.secondoGruppo$, this.terzoGruppo$).pipe(
    //   map((res) =>
    //     this.gruppi = res
    //   ),
    // )
//////////////////////////////////////////////////////////////SOPRA SPIEGAZIONE
    this.primoGruppo$ = this.ricette1$.pipe(
      delay(0),
      tap((val) => console.log('emesso il primo gruppo: ' + val))
    )
    this.secondoGruppo$ = this.ricette23$.pipe(
      delay(4000),
      tap((val) => console.log('emesso il secondo gruppo: ' + val))
    )
    this.terzoGruppo$ = this.ricette45$.pipe(
      delay(1500),
      tap((val) => console.log('emesso il terzo gruppo: ' + val))
    )

    this.gruppi = [];

    this.gruppiCombinati$ = forkJoin(this.primoGruppo$, this.secondoGruppo$, this.terzoGruppo$).pipe(
      map((res) =>
        this.gruppi = res
      ),
    )
  }




}
