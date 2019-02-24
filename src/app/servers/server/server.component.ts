import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Params, Router} from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService,private Route:ActivatedRoute,
    private Router:Router) { }

  ngOnInit() {
    const id=this.Route.snapshot.params['id'];
    //this.server = this.serversService.getServer(id);   
    //console.log(this.server);
   
    this.Route.params.subscribe((params:Params)=>{
      this.server = this.serversService.getServer(+params['id']);         
      //console.log(this.server);
   });

   
    
  }
  EditServer(){
    //this.Route.params.subscribe((params:Params)=>{
      this.Router.navigate(['Edit'],{relativeTo:this.Route,queryParamsHandling:'preserve'}); 
   //});

    
    }
 

}
