import { TestBed } from '@angular/core/testing';

import { GetcoordService } from './getcoord.service';

describe('GetcoordService', () => {
  let service: GetcoordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetcoordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
