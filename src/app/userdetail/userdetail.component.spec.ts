import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdetailComponent } from './userdetail.component';
import { UserService } from '../user.service';
import{User} from '../model/user.model';
import{Observable} from 'rxjs';
import 'rxjs/add/observable/of';
import{of} from 'rxjs';


describe('UserdetailComponent', () => {
  let component: UserdetailComponent;
  let fixture: ComponentFixture<UserdetailComponent>;
  let dataservice;
  let user:User[];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdetailComponent ],
      providers:[UserService]
      
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdetailComponent);
    component = fixture.componentInstance;
    dataservice=fixture.debugElement.injector.get(UserService);
     user=[
      {
        name:'sundar',  
        gender:'male',
        department:'accounting'
     },
     {
      name:'ramesh',  
      gender:'male',
      department:'science'
   }];
  let spy = spyOn(userservice, 'get')
   .and.returnValue(Observable.of(user));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should show the dashboard after component initialized', () => {
  let spy = spyOn(userservice, 'get').and.returnValue(Observable.of(user));
  });

});
