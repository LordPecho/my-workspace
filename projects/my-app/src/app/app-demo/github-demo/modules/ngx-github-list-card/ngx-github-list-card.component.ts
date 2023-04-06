// ANGULAR
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

// RXJS
import { Subscription } from 'rxjs';

// API
import { NGXGithubUser } from '../../models/ngx-github-user.model';

@Component({
  selector: 'ngx-github-list-card',
  templateUrl: './ngx-github-list-card.component.html',
  styleUrls: ['./ngx-github-list-card.component.scss'],
})
export class NgxGithubListCardComponent implements OnInit {
  // VAR
  @Input() public data: any[] = [];
  @Input() public opened: number;
  @Input() public closed: number;
  @Input() public openIcon: string;
  @Input() public closeIcon: string;
  @Input() public userList: NGXGithubUser[] = [];

  public filteredUserList: NGXGithubUser[] = this.userList;
  public currentUserSelected: string[] = [];
  public isChecked: boolean = false;
  public state: string = 'open';

  public noClose: boolean = false;
  public noOpen: boolean = false;

  public number: number;
  public checkHover: boolean = false;

  // FORM CONTROLS
  public filterFormControl?: FormControl = new FormControl();

  public userForm: FormGroup = new FormBuilder().group({
    userId: [null],
  });
  // SUBSCRIPTION
  private subscription: Subscription = new Subscription();

  constructor() {}

  // INPUT FILTER
  public matched: any;
  ngOnInit(): void {
    console.log(this.userList);
    this.filteredUserList = this.userList;

    this.subscription.add(
      this.filterFormControl.valueChanges.subscribe((item) => {
        this.filteredUserList = this.userList.filter((user: NGXGithubUser) => {
          return user.login
            .toLowerCase()
            .includes(!!item ? item.toLowerCase() : '');
        });
      })
    );
  }

  public filterUser(event) {
    this.currentUserSelected = event;
    this.currentUserSelected = this.currentUserSelected;
    console.log(this.currentUserSelected);
  }
  public filter(user: string) {
    if (this.currentUserSelected.length === 0) {
      return true;
    } else {
      if (this.currentUserSelected.includes(user)) return true;
      else {
        return false;
      }
    }
  }

  public changeChecked() {
    this.isChecked = !this.isChecked;
  }
  public getState(issues: any) {
    if (issues.state === this.state) {
      return true;
    } else {
      return false;
    }
  }

  public changeState(state: string) {
    switch (state) {
      case 'open':
        this.state = 'open';
        if (this.opened === 0 && this.state === 'open') {
          this.noOpen = true;
        } else {
          this.noClose = false;
        }
        break;
      case 'close':
        this.state = 'close';
        if (this.closed === 0 && this.state === 'close') {
          this.noClose = true;
        } else {
          this.noClose = false;
        }
        break;
    }
  }

  public hoverOver(number: number) {
    this.checkHover = true;
    this.number = number;
    console.log(this.number);
  }
  public hoverLeave() {
    this.checkHover = false;
    this.number = null;
  }
  public userDetails(number: number) {
    if (this.number === number) {
      return true;
    } else {
      return false;
    }
  }
}
