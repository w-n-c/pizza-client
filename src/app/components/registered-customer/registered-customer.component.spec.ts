import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredCustomerComponent } from './registered-customer.component';

describe('RegisteredCustomerComponent', () => {
  let component: RegisteredCustomerComponent;
  let fixture: ComponentFixture<RegisteredCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteredCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
