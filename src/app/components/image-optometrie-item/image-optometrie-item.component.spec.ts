import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageOptometrieItemComponent } from './image-optometrie-item.component';

describe('ImageOptometrieItemComponent', () => {
  let component: ImageOptometrieItemComponent;
  let fixture: ComponentFixture<ImageOptometrieItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageOptometrieItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageOptometrieItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
