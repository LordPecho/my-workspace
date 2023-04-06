import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EStoreLayoutComponent } from './e-store-layout.component';

describe('EStoreLayoutComponent', () => {
  let component: EStoreLayoutComponent;
  let fixture: ComponentFixture<EStoreLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EStoreLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EStoreLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
