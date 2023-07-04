import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-modale',
  templateUrl: './modale.component.html',
  styleUrls: ['./modale.component.scss']
})
export class ModaleComponent implements OnInit {

  name: string;
  email: string;

  constructor(private userService: UserService){}

  ngOnInit(): void {
    this.userService.datiUtente.subscribe( (res: any) => {
      // this.name = res.name;
      // this.email = res.email;
      localStorage.setItem('name', res.name);
      localStorage.setItem('email', res.email);
      console.log(res);

      if(localStorage.getItem('name')){
        this.name = localStorage.getItem('name');
        this.email = localStorage.getItem('email');
        console.log(this.name);
      }
    })
  }

  chiudiModale(){
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    this.name = '';
    this.email = '';
  }

}
