import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  //datiUtente = new Subject();
  datiUtente = new ReplaySubject();

  constructor() { }
}
