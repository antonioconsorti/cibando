import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegistrationComponent } from "./registration/registration.component";
import { LoginComponent } from "./login/login.component";
import { UserComponent } from "./user.component";

const routes: Routes = [
  { path: '', component: UserComponent, children: [
    { path: 'registrazione', component: RegistrationComponent, pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }
