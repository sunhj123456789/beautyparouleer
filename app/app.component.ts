import { Component,OnInit } from '@angular/core';
import{TestService} from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  post:any;
  constructor(private service:TestService) {}

  ngOnInit(){
    this.service.get().subscribe(post=>{
      this.post=post;
      console.log(this.post);
    })
  
}

}