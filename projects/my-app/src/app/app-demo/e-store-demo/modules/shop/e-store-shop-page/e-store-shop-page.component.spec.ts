import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EStoreShopPageComponent } from './e-store-shop-page.component';

describe('EStoreShopPageComponent', () => {
  let component: EStoreShopPageComponent;
  let fixture: ComponentFixture<EStoreShopPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EStoreShopPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EStoreShopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
