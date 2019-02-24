import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }

  loginStatus(status:string){
    console.log('the account status changed'+status);
  }

  }


