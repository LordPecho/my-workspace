import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EStoreUserListComponent } from './e-store-user-list.component';

describe('EStoreUserListComponent', () => {
  let component: EStoreUserListComponent;
  let fixture: ComponentFixture<EStoreUserListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EStoreUserListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EStoreUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
