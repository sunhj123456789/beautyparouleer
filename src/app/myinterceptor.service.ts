import { Injectable } from '@angular/core';
import{HttpInterceptor,HttpClient,HttpHeaders,HttpRequest,HttpResponse, HttpHandler, HttpEvent, HttpEventType} from '@angular/common/http';
import { Observable } from 'rxjs';
import{tap} from 'rxjs/operators';
import { error } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class MyinterceptorService implements HttpInterceptor {

  constructor(private http:HttpClient) { }

intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>{

const update=req.clone({
  headers:req.headers.set("header","some dummydata");
});

return next.handle(req).pipe(tap(event=>{
if(event instanceof HttpResponse){
  console.log("äpicallsucess");
}},
error=>{
  if(event instanceof HttpResponse){
    console.log("apicall failure");
  }
    )
}


}));

}

}
