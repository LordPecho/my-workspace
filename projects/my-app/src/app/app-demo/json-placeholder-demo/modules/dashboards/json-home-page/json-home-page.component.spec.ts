import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonHomePageComponent } from './json-home-page.component';

describe('JsonHomePageComponent', () => {
  let component: JsonHomePageComponent;
  let fixture: ComponentFixture<JsonHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
