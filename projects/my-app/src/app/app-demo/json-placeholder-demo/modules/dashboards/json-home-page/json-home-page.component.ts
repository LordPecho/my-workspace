// ANGULAR
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';

// RxJS
import { forkJoin, Subscription, switchMap } from 'rxjs';

// SERVICES
import { JsonPostService } from '../../../services/json-post.service';
import { JsonUserService } from '../../../services/json-user.service';

// API
import { isEmptyObjectValues, updateObject } from 'my-library';
import { JSONUser } from '../../../models/json-user.model';
import { JSONPost } from '../../../models/json-post.model';

class DashboardHomeJSON {
  user: JSONUser = {} as any;
  post: JSONPost = {} as any;

  setUser(user: JSONUser) {
    if (user && user.id === this.post.userId) {
      updateObject(this.user, user);
    }
  }
  setPost(post: JSONPost) {
    updateObject(this.post, post);
  }
}
@Component({
  selector: 'app-json-home-page',
  templateUrl: './json-home-page.component.html',
  styleUrls: ['./json-home-page.component.scss']
})
export class JsonHomePageComponent implements OnInit, OnDestroy {
  // VAR
  public data: DashboardHomeJSON[] = [];
  public queryParamsFormGroup: FormGroup = new FormBuilder().group({
    userId: [null],
  });

  public yPostion: number;
  private innerHeight: number;
  private maxYPostion: number;
  public isUserSelected: boolean = false;

  public loadedPostId: number = 5;

  // VAR DEPENDENCY
  public userMap: Map<number, JSONUser> = new Map();
  public get users(): JSONUser[] {
    return Array.from(this.userMap.values());
  }

  // FORM CONTROLS
  public filterFormControl?: FormControl = new FormControl();

  // SUBSCRIPTION
  private subscription: Subscription = new Subscription();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private jsonUserService: JsonUserService,
    private jsonPostService: JsonPostService
  ) {}

  ngOnInit(): void {
    this.getHeight();

    this.subscription.add(
      this.filterFormControl.valueChanges.subscribe((value) => {
        console.log(value);
      })
    );

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
            // console.log(isEmptyFilter);
            const sanitizedQueryParams: any = {
              ...this.activatedRoute.snapshot.queryParams,
              query: !isEmpty ? JSON.stringify(queryParams) : null,
            };
            // console.log(sanitizedQueryParams);
            this.router.navigate([], { queryParams: sanitizedQueryParams });
            return this.jsonPostService.getPosts(queryParams);
          })
        )
        .subscribe((posts: JSONPost[]) => {
          this.data = [];
          posts.forEach((post: JSONPost) => {
            const sanitizedPost = new DashboardHomeJSON();
            sanitizedPost.setPost(post);
            this.data.push(sanitizedPost);
          });
          this.setUsers();
          // console.log(this.data);
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

  private setUsers(): void {
    this.data.forEach((item: DashboardHomeJSON) => {
      item.setUser(this.userMap.get(item.post.userId));
    });
  }

  @HostListener('window:scroll') onScroll(event: Event): void {
    this.yPostion = this.getYPosition(event);
    console.log(this.yPostion);
    if (this.yPostion >= this.maxYPostion) {
      console.log(this.yPostion);
      this.maxYPostion += this.innerHeight+500;
      this.loadedPostId += 5;
    }
  }

  public isUser() {
    this.isUserSelected = true;
  }

  private getYPosition(event: Event): number {
    return (event.target as Element).scrollTop;
  }
  private getHeight() {
    this.innerHeight = window.innerHeight;
    this.maxYPostion = this.innerHeight-100;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
