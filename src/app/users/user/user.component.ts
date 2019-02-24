import { Component, OnInit, OnDestroy } from '@angular/core';
import{ActivatedRoute,Params} from '@angular/router';
import{Subscription} from 'rxjs';
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,OnDestroy {
  user: {id: number, name: string};
  users = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Chris'
    }
  ];
  paramss:Subscription;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
  //const id=+this.route.snapshot.params['id'];
  //console.log(id);
   
   //console.log(users);
   //this.paramss=
    this.route.params.subscribe((para:Params)=>{
      console.log(para.id);
    this.user=this.getuser(para.id);
   });
   //this.server = this.serversService.getServer(+params['id']);         
    
   //})
  //console.log(this.user.id);

  //
      
      
    

      //this.user.name=parmas['name'];
    //  console.log(this.user.id,this.user.name);
    //});

  }

 getuser(id){
 return this.users.find(s=>s.id==id);
    
  
 }
  

ngOnDestroy(){
  //this.params.unsubscribe();
}

}
