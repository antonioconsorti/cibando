import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from '@angular/common/http';
import { PrimeNGConfig } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';

import { RegistrationComponent } from "./registration/registration.component";
import { ModaleComponent } from "../modale/modale.component";
import { ChangeColorDirective } from "src/app/directives/change-color.directive";
import { OnPlaceholderDirective } from "src/app/directives/on-placeholder.directive";
import { LoginComponent } from "./login/login.component";
import { UserService } from "src/app/services/user.service";
import { UserRoutingModule } from "./User-routing.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
    ModaleComponent,
    ChangeColorDirective,
    OnPlaceholderDirective,
  ],
  imports: [
    NgbModule,
    CommonModule,
    HttpClientModule,
    ToastModule,
    CKEditorModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule,
    PasswordModule,
    DividerModule
  ],
  providers: [UserService],
  exports: [ModaleComponent]
})

export class UserModule{}
