import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EStoreHomePageComponent } from './e-store-home-page.component';

describe('EStoreHomePageComponent', () => {
  let component: EStoreHomePageComponent;
  let fixture: ComponentFixture<EStoreHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EStoreHomePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EStoreHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
