// ANGULAR
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';

// ANGULAR MATERIAL
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort, SortDirection } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

// TRANSLATE
import { TranslateService } from '@ngx-translate/core';

// RxJS
import { Subscription } from 'rxjs';

// SERVICES
import { JsonAlbumService } from '../../../services/json-album.service';

// API
import {
  IComponentMatTable,
  IDataTableColumn,
  IEvent,
  EventTypeENUM,
  AngularMaterialIconCodeENUM,
} from 'my-library';
import { JSONAlbum } from '../../../models/json-album.model';
@Component({
  selector: 'app-json-album-mat-table',
  templateUrl: './json-album-mat-table.component.html',
  styleUrls: ['./json-album-mat-table.component.scss']
})
export class JsonAlbumMatTableComponent implements OnInit, OnDestroy, AfterViewInit, IComponentMatTable<JSONAlbum> {
  // ENUM
  public get ngxIconCodeENUM(): typeof AngularMaterialIconCodeENUM {
    return AngularMaterialIconCodeENUM;
  }
  // VAR
  // DATA TABLE
  @Input() public data?: JSONAlbum[];
  @Input() public dataSource: MatTableDataSource<JSONAlbum> = new MatTableDataSource([]);
  @Input() public tableColumns: IDataTableColumn[] =
    this.jsonAlbumService.dataTableColumns();
  public get displayedColumns(): string[] {
    return this.tableColumns
      .filter((column) => column.visible)
      .map((column) => column.property);
  }
  public get columnControls(): IDataTableColumn[] {
    return this.tableColumns.filter((column) => !column.fixVisible);
  }
  public get resultsLength(): number {
    return this.dataSource.data.length as number;
  }
  public getColumnHeaderLableI18nKey(property: string): string {
    return (
      this.tableColumns.find(
        (tableColumn: IDataTableColumn) => tableColumn.property === property
      ) as IDataTableColumn
    ).headerTranslateKey;
  }

  // FORM CONTROLS
  @Input() public filterFormControl?: FormControl = new FormControl();

  // DOM
  sortActive?: string;
  sortMode?: SortDirection;
  isMessageOverlay: boolean;
  isNoDataMessage: boolean;

  // DOM
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
   // OUTPUT
   @Output() public eventEmitter: EventEmitter<IEvent> = new EventEmitter();

  // SUBSCRIPTIONS
  private subscription: Subscription = new Subscription();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private jsonAlbumService: JsonAlbumService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.subscription.add(
      this.filterFormControl.valueChanges.subscribe((value) => {
        this.filterEvent(value);
      })
    );
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  drop(event: CdkDragDrop<IDataTableColumn[]>) {
    moveItemInArray(this.tableColumns, event.previousIndex, event.currentIndex);
  }

  public navigate(data: JSONAlbum) {
    this.router.navigate([data.id], { relativeTo: this.activatedRoute });
    this.eventEmitter.emit({payload: data, type: EventTypeENUM.NAVIGATE});
  }

  filterEvent?(value: string): void {
    console.log(value);
    if (!!value) {
      this.dataSource.data = this.data.filter((item: JSONAlbum) => {
        return (item.title as string)
          .toLowerCase()
          .includes(value.toLocaleLowerCase());
      });
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    } else {
      this.dataSource = new MatTableDataSource(this.data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  }

  searchQueryEvent?(term: string): void {
    throw new Error('Method not implemented.');
  }
  matSortEvent?($event: Sort): void {
    throw new Error('Method not implemented.');
  }
  matPageEvent?($event: PageEvent): void {
    console.log($event);
  }
  matDialogEvent?($event: any): Promise<void> {
    throw new Error('Method not implemented.');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
