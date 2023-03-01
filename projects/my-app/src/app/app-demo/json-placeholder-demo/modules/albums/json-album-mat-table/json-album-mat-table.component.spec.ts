import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonAlbumMatTableComponent } from './json-album-mat-table.component';

describe('JsonAlbumMatTableComponent', () => {
  let component: JsonAlbumMatTableComponent;
  let fixture: ComponentFixture<JsonAlbumMatTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonAlbumMatTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonAlbumMatTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
