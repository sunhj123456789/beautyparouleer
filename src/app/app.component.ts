import { Component,OnInit } from '@angular/core';
import {DataService} from './data.service';
import { LogginService } from './loggin.service';
import { logging } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  /*title = 'unittesting';
   number=[1,2,4,5,6];
   oddNumber=[1,3,5];
   evenNumber=[4,6,8];
   isOdd=false;
   value=15;
  serverData=[{type:'server',serverName:'test',content:'test'}];*/
 
  //Accounts:{name:string,status:string}[];  
  isShow:any;
  constructor(private loggedService:LogginService){

  }
  ngOnInit(){
  //this.Accounts=this.accdata.account;
  //console.log(this.Accounts);

 this.loggedService.show(true);
 this.isShow=this.loggedService.get();
 console.log(this.isShow);

  }

  /*addServer(data){
    //console.log(data.content);
    console.log(data);
   // this.serverData.push({type:"server",serverName:data.serverName,content:data.content});
  }

  blueServer1(data){
    //console.log(data.content);
    //console.log(data);
    //this.serverData.push(
      console.log(data);   
      this.serverData.push({type:"blueserver",serverName:data.serverName,content:data.content});
  }
*/
  

}
