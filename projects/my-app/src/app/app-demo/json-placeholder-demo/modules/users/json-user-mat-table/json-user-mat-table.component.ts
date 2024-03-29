// ANGULAR
import {
  AfterViewInit,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
// RXJS
import { Subscription } from 'rxjs';

// API
import { JSONUser } from '../../../models/json-user.model';

//ANIMATIONS
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-json-user-mat-table',
  templateUrl: './json-user-mat-table.component.html',
  styleUrls: ['./json-user-mat-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class JsonUserMatTableComponent implements OnInit {
  //VAR
  @Input() public avatarUrl: string;
  @Input() public data: JSONUser[] = [];
  @Input() dataSource: MatTableDataSource<JSONUser> = new MatTableDataSource();
  columnsToDisplay = ['id', 'name', 'username', 'email'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: JSONUser | null;

  private defaultAvatarUrl: string = 'assets/img/demo/avatars/noavatar.png';

  public get avatarDisplay() {
    return !!this.avatarUrl ? this.avatarUrl : this.defaultAvatarUrl;
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}

  public navigate(item: JSONUser) {
    this.router.navigate(item.routerLink);
  }
}
