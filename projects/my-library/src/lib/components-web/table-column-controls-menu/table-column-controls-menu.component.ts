// ANGULAR
import { Component, Input } from '@angular/core';
import { AngularMaterialIconCodeENUM } from '../../assests';
import { IDataTableColumn } from '../../models-core';

@Component({
  selector: 'lib-table-column-controls-menu',
  templateUrl: './table-column-controls-menu.component.html'
})
export class TableColumnControlsMenuComponent {
  @Input() public menuIconCode: AngularMaterialIconCodeENUM = AngularMaterialIconCodeENUM.TABLE_CHART;
  @Input() public columnControls: IDataTableColumn[] = [];

  public getColumnHeaderLableI18nKey(property: string): string {
    return (this.columnControls.find((tableColumn: IDataTableColumn) => tableColumn.property === property) as IDataTableColumn).headerTranslateKey;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
