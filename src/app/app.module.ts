import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
//import{HttpClient} from '@angular/common/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { ServerdetailComponent } from './serverdetail/serverdetail.component';
import { ServerdisplayComponent } from './serverdisplay/serverdisplay.component';
import { TestcolorDirective } from './testcolor.directive';
import { UnlessDirective } from './unless.directive';
import { AccountComponent } from './account/account.component';
import { NewaccountComponent } from './newaccount/newaccount.component';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServerComponent } from './servers/server/server.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import{Routes,RouterModule} from '@angular/router';
import { ServersService } from './servers/servers.service';
import{ApproutingModule }from '../app/app.routing.module';
import{MyinterceptorService} from './myinterceptor.service';




@NgModule({
  declarations: [
    AppComponent,
    UserdetailComponent,
    UserComponent,
    ServerdetailComponent,
    ServerdisplayComponent,
    TestcolorDirective,
    UnlessDirective,
    AccountComponent,
    NewaccountComponent,
    HomeComponent,
    ServersComponent,
    UsersComponent,
    EditServerComponent,
    ServerComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ApproutingModule,
    HttpClientModule
    
  ],
  providers: [ServersService,{
    provide: HTTP_INTERCEPTORS,
    useClass: MyinterceptorService,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
