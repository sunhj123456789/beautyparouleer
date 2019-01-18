import { Component, OnInit } from '@angular/core';
import {UserService} from './../user.service';
import { User } from './../model/user.model';


@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  constructor(private userservice:UserService) { }
  data:User[];
  ngOnInit() {
this.getuser();
  }
getuser(){
    this.userservice.get().subscribe((data)=>{
  this.data=data;
  console.log(this.data);
    });

  }
  
}
