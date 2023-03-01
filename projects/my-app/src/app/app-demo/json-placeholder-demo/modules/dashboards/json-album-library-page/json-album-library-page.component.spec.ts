import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonAlbumLibraryPageComponent } from './json-album-library-page.component';

describe('JsonAlbumLibraryPageComponent', () => {
  let component: JsonAlbumLibraryPageComponent;
  let fixture: ComponentFixture<JsonAlbumLibraryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonAlbumLibraryPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonAlbumLibraryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
