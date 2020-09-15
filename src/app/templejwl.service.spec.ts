import { TestBed } from '@angular/core/testing';

import { TemplejwlService } from './templejwl.service';

describe('TemplejwlService', () => {
  let service: TemplejwlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplejwlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
