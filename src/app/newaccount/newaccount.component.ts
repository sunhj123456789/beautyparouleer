import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import{LoggingService} from '../logging.service';

@Component({
  selector: 'app-newaccount',
  templateUrl: './newaccount.component.html',
  styleUrls: ['./newaccount.component.css']
})
export class NewaccountComponent implements OnInit {
 name='';
 status='';
  constructor(private addService:DataService,private log:LoggingService) { }

  ngOnInit() {
    this.addService.statusUpdated.subscribe(
      (status: string) => alert('New Status: ' + status)
    );
  }
  Addaccount(name:string,status:string){
   this.addService.addAccount(name,status);
   this.log.loginStatus(status);
  }
setTo(value:string){
  console.log(value);
}


}
