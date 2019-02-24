import { Component, OnInit, 
  Input,ViewEncapsulation,ContentChild, ElementRef,AfterContentInit } from '@angular/core';


@Component({
  selector: 'app-serverdisplay',
  templateUrl: './serverdisplay.component.html',
  styleUrls: ['./serverdisplay.component.css']
  
  
  
})  
export class ServerdisplayComponent implements OnInit,AfterContentInit {

  @Input() serverEle:{type:string,serverName:string,content:string};
  @ContentChild('test')par:ElementRef;
  
  constructor() { }

  ngOnInit() {
    console.log(this.serverEle);
  }
  ngAfterContentInit(){
    console.log(this.par.nativeElement.textContent);
  }

}
