import { TestBed } from '@angular/core/testing';

import { EnquiryToAdminService } from './enquiry-to-admin.service';

describe('EnquiryToAdminService', () => {
  let service: EnquiryToAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnquiryToAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
