import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';


@Injectable()
export class TestService {

  constructor(private _http:HttpClient) { }
  get(){
    return this._http.get('http://jsonplaceholder.typicode.com/posts/1');
  }

}
