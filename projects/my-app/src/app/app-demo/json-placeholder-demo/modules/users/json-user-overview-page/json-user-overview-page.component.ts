// ANGULAR
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

// RXJS
import { Subscription } from 'rxjs';

// SERVICE
import { JsonUserService } from '../../../services/json-user.service';

// API
import { JSONUser } from '../../../models/json-user.model';


@Component({
  selector: 'app-json-user-overview-page',
  templateUrl: './json-user-overview-page.component.html',
  styleUrls: ['./json-user-overview-page.component.scss']
})
export class JsonUserOverviewPageComponent {
    //VAR
    public data: JSONUser[] = [];
    dataSource: MatTableDataSource<JSONUser> = new MatTableDataSource;

  constructor(
    private userService: JsonUserService,
  ) { }


  //SUBSCRIPTION
  private subcription: Subscription = new Subscription()

  ngOnInit(): void {

    this.subcription.add(this.userService.getUsers()
    .subscribe((userDomList: JSONUser[])=>{
        this.data = userDomList;
        this.dataSource = new MatTableDataSource(userDomList);

    }));

  }
}
