import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyInsuranceComponent } from './why-insurance.component';

describe('WhyInsuranceComponent', () => {
  let component: WhyInsuranceComponent;
  let fixture: ComponentFixture<WhyInsuranceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyInsuranceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyInsuranceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
