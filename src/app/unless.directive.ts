import { Directive,TemplateRef,ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  constructor(private templateRef:TemplateRef<any>,private vcr:ViewContainerRef) { }

@Input() set appUnless(value:boolean){
 console.log(value);
 if(value){
   this.vcr.createEmbeddedView(this.templateRef);
 }
 else{
   this.vcr.clear();
 }

}



}
