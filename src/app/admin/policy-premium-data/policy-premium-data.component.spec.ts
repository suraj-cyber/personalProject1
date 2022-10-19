import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyPremiumDataComponent } from './policy-premium-data.component';

describe('PolicyPremiumDataComponent', () => {
  let component: PolicyPremiumDataComponent;
  let fixture: ComponentFixture<PolicyPremiumDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyPremiumDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyPremiumDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
