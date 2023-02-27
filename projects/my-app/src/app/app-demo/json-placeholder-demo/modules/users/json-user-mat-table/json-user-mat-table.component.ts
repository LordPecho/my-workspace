// ANGULAR
import { AfterViewInit, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router'
;
// RXJS
import { Subscription } from 'rxjs';

// API
import { JSONUser } from '../../../models/json-user.model';

// SERVICE
import { JsonUserService } from '../../../services/json-user.service';

//ANIMATIONS
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-json-user-mat-table',
  templateUrl: './json-user-mat-table.component.html',
  styleUrls: ['./json-user-mat-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class JsonUserMatTableComponent implements OnInit, OnDestroy {

  //VAR
  public list: JSONUser[] = [];
  dataSource: MatTableDataSource<JSONUser> = new MatTableDataSource;
  columnsToDisplay = ['id', 'name', 'username', 'email'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: JSONUser | null;


  //SUBSCRIPTION
  private subcription: Subscription = new Subscription()

  constructor(
    private userService: JsonUserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    localStorage.setItem('lastRoute', this.router.url);

    this.subcription.add(this.userService.getUsers()
    .subscribe((userDomList: JSONUser[])=>{
        this.list = userDomList;
        this.dataSource = new MatTableDataSource(userDomList);

    }));

  }

  public navigate(item: JSONUser){
   throw console.error('NOT IMPLIMENTED');

  }

  ngOnDestroy(): void {
  this.subcription.unsubscribe();
  }

}
