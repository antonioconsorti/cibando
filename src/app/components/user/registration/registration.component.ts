import { PrimeNGConfig } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{

  titolo = 'pasta al sugo';
  id = 24;

  constructor(
    private config: PrimeNGConfig,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private ngbModal: NgbModal
    ){}

  ngOnInit(): void {
    this.config.setTranslation({
      weak: 'povera',
      medium: 'media',
      strong: 'forte',
    })
  }

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s]){8,16}$/)]),
    ripeti: new FormControl('', Validators.required),
    box: new FormControl(false, Validators.requiredTrue)
  })

  onSubmit(){
    this.form;
    const user = {name: this.form.value.name, email: this.form.value.email}
    this.userService.datiUtente.next(user);
    this.router.navigateByUrl('home');
  }
  controlloPassword(): boolean{
    if(this.form.value.password === this.form.value.ripeti){
      return true;
    } else {
      return false;
    }

  }

  open(content: any, titolo?: string, id?: number){
    let title = titolo;
    let idNum = id;

    this.ngbModal.open(content, {ariaLabelledBy: 'modale privacy', size: 'lg', centered: true}).result
    .then((res) => {
      console.log('azione da eseguire in caso positivo' + 'titolo: ' + title + 'id: ' + idNum);
    }).catch((res)=> {
      console.log('nessuna azione da eseguire');
    })
  }
  // open(content: any) {
	// 	const modalRef = this.ngbModal.open(content, {ariaLabelledBy: 'modale privacy', size: 'lg', centered: true});
	// 	modalRef.componentInstance.name = 'World';
	// }
}
