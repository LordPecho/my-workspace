import { TestBed } from '@angular/core/testing';

import { EStoreUserService } from './e-store-user.service';

describe('EStoreUserService', () => {
  let service: EStoreUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EStoreUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
