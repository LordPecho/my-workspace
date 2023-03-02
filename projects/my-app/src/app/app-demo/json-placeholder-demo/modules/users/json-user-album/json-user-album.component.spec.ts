import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonUserAlbumComponent } from './json-user-album.component';

describe('JsonUserAlbumComponent', () => {
  let component: JsonUserAlbumComponent;
  let fixture: ComponentFixture<JsonUserAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonUserAlbumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonUserAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
