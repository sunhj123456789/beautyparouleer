import { Injectable, EventEmitter } from '@angular/core';
import{LoggingService} from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private logstatus:LoggingService) { }

 account=[
   {
   name:'MasterAccount',
   status:'active'
 },
 {
  name:'TestAccount',
  status:'inactive'
 },
 {
  name:'Hidden Account',
  status:'unknown'
}
];

statusUpdated=new EventEmitter<string>();
addAccount(name:string,status:string){
  console.log(name,status);
this.account.push({name:name,status:status});
this.logstatus.loginStatus(status);
}

updataStatus(id:number,status){
  this.account[id].status=status;
  this.logstatus.loginStatus(status);
}

}
