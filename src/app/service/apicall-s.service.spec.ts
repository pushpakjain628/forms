import { TestBed } from '@angular/core/testing';

import { APICallSService } from './apicall-s.service';

describe('APICallSService', () => {
  let service: APICallSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APICallSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
