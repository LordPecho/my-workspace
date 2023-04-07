import { TestBed } from '@angular/core/testing';

import { EStoreProductService } from './e-store-product.service';

describe('EStoreProductService', () => {
  let service: EStoreProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EStoreProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
