import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonPhotoGalleryComponent } from './json-photo-gallery.component';

describe('JsonPhotoGalleryComponent', () => {
  let component: JsonPhotoGalleryComponent;
  let fixture: ComponentFixture<JsonPhotoGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonPhotoGalleryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonPhotoGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
