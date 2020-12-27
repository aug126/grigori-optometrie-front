import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageOptometrieFullScreenComponent } from './image-optometrie-full-screen.component';

describe('ImageOptometrieFullScreenComponent', () => {
  let component: ImageOptometrieFullScreenComponent;
  let fixture: ComponentFixture<ImageOptometrieFullScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageOptometrieFullScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageOptometrieFullScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
