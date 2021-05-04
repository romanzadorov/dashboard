import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SemiCircleDonutComponent } from './semi-circle-donut.component';

describe('SemiCircleDonutComponent', () => {
  let component: SemiCircleDonutComponent;
  let fixture: ComponentFixture<SemiCircleDonutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SemiCircleDonutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SemiCircleDonutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
