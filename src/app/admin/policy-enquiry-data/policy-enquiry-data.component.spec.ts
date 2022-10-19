import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyEnquiryDataComponent } from './policy-enquiry-data.component';

describe('PolicyEnquiryDataComponent', () => {
  let component: PolicyEnquiryDataComponent;
  let fixture: ComponentFixture<PolicyEnquiryDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyEnquiryDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyEnquiryDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
