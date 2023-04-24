import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EStoreProductDetailsPageComponent } from './e-store-product-details-page.component';

describe('EStoreProductDetailsPageComponent', () => {
  let component: EStoreProductDetailsPageComponent;
  let fixture: ComponentFixture<EStoreProductDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EStoreProductDetailsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EStoreProductDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
