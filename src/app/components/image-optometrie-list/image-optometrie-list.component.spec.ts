import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageOptometrieListComponent } from './image-optometrie-list.component';

describe('ImageOptometrieListComponent', () => {
  let component: ImageOptometrieListComponent;
  let fixture: ComponentFixture<ImageOptometrieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageOptometrieListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageOptometrieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
