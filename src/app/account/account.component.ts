import { Component, OnInit,Input } from '@angular/core';
import{DataService} from '../data.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
 @Input() acc:{name:string,status:string};
 @Input() in:number;
  constructor(private updataData:DataService) { }

  ngOnInit() {
    console.log(this.acc)
    //console.log(this.in);
   
  }
  setTo(status:string){
    this.updataData.updataStatus(this.in,status);
    this.updataData.statusUpdated.emit(status);
  }    
}
