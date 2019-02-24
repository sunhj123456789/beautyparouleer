import{NgModule} from '@angular/core';
import{RouterModule,Route} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import{Routes} from '@angular/router';
import { ServersService } from './servers/servers.service';
import { AuthGuard } from './auth.guard';



const app:Routes=[
    {path:'',component:HomeComponent},
    {path:'users',component:UsersComponent,children:[
      {path:':id/:name',component:UserComponent}
    ]},
    
    {path:'server',component:ServersComponent,canActivate:[AuthGuard],children:[
      {path:':id',component:ServerComponent},
      {path:':id/:Edit',component:EditServerComponent}
    ]},
    
    
  ];


@NgModule({
    imports:[RouterModule.forRoot(app)],
    exports:[RouterModule]
})

  
export class ApproutingModule{}