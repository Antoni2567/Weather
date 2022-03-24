import { TestBed } from '@angular/core/testing';

import { GetcurrentdayService } from './getcurrentday.service';

describe('GetcurrentdayService', () => {
  let service: GetcurrentdayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetcurrentdayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
