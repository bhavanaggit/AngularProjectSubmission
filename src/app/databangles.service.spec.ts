import { TestBed } from '@angular/core/testing';

import { DatabanglesService } from './databangles.service';

describe('DatabanglesService', () => {
  let service: DatabanglesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatabanglesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
