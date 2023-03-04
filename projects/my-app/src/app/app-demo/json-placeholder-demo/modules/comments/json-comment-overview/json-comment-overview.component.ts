// ANGULAR
import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  SimpleChanges,
} from '@angular/core';

// RXJS
import { Subscription } from 'rxjs';

//SERVICE
import { JsonCommentService } from '../../../services/json-comment.service';

//API
import { JSONComment } from '../../../models/json-comment.model';

@Component({
  selector: 'app-json-comment-overview',
  templateUrl: './json-comment-overview.component.html',
  styleUrls: ['./json-comment-overview.component.scss']
})
export class JsonCommentOverviewComponent implements OnDestroy,OnChanges {
  // VAR
  @Input() public postId: number;
  @Input() public avatarUrl: string;
  public comments: JSONComment[] = [];

  // SUBSCRIPTION
  private subscription: Subscription = new Subscription();

  constructor(private jsonCommentService: JsonCommentService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (!!changes['postId'].currentValue) {
      this.subscription.add(
        this.jsonCommentService
          .getComments()
          .subscribe((comments: JSONComment[]) => {
            this.comments = [];
            comments.forEach((comment: JSONComment) => {
              const sanitizedCommentJson = new JSONComment(comment);
              if (comment.postId == this.postId)
                this.comments.push(sanitizedCommentJson);
            });
          })
      );
    }
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
