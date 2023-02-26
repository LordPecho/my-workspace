import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonUserOverviewPageComponent } from './json-user-overview-page.component';

describe('JsonUserOverviewPageComponent', () => {
  let component: JsonUserOverviewPageComponent;
  let fixture: ComponentFixture<JsonUserOverviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsonUserOverviewPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JsonUserOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
