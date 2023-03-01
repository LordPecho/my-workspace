import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonAlbumDetailsComponent } from './json-album-details.component';

describe('JsonAlbumDetailsComponent', () => {
  let component: JsonAlbumDetailsComponent;
  let fixture: ComponentFixture<JsonAlbumDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonAlbumDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonAlbumDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
