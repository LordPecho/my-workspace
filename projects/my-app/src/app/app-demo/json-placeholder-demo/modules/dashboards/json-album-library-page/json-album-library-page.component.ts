// ANGULAR
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

// RxJS 6
import { forkJoin, Subscription, switchMap } from 'rxjs';

// API
import {
  IDataTableColumn,
  IEvent,
  isEmptyObjectValues,
  EventTypeENUM,
  updateObject,
} from 'my-library';
import { JsonUserService } from '../../../services/json-user.service';
import { JSONUser } from '../../../models/json-user.model';
import { JsonAlbumService } from '../../../services/json-album.service';
import { JSONAlbum } from '../../../models/json-album.model';
import { MatTableDataSource } from '@angular/material/table';
import { JsonAlbumMatTableComponent } from '../../albums/json-album-mat-table/json-album-mat-table.component';

@Component({
  selector: 'app-json-album-library-page',
  templateUrl: './json-album-library-page.component.html',
  styleUrls: ['./json-album-library-page.component.scss'],
})
export class JsonAlbumLibraryPageComponent implements OnInit, OnDestroy {
  // VAR
  public queryParamsFormGroup: FormGroup = new FormBuilder().group({
    userId: [null],
  });

  // VAR ALBUM
  // DATA TABLE
  public data?: JSONAlbum[] = [];
  public dataSource: MatTableDataSource<JSONAlbum> = new MatTableDataSource([]);
  public tableColumns: IDataTableColumn[] =
    this.jsonAlbumService.dataTableColumns();
  @ViewChild('jsonAlbumMatTable')
  public jsonAlbumMatTable: JsonAlbumMatTableComponent;

  // FORM CONTROLS
  public filterFormControl?: FormControl = new FormControl();

  // VAR DEPENDENCY
  public userMap: Map<number, JSONUser> = new Map();
  public get users(): JSONUser[] {
    return Array.from(this.userMap.values());
  }

  // SUBSCRIPTION
  private subscription: Subscription = new Subscription();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private jsonUserService: JsonUserService,
    private jsonAlbumService: JsonAlbumService
  ) {}

  ngOnInit(): void {
    // PARAMS LISTENER - todo UI changes
    this.subscription.add(
      this.activatedRoute.queryParams.subscribe((queryParams: Params) => {
        // console.log(queryParams);
        this.queryParamsFormGroup.patchValue(queryParams, { emitEvent: false });
      })
    );

    // QUERY PARAM LISTENER
    this.subscription.add(
      this.queryParamsFormGroup.valueChanges
        .pipe(
          switchMap((queryParams: any) => {
            // console.log(queryParams);
            const isEmpty: boolean = isEmptyObjectValues(queryParams);
            // console.log(isEmpty);
            const sanitizedQueryParams: any = {
              ...this.activatedRoute.snapshot.queryParams,
              query: !isEmpty ? JSON.stringify(queryParams) : null,
            };
            // console.log(sanitizedQueryParams);
            this.router.navigate([], { queryParams: sanitizedQueryParams });
            return this.jsonAlbumService.getAlbums(queryParams);
          })
        )
        .subscribe((albums: JSONAlbum[]) => {
          // console.log(albums);
          this.data = albums;
          this.dataSource = new MatTableDataSource(albums);
          this.dataSource.paginator = this.jsonAlbumMatTable.paginator;
          this.dataSource.sort = this.jsonAlbumMatTable.sort;
        })
    );

    // INITIAL LOAD
    this.subscription.add(
      forkJoin([this.jsonUserService.getUsers()]).subscribe((data: any[]) => {
        // FIRST CALL
        const users: JSONUser[] = data[0];
        users.forEach((user: JSONUser) => {
          this.userMap.set(user.id, user);
        });
        const query = this.activatedRoute?.snapshot?.queryParams['query'];
        this.queryParamsFormGroup.patchValue(!!query ? JSON.parse(query) : {});
      })
    );
  }

  public childEventEmitter($event: IEvent): void {
    switch ($event.type) {
      case EventTypeENUM.NAVIGATE:
        return;
      default:
        return;
    }
  }

  nav(item: any) {
    this.router.navigate(item);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
