import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { user } from '../Models/usermodel';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  item = new BehaviorSubject(0);
  counter=0
  constructor(private httpclt:HttpClient) {
    this.item.subscribe(
      (it)=>{this.counter=it}
    )
   }

  adduser(usr:user):Observable<user>
  {
    return this.httpclt.post<user>("http://localhost:3000/user", user);
  }
  incriment()
  {
    this.item.next(this.item.getValue()+1)
  }
}
