import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BakingViewComponent } from './baking-view.component';

describe('BakingViewComponent', () => {
  let component: BakingViewComponent;
  let fixture: ComponentFixture<BakingViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BakingViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BakingViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
