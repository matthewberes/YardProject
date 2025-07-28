import { TestBed } from '@angular/core/testing';

import { InsecticideResolverService } from './insecticide-resolver.service';

describe('InsecticideResolverService', () => {
  let service: InsecticideResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsecticideResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
