import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonAlbumCrudPageComponent } from './json-album-crud-page.component';

describe('JsonAlbumCrudPageComponent', () => {
  let component: JsonAlbumCrudPageComponent;
  let fixture: ComponentFixture<JsonAlbumCrudPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonAlbumCrudPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonAlbumCrudPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
