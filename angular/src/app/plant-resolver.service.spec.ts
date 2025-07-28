import { TestBed } from '@angular/core/testing';

import { PlantResolverService } from './plant-resolver.service';

describe('PlantResolverService', () => {
  let service: PlantResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
