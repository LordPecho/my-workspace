// ANGULAR
import { Component, OnDestroy, OnInit } from '@angular/core';

// RxJS
import { Subscription } from 'rxjs';

// API
import { EStoreUserService } from '../../../services/e-store-user.service';
import { EStoreUser } from '../../../models/e-store-user.model';

@Component({
  selector: 'app-e-store-user-list',
  templateUrl: './e-store-user-list.component.html',
  styleUrls: ['./e-store-user-list.component.scss'],
})
export class EStoreUserListComponent implements OnInit, OnDestroy {
  // VAR
  public data: EStoreUser[] = [];

  constructor(private userService: EStoreUserService) {}

  // SUBSCRIPTIONS
  private subscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.subscription.add(
      this.userService.getUsers().subscribe((userDomList: EStoreUser[]) => {
        this.data = userDomList;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
