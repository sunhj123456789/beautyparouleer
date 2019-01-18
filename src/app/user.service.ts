import { Injectable } from '@angular/core';
import{User} from './model/user.model';
import {Observable,of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor() { }
  private user:User[]=[
    {
      name:'sundar',  
      gender:'male',
      department:'accounting'
   },
   {
    name:'ramesh',  
    gender:'male',
    department:'science'
 }];

 get():Observable<User[]>{
  return  of(this.user);
}




}
