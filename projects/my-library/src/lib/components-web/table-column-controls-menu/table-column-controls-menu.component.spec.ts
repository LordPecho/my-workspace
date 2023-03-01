import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableColumnControlsMenuComponent } from './table-column-controls-menu.component';

describe('TableColumnControlsMenuComponent', () => {
  let component: TableColumnControlsMenuComponent;
  let fixture: ComponentFixture<TableColumnControlsMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableColumnControlsMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableColumnControlsMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
