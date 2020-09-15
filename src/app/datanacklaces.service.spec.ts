import { TestBed } from '@angular/core/testing';

import { DatanacklacesService } from './datanacklaces.service';

describe('DatanacklacesService', () => {
  let service: DatanacklacesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatanacklacesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
