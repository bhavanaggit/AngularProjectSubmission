import { TestBed } from '@angular/core/testing';

import { DatahandjwlService } from './datahandjwl.service';

describe('DatahandjwlService', () => {
  let service: DatahandjwlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatahandjwlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
