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
} from '@angular/core';

// RxJS 6
import { forkJoin, Subscription, switchMap } from 'rxjs';

// API
import { JsonUserService } from '../../../services/json-user.service';
import { JsonTodoService } from '../../../services/json-todo.service';
import { IJSONUser, JSONUser } from '../../../models/json-user.model';
import { JSONTodo } from '../../../models/json-todo.model';
import { isEmptyObjectValues } from 'my-library';

class ManagerData extends JSONUser {
  todo: JSONTodo[] = [];
  done: JSONTodo[] = [];

  constructor(data: IJSONUser) {
    super(data);
  }

  addTodo(todo: JSONTodo) {
    if (todo.completed) {
      this.done.push(todo);
    } else {
      this.todo.push(todo);
    }
  }
}
@Component({
  selector: 'app-json-user-todos',
  templateUrl: './json-user-todos.component.html',
  styleUrls: ['./json-user-todos.component.scss']
})
export class JsonUserTodosComponent {
  // VAR
  public queryParamsFormGroup: FormGroup = new FormBuilder().group({
    userId: [null],
  });
  // FORM CONTROLS
  public filterFormControl?: FormControl = new FormControl();

  // VAR DEPENDENCY
  @Input() public userId: number;
  @Input() user: JSONUser;
  public userMap: Map<number, ManagerData> = new Map();
  public get data(): ManagerData[] {
    return Array.from(this.userMap.values());
  }

  // SUBSCRIPTION
  private subscription: Subscription = new Subscription();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private jsonUserService: JsonUserService,
    private jsonTodoService: JsonTodoService
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
            console.log(queryParams);
            const isEmpty: boolean = isEmptyObjectValues(queryParams);
            console.log(isEmpty);
            const sanitizedQueryParams: any = {
              ...this.activatedRoute.snapshot.queryParams,
              query: !isEmpty ? JSON.stringify(queryParams) : null,
            };
            // console.log(sanitizedQueryParams);
            this.router.navigate([], { queryParams: sanitizedQueryParams });
            return this.jsonTodoService.getTodos(queryParams);
          })
        )
        .subscribe((todos: JSONTodo[]) => {
          // console.log(todos);
          todos.forEach((todo) => {
            if (todo.userId === this.userId)
              this.userMap.get(todo.userId).addTodo(todo);
          });
        })
    );
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes['user'].currentValue) {
      this.userMap.set(this.userId, new ManagerData(this.user));

      const query = this.activatedRoute?.snapshot?.queryParams['query'];
      this.queryParamsFormGroup.patchValue(!!query ? JSON.parse(query) : {});
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
