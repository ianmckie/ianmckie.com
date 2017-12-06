import { TestBed, inject } from '@angular/core/testing';

import { CacheInteceptorService } from './cache-inteceptor';

describe('CacheInteceptorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CacheInteceptorService]
    });
  });

  it('should be created', inject([CacheInteceptorService], (service: CacheInteceptorService) => {
    expect(service).toBeTruthy();
  }));
});
