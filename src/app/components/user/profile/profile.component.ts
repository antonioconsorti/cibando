import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import * as moment from 'moment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{

  dataRegistrazione: any;

  user: any;
  user1: any;

  constructor(private userService: UserService){}

  ngOnInit() {
    this.readStorage();
    const email = this.user.email;

    this.userService.getUser(email).subscribe(
      (res) => {
        this.user1 = res;
        this.dataRegistrazione = moment(this.user1.createAt).locale('it').format('dddd DD MMMM YYYY');
      },
      (error) => {
        console.log("Errore durante il recupero dei dati dell'utente:", error);
      }
    );
  }

  readStorage() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.user = user;
    } else {
      this.user = null;
      console.log("Nessun dato trovato in localStorage");
    }
  }
}
