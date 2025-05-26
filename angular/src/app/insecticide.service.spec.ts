import { TestBed } from '@angular/core/testing';

import { InsecticideService } from './insecticide.service';

describe('InsecticideService', () => {
  let service: InsecticideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsecticideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
