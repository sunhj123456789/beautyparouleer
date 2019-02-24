import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Params} from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';
  allowEdit=false;

  constructor(private serversService: ServersService,
    private Route:ActivatedRoute) { }

  ngOnInit() {
    //this.Route.params.subscribe((params:Params)=>{
      //this.server = this.serversService.getServer(+params['id']);
      console.log(this.Route.snapshot.queryParams);
      console.log(this.Route.snapshot.fragment);
     this.Route.queryParams.subscribe((query:Params)=>{
         this.allowEdit=Number.parseInt(query['allowEdit'])===1?true:false;
         console.log(this.allowEdit);
         this.server=this.serversService.getServer(1);
         this.serverName = this.server.name;
         this.serverStatus = this.server.status;
   

    });

    //});
    
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
