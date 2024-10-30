import { TestBed } from '@angular/core/testing';

import { SipwiseLibService } from './sipwise-lib.service';

describe('SipwiseLibService', () => {
  let service: SipwiseLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SipwiseLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
