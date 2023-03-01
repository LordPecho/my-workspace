// ANGULAR
import { FormControl } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort, SortDirection } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

// API
import { TranslateKeyENUM } from "../assests";
import { IEntityBaseDOM } from "./entity-dom.model";
import { IEvent } from './event.model';

export interface IDataTableColumn {
    property: string;
    fixVisible: boolean;
    visible: boolean;
    headerTranslateKey: TranslateKeyENUM;
}


// COMPONENT AS LISTS/TABLES/PAGED; SYNC/ASYNC
export interface IDataTableColumn {
  // DTO field
  property: string;
  // fixVisible - change if show in column checkbox menu - visible then [check] value
  fixVisible: boolean;
  visible: boolean;
  headerTranslateKey: TranslateKeyENUM;
}

export interface IPageResult<T = IEntityBaseDOM> {
  data: T[];
}

export interface IComponentMatTable<T = IEntityBaseDOM> {
  data?: T[];
  dataPageResult?: IPageResult<T>;
  dataSource: MatTableDataSource<T>;
  tableColumns: IDataTableColumn[];
  displayedColumns: string[];
  resultsLength?: number;
  sort: MatSort;
  paginator: MatPaginator;
  filterFormControl?: FormControl;
  sortActive?: string;
  sortMode?: SortDirection;
  isMessageOverlay?: boolean;
  isNoDataMessage?: boolean;
  childEventEmitter?($event: IEvent): void;
  refreshDataEvent?(): void;
  filterEvent?($event: any): void;
  searchQueryEvent?(term: string): void;
  matSortEvent?($event: Sort): void;
  matPageEvent?($event: PageEvent): void;
  matDialogEvent?($event: any): Promise<void>;
}
