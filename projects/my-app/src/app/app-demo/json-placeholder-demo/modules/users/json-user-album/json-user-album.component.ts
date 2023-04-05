// ANGULAR
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

// RxJS 6
import { map, Subscription, switchMap } from 'rxjs';

// API
import {
  IDataTableColumn,
  isEmptyObjectValues,
} from 'my-library';
import { JSONUser } from '../../../models/json-user.model';
import { JsonAlbumService } from '../../../services/json-album.service';
import { JSONAlbum, IJSONAlbum } from '../../../models/json-album.model';
import { MatTableDataSource } from '@angular/material/table';
import { JsonAlbumMatTableComponent } from '../../albums/json-album-mat-table/json-album-mat-table.component';

@Component({
  selector: 'app-json-user-album',
  templateUrl: './json-user-album.component.html',
  styleUrls: ['./json-user-album.component.scss'],
})
export class JsonUserAlbumComponent implements OnInit, OnDestroy, OnChanges {
  public queryParamsFormGroup: FormGroup = new FormBuilder().group({
    userId: [null],
  });

  // VAR ALBUM
  @Input() public userId: number;
  @Input() public user: JSONUser;

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
            return this.jsonAlbumService.getUserAlbums(queryParams).pipe(
              map((data: IJSONAlbum[]) => {
                const sanitizedData: JSONAlbum[] = [];
                data.forEach((item: IJSONAlbum) => {
                  if (item.userId == this.userId.toString())
                    sanitizedData.push(new JSONAlbum(item));
                });
                return sanitizedData;
              })
            );
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
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes['user'].currentValue) {
      this.userMap.set(this.userId, this.user);
      const query = this.activatedRoute?.snapshot?.queryParams['query'];
      this.queryParamsFormGroup.patchValue(!!query ? JSON.parse(query) : {});
    }
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
