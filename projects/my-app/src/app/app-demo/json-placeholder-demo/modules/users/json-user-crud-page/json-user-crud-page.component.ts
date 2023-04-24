// ANGULAR
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

// RxJS
import { Subscription } from 'rxjs';

// API
import { IJSONUser, JSONUser } from '../../../models/json-user.model';

// SERVICES
import { JsonUserService } from '../../../services/json-user.service';

@Component({
  selector: 'app-json-user-crud-page',
  templateUrl: './json-user-crud-page.component.html',
  styleUrls: ['./json-user-crud-page.component.scss'],
})
export class JsonUserCrudPageComponent implements OnInit {
  // VAR
  public userId: number;
  public data: JSONUser;
  public dataFormGroup: FormGroup = this.jsonUserService.formGroup();

  // SUBSCRIPTION
  private subscription: Subscription = new Subscription();

  constructor(
    private activatedRoute: ActivatedRoute,
    private jsonUserService: JsonUserService
  ) {}

  ngOnInit(): void {
    // READ PARAMS CHANGE
    this.subscription.add(
      this.activatedRoute.params.subscribe((params: Params) => {
        Object.entries(params).forEach((property: [string, any]) => {
          this[property[0]] = +property[1];
        });
        this.loadData();
      })
    );
  }

  private loadData() {
    this.subscription.add(
      this.jsonUserService
        .getUser(this.userId.toString())
        .subscribe((jsonUserDOM: IJSONUser) => {
          this.data = new JSONUser(jsonUserDOM);
          this.dataFormGroup.patchValue(this.data);
          console.log(this.data);
        })
    );
  }
}
