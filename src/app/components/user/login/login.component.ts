import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService]
})
export class LoginComponent {
  loginError = "";

  constructor(
    private auth: AuthService,
    private router: Router,
    private messageService: MessageService,
    private userService: UserService
  ){}

  onSubmit(form){
    if(form.email !== '' && form.password !== ''){

      this.auth.login(form.email, form.password).subscribe({
        next: (res) => {
          if(res) {
            this.auth.saveStorage(res);

            this.userService.ruoloUtente.next(res.role);

            this.messageService.add({severity: 'success', summary: 'Successo', detail: 'Login eseguito con successo', life: 3000});
            setTimeout(() => {
              this.router.navigateByUrl('home');
            }, 3000);

          } else {
            this.loginError = 'email o password errati';
            this.messageService.add({severity: 'error', summary: 'Errore', detail: 'email o password errati', life: 3000});

          }
        },
        error: (error) => {
          console.log(error);
          this.loginError = 'email o password errati';
          this.messageService.add({severity: 'error', summary: 'Errore', detail: 'email o password errati', life: 3000});

        }
      })
    }
  }

}
