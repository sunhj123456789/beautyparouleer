import { TestBed, async,inject,ComponentFixture  } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import{TestService} from './test.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
//import { Observable,of } from 'rxjs/Observable';
import {Observable } from 'rxjs';



describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;  
  let service: TestService;
  let component:AppComponent;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports:[HttpClientTestingModule],
      providers:[TestService]
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component=fixture.componentInstance;
    debugElement = fixture.debugElement;
    service = debugElement.injector.get(TestService);
  
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  

  it(`should have call the servie`, async(() => {
    let spy = spyOn(service, 'get').and.callThrough();  
    fixture.detectChanges();
    expect(spy).toHaveBeenCalled();
  }));

  it(`should load the data from the server`, async(() => {    
    let data={body: "quia et suscipit↵suscipit recusandae consequuntur expedita et cum↵reprehenderit molestiae ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto",
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    userId: 1
    };
    spyOn(service, 'get').and.returnValue(Observable.of(data));

    //spyOn(service, 'get').and.returnValue(Observable.from)  
    fixture.detectChanges();       
    console.log(component.post); 
    expect(component.post.id).toBe(1);     
     }));

     it(`should check the data to same`, async(() => {    
      let data={body: "quia et suscipit↵suscipit recusandae consequuntur expedita et cum↵reprehenderit molestiae ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto",
      id: 1,
      title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      userId: 1
      };
      spyOn(service, 'get').and.returnValue(Observable.of(data));  
      fixture.detectChanges();       
      console.log(component.post); 
      expect(component.post).toEqual(data);
       }));
  


 
  
  
  
});
