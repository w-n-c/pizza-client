import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparingViewComponent } from './preparing-view.component';

describe('PreparingViewComponent', () => {
  let component: PreparingViewComponent;
  let fixture: ComponentFixture<PreparingViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreparingViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
