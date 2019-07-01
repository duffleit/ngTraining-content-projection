import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalRotatorComponent } from './horizontal-rotator.component';

describe('RotatorComponent', () => {
  let component: HorizontalRotatorComponent;
  let fixture: ComponentFixture<HorizontalRotatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalRotatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalRotatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
