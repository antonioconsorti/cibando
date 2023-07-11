import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RecipesService } from 'src/app/services/recipes.service';
import { Recipe } from 'src/app/models/recipe.model';
import * as DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-new-recipe',
  templateUrl: './new-recipe.component.html',
  styleUrls: ['./new-recipe.component.scss']
})
export class NewRecipeComponent implements OnInit {

  descrizione: SafeHtml;
  Editor: any = DecoupledEditor;

  onReady(editor) {
    editor.ui.view.editable.element.parentElement.insertBefore(
      editor.ui.view.toolbar.element,
      editor.ui.view.editable.element
    );
  }

  ricette: Recipe[];

  constructor(private ngbModal: NgbModal, private recipesService: RecipesService, private sanitizer: DomSanitizer,){}

  ngOnInit(): void {
  }

  form = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    image: new FormControl('', Validators.required),
    // published: new FormControl('', [Validators.required, Validators.pattern(/^\d{4}\/(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])$/)]),
    difficulty: new FormControl('', [Validators.required, Validators.pattern(/^[1-5]$/)]),
  })
  createRecipe() {
    const recipeData = {
      title: this.form.value.title,
      description: this.sanitizer.bypassSecurityTrustHtml(this.form.value.description),
      image: this.form.value.image,
      published: true,
      difficulty: this.form.value.difficulty
    };

    this.recipesService.createRecipe(recipeData).subscribe({
      next: (res) => {
        this.ricette = res;
      },
      error: (e) => {
        console.log(e)
      }
    }
    );
  }
  onSubmit(){
    this.form;
  }
  open(content: any) {
    this.ngbModal.open(content, {ariaLabelledBy: 'modale privacy', size: 'lg', centered: true});
	}
  clearForm() {
    this.form.reset();
  }
}
