import { TestBed } from '@angular/core/testing';

import { PesticideResolverService } from './pesticide-resolver.service';

describe('PesticideResolverService', () => {
  let service: PesticideResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PesticideResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
