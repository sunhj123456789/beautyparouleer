import { TestBed, inject } from '@angular/core/testing';
import { TestService } from './test.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
describe('TestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestService],
      imports:[HttpClientTestingModule]
    });
  });

  it('should be created', inject([TestService], (service: TestService) => {
    expect(service).toBeTruthy();
  }));
});
