import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalibrationFullScreenComponent } from './calibration-full-screen.component';

describe('CalibrationFullScreenComponent', () => {
  let component: CalibrationFullScreenComponent;
  let fixture: ComponentFixture<CalibrationFullScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalibrationFullScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalibrationFullScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
