import { Component,OnInit } from '@angular/core';
import {UserService} from './user.service';
import { User } from './model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'unittesting';
  data:User[];
  constructor(private userservice:UserService){

  }
  ngOnInit(){
    this.getuser();
  }

  getuser(){
    this.userservice.get().subscribe((data)=>{
  this.data=data;
  console.log(this.data);
    });


  }
  

}
