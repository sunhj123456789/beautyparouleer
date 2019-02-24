import { Directive, ElementRef,OnInit,Renderer2, HostListener, HostBinding,Input } from '@angular/core';

@Directive({
  selector: '[appTestcolor]'
})
export class TestcolorDirective implements OnInit {

  constructor(private eleRef:ElementRef,private render:Renderer2) { }
  @Input('appTestcolor') defaultColor:string;
  @Input() highLighColor:string;

   
  ngOnInit(){    //this.eleRef.nativeElement.style.color='green';
    this.render.setStyle(this.eleRef.nativeElement,'color','green');
    this.render.setStyle(this.eleRef.nativeElement,'border','2px solid green');
  }
 
 @HostBinding('style.backgroundColor')bgcolor=this.defaultColor;
  @HostListener('mouseenter')mouseenter(event:Event){
    //this.render.setStyle(this.eleRef.nativeElement,'font-size','40px');
    this.bgcolor=this.highLighColor;
  }

  @HostListener('mouseleave')mouseleave(event:Event){
    //this.render.setStyle(this.eleRef.nativeElement,'font-size','20px');
    this.bgcolor=this.defaultColor;
  }


}
