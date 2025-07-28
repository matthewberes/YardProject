import { TestBed } from '@angular/core/testing';

import { InsectResolverService } from './insect-resolver.service';

describe('InsectResolverService', () => {
  let service: InsectResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InsectResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
