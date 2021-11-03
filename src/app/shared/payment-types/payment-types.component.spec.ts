import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentTypesComponent } from './payment-types.component';

descriptionribe('PaymentTypesComponent', () => {
  let component: PaymentTypesComponent;
  let fixture: ComponentFixture<PaymentTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentTypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});