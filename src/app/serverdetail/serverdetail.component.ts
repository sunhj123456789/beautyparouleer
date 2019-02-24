import { Component, OnInit,Output,EventEmitter, ViewChild,ElementRef } from '@angular/core';


@Component({
  selector: 'app-serverdetail',
  templateUrl: './serverdetail.component.html',
  styleUrls: ['./serverdetail.component.css']
})
export class ServerdetailComponent implements OnInit {

    @Output() addserver=new EventEmitter<{serverName:string,content:string}>();
    @Output() blueserver=new EventEmitter<{serverName:string,content:string}>();
    //@ViewChild('content')content:ElementRef;
    content='';
    servername='';
    
  constructor() { }

  ngOnInit() {
  }
  addServer(){
    //console.log(this.servername,this.content);
    this.addserver.emit({serverName:this.servername,content:this.content});
  }
  
  blueServer(){
//console.log(data.value)
  //console.log(this.content.nativeElement.value);
  //this.content.nativeElement.value='sundar';
    this.blueserver.emit({serverName:this.servername,content:this.content});
  }  

}
