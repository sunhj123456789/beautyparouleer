import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LogginService {
  
  isLogged:boolean;
  constructor() { 
    
  }
  
 show(flag){
   this.isLogged=flag;
 }

 get(){
   return this.isLogged;
 }
  
  
}
