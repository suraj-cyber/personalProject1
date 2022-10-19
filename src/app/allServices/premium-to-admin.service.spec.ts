import { TestBed } from '@angular/core/testing';

import { PremiumToAdminService } from './premium-to-admin.service';

describe('PremiumToAdminService', () => {
  let service: PremiumToAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PremiumToAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
